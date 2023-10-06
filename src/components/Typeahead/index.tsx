import { useState, useEffect } from "react";
import { State } from "../../api/fetchDropdownItems";

import Dropdown, { DropdownItemType } from "../Dropdown";

interface TypeaheadProps {
  items: State[];
  onItemSelect: (states: State[]) => void;
}

const Typeahead = ({ items, onItemSelect }: TypeaheadProps) => {
  const [hasFoundItems, setHasFoundItems] = useState<boolean>(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItemType[]>([]);
  const [filteredItems, setFilteredItems] = useState<DropdownItemType[]>([]);
  const [selectedItems, setSelectedItems] = useState<State[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (items) {
      setHasFoundItems(true);
      const formattedDropdownItems = items.map((item: State) => ({
        ...item,
        selected: false,
      }));
      setDropdownItems(formattedDropdownItems);
    }
  }, [items]);

  useEffect(() => {
    if (dropdownItems.length > 0) {
      setFilteredItems(dropdownItems);
    }
  }, [dropdownItems]);

  useEffect(() => {
    setHasFoundItems(true);
    const formattedInputValue = inputValue.toLowerCase();
    const filteredDropdownItems = dropdownItems.filter(
      (item: DropdownItemType) => {
        return item.name.toLowerCase().includes(formattedInputValue);
      }
    );

    setFilteredItems(filteredDropdownItems);
  }, [inputValue]);

  // functions

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    const clickedElement = items.find((item: State) => {
      return String(item.id) === id;
    });

    const itemId = dropdownItems.findIndex((item: DropdownItemType) => {
      return String(item.id) === id;
    });

    const dropdownItemsCopy = dropdownItems;
    dropdownItemsCopy[itemId].selected = !dropdownItemsCopy[itemId].selected;
    // update the list of the items
    setDropdownItems(dropdownItemsCopy);
    // reset the filter
    setFilteredItems(dropdownItems);
    // reset the input
    setInputValue("");

    if (checked) {
      setSelectedItems([...selectedItems, clickedElement]);
    } else {
      const statesWithoutClicked = items.filter((item: State) => {
        return String(item.id) !== id;
      });
      setSelectedItems(statesWithoutClicked);
    }

    onItemSelect && onItemSelect(selectedItems);

    console.log({selectedItems})
  };

  return (
    <div className="typeahead">
      <div className="typeahead--input">
        <input
          type="text"
          name=""
          id=""
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
      {hasFoundItems && (
        <Dropdown
          items={filteredItems}
          onItemSelect={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleSelect(event)
          }
        />
      )}
    </div>
  );
};

export default Typeahead;
