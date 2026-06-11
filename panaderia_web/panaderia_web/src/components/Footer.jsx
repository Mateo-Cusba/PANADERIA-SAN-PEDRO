// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FiInstagram, FiMail, FiPhone, FiClock, FiMapPin } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="section-wrapper">
          <div className={styles.grid}>
            {/* Marca */}
            <div className={styles.col}>
              <h3 className={styles.brand}>Panadería San Pedro</h3>
              <p className={styles.slogan}>
                "La casa del Tinto"<br />
                <em>Alegrando corazones al calor de un buen tinto.</em>
              </p>
              <div className={styles.socials}>
                <a href="https://instagram.com/panaderiasanpedro2026" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FiInstagram size={20} />
                </a>
                <a href="https://wa.me/573106525559" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <FiPhone size={20} />
                </a>
                <a href="mailto:SanPedro.Panaderia.og" aria-label="Correo">
                  <FiMail size={20} />
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Horarios</h4>
              <div className={styles.info}>
                <FiClock size={16} />
                <div>
                  <p>Lunes – Domingo</p>
                  <p className={styles.highlight}>6:00 am – 11:00 pm</p>
                </div>
              </div>
              <div className={styles.info}>
                <FiMapPin size={16} />
                <div>
                  <p>Calle 71D Sur #79-6</p>
                  <p className={styles.highlight}>Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            {/* Navegación */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Explorar</h4>
              <ul className={styles.navLinks}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/menu">Menú</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/ubicacion">Ubicación</Link></li>
              </ul>
            </div>

            {/* Trabaja con nosotros */}
            <div className={styles.col} id="trabaja">
              <h4 className={styles.colTitle}>Trabaja con Nosotros</h4>
              <p className={styles.subtext}>
                ¿Te gustaría formar parte de nuestro equipo?<br />
                Completa el formulario y adjunta tu hoja de vida.
              </p>
              <WorkForm />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Panadería San Pedro · Bogotá, Colombia</p>
      </div>
    </footer>
  );
}

function WorkForm() {
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', cv: null });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.telefono || !form.cv) return;
    setLoading(true);

    try {
      const { db, storage } = await import('../firebase/config');
      const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');

      const storageRef = ref(storage, `hojas-de-vida/${Date.now()}_${form.cv.name}`);
      const snapshot = await uploadBytes(storageRef, form.cv);
      const cvUrl = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, 'postulaciones'), {
        nombre: form.nombre,
        correo: form.correo,
        telefono: form.telefono,
        cvUrl,
        creadoEn: serverTimestamp(),
        revisado: false,
      });

      setSent(true);
    } catch (err) {
      console.error(err);
      alert('Error al enviar. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <p className={styles.successMsg}>
        ✅ ¡Gracias! Recibimos tu hoja de vida. Te contactaremos pronto.
      </p>
    );
  }

  return (
    <form className={styles.workForm} onSubmit={handleSubmit}>
      <input
        name="nombre"
        placeholder="Nombre completo"
        value={form.nombre}
        onChange={handleChange}
        required
      />
      <input
        name="correo"
        type="email"
        placeholder="Correo electrónico"
        value={form.correo}
        onChange={handleChange}
        required
      />
      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
        required
      />
      <label className={styles.fileLabel}>
        <input
          name="cv"
          type="file"
          accept=".pdf"
          onChange={handleChange}
          required
        />
        {form.cv ? form.cv.name : 'Adjuntar hoja de vida (PDF)'}
      </label>
      <button type="submit" className="btn-gold" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar postulación'}
      </button>
    </form>
  );
}

// Necesario para WorkForm que usa useState
import { useState } from 'react';
