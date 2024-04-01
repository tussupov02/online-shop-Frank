import React from "react";
import "./Hero.css";
import { BsBoxSeam } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { LiaBoxesSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import ReadyMade from "../ReadyMade/ReadyMade";
import imageReady from "../../Assets/ready.jpg";
import Catalog from "../Catalog/Catalog";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import ShowImg from "../ShowImg/ShowImg";

function Hero() {
  const readyCollection = [
    {
      imageR: { imageReady },
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "987654",
    },
    {
      imageR: "../../Assets/ready.jpg",
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "123456",
    },
    {
      imageR: { imageReady },
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "789456",
    },
    {
      imageR: { imageReady },
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "987654",
    },
    {
      imageR: "../../Assets/ready.jpg",
      title: "120440",
      content:
        "Набор GROHE Euro compact: подвесной унитаз Euro compact с инста",
      price: "123456",
    },
  ];
  const catalogAll = [
    {
      imageC:
        "https://shop.grohe.kz/media/wysiwyg/kitchen.jpg",
      title: "Кухня",
    },
    {
      imageC:
        "https://shop.grohe.kz/media/wysiwyg/bathroom.jpg",
      title: "Ванная",
    },
    {
      imageC:
        "https://shop.grohe.kz/media/wysiwyg/tualet.jpg",
      title: "Туалет",
    },
    {
      imageC:
        "https://shop.grohe.kz/media/wysiwyg/dush.jpg",
      title: "Душевая",
    },
    {
      imageC:
        "https://shop.grohe.kz/media/wysiwyg/nabor.jpg",
      title: "Набор",
    },
  ];
  return (
    <div>
      <div className="video">
        <div className="video_content">
          <p>video</p>
        </div>
      </div>
      <div className="plus">
        <h4>
          Официальный магазин <b>FRANK</b>{" "}
        </h4>
        <div className="plus_box">
          <div className="box">
            <div className="box_icons">
              <BsBoxSeam style={{ fontSize: "60px" }} />
            </div>
            <h5>Бесплатная доставка</h5>
            <p>
              Бесплатная доставка по Астане при сумме заказа от 50000 тенге.
            </p>
          </div>
          <div className="box">
            <div className="box_icons">
              <GrCertificate style={{ fontSize: "60px" }} />
            </div>
            <h5>Фирменная гарантия</h5>
            <p>Расширенная фирменная гарантия на всю продукцию до 10 лет.</p>
          </div>
          <div className="box">
            <div className="box_icons">
              <TbTruckReturn style={{ fontSize: "60px" }} />
            </div>
            <h5>Возврат без проблем</h5>
            <p>
              Специальные условия возврата товара. Возврат по любой причине в
              течение 14 дней.
            </p>
          </div>
          <div className="box">
            <div className="box_icons">
              <LiaBoxesSolid style={{fontSize: "60px" }} />
            </div>
            <h5>Широкий ассортимент</h5>
            <p>Самый широкий ассортимент в Казахстане</p>
          </div>
        </div>
      </div>
      <div className="ready-made_kits">
        <h3>Готовые наборы</h3>
        <div className="ready-made_all">
          <div className="ready-made_kits_box">
            {readyCollection.map((item, i) => {
              return (
                <>
                  <ReadyMade
                    key={i}
                    image={require("../../Assets/ready.jpg")}
                    title={item.title}
                    content={item.content}
                    price={item.price}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="catalog">
        <h3>Каталог товаров</h3>
        <div className="catalog_all">
          <div className="catalog_box">
            {catalogAll.map((item, i) => {
              return <Catalog key={i} image={item.imageC} title={item.title} />;
            })}
          </div>
        </div>
      </div>

      <div className="map_box">
        <div className="map_content">
          <div className="map_why">
            <h3>Почему стоит покупать у нас?</h3>
            <p>
              Интернет-магазин FRANK- официальное представительство компании в
              Республике Казахстан. Оформляя покупки в нашем магазине вы
              получаете абсолютную гарантию качества товара и уверенность в его
              оригинальности. Акции и Скидки, регулярно обновляемые на страницах
              сайта, позволят вам подобрать продукцию FRANK на любой бюджет.
            </p>
          </div>
          <div className="map_contact">
            <h3>+7 (747) 095-19-37</h3>
            <p>Понедельник - Воскресенье: с 10:00 до 20:00</p>
          </div>
        </div>
        <ShowImg />
        <YMaps>
          <div className="map_title">
            <p>Наш шоурум на карте</p>
          </div>
          <Map
            className="map"
            defaultState={{ center: [51.12458, 71.434419], zoom: 10 }}
          >
            <Placemark geometry={[51.12458, 71.434419]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default Hero;
