import { FiMenu } from "react-icons/fi";

import HeaderLogo from "../assets/logo-devit-white.svg";

import "../styles/header.scss";

export function Header() {
  return (
    <div className="header-bg">
      <header>
        <img src={HeaderLogo} alt="devit" className="logo-white" />
        <FiMenu size={32} color="#FFFFFF" />
      </header>
    </div>
  );
}