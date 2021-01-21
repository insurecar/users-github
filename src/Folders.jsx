import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Folders = () => {
  const { userId } = useParams();
  console.log(userId);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userId}/repos`).then((response) => setRepo(response.data));
  }, [userId]);

  console.log(repo);

  return (
    <>
      {[...repo].slice(0, 10).map(({ id, name, language, description }) => (
        <div key={id} className="folders">
          <div className="folders__description">
            <span>{name}</span>
          </div>
          <div className="folders__description">
            Language: <span>{language}</span>
          </div>
          <div className="folders__description">
            Description: <span>{description}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Folders;
