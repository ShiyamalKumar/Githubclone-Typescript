import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer, { Action, RepositoriesState }  from './reducers';
import { createStore, Store, applyMiddleware } from "redux"
import thunk from 'redux-thunk'



const store = configureStore({
    reducer:  repositoriesReducer,
    
});
interface RootState {
  repositories: ReturnType<typeof store.getState>;
}

// const store: Store<RepositoriesState, Action> & {
//     dispatch: RootState
//   } = createStore(repositoriesReducer, applyMiddleware(thunk))

export default store;
export type { RootState };

export type AppDispatch = typeof store.dispatch