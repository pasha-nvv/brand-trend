import './../../../App.css';
import TitleClothes from '../BlockClothes/TitleClothes';
import ButtonConditions from './ButtonConditions';


const BlockCollection = () => {
  return (
  <div className='block__collection' id='collection'>
    <TitleClothes/>
    <ButtonConditions/>
  </div>
  )
}


export default BlockCollection;
