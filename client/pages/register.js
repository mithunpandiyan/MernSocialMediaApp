import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name, email, password, secret);
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        {
          name: name,
          email: email,
          password: password,
          secret: secret,
        }
      );
      setEmail("");
      setPassword("");
      setSecret("");
      setName("");
      setOk(data.ok); // Toaster Success
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data);
      setLoading(false);
    }
  };

 

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-Image text-light">
        <div className="col text-center">
          <h1>Register</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            secret={secret}
            setSecret={setSecret}
            loading={loading}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title={"Congratulations..."}
            size="sm"
            show={ok}
            onHide={() => setOk(false)}
          >
          <Modal.Header closeButton></Modal.Header>
            <p className="text-center">You have successfully registered!</p>
            <div className="text-center">
            <Link href="/login">
              <div className="btn btn-primary btn-sm">Login</div>
            </Link>
            </div>
          </Modal>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center">
            Already registered?{" "}
            <Link href="/login">
              <div>Login</div>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
