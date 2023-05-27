import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone
  } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faInstagram,
    faGithub
    
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-item">
            <FontAwesomeIcon icon={faPhone} style={{color: "#874efe",}} /> 123-456-7890
            </div>

            <a className="footer-item" href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} style={{color: "#874efe",}} />
            </a>

            <a className="footer-item" href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} style={{color: "#874efe",}} />
            </a>

            <a className="footer-item" href="https://github.com">
            <FontAwesomeIcon icon={faGithub} style={{color: "#874efe",}} />
            </a>

        </footer>
    );
}