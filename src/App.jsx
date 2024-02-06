import "./App.css";
import BuyTicket from "./components/BuyTicket";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="parralax">
      <div className="glass">
        <div className="backgroundOne">
          <div className="container gap">
            <h3>
              PRZEŁAM BARIERĘ NIEMOŻNOŚCI, OŻYW SWÓJ ZMĘCZONY ORGANIZM I POCZUJ
              POPRAWĘ!
            </h3>
            <h3>POZNAJ SPRAWDZONE METODY PROFILAKTYCZNE I ZACHOWAJ ZDROWIE!</h3>
          </div>
        </div>
        <div className="backgroundTwo">
          <div className="container">
            <div className="textWrapper">
              <p className="text-black">Jeżeli od wielu miesięcy:</p>
              <ul className="list">
                <li className="listItem">
                  <p className="text-black">czujesz ból,</p>
                </li>
                <li className="listItem">
                  <p className="text-black">cierpisz na brak energii, </p>
                </li>
                <li className="listItem">
                  <p className="text-black">tyjesz,</p>
                </li>
                <li className="listItem">
                  <p className="text-black">
                    masz problemy jelitowo-żołądkowe,
                  </p>
                </li>
                <li className="listItem">
                  <p className="text-black">
                    narzekasz na kondycję skóry i włosów,
                  </p>
                </li>
                <li className="listItem">
                  <p className="text-black">
                    szukasz rozwiązań i poprawy samopoczucia, łykając coraz
                    większe ilości lekarstw
                  </p>{" "}
                </li>
              </ul>
            </div>
            <div>
              {/* <p className="text-color-primary">
                I po omacku szukasz rozwiązań i poprawy zdrowia łykając coraz większe ilości
                lekarstw?
              </p> */}
              <p className="accent">
                A może chcesz wyprzedzić czas i uniknąć tych wszystkich
                dolegliwości?
              </p>
            </div>
          </div>
        </div>
        <div className="backgroundAccent">
          <div className="container">
            <h4>
              <strong>
                Zapraszamy Cię na wyjątkowe szkolenie w dniach 15-17 marca
              </strong>
              , które pozwoli Ci zadbać o swoje zdrowie fizyczne i psychiczne,
              wprowadzić profilaktykę stanów zapalnych oraz poznać kuracje
              zdrowotne przeciwstarzeniowe (anty aging)
            </h4>
            {/** wstawić opinię z fb */}
            <h4>Przeczytaj więcej!</h4>
            <a
              href="https://www.facebook.com/dietoteka/reviews"
              target="_blank"
              rel="noreferrer"
              className="text-link-color-primary"
            >
              Opinie o szkoleniach Izabeli Potrzebowskiej-Kniaziuk
            </a>
          </div>
        </div>
        <div className="backgroundTwo">
          <div className="container">
            <h5 className="text-color-primary">
              Witaj w świecie, który sprawi, że będziesz wyglądać i czuć się
              młodziej.
            </h5>
            <p className="text-black">
              Chcemy przedstawić Ci najnowszy hit na rynku -{" "}
              <strong>
                niepowtarzalne szkolenie przeciwzapalne i przeciwstarzeniowe
              </strong>
              , które zrewolucjonizuje Twoje podejście do zdrowia!
            </p>
          </div>
          <div className="videosDiv">
            <h5 className="accent">Obejrzyj video:</h5>
            <a
              href="https://www.facebook.com/dietoteka/videos/247595858242266"
              className="text-link-color-primary"
            >
              Również Panowie świetnie się odnajdują na naszych spotkaniach!
            </a>
            <a
              href="https://www.facebook.com/dietoteka/videos/798739058578591"
              className="text-link-color-primary"
            >
              Lubimy Was zaskakiwać!
            </a>
            <a
              href="https://www.facebook.com/dietoteka/videos/309746628221537"
              className="text-link-color-primary"
            >
              Poczuj te emocje!
            </a>
          </div>
        </div>
        <div className="backgroundOne">
          <div className="container">
            <h3>Najważniejsze umiejętności, które wyniesiesz ze szkolenia:</h3>
            <ul className="list">
              <li className="listItem card">
                <h5 className="text-white">
                  Dowiesz się o różnych stanach zapalnych jako źródłach
                  większości chorób
                </h5>
                <p className="text-black">
                  Zrozumiesz przyczyny stanów zapalnych i reakcje organizmu
                </p>
              </li>
              <li className="listItem card">
                <h5 className="text-white">
                  Poznasz diagnostykę stanów zapalnych
                </h5>
                <p className="text-black">
                  Odkryjesz wpływ czynników jak: histamina, homocysteina, stan
                  jelit, otyłość, styl życia, choroby autoimmunologiczne na
                  poziom stanów zapalenia w organizmie
                </p>
              </li>
              <li className="listItem card">
                <h5 className="text-white">
                  Zdobędziesz wiedzę o niezbędnych składnikach odżywczych, które
                  hamują starzenie się oraz zabezpieczają przed stanami
                  zapalnymi
                </h5>
                <p className="text-black">
                  Nauczysz się tajemnic zdrowego odżywiania, które przyczynią
                  się do redukcji stanów zapalnych w ciele
                </p>
              </li>
              <li className="listItem card">
                <h5 className="text-white">
                  Przyjrzysz się kondycji swoich jelit i żołądka wpływających na
                  Twoje zdrowie fizyczne i psychiczne
                </h5>
                <p className="text-black">
                  Dowiesz się, jak poprawić ich funkcjonowanie w dolegliwościach
                </p>
              </li>
              <li className="listItem card">
                <h5 className="text-white">
                  Odkryjesz trzy kluczowe filary zdrowia i ich wpływ na
                  starzenie się i stany zapalne organizmu
                </h5>
                <p className="text-black">
                  Zdobędziesz informację o podstawach wspierającego stylu życia
                </p>
              </li>
              <li className="listItem card">
                <h5 className="text-white">
                  Opracujesz swoje sposoby na zwiększenie energii i witalności
                </h5>
                <p className="text-black">
                  Określisz nawyki, które pomogą utrzymać młodość na dłużej
                </p>
              </li>
              <li className="listItem card">
                <h5 className="text-white">
                  Nauczysz się jak wykorzystać tętniącą energią moc
                  antyoksydantów
                </h5>
                <p className="text-black">
                  Poznasz najlepsze produkty i suplementy, które działają jak
                  eliksir młodości, ożywiając nawet najbardziej zmęczony
                  organizm
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="backgroundTwo">
          <div className="container gap">
            <BuyTicket />
            <img
              src="https://raw.githubusercontent.com/MarikaGK/zyjzdrowo-kurs/main/src/assets/iza.jpg"
              alt="Izabela Potrzebowska-Kniaziuk"
              width="200"
              height="200"
              className="image"
            />
            <p className="text-black">
              Będziesz miał/a szansę <strong>współpracować</strong> z
              praktykującym od kilkunastu lat dietetykiem, psychodietetykiem,
              coachem i trenerem mentalnym -{" "}
              <strong>Izabelą Potrzebowską-Kniaziuk</strong>. Podzieli się z
              Tobą doświadczeniem pracy z pacjentami, abyś zyskał/a wiedzę nie
              tylko teoretyczną, ale również praktyczną
            </p>
            <img
              src="https://raw.githubusercontent.com/MarikaGK/zyjzdrowo-kurs/main/src/assets/kasia.jpg"
              alt="Kasia Koźlik"
              width="200"
              height="200"
              className="image"
            />
            <p className="text-black">
              Niezbędnym elementem troski o organizm jest odpoczynek i relaks.
              Na naszym szkoleniu zadba o to <strong>Kasia Koźlik</strong>,
              która <strong>w ciekawy i angażujący sposób</strong>
              przeprowadzi m.in. wizualizacje i zajęcia ruchowe
            </p>
            <img
              src="https://raw.githubusercontent.com/MarikaGK/zyjzdrowo-kurs/main/src/assets/asia.jpg"
              alt="Joanna Cidyło"
              width="200"
              height="200"
              className="image"
            />
            <p className="text-black">
              Naszym uczestnikom będzie towarzyszyć profesjonalna, niesamowicie
              wrażliwa artystycznie fotografka, <strong>Joanna Cidyło</strong>,
              która <strong>uwieczni wyjątkowe momenty</strong> Twojego rozwoju
            </p>{" "}
          </div>
        </div>
        <div className="backgroundAccent">
          <div className="container gap">
            <h3>Zaufaj nam!</h3>
            <p>
              To nie jest kolejne nudne szkolenie, w którym będziesz tylko
              słuchać wykładów
            </p>
            <p>
              Nasz program oparty jest na interakcji, praktycznych ćwiczeniach i
              - jak w szwedzkim bufecie - wybierzesz, to co dla Ciebie najlepsze
            </p>
            <p>
              <strong>
                Będziesz mieć możliwość poznania innych pasjonatów zdrowego
                stylu życia, którzy, tak jak Ty, pragną przetrwać próbę czasu i
                cieszyć się życiem pełnym energii
              </strong>
            </p>
            <p>
              <strong>
                Niezależnie od tego, czy masz 30, 40, 50 czy 60 lat, to
                szkolenie pozwoli Ci poczuć się młodo i dynamicznie przez długie
                lata!
              </strong>
            </p>{" "}
          </div>
        </div>
        <div className="backgroundTwo">
          <div className="container gap">
            <p className="text-black">
              Szkolenie odbędzie się w{" "}
              <strong>wyjątkowym hotelu „Arkas”</strong> w Prószkowie koło
              Opola. Do dyspozycji uczestników szkolenia hotel oferuje{" "}
              <strong>
                strefę spa z saunami, basenem, jacuzzi oraz masażami
              </strong>
            </p>
            <h5 className="accent">
              Odprężenie i relaks po zajęciach gwarantowane!
            </h5>
            <p className="text-black">
              Ponadto hotel Arkas oferuje <strong>świetne jedzenie</strong> o
              dużej różnorodności. Posiłki starannie przygotowane, bardzo
              smaczne. Wspólne posiłki będą okazją do nauki dokonywania wyboru
              wspierającego jedzenia
            </p>
            <p className="text-black">
              Przestrzeń i wnętrza tego hotelu są specjalnie zorganizowane, aby
              zapewnić Ci niezapomniane wrażenia i pełen komfort
            </p>
            <a
              href="https://hotelarkas.pl/"
              target="_blank"
              rel="noreferrer"
              className="text-link-color-primary"
            >
              Obejrzyj wnętrza
            </a>
          </div>
        </div>
        <div className="backgroundOne">
          <div className="container gap">
            <h3>Ale to jeszcze nie koniec</h3>
            <p>
              W ramach profilaktyki zdrowotnej będziesz uczestniczyć w zajęciach
              obejmujących elementy
              <strong>
                śmiechoterapii, muzykoterapii, treningów relaksacyjnych i
                mentalnych
              </strong>
              . Poznane metody zastosujesz w codziennej praktyce ograniczania
              stresu
            </p>
            <p>
              Weźmiesz udział w błyskawicznym{" "}
              <strong>kursie pozowania do zdjęć lifestylowych</strong>, aby
              lepiej się prezentować w mediach społecznościowych lub ofertach
              biznesowych
            </p>
            <div>
              <h5>I wiele więcej:</h5>
              <ul className="list">
                <li className="listItem card">
                  <p>
                    <strong>Mini zabieg w mini salonie piękności</strong> -
                    poznasz dobre jakościowo produkty
                  </p>
                </li>
                <li className="listItem card">
                  <p>
                    Otrzymasz dostęp na FB do{" "}
                    <strong>naszej ekskluzywnej grupy wsparcia</strong>.
                    Będziesz mógł dzielić się swoimi doświadczeniami z innymi
                    uczestnikami
                  </p>
                </li>
                <li className="listItem card">
                  <p>
                    Mamy dla Was jeszcze <strong>bonusy</strong> w postaci
                    prezentacji materiałów ze szkolenia, mini kurs video o
                    pozowaniu do zdjęć, video z afirmacjami i inne o wartości
                    397 zł !!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="backgroundTwo">
          <div className="container gap">
            <h5 className="text-black">Jeszcze się zastanawiasz?</h5>
            <a
              href="https://www.facebook.com/joannacidylofotografiakobieca"
              target="_blank"
              rel="noreferrer"
              className="text-link-color-primary"
            >
              Zerknij na prace Joanny Cidyło
            </a>
            <div className="container">
              <BuyTicket />
              <Pricing />
            </div>
          </div>
        </div>
        <div className="backgroundAccent">
          <div className="container gap">
            <p>
              Czy jesteś gotowy, aby przekroczyć próg i zanurzyć się w morzu
              możliwości ?
            </p>
            <p>Jeśli tak, to nie trać ani minuty!</p>
            <p>
              <strong>
                Miejsca na naszym szkoleniu są mocno limitowane, więc zarezerwuj
                swoje miejsce już teraz!
              </strong>
            </p>
            <h3>
              Bądź liderem swojego zdrowia i spraw, aby świat oglądał Cię z
              niedowierzaniem!
            </h3>
            <p>
              Jeszcze nigdy nie było takiego szkolenia, które przyniosłoby tak
              spektakularne efekty
            </p>
            <p>
              <strong>Dołącz do nas i odmień swoje życie na lepsze!</strong>
            </p>
            <h5>
              Nie czekaj! Wybierz siłę, wybierz zdrowie, wybierz dobre
              samopoczucie !
            </h5>{" "}
          </div>
        </div>
        {/* fotka opinii o IP-K */}
        <div className="backgroundTwo">
          <div className="container">
            <h5 className="text-black">AGENDA SZKOLENIA 15-17 marca 2024r</h5>
            <p className="text-black">
              <strong>Piątek - 15:00</strong>
            </p>
            <ul className="list">
              <li className="listItem">
                <p className="text-black">zajęcia wstępne zdrowotne,</p>
              </li>
              <li className="listItem">
                <p className="text-black">śmiechojoga,</p>
              </li>
              <li className="listItem">
                <p className="text-black">obiadokolacja,</p>
              </li>
              <li className="listItem">
                <p className="text-black">basen/sauna,</p>
              </li>
              <li className="listItem">
                <p className="text-black">
                  spotkanie z fotografią i praca ciałem,
                </p>
              </li>
              <li className="listItem">
                <p className="text-black">trening mentalny- techniki,</p>
              </li>
              <li className="listItem">
                <p className="text-black">
                  wieczorny wspólny czas-rozmowy/pytania
                </p>
              </li>
            </ul>
            <p className="text-black">
              <strong>Sobota 8:00</strong>
            </p>
            <ul className="list">
              <li className="listItem">
                <p className="text-black">power start,</p>
              </li>
              <li className="listItem">
                <p className="text-black">śniadanie,</p>
              </li>
              <li className="listItem">
                <p className="text-black">
                  panel I (Zatrzymaj stany zapalne i popraw zdrowie),
                </p>
              </li>
              <li className="listItem">
                <p className="text-black">pytania,</p>
              </li>
              <li className="listItem">
                <p className="text-black">sesje foto,</p>
              </li>
              <li className="listItem">
                <p className="text-black">obiad,</p>
              </li>
              <li className="listItem">
                <p className="text-black">
                  panel II (Młodość na dłużej w naszych komórkach),
                </p>
              </li>
              <li className="listItem">
                <p className="text-black">pytania,</p>
              </li>
              <li className="listItem">
                <p className="text-black">niespodzianka - mini zabieg,</p>
              </li>
              <li className="listItem">
                <p className="text-black">basen/sauna,</p>
              </li>
              <li className="listItem">
                <p className="text-black">kolacja,</p>
              </li>
              <li className="listItem">
                <p className="text-black">wieczór z mentalem,</p>
              </li>
              <li className="listItem">
                <p className="text-black">
                  zajęcia niespodzianka (będzie angażująco i wesoło)
                </p>
              </li>
            </ul>
            <p className="text-black">
              <strong>Niedziela</strong>
            </p>
            <ul className="list">
              <li className="listItem">
                <p className="text-black">8:00 power start,</p>
              </li>
              <li className="listItem">
                <p className="text-black">śniadanie,</p>
              </li>
              <li className="listItem">
                <p className="text-black">zajęcia/pytania/podsumowanie,</p>
              </li>
              <li className="listItem">
                <p className="text-black">12:00 wykwaterowanie z pokoi,</p>
              </li>
              <li className="listItem">
                <p className="text-black">
                  13:00 dla chętnych wspólne rozmowy, wspólny czas
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="backgroundOne">
          <div className="container gap">
            <h5>
              Jeśli pragniesz poprawić swoje zdrowie, energię, a także nauczyć
              się skutecznych metod radzenia sobie ze swoimi dolegliwościami lub
              zadziałać profilaktycznie, to nasze szkolenie jest dla Ciebie
            </h5>
            <p>
              Przyjdź i dołącz do naszej społeczności, gdzie będziesz mogła/ł
              dzielić się doświadczeniami, nawiązywać nowe relacje i czerpać
              inspirację od innych uczestników
            </p>
            <h5>
              Nie zwlekaj! Teraz jest czas, aby zadbać o swoje zdrowie,
              samopoczucie i dołączyć do nas na tym niezwykłym szkoleniu
            </h5>{" "}
          </div>
        </div>
        <div className="backgroundTwo">
          <div className="container">
            <BuyTicket />
            <Pricing />
          </div>
        </div>
        <div className="backgroundAccent">
          <div className="container gap">
            <p>
              Niezbędna wiedza, relaks, odprężenie, inspirujące rozmowy z
              uczestnikami i profesjonalistami, a także niesamowite doznania -
              to wszystko czeka na Ciebie
            </p>
            <p>Jeśli potrzebujesz więcej info pisz</p>
            <a className="mail" href="mailto:dietoteka.rejestracja@gmail.com">
              dietoteka.rejestracja@gmail.com
            </a>
            <div>
              <p>
                <strong>Cena obejmuje:</strong>
              </p>
              <ul className="list">
                <li className="listItem">
                  2 noclegi ( pokoje 2 osobowe)+ posiłki/kawa, herbata,woda
                  przez cały dzień /nauka wyboru jedzenia podczas posiłków,
                </li>
                <li className="listItem">
                  Hotel Spa Arkas+ dostęp do basenu, saunarium, jacuzzi, masaże,{" "}
                </li>
                <li className="listItem">
                  Zajęcia - panele szkoleniowe, treningi mentalne,
                </li>
                <li className="listItem">śmiechojoga,</li>
                <li className="listItem">trening relaksacyjny - nauka,</li>
                <li className="listItem">zajęcia ruchowo-relaksacyjne,</li>
                <li className="listItem">nauka technik,</li>
                <li className="listItem">
                  zajęcia pozowania, zdjęcia lifestylowe/portrety,
                  niespodzianki- zajęcia np..mini zabieg,
                </li>
                <li className="listItem">ale to nie koniec-- RELACJE,</li>
                <li className="listItem text-color-primary">
                  Bonusy - dodatkowe materiały - video szkolenie +ebook +grupa
                  wsparcia na FB ) o wartości 397 zł (+ 10% zniżki, gdy będziesz
                  we dwójkę)
                </li>
              </ul>
            </div>
            <h3 className="ticket text-secondary">
              Zarezerwuj swoje miejsce już teraz i daj szansę sobie na lepsze
              jutro
            </h3>{" "}
            <img
              src="https://raw.githubusercontent.com/MarikaGK/zyjzdrowo-kurs/main/src/assets/girls.jpg"
              alt="Dziewczyny"
              width="350"
              height="350"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
