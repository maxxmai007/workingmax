import styles from '../../styles/animations.module.css';

export function GoldSparks() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-full h-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={styles.animateSpark}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '4px',
              height: '4px',
              background: 'radial-gradient(circle, #FFD700 0%, rgba(255,215,0,0) 70%)',
              animation: `spark ${1 + Math.random()}s ease-out ${Math.random() * 2}s infinite`,
              opacity: 0
            }}
          />
        ))}
      </div>
    </div>
  );
}