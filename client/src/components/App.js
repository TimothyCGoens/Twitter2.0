import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [text, setText] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/tweets/")
      .then((response) => setText(response.data));
  }, []);

  const tweets = text.map((item) => {
    return <p key={item._id}>{item.text}</p>;
  });

  const onSubmitTerm = () => {
    axios
      .get(`http://localhost:8080/tweets/word/${searchTerm}`)
      .then((response) => setData(response.data));
  };
  const link = data.map((item) => {
    return (
      <a
        key={item._id}
        target="_blank"
        href={`https://twitter.com/realDonaldTrump/status/${item.id_str}`}>
        {item.text}
      </a>
    );
  });

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}></input>
      <button onClick={onSubmitTerm}>Submit</button>
      <h1>Tweets</h1>
      <p>{link}</p>
    </div>
  );
};

export default App;
