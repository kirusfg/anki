import { useState } from "react";

import "./styles/Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [definition, setDefinition] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const body = JSON.stringify({
      title: title,
      category: category,
      definition: definition,
    });

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      redirect: "manual",
      body,
      headers,
    };

    fetch("http://localhost:3001/api/v1/createCard", options).catch((error) =>
      console.log("error", error)
    );
  };

  return (
    <div className="Create">
      <form onSubmit={submit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          type="text"
          value={definition}
          placeholder="Definition"
          onChange={(e) => {
            setDefinition(e.target.value);
          }}
        />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default Create;
