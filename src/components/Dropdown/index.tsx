export interface DropdownItemType {
  name: string;
  id: number;
  selected: boolean;
}

interface DropdownItemProps {
  item: DropdownItemType;
  onSelect?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DropdownProps {
  items: DropdownItemType[];
  onItemSelect?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Dropdown = ({ items, onItemSelect }: DropdownProps) => {
  return (
    <ul>
      {items.map((item: DropdownItemType) => (
        <DropdownItem item={item} onSelect={onItemSelect} key={item.id}/>
      ))}
    </ul>
  );
};

const DropdownItem = ({ item, onSelect }: DropdownItemProps) => {

  const {name, id, selected} = item;

  return <li key={id}>
    <input type="checkbox" checked={selected} onChange={onSelect} id={String(id)} />
    <span>{name}</span>
  </li>;
};

export default Dropdown;
