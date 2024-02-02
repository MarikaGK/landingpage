import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h3>
        PRZEŁAM BARIERĘ NIEMOŻNOŚCI, OŻYW ZMĘCZONY ORGANIZM I POCZUJ POPRAWĘ !
      </h3>
      <h3>POZNAJ SPRAWDZONE METODY PROFILAKTYCZNE I ZACHOWAJ ZDROWIE !</h3>
      <div className="textWrapper">
        <p className="text">Jeżeli od wielu miesięcy</p>
        <ul className="list">
          <li className="listItem">czujesz ból,</li>
          <li className="listItem">cierpisz na brak energii, </li>
          <li className="listItem">tyjesz,</li>
          <li className="listItem">masz problemy jelitowo-żołądkowe,</li>
          <li className="listItem">narzekasz na kondycję skóry i włosów </li>
        </ul>
        <p className="text">
          I po omacku szukasz rozwiązań i poprawy zdrowia łykając coraz większe
          ilości lekarstw
        </p>
        <p className="text">
          albo chcesz wyprzedzić czas i uniknąć tych wszystkich dolegliwości?
        </p>
      </div>
      <h4>
        <strong>Zapraszamy Cię na wyjątkowe szkolenie</strong>, które pozwoli Ci
        zadbać o swoje zdrowie fizyczne i psychiczne, wprowadzić profilaktykę
        stanów zapalnych oraz poznać kuracje zdrowotne przeciwstarzeniowe (anty
        aging)
      </h4>
<a href="https://www.facebook.com/dietoteka/reviews">Opinie o szkoleniach Izabeli Potrzebowskiej -Kniaziuk</a>
<h5>Witaj w świecie, który sprawi, że będziesz wyglądać i czuć się młodziej</h5>
<p>Chcemy przedstawić Ci najnowszy hit na rynku - <strong>niepowtarzalne szkolenie
przeciwzapalne i przeciwstarzeniowe</strong>, które zrewolucjonizuje Twoje podejście do zdrowia!
</p>
<p>Nawet techniczni Panowie się odnajdują na naszych spotkaniach!</p>


    </div>
  );
}

export default App;
