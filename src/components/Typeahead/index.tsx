import { useEffect, useState } from "react";

import { fetchDropdownItems } from "../../api";
import { State } from "../../api/fetchDropdownItems";

import Pill from "../Pill";
import Dropdown from "../Dropdown";
import Input from "./Input";

import styles from "./typeahead.module.css";

const TypeAhead = () => {
  const [initialStates, setInitialStates] = useState<State[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedStates, setSelectedStates] = useState<State[]>([]);

  useEffect(() => {
    const dropdownItems: State[] = fetchDropdownItems();
    setInitialStates(dropdownItems);
  }, []);

  useEffect(() => {
    setStates(initialStates);
  }, [initialStates]);

  useEffect(() => {
    const formattedInputValue = inputValue.replace(/\s/g, "").toLowerCase();
    const foundStates = initialStates.filter((state: State) => {
      const formattedStateName = state.name.replace(/\s/g, "").toLowerCase();
      return formattedStateName.includes(formattedInputValue);
    });

    setStates(foundStates);
  }, [inputValue, initialStates]);

  const handleDropdownItemClick = (item: State) => {
    const isItemAlreadySelected = selectedStates.find(
      (state: State) => state.id === item.id
    );
    if (isItemAlreadySelected) {
      alert("State already selected!");
      return;
    }

    setSelectedStates([...selectedStates, item]);
  };

  const handleStateDelete = (item: State) => {
    const filteredSelectedStates = selectedStates.filter(
      (state) => state.id !== item.id
    );
    setSelectedStates(filteredSelectedStates);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.typeahead}>
      <div className={styles.inputWrapper}>
        <div className={styles.pillList}>
          {selectedStates.map((state: State) => (
            <Pill
              value={state.name}
              key={state.id}
              onClose={() => handleStateDelete(state)}
            />
          ))}
        </div>
        <Input
          onFocus={() => setIsDropdownOpen(true)}
          value={inputValue}
          onChange={(event) => handleInputChange(event)}
          className={styles.input}
        />
      </div>
      {isDropdownOpen && states.length > 0 && (
        <Dropdown
          onItemClick={(item) => handleDropdownItemClick(item)}
          items={states}
        />
      )}
    </div>
  );
};

export default TypeAhead;
