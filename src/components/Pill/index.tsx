import styles from './pill.module.css';

interface PillProps {
    value: string;
    onClose: () => void;
}

const Pill = ({value, onClose}: PillProps) => {
    return <li tabIndex={0} className={styles.pill}>{value}
    {onClose && <span className={styles.pillCloseButton} onClick={onClose}>X</span>}
    </li>
}

export default Pill;