import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const Readme = ({ username, repoName }) => {
    const [readmeContent, setReadmeContent] = useState("");
    console.log(readmeContent);
    useEffect(() => {
        // Fetch README content
        axios
            .get(`https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`)
            .then((response) => {
                setReadmeContent(response.data);
            })
            .catch((error) => {
                console.error("Error fetching README content:", error);
            });
    }, [username, repoName]);

    return (
        <div className="shiyamal">
            <h4>README</h4>
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
        </div>
    );
};

export default Readme;
