import './../../../App.css';
import Conditions__One from '../../../assets/Conditions/conditions-one.jpg';
import Dimensional__stick from '../../../assets/Conditions/stick.jpg';

const Conditions = () => {
  return (
    <div className='conditions' id='conditions'>
      <h2 className='h1__folowing p__conditions'>
        Conditions and dimensional stick <br /> (Умови та розмірна сітка)
      </h2>
      <div className='conditions__image'>
        <img
          src={Conditions__One}
          className='conditions__img'
          alt='Conditions one page'
        />
        <img
          src={Dimensional__stick}
          className='conditions__img'
          alt='Conditions one page'
        />
      </div>
    </div>
  );
};

export default Conditions;
