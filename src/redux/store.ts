import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import repositoriesReducer from './reducers';

const rootReducer=combineReducers({repositories:repositoriesReducer})

const store = configureStore({
  reducer: rootReducer,
    
});
type RootState= {
  repositories: ReturnType<typeof store.getState>;
}


export default store;
export type { RootState };

export type AppDispatch = typeof store.dispatch