import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import "../styles/footer.scss";

export function Footer() {
  return (
    <div className="bg-footer">
      <footer>
        <div className="info-content">
          <h2>Informações</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.
          </p>
          <ul className="social-media">
            <li><FaFacebook size={20} color="#757575" /></li>
            <li><FaTwitter size={20} color="#757575" /></li>
            <li><FaInstagramSquare size={20} color="#757575" /></li>
            <li><FaLinkedin size={20} color="#757575" /></li>
          </ul>
        </div>

        <div className="navigation-content">
          <h2 className="navigation-title">Navegação</h2>

          <ul className="navigation-arrows">
            <li>
              <MdOutlineKeyboardArrowRight color="#757575" />
              <span className="text-navigation">Clube</span>
            </li>
            <li>
              <MdOutlineKeyboardArrowRight color="#757575" />
              <span className="text-navigation">Assinantes</span>
            </li>
            <li>
              <MdOutlineKeyboardArrowRight color="#757575" />
              <span className="text-navigation">Cliente</span>
            </li>
            <li>
              <MdOutlineKeyboardArrowRight color="#757575" />
              <span className="text-navigation">Instrutor</span>
            </li>
          </ul>
        </div>

        <div className="contact-content">
          <h2>Entre em contato</h2>
          <span>example@hotmail.com</span>
        </div>
      </footer>
    </div>
  );
}