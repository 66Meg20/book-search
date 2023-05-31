import React, { useState } from "react";
import axios from "axios";

export default function Author() {
  const [authorData, setAuthorData] = useState({ ready: false });
  function handleAuthorResponse(response) {
    console.log(response.data);

    setAuthorData({
      ready: true,
      name: response.data.docs[0].name,
      topWork: response.data.docs[0].top_work,
    });
  }
  if (authorData.ready) {
    return (
      <div>
        <h2>{authorData.name}</h2>
        <h3>{authorData.topWork}</h3>
      </div>
    );
  } else {
    let authorApiUrl = `https://openlibrary.org/search/authors.json?q=jennifer%20l%20armentrout`;
    axios.get(authorApiUrl).then(handleAuthorResponse);
  }
}
