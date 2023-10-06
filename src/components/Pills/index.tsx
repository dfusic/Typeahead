import { State } from "../../api/fetchDropdownItems";

interface PillsProps {
  items: State[];
  onDelete: (item: State) => void;
}

interface PillProps {
  item: State;
  onDelete: (item: State) => void;
}

const Pills = ({ items, onDelete }: PillsProps) => {
    return (
    <ul>
      {items.map((item: State) => {
        return <Pill key={item.id} item={item} onDelete={onDelete}/>;
      })}
    </ul>
  );
};

const Pill = ({ item, onDelete }: PillProps) => {
  return (
    <li>
        <span>{item.name}</span>
        <span onClick={() => onDelete(item)}>close</span>
    </li>
  );
};

export default Pills;
