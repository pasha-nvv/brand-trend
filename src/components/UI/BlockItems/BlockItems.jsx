import './../../../App.css';
import TitleItems from './TitleItems';
import ButtonShop from './ButtonShop';
import BlocksProducts from './BlocksProduct';

const BlockItems = () => {
  return (
  <section className='block__items' id='new'>
    <div className='title__block'>
    <TitleItems/>
    <ButtonShop/>
    </div>
    <div className="products__blocks">
    <BlocksProducts />
    </div>
  </section>
  )
}


export default BlockItems;