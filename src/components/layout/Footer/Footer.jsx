import './../../../App.css';
import TitileFooter from './TitleFooter';
import Navigation from '../Header/Navigation';
import LinkFooter from './LinkFooter';

const Footer = () => {
  return (
  <footer className='footer'>
    <div className='footer__block'>
      <TitileFooter/>
      <Navigation/>
      <LinkFooter/>
    </div>
  </footer>
  )
}


export default Footer;