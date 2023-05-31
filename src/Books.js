import React from "react";
import axios from "axios";

export default function Books() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiUrl = `https://openlibrary.org/search.json?title=the+lord+of+the+rings`;
  axios.get(apiUrl).then(handleResponse);
}
