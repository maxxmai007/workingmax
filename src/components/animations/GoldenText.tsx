import styles from '../../styles/animations.module.css';

export function GoldenText({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden">
            <div className="text-white relative z-10">{children}</div>
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent ${styles.animateShimmer}`} />
        </div>
    );
} 