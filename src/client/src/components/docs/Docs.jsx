import { useState, useEffect } from "react";
import logo from "../../assets/logos/tc-logo-long-wl.png";
import { NavLink, Outlet } from "react-router-dom";
import { serverUrl } from "../../data/values";

function Docs(props) {
  let [articles, setArticles] = useState([]);

  async function fetchArticles() {
    try {
      let res = await fetch(serverUrl + `articles`);
      let data = await res.json();
      console.log(data);
      setArticles(data);
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div class="docs-container">
      <div class="docs-container-half">
        <img class="logo" src={logo} alt="TrueCoders' Company Logo" />
        <ul class="sidenav">
          {articles.map((a) => (
            <li>
              <NavLink to={a.slug}>{a.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Docs;
