
import './styles.css'
import Header from '../Header/Header';
import WhatsAppIcon from '../wtsp';
import Container from "react-bootstrap/Container";
import Footer from '../Footer/Footer';
import SocialIcons from '../SocialIcons';

const Home =()=>{ 
  return(
    <div>
        <SocialIcons/>
        <Header/>
        <WhatsAppIcon/>
        <div id="footer" >
        <Footer/>
        </div>
    </div>
  )
}
export default Home;