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
    repositories: Repository[];
    error: string | null;
    user: User | null;
    
}

const initialState: RepositoriesState = {
    repositories: [],
    error: null,
    user: null

};

 enum ActionTypes {
    FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS',
    FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE',
}

export type Action ={ type: ActionTypes.FETCH_REPOSITORIES_SUCCESS; payload: Repository[] }
    | { type: ActionTypes.FETCH_REPOSITORIES_FAILURE; payload: string };

const repositoriesReducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionTypes.FETCH_REPOSITORIES_SUCCESS:
            return { ...state, repositories: action.payload, error: null};
        case ActionTypes.FETCH_REPOSITORIES_FAILURE:
            return { ...state, repositories: [], error: action.payload };
        default:
            return state;
    }
};



export default repositoriesReducer;
