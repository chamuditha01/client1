
import React from 'react';
import wtspimg from './pngwing.com.png';
import './index.css';

const WhatsAppIcon = () => {
    return (
        <div >
            <a  href=""  target="_blank">
            <img className='whatsapp-icon' src={wtspimg} alt="WhatsApp" />
        </a>
        </div>
        
    );
};

export default WhatsAppIcon;
