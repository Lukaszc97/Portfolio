import React, { useState } from "react";
import "./Biography.css";
import teamLogo from "../../../assets/icons/Team-Ornontowice.png";
import Przytulaśna from "../../../assets/icons/Przytulaśna.png";
import Castello from "../../../assets/icons/Castello.png";
import PPSZWB from "../../../assets/icons/PPSZWB.png";
import BackButton from "../../../components/BackButton"; 
const Biography = () => {
  const [activeTab, setActiveTab] = useState(null); // Brak aktywnej zakładki na początku

  return (
    <div className="biography-container">
      <BackButton />

      <h1>O mnie</h1>

      {/* Przyciski do przełączania */}
      <div className="">
        <button
          className={`tab ${activeTab === "artystycznie" ? "active" : ""}`}
          onClick={() => setActiveTab("artystycznie")}
        >
          Artystycznie
        </button>
        {/* <button
          className={`tab ${activeTab === "programowanie" ? "active" : ""}`}
          onClick={() => setActiveTab("programowanie")}
        >
          Programowanie
        </button> */}
      </div>

      {/* Sekcja Artystycznie */}
      {/* {activeTab === "artystycznie" && ( */}
        <div className="biography-section show">
          <h2>Moja Pasja do Tańca</h2>
          <p>
            Od nastoletnich lat taniec stał się moją pasją. Choć rozpocząłem
            naukę w młodym wieku, to dopiero później zacząłem tańczyć
            turniejowo, zgłębiając tajniki różnych stylów. Obecnie całkowicie
            poświęciłem się tańcu standardowym, który wywołuje we mnie ogromne
            emocje i radość.
          </p>
        </div>
     {/*  )} */}

      {/* {activeTab === "artystycznie" && ( */}
        <div className="biography-section show">
          <h2>Doświadczenie Sceniczne</h2>
          <p>
             Tańczyłem w spektaklach Państwowego Studium Wokalno-Baletowego w Gliwicach, występowałem w Teatrze Małym w Tychach, 
    a także byłem członkiem grupy pantomimicznej Migreska. Dodatkowo miałem przyjemność występować w Teatrze Castello, 
    co pozwoliło mi pogłębić umiejętności wyrazu scenicznego i pracy z ciałem oraz zdobyć cenne doświadczenie artystyczne.
  
          </p>
        </div>
     {/*  )} */}

      {/* {activeTab === "artystycznie" && ( */}
        <div className="biography-section show">
          <div className="team-section">
            <div className="logo-header">
              <img src={teamLogo} alt="Team Ornontowice Logo" />
              <h2>TEAM Ornontowice</h2>
            </div>
            <div className="ornontowice-info">
              <p>
                Team Ornontowice, założona w 2014 roku przez Magdalenę i Macieja
                Nagórskich, to przestrzeń, w której taniec staje się sposobem na
                życie. Klub oferuje szeroki wachlarz zajęć zarówno dla dzieci,
                jak i dorosłych, kształtując artystyczne talenty oraz promując
                pasję do tańca.
              </p>
              <div className="link">
                <a
                  href="https://taniec-ornontowice.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Team Ornontowice
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
      {/* {activeTab === "artystycznie" && ( */}
        <div className="biography-section show">
          <div className="team-section">
            <div className="logo-header">
              <img src={Przytulaśna} alt="Przytulaśna Logo" />
              <h2>Przytulaśna Szkoła Tańca</h2>
            </div>
            <div className="info">
              <p>
                Prowadzę zajęcia z tańców standardowych w szkole tańca
                "Przytulaśna" w Tychach – zarówno grupowe, jak i indywidualne,
                również dla par. To wyjątkowe miejsce, które łączy pasję do
                tańca z przyjazną, niemal rodzinną atmosferą. Szkoła oferuje
                szeroki wachlarz stylów tanecznych – od salsy i bachaty, przez
                zouk, aż po balet i taniec towarzyski – dzięki czemu każdy może
                znaleźć coś dla siebie, niezależnie od wieku czy poziomu
                zaawansowania.
              </p>
              <div className="link">
                <a
                  href="https://przytulasna.pl/akademia-tanca-i-ruchu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Przytulaśna
                </a>
              </div>
              

            </div>
            
          </div>
          
        </div>
        
      {/* )} */}
      {/* {activeTab === "artystycznie" && ( */}
        <div className="biography-section show">
          <div className="castello-section">
            <div className="logo-header">
              <img src={Castello} alt="Przytulaśna Logo" />
              <h2>Teatr Castello</h2>
            </div>
            <div className="info">
              <p>
                Miałem przyjemność tańczyć na deskach Teatru Castello –
                wyjątkowego miejsca mieszczącego się w scenerii starego zamku w
                Cieszynie, łączącego sztukę z historią. Występowałem w
                operetkach takich jak <strong>"Księżniczka Czardasza"</strong>,{" "}
                <strong>"Zemsta Nietoperza"</strong> czy{" "}
                <strong>"Wesoła Wdówka"</strong>. Każdy spektakl był
                niepowtarzalnym doświadczeniem scenicznym i artystycznym
                wyzwaniem.
              </p>
              <div className="link">
                <a
                  href="https://teatrcastello.pl/o-nas.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Teatr Castello
                </a>
                <a
                  href="https://teatrcastello.pl/component/content/article/2-uncategorised/84-lukasz-cieslik.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Teatr Castello-Łukasz Cieślik
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
      {/* )} */}
      {/* {activeTab === "artystycznie" && ( */}
        <div className="biography-section show">
          <div className="team-section">
            <div className="logo-header">
              <img src={PPSZWB} alt="Przytulaśna Logo" />
              <h2>Państwowe Studium Wokalno-Baletowe w Gliwicach</h2>
            </div>
            <div className="info">
              <p>
                Ukończyłem Państwowe Policealne Studium Zawodowe
                Wokalno-Baletowe w Gliwicach – renomowaną szkołę artystyczną
                kształcącą przyszłych aktorów scen muzycznych. Nauka trwała trzy
                lata i obejmowała intensywny program taneczny, wokalny oraz
                aktorski. Studium działa przy Teatrze Miejskim w Gliwicach i
                słynie z łączenia klasycznego kształcenia z nowoczesnymi formami
                scenicznymi. W 2023 roku świętowało swoje 40-lecie istnienia.
              </p>
              <div className="link">
                <a
                  href="https://www.gov.pl/web/studiumwbgliwice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oficjalna strona studium
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
<div className="biography-section show">
  <h2>Dodatkowa Działalność Taneczna</h2>
  <p>
    ○Chętnie pomagam znajomym przy tworzeniu układów tanecznych w ich grupach, dzieląc się doświadczeniem i pasją do tańca. 
    To dla mnie świetny sposób, żeby rozwijać się i wspierać taneczną społeczność.
  </p>
  <p>
    ○Prowadziłem też zajęcia na Uniwersytecie Trzeciego Wieku w Tychach, gdzie taniec pomagał uczestnikom czerpać radość z ruchu i aktywności.
  </p>
  <p>
    ○Poza tym oferuję prywatne lekcje tańca użytkowego, prowadzę pierwsze tańce dla par oraz zabawy taneczne na imprezach, 
    dzięki czemu każdy może poczuć się swobodnie i dobrze bawić się przy muzyce.
  </p>
</div>
      {/* Sekcja Programowanie */}
      {activeTab === "programowanie" && (
        <div className="biography-section show">
          <h2>Moja Pasja do Programowania</h2>
          <p>
            Poza tańcem, mam również pasję do programowania. Ukończyłem kurs
            GoIT Full Stack Developer, gdzie zdobyłem wiedzę z zakresu tworzenia
            aplikacji webowych. W ramach kursu pracowałem nad wieloma
            projektami, w tym jednym grupowym. Obecnie studiuję informatykę na
            Akademii WSB w Dąbrowie Górniczej, gdzie uczę się C++, C#, a także
            rozwijam swoje umiejętności w JavaScript, CSS i HTML.
          </p>
        </div>
      )}

      {activeTab === "programowanie" && (
        <div className="biography-section show">
          <h2>Projekty Programistyczne</h2>
          <p>
            W trakcie kursu GoIT zrealizowałem kilka projektów, w tym grupowy
            projekt, który znajdziesz pod tym linkiem:{" "}
            <a
              href="https://gregorjosh.github.io/goit-project-02/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoIT Project
            </a>
            . Ponadto, mam doświadczenie w pracy z narzędziami do edycji filmów,
            takimi jak CapCut i Shotcut, oraz z oprogramowaniem do edycji
            muzyki, m.in. Audacity.
          </p>
        </div>
      )}
      <div className="biography-summary-floating">
  <h2>Gdzie prowadziłem zajęcia:</h2>
  <ul>
    <li>Szkoła Tańca „Przytulaśna” – zajęcia grupowe i indywidualne</li>
    <li>Uniwersytet Trzeciego Wieku w Tychach</li>
    <li>Indywidualne lekcje tańca użytkowego i pierwszy taniec</li>
    <li>Pomoc w MDK – choreografie i zajęcia</li>
    <li>Zastępstwa z grupami w różnym wieku</li>
  </ul>
</div>

    </div>
    
  );
};

export default Biography;
