import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadingReducer } from "./ducks/loading";

export const rootReducer = combineReducers({
  loadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

export type RootState = ReturnType<typeof rootReducer>;
