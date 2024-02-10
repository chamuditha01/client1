import AboutUs from "../Aboutus/AboutUs";
import Footer from "../Footer/Footer";
import Navbar1 from "../Navbar";

function AboutUsPage(){
    return(
        <div>
            <Navbar1/>
            <div style={{marginTop:'132px'}}></div>
            <AboutUs/>
            <div style={{marginTop:'80px'}}></div>
            <Footer/>
        </div>
    )
}
export default AboutUsPage;