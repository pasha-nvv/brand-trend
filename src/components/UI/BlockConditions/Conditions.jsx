import './../../../App.css';
import Conditions__One from '../../../assets/Conditions/conditions-one.jpg';

const Conditions = () => {
  return (
    <div className='conditions'>
      <h2 className='h1__folowing p__conditions'>
        {'Conditions (\u0423\u043c\u043e\u0432\u0438)'}
      </h2>
      <div className='conditions__image'>
        <img
          src={Conditions__One}
          className='conditions__img'
          alt='Conditions one page'
        />
      </div>
    </div>
  );
};

export default Conditions;
