// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin, FiUsers } from 'react-icons/fi';
import { MdOutlineMenuBook } from 'react-icons/md';
import { getDestacados } from '../data/products';
import ProductCard from '../components/ProductCard';
import heroImg from '../assets/images/principal.jpg';
import styles from './Home.module.css';

const destacados = getDestacados();

export default function Home() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Fundada en 2010 · Bogotá</span>
          <h1 className={styles.heroTitle}>
            La casa<br />del Tinto
          </h1>
          <p className={styles.heroSub}>
            Alegrando corazones al calor de un buen tinto,<br />
            compartiendo tradición, sabor y el placer de los buenos momentos.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/menu" className="btn-primary">
              Ver menú <FiArrowRight />
            </Link>
            <a
              href="https://wa.me/573106525559"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
        <div className={styles.scroll}>↓</div>
      </section>

      {/* ACCESOS RÁPIDOS */}
      <section className={styles.cards}>
        <div className="section-wrapper">
          <div className={styles.cardGrid}>
            <Link to="/menu" className={styles.accessCard}>
              <MdOutlineMenuBook size={36} className={styles.accessIcon} />
              <div>
                <h3>Ver Menú</h3>
                <p>Explora todos nuestros productos</p>
              </div>
              <FiArrowRight className={styles.arrow} />
            </Link>
            <Link to="/nosotros" className={styles.accessCard}>
              <FiUsers size={36} className={styles.accessIcon} />
              <div>
                <h3>Conócenos</h3>
                <p>Nuestra historia y valores</p>
              </div>
              <FiArrowRight className={styles.arrow} />
            </Link>
            <Link to="/ubicacion" className={styles.accessCard}>
              <FiMapPin size={36} className={styles.accessIcon} />
              <div>
                <h3>Visítanos</h3>
                <p>Calle 71D Sur #79-6, Bogotá</p>
              </div>
              <FiArrowRight className={styles.arrow} />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className={styles.featured}>
        <div className="section-wrapper">
          <div className={styles.sectionHeader}>
            <span className="badge">Imperdibles</span>
            <h2 className={styles.sectionTitle}>Los favoritos de la casa</h2>
            <p className={styles.sectionSub}>
              Seleccionados con cariño por nuestros clientes de siempre.
            </p>
          </div>
          <div className={styles.productGrid}>
            {destacados.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
          <div className={styles.featuredCta}>
            <Link to="/menu" className="btn-secondary">
              Ver todos los productos <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* MENSAJE FINAL */}
      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <p className={styles.closingQuote}>
            "Y seguirá siempre alegrando los corazones de sus visitantes<br />
            al calor de un buen tinto."
          </p>
          <p className={styles.closingHours}>
            Abiertos todos los días · 6:00 am – 11:00 pm
          </p>
        </div>
      </section>
    </main>
  );
}
