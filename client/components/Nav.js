import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const Nav = () => {
  const [current, setCurrent] = useState("");
  //For token and local storage
  const [state, setState] = useContext(UserContext);

  //To check out the exact page route in a brower console
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);
  console.log("current ==>", current);

  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };
  return (
    <nav
      className="nav d-flex justify-content-between"
      style={{ backgroundColor: "#1e81b0" }}
    >
      <Link
        href="/"
        className={`nav-link text-light logo ${current === "/" && "active"}`}
      >
        Project
      </Link>

      {state !== null ? (
        <>
          <Link
            href="/user/dashboard"
            className={`nav-link text-light ${
              current === "/user/dashboard" && "active"
            }`}
          >
            {state && state.user && state.user.name}
          </Link>

          <a onClick={logout} className="nav-link text-light cursor">
            Logout
          </a>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className={`nav-link text-light ${
              current === "/login" && "active"
            }`}
          >
            Login
          </Link>

          <Link
            href="/register"
            className={`nav-link text-light ${
              current === "/register" && "active"
            }`}
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
