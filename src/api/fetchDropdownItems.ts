import states from '../db/states.json'

export interface State {
    id: number,
    name: string
}

export const fetchDropdownItems = () => {
  // check if the states are already saved inside of local storage
  // if not it should do a GET request and save it

  const localStorageStates = localStorage.getItem('states');
  if(!localStorageStates){
    // mock request, in this case we just set JSON as states
    localStorage.setItem('states', JSON.stringify(states));
  }else{
    return JSON.parse(localStorageStates);
  }
};
