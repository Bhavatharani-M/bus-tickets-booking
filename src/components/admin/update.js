import React from "react";
import axios from "axios";
import "./style.css";
import Navbar from "./navbar";

export class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BusName: "",
      From: "",
      To: "",
      Cost: "",
      StartTime: "",
      detail: "",
    };

    this.handleChangeBusName = this.handleChangeBusName.bind(this);

    this.handleChangeFrom = this.handleChangeFrom.bind(this);

    this.handleChangeTo = this.handleChangeTo.bind(this);

    this.handleChangeCost = this.handleChangeCost.bind(this);

    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChangeBusName(e) {
    this.setState({ BusName: e.target.value });
  }

  handleChangeFrom(e) {
    this.setState({ From: e.target.value });
  }

  handleChangeTo(e) {
    this.setState({ To: e.target.value });
  }

  handleChangeStartTime(e) {
    this.setState({ StartTime: e.target.value });
  }

  handleChangeCost(e) {
    this.setState({ Cost: e.target.value });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    var data = {
      BusName: this.state.BusName,
      From: this.state.From,
      To: this.state.To,
      StartTime: this.state.StartTime,
      Cost: this.state.Cost,
    };

    axios
      .put(
        "http://localhost:3002/update/details/60753c508fb098072c105f83",
        data
      )
      .then(function (response) {
        if (response.status === 200) {
          //this.setState({detail:"update successful"});
          alert("update successful");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="base-containerls" ref={this.props.containerRef}>
          <div className="headerls">Bus Details</div>
          <div className="contentls">
            <div className="imagels"></div>
            <div className="formls">
              <div className="form-groupls">
                <input
                  type="BusName"
                  name="BusName"
                  id="BusName"
                  value={this.state.BusName}
                  onChange={this.handleChangeBusName}
                  placeholder="Enter BusName"
                />
              </div>
              <div className="form-groupls">
                <input
                  type="From"
                  name="From"
                  id="From"
                  value={this.state.From}
                  onChange={this.handleChangeFrom}
                  placeholder="Enter From"
                />
              </div>
              <div className="form-groupls">
                <input
                  type="To"
                  name="To"
                  id="To"
                  value={this.state.To}
                  onChange={this.handleChangeTo}
                  placeholder="Enter To"
                />
              </div>
              <div className="form-groupls">
                <input
                  type="StartTime"
                  name="StartTime"
                  id="StartTime"
                  value={this.state.StartTime}
                  onChange={this.handleChangeStartTime}
                  placeholder="Enter Start Time&Date"
                />
              </div>
              <div className="form-groupls">
                <input
                  type="Cost"
                  name="Cost"
                  id="Cost"
                  value={this.state.Cost}
                  onChange={this.handleChangeCost}
                  placeholder="Enter Cost"
                />
              </div>
            </div>
          </div>
          <div className="footerls">
            <button
              onClick={this.submituserRegistrationForm}
              className="buttonlog"
            >
              Update
            </button>
          </div>
          <div>
            <h1>{this.state.detail}</h1>
          </div>
        </div>
      </>
    );
  }
}
