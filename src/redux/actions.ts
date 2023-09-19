import axios from 'axios';
import { Dispatch } from 'redux';
import {ThunkAction} from "redux-thunk"
import { RootState } from './store';

enum ActionTypes {
    FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS',
    FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE',
}

interface FetchRepositoriesSuccessAction {
    type: ActionTypes.FETCH_REPOSITORIES_SUCCESS;
    payload: any[]; 
}

interface FetchRepositoriesFailureAction {
    type: ActionTypes.FETCH_REPOSITORIES_FAILURE;
    payload: string; 
}

interface errorMess {
    message: string;
}

type Action = FetchRepositoriesSuccessAction | FetchRepositoriesFailureAction;

export const fetchRepositories = (): ThunkAction<void, RootState, unknown, Action> => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const response = await axios.get('https://api.github.com/users/nodejs/repos');
            dispatch({ type: ActionTypes.FETCH_REPOSITORIES_SUCCESS, payload: response.data });
        } catch (error: unknown) {
            console.error('API Error:', error);
            const knownError = error as errorMess;
            if(knownError)dispatch({ type: ActionTypes.FETCH_REPOSITORIES_FAILURE, payload: knownError.message });
        }
    };
};

export default fetchRepositories;
