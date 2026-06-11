// src/admin/AdminDashboard.jsx
import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import {
  collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { auth, db, storage } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { products as localProducts, CATEGORIAS } from '../data/products';
import { FiLogOut, FiPlus, FiEdit2, FiTrash2, FiUsers, FiPackage, FiEye } from 'react-icons/fi';
import styles from './AdminDashboard.module.css';

const TABS = ['Productos', 'Postulaciones'];

export default function AdminDashboard() {
  const [tab, setTab] = useState('Productos');
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin');
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <span>San Pedro</span>
          <small>Admin</small>
        </div>
        <nav className={styles.sidebarNav}>
          <button
            className={`${styles.navItem} ${tab === 'Productos' ? styles.navActive : ''}`}
            onClick={() => setTab('Productos')}
          >
            <FiPackage /> Productos
          </button>
          <button
            className={`${styles.navItem} ${tab === 'Postulaciones' ? styles.navActive : ''}`}
            onClick={() => setTab('Postulaciones')}
          >
            <FiUsers /> Postulaciones
          </button>
        </nav>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          <FiLogOut /> Cerrar sesión
        </button>
      </aside>

      {/* Main */}
      <main className={styles.content}>
        {tab === 'Productos' ? <ProductsPanel /> : <PostulacionesPanel />}
      </main>
    </div>
  );
}

/* ─── PRODUCTOS ─────────────────────────────────────────── */
function ProductsPanel() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, 'productos'));
      if (!snap.empty) {
        setProducts(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } else {
        setProducts(localProducts);
      }
    } catch {
      setProducts(localProducts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleDelete = async (product) => {
    if (!window.confirm(`¿Eliminar "${product.nombre}"?`)) return;
    try {
      await deleteDoc(doc(db, 'productos', product.id));
      if (product.imagenRef) await deleteObject(ref(storage, product.imagenRef)).catch(() => {});
      fetchProducts();
    } catch (e) {
      alert('Error al eliminar: ' + e.message);
    }
  };

  return (
    <div>
      <div className={styles.panelHeader}>
        <div>
          <h2 className={styles.panelTitle}>Productos</h2>
          <p className={styles.panelSub}>{products.length} productos en carta</p>
        </div>
        <button className="btn-primary" onClick={() => { setEditing(null); setShowForm(true); }}>
          <FiPlus /> Agregar producto
        </button>
      </div>

      {loading ? (
        <p className={styles.loading}>Cargando...</p>
      ) : (
        <div className={styles.productTable}>
          <div className={styles.tableHeader}>
            <span>Producto</span>
            <span>Categoría</span>
            <span>Acciones</span>
          </div>
          {products.map((p) => (
            <div key={p.id} className={styles.tableRow}>
              <div className={styles.productInfo}>
                <img src={p.imagen || p.imagenUrl} alt={p.nombre} className={styles.thumb} />
                <div>
                  <p className={styles.productName}>{p.nombre}</p>
                  <p className={styles.productDesc}>{(p.descripcion || '').slice(0, 60)}...</p>
                </div>
              </div>
              <span className="badge" style={{ alignSelf: 'center' }}>{p.categoria}</span>
              <div className={styles.actions}>
                <button
                  className={styles.actionBtn}
                  onClick={() => { setEditing(p); setShowForm(true); }}
                  title="Editar"
                >
                  <FiEdit2 />
                </button>
                <button
                  className={`${styles.actionBtn} ${styles.danger}`}
                  onClick={() => handleDelete(p)}
                  title="Eliminar"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <ProductForm
          product={editing}
          onClose={() => setShowForm(false)}
          onSaved={fetchProducts}
        />
      )}
    </div>
  );
}

function ProductForm({ product, onClose, onSaved }) {
  const [form, setForm] = useState({
    nombre: product?.nombre || '',
    categoria: product?.categoria || CATEGORIAS.PANES,
    descripcion: product?.descripcion || '',
    destacado: product?.destacado || false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      let imagenUrl = product?.imagen || product?.imagenUrl || '';
      let imagenRef = product?.imagenRef || '';

      if (imageFile) {
        const storageRef = ref(storage, `productos/${Date.now()}_${imageFile.name}`);
        const snap = await uploadBytes(storageRef, imageFile);
        imagenUrl = await getDownloadURL(snap.ref);
        imagenRef = snap.ref.fullPath;
      }

      const data = { ...form, imagenUrl, imagenRef, actualizadoEn: serverTimestamp() };

      if (product?.id && product.id !== product.id.startsWith('local')) {
        await updateDoc(doc(db, 'productos', product.id), data);
      } else {
        await addDoc(collection(db, 'productos'), { ...data, creadoEn: serverTimestamp() });
      }

      onSaved();
      onClose();
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalCard}>
        <h3 className={styles.modalTitle}>
          {product ? 'Editar producto' : 'Nuevo producto'}
        </h3>
        <form onSubmit={handleSubmit} className={styles.formGrid}>
          <div className={styles.formField}>
            <label>Nombre</label>
            <input name="nombre" value={form.nombre} onChange={handleChange} required />
          </div>
          <div className={styles.formField}>
            <label>Categoría</label>
            <select name="categoria" value={form.categoria} onChange={handleChange}>
              {Object.values(CATEGORIAS).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className={`${styles.formField} ${styles.fullWidth}`}>
            <label>Descripción</label>
            <textarea name="descripcion" value={form.descripcion} onChange={handleChange} rows={3} />
          </div>
          <div className={styles.formField}>
            <label>Imagen (JPG/PNG)</label>
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
          </div>
          <div className={styles.formField} style={{ alignSelf: 'center' }}>
            <label className={styles.checkLabel}>
              <input type="checkbox" name="destacado" checked={form.destacado} onChange={handleChange} />
              Producto destacado
            </label>
          </div>
          <div className={`${styles.formActions} ${styles.fullWidth}`}>
            <button type="button" className="btn-secondary" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-primary" disabled={saving}>
              {saving ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ─── POSTULACIONES ─────────────────────────────────────── */
function PostulacionesPanel() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDocs(collection(db, 'postulaciones'));
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        data.sort((a, b) => (b.creadoEn?.seconds || 0) - (a.creadoEn?.seconds || 0));
        setPosts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const marcarRevisado = async (id) => {
    await updateDoc(doc(db, 'postulaciones', id), { revisado: true });
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, revisado: true } : p)));
  };

  return (
    <div>
      <div className={styles.panelHeader}>
        <div>
          <h2 className={styles.panelTitle}>Postulaciones</h2>
          <p className={styles.panelSub}>{posts.filter((p) => !p.revisado).length} sin revisar</p>
        </div>
      </div>

      {loading ? (
        <p className={styles.loading}>Cargando...</p>
      ) : posts.length === 0 ? (
        <p className={styles.loading}>No hay postulaciones aún.</p>
      ) : (
        <div className={styles.postList}>
          {posts.map((p) => (
            <div key={p.id} className={`${styles.postCard} ${p.revisado ? styles.revisado : ''}`}>
              <div className={styles.postInfo}>
                <p className={styles.postName}>{p.nombre}</p>
                <p className={styles.postDetail}>{p.correo} · {p.telefono}</p>
                <p className={styles.postDate}>
                  {p.creadoEn?.seconds
                    ? new Date(p.creadoEn.seconds * 1000).toLocaleDateString('es-CO', {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })
                    : 'Fecha desconocida'}
                </p>
              </div>
              <div className={styles.postActions}>
                {p.cvUrl && (
                  <a
                    href={p.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ fontSize: '0.82rem', padding: '8px 14px' }}
                  >
                    <FiEye /> Ver CV
                  </a>
                )}
                {!p.revisado && (
                  <button
                    className="btn-primary"
                    style={{ fontSize: '0.82rem', padding: '8px 14px' }}
                    onClick={() => marcarRevisado(p.id)}
                  >
                    Marcar revisada
                  </button>
                )}
                {p.revisado && (
                  <span className={styles.revisadoBadge}>✓ Revisada</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
