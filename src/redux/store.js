import { configureStore } from '@reduxjs/toolkit';
import { repositoriesReducer } from './reducers';

const store = configureStore({
    reducer: {
        repositories: repositoriesReducer,
    },
});

export default store;
