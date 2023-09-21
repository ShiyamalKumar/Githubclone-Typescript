import React, { Dispatch, useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { fetchRepositories } from '../redux/actions';
import '../styles/ListingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Ping } from '@uiball/loaders';
import { RootState } from '../redux/store';

const getLanguageClass = (language: string | null) => {
    switch (language) {
        case "JavaScript":
            return "language-javascript";
        case "TypeScript":
            return "language-typescript";
        case "Shell":
            return "language-shell";
        case "HTML":
            return "language-html";
        case "Dockerfile":
            return "language-dockerfile";
        case "C++":
            return "language-cpp";
        default:
            return "language-na";
    }
};

const ListingPage: React.FC = () => {
    // const useAppDispatch: () => AppDispatch = useDispatch
       // const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    // const { repositories, error, user } = useAppSelector((state: any) => state);
    const dispatch: Dispatch<any> = useDispatch();
 
    const { repositories } = useSelector(
        (state: RootState) => state.repositories
      );
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        dispatch(fetchRepositories())
    }, [dispatch]);

    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    return (
            <div className="container">
                {Array.isArray(repositories) && repositories.length > 0 ? (
                    repositories.map((repo: any) => (
                        <div key={repo.id} className="repo-card">
                            <div className='card-info'>
                                <div className='stars-repo'>
                                    <FontAwesomeIcon icon={faThumbsUp} /> {repo.stargazers_count}
                                </div>
                                <Link to={`/details/${repo.id}`}>
                                    <h3>{repo.name}</h3>
                                </Link>
                                {/* <p>{repo.description}</p> */}

                                <p>Forks: {repo.forks_count}</p>
                                <div className="language-box">
                                    <span className={getLanguageClass(repo.language)}>
                                        {repo.language || "N/A"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ "height": "82.35vh", "display": "flex", "justifyContent": "center", alignItems: "center" }}>
                        {/* <p >No repositories to display.</p> */}
                        <Ping size={400} speed={2} color="#415A77" />
                    </div>
                )}
            </div>
    );
};

export default ListingPage;
