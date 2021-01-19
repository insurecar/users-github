import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Folders = () => {
  const { userId } = useParams();
  console.log(userId);
  const [repo, setRepo] = useState([]);
  const [language, setLanguage] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userId}/repos`).then((response) => setRepo(response));
  }, []);

  // console.log(repo);

  return (
    <>
      <div className="folders">{userId}</div>
      <div className="folders">{userId}</div>
      <div className="folders">{userId}</div>
      <div className="folders">{userId}</div>
      <div className="folders">{userId}</div>
      <div className="folders">{userId}</div>
      <div className="folders">{userId}</div>
    </>
  );
};

export default Folders;
