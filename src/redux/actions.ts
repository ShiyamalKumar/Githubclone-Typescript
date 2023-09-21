import axios from 'axios';
import { Dispatch } from 'redux';
import {ThunkAction} from "redux-thunk"
import { RootState } from './store';

export enum ActionTypes {
    FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS',
    FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE',
    FETCH_REPOSITORY_SUCCESS = 'FETCH_REPOSITORY_SUCCESS',
    FETCH_REPOSITORY_FAILURE = 'FETCH_REPOSITORY_FAILURE',
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
export interface RepoDetails {
    name: string;
    description: string | null;
    owner: {
        login: string;
    };
    stargazers_count: number;
    forks_count: number;
    languages: {
        [key: string]: number;
    } | null;
    html_url: string;
}

interface FetchRepositorySuccessAction {
    type: ActionTypes.FETCH_REPOSITORY_SUCCESS;
    payload: RepoDetails; 
}

interface FetchRepositoryFailureAction {
    type: ActionTypes.FETCH_REPOSITORY_FAILURE;
    payload: string; 
}


type Action = FetchRepositoriesSuccessAction | FetchRepositoriesFailureAction 
| FetchRepositorySuccessAction | FetchRepositoryFailureAction;

export const fetchRepositories = (): ThunkAction<void, RootState, unknown, Action> => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const response = await axios.get('https://api.github.com/users/nodejs/repos');
            dispatch({ type: ActionTypes.FETCH_REPOSITORIES_SUCCESS, payload: response.data });
        } catch (error) {
            console.error('API Error:', error);
            if (error instanceof Error) {
                dispatch({ type: ActionTypes.FETCH_REPOSITORIES_FAILURE, payload: error.message });
            } else {
                dispatch({ type: ActionTypes.FETCH_REPOSITORIES_FAILURE, payload: 'An error occurred' });
            }
        }
    };
};

export const fetchRepository = (repoId: string ): ThunkAction<void, RootState, unknown, Action> => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const response = await axios.get(`https://api.github.com/repositories/${repoId}`);
            dispatch({ type: ActionTypes.FETCH_REPOSITORY_SUCCESS, payload: response.data });
        } catch (error) {
            console.error('API Error:', error);
            if (error instanceof Error) {
                dispatch({ type: ActionTypes.FETCH_REPOSITORY_FAILURE, payload: error.message });
            } else {
                dispatch({ type: ActionTypes.FETCH_REPOSITORY_FAILURE, payload: 'An error occurred' });
            }
        }
    };
};

export default fetchRepositories;
