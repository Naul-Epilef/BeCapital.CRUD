import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../config/api";

function UserSignIn() {
  const path = "/users";
  const history = useHistory();

  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");

  function handleAddUser() {
    api
      .post(path, {
        name: inputName,
        email: inputEmail,
      })
      .then((response) => {
        const newPath = path + "/" + response.data.id;
        history.push(newPath);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <form method="post" action={path}>
      <input
        type="text"
        onChange={(i) => setInputName(i.currentTarget.value)}
        placeholder="name"
        name="name"
      />
      <input
        type="email"
        onChange={(i) => setInputEmail(i.currentTarget.value)}
        placeholder="email"
        name="email"
      />
      <button type="button" onClick={handleAddUser}>
        Salvar
      </button>
    </form>
  );
}

export default UserSignIn;
