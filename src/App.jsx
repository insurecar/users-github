import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Folders from "./Folders";
import { Link, Route } from "react-router-dom";

const App = () => {
  const ref = useRef();
  const [usersName, setUsersName] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    const date = Date.now();
    const updateUser = {
      date,
      name: ref.current.value,
    };

    axios.post("https://5ffc47cd63ea2f0017bdc0f7.mockapi.io/users", updateUser).then((response) => fetchData(response));
    ref.current.value = "";
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("https://5ffc47cd63ea2f0017bdc0f7.mockapi.io/users").then((response) => setUsersName(response.data));
  };

  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="menu">
          <form action="" method="post" onSubmit={handleChange}>
            <input type="text" className="menu__input" ref={ref} />
          </form>
          <div className="menu__search">Search History</div>
          <ul className="list">
            {[...usersName]
              .reverse()
              .slice(0, 5)
              .map(({ id, name }) => (
                <li className="list__item" key={id}>
                  <Link className="list__item-link" to={`/${name}`}>
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="content">
          <Route path="/:userId">
            <Folders />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default App;
