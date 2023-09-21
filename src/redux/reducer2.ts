import { RepoDetails } from "../types";

interface Repository {
    id: number;
    name: string;
    description: string;
    forks_count: number;
    language: string;
    stargazers_count: number;
}

export interface User
{
    avatar_url:string;
}

export interface RepositoriesState {
    repoDetails: RepoDetails | undefined,
    repositories: Repository[];
    repositories2: Repository[];
    error: string | undefined;
    user: User | undefined;
    
}

const initialState: RepositoriesState = {
    repoDetails: undefined,
    repositories: [],
    repositories2: [],
    error: undefined,
    user: undefined

};

enum ActionTypes {
    FETCH_REPOSITORY_SUCCESS = 'FETCH_REPOSITORY_SUCCESS',
    FETCH_REPOSITORY_FAILURE = 'FETCH_REPOSITORY_FAILURE',
}

export type Action = {type: ActionTypes.FETCH_REPOSITORY_SUCCESS, payload: RepoDetails} | 
    { type: ActionTypes.FETCH_REPOSITORY_FAILURE; payload: string };
    const repositoriesReducer2 = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
        switch (action.type) {
            case ActionTypes.FETCH_REPOSITORY_SUCCESS:
                return { ...state, repoDetails: action.payload, error:undefined};
            case ActionTypes.FETCH_REPOSITORY_FAILURE:
                return { ...state, error: action.payload };
            default:
                return state;
        }
    };

    export default repositoriesReducer2;