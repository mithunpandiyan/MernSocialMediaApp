import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const forgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, newPassword, secret);
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/forgot-password`,
        {
          email,
          newPassword,
          secret,
        }
      );
      console.log("forgot password data=>",data);
    //   setEmail("");
    //   setPassword("");
    //   setSecret("");
    //   setName("");
    //   setOk(data.ok); // Toaster Success
    //   setLoading(false);
    } catch (error) {
      toast.error(error.response.data);
      setLoading(false);
    }

    if (state && state.token) router.push("/");
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-Image text-light">
        <div className="col text-center">
          <h1>Forgot Password</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <ForgotPasswordForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
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
            <p className="text-center">
              Congratulations! You can login with your new Password
            </p>
            <div className="text-center">
              <Link href="/login">
                Login
                {/* <div className="btn btn-primary btn-sm">Login</div> */}
              </Link>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default forgotPassword;
