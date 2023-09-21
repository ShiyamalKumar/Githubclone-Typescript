import { combineReducers, configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './reducers';
import repositoriesReducer2 from './reducer2';

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
  repositories2: repositoriesReducer2,
});


const store = configureStore({
  reducer: rootReducer,
});

// interface RootState {
//   repositories: ReturnType<typeof store.getState>;
//   }
type RootState = ReturnType<typeof store.getState>  
export type AppDispatch = typeof store.dispatch



export type { RootState };
export default store;
