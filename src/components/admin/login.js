import React from "react";
import axios from "axios";
import Welcome from "./undraw_welcome_3gvl.svg";
import "./style.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    if (this.validateForm()) {
      var data = {
        email: this.state.email,

        password: this.state.password,
      };

      axios
        .post("https://bus-tickets-booking.herokuapp.com/ticket/login", data)
        .then(function (response) {
          console.log(response);
          if (response.data === true) {
            window.location.href = "/open";
            sessionStorage.setItem("admin", "admin");
            console.log(sessionStorage.getItem("admin"));
          } else {
            window.location.href = "/admin";
          }
        })
        .catch(function (error) {
          alert(error);
        });
    }
  }

  validateForm() {
    let errors = {};

    let formIsValid = true;

    if (!this.state.email) {
      formIsValid = false;

      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof this.state.email !== "undefined") {
      var pattern = new RegExp(
        /^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(this.state.email)) {
        formIsValid = false;

        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!this.state.password) {
      formIsValid = false;

      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors,
    });

    return formIsValid;
  }

  render() {
    return (
      <div className="base-containerls" ref={this.props.containerRef}>
        <div className="imagels">
          <img src={Welcome} height="200" width="200" alt="welcome" />
        </div>
        <div className="headerls">Admin Login</div>
        <div className="contentls">
          <div className="formls">
            <div className="form-groupls">
              <input
                type="email"
                name="email"
                id="exampleEmail"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                placeholder="Enter Email"
              />
            </div>
            <div className="errorMsg">{this.state.errors.email}</div>
            <div className="form-groupls">
              <input
                type="password"
                name="password"
                id="examplePassword"
                value={this.state.password}
                onChange={this.handleChangePassword}
                placeholder="Enter Password"
              />
            </div>
            <div className="errorMsg">{this.state.errors.password}</div>
          </div>
        </div>
        <div className="footerls">
          <button
            onClick={this.submituserRegistrationForm}
            className="buttonlog"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
