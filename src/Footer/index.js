import './index.css';
import React from 'react';
import { RiTrophyLine } from "react-icons/ri";
import { TiSocialTwitter} from "react-icons/ti";
import { TiSocialInstagram} from "react-icons/ti";
import { TiSocialFacebook} from "react-icons/ti";

function Footer() {
  return (
    <footer className='footer bg-dark text-white'>
        <div className='container-custom d-flex justify-content-between align-items-center py-3 border-highlight'>
            <div className='col-md-4 d-flex align-items-center'>
                <a href="/" class="me-2 text-muted text-decoration-none">
                    <RiTrophyLine />
                    <span>&copy; 2022 SeniorFitness</span>
                     
                </a>
            </div>
            <ul className='nav col-md-4 justify-content-end list-unstyled d-flex text-white'>
                <li className='ms-3'><a className='text-muted' href="#"><TiSocialTwitter /> </a></li>
                <li className='ms-3'><a className='text-muted' href="#"><TiSocialInstagram /> </a></li>
                <li className='ms-3'><a className='text-muted' href="#"><TiSocialFacebook /> </a></li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;
