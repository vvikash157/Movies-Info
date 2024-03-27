import React, { Fragment, useState, useEffect,useRef } from 'react';
import "./App.css";

function HelloWorld(props) {

  const [isTrue, setIsTrue] = useState(false);
  const [crowd, setCrowd] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDob] = useState("");
  const firstNameRef=useRef();
  const lastNameRef=useRef(null);
  const dobRef=useRef(null);

  const toggleTrue = () => {
    if (isTrue) {
      setIsTrue(false);
      return
    }
    setIsTrue(true)
  }

  

  const addPerson=(newFirst,newLast,newDOB)=>{
    let newPerson={
      id:crowd.length+1,
      firstName:newFirst,
      lastName: newLast,
      dob:newDOB,
    }

    const newList = crowd.concat(newPerson);
    const sorted = newList.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      } else if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    })
    setCrowd(sorted);
    setFirstName("");
    setLastName("");
    setDob("");
    firstNameRef.current.value="";
    lastNameRef.current.value="";
    dobRef.current.value="";
  }
  

  useEffect(() => {

    console.log("useeffect fired!!!");

    let people = [
      {
        id: 1,
        firstName: "Vikash",
        lastName: "Kumar",
        DOB: "16-10-1998",
      },
      {
        id: 2,
        firstName: "Aakash",
        lastName: "Lamba",
        DOB: "12-12-1999",
      }
    ]
    setCrowd(people);
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (lastName != "") {

    }
    console.log(firstName, lastName, DOB)
  }

  return (
    <Fragment>
      <hr />
      <h1 className="h1-red">{props.msg}</h1>
      <hr />
      {isTrue &&
        <Fragment>
          <p>The current value of isTrue is true</p>
          <hr />
        </Fragment>

      }
      <hr />

      <hr />
      {isTrue
        ? <p>Is true</p>
        : <p>Is False</p>
      }
      <hr />
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle is true </a>
      <hr />

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            ref={firstNameRef}
            autoComplete="first-name-new"
            className="form-control"
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
        </div>
          <input

            title="Last Name"
            type="text"
            name="last-name"
            ref={lastNameRef}
            autoComplete="last-name-new"
            className="form-control"
            onChange={(event) => setLastName(event.target.value)}
          ></input>

            <input
              title="Date of birth"
              type="date"
              name="DOB"
              ref={dobRef}
              autoComplete="Dob-new"
              className="form-control"
              onChange={(event) => setDob(event.target.value)}
            ></input>
        <hr/>
        <input types="submit" value="Submit" className="btn btn-primary"></input>
      </form>


      <div>
        First Name:{firstName}<br />
        Last Name:{lastName}<br />
        Dob:{DOB}<br />
      </div>

      <hr />

      <hr />
      <h3>People</h3>
      <ul className="list-group">
        {crowd.map((m) => (
          <li key={m.id} className="list-group-item">{m.firstName} {m.lastName}</li>
        ))}
      </ul>
    </Fragment>
  )
}
export default HelloWorld;