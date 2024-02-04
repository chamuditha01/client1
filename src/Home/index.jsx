
import './styles.css'
import Header from '../Header/Header';
import WhatsAppIcon from '../wtsp';

import Footer from '../Footer/Footer';
import SocialIcons from '../SocialIcons';

const Home =()=>{ 
  return(
    <div>
        <SocialIcons/><Header/>
       <WhatsAppIcon/><Footer/>

       
    </div>
  )
}
export default Home;