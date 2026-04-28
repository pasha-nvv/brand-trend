import './../../../App.css';
import TitleClothes from '../BlockClothes/TitleClothes';
import ButtonCollection from './ButtonCollection';

const BlockCollection = () => {
  return (
  <div className='block__collection' id='collection'>
    <TitleClothes/>
    <ButtonCollection/>
  </div>
  )
}


export default BlockCollection;
