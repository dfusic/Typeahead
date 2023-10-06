import { useEffect, useState } from "react";
import Typeahead from "./components/Typeahead";
import { fetchDropdownItems } from "./api";

import { State } from "./api/fetchDropdownItems";


const App = () => {

  const [states, setStates] = useState<State[]>([]);
  const [selectedStates, setSelectedStates] = useState<State[]>([])
  useEffect(() => {
    // fetch the states from DB
    const states = fetchDropdownItems();

    setStates(states);
  }, []);

  const handleTypeaheadItemChange = (items: State[]) => {
    setSelectedStates(items);
  }

  const handleSubmit = () => {
    alert(JSON.stringify(selectedStates))
  }

  return (
    <>
    <Typeahead items={states} onItemSelect={handleTypeaheadItemChange}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
};

export default App;