import './../../../App.css';
import BlockItem from './BlockItem';
import Products__One from "../../../assets/ProductsMain/products-one.jpg"
import Products__Two from "../../../assets/ProductsMain/products-two.jpg"
import Products__There from "../../../assets/ProductsMain/products-there.jpg"


const BlocksProducts = () => {
  return (
    <>
    <BlockItem 
    img = {Products__One}
    title = 'Trend Jacket'
    price = '108$'
    size = 'Size: S, M'
    color = 'Color: White, Chocolate'
    art = 'Art: 13162-1'
    material = 'Material: Suit gabardine'
    btntext = 'Write on Instagram'
    href= 'https://www.instagram.com/direct/t/17845759623135390/'
    />

    <BlockItem 
    img = {Products__Two}
    title = 'Trend Suit'
    price = '96$'
    size = 'Size: S, M'
    color = 'Color: Yellow, Pink, Beige'
    art = 'Art: 13075'
    material = 'Material: Muslin'
    btntext = 'Write on Instagram'
    href= 'https://www.instagram.com/direct/t/17845759623135390/'
    />

    <BlockItem 
    img = {Products__There}
    title = 'Trend Suit'
    price = '122$'
    size = 'Size: XS, S'
    color = 'Color: White'
    art = 'Art: 13244'
    material = 'Material: Costume fabric'
    btntext = 'Write on Instagram'
    href= 'https://www.instagram.com/direct/t/17845759623135390/'
    />
    </>
  )
}

export default BlocksProducts;