import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

export type Store = ReturnType<typeof rootReducer>;
export default rootReducer;