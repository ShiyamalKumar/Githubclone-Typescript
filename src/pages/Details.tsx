import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepository } from '../redux/actions'; 
import { AppDispatch, RootState } from '../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import Readme from '../components/Readme';
import '../styles/Details.css';

const Details: React.FC = () => {
    const { repoId } = useParams<{ repoId: string | undefined }>();
    const dispatch = useDispatch<AppDispatch>();
    const { repositories2 } = useSelector((state: RootState) => state);
    console.log("repositories", useSelector((state: RootState) => state))
    const { repoDetails, error } = repositories2; 

    useEffect(() => {
        if (repoId) {
            dispatch(fetchRepository(repoId));
        }
    }, [dispatch, repoId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!repoDetails) {
        return <div>Loading...</div>;
    }

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
