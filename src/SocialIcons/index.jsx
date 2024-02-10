import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";

const SocialIcons = () => {
  return (
    <div style={{ position: 'fixed', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 1000 }}>

      <div style={{ marginBottom: '10px', backgroundColor:'#0de2f1', padding:'2px',borderRadius:'2px' }}>
        <a id="s1" href="#"><IoLogoFacebook size={30} color='black'  /></a>
      </div>
      <div style={{ marginBottom: '10px', backgroundColor:'#0de2f1' , padding:'2px',borderRadius:'2px' }}>
      <a id="s1" href="#"><TfiEmail size={30}  color='black'/></a>
      </div>
      <div style={{ marginBottom: '10px', backgroundColor:'#0de2f1' , padding:'2px',borderRadius:'2px' }}>
      <a id="s1" href="tel:+94769673620"><MdAddIcCall size={30} color='black' /></a>
      </div>
      <div style={{ marginBottom: '10px', backgroundColor:'#0de2f1' , padding:'2px',borderRadius:'2px' }}>
      <a id="s1" href="#"><IoLogoLinkedin size={30} color='black' /></a>
    </div>
    </div>
  );
};

export default SocialIcons;
