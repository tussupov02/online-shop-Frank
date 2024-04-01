import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import logo from "./Assets/logo.png";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <div className="main_header">
          <div className="main_header_left">
            <img src={logo} alt="" />
            <p className="internet_shop">ИНТЕРНЕТ-МАГАЗИН</p>
          </div>
          <div className="main_header_right">
            <a href="#">О магазине </a>
            <a href="#">Доставка товаров </a>
            <a href="#">Контакты</a>
          </div>
        </div>
        <Header />
        <Hero/>
        <Footer />
    </div>
  );
}

export default App;
