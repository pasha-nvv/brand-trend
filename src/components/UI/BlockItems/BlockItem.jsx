import './../../../App.css';

const BlockItem = ({img, title, price, size, color, art, material, btntext, href}) => {
  return(
    <div className="block__item">
      <img src={img} className='img__products' alt="photo clothes" />
      <div className='block__title__price'>
        <p className='p__products'>{title}</p>
        <p className='p__products'>{price}</p>
      </div>
      <p className='p__products'>{size}</p>
      <p className='p__products'>{color}</p>
      <p className='p__products'>{art}</p>
      <p className='p__products'>{material}</p>
      <a href={href} className='btn__products'>{btntext}</a>
    </div>
  )
}

export default BlockItem;