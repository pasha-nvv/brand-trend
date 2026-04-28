import './../../App.css';
import BlockClothes from '../UI/BlockClothes/BlockClothes';
import BlockCollection from '../UI/BlockCollection/BlockCollection';
import BlockItems from '../UI/BlockItems/BlockItems';
import InstagramBlock from '../UI/InstagramBlock';

const Main = () => {
  return (
  <main className='main'>
    <section className='about__blocks' id='about'>
    <BlockClothes/>
    <BlockCollection/>
    </section>
    
    <BlockItems/>

    <InstagramBlock/>
  </main>
  )
}


export default Main;