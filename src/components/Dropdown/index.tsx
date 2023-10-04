import styles from './dropdown.module.css'

import { State } from '../../api/fetchDropdownItems';

interface DropdownProps {
    items: State[];
    onItemClick: (item: State) => void
}

const Dropdown = ({items, onItemClick}: DropdownProps) =>{
    return (
        <ul className={styles.dropdownList}>
            {items.map(item => (
                <li onClick={() => onItemClick(item)} className={styles.dropdownItem} key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
};

export default Dropdown;