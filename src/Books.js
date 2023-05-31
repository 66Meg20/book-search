import React, { useState } from "react";
import axios from "axios";
import Author from "./Author.js";
import "./Books.css";
export default function Books() {
  const [bookData, setBookData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setBookData({
      ready: true,
      title: response.data.docs[0].title,
    });
  }
  if (bookData.ready) {
    return (
      <div className="Books">
        <h1> {bookData.title}</h1>
        <Author />

        <form>
          <input type="search" placeholder="book name" />
          <button>Search</button>
        </form>
        <ul>
          <li>From blood and ash</li>
          <li>Throne of glass</li>
          <li>A court of thorns and roses</li>
        </ul>
      </div>
    );
  } else {
    let apiUrl = `https://openlibrary.org/search.json?title=from+blood+and+ash`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
