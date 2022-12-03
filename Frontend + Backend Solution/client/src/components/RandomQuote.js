import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../reusables/fetchAPI";
import classes from "./RandomQuote.module.css";

function RandomQuote() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const [random, setRandom] = useState("");

  const dataFetchedRef = useRef(false);

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * posts.length);
    const item = posts[randomIndex];
    setRandom(item);
  };

  const handleFetchData = (data, state) => {
    if (state === "ok") {
      setPosts(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      const item = data[randomIndex];
      setRandom(item);
    } else {
      setError(data);
    }
  };
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchPosts("http://localhost:5000/quotes/random-quote", handleFetchData);
  }, []);

  if (error !== "") {
    return <div>{error}</div>;
  }

  return (
    <div className={classes.main}>
      <div className={classes.buttonsDiv}>
        <Link className={classes.home} to={"/"}>
          Back to List
        </Link>
        <button className={classes.button} onClick={handleRandomQuote}>
          New Quote
        </button>
      </div>
      <div className={classes.randomQuote}>
        <p className={classes.text}>{random.text}</p>
        <p className={classes.author}>{random.author}</p>
      </div>
    </div>
  );
}

export default RandomQuote;
