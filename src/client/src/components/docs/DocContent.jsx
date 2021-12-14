import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { serverUrl } from "../../data/values";

function DocContent(props) {
  let [article, setArticle] = useState({ content: "" });

  let { slug } = useParams();
  let location = useLocation();

  async function fetchArticle() {
    try {
      let res = await fetch(serverUrl + `articles/${slug}`);
      let data = await res.json();
      console.log(data);
      setArticle(data);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchArticle();
  }, [location.pathname]);

  return (
    <div class="docs-container-half">
      <div class="p-3 fit-content">
        <Markdown options={{ wrapper: "article" }}>{article.content}</Markdown>
      </div>
    </div>
  );
}

export default DocContent;
