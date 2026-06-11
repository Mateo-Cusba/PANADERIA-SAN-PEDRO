// src/pages/Menu.jsx
import { useState, useMemo, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { products as localProducts, CATEGORIAS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './Menu.module.css';

const TABS = ['Todos', ...Object.values(CATEGORIAS)];

export default function Menu() {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('Todos');
  const [products, setProducts] = useState(localProducts);

  // Intenta cargar productos de Firestore (si hay datos admin)
  useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDocs(collection(db, 'productos'));
        if (!snap.empty) {
          const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          setProducts(data);
        }
      } catch {
        // usa datos locales
      }
    };
    load();
  }, []);

  const filtered = useMemo(() => {
    let list = products;
    if (tab !== 'Todos') list = list.filter((p) => p.categoria === tab);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.nombre.toLowerCase().includes(q) ||
          p.descripcion.toLowerCase().includes(q)
      );
    }
    return list;
  }, [products, tab, query]);

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className="section-wrapper">
          <span className="badge">Nuestros productos</span>
          <h1 className={styles.title}>El Menú</h1>
          <p className={styles.sub}>
            Pan calientito, tintos de verdad, jugos naturales y desayunos que saben a hogar.
          </p>
        </div>
      </div>

      <div className="section-wrapper">
        {/* Búsqueda */}
        <div className={styles.searchBar}>
          <FiSearch size={18} className={styles.searchIcon} />
          <input
            type="search"
            placeholder="Buscar producto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
          {query && (
            <button onClick={() => setQuery('')} className={styles.clearBtn} aria-label="Limpiar">
              <FiX size={16} />
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {TABS.map((t) => (
            <button
              key={t}
              className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Resultados */}
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No encontramos "{query}" en nuestra carta. ¡Pregúntanos por WhatsApp!</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
