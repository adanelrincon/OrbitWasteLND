import "./Footer.css";

import { FaTwitterSquare, FaGithubSquare , FaRssSquare , FaFigma ,  FaLock } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h1>Get in touch</h1>
          <ul className="ul-footer">
            <li><a>Contact Form</a></li>
            <li><a>adanperezhernandez@alumno.ieselrincon.es</a></li>
            <li><a>adanph15ph@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h1>Connect</h1>
          <ul className="ul-footer">
            <li><FaGithubSquare className="icon"/><a href="https://github.com/adanelrincon">GitHub</a></li>
            <li><FaTwitterSquare className="icon"/><a href="https://twitter.com/adn_1_5">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h1>News & Info</h1>
          <ul className="ul-footer">
            <li><FaRssSquare className="icon"/><a href="\rss\OrbitWaste.xml">RSS</a></li>
            <li><FaFigma className="icon"/><a href="https://www.figma.com/file/v7AfcfS4ft8wLIgYiDAPeL/OrbitWasteAdan?node-id=0%3A1&t=tzUgrHcNWfHYFI4K-1">Figma</a></li>
            <li><FaLock className="icon"/><a href="/privacity">Privacity</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-container-logo">
        <div><p>© 2023 WasteOrbit | By Adán Pérez Hernández</p></div>
        <div><img className="mini-logo" src={`/logo.png`}/></div>
      </div>
    </footer>
  );
}