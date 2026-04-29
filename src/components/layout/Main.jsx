import './../../App.css';
import BlockClothes from '../UI/BlockClothes/BlockClothes';
import BlockCollection from '../UI/BlockCollection/BlockCollection';
import InstagramBlock from '../UI/InstagramBlock';
import Reserving from '../UI/Reserving';
import ThankYou from '../UI/ThankYou';
import Conditions from '../UI/BlockConditions/Conditions';
import BlockAbout from './../UI/BlockItems/BlockAbout';

const Main = () => {
  return (
  <main className='main'>
    <section className='promo__blocks'>
    <BlockClothes/>
    <BlockCollection/>
    </section>
    
    <BlockAbout/>

    <Reserving/>

    <InstagramBlock/>

    <ThankYou/>

    <Conditions/>
  </main>
  )
}


export default Main;
