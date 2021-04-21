import React from "react";
import axios from "axios";
import "./style.css";
import Navbar from "./navbar";
import Delete from "./undraw_Throw_away_re_x60k.svg";

export class Reset extends React.Component {
  constructor(props) {
    super(props);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    axios
      .delete("http://localhost:3002/ticket/reset")
      .then(function (response) {
        console.log(response);
        alert("Reset is successfull");
      })
      .catch(function (error) {
        alert(error);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="base-containerls" ref={this.props.containerRef}>
          <div className="headerls">Reset all data</div>
          <div className="imagels">
            <img src={Delete} height="300" width="300" alt="welcome" />
          </div>
          <div className="footerls">
            <button
              onClick={this.submituserRegistrationForm}
              className="buttonlog"
            >
              Reset
            </button>
          </div>
        </div>
      </>
    );
  }
}
