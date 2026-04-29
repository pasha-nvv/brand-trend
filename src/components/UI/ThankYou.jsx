import './../../App.css';

const ThankYou = () => {
  return (
    <section className='block__items'>
      <div className='block__items__header'>
        <div className='title__block'>
          <p className='p__items'>Thank you for your trust! (Дякуємо за довіру!)</p>
        </div>
      </div>
      <div className='thankyou__blocks'>
        <p className='thankyou__info'>
          Girls, дякуємо вам
          <br />
          За довіру, за те, що обираєте нас і розбираєте новиночки ще в дорозі,
          навіть до оновлення в онлайн-магазині.
          <br />
          Ваша підтримка й відгуки для нас безцінні 🌸
        </p>
        <p className='thankyou__info'>
          Girls, thank you so much for your trust, for choosing us, and for
          reserving our new arrivals while they&apos;re still on the way, even
          before they&apos;re updated in our online store.
          <br />
          Your support and feedback mean the world to us 🌸
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
