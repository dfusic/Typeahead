import styles from './input.module.css'

interface InputProps {
    onChange: () => void;
    onBlur: () => void;
    value: string;
}

const Input = ({onChange, onBlur, value}: InputProps) => (
    <div className={styles.input}>
        <ul className={styles.tagList}>
            <li>New York <span>X</span></li>
            <li>New York <span>X</span></li>
            <li>New York <span>X</span></li>
        </ul>
        <input type="text" onChange={onChange} onBlur={onBlur} value={value}/>
    </div>
)

export default Input;