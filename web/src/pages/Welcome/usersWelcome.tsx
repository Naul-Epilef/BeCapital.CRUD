import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import api from "../../config/api";

function UserWelcome() {
  interface User {
    id: string;
    name: string;
    email: string;
    created_at: string;
  }

  const { params } = useRouteMatch<User>();
  const path = "/users/" + params.id;
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    email: "",
    created_at: "",
  });

  useEffect(() => {
    api.get(path).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <>
      <h1>
        Olá {user.name} | {user.email}
      </h1>
      <br />
      <Link to="/users">Voltar</Link>
    </>
  );
}

export default UserWelcome;
