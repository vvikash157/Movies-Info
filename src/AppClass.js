import React, { Component, Fragment } from 'react';
import "./AppClass.css";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.dobRef = React.createRef();

    this.state = {
      isTrue: false,
      firstName: "", // Initialize state variables
      lastName: "",
      dob: "",
      crowd: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.firstName !== "") {
      this.addPerson(this.state.firstName, this.state.lastName, this.state.dob);
    }
  }

  addPerson = (newFirst, newLast, newDOB) => {
    let newPerson = {
      id: this.state.crowd.length + 1,
      firstName: newFirst,
      lastName: newLast,
      dob: newDOB,
    }

    const newList = [...this.state.crowd, newPerson]; // Use spread operator to update state array
    const sorted = newList.sort((a, b) => {
      return a.lastName.localeCompare(b.lastName); // Use localeCompare for string comparison
    });

    this.setState({
      crowd: sorted,
      firstName: "",
      lastName: "",
      dob: ""
    }, () => {
      // After setting state, clear input fields using refs
      this.firstNameRef.current.value = "";
      this.lastNameRef.current.value = "";
      this.dobRef.current.value = "";
    });
  }

  toggleTrue = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue
    }));
  }

  render() {
    return (
      <>
        <hr />
        <h1 className="h1-red">{this.props.msg}</h1>
        <hr />
        {this.state.isTrue &&
          <Fragment>
            <p>The current value of isTrue is true</p>
            <hr />
          </Fragment>
        }
        <hr />
        {this.state.isTrue
          ? <p>Is true</p>
          : <p>Is False</p>
        }
        <hr />
        <a href="#!" className="btn btn-outline-secondary" onClick={this.toggleTrue}>Toggle is true </a>
        <hr />
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              ref={this.firstNameRef}
              autoComplete="first-name-new"
              className="form-control"
              value={this.state.firstName} // Use value from state
              onChange={(event) => this.setState({ firstName: event.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              ref={this.lastNameRef}
              autoComplete="last-name-new"
              className="form-control"
              value={this.state.lastName} // Use value from state
              onChange={(event) => this.setState({ lastName: event.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              ref={this.dobRef}
              autoComplete="dob-new"
              className="form-control"
              value={this.state.dob} // Use value from state
              onChange={(event) => this.setState({ dob: event.target.value })}
            />
          </div>
          <hr />
          <button type="submit" className="btn btn-primary">Submit</button> {/* Use button instead of input for submit */}
        </form>

        <div>
          First Name: {this.state.firstName} <br />
          Last Name: {this.state.lastName} <br />
          DOB: {this.state.dob} <br />
        </div>

        <hr />
        <hr />
        <h3>People</h3>
        <ul className="list-group">
          {this.state.crowd.map((m) => (
            <li key={m.id} className="list-group-item">{m.firstName} {m.lastName}</li>
          ))}
        </ul>
      </>
    );
  }
}
