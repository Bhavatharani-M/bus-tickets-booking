import React, { useEffect, useState } from "react";
import { Login } from "./login";
import Open from "./open";

const Admin = () => {
  const [admin, setadmin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("admin") === "admin") {
      setadmin(true);
    }
  }, [sessionStorage.getItem("admnin")]);

  return <> {admin ? <Open /> : <Login />} </>;
};

export default Admin;
