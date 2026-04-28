import './../../../App.css';
import TitleItems from './TitleItems';
import BlocksProducts from './BlocksProduct';

const BlockItems = () => {
  return (
  <section className='block__items' id='new'>
    <div className='title__block'>
    <TitleItems/>
    </div>
    <div className="products__blocks">
    <BlocksProducts />
    </div>
  </section>
  )
}


export default BlockItems;