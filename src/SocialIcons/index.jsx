import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";

const SocialIcons = () => {
  return (
    <div style={{ position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-50%)', zIndex: 1000 }}>
<<<<<<< HEAD
      <div style={{ marginBottom: '10px', backgroundColor:'#FFC000', padding:'2px',borderRadius:'2px' }}>
        <a id="s1" href="#"><IoLogoFacebook size={30} color='black'  /></a>
      </div>
      <div style={{ marginBottom: '10px', backgroundColor:'#FFC000' , padding:'2px',borderRadius:'2px' }}>
      <a id="s1" href="#"><TfiEmail size={30}  color='black'/></a>
      </div>
      <div style={{ marginBottom: '10px', backgroundColor:'#FFC000' , padding:'2px',borderRadius:'2px' }}>
      <a id="s1" href="#"><MdAddIcCall size={30} color='black' /></a>
      </div>
      <div style={{ marginBottom: '10px', backgroundColor:'#FFC000' , padding:'2px',borderRadius:'2px' }}>
      <a id="s1" href="#"><IoLogoLinkedin size={30} color='black' /></a>
=======
      <div style={{ marginBottom: '10px', backgroundColor:'#FF5733', padding:'2px',borderRadius:'2px' }}>
        <IoLogoFacebook size={30}  />
      </div>
      <div style={{ marginBottom: '10px', backgroundColor:'#FF5733' , padding:'2px',borderRadius:'2px' }}>
        <FaTwitter size={30}  />
      </div>
      <div style={{ marginBottom: '10px', backgroundColor:'#FF5733' , padding:'2px',borderRadius:'2px' }}>
        <FaInstagram size={30} color="" />
>>>>>>> 8bafecdc43170d7eaf3c18c2f9bdbd69b13372c9
      </div>
    </div>
  );
};

export default SocialIcons;
