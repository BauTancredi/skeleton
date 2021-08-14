import logo from "../../images/logo.svg";

import "./index.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <h1>LEONIDAS ESTEBAN.COM</h1>
    </header>
  );
};

export default Header;
