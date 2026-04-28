import './../../../../App.css';
import ButtonOne from './ButtonOne';
import TitleOne from './TitleOne';


const BlockOne = () => {
  return (
    <div className="block__one">
      <div className="block__one__content">
        <TitleOne/>
        <ButtonOne/>
      </div>
    </div>
  )
}


export default BlockOne;
