import states from '../db/states.json'

export interface State {
    id: number,
    name: string
}

export const fetchDropdownItems = (): State[] => {
  return states;
};
