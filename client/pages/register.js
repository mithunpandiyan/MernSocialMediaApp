import { useState } from "react";

const Register = () => {
  const [name, setName] = "";
  const [email, setEmail] = "";
  const [password, setPassword] = "";
  const [secret, setSecret] = "";

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h1>Register</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group p-2">
              <small>
                <label className="text-muted"> Your Name</label>
              </small>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>

            <div className="form-group  p-2">
              <small>
                <label className="text-muted"> Your Email address</label>
              </small>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>

            <div className="form-group  p-2">
              <small>
                <label className="text-muted"> Password</label>
              </small>
              <input
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group  p-2">
              <small>
                <label className="text-muted"> Pick a question</label>
              </small>
              <select className="form-control">
                <option> What is your favorite color ?</option>
                <option> What is your birth place name ?</option>
                <option> What is your first pet name ?</option>
              </select>
              <small className="form-text text-muted">
                You can use this to reset your password if forgotten!
              </small>
            </div>

            <div className="form-group  p-2">
              <input
              value={secret}
              onChange={(event)=>setSecret(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Write  your answer"
              />
            </div>
            <div className="py-1 p-2">
              <button className="btn btn-primary col-12">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
