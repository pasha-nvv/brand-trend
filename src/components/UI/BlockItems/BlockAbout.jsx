import './../../../App.css';
import TitleAbout from './TitleAbout';

const BlockAbout = () => {
  return (
    <section className='block__items' id='new'>
      <div className='block__items__header'>
        <div className='title__block'>
          <TitleAbout />
        </div>
      </div>
      <div className='about__blocks' id='about'>
        <p className='about__info'>
          Не треба відмовлятись від стилю тільки тому, що ти в Америці 🇺🇸🤌
          <br />
          З нами ти можеш одягатися красиво, жіночно та по-європейськи щодня ✨
          <br />
          Українсько-європейський одяг для дівчат, які люблять виглядати
          ефектно та зі смаком 🛍️
          <br />
          Доставка по США 3-5 днів 📦
        </p>

        <p className='about__info'>
          You don&apos;t have to give up style just because you&apos;re in America
          🇺🇸🤌
          <br />
          With us you can dress beautifully, femininely, and European-style
          every day ✨
          <br />
          Ukrainian-European clothing for girls who like to look spectacular
          and tasteful 🛍️
          <br />
          Delivery across the USA in 3-5 days 📦
        </p>

        <p className='about__info'>
          ✨ Made with love - Family of Net ✨
          <br />
          Повернення приймається протягом 14 днів з моменту покупки з
          урахуванням доставки.
          <br />
          Можливий обмін на інший розмір або товар.
          <br />
          У разі онлайн-замовлення доставка при поверненні або обміні
          здійснюється за рахунок покупця.
          <br />
          Будь ласка, переконайтеся, що річ у новому стані, з біркою, без
          запахів, без слідів порошку і без дефектів.
          <br />
          Зверніть увагу: ми не приймаємо повернення на передзамовлення, яке
          робиться спеціально під вас або під ваш розмір, зокрема на лосини,
          корсети та білизну в сітку.
        </p>

        <p className='about__info'>
          ✨ Made with love - Family of Net ✨
          <br />
          Returns are accepted within 14 days from the date of purchase,
          including delivery time.
          <br />
          You can exchange your item for another size or product.
          <br />
          For online orders, return or exchange shipping costs are the
          responsibility of the customer.
          <br />
          Please make sure the item is in new condition, with tags attached, no
          scents, no detergent smell, and no defects.
          <br />
          Please note: we do not accept returns on pre-order items made
          specifically for you or to your measurements, including leggings,
          corsets, and mesh lingerie.
        </p>
      </div>
    </section>
  );
};

export default BlockAbout;
