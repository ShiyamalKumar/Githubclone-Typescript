export interface Repo {
    id: number;
    name: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
  }
  
  export interface ReadmeProps {
    username: string;
    repoName: string;
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

