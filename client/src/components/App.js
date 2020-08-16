import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [text, setText] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/tweets/")
  //     .then((response) => setText(response.data));
  // }, []);

  const tweets = text.map((item) => {
    return <p key={item._id}>{item.text}</p>;
  });

  const onSubmitTerm = () => {
    axios
      .get(`http://localhost:8080/tweets/word/${searchTerm}`)
      .then((response) => console.log(response));
  };

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}></input>
      <button onClick={onSubmitTerm}>Submit</button>
      <h1>{tweets}</h1>
    </div>
  );
};

export default App;
