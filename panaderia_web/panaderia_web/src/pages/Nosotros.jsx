// src/pages/Nosotros.jsx
import styles from './Nosotros.module.css';
import logo from '../assets/images/logo.jpeg';

export default function Nosotros() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className="section-wrapper">
          <span className="badge">Nuestra historia</span>
          <h1 className={styles.title}>Panadería San Pedro</h1>
        </div>
      </div>

      <div className="section-wrapper">
        <div className={styles.grid}>
          <div className={styles.imgCol}>
            <div className={styles.imgFrame}>
              <img src={logo} alt="Logo Panadería San Pedro" />
            </div>
            <div className={styles.slogan}>
              <p>"La casa del Tinto"</p>
            </div>
          </div>

          <div className={styles.textCol}>
            <p className={styles.lead}>
              La Panadería San Pedro fue fundada en el año <strong>2010</strong>, en Bogotá D.C.,
              por <strong>Luis A. Castro y Yolanda González</strong>, jóvenes moniquireños y
              emprendedores que, en medio de su gran amor, supieron liderar sus propios proyectos económicos.
            </p>

            <p>
              Deriva su nombre de <strong>San Pedro</strong> en honor al gran líder familiar
              <em> Don Pedro José González</em>.
            </p>

            <p>
              La panadería ha sido uno de sus grandes éxitos, destacándose por la calidad de sus
              productos y la esmerada atención a sus clientes. Más de una década después, sigue siendo
              un punto de encuentro para el barrio, un lugar donde el aroma a pan recién horneado y el
              calor de un tinto convocan a las familias.
            </p>

            <p className={styles.closing}>
              Y seguirá siempre <em>alegrando los corazones de sus visitantes al calor de un buen tinto.</em>
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>+15</span>
                <span className={styles.statLabel}>Años de historia</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>40+</span>
                <span className={styles.statLabel}>Productos en carta</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>6am</span>
                <span className={styles.statLabel}>Abrimos tempranito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
