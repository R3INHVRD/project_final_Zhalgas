import React from "react";
import "./AboutUs.css";

import ReviewCard from "../reviewCard/ReviewCard";

const AboutUs = () => {
  const fakeReviews = [
    {
      author: "Сабырбек Данияр",
      comment: "Быстрая доставка, вежливые консультанты",
      rating: 5,
      avatarUrl: "https://e7.pngegg.com/pngimages/552/861/png-clipart-computer-icons-avatar-avatar-computer-icons-avatar.png",
    },
    {
      author: "Конурбай Арсен",
      comment: "Не нашел нужный товар, но консультанты посоветовали похожий. Все понравилось",
      rating: 4,
      avatarUrl: "https://e7.pngegg.com/pngimages/552/861/png-clipart-computer-icons-avatar-avatar-computer-icons-avatar.png",
    },
    {
      author: "Шакиров Дамир",
      comment: "Товар не подошел по размеру.",
      rating: 2,
      avatarUrl: "https://e7.pngegg.com/pngimages/552/861/png-clipart-computer-icons-avatar-avatar-computer-icons-avatar.png",
    },
  ];

  return (
      <div>
        <div className="AboutUs">
          <div className="about-main">
            <h1>О нашем интернет-зоомагазине</h1>

            <p>
              ZooStore – Интернет-магазин товаров для домашних животных. <br/> В
              нашем ассортименте огромный выбор всего необходимого для кошек,
              собак, домашних грызунов и птиц
            </p>

            <p>
              На страницах нашего Интернет-магазина вы найдёте большой выбор
              кормов от лучших мировых производителей, лакомства, наполнители,
              одежду и аксессуары, а также – ветеринарные препараты.
            </p>

            <p>
              Вы можете оплатить сделанный заказ нашему курьеру при получении
              покупки, либо осуществить онлайн-оплату на сайте банковской картой.
            </p>

            <p>
              Мы всегда готовы к обратной связи с нашими дорогими покупателями.
              Ваши замечания и предложения – залог нашего развития!
            </p>
          </div>
        </div>
        <div className="reviews-container">
          <h1>Крайние отзывы наших покупателей</h1>
          {fakeReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
  )
};

export default AboutUs;