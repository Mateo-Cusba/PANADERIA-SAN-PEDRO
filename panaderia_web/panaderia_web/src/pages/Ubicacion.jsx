// src/pages/Ubicacion.jsx
import { FiMapPin, FiExternalLink, FiClock, FiPhone } from 'react-icons/fi';
import styles from './Ubicacion.module.css';

const MAPS_URL =
  'https://www.google.com/maps/place/Cl.+71d+Sur+%2379-6,+Bogot%C3%A1/@4.6049311,-74.196094,17z';

const EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5!2d-74.196094!3d4.6049311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e3f34497ad7%3A0x26fbe3ca811f811b!2sCl.+71d+Sur+%2379-6%2C+Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco';

export default function Ubicacion() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className="section-wrapper">
          <span className="badge">Visítanos</span>
          <h1 className={styles.title}>Nuestra ubicación</h1>
          <p className={styles.sub}>Siempre cerca, siempre calientito.</p>
        </div>
      </div>

      <div className="section-wrapper">
        <div className={styles.grid}>
          {/* Info */}
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <FiMapPin size={24} className={styles.icon} />
              <div>
                <h3>Dirección</h3>
                <p>Calle 71D Sur #79-6</p>
                <p className={styles.detail}>Frente al Oxxo de Bosa Naranjos, Bogotá</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FiClock size={24} className={styles.icon} />
              <div>
                <h3>Horarios</h3>
                <p>Lunes a Domingo</p>
                <p className={styles.detail}>6:00 am – 11:00 pm</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <FiPhone size={24} className={styles.icon} />
              <div>
                <h3>Contacto</h3>
                <p>WhatsApp: +57 310 652 5559</p>
                <p className={styles.detail}>Instagram: @panaderiasanpedro2026</p>
              </div>
            </div>

            <div className={styles.directions}>
              <h3>¿Cómo llegar?</h3>
              <p>
                Nos encuentras en la <strong>Calle 71D Sur #79-6</strong>, justo al frente del{' '}
                <strong>Oxxo de Bosa Naranjos</strong>. ¡Imposible perderse! Pasa por tu pan calientito.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ marginTop: 16, alignSelf: 'flex-start' }}
              >
                Abrir en Google Maps <FiExternalLink />
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className={styles.mapWrapper}>
            <iframe
              title="Ubicación Panadería San Pedro"
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
