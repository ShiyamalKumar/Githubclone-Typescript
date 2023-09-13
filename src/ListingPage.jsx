import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories } from './redux/actions';
import '../src/styles/ListingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const getLanguageClass = (language) => {
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

const ListingPage = () => {
    const dispatch = useDispatch();
    const { repositories, error } = useSelector((state) => state.repositories);

    // State variable to track dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };



    return (
        <body className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="container">
                {/* <h1>Github Clone</h1> */}
                {Array.isArray(repositories) && repositories.length > 0 ? (
                    repositories.map((repo) => (
                        <div key={repo.id} className="repo-card">
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

                    ))
                ) : (
                    <p>No repositories to display.</p>
                )}
            </div>
        </body>
    );
};

export default ListingPage;
