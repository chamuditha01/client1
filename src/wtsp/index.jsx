
import React from 'react';
import wtspimg from './pngwing.com.png';
import './index.css';

const WhatsAppIcon = () => {
    return (
        <div >
            <a  href="whatsapp://send?phone=+94740459715&text=Hello%20there!">
            <img className='whatsapp-icon' src={wtspimg} alt="WhatsApp" />
        </a>
        </div>
        
    );
};

export default WhatsAppIcon;
