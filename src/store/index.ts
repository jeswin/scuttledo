import * as jetpack from "redux-jetpack"
import * as types from "../types";

type State = {
  lists: types.List[],
  todos: types.Todo[]
}

const initialState: State = {
  lists: [],
  todos: []
}

const store = jetpack.createStore(initialState);

export default store;
