import { useState } from "react";
import axios from axios 
const Login = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const onChangePassword = (e) => {
    const password = e.target.password;
    setUserPassword(password);
  };
  const onChangeEmail = (e) => {
    const email = e.target.email;
    setUserEmail(email);
  };
  
  return (
    <div>
      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readonly
            className="form-control-plaintext"
            id="staticEmail"
            value={userEmail}
            name="email"
            onChange={onChangeEmail}
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
            value={userPassword}
            name="password"
            onChange={onChangePassword}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
