import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Axios from "axios";

const Close = () => {
  const [Tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3002/ticket/closed").then((res) => {
      setTickets(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <h1
        style={{
          textAlign: "center",
          color: "rgb(78, 124, 124)",
          fontSize: "56px",
          fontWeight: "800",
          margin: "0%",
        }}
      >
        Reserved Seats
      </h1>
      {Tickets.map((i, j) => {
        return (
          <>
            <button
              className="card bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5"
              style={{ marginLeft: "10%" }}
              onClick={() => setShowForm(true)}
            >
              S.No
              <br /> {i.seatNo}{" "}
            </button>
            <div className="row">
              <div className="col-md-4">
                {" "}
                {showForm ? (
                  <ShowForm id={i._id} setShowForm={setShowForm} />
                ) : null}{" "}
              </div>
            </div>
          </>
        );
      })}{" "}
    </>
  );
};

const ShowForm = ({ id, setShowForm }) => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phno, setphno] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:3002/ticket/details/${id}`).then((res) => {
      setname(res.data.name);
      setemail(res.data.email);
      setphno(res.data.phNo);
    });
  }, [id]);

  return (
    <>
      <button
        style={{
          width: "250px",
          height: "100%",
          backgroundColor: "grey",
          border: "4px solid black",
          marginLeft: "10%",
          padding: "2%",
          color: "whitesmoke",
        }}
        onClick={() => {
          setShowForm(false);
        }}
      >
        Name:{name}
        <br />
        Email:{email}
        <br />
        Phone number:{phno}{" "}
      </button>
    </>
  );
};

export default Close;
