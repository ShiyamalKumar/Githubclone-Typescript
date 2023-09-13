import axios from 'axios';

export const fetchRepositories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://api.github.com/users/nodejs/repos');
            console.log('API Response:', response.data); // Add this line for debugging
            dispatch({ type: 'FETCH_REPOSITORIES_SUCCESS', payload: response.data });
        } catch (error) {
            console.error('API Error:', error); // Add this line for debugging
            dispatch({ type: 'FETCH_REPOSITORIES_FAILURE', payload: error.message });
        }
    };
};

