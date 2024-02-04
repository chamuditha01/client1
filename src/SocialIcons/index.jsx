import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from "react-icons/io";

const SocialIcons = () => {
  return (
    <div style={{ position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-50%)', zIndex: 1000 }}>
      <div style={{ marginBottom: '10px' }}>
        <IoLogoFacebook size={30}  />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <FaTwitter size={30} color="#1da1f2" />
      </div>
      <div>
        <FaInstagram size={30} color="#c13584" />
      </div>
    </div>
  );
};

export default SocialIcons;
