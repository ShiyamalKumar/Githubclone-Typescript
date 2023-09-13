import React, { useEffect, useState } from "react";
import axios from "axios";

const Readme = ({ username, repoName }) => {
    const [readmeContent, setReadmeContent] = useState("");

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
        <div>
            <h4>README</h4>
            <div dangerouslySetInnerHTML={{ __html: readmeContent }}></div>
        </div>
    );
};

export default Readme;
