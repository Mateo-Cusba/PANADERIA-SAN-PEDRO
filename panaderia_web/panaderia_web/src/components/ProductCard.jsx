// src/components/ProductCard.jsx
import styles from './ProductCard.module.css';

export default function ProductCard({ producto }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
        <span className={styles.categoria}>{producto.categoria}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.nombre}>{producto.nombre}</h3>
        <p className={styles.desc}>{producto.descripcion}</p>
      </div>
    </article>
  );
}
