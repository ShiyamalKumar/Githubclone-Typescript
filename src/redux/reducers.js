const initialState = {
    repositories: [],
    error: null,
};

export const repositoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_REPOSITORIES_SUCCESS':
            return { ...state, repositories: action.payload, error: null };
        case 'FETCH_REPOSITORIES_FAILURE':
            return { ...state, repositories: [], error: action.payload };
        default:
            return state;
    }
};
