import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Readme from './Readme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import '../src/styles/Details.css';
import ReactMarkdown from 'react-markdown'

const Details = () => {
    const { repoId } = useParams();
    const [repoDetails, setRepoDetails] = useState(null);

    useEffect(() => {
        // Fetch repository details based on repoId
        axios
            .get(`https://api.github.com/repositories/${repoId}`)
            .then((response) => {
                setRepoDetails(response.data);
            })
            .catch((error) => {
                console.error('Error fetching repo details:', error);
            });
    }, [repoId]);

    if (!repoDetails) {
        return <div>Loading...</div>;
    }

    // Check if repoDetails.languages exists before using Object.keys
    const languages = repoDetails.languages
        ? Object.keys(repoDetails.languages).join(', ')
        : 'Not specified';

    return (
        <div className="det-container">
            <div className='extra-cont'>
                <h1>Repository Details</h1>
                <div className="repo-details">
                    <div className='owner-details'>
                        <h2>{repoDetails.name}</h2>
                        <p>Description: {repoDetails.description || 'No description'}</p>
                        <p>Owner: {repoDetails.owner.login}</p>
                        <p>
                            <FontAwesomeIcon icon={faStar} /> Stars: {repoDetails.stargazers_count}
                        </p>


                        <p>
                            <FontAwesomeIcon icon={faCodeBranch} /> Forks: {repoDetails.forks_count}
                        </p>
                        <p>Languages: {languages}</p>
                    </div>
                    <div className='readme-cont'>
                        <Readme username={repoDetails.owner.login} repoName={repoDetails.name} />
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <a className="viewGit" href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
