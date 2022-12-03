import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../reusables/fetchAPI";
import Nationality from "./Nationality";
import classes from "./ListOfQuotes.module.css";

function ListOfQuotes() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const handleFetchData = (data, state) => {
    if (state === "ok") {
      setPosts(data);
    } else {
      setError(data);
    }
  };
  useEffect(() => {
    fetchPosts("http://localhost:5000/quotes?limit=20", handleFetchData);
  }, []);

  if (error !== "") {
    return <div>{error}</div>;
  }

  return (
    <div className={classes.main}>
      <Link className={classes.random} to={"randomQuotePage"}>
        Random Quote
      </Link>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Quote</td>
            <td>Author</td>
            <td>Nationality</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.text}</td>
                <td>{ele.author}</td>
                <td>
                  <Nationality name={ele.author} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListOfQuotes;
