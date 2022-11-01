import { useState } from "react";
import axios from "axios"; 
const Signup = () => {
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
const onchange=(e)=>{
    e.preventDefault();
const {name,value}=e.target
console.log("---------------------------------------------",value);
setUserSignup({...userSignup,
    [name]:value
})
}
  return (
    <div>
      <div className="mb-3 row">
        <label for="firstName" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readonly
            className="form-control"
            id="staticFirstName"
            value={userSignup.firstName}
            name="firstName"
            onChange={onchange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="lastName" className="col-sm-2 col-form-label">
          Last Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readonly
            className="form-control"
            id="staticLastName"
            value={userSignup.lastName}
            name="lastName"
            onChange={onchange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readonly
            className="form-control"
            id="staticEmail"
            value={userSignup.email}
            name="email"
            onChange={onchange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={userSignup.password}
            name="password"
            onChange={onchange}
          />
        </div>
      </div> <button type="button" class="btn btn-warning">Signup</button>

    </div>
  );
};

export default Signup