import './../../../App.css';
import Logo from './Logo';
import Navigation from './Navigation';
import BlockOne from './BlockOne/BlockOne';

const Header = () => {
  return (
    <div className="block__bg">
      <header className="header">
      <Logo/>
      <Navigation/>
    </header>

    <BlockOne/>

    </div>
  )
}


export default Header;
