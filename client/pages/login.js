import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { UserContext } from "../context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        {
          email: email,
          password: password,
        }
      );
      setState({
        user: data.user,
        token: data.token,
      });
      //Save in LocalStorage
      router.push("/");
      window.localStorage.setItem("auth", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data);
      setLoading(false);
    }
  };

  //Redirect
  useEffect(() => {}, []);

  if (state && state.token) router.push("/");

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-default-Image text-light">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            page="login"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            Not yet registered ?<Link href="/register">Register</Link>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center">
            <Link className="text-danger " href="/forgot-password">Forgot Password</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
