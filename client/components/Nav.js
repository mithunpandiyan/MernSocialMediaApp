import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav d-flex justify-content-end" style={{backgroundColor:'pink'}}>
      <Link href="/" className="nav-link text-light">Home</Link>

      <Link href="/login" className="nav-link text-light">Login</Link>

      <Link href="/register" className="nav-link text-light">Register</Link>
    </nav>
  );
};

export default Nav;
