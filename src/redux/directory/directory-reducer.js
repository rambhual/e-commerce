import { MenuData } from "../../components/directory/directory";
const INITIAL_STATE = {
  selections: MenuData
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
