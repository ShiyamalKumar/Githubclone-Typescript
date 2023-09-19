import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

const Dashboard: React.FC = () => {
  const [mostLikedRepos, setMostLikedRepos] = useState<Repo[]>([]);
  const [mostForkedRepos, setMostForkedRepos] = useState<Repo[]>([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/repositories')
      .then((response) => {
        const repos: Repo[] = response.data;

        const sortedByStars = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
        const sortedByForks = [...repos].sort((a, b) => b.forks_count - a.forks_count);

        const topLikedRepos = sortedByStars.slice(0, 3);
        const topForkedRepos = sortedByForks.slice(0, 3);

        setMostLikedRepos(topLikedRepos);
        setMostForkedRepos(topForkedRepos);
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-section">
        <h2>Most Liked Repositories</h2>
        <ul>
          {mostLikedRepos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h2>Most Forked Repositories</h2>
        <ul>
          {mostForkedRepos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link to="/listing">
          <button>Navigate to Listing Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
