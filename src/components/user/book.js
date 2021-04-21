import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import Axios from "axios";

const Book = () => {
  const [Tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    Axios.get("https://bus-tickets-booking.herokuapp.com/ticket/open").then(
      (res) => {
        setTickets(res.data);
      }
    );
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJhY2tncm91bmQlMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "100vh",
      }}
    >
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
        Available Seats
      </h1>
      <div style={{ display: "flex" }}>
        <div
          className="bg-light-grey dib br3 ma2 pa3 bw2 shadow-5"
          style={{
            width: "300px",
            marginLeft: "10%",
            border: "2px solid black",
            boxShadow: "25px 50px 80px black",
          }}
        >
          {Tickets.map((i, j) => {
            return (
              <>
                <button
                  className="card bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5"
                  style={{ padding: "5px" }}
                  onClick={() => setShowForm(true)}
                >
                  {i}
                </button>
              </>
            );
          })}
        </div>
        <div
          className="row"
          style={{
            marginRight: "0",
            marginLeft: "25%",
            float: "right",
            marginTop: "0%",
          }}
        >
          <div className="row">
            <div className="col-md-4">
              {showForm ? <ShowForm setShowForm={setShowForm} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowForm = ({ setShowForm }) => {
  const name = React.useRef(null);
  const seatNo = React.useRef(null);
  const phonenumber = React.useRef(null);
  const email = React.useRef(null);

  const [error, seterror] = useState();
  const [errorn, seterrorn] = useState();
  const [errorm, seterrorm] = useState();
  const [errors, seterrors] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      seatNo: seatNo.current.value,
      passenger: {
        name: name.current.value,
        phNo: phonenumber.current.value,
        email: email.current.value,
      },
    };

    const validateForm = () => {
      let errors = {};
      let formIsValid = true;

      if (!name.current.value) {
        formIsValid = false;
        errors["name"] = "*Please enter username";
        seterror(true);
      }

      if (!seatNo.current.value) {
        formIsValid = false;
        errors["seatNo"] = "*Please select SeatNo";
        seterrors(true);
      }

      if (!phonenumber.current.value) {
        formIsValid = false;
        errors["phonenumber"] = "*Please enter mobile no.";
        seterrorm(true);
      }

      if (phonenumber.current.value) {
        if (!phonenumber.current.value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
          formIsValid = false;
          errors["phonenumber"] = "*Please enter valid mobile no.";
          seterrorm(true);
        }
      }

      if (!email.current.value) {
        formIsValid = false;
        errors["email"] = "*Please enter email";
        seterrorn(true);
      }

      return formIsValid;
    };

    if (validateForm()) {
      console.log(data);

      Axios.post(
        "https://bus-tickets-booking.herokuapp.com/ticket/booking",
        data
      )

        .then((response) => {
          console.log(response);
        })
        .then(() => setShowForm(false))
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div
      style={{
        backgroundColor: "darkgrey",
        padding: "20px",
        width: "400%",
        borderRadius: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", fontFamily: "cursive" }}>DETAILS</h2>
      <form id="add-app" onSubmit={handleSubmit}>
        <input type="text" name="name" ref={name} placeholder="Enter name" />
        <br />
        <br />
        {error ? <div className="errorMsg">*Enter name</div> : null}
        <input
          type="text"
          name="seatNo"
          ref={seatNo}
          placeholder="Enter seatNo"
        />
        <br />
        <br />
        {errors ? <div className="errorMsg">*Enter SeatNo</div> : null}
        <input
          type="text"
          name="phonenumber"
          ref={phonenumber}
          placeholder="Enter Mobile"
        />{" "}
        <br />
        <br />
        {errorm ? <div className="errorMsg">*Enter Mobile number</div> : null}
        <input
          type="email"
          name="email"
          ref={email}
          placeholder="Enter Email"
        />
        <br />
        <br />
        {errorn ? <div className="errorMsg">*Enter email</div> : null}
        <center>
          <button
            className="btn btn-success"
            style={{ display: "flex", background: "green" }}
          >
            Update
          </button>
        </center>
      </form>
    </div>
  );
};

export default Book;
