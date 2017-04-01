let pages = [
  { "page": "2", "title": "Witamy", "content": new html_default(
  `
  <div class="text">
    <h2><span class="romb"></span>Witamy!</h2>
    <p><strong>Sport jest pełen smutnych historii. Drużyn, które kiedyś ogrywały najmocniejszych, a teraz szukają właśnej tożsamości na obrzeżach prawdziwej rywalizacji. Sportowców, który z legend stali się pośmiewiskiem. Ludzi, którzy spadli z podiów i pierwszych stron gazet, a czasem... na nie trafili. Ale zupełnie z innych powodów, niż by sobie tego życzyli.</strong></p>
    <p><strong>W kolejnym numerze po - nie oszukujmy się - dość długiej przerwie skupiamy się właśnie na takim motywie </strong></p>
    <blockquote>
    Nie będę ukrywał, że od poprzedniego wydania naszgo magazynu minęło już sporo czasu. Kilkukrotnie zabieraliśmy się do tego numeru, ale zawsze na przeszkodzie stawały pozaredakcyjne obowiązki. Magazyn Sofa Sport był jednak od początku inicjatywą, którą bardzo starannie się opiekowaliśmy i nie mamy zamiaru o niej zapomnieć.<br><br>
     Wymarzyliśmy sobie dziennikarski projekt, który będzie nie tylko kolejną kopią gotowych rozwiązań. Takich już wiele na rynku. My chcieliśmy stworzyć coś bardziej wyjątkowego. Cel był prosty - nasz magazyn ma być interesującą lekturą, ale też taką, która będzie ciekawa nie tylko dziś czy jutro, ale i za rok, dwa, czy na nawet dekadę. I to chyba w poprzednich numerach nam się udało. Magazyn Sofa Sport stał się synonimem - grubej, poczytnej lektury, gdzie każdy numer ma swój własny fajny i interesujący motyw, a same artykuły nigdy nie tracą na aktualności. Ale kto stoi w miejscu ten się cofa. Dlatego też postawiliśmy na mały lifting.<br><br>Odeszliśmy od typowego pisemnego formatu, który był ładny, ale mało praktyczny. Postawiliśmy na nowocześność i stworzyliśmy od podstaw własny system. Być może nie jest idealny i na początku możecie trafić na błędy, ale powinniśmy mieć z niego w przyszłości wiele radości. Został bowiem skrojony idealnie do naszych potrzeb i na bazie naszych doświadczeń. Powiem krótko - nową Sofę po prostu czyta się wygodniej. Duża czionka, zero udziwnień i rozpraszaczy. Nasz magazyn ma bronić się contentem, a nie oprawą. Niemniej jednak i ona wygląda teraz schludniej, mam nadzieję, że przypadnie Wam do gustu. <br><br>Zmienił się skład redakcji, tak jak zmieniła się i cała Sofa Sport. Jesteśmy dojrzalsi, bardziej doświadczeni. Z czasem staliśmy się bardziej popularni i zachęciliśmy do współpracy kolejnych zdolnych autorów. <br><br>Ostatnia sprawa - zmianie uległa także nazwa. Sofa Sport Magazyn przechrzcił się w Sofa Magazyn. Zmiana może i kosmetyczna, ale ma nadawać nowy kierunek naszej inicjatywie.<br><br>
    Po raz kolejny wybraliśmy cięższy temat, ale my w Sofie Sport takie lubimy ;) Mam nadzieję, że numer prypadnie Wam do gustu. Wystarczy gadania ;) Życzę Wam przyjemnej lektury :)
    <span class="author">Paweł Zagrobelny, redaktor prowadzący</span>
    </blockquote>
    <div class="index">
      <h3>Spis treści</h3>
      <a href="javascript:scrollToPage(2)">Valbuena: L'art de la chute</a>
      <a href="javascript:scrollToPage(3)">Walcząc ze sobą - Demony Mattiego Nykanena</a>
      <a href="javascript:scrollToPage(4)">Olimpijska wyprawa w przeszłość – starożytne Igrzyska i ich wpływ na dzisiejszy sport</a>
    </div>


    <h2><span class="romb"></span>Numer współtworzyli</h2>
    <div class="authors">
    <h4>Redaktorzy prowadzący</h4>
    <a class="author">
      <img src="${issue.url}/img/authors/malanowski.jpg" alt="Wojtek Malanowski">
      <h5>Wojciech Malanowski</h5>
      <span>Redaktor naczelny sofasport.pl</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/zagrobelny.jpg" alt="Paweł Zagrobelny">
      <h5>Paweł Zagrobelny</h5>
      <span>Administrator sofasport.pl<br>Sofa Magazyn</span>
    </a>
    <h4>Redaktorzy</h4>
    <a class="author">
      <img src="${issue.url}/img/authors/delinger.jpg" alt="Eryk Delinger">
      <h5>Eryk Delinger</h5>
      <span>SofaSport, Le Ballon Mag</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/Warzecha.jpg" alt="Sebastian Warzecha">
      <h5>Sebastian Warzecha</h5>
      <span>¡Olé! Magazyn, kiedyś Retro Magazyn, LosBlancos.pl i WiedzaSportowa.pl</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/iwanski.jpg" alt="Bartek Iwański">
      <h5>Bartłomiej Iwański</h5>
      <span>Redaktor SofaSport.pl</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/porebski.jpg" alt="Piotr Porębski">
      <h5>Piotr Porębski</h5>
      <span>Redaktor SofaSport.pl i SportSlaski.pl</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/stachnik.jpg" alt="Bartek Stachnik">
      <h5>Bartłomiej Stachnik</h5>
      <span>Redaktor SofaSport.pl<br> Bloger - "Piłka na aucie"</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/warchal.jpg" alt="Arek Warchał">
      <h5>Arkadiusz Warchał</h5>
      <span>Redaktor SofaSport.pl</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/hatta.jpg" alt="Tomek Hatta">
      <h5>Tomasz Hatta</h5>
      <span>Redaktor SofaSport.pl</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/galas.jpg" alt="Tomek Galas">
      <h5>Tomasz Galas</h5>
      <span>Redaktor SofaSport.pl i Retro Magazyn</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/pilny.jpg" alt="Adam Pilny">
      <h5>Adam Pilny</h5>
      <span>Redaktor SofaSport.pl</span>
    </a>
    <h4>Pozostali</h4>
    <a class="author">
      <img src="${issue.url}/img/authors/kuczynska.jpg" alt="Maja Kuczyńska">
      <h5>Maja Kuczyńska</h5>
      <span>Korekta</span>
    </a>
    <a class="author">
      <img src="${issue.url}/img/authors/zagrobelny.jpg" alt="Paweł Zagrobelny">
      <h5>Paweł Zagrobelny</h5>
      <span>Oprawa graficzna</span>
    </a>
    </div>

    <p class="please-share" style="display: none">
    Wszystkie teksty są własnością SofaSport.pl oraz ich autorów. Rozpowszechnianie ich poza formułą magazynu bez zgody ich twórców jest zabronione.  Zdjęcia użytew magazynie są wykorzystywanie na podstawie uznania autorstwa (Creative Commons 3.0 lub pokrewne).  Zdjęcię wykorzystane na okładce - By Kastom. (Own work.) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons.</p>


  </div>
  `
  ).get()},
  { "page": "3", "title": "Valbuena: L'art de la chute", "content": new page("Valbuena: L'art de la chute","Eryk Deligner","Piłka nożna","valbuena.jpg",["#Francja", "#Ligue1"],"fot: Вячеслав Евдокимов",
  "Życiorys Mathieu Valbueny nie jest typową historią o wielkim upadku, tudzież spektakularnym powrocie na szczyt – na jego opowieść składa się seria mniejszych i większych zakrętów, które niejednego piłkarza na zawsze wyrzuciłyby poza trasę do wielkich sukcesów.",
`
<p>Życiorys Mathieu Valbueny nie jest typową historią o wielkim upadku, tudzież spektakularnym powrocie na szczyt – na jego opowieść składa się seria mniejszych i większych zakrętów, które niejednego piłkarza na zawsze wyrzuciłyby poza trasę do wielkich sukcesów. </p>

<p>Pierwszy cios zadano mu w juniorskiej drużynie Girondins de Bordeaux, gdzie występował obok m.in. Rio Antonio Mavuby czy Marouane'a Chamakha. Nastoletni Valbuena dowiedział się wówczas, że jest zbyt drobny, a jego styl gry zbyt indywidualistyczny i podwórkowy, by kiedykolwiek znalazło się dla niego miejsce w profesjonalnym futbolu. Był to 2003 rok. Od momentu, w którym wszystkie te cechy staną się znakiem rozpoznawczym Mathieu, pomocnika dzieliło sześć czy siedem sezonów.</p>

<p>Wówczas, z dnia na dzień, z jednego z największych francuskich klubów Valbuena musiał przenieść się w głąb nadsekwańskiego systemu ligowego – aż na piąty szczebel, do amatorskiego Langnon-Castets. Powrotny marsz ku zawodowstwu rozpoczął niemal natychmiast – jeden sezon w Championnat de France amateur 2 wystarczył, by przekonać skautów trzecioligowego Libourne. Tam piłkarz zaczął się naprawdę rozwijać: o ile w pierwszym roku pozostawał na obrzeżach przeciętnie radzącego sobie w Championnat National zespołu, o tyle w kolejnych rozgrywkach wziął na siebie rolę lidera i swoimi dziewięcioma bramkami poprowadził drużynę do Ligue 2.</p>

<p>Kolejnego stojącego przed Libourne wyzwania Mathieu nie podjął – po miniaturowego pomocnika zgłosił się bowiem wielki rywal jego macierzystego Bordeaux, Olympique Marsylia. Po trzech latach od brutalnego pożegnania z profesjonalną grą tuż u jej progu, młody pół-Bask znów był na swoim miejscu. Pierwsze kroki w olimpijskiej ekipie przyniosły jednak kolejne trudności. Rzeczywistość zaczęła nieśmiało legitymizować obawy dawnych trenerów: 22-latek nie radził sobie z obciążeniami treningowymi w pierwszoligowym klubie. Chociaż Albert Emon szybko pozwolił zadebiutować nowemu nabytkowi w meczu o stawkę, piłkarz nie zdołał podtrzymać wiary trenera i oddalił się od wyjściowej jedenastki. Jeśli o powrocie do klubu występującego w Ligue 1 można mówić jako pełnym kole zatoczonym przez prywatną historię Valbueny, to kolejny krok ex-Żyrondysta mógł poczytywać za sygnał do startu drugiego okrążenia – jego pozycja w L'OM była w pewnej chwili tak słaba, że znów wylądował w piątej lidze; tym razem jako zawodnik marsylskich rezerw.</p>

<p>Do standardów pierwszej drużyny dorósł jeszcze przed końcem debiutanckiego sezonu, który zwieńczył pierwszym ekstraklasowym golem, gwarantującym Marsylii awans do kolejnej edycji Champions League. Po wakacyjnej przerwie Valbuena stawił się w klubie w szczytowej dyspozycji i wywalczył sobie rolę jednego z liderów wymuszonej  odejściami Francka Ribéry'ego i Habiba Beye'a rewolucji. Wraz z ochrzczonym „nowym Zidanem” Samirem Nasrim i świeżo mianowanym kapitanem Lorikiem Caną miał stanowić trzon nowej drużyny. Chociaż miewał kłopoty z utrzymaniem formy, pod batutą zatrudnionego po dziewięciu kolejkach Ligue 1 Erica Geretsa, jego ponadprzeciętne zdolności zaczęły coraz częściej dochodzić do głosu: na własnym podwórku Francuz uderzeniem z 40 metrów w meczu z Caen ustrzelił nagrodę za gola sezonu, zaś w dziewiczej kampanii w Lidze Mistrzów swoją bramką przeciwko Liverpoolowi zapewnił Marsylii historyczne zwycięstwo na Anfield.</p>

<p>Nie słynął ze skuteczności, lecz swoją błyskotliwością i bezczelnymi dryblingami bez reszty rozkochał w sobie zarówno trenera, jak i fanów klubu. Pewne miejsce w podstawowej jedenastce, nowy kontrakt z adekwatną podwyżką i pieszczotliwy przydomek od kibiców (le petit vélo - „Motorek”) - wszystko układało się idealnie, Mathieu Valbuena zaczynał być w Olympique'u Marsylia kimś naprawdę ważnym. Wtedy nadszedł czas na jeden z bardziej przewidywalnych zwrotów akcji w futbolu: Erica Geretsa zastąpił Didier Deschamps.</p>

<figure class="img">
  <img style="max-width: 400px" src="${issue.url}/img/valbuena2.jpg" alt="">
  <figcaption>Valbuena szybko stał się ulubieńcem kibiców <span>Матьё Вальбуэна [CC BY-SA 3.0])</span></figcaption>
</figure>

<p>Tak jak w 2007 roku Valbuena okazał się jednym z beneficjentów przewrotu, tak dwa lata później miał paść ofiarą kolejnego. Deschamps w pierwszych tygodniach pracy wręczył bilety w jedną stronę m.in. Canie, Karimowi Zianiemu i doświadczonemu Bolo Zendenowi. O swojej nieprzystawalności do koncepcji nowego szkoleniowca poinformowany został także Valbuena. Pomocnik postawił się legendzie klubu i mimo groźby karnego zesłania do rezerw nie pozwolił się wypchnąć ze Stade Vélodrome. Nowy trener L'OM blefował tylko do pewnego stopnia: nie wyrzucił Mathieu z pierwszej drużyny, ale długo nie przewidywał dla niego startowej pozycji innej niż siedząca. Upokorzony piłkarz przyłożył się do pracy bardziej niż kiedykolwiek i po półrocznym okresie zimnej wojny z przełożonym wreszcie otrzymał od losu upragnioną szansę. W lutym 2010 zmuszony sytuacją kadrową Deschamps wyznaczył Mata do gry w wyjściowym składzie.</p>

<p>Niesiony ambicją piłkarz do końca sezonu nie pozwolił się odesłać na ławkę i z tygodnia na tydzień rósł na bohatera kroczącego po dublet zespołu. Pierwszy był Puchar Ligi, a w jego ramach gole Valbueny w półfinale i finale (ten drugi, któż by się spodziewał, przeciwko Bordeaux). Później, na ostatniej prostej rozgrywek, seria trzech ligowych meczów z bramką z rzędu. Wszystkie trzy trafienia dawały Marsylii, bezcenne w walce o mistrzostwo, zwycięstwa. Tak zawodnik, który dziesięć miesięcy wcześniej usłyszał od Deschampsa-trenera „nie będziesz mi potrzebny” przyczynił się do zdobycia przez L'OM pierwszego tytułu od czasu Deschampsa-kapitana. Tytuł ów wyrwał z rąk, jakżeby inaczej, Girondins de Bordeaux.</p>

<p>W ciągu zaledwie trzech miesięcy Mathieu awansował z gracza niechcianego, jeśli nie otwartego wroga, na ulubieńca trenera. Oddanym fanem drobnego piłkarza Didier Deschamps miał zostać na lata, by z czasem przenieść owo uwielbienie na grunt reprezentacyjny. – Od początku kadencji DD jako selekcjonera w lipcu 2012 do końca Mundialu w 2014 Valbuena figurował w wyjściowej jedenastce Francuzów na 20 z 27 spotkań, zaś sześciokrotnie wchodził z ławki rezerwowych. Zanim jednak do tego doszło, w nagrodę za odbicie się z pozycji, w której rozważał transfer z klubu dla ratowania resztek piłkarskiej godności, otrzymał pierwsze powołanie do seniorskiej reprezentacji. Nie miał szczęścia, bo wyjazd na Mistrzostwa Świata w RPA był dla debiutanta niczym innym, jak biletem do pierwszego rzędu na ponury spektakl o samodestrukcji kadry Raymonda Domenecha. Strajk reprezentantów w żaden sposób nie zaszkodził dalszej karierze Mata w narodowym zespole, lecz 21 minut gry na turnieju z pewnością nie było warte dopisania do życiorysu udziału w największej XXI-wiecznej kompromitacji Les Bleus.</p>

<figure class="img">
  <img src="${issue.url}/img/valbuena3.jpg" alt="">
  <figcaption>Za kadencji Deschampsa Valbuena stał się kluczowym zawodnikiem reprezentacji<span>Xavier NALTCHAYAN [CC BY-SA 2.0])</span></figcaption>
</figure>

<p>Przykra przygoda w Afryce nie zdołała wybić Valbueny z rytmu przed kolejnym sezonem – pierwszym rozpoczętym w roli podstawowego gracza drużyny DD. Rok był dla pomocnika całkiem udany – tym bardziej, że okraszony drugim zwycięstwem w Pucharze Ligi z rzędu – ale miał stanowić tylko przygrywkę przed najlepszym okresem w jego karierze. Jak na ironię, czas rozkwitu Mathieu zbiegł się z początkiem końca Olympique'u jako zwycięskiego klubu. Z perspektywy samego piłkarza rozgrywki 2011/2012 były wspaniałe – 9 goli i 16 asyst w 49 meczach to do dziś jego osobisty rekord, w dodatku uświetniony jeszcze jednym medalem zdobywcy Coupe de la Ligue. Doskonała gra Valbueny nie wystarczyła by uchronić Marsylię przed szybującym lotem w przeciętność: zaledwie 12 miesięcy po wicemistrzostwie klub finiszował w tabeli na 10. pozycji, zaś decyzję o zmianie trenera podjęła za L'OM Francuska Federacja Piłkarska – Deschamps opuścił Vélodrome (i swojego ulubieńca) na rzecz reprezentacji.</p>

<p>Nowego szefa, Eliego Baupa, Mathieu przywitał już jako niekwestionowana gwiazda zespołu i całej Ligue 1. Francja doskonale znała go już jako szybkiego dryblera, wybitnego kreatora, ale też piłkarza wyciskającego maksimum ze swojej postury i chętnie wczuwającego się w rolę „tego mniejszego”, stale poszkodowanego przez silniejszych rywali. Rozwój umiejętności czysto piłkarskich wyraźnie osłabił zdolność Mathieu do walki z grawitacją, co sprawiło, że adoratorów swojego talentu miał już tylko wśród kibiców własnego klubu – poza Stade Vélodrome mógł liczyć wyłącznie na hurtowe ilości przysłaniającej wszelki podziw nienawiści. Swój gwiazdorski status, ze wszystkimi jego zaletami i wadami, potwierdził jako podopieczny Baupa: niemal powtórzył indywidualne wyniki (5 goli, 14 asyst), a jako piłkarz nieco odbudowanej i znów wicemistrzowskiej Marsylii dawał się nienawidzić bez krzty wyrzutów sumienia.</p>

<p>Dobrodziejstwo perspektywy pozwala z pełnym przekonaniem uznać, że to był moment, by korzystając z reputacji czołowego rozgrywającego ligi zrobić krok naprzód. Piłkarz go przegapił – został w klubie na kolejny, nijaki dla niego i drużyny sezon, by w 2014 roku popełnić podwójny błąd: u progu krótkiej acz ekscytującej epoki Marcelo Bielsy zrezygnować z Marsylii na rzecz Dynama Moskwa. Decyzja o transferze była równie wyrachowana jak jego liczne kontrolowane lądowania na murawie. Z wielu ofert, napływających po Mundialu m.in. z Premier League, Valbuena wybrał opcję najkorzystniejszą finansowo i ani przez chwilę się z tym nie krył. W Rosji pomocnik nie zawodził – ale życie i gra na Wschodzie najwyraźniej zawiodły jego, skoro rok później nie bacząc na konsekwencje bez wahania wykorzystał szansę powrotu do ojczyzny zapewnioną mu przez rywala Marsylii, Olympique Lyon.</p>

<p>Jeśli liczył, że w erze dominacji innego, większego wroga Marsylczycy odpuszczą mu zdradę, nie mógł się bardziej pomylić. Przy okazji wizyty na Vélodrome w nowych barwach Mathieu został błyskawicznie pozbawiony złudzeń co do pobłażliwości byłych wielbicieli – ultrasi uhonorowali jego przybycie wieszając (w pełnym tego słowa znaczeniu) na swojej trybunie kukłę-podobiznę Valbueny i ciskając w stronę żywego odpowiednika liczne dowody afektu, czym koniec końców doprowadzili do przerwania meczu. Ani wówczas, ani na przestrzeni całego sezonu pomocnik nie zdołał swoją grą uciszyć dawnych fanów bądź zdobyć serca nowych. Możliwości odbudowania formy pozbawił go skutecznie odciągający myśli od boiska szantaż, którego Francuz padł ofiarą.</p>

<figure class="img">
  <img style="max-width:500px;" src="${issue.url}/img/valbuena4.jpg" alt="">
  <figcaption>Sex-afera z udziałem graczy francuskiej kadry odbiła się dużym echem w mediach<span>L\`Equipe</span></figcaption>
</figure>

<p>Co gorsza, grożący ujawnieniem seks-taśmy z udziałem Valbueny przestępcy do kontaktu z piłkarzem Lyonu wykorzystali jego reprezentacyjnego kolegę, Karima Benzemę. Gdyby sama sytuacja oraz fakt współudziału człowieka z bliskiego otoczenia nie były dla gracza wystarczającym mentalnym obciążeniem, zawodnik został za swą krzywdę dodatkowo pognębiony wykluczeniem – jesienią, gdy afera wyszła na jaw, „dla dobra atmosfery w zespole” został potraktowany tak samo jak oprawca i pominięty przy powołaniach na mecze eliminacyjne Euro, choć oficjalnie o zawieszeniu nigdy nie było mowy. O słuszności takiej decyzji Deschampsa (i zapewne federacji) mogło świadczyć to, że u szczytu zamieszania próżno było szukać głosów poparcia kadrowiczów dla mało popularnego w szatni Valbueny – w świetle bogato udokumentowanej skłonności Les Bleus do wewnętrznych podziałów obawy o atmosferę nie były urojone. Gdy nadszedł czas ogłoszenia kadry na turniej, selekcjoner nie potrzebował już wymówek, bo piłkarz po złym pod każdym względem sezonie nie miał nic wspólnego z reprezentacyjną formą.</p>

<p>Pierwszy rok w Lyonie był bowiem dla Mathieu Valbueny koszmarem. Czego nie odebrał skandal obyczajowy i wynikła z niego kiepska kondycja mentalna, zabrały playmakerowi prześladujące go kontuzje. Kiedy pojawiał się na murawie, stale był jednym z najsłabszych piłkarzy OL i w końcu definitywnie stracił miejsce w jedenastce Les Gones na rzecz 19-letniego Maxwela Corneta – a to dla wystarczająco już sfrustrowanego (ex-)gwiazdora był ostateczny cios. Latem został ogłoszony wielkim zakupowym błędem klubu i mówiło się, że trafił na listę transferową prezesa Jeana-Michela Aulasa. Wbrew plotkom letnie okienko zakończył jednak jako piłkarz Olympique'u.</p>

<p>Wygląda na to, że kieszonkowego pomocnika nie da się złamać. Już wydawało się, że obecny sezon będzie dlań ponurą kontynuacją poprzedniego – margines zespołu, ciągłe kontuzje, wszechobecna krytyka. Wszystko zmieniło się, kiedy w listopadzie zastąpił, w  przerwie przegrywanego meczu z PSG, Macieja Rybusa. Kilka minut po wejściu wyrównał wynik pięknym golem i choć ostatecznie nie dał Lyonowi choćby punktu, od tamtej pory nie oddał nikomu miejsca w zespole Bruno Genesio. Co więcej, ma za sobą serię czterech ligowych meczów z bramką – pierwszą taką w karierze. Jeśli rzeczywiście zażegnał swoje problemy na dobre i pozostanie ważnym graczem OL na dłużej, nie pozostawi już wyboru – trzeba będzie uznać go za specjalistę w wydostawaniu się z piłkarskiego niebytu. </p>
    `).get()},

      { "page": "3", "title": "Walcząc ze sobą - Demony Mattiego Nykanena", "content": new page("Walcząc ze sobą - Demony Mattiego Nykanena","Sebastian Warzecha","Skoki narciarskie","nykanen.jpg", ["#SkiJumping", "#Nykanen"], "fot: PASI LIESIMAA",
       "Każdy ma swoje demony. Demonem Mattiego Nykänena był, jak dla wielu przed nim i po nim, alkohol. A kiedy demon przejmował nad nim władzę, to i sam Matti takim się stawał. On, najlepszy w historii, król skoczni, zwycięzca. Przegrywał ze swoim demonem. Przegrywał sam ze sobą.",
        `
        <h3>Koniec</h3>
<p>25 luty 1990, skocznia Vikersundbakken w Vikersund. Mistrzostwa Świata w Lotach. Matti Nykänen siedzi na belce, szykuje się do kolejnego skoku w zawodach. Jego forma  w tym sezonie nie mogła go zadowalać, ale teraz walczy o medal wielkiej imprezy. Jeszcze nie wie, że ostatni w swej karierze. Odbija się od belki, kilka chwil później jest już w powietrzu. Szybuje pięknie, starym stylem, którego był królem, idealnie ułożony w powietrzu. Jak to on. Ląduje na 160 metrze. Później okaże się, że ten skok daje mu srebrny medal. </p>
<p>Jak napisano, był to ostatni krążek z wielkiej imprezy w bogatej karierze Fina. Czterokrotny mistrz olimpijski, pięciokrotny mistrz świata, czterokrotny zwycięzca Pucharu Świata, dwukrotny tryumfator Turnieju Czterech Skoczni… Nie było imprezy, na której Nykänen by nie dominował. Rok po srebrze zdobytym w Norwegii, Matti zdecydował się przejść na sportową emeryturę. W wieku zaledwie 27 lat. W skakaniu przeszkadzały mu chore plecy (później zoperowane), sportowe wypalenie, a także niechęć do przejścia na styl V. </p>
<p>To był moment zwrotny w jego życiu. Moment, w którym sport nie mógł dłużej powstrzymywać tego, co w Finie się kryło. Zresztą już wcześniej bywało z tym różnie, ale zawsze była skocznia, były treningi, były medale do zdobycia, konkursy do wygrania. Teraz tego zabrakło. „Przeszedłem z dobrze mi znanego systemu do fazy niepewności. Przez całe swoje życie robiłem coś zupełnie innego i teraz tego dłużej nie miałem. Świat spoza skoków narciarskich był całkowicie inny od tego, który znałem do tej pory” mówił po latach w swej biografii. </p>

<blockquote>
  „Przeszedłem z dobrze mi znanego systemu do fazy niepewności. Przez całe swoje życie robiłem coś zupełnie innego i teraz tego dłużej nie miałem. Świat spoza skoków narciarskich był całkowicie inny od tego, który znałem do tej pory”
  <span class="author">Matti Nykänen, "Pozdrowienia z piekła"</span>
</blockquote>
<h3>Początek</h3>

<p>Pierwszy skok oddał podobno w wieku 7 lat. Tak twierdził kiedyś. Niedawno zmienił zdanie i okazało się, że skakać zaczął w wieku lat 12. Pewny jest za to, kiedy zaczął pić – miał wtedy 14 lat i dopiero wchodził w „juniorski” okres swojego życia. Alkohol towarzyszył mu potem przez całą karierę. Doszło do tego, że w  sezonie 1985/86 zainterweniować musiała fińska federacja. Matti został przez nią zawieszony. Zresztą nie po raz ostatni.
<p> <em>„Widziałem ludzi, którzy z powodu choroby alkoholowej nie mogli biegać, chodzić. Ja chodzę i biegam nawet po czterech piwach. Upijałem się trzema butelkami piwa już jako 14-latek. Na zgrupowaniach działy się takie rzeczy, że jeszcze dziś, gdybym wszystko ujawnił, rozbiłbym kilka szczęśliwych małżeństw”</em> mówił po latach w wywiadzie dla Przeglądu Sportowego. </p>
<p>Mniej więcej w tamtym czasie usłyszał też pierwszy wyrok. Wielka gwiazda skoków, jeszcze przed momentem swej największej chwały, ale już człowiek kochany w całej Finlandii, trzykrotny zwycięzca Pucharu Świata… ukradł ze sklepu papierosy i alkohol. Wtedy skończyło się na grzywnie. Ale więzienie Matti miał jeszcze dobrze poznać. Zaczął jednak od poznania smaku wyrzucenia z Turnieju Czterech Skoczni – w kolejnym sezonie zdemolował hotel, w którym mieszkał i organizatorzy imprezy postanowili zareagować. </p>
<p>Nieco ponad rok później został bohaterem igrzysk w Calgary. Na jego szyi zawisły trzy złote krążki, rodacy szaleli na jego punkcie, a na całym świecie nazwisko Nykänena zaczynało kojarzyć się z najlepszym skoczkiem w historii. Aż do zakończenia kariery, które stało się początkiem zupełnego upadku Fina. </p>
<p>Wybrany w 1989 najlepszym fińskim sportowcem lat 80., po zakończeniu kariery nie ma pieniędzy – te, które wygrał na skoczni, wydał szybko. Sprzedaje więc swoje medale, skupuje je Muzeum Sportu w Helsinkach. To nie wystarcza, prędko traci i te środki do życia. Pomagają mu lokalni biznesmeni, namawiają na karierę muzyczną, która idzie zaskakująco dobrze. Pierwsza płyta Mattiego rozchodzi się w liczbie wystarczającej na jej ozłocenie. Później jest jednak gorzej. Nykänen musi łapać się dorywczych zajęć – po latach napisze w swej biografii, że pracował m.in. jako striptizer czy odbierający telefony na erotycznej linii. </p>
<h3>„Dr Jekyll i Mr Hyde” </h3>

<p>Każdy, kto go zna, przyzna, że Matti ma dwa oblicza. <em>„Kiedy jest trzeźwy, to jeden z najmilszych i najprzyjaźniejszych ludzi, jakich poznałem. Pijany, jest agresywny i niebezpieczny”</em> mówił o nim Egon Theiner, współautor biografii Fina. </p>
<blockquote>
  „Kiedy jest trzeźwy, to jeden z najmilszych i najprzyjaźniejszych ludzi, jakich poznałem. Pijany, jest agresywny i niebezpieczny”
  <span class="author">Egon Theiner, współautor biografii Matti'ego</span>
</blockquote>
<p>Życie Nykänena to ciągłe balansowanie na ostrzu noża. Po jednej jego stronie czai się spokojny, miły człowiek. Po drugiej agresor, zdolny do wszystkiego. Zresztą porównanie to jest nieprzypadkowe. To właśnie od noża zaczynała się większość jego „przygód”. Gdzie się kończyły? Zwykle w więzieniu, którego był częstym gościem. </p>
<p>W 2003 roku został skazany na cztery miesiące za kratkami, jednak wyrok został zawieszony. Próbował wtedy zaatakować nożem swoją żonę, Mervi Tapolę, która była zresztą jego czwartą wybranką. Cała sprawa skończyła się rozwodem, ale już rok później para wróciła do siebie. Krótko po tym Matti już nie tylko „próbował”, ale też zranił nożem swego przyjaciela, gdy przebywali w domku letniskowym Tapoli. Od dłuższej kary, niż otrzymane 26 miesięcy więzienia, uchronił go sędzia, uznając, że Matti w chwili ataku był pod wpływem alkoholu i nie panował nad sobą. Sądzono go więc nie za próbę zabójstwa, ale za uszkodzenie ciała. </p>
<p>Wyszedł z więzienia warunkowo, we wrześniu 2005 roku. Niedługo po tym ponownie do niego trafił, na cztery miesiące, kiedy po raz kolejny zaatakował żonę. Znów wyszedł i znów prędko do niego wrócił, gdy rzucił się z nożem na klienta pizzerii, w której akurat przebywał. Pierwotnie skazano go na dwa lata, ale udało mu się wywinąć dwoma miesiącami w więzieniu i pracami społecznymi. Ostateczna kara przyszła w 2009 roku, gdy ponownie zaatakował i zranił nożem swą żonę. Próbował też udusić ją paskiem od szlafroka. Ona sama wniosła do sądu pozew rozwodowy, już piętnasty, który okazał się być ostatnim. Nawet Mervi miała dość. </p>
<h3>Najlepszy</h3>

<p> <em>„Adam Małysz i Jens Weissflog osiągnęli bardzo wiele. Gregor Schlierenzauer to też wyjątkowy zawodnik, ale nikt z nich nie osiągał takich wyników jak Nykaenen”</em> mówił jakiś czas temu Walter Hofer, gdy Przegląd Sportowy przeprowadzał głosowanie na skoczka wszechczasów. Nykänen zdystansował w nim rywali, podobnie jak czynił to na skoczni. </p>
<p>Przez wiele lat Fin był ulubieńcem fanów, człowiekiem, którego rywalizacja z Weissflogiem rozbudzała wyobraźnię każdego kibica. Czterokrotny mistrz olimpijski, najlepszy w historii. Nie miał wyjścia, musiał zostać idolem. Na jego skokach wychowało się następne pokolenie wielkich zawodników. To jego podziwiali Adam Małysz, Andreas Goldberger czy Janne Ahonen, gdy byli nastolatkami. Jego sukcesy chcieli powtórzyć. </p>
<blockquote>
„Adam Małysz i Jens Weissflog osiągnęli bardzo wiele. Gregor Schlierenzauer to też wyjątkowy zawodnik, ale nikt z nich nie osiągał takich wyników jak Nykaenen”
  <span class="author">Walter Hofer</span>
</blockquote>
<p>W 1999 roku jego rodacy wybrali go drugim najlepszym fińskim sportowcem XX wieku. Przegrał jedynie z Paavo Nurmim – wielkim biegaczem długodystansowym, dziewięciokrotnym złotym medalistą olimpijskim, zdobywcą złotych krążków na trzech różnych Igrzyskach. Taką porażkę można zaakceptować. Znacznie trudniej zaakceptować porażkę idola w walce z nałogami, a to musieli zrobić fani Nykänena. Choć ostatnio, na myśl o Mattim, mogą się częściej uśmiechać. </p>
<figure class="img">
  <img src="${issue.url}/img/Nykanen2.JPG" alt="">
  <figcaption>Kolekcja medali Nykänena w Muzeum Sportu w Helsinkach<span>(Htm (praca własna) [CC BY-SA 3.0])</span></figcaption>
</figure>
<h3>Prosta</h3>
<p>Całkiem niedawno był w życiu Nykänena długi okres bez alkoholu. Kilka lat nie naznaczonych  żadnymi wybrykami, o co trudno było kiedykolwiek wcześniej. Na swej drodze spotkał kobietę, dla której przestał pić. Susanna, bo tak ma na imię kolejna wybranka jego serca, miała na niego dobry wpływ. Matti wystąpił w reality show o swoim życiu, bijącym rekordy popularności, występował ze swym zespołem, stworzył własny program o gotowaniu, wydał książkę kucharską. Nie pił trzy lata. </p>
<p>Później ponownie chwycił za kieliszek, znikając wcześniej bez śladu. Wrócił, tłumaczył, że musiał napić się z kolegami, próbował to wszystko rozsądnie uargumentować. Susanna nie słuchała. Gdy Matti pojawił się w domu, jej już nie było. Postawiła mu jeden prosty warunek – ma przestać pić i zapisać się na terapię. Wtedy wróci. </p>
<p>Wróciła, a Matti faktycznie ponownie skierował swe życie na dobre tory. Odstawił alkohol – jak na razie skutecznie – znów się rozwija. Marzy o stworzeniu klubu w Finlandii. Jak mówi, trwają rozmowy ze sponsorami, znajdujące się już w zaawansowanej fazie. Wierzy, że jest w stanie pomóc fińskim skokom, które przeżywają kryzys, i to w tym kierunku chce teraz kierować swą przyszłość. Sam twierdzi, że wszystko zawdzięcza partnerce: <em>„Czułem wielką pustkę we mnie przez 20 lat – dopóki nie poznałem Susanny. Jest pierwszą osobą, jaką znam, która jest całkiem szczera, której mogę powiedzieć o swoich uczuciach i obawach. Jest pierwszą osobą, której ufam”</em> mówił. Jest też osobą, która wyprowadziła Mattiego Nykänena na prostą. A to jej największe osiągnięcie. </p>
<p>Pozostaje zadać sobie pytanie: jak długo Matti Nykänen będzie w stanie się na tej prostej utrzymać? Jego demony nie zginęły, pozostają uśpione. Nigdy nie wiadomo, czy nie obudzą się, by ściągnąć fińskiego mistrza na złą drogę. </p>

        `).get()},

        { "page": "3", "title": "Olimpijska wyprawa w przeszłość – starożytne Igrzyska i ich wpływ na dzisiejszy sport", "content": new page("Olimpijska wyprawa w przeszłość – starożytne Igrzyska i ich wpływ na dzisiejszy sport","Bartłomiej Iwaśnki","Sport","olimpiada.jpg", ["#Olimpida", "#Historia"], "fot: własne",
        "Sport bywa czasem czymś więcej niż tylko zwykłą rywalizacją z przeciwnikami. Prawie 3 tysiące lat temu w głowach starożytnych Greków pojawił się pomysł stworzenia zmagań, mających odsunąć na dalszy plan wszystkie inne przyziemne i duchowe problemy. Na krótki czas trwania Igrzysk zaprzestawano wojen, a centralnym punktem życia religijnego mieszkańców Hellady stawała się Olimpia. Według wierzeń, w trakcie sportowych walk, szczególnie czuwał nad nią Zeus. Jak wyglądała antyczna rywalizacja i ile ma wspólnego ze sportem, który oglądamy obecnie?",
  `
  <h3>Wieczna chwała dla zwycięzców</h3>

<p>Starożytne Igrzyska, których początek datowany jest na rok 776 p.n.e. dały początek współczesnym zawodom sportowym. I, choć analogii z obecną rywalizacją jest sporo, to mityczne zmagania na Półwyspie Peloponeskim były jednak czymś więcej niż tylko walką o pokonanie rywali i zdobycie nagród materialnych. </p>
<p>Zwycięzcy, czyli olimpionicy zdobywali wieczną chwałę. O szczególnym traktowaniu triumfatorów przekonał się w V wieku p.n.e. Dorieus z Rodos. Po trzykrotnym wygraniu pankrationu (starożytnej wersji dzisiejszego MMA) brał on udział w wojnie peloponeskiej przeciwko Atenom, podczas której trafił do niewoli. Gdy jego wrogowie dowiedzieli się, kto jest ich więźniem, błyskawicznie darowali mu wolność. Dorieus ostatecznie i tak został stracony – gdy Rodos stanęło po jednej stronie z Atenami w konflikcie ze Spartą, trzykrotny olimpionik został przechwycony i stracony przez wrogów, którzy nie szanowali pankrationu. Konkurencja kończyła się bowiem przez poddanie jednego z walczących, a Spartanie nie uznawali kapitulacji i otwarcie bojkotowali tę dyscyplinę sportu.  </p>
<p>Zwycięzcy Igrzysk w ostatnim dniu trwania imprezy zyskiwali przywilej postawienia swojego posągu w gaju Zeuza – Altis. Początkowo pustawy ogród z biegiem czasu zapełniał się rzeźbami i świątyniami, wznoszonymi ku chwale największego z greckich Bogów. Tradycyjnie olimpionicy dekorowani byli wieńcem z gałązki świętej oliwki – rosnącej w gaju Altis i będącej, według opracowania Jana Parandowskiego, starym, zgrzybiałym drzewkiem, którego dwie gałęzie przypominały jednak muskularne ramiona atlety. </p>
<p>Największym starożytnym mistrzem był Leonidas z Rodos. Wybitny biegacz, który wsławił się zdobyciem tytułu Triastes (zwycięstwo w trzech konkurencjach biegowych – stadion (192,8 m), diaulos (dystans dwóch stadionów) i hoplitodromos, czyli bieg w zbroi)  na 4 kolejnych Igrzyskach, w latach 164 – 152 p.n.e. Jego rekord, a więc 12 tytułów mistrza olimpijskiego, przetrwał ponad 2000 lat, a pobity został dopiero na ostatnich Igrzyskach w Rio de Janeiro przez Michaela Phelpsa. Wyczyny obu sportowców ciężko jest jednak porównywać. Liczba konkurencji, w których bierze udział obecnie Amerykanin, jest nieporównywalnie większa. Leonidas ostatnie laury zdobywał w wieku 36 lat, co, jak na tamte czasy, było nie lada osiągnięciem. Z drugiej strony, starożytne Igrzyska zrzeszały jedynie sportowców z greckich polis (miast-państw), natomiast obecnie jest to impreza globalna, a co za tym idzie,rywalizacja jest zdecydowanie trudniejsza. Nie umniejsza to jednak zasług Leonidasa z Rodos, który zdominował w swoim czasie sportowe zmagania . Współcześni mu ludzie uznali go za herosa, a jego rekord przetrwał wiele epok. </p>

<h3>Tradycje i zwyczaje</h3>

<p>Igrzyska były dla starożytnych Greków czasem wyjątkowym. Na miesiąc przed rozpoczęciem zmagań następował święty pokój (ekechejria) – na terenie całego kraju zaprzestawano wojen, by ludność mogła zjechać się do Olimpii, a sportowcy w spokoju mogli zakończyć przygotowania do rywalizacji. Zawodnicy swoje treningi rozpoczynali na 10 miesięcy przed startem Igrzysk, trenując w swoich rodzinnych miastach w specjalnych miejscach, zwanych gimnazjonami. Ostatni miesiąc przygotowań spędzali pod okiem hellanodików, czyli sędziów dbających o prawidłową organizację i przebieg zawodów. To oni na koniec podejmowali decyzję o dopuszczeniu sportowca do startu w Igrzyskach. Mężczyźni, mający wystartować w zawodach, składali, w obecności ojca i rodzeństwa, uroczystą przysięgę, w której zapewniali o sumiennym przygotowaniu do rywalizacji i deklarowali swoją uczciwość. W przypadku niedotrzymania obietnicy, zawodników spotykało potępienie poprzez postawienie pomnika hańby oraz nakładano na nich karę grzywny. </p>
<p>Początkowo zawodnicy występowali z opaskami na biodrach, jednak po incydencie podczas 15. Igrzysk, gdy Orsippos z Megary lub, według innych źródeł, Akantos ze Sparty zgubił w trakcie biegu swoje odzienie i wpadł na linię mety w stroju Adama, podjęto decyzję, że od tej pory wszyscy sportowcy będą rywalizować nago, z wyjątkiem dwóch konkurencji – wyścigu rydwanów i wspomnianego wcześniej wyścigu w zbroi. Próżno jednak było szukać wśród widowni kobiet, mogących nacieszyć oko takim widokiem – płeć piękna nie miała wstępu na obiekty sportowe, a mężatki na czas Igrzysk zmuszone były do opuszczenia Olimpii. </p>
<p>Czas trwania Igrzysk od zawsze symbolizował płonący znicz. W starożytności rozpalano go w świętym gaju przy pomocy promieni słonecznych, skupionych przez zwierciadło. Płonący ogień miał symbolizować prawdę, wiedzę, światło i czystość. W przeciwieństwie do obecnych zwyczajów, w starożytności rozpaleniu znicza nie towarzyszyły żadne huczne obrzędy. Sztafety z ogniem i uroczyste ceremonie są zjawiskiem stosunkowo nowym, zapoczątkowanym przy okazji Igrzysk w Berlinie w 1936 roku. </p>
<p>Starożytne Igrzyska nie były tak rozbudowane, jak obecne – początkowo trwały zaledwie jeden dzień. Z czasem ich formułę rozbudowano do 5 dni, gdzie pierwszy dzień poświęcony był na składanie przysięgi, a ostatni na nagradzanie zwycięzców i stawianie posągów. W środku rywalizacji był natomiast czas na ponowne składanie ofiar Zeusowi. Liczba konkurencji również była nieporównywalnie mniejsza do współczesnej. Poza wspomnianymi biegami, pankrationem i wyścigami rydwanów, rywalizowano również w skoku w dal, rzucie dyskiem i oszczepem, w zapasach oraz boksie. </p>

<h3>Upadek Igrzysk</h3>

<p>Starożytne Igrzyska rozgrywano przez przeszło 1000 lat. Z czasem ich znaczenie zaczęło spadać, na co wpływ miało wiele czynników. Zainteresowanie wciąż było bardzo duże, ale ogromna rzesza chętnych do uczestniczenia w tym wydarzeniu w roli widzów nie niosła za sobą odpowiedniej liczby sportowców. Poziom współzawodnictwa z biegiem lat stawał się coraz słabszy. Rozwojowi Igrzysk w Grecji nie pomogły również mocarstwowe zapędy Cesarstwa Rzymskiego. </p>
<p>Po narodzeniu Chrystusa zaczął się stopniowy proces zawłaszczania największej sportowej imprezy przez kolejnych cesarzy. W I w. n.e. rozpoczęło się ograbianie Olimpii ze skarbów, zgromadzonych tam na przestrzeni kilkuset lat. W kolejnych latach obiekty olimpijskie zostały częściowo rozebrane w celu stworzenia fortyfikacji obronnych. Końcem starożytnych Igrzysk był rok 393 n.e., gdy cesarz Teodozjusz I Wielki wydał zakaz ich organizowania. Pozostałości po sportowej świetności Olimpii nie przetrwały długo. Altis zostało doszczętnie zniszczone, a resztki olimpijskich aren pogrzebało trzęsienie ziemi ok VI w. n.e. </p>

<h3>Odrodzenie idei olimpijskiej</h3>

<p>Idea organizowania Igrzysk zniknęła na ok. 15 stuleci. W roku 1896 w Atenach odrodziła się za sprawą Pierre'a de Coubertina – francuskiego barona, pomysłodawcy odbudowania ruchu olimpijskiego. Tradycyjnie, kolejne imprezy zaczęto organizować co 4 lata. Igrzyska nie były jednakże już tylko rozgrywką dla sportowców greckich. Do rywalizacji zaproszono wszystkie nacje, skupione wewnątrz nowo powstałego Międzynarodowego Komitetu Olimpijskiego, którego prezesem na długie lata został wybrany właśnie Pierre de Coubertin. Wedle jego założeń, sport miał nie tylko kształtować siłę fizyczną, ale miał również stać się przyczyną/ czynnikiem do zaszczepienia pokoju ducha i połączenia wielu narodów w duchu sportowej rywalizacji, czego dowodem stały się olimpijskie koła – symbol splecionych ze sobą pięciu kontynentów. Dowodem uznania dla tradycji był wybór stolicy Grecji jako pierwszego miasta – gospodarza nowożytnych Igrzysk. </p>
<p>Główną areną zmagań został, odbudowany wielkim kosztem, historyczny Stadion Panateński (Panathinaiko) – obiekt w kształcie półelipsy, będący jedyną tego typu budowlą na świecie, w całości wykonaną z marmuru. Obecnie Panathinaiko jest nie tylko jedną z głównych atrakcji turystycznych Aten. Po kolejnych modernizacjach był m.in. areną zmagań łuczników przy okazji Igrzysk w 2004 r. Jest także symbolicznym miejscem, gdzie kończą się maratony. W 1896 r. zmagania sportowców na tym obiekcie śledziło na żywo ok. 80 tysięcy osób. Każdemu, kto chce na własnej skórze poczuć klimat antycznych zmagań, polecam stanąć na podium, na środku stadionu, i rozejrzeć się po marmurowych trybunach, kryjących tysiące lat historii sportu. </p>
<h3>Nowe idee</h3>

<p>W kolejnych latach po powstaniu nowożytnych Igrzysk, zaczęły kiełkować idee o powiększeniu ruchu olimpijskiego o dodatkowe gałęzie. Wzrastała nie tylko liczba konkurencji w trakcie letnich zmagań. Pojawił się pomysł organizowania zimowego odpowiednika tej rywalizacji. Odbyło się to po raz pierwszy w 1924 roku we francuskim Chamonix.  Lista rozegranych konkurencji początkowo nie była długa. Składały się na nią: narciarstwo klasyczne, łyżwiarstwo szybkie, łyżwiarstwo figurowe, hokej na lodzie, curling i bieg patroli wojskowych, będący odpowiednikiem dzisiejszego biathlonu. </p>
<p>Pomysł rozegrania kolejnych zawodów zrodził się w 1948 roku w głowach brytyjskich weteranów II wojny światowej, chcących zorganizować rywalizację dla osób niepełnosprawnych. Ich starania, pod przewodnictwem doktora Ludwika Guttmanna, doprowadziły wkrótce do powstania pierwszych Igrzysk Paraolimpijskich, które miały miejsce w 1960 roku w Rzymie. Z biegiem lat zyskiwały one na znaczeniu, aż w 1988 roku po raz pierwszy w historii zostały rozegrane na tych samych obiektach, co rywalizacja osób zdrowych. </p>

<h3>Olimpijskie ideały współcześnie</h3>

<p>Starożytne Igrzyska, pomimo tego, że niewiele mają wspólnego z obecną rywalizacją, często mylnie nazywaną Olimpiadą (co oznacza 4-letni czas oczekiwania na kolejne zmagania, a nie samą imprezę), dały początek sportowi, który znamy współcześnie. Dzisiejszy kształt olimpijskiej rywalizacji dostosowany jest w dużej mierze do wymagań komercyjnych. Formował się na przestrzeni lat – od momentu ustanowienia nowożytnych Igrzysk pod koniec XIX wieku. Liczba konkurencji z biegiem lat się powiększała, a walka wielu dyscyplin o uzyskanie miana sportu olimpijskiego nadal trwa. Dziś Igrzyska, pomimo zakazu umieszczania reklam na strojach zawodników, są przesiąknięte pieniędzmi i wymaganiami firm, będących sponsorami strategicznymi całych zmagań. Kraje, owładnięte wojną ani myślą zaprzestawać walk dla uczczenia rywalizacji. Wręcz przeciwnie – niedawny najazd wojsk rosyjskich na Ukrainę zbiegł się w czasie z zimowymi Igrzyskami w Soczi. Tak samo, jak przy okazji każdej dużej imprezy, również tutaj realne jest zagrożenie atakiem terrorystycznym. </p>
<p>Mimo tak wielu czynników, odbierających Igrzyskom Olimpijskim dawny etos i wyjątkowość, są one w dalszym ciągu traktowane jako wydarzenie szczególne w świecie sportu. Żadnej porażki zawodnicy nie przeżywają tak mocno, jak niepowodzenia z pięcioma kołami olimpijskimi w tle, a każdy wyjątek od reguły potwierdza, jak ważna jest to rywalizacja również dla kibiców. Wystarczyło, by Agnieszka Radwańska stwierdziła, że w zasadzie to turnieje Wielkoszlemowe są dla tenisistów ważniejsze, by w całej Polsce rozpętała się burza, a za zawodniczką te pochopne słowa będą się ciągnęły prawdopodobnie do końca kariery. Okazało się, że kibic jest w stanie wybaczyć sportowcowi niemal wszystko, ale nie zlekceważenie ideałów olimpijskich. </p>

          `).get()},


/*
{ "page": "7", "content": new page(7,`<p><strong>Wieczna chwała dla zwycięzców</strong></p>

<p>Starożytne Igrzyska, których początek datowany jest na rok 776 p.n.e. dały początek współczesnym zawodom sportowym. I, choć analogii z obecną rywalizacją jest sporo, to mityczne zmagania na Półwyspie Peloponeskim były jednak czymś więcej niż tylko walką o pokonanie rywali i zdobycie nagród materialnych. </p>
<p>Zwycięzcy, czyli olimpionicy zdobywali wieczną chwałę. O szczególnym traktowaniu triumfatorów przekonał się w V wieku p.n.e. Dorieus z Rodos. Po trzykrotnym wygraniu pankrationu (starożytnej wersji dzisiejszego MMA) brał on udział w wojnie peloponeskiej przeciwko Atenom, podczas której trafił do niewoli. Gdy jego wrogowie dowiedzieli się, kto jest ich więźniem, błyskawicznie darowali mu wolność.Dorieus ostatecznie i tak został stracony – gdy Rodos stanęło po jednej stronie z Atenami w konflikcie ze Spartą, trzykrotny olimpionik został przechwycony i stracony przez wrogów, którzy nie szanowali pankrationu. Konkurencja kończyła się bowiem przez poddanie jednego z walczących, a Spartanie nie uznawali kapitulacji i otwarcie bojkotowali tę dyscyplinę sportu. </p>
<p>Zwycięzcy Igrzysk w ostatnim dniu trwania imprezyzyskiwali przywilej postawienia swojego posągu w gaju Zeuza – Altis. Początkowo pustawy ogród z biegiem czasu zapełniał się rzeźbami i świątyniami, wznoszonymi ku chwale największego z greckich Bogów. Tradycyjnie olimpionicy dekorowani byli wieńcem z gałązki świętej oliwki – rosnącej w gaju Altis i będącej, według opracowania Jana Parandowskiego, starym, zgrzybiałym drzewkiem, którego dwie gałęzie przypominały jednak muskularne ramiona atlety. </p>

<p>Największym starożytnym mistrzem był Leonidas z Rodos. Wybitny biegacz, który wsławił się zdobyciem tytułu Triastes (zwycięstwo w trzech konkurencjach biegowych – stadion (192,8 m), diaulos (dystans dwóch stadionów) i hoplitodromos, czyli bieg w zbroi)  na 4 kolejnych Igrzyskach, w latach 164 – 152 p.n.e. Jego rekord, a więc 12 tytułów mistrza olimpijskiego, przetrwał ponad 2000 lat, a pobity został dopiero na ostatnich Igrzyskach w Rio de Janeiro przez Michaela Phelpsa.</p>

`,`Sport bywa czasem czymś więcej niż tylko zwykłą rywalizacją z przeciwnikami. Prawie 3 tysiące lat temu w głowach starożytnych Greków pojawił się pomysł stworzenia zmagań, mających odsunąć na dalszy plan wszystkie inne przyziemne i duchowe problemy. Na krótki czas trwania Igrzysk zaprzestawano wojen, a centralnym punktem życia religijnego mieszkańców Hellady stawała się Olimpia, nad którą, według wierzeń, w trakcie sportowych walk, szczególnie czuwał Zeus. Jak wyglądała antyczna rywalizacja i ile ma wspólnego ze sportem, który oglądamy obecnie?`,
"with_image","Olimpijska wyprawa w przeszłość – starożytne Igrzyska i ich wpływ na dzisiejszy sport","Iwanski","Sport","olimpiada.jpg",["#Olympics"],"Własne").get()},

  { "page": "8", "content": new page(8,`
    <p> Wyczyny obu sportowców ciężko jest jednak porównywać. Liczba konkurencji, w których bierze udział obecnie Amerykanin, jest nieporównywalnie większa. Leonidas ostatnie laury zdobywał w wieku 36 lat, co, jak na tamte czasy, było nie lada osiągnięciem, ale z drugiej strony, starożytne Igrzyska zrzeszały jedynie sportowców z greckich polis (miast-państw), a obecnie jest to impreza globalna, a co za tym idzie,rywalizacja jest zdecydowanie trudniejsza. Nie umniejsza to jednak zasług Leonidasa z Rodos, który zdominował w swoim czasie sportowe zmagania, współcześni mu ludzie uznali go za herosa, a jego rekord przetrwał wiele epok. </p>

    <p><strong>Tradycje i zwyczaje</strong></p>



    <p>Igrzyska były dla starożytnych Greków czasem wyjątkowym. Na miesiąc przed rozpoczęciem zmagań następował święty pokój (ekechejria) – na terenie całego kraju zaprzestawano wojen, by ludność mogła zjechać się do Olimpii, a sportowcy w spokoju mogli zakończyć przygotowania do rywalizacji. Zawodnicy swoje treningi rozpoczynali na 10 miesięcy przed startem Igrzysk, trenującw swoich rodzinnych miastach w specjalnych miejscach, zwanych gimnazjonami. Ostatni miesiąc przygotowań spędzali pod okiem hellanodików, czyli sędziów dbających o prawidłową organizację i przebieg zawodów. To oni na koniec podejmowali decyzję o dopuszczeniu sportowca do startu w Igrzyskach.Mężczyźni, mający wystartować w zawodach, składali, w obecności ojca i rodzeństwa, uroczystą przysięgę, w której zapewniali o sumiennym przygotowaniu do rywalizacji i deklarowali swoją uczciwość. W przypadku niedotrzymania obietnicy, zawodników spotykało potępienie poprzez postawienie pomnika hańby oraz nakładano na nich karę grzywny. </p>

    <div class="img">
      <img src="${issue.url}/img/olympics.jpg" alt="">
      <span><em>Cereonia otwarcia - Panathinaiko Stadium</em>
      </span>
    </div>
    </p>
    <p>Początkowo zawodnicy występowali z opaskami na biodrach, jednak po incydencie podczas 15. Igrzysk, gdy Orsippos z Megary lub, według innych źródeł, Akantos ze Sparty zgubił w trakcie biegu swoje odzienie i wpadł na linię mety w stroju Adama, podjęto decyzję, że od tej pory wszyscy sportowcy będą rywalizować nago, z wyjątkiem dwóch konkurencji – wyścigu rydwanów i wspomnianego wcześniej wyścigu w zbroi. Próżno jednak było szukać wśród widowni kobiet, mogących nacieszyć oko takim widokiem – płeć piękna nie miała wstępu na obiekty sportowe, a mężatki na czas Igrzysk zmuszone były do opuszczenia Olimpii. </p>
    <div class="img">
      <img style="width: 200px;" src="${issue.url}/img/Baron.jpg" alt="">
      <span><em>Baron Pierre de Coubertin - inicjator nwowożytnych igrzysk</em>
      </span>
    </div>

    <p>Czas trwania Igrzysk od zawsze symbolizował płonący znicz. W starożytności rozpalano go w świętym gaju przy pomocy promieni słonecznych, skupionych przez zwierciadło. Płonący ogień miał symbolizować prawdę, wiedzę, światło i czystość. W przeciwieństwie do obecnych zwyczajów, w starożytności rozpaleniu znicza nie towarzyszyły żadne huczne obrzędy. Sztafety z ogniem i uroczyste ceremonie są zjawiskiem stosunkowo nowym, zapoczątkowanym przy okazji Igrzysk w Berlinie w 1936 roku. </p>
    <p>Starożytne Igrzyska nie były tak rozbudowane, jak obecne – początkowo trwały zaledwie jeden dzień. Z czasem ich formułę rozbudowano do 5 dni, gdzie pierwszy dzień poświęcony był na składanie przysięgi, a ostatni na nagradzanie zwycięzców i stawianie posągów. W środku rywalizacji był natomiast czas na ponowne składanie ofiar Zeusowi. Liczba konkurencji również była nieporównywalnie mniejsza do współczesnej. Poza wspomnianymi biegami, pankrationem i wyścigami rydwanów, rywalizowano również w skoku w dal, rzucie dyskiem i oszczepem, w zapasach oraz boksie. </p>





    `).get()  },

      { "page": "9", "content": new page(9,`

            <p><strong>Upadek Igrzysk</strong></p>

        <p>Starożytne Igrzyska rozgrywano przez przeszło 1000 lat. Z czasem ich znaczenie zaczęło spadać, na co wpływ miało wiele czynników. Zainteresowanie wciąż było bardzo duże, ale ogromna rzesza chętnych do uczestniczenia w tym wydarzeniu w roli widzów nie niosła za sobą odpowiedniej liczby sportowców. Poziom współzawodnictwa z biegiem lat stawał się coraz słabszy. Rozwojowi Igrzysk w Grecji nie pomogły również mocarstwowe zapędy Cesarstwa Rzymskiego. </p>
        <p>Po narodzeniu Chrystusa zaczął się stopniowy proces zawłaszczania największej sportowej imprezy przez kolejnych cesarzy. W I w. n.e. rozpoczęło się ograbianie Olimpii ze skarbów, zgromadzonych tam na przestrzeni kilkuset lat. W kolejnych latach obiekty olimpijskie zostały częściowo rozebrane w celu stworzenia fortyfikacji obronnych. Końcem starożytnych Igrzysk był rok 393 n.e., gdy cesarz Teodozjusz I Wielki wydał zakaz ich organizowania. Pozostałości po sportowej świetności Olimpii nie przetrwały długo. Altis zostało doszczętnie zniszczone, a resztki olimpijskich aren zmiotło z powierzchni ziemi trzęsienie ziemi ok VI w. n.e. </p>

        <p><strong>Odrodzenie idei olimpijskiej</strong></p>

        <p>Idea organizowania Igrzysk zniknęła na ok. 15 stuleci. W roku 1896 w Atenach odrodziła się za sprawą Pierre'a de Coubertina – francuskiego barona, pomysłodawcy odbudowania ruchu olimpijskiego. Tradycyjnie, kolejne imprezy zaczęto organizować co 4 lata. Igrzyska nie były jednakże już tylko rozgrywką dla sportowców greckich. Do rywalizacji zaproszono wszystkie nacje, skupione wewnątrz nowo powstałego Międzynarodowego Komitetu Olimpijskiego, którego prezesem na długie lata został wybrany właśnie Pierre de Coubertin. </p>

        <p>Wedle jego założeń, sport miał nie tylko kształtować siłę fizyczną, ale miał również stać się przyczynkiem do zaszczepienia pokoju ducha i połączenia wielu narodów w duchu sportowej rywalizacji, czego dowodem stały się olimpijskie koła &ndash; symbol splecionych ze sobą pięciu kontynentów. Dowodem uznania dla tradycji był wybór stolicy Grecji jako pierwszego miasta &ndash; gospodarza nowożytnych Igrzysk.</p>
        <p>Główną areną zmagań został odbudowany wielkim kosztem historyczny Stadion Panateński (Panathinaiko) – obiekt w kształcie półelipsy, będący jedyną tego typu budowlą na świecie, w całości wykonaną z marmuru. Obecnie Panathinaiko jest nie tylko jedną z głównych atrakcji turystycznych Aten. Po kolejnych modernizacjach był m.in. areną zmagań łuczników przy okazji Igrzysk w 2004 r. Jest także symbolicznym miejscem, gdzie kończą się maratony. W 1896 r. zmagania sportowców na tym obiekcie śledziło na żywo ok 80 tysięcy osób. Każdemu, kto chce na własnej skórze poczuć klimat antycznych zmagań, polecam stanąć na podium na środku stadionu i rozejrzeć się po marmurowych trybunach, kryjących tysiące lat historii sportu.
        <p>
        <div class="img">
          <img src="${issue.url}/img/Phelps.JPG" alt="">
          <span><em>Michael Phelps osiągał wielkie sukcesy podczas Igrzysk Olimpijskich</em>
          <br>(Agência Brasil Fotografias cc. 3.0)
          </span>
        </div>
        </p>

<p><strong>Nowe idee</strong></p>

<p>W kolejnych latach po powstaniu nowożytnych Igrzysk, zaczęły kiełkować idee o powiększeniu ruchu olimpijskiego o dodatkowe gałęzie. Wzrastała nie tylko liczba konkurencji w trakcie letnich zmagań. Pojawił się pomysł organizowania zimowego odpowiednika tej rywalizacji. Odbyło się to po raz pierwszy w 1924 roku we francuskim Chamonix, a liczba rozegranych konkurencji początkowo nie była długa. Składały się na nią: narciarstwo klasyczne, łyżwiarstwo szybkie, łyżwiarstwo figurowe, hokej na lodzie, curling i bieg patroli wojskowych, będący odpowiednikiem dzisiejszego biathlonu. </p>





        `).get()},

{ "page": "10", "content": new page(10,`

  <p>Pomysł rozegrania kolejnych zawodów zrodził się w 1948 roku w głowach brytyjskich weteranów II wojny światowej, chcących zorganizować rywalizację dla osób niepełnosprawnych. Ich starania, pod przewodnictwem doktora Ludwika Guttmanna, doprowadziły wkrótce do powstania pierwszych Igrzysk Paraolimpijskich, które miały miejsce w 1960 roku w Rzymie. Z biegiem lat zyskiwały one na znaczeniu, aż w 1988 roku po raz pierwszy w historii zostały rozegrane na tych samych obiektach, co rywalizacja osób zdrowych. </p>

  <p><strong>Olimpijskie ideały współcześnie</strong></p>

  <p>Starożytne Igrzyska, pomimo tego, że niewiele mają wspólnego z obecną rywalizacją, często mylnie nazywaną Olimpiadą – co oznacza 4-letni czas oczekiwania na kolejne zmagania, a nie samą imprezę, dały początek sportowi, który znamy współcześnie. Dzisiejszy kształt olimpijskiej rywalizacji dostosowany jest w dużej mierze do wymagań komercyjnych. Formował się na przestrzeni lat – od momentu ustanowienia nowożytnych Igrzysk pod koniec XIX wieku. Liczba konkurencji z biegiem lat się powiększała, a walka wielu dyscyplin o uzyskanie miana sportu olimpijskiego nadal trwa. Dziś Igrzyska, pomimo zakazu umieszczania reklam na strojach zawodników, są przesiąknięte pieniędzmi i wymaganiami firm, będących sponsorami strategicznymi całych zmagań. Kraje, owładnięte wojną ani myślą zaprzestawać walk dla uczczenia rywalizacji. Wręcz przeciwnie – niedawny najazd wojsk rosyjskich na Ukrainę zbiegł się w czasie z zimowymi Igrzyskami w Soczi. Tak samo, jak przy okazji każdej dużej imprezy, również tutaj realne jest zagrożenie atakiem terrorystycznym. </p>

  <p>Mimo tak wielu czynników, odbierających Igrzyskom Olimpijskim dawny etos i wyjątkowość, są one w dalszym ciągu traktowane jako wydarzenie szczególne w świecie sportu. Żadnej porażki zawodnicy nie przeżywają tak mocno, jak niepowodzenia z pięcioma kołami olimpijskimi w tle, a każdy wyjątek od reguły potwierdza, jak ważna jest to rywalizacja również dla kibiców. Wystarczyło, by Agnieszka Radwańska stwierdziła, że w zasadzie to turnieje Wielkoszlemowe są dla tenisistów ważniejsze, by w całej Polsce rozpętała się burza, a za zawodniczką te pochopne słowa będą się ciągnęły prawdopodobnie do końca kariery. Okazało się, że kibic jest w stanie wybaczyć sportowcowi niemal wszystko, ale nie zlekceważenie ideałów olimpijskich. </p>

  `).get()},


//REST
    { "page": "11", "content": new page(11,`<p>Bałuty to podobno depresyjne i niebezpieczne miejsce. Niebezpieczne dla obcych, swoich się nie rusza. To właśnie tu, w wieku dziewięciu lat wypił pierwsze piwo Igor Sypniewski. <em>"Pamiętam , że od dzieciństwa wszyscy, w tym ja, zamiast oranżady, pili piwo i palili papierosy. Obojętnie czy miałeś 7 lat czy 17".</em> Tak jak jego rówieśnicy kibicował ŁKSowi, do którego stadionu nie miał daleko. Marzeniem każdego dzieciaka jest zagranie w ulubionej drużynie, Igorowi się to udało. Występował w ŁKSie, w którym to usłyszał zdanie, które zmieniło jego życie: <em>"Nie pijesz, nie grasz. Pijesz, może zagrasz"</em>. Potem przeniósł się do miejscowego Orła, aby w 1995 trafić do Ceramiki Opoczno. W drugiej lidze trudno doszukiwać się talentów, ale jednak w tym obecnie dwudziestotysięcznym mieście taki talent się znajdował. Skąd włodarze greckiej Kavali dowiedzieli się o Sypku? Tak się akurat złożyło, że ten zespół trenował Grzegorz Lato. W "Arnogautach", u boku Leszka Pisza, talent Sypka eksplodował. Niestety miejsca w Kavali Igor długo nie zagrzał, bo pojawiła się oferta życia z Panathinaikosu. W "Koniczynkach" zagrał pięćdziesiąt razy w lidze, osiem razy pokonywał bramkarza rywali. Z początku był gwiazdą, ulubieńcem greckiej publiczności. Czczono go jak Zeusa to może za dużo powiedziane, ale Polak mógł poczuć się jak na Olimpie. Hat-tricka wpakował Vangelisowi Koentasowi z Apollonu Smyrnis (5-0, dwa trafienia dorzucił Warzycha). Ale ten mecz nie był jego najlepszym w zielonej koszulce z koniczyną na piersi. 21 listopada 2000 roku na magicznym Old Trafford, przeciwko wielkiemu Manchesterowi United, Igor zakładał siatki Beckhamowi i mijał jak chciał Gary'ego Neville'a. Warto dodać, że rano, tego samego dnia, Sypniewski obudził się na kacu i pił piwo z polskim pracownikiem hotelowym w Manchesterze. <em>"Chłopak przyniósł piwa i został chwilę pogadać. Patrzył zafascynowany i pytał, jak to jest grać w Lidze Mistrzów, co czuję przed występem w Teatrze Marzeń".</em> Otrzymał w odpowiedzi, że <em>"ten cały Beckham, to nie jest wielki gracz"</em>. Po meczu Panathinaikos-Manchester przekonaliśmy się, kto miał rację, mimo, że "Czerwone Diabły" wygrały 3-1. W Lidze Mistrzów Sypniewski może poszczycić się też strzeleniem bramki Davidowi Seamanowi z Arsenalu. Już wtedy miał problemy z alkoholem.</p>

	`,`Jest rok 1974, jeden z najwspanialszych w historii polskiego futbolu. W Łodzi na świat przychodzi Igor Sypniewski, uznawany za polskiego George'a Besta. Wychowany na Bałutach, wśród szarych bloków i ciemnych bram, pierwsze piwo wypił w wieku 9 lat, niedługo potem zapalił pierwszego papierosa.  Gdy się patrzy na takie dziecko, co od razu przychodzi na myśl? To, że ten chłopczyk nic w życiu nie osiągnie. Na szczęście ten chłopczyk miał talent do piłki.`,
  "with_image","Boniek-good, Deyna-better, Sypniewski-the best","Galas","Piłka nożna","bar-sypniewski.jpg",["#Football", "#Sypniewski"],"Public domain").get()},

    { "page": "12", "content": new page(12,`	<p>Zachwycone Sypniewskim kluby zachodniej Europy chciały go mieć za wszelką cenę u siebie. W tym gronie był wymieniany między innymi AC Milan. Jednak z każdym kolejnym sezonem Sypniewski grał coraz słabiej, stąd wypożyczenie do OFI Kreta. Tam również spisywał się kiepsko i zdecydował się na transfer do Polski. Pierwszym zespołem po powrocie do ojczyzny był RKS Radomsko. Tadeusz Dąbrowski, właściciel klubu, miał Igora na pierwszym miejscu listy transferowej. Były zawodnik Panathinaikosu otrzymał nawet Jaguara, a odwdzięczył się zdobywając pięć bramek w pięciu pierwszych meczach ligi. Igor zdołał się odrodzić i zaczęły bić się o niego najlepsze polskie kluby. Ostatecznie wybrał Wisłę Kraków. Przypodobał się kibicom "Białej Gwiazdy" mówiąc, że <em>"Wisła to lepsza drużyna niż Panathinaikos"</em>. Jednak  w Krakowie raził nieskutecznością, zdobył tylko jedną bramkę. Gdy drużynę przejął Henryk Kasperczak, który liczył na umiejętności Igora, ten po prostu zniknął. Nikt nie widział, gdzie jest i kiedy powróci. Wtedy właśnie po raz pierwszy żona Igora poinformowała media o jego problemie z alkoholem, co błyskawicznie poskutkowało rozwiązaniem kontraktu. Pomocną dłoń wyciągnęli do niego Grecy, mimo jego kłopotów. Powrót na Bałkany zakończył się na dwóch występach. Kolejne przenosiny, tym razem do szwedzkiego Halmstad okazał się strzałem w dziesiątkę. O Sypniewskim znowu usłyszały większe kluby. W tym gronie było mierzące w mistrzostwo Malmoe FF. Gdy wydawało się, że kariera Igora po raz kolejny zmartwychwstała, powróciły problemy psychiczne. Kolejny klub Trelleborgs dał mu szansę na odbudowanie się, ale depresja zaczęła się pogłębiać.</p><p>W roku 2005, po 31-letniego Sypniewskiego sięgnął jego ukochany ŁKS. Igor zapewniał, że dojrzał i chce pomóc klubowi, który pozostał w jego sercu. Jak powiedział, tak zrobił, jego bramki pomogły w powrocie do Ekstraklasy. W klubie rozpoczęło się świętowanie awansu, a bohater nagle przestał stawiać się na treningach. Podobna sytuacja jak w Wiśle. <em>"Odchodzę z klubu, bo mam inny pomysł na życie"</em>. Tym pomysłem był trzecioligowy szwedzki Bunkeflo IF. Tam policja zatrzymała go za prowadzenie samochodu po pijaku, a klub rozwiązał z nim kontrakt.</p><p>Skończyła się przygoda Igora Sypniewskiego z futbolem, a zaczęły problemy z prawem. Miał jeszcze szansę na grę w ŁKSie, ale przyszedł na rozmowę o warunkach kontraktu wstawiony. Sezon później, w gronie kiboli ukochanego klubu, na meczu z Lechem Poznań, wziął udział w ataku na kibiców Kolejorza (sprawa z wyrywanie krzesełek, itp.). Nie uszło mu to na sucho. Osadzono go w areszcie, groziła mu kara nawet pięciu lat. Po latach opowiadał, że dołączył się tylko do bójki, wyrwał jedno krzesełko, a samego meczu za bardzo nie pamięta, to z resztą nic dziwnego, bo był nawalony jak Messerschmitt. Przed rozpoczęciem sezonu 2007/08 prezes ŁKS ściągnął Sypka na zgrupowanie drużyny, po raz kolejny wyciągnięto do niego pomocną dłoń i po raz kolejny dały o sobie znać problemy alkoholowe. Trener Wojciech Borecki wyrzucił go z zespołu. Sokół Aleksandrów Łódzki także chciał pomóc byłemu gwiazdorowi Panathinaikosu, ale Igor przestał stawiać się na treningach. Zatrzymała go policja i postawiono mu zarzuty znęcania się nad matką, kierowanie gróźb pod adresem byłej partnerki. Chciał tylko zobaczyć się z córeczką, dostał półtorej roku pozbawienia wolności.</p>
  	<p>Trafił do radomskiego więzienia przy ulicy Wolanowskiej. Aż trudno w to uwierzyć, gwiazdor jednej z najlepszych lig Europy, idol kibiców, w Grecji chyba popularniejszy niż Krzysztof Warzycha. Dwukrotny reprezentant Polski, który w meczu Champions League kręcił jak chciał Davidem Beckhamem (choć to był tylko „zamach”, wtedy zwód najczęściej wykorzystywany przez Igora). W jednym z wywiadów wspominał, że trafił do celi z kibicami Widzewa i ciągle się z nimi "napierdalał", a klawisze podawali mu środki psychotropowe. Był w takim dołku, że nie stawił się nawet na własnej rozprawie o przedterminowe, warunkowe zwolnienie.</p>
  	<p>Teraz Igor Sypniewski jest na wolności. Mieszka w mieszkaniu swojej matki w Łodzi, nie pije. Siedzi w domu, czasami pójdzie po zakupy. W domu się nie przelewa, z gotówki, którą zarobił za granicą, nic nie zostało. Potrzebuje pieniędzy na leki po udarze, który spowodował nieodwracalne zmiany w jego lewej półkuli mózgu. Z przyjaciół, którzy pojawiali się gdy była kasa, pozostali mu tylko matka i ojciec. Teraz walczy nie z procentami, nie z rywalami, ale ze zdrowiem. Poddał się tylko jednemu z nałogów - papierosom, które kariery jednak mu nie zniszczyły. Alkohol i hazard, już dawno poszły w odstawkę.  W październiku 2014 roku ukazała się autobiografia Igora "zaSYPAny. Życie na zakręcie", która może nie uczyniła jego życia łatwiejszym, ale spowodowała, że inni ludzie chętnie ofiarują pomoc byłemu reprezentantowi. Podobno Marek Pięta zaproponował Igorowi, gdy wróci do zdrowia, pracę z młodzieżą w ŁKSie.</p>
  	<p>Igor Sypniewski był wspaniałym piłkarzem, któremu alkohol przeszkodził w zrobieniu wielkiej kariery, choć z drugiej strony który piłkarz po piwie grałby przeciwko Manchesterowi United, jakby to był pierwszy lepszy zespół z ligi greckiej? Chyba porównanie Sypka do George'a Besta jest jak najbardziej na miejscu. Obaj wielcy, obaj mieli świat u stóp, obaj mieli wielki talent, obaj ten talent zmarnowali...</p>`).get()},
    { "page": "13", "content": new page(13,`
      <p><strong>Koniec</strong></p>

      <p>25 luty 1990, skocznia Vikersundbakken w Vikersund. Mistrzostwa Świata w Lotach. Matti Nykänen siedzi na belce, szykuje się do kolejnego skoku w zawodach. Jego forma  w tym sezonie nie mogła go zadowalać, ale teraz walczy o medal wielkiej imprezy. Jeszcze nie wie, że ostatni w swej karierze. Odbija się od belki, kilka chwil później jest już w powietrzu. Szybuje pięknie, starym stylem, którego był królem, idealnie ułożony w powietrzu. Jak to on. Ląduje na 160 metrze. Później okaże się, że ten skok daje mu srebrny medal.</p>

      <p>Jak napisano, był to ostatni krążek wielkiej imprezy w bogatej karierze Fina. Czterokrotny mistrz olimpijski, pięciokrotny mistrz świata, czterokrotny zwycięzca Pucharu Świata, dwukrotny tryumfator Turnieju Czterech Skoczni… Nie było imprezy, na której Nykänen by nie dominował. Rok po srebrze zdobytym w Norwegii, Matti zdecydował się przejść na sportową emeryturę. W wieku zaledwie 27 lat. W skakaniu przeszkadzały mu chore plecy (później zoperowane), sportowe wypalenie, a także niechęć do przejścia na styl V.</p>

      <p>To był moment zwrotny w jego życiu. Moment, w którym sport nie mógł dłużej powstrzymywać tego, co w Finie się kryło. Zresztą już wcześniej bywało z tym różnie, ale zawsze była skocznia, były treningi, były medale do zdobycia, konkursy do wygrania. Teraz tego zabrakło. <em>„Przeszedłem z dobrze mi znanego systemu do fazy niepewności. Przez całe swoje życie robiłem coś zupełnie innego i teraz tego dłużej nie miałem. Świat spoza skoków narciarskich był całkowicie inny od tego, który znałem do tej pory” </em>mówił po latach w swej biografii.</p>

      <p><strong>Początek</strong></p>

      <p>Pierwszy skok oddał podobno w wieku 7 lat. Tak twierdził kiedyś. Niedawno zmienił zdanie i okazało się, że skakać zaczął w wieku lat 12. Pewny jest za to, kiedy zaczął pić – miał wtedy 14 lat i dopiero wchodził w „juniorski” okres swojego życia. Alkohol towarzyszył mu potem przez całą karierę. Doszło do tego, że sezonie 1985/86 zainterweniować musiała fińska federacja. Matti został przez nią zawieszony. Zresztą nie po raz ostatni.</p>

      <p><em>„Widziałem ludzi, którzy z powodu choroby alkoholowej nie mogli biegać, chodzić. Ja chodzę i biegam nawet po czterech piwach. Upijałem się trzema butelkami piwa już jako 14-latek. Na zgrupowaniach działy się takie rzeczy, że jeszcze dziś, gdybym wszystko ujawnił, rozbiłbym kilka szczęśliwych małżeństw” </em>mówił po latach w wywiadzie dla Przeglądu Sportowego.</p>

      `,`
      Każdy ma swoje demony. Demonem Mattiego Nykänena był, jak dla wielu przed nim i po nim, alkohol. A kiedy demon przejmował nad nim władzę, to i sam Matti takim się stawał. On, najlepszy w historii, król skoczni, zwycięzca. Przegrywał ze swoim demonem. Przegrywał sam ze sobą.
      `,
    "with_image", "Walcząc ze sobą - Demony Mattiego Nykanena", "Warzecha", "Skoki Narciarskie", "nykanen.jpg", ["#SkiJumping", "#Nykanen"], "Jakke Nikkarinen / Suomen Moneta - mynewsdesk.com").get()},
    { "page": "14", "content": new page(14,`
      <p>Mniej więcej w tamtym czasie usłyszał też pierwszy wyrok. Wielka gwiazda skoków, jeszcze przed momentem swej największej chwały, ale już człowiek kochany w całej Finlandii, trzykrotny zwycięzca Pucharu Świata… ukradł ze sklepu papierosy i alkohol. Wtedy skończyło się na grzywnie. Ale więzienie Matti miał jeszcze dobrze poznać. Zaczął jednak od poznania smaku wyrzucenia z Turnieju Czterech Skoczni – w kolejnym sezonie zdemolował hotel, w którym mieszkał i organizatorzy imprezy postanowili zareagować.</p>

      <p>Nieco ponad rok później został bohaterem igrzysk w Calgary. Na jego szyi zawisły trzy złote krążki, rodacy szaleli na jego punkcie, a na całym świecie nazwisko Nykänena zaczynało kojarzyć się z najlepszym skoczkiem w historii. Aż do zakończenia kariery, które stało się początkiem zupełnego upadku Fina.</p>

      <p>
      <div class="img">
        <img src="${issue.url}/img/Nykanen3.JPG" alt="">
        <span><em>Znaczek pocztowy wyemitowany po sukcesie Nykänena na igrzyskach w Calgary</em></span>
      </div>
      </p>

      <p>Wybrany w 1989 najlepszym fińskim sportowcem lat 80., po zakończeniu kariery nie ma pieniędzy – te, które wygrał na skoczni, wydał szybko. Sprzedaje więc swoje medale, skupuje je Muzeum Sportu w Helsinkach. To nie wystarcza, prędko traci i te środki do życia. Pomagają mu lokalni biznesmeni, namawiają na karierę muzyczną, która idzie zaskakująco dobrze. Pierwsza płyta Mattiego rozchodzi się w liczbie wystarczającej na jej ozłocenie. Później jest jednak gorzej. Nykänen musi łapać się dorywczych zajęć – po latach napisze w swej biografii, że pracował m.in. jako striptizer czy odbierający telefony na erotycznej linii.</p>

      <br>
      <br>
      <br>
      <br>
      <p><strong>„Dr Jekyll i Mr Hyde”</strong></p>

      <p>Każdy, kto go zna, przyzna, że Matti ma dwa oblicza. <em>„Kiedy jest trzeźwy, to jeden z najmilszych i najprzyjaźniejszych ludzi, jakich poznałem. Pijany, jest agresywny i niebezpieczny”</em> mówił o nim Egon Theiner, współautor biografii Fina.</p>

      <p>Życie Nykänena to ciągłe balansowanie na ostrzu noża. Po jednej jego stronie czai się spokojny, miły człowiek. Po drugiej agresor, zdolny do wszystkiego. Zresztą porównanie to jest nieprzypadkowe. To właśnie od noża zaczynała się większość jego „przygód”. Gdzie się kończyły? Zwykle w więzieniu, którego był częstym gościem.</p>

      <p>W 2003 roku został skazany na cztery miesiące za kratkami, jednak wyrok został zawieszony. Próbował wtedy zaatakować nożem swoją żonę, Mervi Tapolę, która była zresztą jego czwartą wybranką. Cała sprawa skończyła się rozwodem, ale już rok później para wróciła do siebie. Krótko po tym Matti już nie tylko „próbował”, ale też zranił nożem swego przyjaciela, gdy przebywali w domku letniskowym Tapoli. Od dłuższej kary, niż otrzymane 26 miesięcy więzienia, uchronił go sędzia, uznając, że Matti w chwili ataku był pod wpływem alkoholu i nie panował nad sobą. Sądzono go więc nie za próbę zabójstwa, ale za uszkodzenie ciała.</p>

      <p>Wyszedł z więzienia warunkowo, we wrześniu 2005 roku. Niedługo po tym ponownie do niego trafił, na cztery miesiące, kiedy po raz kolejny zaatakował żonę. Znów wyszedł i znów prędko do niego wrócił, gdy rzucił się z nożem na klienta pizzerii, w której akurat przebywał. Pierwotnie skazano go na dwa lata, ale udało mu się wywinąć dwoma miesiącami w więzieniu i pracami społecznymi. Ostateczna kara przyszła w 2009 roku, gdy ponownie zaatakował i zranił nożem swą żonę. Próbował też udusić ją paskiem od szlafroka. Ona sama wniosła do sądu pozew rozwodowy, już piętnasty, który okazał się być ostatnim. Nawet Mervi miała dość.</p>

      <p><strong>Najlepszy</strong></p>

      <p><em>„Adam Małysz i Jens Weissflog osiągnęli bardzo wiele. Gregor Schlierenzauer to też wyjątkowy zawodnik, ale nikt z nich nie osiągał takich wyników jak Nykaenen”</em> mówił jakiś czas temu Walter Hofer, gdy Przegląd Sportowy przeprowadzał głosowanie na skoczka wszechczasów. Nykänen zdystansował w nim rywali, podobnie jak czynił to na skoczni.</p>

      <p>Przez wiele lat Fin był ulubieńcem fanów, człowiekiem, którego rywalizacja z Weissflogiem rozbudzała wyobraźnię każdego kibica. Czterokrotny mistrz olimpijski, najlepszy w historii.</p>

      `).get()},
      { "page": "15", "content": new page(15,`

        <p>
        <div class="img">
          <img src="${issue.url}/img/Nykanen2.JPG" alt="">
          <span><em>Kolekcja medali Nykänena w Muzeum Sportu w Helsinkach</em><br>(Htm (praca własna) [CC BY-SA 3.0])</span>
        </div>
        </p>

        <p>
        Nie miał wyjścia, musiał zostać idolem. Na jego skokach wychowało się następne pokolenie wielkich zawodników. To jego podziwiali Adam Małysz, Andreas Goldberger czy Janne Ahonen, gdy byli nastolatkami. Jego sukcesy chcieli powtórzyć.</p>


        <p>W 1999 roku jego rodacy wybrali go drugim najlepszym fińskim sportowcem XX wieku. Przegrał jedynie z Paavo Nurmim – wielkim biegaczem długodystansowym, dziewięciokrotnym złotym medalistą olimpijskim, zdobywcą złotych krążków na trzech różnych Igrzyskach. Taką porażkę można zaakceptować. Znacznie trudniej zaakceptować porażkę idola w walce z nałogami, a to musieli zrobić fani Nykänena. Choć ostatnio, na myśl o Mattim, mogą się częściej uśmiechać.</p>

        <p><strong>Prosta</strong></p>

        <p>Całkiem niedawno był w życiu Nykänena długi okres bez alkoholu. Kilka lat nie naznaczonych żadnymi wybrykami, o co trudno było kiedykolwiek wcześniej. Na swej drodze spotkał kobietę, dla której przestał pić. Susanna, bo tak ma na imię kolejna wybranka jego serca, miała na niego dobry wpływ. Matti wystąpił w reality show o swoim życiu, bijącym rekordy popularności, występował ze swym zespołem, stworzył własny program o gotowaniu, wydał książkę kucharską. Nie pił trzy lata.</p>

        <p>Później ponownie chwycił za kieliszek, znikając wcześniej bez śladu. Wrócił, tłumaczył, że musiał napić się z kolegami, próbował to wszystko rozsądnie uargumentować. Susanna nie słuchała. Gdy Matti pojawił się w domu, jej już nie było. Postawiła mu jeden prosty warunek – ma przestać pić i zapisać się na terapię. Wtedy wróci.</p>

        <p>Wróciła, a Matti faktycznie ponownie skierował swe życie na dobre tory. Odstawił alkohol – jak na razie skutecznie – znów się rozwija. Marzy o stworzeniu klubu w Finlandii. Jak mówi, trwają rozmowy ze sponsorami, znajdujące się już w zaawansowanej fazie. Wierzy, że jest w stanie pomóc fińskim skokom, które przeżywają kryzys, i to w tym kierunku chce teraz kierować swą przyszłość. Sam twierdzi, że wszystko zawdzięcza partnerce: <em>„Czułem wielką pustkę we mnie przez 20 lat – dopóki nie poznałem Susanny. Jest pierwszą osobą, jaką znam, która jest całkiem szczera, której mogę powiedzieć o swoich uczuciach i obawach. Jest pierwszą osobą, której ufam”</em> mówił. Jest też osobą, która wyprowadziła Mattiego Nykänena na prostą. A to jej największe osiągnięcie.</p>

        <p>Pozostaje zadać sobie pytanie: jak długo Matti Nykänen będzie w stanie się na tej prostej utrzymać? Jego demony nie zginęły, pozostają uśpione. Nigdy nie wiadomo, czy nie obudzą się, by ściągnąć fińskiego mistrza na złą drogę.</p>`).get()},
        { "page": "16", "content": new page(16,`
          <p>Pistorius to południowoafrykański niepełnosprawny biegacz. Urodził się 22 listopada 1986 roku w Johannesburgu. Był uczestnikiem paraolimpiad, na których zdobył 6 złotych medali. Oscar w wyniku wad wrodzonych stracił obie nogi mając 11 miesięcy. Od zawsze interesował się sporem pomimo swojej dużej niepełnosprawności. Uprawiał między innymi rugby, tenis, boks czy zapasy. Jest rekordzistą świata w biegach na dystansie 100 m (10,91 s), 200 m (21,30 s) i 400 m (45,07 s). W 2007 roku jako pierwszy niepełnosprawny biegacz wystąpił ze sprawnymi zawodnikami. Nie chciano go dopuścić do IO w Pekinie, bo naukowcy powiedzieli, że jego protezy dają mu zbyt dużą przewagę nad innymi zawodnikami. Trybunał arbitrażowy przy MKOl w 2008 roku oświadczył, że ''Biegający na protezach Oscar Pistorius może wystartować w igrzyskach olimpijskich w Pekinie''. Po tym werdykcie zawodnik powiedział: ''Popłakałem się. Ten dzień przejdzie do historii jako prawdziwe wyrównanie szans niepełnosprawnych ze zdrowymi''. Jednak w tamtych igrzyskach nie wziął już udziału. W 2012 roku wystąpił na Igrzyskach Olimpijskich biegnąc na 400 m i w sztafecie reprezentacji swojego kraju 4x400 m.
          </p>

          <p>Jego życie zmieniło się 14 lutego 2013 roku. Wtedy właśnie został zatrzymany przez policję pod zarzutem zabójstwa swojej narzeczonej Revvy Steenkamp. Pistorius oświadczył, że wziął kobietę za włamywacza. Na początku faktycznie mogło się tak wydawać, bo w RPA skala przestępczości jest bardzo duża. Wszyscy współczuli Oscarowi. Jednak to zmieniło się, gdy policja przestawiła swoją, inną niż biegacza, wersję wydarzeń tego feralnego wieczoru. Stróże bezpieczeństwa poinformowali, że przed strzałami w domu sprintera toczyła się kłótnia między Pistoriusem a jego dziewczyną. Dodatkowo znaleziono zakrwawiony kij do krykieta. Z ustaleń wynikało, że Oscar pobił nim Revvę zanim zaczął do niej strzelać przez zamknięte drzwi do łazienki. Prokurator w akcie oskarżenia zarzucił zawodnikowi morderstwo z premedytacją, a do tego nielegalne posiadanie broni i amunicji, żądał dla niego kary bezwzględnego dożywocia. Proces rozpoczął się wiosną 2014 roku, a skończył kilka miesięcy później w październiku. Wyrok skazywał Pistoriusa na pięć lat bezwzględnego więzienia plus trzy lata w zawieszeniu za posiadanie broni. Potem sąd przychylił się do wniosku prokuratora i uznał czyn za morderstwo z premedytacją. Wtedy Oscarowi groziłoby nawet 15 lat pozbawiania wolności, tego oczekiwali wszyscy. Ostatecznie, po rozprawie w 2016 roku otrzymał tylko 6 lat więzienia. Podczas ostatniego posiedzenia biegacz próbował się bronić w każdy możliwy sposób. Desperacko próbował wzbudzić współczucie i litość sądu, dlatego zdjął protezy i szedł po sali sądowej bez nich. Chciał pokazać jaki jest bezbronny bez nich i że nie zabiłby z premedytacją własnej dziewczyny.

</p>
          `,`
          Gwiazda lekkoatletyki, mógł wszystko i miał wszystko. Całe życie jeszcze przed nim, kilkanaście, a może kilkadziesiąt tysięcy fanów, morze pieniędzy, dostatnie i luksusowe życie. A jednak został kryminalistą. To historia człowieka, który był symbolem walki o marzenia, a stał się mordercą. O kim mowa? Przestawiam Oscara Pistoriusa.
          `,
        "with_image", "Był idolem, został bandziorem...", "Warchal", "Lekkoatletyka", "pistorius.jpg", ["#Running", "#Pitorius"], "Kastom CC 3.0").get()},
        { "page": "17", "content": new page(17,`
          <p>
          <div class="img">
            <img style="width: 80%" src="${issue.url}/img/pistorius2.JPG" alt="">
            <span><em>Oscar Pistorius na bieżni</em><br>(Elvar Pálsson [CC BY-SA 3.0])</span>
          </div>
          </p>
          <p>Podczas odsiadywania wyroku w więzieniu stało się coś, czego nikt by się nie spodziewał. Sportowiec chciał popełnić samobójstwo. Na początku sierpnia 2016 roku trafił do szpitala w ranami ciętymi na obu nadgarstkach. Kierownictwo zakładu wyjaśniło, że biegacz doznał obrażeń po upadku z łóżka. Trochę mało wiarygodna wersja i nie wszyscy w nią uwierzyli. Informacje z nieoficjalnych źródeł jednoznacznie wskazywały, że była to próba samookaleczenia. Sam zawodnik zaprzecza temu, że próbował popełnić samobójstwo. </p>

<p>W listopadzie 2016 roku Oscar Pistorius został przeniesiony do więzienia z udogodnieniami dla osób niepełnosprawnych. Tłumaczy się to tym, że biegacz ma szansę teraz uczestniczyć w zajęciach rehabilitacyjnych. Warte dodania jest to, że zawodnik sam wywalczył sobie pobyt w takim więzieniu. Przez lata borykał się o to, żeby traktowano go na równi z zawodnikami pełnosprawnymi, a potem prosi o więzienie z udogodnieniami? Czemu znowu chce być osobą potrzebującą specjalnych warunków? Na te pytania niestety nie ma odpowiedzi.</p>

<p>Myślę, że ta historia nie ma jeszcze swojego końca. Według wyroku Pistorius za dobre sprawowanie może wyjść po 3 latach odbytej kary, ale raczej już nigdy nikt nie okaże mu takiego szacunku jaki miał kiedyś. Od 14 lutego 2013 roku stał się mordercą, takim samym jak inni zbrodniarze. Historia Pistoriusa pokazała dobitnie, że na świecie nie ma idealnych osób. Ludzie, którzy często wydają nam się biedni, często wykorzystują naszą naiwność. Każdy człowiek ma uczucia. Każdy człowiek jest zdolny do kochania, ale także do odebrania życia innym. My, jako świadkowie procesu zawodnika, kiedyś zapomnimy, co miało miejsce w te tragiczne walentynki, ale Oscar już zawsze będzie pamiętał, co zrobił. Jego sumienie nie da mu zapomnieć, a wyrzuty sumienia będą go dręczyły przez cały czas.</p>

          `).get()},
{ "page": "18", "content": new page(18,`
            <p>Mowa oczywiście o Artmedii Bratysława, którą w tamtych latach prowadził obecnie już bardzo dobrze znany trener Vladimir Weiss. Struktura i kadra klubu była przez wiele lat systematycznie budowana, dzięki obecności wielkiego inwestora Ivana Kmotrika. Pierwsze efekty zaczęły się pojawiać w sezonie 2003/04, w którym Artmedii udało się zdobyć Puchar Słowacji, w finale pokonując 2:0 FC Steel Trans Licartovce.</p>

<p>Sezon 2004/05 na dobre rozpoczął byt ze stolicy w czołówce rozgrywek ligowych. Kapitalna gra zaowocowała ostatecznym zdobyciem mistrzostwa kraju. Na ten sukces złożyło się wiele czynników, ponieważ Artmedia przegrała zaledwie 4 mecze, będąc przy tym najlepiej punktującą drużyną na własnym stadionie, oraz w meczach wyjazdowych. Liczba straconych bramek na tle całej ligi była najmniejsza, a jeśli chodzi o ogólną zdobycz, to większą ilość zanotował tylko wicemistrz – MSK Żilina. </p>
            <p>Nie byłyby to zapewne tak udane rozgrywki, gdyby w ataku Artmedii nie grał Filip Sebo. Ściągnięty przed sezonem z Interu Bratysława 20-letni utalentowany napastnik zdobył w lidze aż 22 bramki, co było świetnym wyczynem. Niestety jak to w futbolu na niższym poziomie z reguły bywa, po tak udanym roku zainteresowanie zawodnikiem było spore, a konkrety przedstawiła Austria Wiedeń, która pozyskała Sebo za 600 tys. Euro. Weiss połowę otrzymanej kwoty zainwestował w kolejnego młodego snajpera Interu Bratysława Juraja Halenara. </p>
            <p><strong>Jak Oni to zrobili?</strong></p>
<P>Kolejny mistrz Słowacji miał za zadanie zostawić po sobie dobre wrażenie w eliminacjach Ligi Mistrzów, bo i nie sądzę, że było wiele osób poza sztabem i zawodnikami Artmedii, którzy głęboko wierzyli w odniesienie sukcesu. Los w I rundzie eliminacji przypisał im kazachski Kairat Ałmaty i pierwszy mecz między tymi zespołami na wyjeździe przyniósł przytłaczającą porażkę 0:2 i wielkie obawy kibiców przed rewanżem, czy aby ta pierwsza w historii przygoda z walką o Ligę Mistrzów nie skończy się zbyt szybko. </p>

            `,`
            Był rok 2005. Po pięknym meczu finałowym w Stambule, kolejna edycja Ligi Mistrzów przyniosła wielką niespodziankę w postaci klubu ze Słowacji, który w eliminacjach potrafił odprawić wicemistrza Szkocji oraz mistrza Serbii. Na piłkarskie salony zawitał zatem rządny dalszych przygód maleńki klub naszych południowych sąsiadów.
            `,
          "with_image", "FC Petrzalka Academia – Od Ligi Mistrzów do V ligi słowackiej. ", "Hatta", "Piłka nożna", "petrzalka.jpg", ["#Football", "#CL", "#Slovakia"], "").get()},
          { "page": "19", "content": new page(19,`
            <p>

            Nadszedł dzień rewanżu. 20 lipca, stadion „NTC Senec” w pobliskim mieście Senec.Tego wieczoru zawodnicy słowackiej ekipy z wielką motywacją starali się pisać swoją historię, do przerwy odrabiając połowę strat z pierwszego meczu, a krótko po gwizdku rozpoczynającym drugą część trafiając do siatki po raz drugi, zapewniając sobie trochę spokoju w głowach. Regulaminowy czas zmiany wyniku już nie przyniósł i potrzebna była dogrywka, w której dosyć szybko pojawiły się kolejne schody, gdyż Kairat rozpoczął od strzelenia bardzo ważnej wyjazdowej bramki na 1:2. Po chwili Artmedia otrzymała rzut karny, który skutecznie wykorzystała, lecz potrzebna była jeszcze jedna bramka do awansu, a czasu w dogrywce było coraz mniej. Walka do końca jednak się bardzo opłaciła, w doliczonym już czasie dogrywki, gdy nawet i bramkarz przez większość akcji był na połowie rywala jedno z dośrodkowań znalazło w polu karnym dobrze nam znanego Pavola Stano i to właśnie jego strzał dał tę czwartą, dającą awans bramkę! Artmedia rzutem na taśmę awansowała dalej!</p>

<p>Gdy kibice spoglądali na wylosowane pary II rundy eliminacji, zapewne byli nastawieni po prostu na przeżycie fajnego dwumeczu z mocnym rywalem, a był nim wicemistrz Szkocji – Celtic FC.
To, co się jednak wydarzyło w pierwszym meczu na stadionie Slovana Bratysława, przeszło najśmielsze oczekiwania. Artmedia po fenomenalnym meczu rozbiła Celtic z Maciejem Żurawskim w składzie aż 5:0! Szkoci musieli solidnie zlekceważyć rywala, tak uważali nawet i niektórzy piłkarze gospodarzy, będąc w wielkim pozytywnym szoku po meczu. Tam właśnie błysnął ściągnięty nie za grosze Juraj Halenar, który ustrzelił hat-tricka. </p>

<p>Na rewanż Celtic wyszedł już w 200% naładowany, wierząc w swoje umiejętności i w to, że mogą odrobić tę olbrzymią stratę. W bramce już stanął Artur Boruc, a cały zespół nie pozwalał na zbyt wiele Słowakom. Do przerwy jednak udało się strzelić tylko dwie bramki, bez błysku w ataku grał Maciej Żurawski, który został w drugiej połowie zmieniony przy wyniku 3:0 i jego zmiennik Craig Beattie zdołał pod koniec jeszcze dołożyć czwartą bramkę dając nadzieje na końcówkę meczu. Artmedia jednak już nie dała strzelić sobie bramki na 5:0 ipiękny czas w eliminacjach Ligi Mistrzów trwał dalej!
Po takich bataliach w ostatniej fazie drużynę czekał dwumecz z Partizanem Belgrad i były to mecze bez większych emocji, a w obu padły wyniki 0:0, zatem to, kto zagra w fazie grupowej musiały wyłonić rzuty karne. „Jedenastki” lepiej wykonywali zawodnicy Vladimira Weissa i to właśnie oni, jako drugi w historii klub Słowacki po MFK Koszyce wywalczyli awans do Ligi Mistrzów! </p>
<div class="img">
  <img style="width: 100%" src="${issue.url}/img/Petrzalka2.jpg" alt="">
  <span><em>Drużyna zaliczyła udaną przygodę w LM</em><br>(Kieran Lynam [CC BY-SA 3.0])</span>
</div>
<p><strong>Mieli być chłopcami do bicia, wyszło nieco inaczej</strong></p>
<p>W fazie grupowej Artmedia trafiła do bardzo mocnej grupy z Interem Mediolan, FC Porto i Glasgow Rangers, a jako, że ta faza rządzi się już swoimi prawami, były obawy czy uda się z którymś z zespołów zapunktować. Zaczęło się od minimalnej porażki u siebie z Interem 0:1, by później w Portugalii zrobić ponownie coś wartego zapamiętania. Gdy w 39 minucie Porto wyszło na dwubramkowe prowadzenie, na pewno nie sądzili, że coś złego się im w ten wieczór wydarzy. Przed przerwą padła jednak kontaktowa bramka, a w drugiej połowie Artmedia wyciągnęła wynik na 3:2, osiągając historyczne i jedyne zwycięstwo w grupie. W kolejnych spotkaniach zespół Weissa dołożył dwa remisy z Glasgow Rangers, remis z Porto i tylko Inter u siebie potrafił ich rozbić 4:0. Bilans na zakończenie grupy to 6 punktów, 5 zdobytych bramek przy 9 straconych i trzecie miejsce w grupie premiowane awansem do fazy pucharowej Pucharu UEFA. Kapitalna przygoda małego klubu naszych południowych sąsiadów. </p>

<p>Wiosną w 1/16 Pucharu UEFA dwumecz z Levskim Sofia przyniósł porażkę 0:3 w dwumeczu i w taki sposób skończyły się puchary dla Artmedii. Kto by się spodziewał, że dopiero wiosną? Nie oszukujmy się, nikt, nawet osoby związane z klubem. </p>


            `).get()},
            { "page": "20", "content": new page(20,`
              <p>
              <strong>Ugruntowana pozycja w lidze</strong></p>
<p>Kolejne sezony w lidze słowackiej, to utrzymywanie wypracowanego poziomu i podwójne wicemistrzostwo kraju, a w Pucharze UEFA dwukrotne docieranie do ostatniej fazy eliminacji, lecz tam już na fazę grupową nie pozwalały Espanyol, a rok później Panathinaikos.
Na sezon 2007/08 po rocznej przerwie do klubu wrócił Vladimir Weiss i jego umiejętności trenerskie poprowadziły Artmedię do drugiego w historii mistrzostwa, dzięki też ustabilizowaniu formy czołowego już JurajaHalenara, który zdobył w rozgrywkach 16 bramek. W eliminacjach Ligi Mistrzów po wyeliminowaniu maltańskiej Valetty i fińskiego Tampere United, w trzeciej rundzie lepszy okazał się Juventus „degradując” Słowaków do ostatniej fazy eliminacji Pucharu UEFA, gdzie los przypisał Bragę, której niestety nie udało się ich pokonać. </p>

<p>Były to ostatnie miłe chwile w dotychczasowej historii klubu… </p>

<p><strong>„Pikowanie” w dół</strong></p>
<p>Po mistrzowskim sezonie Weiss objął reprezentację Słowacji, lecz największym problemem okazało się odejście z klubu inwestora Ivana Kmotrika, który postanowił wykupić akcje sąsiedniego klubu Slovana Bratysława, by tam budować potęgę ligową. Gdy dopływ finansowy w Artmedii zaczął się kończyć, odchodzili też i czołowi piłkarze z powodu nie otrzymywania pensji, stadion został zamknięty, a klub w sezonie 2008/09 zajął 6 miejsce w lidze,<div style="float:right;width:30px;height:40px"></div> by już w kolejnym dołować w tabeli i zaliczyć spadek do 2. Ligi. Przez dwa lata gry poziom niżej sytuacja była coraz gorsza, czego efektem okazał się spadek do 3. Ligi w 2012 roku. </p>

<p>Grając ekipą mieszaną z młodzieży i z pozostałości po 2. Lidze, Artmedia była nawet na tle trzecioligowców zespołem piłkarsko słabym. Sezon 2012/13 ukończony został na dalekim 11 miejscu, a rok później trzeba było zacząć po prostu wszystko od nowa. </p>

<p>Tak oto w 2014 roku nazwa klubu została zmieniona na FC Petrzalka Akademia i zarząd zgłosił klub na sezon 2014/15 do rozgrywek V ligi, by w ten sposób krok po kroku na dobrych wynikach móc się odbudować. Obecnie grają tam już drugi sezon i są liderem, co może tlić nadzieje na to, że za kilka lat coś dobrego wyniknie z tej odbudowy i taką warto mieć nadzieję. </p>

<p>Stary stadion, na którym niegdyś dawna Artmedia rozgrywała swoje mecze został zrównany z ziemią i w to miejsce zostały postawione hotele. Cała sytuacja klubu pokazuje, że gdy ktoś potrafi dobrze zainwestować pieniądze, to może wszystko fajnie funkcjonować i jest realny sukces, lecz gdy tego zabraknie, nie ma po prostu jak tego utrzymać i z reguły kończy się to upadkiem. Jednak historia w pamięci tych starszych kibiców zostanie, a przeżycia z Ligi Mistrzów po prostu zapomnieć się nie da. Chyba jednak nie powinni żałować tego co się wydarzyło, a jedynie tego, że inwestor nagle postanowił zmienić otoczenie. </p>



              `).get()},
    { "page": "21", "content": new page(21,`
      <p>W telewizji trwa transmisja z Igrzysk Olimpijskich w Sydney, gdzie uśmiechnięta Marion Jones zdobywa właśnie piąty medal w zmaganiach lekkoatletycznych na jednej imprezie. Niewiarygodne. Amerykanka stała się w tym momencie idolką bohatera tej historii.
        <div class="img" style="display:inline-block">
          <img style="width: 100%" src="${issue.url}/img/lance2.jpg" alt="">
          <span><em>Lance okazał się oszustem</em></span>
        </div>Dołączyła do swojego rodaka, który po wyleczeniu raka wygrał najtrudniejszy wyścig kolarski świata. Po obejrzeniu niesamowitych ucieczek Lance’a Armstronga, chłopiec niejednokrotnie,  jadąc rowerem przez pobliskie wioski, wyobrażał sobie, że nie znajduje się wcale na dziurawej drodze kilka kilometrów od domu, ale raczej na premii górskiej w Pirenejach, gdzie lada moment urwie się od peletonu i wygra kolejny etap wyimaginowanego wyścigu.</p>


<p>Młody człowiek naiwnie wierzy, że to, co widzi na ekranie telewizora jest prawdą. Że istnieją jednostki, potrafiące w naturalny sposób, bez oszukiwania odnosić druzgocące zwycięstwa. W kinie John Rambo bez problemu pokonywał kilkudziesięciu przeciwników, więc dlaczego miałby kogoś dziwić widok radosnej Jones, ośmieszającej rywalki w biegach na kilku dystansach i w skoku w dal? Skąd pomysł, że zwykły człowiek nie mógłby odjeżdżać innym kolarzom na każdym etapie Wielkiej Pętli, tak, jak Armstrong? Przecież w Szklanej Pułapce John McClane też robił ze swoimi wrogami, co chciał i nikt nie mógł mu podskoczyć. Niech się wstydzi ten, kto podważa mit niezniszczalnego Lance’a. Ludzie, którzy zarzucają mu nieuczciwość są zwyczajnie zazdrośni. To jest zbyt piękna historia, by miała okazać się farsą.</p>

                `,`
                Jest rok 2000. Niewielkie miasto w południowo-wschodniej Polsce. Młody chłopak dorasta w bloku, położonym tuż obok pełnowymiarowego boiska piłkarskiego, otoczonego bieżnią lekkoatletyczną. Wokół niezliczona ilość tras rowerowych. Dziecko nie widzi sensu posiadania komputera – przecież rodzice mają sprawną maszynę do pisania. Warunki są idealne do uprawiania sportu i zabawy od rana do wieczora.
                `,
              "with_image", "Ratunek dla sportu", "Iwanski", "Sport", "lance.jpg", ["#doping", "#CiemnaStronaSportu"], "Wikipedia user - Rabbit [CC 3.0]").get()},
    { "page": "22", "content": new page(22,`
      <p style="text-align:center">*****</p>
<p>Jest rok 2016. Warszawa. Młody mężczyzna przeprowadził się tutaj kilka lat temu. W wolnym czasie wychodzi pobiegać po mieście – obowiązkowo z telefonem, żeby potem pochwalić się swoim wynikiem znajomym w internecie. Do pracy stara się dojeżdżać rowerem – dla zdrowotności i dla zaoszczędzenia czasu, który straciłby stojąc w korkach. Żyje obecnie w ciągłym stresie i w pośpiechu.</p>
<p>Mężczyzna już nic sobie nie wyobraża, jadąc rowerem. Podczas joggingu z nikim się nie ściga, bardziej martwi się tym, czy ktoś zwróci uwagę na jego nowe legginsy. Tegoroczny Tour de France oglądał jednym okiem, raczej z przyzwyczajenia. Już dawno ten wyścig przestał go interesować. Podczas Igrzysk Olimpijskich w Rio bardziej interesował się tym, czy faktycznie brazylijskie komary będą roznosić wirus Zika, aniżeli rywalizacją lekkoatletów.</p>
<div style="float:right;width:30px;height:40px"></div>
<p>Kilkanaście lat temu naiwnie uwierzył, że to, co widzi na ekranie telewizora jest prawdą, po czym jego ideały legły w gruzach. Ludzie, na których się wzorował, okazali się oszustami, a ich spektakularne działania miały tyle samo wspólnego z prawdą, co popisy Johna Rambo i Johna McClane’a. </p>
<p>Na zaufanie pracuje się niekiedy przez całe życie, a stracić je można w mgnieniu oka. Przez skandale dopingowe, sport staje raz po raz przed ciężką próbą. Ludziom coraz trudniej jest uwierzyć, że za kolejnymi fenomenalnymi wynikami stoi jedynie natura i ciężki trening. A przecież to jest istotą sportu – pokonywanie słabości własnego ciała. W czasach, gdy coraz poważniejszym zagrożeniem staje się również doping technologiczny oraz hazard i komercja, potrzeba wielkiej wiary i zaangażowania uczciwych ludzi, by sportowa rywalizacja pozostała zgodna z ideałami Pierre’a de Coubertin’a. Sport potrzebuje ratunku przed zbyt dużymi pieniędzmi i zbyt zaawansowaną farmakologią. Lecz czy na ratunek nie jest aby za późno?</p>

                `).get()},
                { "page": "23", "content": new fullpage(23,"Pan świata o którym nikt już nie chce-pamiętać","Piłka nożna","panswiata.jpg",["#FIFA", "#Football"],"fot: NL-HaNA, ANEFO CC 3.0").get()},
                { "page": "24", "content": new fulltext(24,`
                  <p>Joao Havelange, który rządził FIFA w latach 1974-1998, jako pierwszy zrozumiał siłę drzemiącą w futbolu. Dokładniej zaś w jego ogromnym potencjale biznesowym. W końcu do zarządzania pieniędzmi się urodził. Był synem bogatego Belga, który zdecydował się wyemigrować do Brazylii. Wyjeżdżając planował przepłynąć Atlantyk na pokładzie Titanica. Na rejs się jednak spóźnił, a przeciwnicy Havelange’a mówili później, że dzień tego spóźnienia należałoby nazwać jednym z najczarniejszych wydarzeń w historii futbolu. </p>
<p><strong>Urodzony biznesmen</strong></p>

<p>Jedyny nieeuropejski prezydent FIFA na świat przyszedł w 1916 roku w Rio de Janeiro. Zdobył wykształcenie prawnicze, które pozwoliło mu na sprawne zarządzanie rodzinnym majątkiem. Działał również na wielu innych polach, a największe benefity, jak sam przyznawał, przyniosło mu prezesowanie w firmie zajmującej się przewozem osób. </p>

<p>Podczas gdy ludzie znajdujący się na szczytach piłkarskiej władzy wciąż przywiązani byli do światłych idei sportu amatorskiego – których trzymali się zresztą zbyt kurczowo – Havelange widział nieotwarte drzwi dla pieniądza, co było według niego zwykłym marnotrawstwem. </p>

<p><strong>Na przekór butnej Europie</strong></p>

<p>Miał też pomysł jak do władzy dojść, bo i w tej kwestii potrafił sięgać wzrokiem dalej, niż zaślepieni swoją dominacją Europejczycy. Dostrzegł potencjał w dotychczas zaniedbanych Afryce i Azji, odwiedzając w czasie kampanii 86 krajów z tych regionów. Potencjał liczony oczywiście w ilości głosów, zyskanych wieloma obietnicami, a tylko spotęgowany poparciem dotychczasowego szefa, Stanleya Rouse’a, dla apartheidu. </p>

<p>Havelange miał jednak czym przekonywać, bo namawiał do swojej kandydatury jako prezes Brazylijskiej Konfederacji Sportu (mającej w tamtym czasie pod swymi skrzydłami, wśród wielu sportów, także piłkę nożną). Reprezentacja „Canarinhos” zachwycała wtedy cały świat. W czasie jego kadencji (1958-1973) zdobyła trzy mistrzostwa świata, a na boisku grała niewiarygodnie. Można powiedzieć, że Havelange miał po prostu szczęście trafić na takie czasy, ale i on miał swój wkład w sukcesy. Jego niezwykły zmysł organizacyjny sprawił, że cała kadra była przygotowana do kolejnych imprez jak żadna przed nimi. </p>
<p><strong>Przeobrażenie FIFY</strong></p>
<p>Jednocześnie realizował swoje pomysły. Otworzył świat piłki nożnej dla kobiet i rozwinął piłkę młodzieżową – dzięki niemu odbyły się pierwsze żeńskie mistrzostwa świata czy odpowiadające turnieje w kategoriach U20 i U17. Nie zapominał przy tym o swoich obietnicach, dbając o niemalejące poparcie. Zaczął gwarantować miejsca w najlepszej szesnastce reprezentacjom z różnych kontynentów (zarówno jeśli chodziło o drużyny, jak i sędziów – w obydwu przypadkach kompletnie nieprzygotowanych do rywalizacji na najwyższym poziomie). Ostatecznie zaś jego polityka doprowadziła do zwiększenia liczby uczestników finałów mistrzostw świata do 32 w 2002 roku.</p>
<p><strong>Pan świata i półbóg</strong></p>
<p>Nic dziwnego, że w Brazylii, gdzie piłka nożna traktowana jest jak religia, uzyskał status półboga. Jako ojciec sukcesów reprezentacji i jako szef FIFY, czyli jeden z najbardziej wpływowych ludzi świata („Spotkałem, mogę powiedzieć bez żadnej przesady, wszystkich prezydentów, królów, królowe i premierów na świecie, a do tego Jego Świątobliwość, papieża” – chwalił się chętnie) miał ku temu wszelkie papiery. </p>
<p>Ponadto w przeszłości reprezentował swój kraj na Igrzyskach Olimpijskich. Mieszkając w Brazylii nie mógł nie przesiąknąć miłością do piłki nożnej, ale jego ojciec uważał, że dla syna lepsze będzie realizowanie się w pływaniu. W 1936 r. Havelange w tej dyscyplinie reprezentował kraj na Igrzyskach Olimpijskich, jadąc tam jako gwiazda Ameryki Łacińskiej. Na Igrzyska pojechał również w 1952 r., jako członek drużyny waterpolo.</p>

                  `, `Niezaprzeczalnie był wizjonerem. Zrewolucjonizował piłkę nożną, czyniąc ją sprawą globalną i wprowadzając w nową erę, której kolejne lata liczone są w miliardach dolarów, nie jednostkach czasu. Inspirował do zmian także innych, przede wszystkim Międzynarodowy Komitet Olimpijski. Stał się twórcą sportu, jaki dzisiaj znamy. Sportu w całości – także jego ciemnej, korupcyjnej strony.
               `, "Stachnik").get()},
                 { "page": "25", "content": new page(25,`
                   <p><strong>Podejrzane działania</strong></p>
<p>Jeszcze w 2007 roku, kiedy świat dowiadywał się coraz więcej o tym, że rządzenie FIFĄ traktował przede wszystkim jako własny interes, jego imieniem został nazwany stadion zbudowany z okazji Igrzysk Panamerykańskich w Rio de Janeiro. Dwa lata później był jedną z głównych twarzy kandydatury tego miasta do Igrzysk Olimpijskich 2016, dzięki swoim utrzymującym się wpływom. Brazylijczycy w oskarżenia nie do końca wierzyli, uważali je za przejaw zawiści.</p>
<p>Już w czasie 24–letniej kadencji narobił sobie wielu wrogów, którzy mieli mu co zarzucać. Z jednej strony bronił federacje piłkarskie przed jakąkolwiek polityczną ingerencją, z drugiej sam bez skrępowania flirtował z dyktaturami. Czy to z tą w jego własnym kraju, czy z argentyńską juntą wojskową, której powierzył organizację mundialu w 1978 roku. Nie było żadną tajemnicą, że do krajów trzeciego futbolowego świata płynęły nieprzerwanie pieniądze, które nie wszędzie inwestowane były w rozwój piłkarskiej infrastruktury. Organizował mundial w USA, chociaż nie odbywały się tam żadne rozgrywki krajowe, ani stanowe (ruszyły dopiero po turnieju) – widział w tym po prostu kolejny interes. </p>
<p><strong>Wynalezienie sponsoringu</strong></p>
<p>To Havelange wprowadził do futbolu potężnych sponsorów. Ich pieniądze były rzecz jasna dla piłki nożnej wyrzutnią rakietową, która wystrzeliła ją na orbitę nie zatrzymującej się do dziś komercjalizacji. Patrząc z dzisiejszej perspektywy, kiedy niszczy ona cały romantyzm sportu, ciężko ocenić nam taki ruch pozytywnie. Jednak dzięki temu piłka nożna, a za nią inne dyscypliny, zaczęła się wzbijać coraz wyżej i pędzić w kierunku niebotycznych osiągnięć. Jednocześnie rozprzestrzeniła się na cały świat, rzeczywiście stając się łącznikiem pomiędzy ludźmi wszystkich ras i kultur. Problem polegał na tym, że Havelange drzwi dla pieniądza nie tyle uchylił, ile otworzył je na oścież, wystawiając przy tym swoją własną kieszeń.</p>
<p>Podpisał kontrakt z Adidasem, którego szef Horst Dassler (syn założyciela, Adi Dasslera) otrzymał właściwie nieograniczoną swobodę w działaniach marketingowych. Brazylijczyk odpowiadał za organizację, Niemiec za przepływ pieniądza, stając się twórcą sponsoringu. Dassler stworzył podwaliny działającego do dzisiaj systemu. Podstawowym założeniem było między innymi, że sponsorem mogły zostawać tylko wielkie korporacje – jedna na każdy sektor działalności. </p>
<p><strong>Jak dać pieniądzom wpłynąć do kieszeni</strong></p>
<p>Najważniejszym jego pomysłem było jednak stworzenie ISL. Firmy powstałej, aby pośredniczyć w handlu prawami marketingowymi, która w rzeczywistości służyła jako machina do wypłacania pieniędzy działaczom, w tym oczywiście Havelange’owi. Kiedy jednak Horst Dassler zmarł, firma zbankrutowała, a na jaw zaczęły wychodzić kolejne nadużycia.</p>
<p>Swoje podejrzenia snuł już David Yallop, dziennikarz śledczy, w książce wydanej w 1999 roku („How They Stole the Game”, polskie wydanie: „Kto wykiwał kibiców?”). Przez lata udawało się jednak sprawę zamiatać pod dywan i nie ujawniać nazwisk. To dlatego Havelange mógł być twarzą wspomnianej kandydatury Rio i jako honorowy szef FIFA oraz członek MKOl z najdłuższym stażem, nieustannie panoszyć się na salonach. </p>
<p><strong>Odejście w zapomnienie</strong>
<p>W 2012 roku nie mógł już jednak dłużej udawać niewinnego, bo został oficjalnie oskarżony przez szwajcarskiego prokuratora. Wraz ze swoim zięciem, Ricardo Teixeirą, którego uczynił szefem brazylijskiej federacji, został oskarżony o wzięcie w łapówkach 41 milionów dolarów. Nawet jego najzagorzalsi obrońcy zamilkli. </p>
<p>Za namową namaszczonego przez siebie następcy, Seppa Blattera, zrezygnował z tytułu honorowego prezydenta FIFA. Później wycofał się z członkostwa w MKOl, podając za powód przyczyny zdrowotne, a tak naprawdę uciekając, zanim zostałby wyrzucony. </p>
<p>Sam musiał usunąć się w cień, a była to dla niego kara najokrutniejsza z możliwych. Zawsze chętnie otaczał się pochlebcami (niektórzy posunęli się tak daleko, że w 1998 roku dostał nawet nominację do pokojowej Nagrody Nobla), a nagle opuścili go wszyscy. </p>
<p>Gdy umierał w sierpniu 2016 roku, mając 100 lat, na stadionie jego imienia odbywały się Igrzyska Olimpijskie. Nazwisko Havelange’a z nazwy stadionu najchętniej jednak by wymazano. Próba oficjalnej zmiany się nie udała, ale relacjonując wydarzenia z tego obiektu właściwie nikt nie przywoływał patronującej mu persony. Tak z pana świata Havelange stał się człowiekiem, o którym nikt nie chce pamiętać. </p>


                   `).get()},
                   { "page": "26", "content": new page(26,`<p>„Jednostrzałowiec” oznacza w slangu młodzieżowym coś szybkiego i jednorazowego i mamy z nim do czynienia w wielu dziedzinach życia, m.in. w piłce nożnej, gdzie tym pojęciem można określić niespodziewany i jednorazowy triumf danego klubu (np. ostatnie zwycięstwo Leicester City w Premier League w sezonie 2015/2016), ale także w muzyce. Powiedzmy sobie szczerze - czy włoskie trio Eiffel 65 jest znane z jakiegokolwiek innego utworu, niż Blue (Da Ba Dee), a łotewską grupę Brainstorm kojarzy z czego innego, niż piosenka „Maybe”. Pojęcie to oznacza także osobę, którą można upokorzyć za pomocą jednego uderzenia, ale raczej w tym przypadku informacja ta jest zwyczajnie zbędna.
Z jednostrzałowcami możemy się spotkać także w skokach narciarskich, gdyż, tak jak wspomniałem we wstępie, w trakcie istnienia Pucharu Świata i różnych innych czempionatów, mamy do czynienia w wieloma pojedynczymi sukcesami, które nie okazują się bodźcem do dalszych lepszych skoków, a są kwintesencją kariery i ściśle przypisują się do danego skoczka. Chociaż takich przypadków było naprawdę wiele, trzeba wybrać te, które najbardziej zaszokowały opinię publiczną i udowodniły, jak bardzo skoki narciarskie są nieprzewidywalne.</p>


<p>„W końcu gdy każdy przypomina sobie Turniej Czterech Skoczni, który odbył się na przełomie 2013 i 2014 roku, zdaje sobie sprawę, że triumfatorem tamtego turnieju był.<strong>Thomas Diethart.</strong> Zawodnik klubu UVB Hinzenbach-Oberoesterreich otrzymał swoją pierwszą szansę w Pucharze Świata na początku 2011 roku, kiedy wziął udział w konkursie w Innsbrucku. Po tym czasie słuch po zawodniku zaginął, jednak niemal 2,5 roku po tamtym wydarzeniu, został odkurzony przez trenera Alexandra Pointnera i wrócił do Pucharu Świata pod koniec 2013 roku. W dwóch konkursach w Engelbergu zajął bardzo wysokie 4. i 6. miejsce, dlatego szkoleniowiec kadry austriackiej postanowił zaryzykować i postawił na młodziana podczas słynnego Turnieju Czterech Skoczni. W Oberstdorfie uplasował się na 3. pozycji ex aequo z Peterem Prevcem, stając po raz pierwszy na podium zawodów PŚ. W kolejnych zawodach, w noworocznym konkursie w Ga-Pa, odniósł swoje pierwsze zwycięstwo w tym cyklu, pozostawiając w pokonanym polu takich zawodników, jak Thomas Morgenstern czy Simon Ammann. Po tych zawodach zajął pozycję lidera całego cyklu i nie oddał go do końca turnieju, triumfując przy okazji w ostatnim konkursie w Bischofshofen. Zawodnik w tamtym okresie zyskał sympatię wielu, głównie dzięki żywiołowemu dopingowi jego rodziny, a także przez jego nietypową maskotkę – różową świnkę. .</p>



               	`, `Obecny sezon w skokach narciarskich jest jednym z najbardziej wyrównanych w całej historii, jednak nie sposób nie dojść do wniosku, że dyscyplina ta jest pełna wielu niespodzianek i sensacyjnych zwycięstw. Co oznacza pojęcie „jednostrzałowiec” i w jakich okolicznościach możemy się z nim spotkać?
`,
                 "with_image","Sensacje w skokach, czyli zwyczajni jednostrzałowcy","Porebski","Skoki narciarskie","skoki.jpg",["#SkiJumping"],"Clément Bucco-Lechat CC 3.0").get()},

                  { "page": "27", "content": new page(27,`
                    <p>Skoczek utrzymał bardzo dobrą formę do końca sezonu, bowiem na Igrzyskach Olimpijskich w Soczi zajął 4. miejsce w konkursie na małej skoczni, a na koniec w Pucharze Świata zajął bardzo wysoką, ósmą lokatę w klasyfikacji generalnej. Niestety, z miesiąca na miesiąc forma zawodnika przepadała, przez co skoczek obecnie pałęta się w odmętach FIS Cupu, czyli cyklu zawodów skoków najniższej rangi wśród, rozgrywek organizowanych przez Międzynarodową Federację Narciarską. W klasyfikacji generalnej tychże zawodów, Diethart zajmuje 14. pozycję, gdyż w 6 zawodach udało mu się zdobyć 193 punktyZawodnik w tamtym okresie zyskał sympatię wielu, głównie dzięki żywiołowemu dopingowi jego rodziny, a także przez jego nietypową maskotkę &ndash; różową świnkę. Skoczek utrzymał bardzo dobrą formę do końca sezonu, bowiem na Igrzyskach Olimpijskich w Soczi zajął 4. miejsce w konkursie na małej skoczni, a na koniec w Pucharze Świata zajął bardzo wysoką, ósmą lokatę w klasyfikacji generalnej. Niestety, z miesiąca na miesiąc forma zawodnika przepadała, przez co skoczek obecnie pałęta się w odmętach FIS Cupu, czyli cyklu zawodów skoków najniższej rangi wśród, rozgrywek organizowanych przez Międzynarodową Federację Narciarską. W klasyfikacji generalnej tychże zawodów, Diethart zajmuje 14. pozycję, gdyż w 6 zawodach udało mu się zdobyć 193 punkty.</p>
                     <p>„Na tamtym turnieju furorę zrobił także Fin <strong>Anssi Koivuranta</strong>. Były wybitny kombinator norweski niespodziewanie dla wszystkich (pewnie nawet dla samego siebie) wygrał w trzecim konkursie z cyklu TCS w Innsbrucku, głównie dlatego, że drugiej serii po prostu nie rozegrano z powodu problemów z pogodą. Fin powinien sezon 2013/2014 zapamiętać zdecydowanie najlepiej, bowiem wtedy aż sześciokrotnie łapał się do pierwszej dziesiątki w zawodach PŚ, a na Igrzyskach Olimpijskich w Soczi zajął 11. i 12. miejsce. Następny sezon dla Koivuranty był już zdecydowanie gorszy, przez co były zdobywca Pucharu Świata w kombinacji norweskiej postanowił w maju 2015 roku zawiesić swoją karierę. Pół roku zawodnik definitywnie rzucił narty w kąt i dalej pozostaje ostatnim Finem, któremu udało się zwyciężyć w zawodach Pucharu Świata.</p>


                     <p>„Wspominany już kilkukrotnie sezon 2013/2014 rozpoczął się sensacyjnie dla większości kibiców najbardziej znanego zimowego sportu. Otóż w pierwszych zawodach cyklu w niemieckim Klingenthal triumfował. <strong>Krzysztof Biegun.</strong> Obecnie wydaje się to abstrakcją, bowiem zawodnik obecnie ma ogromne problemy z załapaniem się do pierwszych serii konkursowych w Pucharze Kontynentalnym. Młody polski skoczek w pierwszym konkursie Pucharu Świata wykorzystał słabe warunki, przy których skakali faworyci, niespodziewanie wygrał konkurs i objął prowadzenie w klasyfikacji generalnej Pucharu Świata. Oczywiście koszulki lidera nie utrzymał za długo i później tylko czterokrotnie załapał się do drugiej serii konkursowej (Kuusamo, Oberstdorf, Wisła i Zakopane). Ostatecznie pozwoliło mu tu zająć 35 miejsce w generalce, które oczywiście było i najprawdopodobniej będzie najwyższym w historii jego występów. </p>


                     <p>„Kolejnym sensacyjnym triumfatorem w zawodach PŚ był Japończyk <strong>Fumihisa Yumoto</strong>, który w 2008 roku wygrał konkurs na skoczni we włoskim Pragelato. Głównym powodem jego zwycięstwa było odwołanie drugiej serii, jednak nie zmienia to faktu, że skoczek z Kraju Kwitnącej Wiśni jako jedyny w zawodach przekroczył punkt konstrukcyjny włoskiego obiektu. Yumoto z sezonu na sezon spisywał się jednak coraz gorzej, ale udało mu się jeszcze dwukrotnie trafić na podium. Mam jednak na myśli Letni Puchar Świata i dwa drugie miejscach na zawodach w Hakubie. Skoczek wobec niezadowalających wyników, w kwietniu 2014 roku postanowił zakończyć karierę.</p>


                     <p>„Jednym z najbardziej sensacyjnych, ale i niezasłużonych zwycięzców konkursu w Pucharze Świata jest Słoweniec <strong>Rok Urbanc</strong>. Przez niektórych skoczek określany był nie tylko jako „jednostrzałowiec”, ale także jako zwykły „nielot”, bowiem od 2003 do 2007 roku w czasie narciarskich występów zdołał zdobyć zaledwie 23 punkty. 20 stycznia 2007 roku doszło jednak do przełomu. W pierwszej serii zawodów na Wielkiej Krokwi z Zakopanem oddał skok na odległość 136 metrów, co dało mu prowadzenie, które utrzymał do samego końca. Głównym tego powodem był dramatyczny w skutkach upadek Czecha Jana Mazocha, który spowodował natychmiastowe przerwanie konkursu. To spowodowało, że Słoweniec odniósł w karierze pierwsze i jedyne zwycięstwo w zawodach Pucharu Świata. Wychowanek klubu SK Triglav Kranj w swojej karierze jeszcze tylko raz zakwalifikował się do czołowej „30” w zawodach najbardziej prestiżowego cyklu zawodów w skokach. A gdzie udało mu się zdobyć punkty? A jakże, w Zakopanem. W 2009 roku w konkursie na Wielkiej Krokwi zajął 22. pozycję.</p>



                     `).get()},

                     { "page": "28", "content": new page(28,`


                        <p>„Z sensacjami sporego kalibru mieliśmy do czynienia także na Mistrzostwach Świata Juniorów, gdzie wiele dobrych wyników nie znalazło potwierdzenia w seniorskiej karierze danego skoczka. Jednym z takich zawodników jest Estończyk <strong>Kaarel Nurmsalu</strong>, który jednak wcale nie musiał zostać tytułowym „jednostrzałowcem”. W 2011 roku, w ojczystym Otepaa, Estończyk zdobył brązowy medal, ustępując Stefanowi Kraftowi i.. Vladimirowi Zografskiemu, który dalej próbuje swoich sił w Pucharze Świata, ale zawodnikowi z Bułgarii udaje się ostatnio tylko co najwyżej przejść serię kwalifikacyjną. Wracając do Nurmsalu, to ten został jedynym Estończykiem w historii skoków, który trafił do pierwszej dziesiątki w Pucharze Świata. W marcu 2014 roku zajął bardzo wysokie 6. miejsce w zawodach w Oslo/Holmenkollen. Niestety, bardzo obiecującą karierę przerwał brak pieniędzy, które umożliwiałyby wyjazdy na konkursy i zgrupowania. Choć niedawno mówiło się o ewentualnym powrocie 25-latka do Pucharu Świata, urodzony w Tamsalu zawodnik zdecydowanie uciął te plotki, mimo znakomitej postawy w mistrzostwach kraju. Skoczek pojawił się na tej imprezie gościnnie po blisko 2,5 latach przerwy i osiągnął nad drugim Martti Nomme aż.. 25 punktów przewagi. Obecnie jednak Nurmsalu zajął się opieką nad synkiem, a także studiowaniem na Uniwersytecie Technicznym w Tallinie.</p>

                        <p>Najsmutniejszym przykładem skoczka jednego sukcesu jest niestety Polak, który obecnie żyje w zapomnieniu i z dala fleszy reflektorów. <strong>Mateusz Rutkowski</strong> w 2004 roku sięgnął w pięknym stylu po Mistrzostwo Świata Juniorów, pokonując Thomasa Morgensterna, który wówczas był zdecydowanym faworytem tamtego turnieju. W norweskim Strynie wówczas nie było na niego mocnych, jednak w późniejszym czasie skoczek zaczął się wyróżniać nie tylko na narciarskich obiektach, ale także na suto zakrapianych imprezach. Zawodnik zaczął mieć coraz większe problemy z alkoholem, nadwagą i dyscypliną, przez co został wykluczony z polskiej kadry i stracił możliwość na pokazania swoich niewątpliwych umiejętności. Ostatecznie Rutkowski porzucił skoki, wiedząc, że nie uda mu się wyżyć z uprawiania tego sportu i postanowił podjąć inną pracę. Obecnie wychowanek zespołu LKS-u Poroniec Poronin wiedzie spokojne życie u boku żony i synka, pracując także w firmie swojego kolegi – Grzegorza Zapotocznego. Choć były zawodnik nie ukrywa, że jego kariera mogła potoczyć się zdecydowanie inaczej, największy żal ma o to, że nikt nie pokazał mu, co robi źle i nie wyprowadził go na dobrą drogę.</p>

                        `).get()},

                     { "page": "29", "content": new page(29,`
                       <p>Liczbę występów w kadrze nie można wytłumaczyć umiejętnościami piłkarskimi, fenomen Podolskiego musi pochodzić z innych źródeł. Moment, w którym to Podolski stał się reprezentantem swojego kraju jest tutaj kluczowy. Lata 2004-2006, które w Niemczech zostały dość krytycznie odebrane — brak wyjścia z grupy na Mistrzostwach Europy 2004 (wtedy już Podolski znajdował się w drużynie) oraz zarzut braku jakiejkolwiek jakości w kadrze. </p>


<p><strong>Młodzieniec z potężną lewą nogą</strong></p>

<p>Nasz bohater wtedy był i to bez jakiejkolwiek ironii uznawany za jeden z największych snajperskich talentów na naszym kontynencie i w rewolucji Klinsmanna, która zorientowana była głównie na młodych zawodnikach, Podolski dostał rolę jako kluczowy zawodnik odbudowy reprezentacji Niemiec. Patrząc z perspektywy marketingu — posunięcie trafne, uśmiechający się Podolski przyciągał masy kibiców na stadiony, jak i sponsorów. Zwłaszcza marka Adidas, uczyniła go „twarzą” Mistrzostw Świata 2006 w Niemczech. Od tego czasu „produkt” Podolski pod tym właśnie względem działa do dzisiaj bez zarzutów. Do dzisiaj naród niemiecki czeka, by Podolski (nawet w wieku 31 lat) „wybuchł” na boisku, bo w końcu jest naszym ulubieńcem...do dzisiejszego dnia, jest jedynie już teraz niestety jednym z wielu. Łukasz Podolski jest więc doskonałym przykładem zawodnika, który od ponad 10 lat absurdalnie odbiega w odwołaniu do marki „Podolski",
a umiejętnościami i nikomu to tak naprawdę nie przeszkadza. Innymi słowami cała prawda nie leży na boisku, a poza nim. Wybór najlepiej zapowiadającego się zawodnika Mistrzostw Świata 2006 może się wydawać jako przepchnięta przez sponsorów. Wtedy jego bezpośrednimi konkurentami byli: Lionel Messi i Cristiano Ronaldo, patrząc czysto piłkarsko, to z perspektywy czasu aż trochę wstyd! </p>
 `, `
Z całą pewnością zdanie nowożytnej historii niemieckiej piłki, które wymaga wyjaśnienia jest: Lukas Podolski rozegrał dla niemieckiej reprezentacji 129 meczów. Mowa tutaj o piłkarzu, którego ostatni wart wspomnienia występ w kadrze odbył się 10 lat temu (Mistrzostwa Świata 2006 - ⅛ finału przeciwko Szwecji) i dokładnie od tego czasu wędruje z jednej na drugą ławkę rezerwowych,
na pocieszenie jeszcze w klubach z uznaną marką na świecie (FC Bayern Monachium, Arsenal, Inter Mediolan, Galatasaray). W swoim „macierzystym” klubie 1. FC Köln rozegrał 5 sezonów, spadając
aż 3 razy do drugiej Bundesligi, odkąd Podolski w żadnym stopniu nie jest łączony z drużyną
z 1. FC Köln, klub rozwija się i notuje co sezon lepsze wyniki.
Gdyby z ostatnich 10 lat miała powstać jakaś historia o największym rozczarowaniu, w którym to wyjątkowy talent nigdy nie rozwinął skrzydeł, to historia Lukasa Podolskiego najbardziej się do tego nadaje. Pytanie dalej jest otwarte: Skąd aż 129 meczów?
  `,
                   "with_image","Lukas Podolski — utracony talent","Pilny","Piłka Nożna","podolski.jpg",["#Podolski", "#Germany"],"Steindy CC 3.0").get()},

                   { "page": "30", "content": new page(30,`
                     <p><strong>Styl niezmieniony, nierozwinięty…</strong></p>


<p>Co ciekawe, w minionych czterech do sześciu lat, stale poszerzała się przepaść między sławą
a piłkarskimi umiejętnościami piłkarza. Specyficzna fascynacja kibiców konfrontująca się między blaskiem fleszy a byciem piłkarzem można określić jako kult Podolskiego. W Kolonii, Londynie, Milanie czy w Stambule, w żadnych z tych miejsc nie był pozyskiwany jako kluczowe wzmocnienie zespołu, a bardziej jako zawodnik uwielbiany przez kibiców. Jak już Podolski trafił do bramki, zazwyczaj swoją piekielnie mocną lewą nogą, to cały świat ma się cieszyć z nim. Ok, ale czy to wystarczy? Kiedyś dotrze to do kolegów z zespołu, kibiców i do trenerów i postawi się kreskę &mdash; koniec. </p>

<p>Lata 2004-2006, to okres, gdy Podolski był na topie, wpada jednak w oko, że potem możemy zauważyć systematyczny regres, który jest też powiązany z taktyczną rewolucją w piłce, która szczególnie powiązana jest z nazwiskami jak Guardiola i Klopp. Od 2006 roku piłkarski świat przeżywa czasy, gdzie taktyka nabrała innego znaczenia, zostały wprowadzone innowacyjne schematy taktyczne, za którymi zawodnik Podolski albo nie chciał, albo nie umiał nadążyć. </p>


                     <p>Jego styl gry w przeciągu tych wszystkich lat niezbyt się zmienił czy rozwinął. Głównie polegał on na tym, co trzeba też pochwalić, bo opanował to do perfekcji, że balansem ciała stworzył sobie 2-3 metry wolnego miejsca, by przełożyć sobie piłkę na lewą nogę i oddać strzał, czy podać do kolegi z zespołu. Jeszcze w latach 1996 - 2006 Podolski swoimi umiejętnościami byłby gwiazdą światowego formatu, jednak jego taktyczna stagnacja powoduje teraz: 10 lat później do tego, że trenerzy dają mu kredyt zaufania w formie wyjścia w podstawowej „11” w pierwszych 3-4 meczach, do czasu aż zauważą,
   że swoją grą nic nie wnosi do drużyny, po czym jest wprowadzany jako rezerwowy - niezbędny do tworzenia atmosfery w szatni, ale mało przydatny na boisku.
   Podobną sytuację możemy zauważyć w reprezentacji pod wodzą Joachima Löwa, na Mistrzostwach Świata w Brazylii, gdzie pełni bardziej rolę jako „zawodnik do spraw medialnych” (portale społecznościowe), oczywiście z takiej roli wywiązał się wzorowo. Na boisku natomiast spędził jedynie 53 minuty, w meczu z USA był w podstawowym składzie, lecz na boisku rozczarował
   i w przerwie został zmieniony. </p>
   <p><strong>
   Urodzony 10 lat za późno</strong></p>


   <p>By na boisku istniał jako wielki zawodnik, jako gwiazda piłkarskiego świata, Podolski prawdopodobnie przyszedł na świat o 10 lat za późno. Z drugiej jednak strony mechanizmy marketingu, które od około 2004 roku dzięki Beckhamowi nabrały takiego rozpędu, że faktyczne umiejętności, albo ich brak mogły się skutecznie obronić. Z dynamiki, jaką nabrał marketing w piłce nożnej, Podolski jak nikt inny czerpał niebywałe korzyści.</p>
   <p>Przyszedł  jednak kiedyś taki moment,  który zagrozi Podolskiemu, takim momentem były Mistrzostwa Europy 2016 we Francji. Oczywiście czynnik „atmosfera w drużynie” jest bardzo ważny podczas takich imprez  i taki Podolski wywiązał się z tej roli jak nikt inny, ale gdy na powołania czekają młodsi, zdolniejsi zawodnicy, to rolę do „robienia” atmosfery w drużynie może objąć ktoś inny, ktoś, kto nie zabiera tak cennego miejsca w 23-osobowej kadrze. </p>

   <p>Jako uczestnik Euro 2016 wydaje mi się, że Lukas Podolski ostatecznie został z kolegi z zespołu zdegradowany do maskotki zespołu. Nie liczy się to, co zrobisz na boisku, a bardziej by „uczestniczyć” w imprezie, zadbać o idealną atmosferę, uśmiechać się na konferencjach prasowych, czy „twittować”. Gdy nadejdzie czas zakończenia kariery, Podolski pewnie zorganizuje wielki mecz, oczywiście z odpowiednią otoczką medialną i niech tak będzie, niech wszyscy zapamiętają Podolskiego jako dziecko piłkarskiego marketingu.</p>

                      `).get()},
                        { "page": "31", "content": new fullpage(31,"Stracone nadzieje drużyny z Dagestanu","Piłka nożna","anzy.jpg",["#FIFA", "#Football"],"fot: Соккер.Ру, CC 3.0").get()},
                        { "page": "32", "content": new fulltext(32, `

<p>Zespół z Machaczkały przez dłuższy okres swojego istnienia balansował na granicy pierwszej i drugiej ligi rosyjskiej, a okres jego największych sukcesów przypadał na początek dwudziestego pierwszego wieku. Wówczas drużyna z Dagestanu osiągnęła bardzo wysokie, czwarte miejsce w lidze, a także dotarła do finału krajowego pucharu. Po pewnym czasie Anży opuściło najwyższą klasę rozgrywkową i nie potrafiło do niej awansować przez blisko 7 lat. W 2009 roku dla klubu ponownie otworzyły się bramy raju, jednak tym razem przygoda w Premier Lidze miała być dłuższa i zdecydowanie obfitsza w sukcesy. Pomóc miała w tym jedna osoba, która pojawiła się w Machaczkale niczym rycerz na białym koniu i jak się później okazało, wniosła do klubu jedynie chwilowe szczęście. Sulejman Kerimow, posiadająca nie tylko imię jak słynny turecki sułtan, ale także ogromną ilość gotówki (świadczyło o tym miejsce w rankingu Forbesa), przejął akcje w klubie na początku 2011 roku i zapowiedział stworzenie wielkiej piłkarskiej potęgi nad Morzem Kaspijskim. </p>

<p>Biznesmen, posiadający pakiet kontrolny przedsiębiorstwa Urałkalij, potentata w wydobyciu potasu i produkcji nawozu potasowego, bez większego skrępowania zaczął wydawać ogromne ilości pieniędzy i nie ograniczał się w żadnych kosztach. Swoimi dobrociami kusił wielu znanych na całym świecie piłkarzy i trenerów, bowiem stać go było na każdego – nadrzędną kwestią było tylko pokazanie odpowiednich sum piłkarzowi i przekonanie go do dumnego noszenia koszulki „Dzikajej Dywizji”. </p>


<p>Do klubu od razu trafiali całkiem niezłej klasy zawodnicy, na czele z Brazylijczykami – Jucileim, Diego Tardellim i Roberto Carlosem. Transfery takich piłkarzy przyjęto w Machaczkale z umiarkowanym zadowoleniem, jednak Kerimow tak naprawdę dopiero się rozkręcał. Po transferze jednego z najlepszych obcokrajowców w historii ligi belgijskiej – Mbarka Boussoufy, przyszła pora na Jurija Żyrkowa, Balazsa Dzsudzsaka i, przede wszystkim, Kameruńczyka Samuela Eto'o. Napastnik przyszedł do Rosji jako czołowy snajper włoskiego Interu, więc udowodnił tym samym, że ambicje sportowe w jego przypadku schodzą na dalszy plan i liczą się dla niego duże ilości pieniędzy. Wszystkich jednak zmroziła informacja o pensji, jaką Eto'o miał otrzymywać w Dagestanie – za rok gry zawodnik miał otrzymać 20 milionów euro, co wówczas czyniło go jednym z najlepiej zarabiających zawodników świata. Choć obecnie taka pensja, płacona głównie przez chińskie kluby, nie robi aż takiego wrażenia, wtedy wprawiała wszystkich w niemałe zdumienie i oburzenie. Ale przecież „kto bogatemu zabroni”.</p>


<p>Po zapewnieniu sobie usług Brazylijczyka Williana (na którego zakusy miała m.in. FC Barcelona) i znakomitego fachowca – Holendra Guusa Hiddinka, z miejsca miały przyjść znakomite wyniki sportowe w lidze, które później miały dać możliwość podbicia europejskich pucharów. Klub zajął w lidze trzecie miejsce i dostał szansę gry w Lidze Europejskiej – wielu byłoby zadowolonych z takiego obrotu spraw, ale nie Kerimow, którego ambicje były zdecydowanie większe i sięgały znacznie wyżej. Pomimo dwukrotnego awansu do 1/8 finału Europa League i całkiem niezłego poczynania na ligowych boiskach, wielu dalej nie traktowało projektu w Machaczkale poważnie i wieściło jego szybki koniec.</p>


<p>Anży dalej kupowało niezliczone ilości dobrych zawodników, jednak gdy przyszedł początek sezonu 2013/2014, Kerimow postanowił zakręcić kurek z pieniędzmi i zmniejszyć budżet klubu o blisko 100 milionów euro. Być może decyzja ta nie była wyłącznie spowodowana średnimi wynikami sportowymi, a.. przekrętami finansowymi, których biznesmen miał się dopuścić. Dowodem na to był międzynarodowy list gończy wydany przez Interpol, głównie na wniosek białoruskich władz. </p>


<p>Kolos na glinianych nogach powoli upadał, a suto opłacane gwiazdy postanowiły czym prędzej opuścić powoli dryfujący okręt. Oczywiście biznesmen, sponsorujący Anży, nie zamierzał stracić wydanych wcześniej pieniędzy i odpłacił z kwitkiem wielu potencjalnych kupców zawodników za promocyjną cenę. Kerimow na pomnażaniu pieniędzy znał się w końcu jak mało kto, więc na 14 sprzedanych zawodnikach zyskał aż 134 miliony euro i zapewnił on dalsze funkcjonowanie klubu na nieco innych zasadach. Biznesmen nie zważał na to, czy kupiec jest z tej samej ligi i rywalizuje z jego klubem o czołowe ligowe miejsca – jeżeli działacze danej drużyny zaproponują odpowiednią cenę za jakiegoś piłkarza, może go sprzedać bez większych problemów.</p>





                          `,`Ostatnie miesiące udowadniają, jak ogromną siłę ma pieniądz. Ogromne sumy wydawane przez chińskie kluby wydają się irracjonalne i bezsensowne, jednak mało kto pamięta, że kilka lat temu podobne możliwości miał pewien klub z Rosji. Anży Machaczkała miało stać się światową potęgą, jednak po osiągnięciu kilku mniejszej wagi sukcesów, całkowicie spuścił z tonu i osiadł na futbolowej mieliźnie. Co było tego powodem?

                  `, "Porebski").get()},
                  { "page": "33", "content": new page(33, `


<p>Kominy płacowe zostały obcięte, a drużyna została właściwie bez żadnych, godnych uwagi zawodników. Od tamtego momentu, zespół Anży miał zostać oparty na zawodnikach z regionu – okazało się jednak, że piłkarze ci są jednak dość wątpliwej jakości, przez co wspomniany wcześniej sezon 2013/2014 zakończył się zwyczajną katastrofą. Prowadzona już przez Gadży Gadzyjewa drużyna, zdołała wygrać zaledwie 3 spotkania ligowe i z hukiem spadła z najwyższej klasy rozgrywkowej. </p>


<p>Mimo tego, że banicja w drugiej lidze trwała zaledwie rok, a po szybkim awansie drużyna zdołała się utrzymać w Premier Lidze bez większych problemów, sytuacja finansowa w Anży dalej pozostawiała bardzo wiele do życzenia i nie dawała możliwości przeprowadzenia transferowego eldorado. Klub jednak potrafił zaopatrzyć się w kilku ciekawych zagranicznych zawodników, jak Gabriel Obertan, Ivo Ilicević, czy Iwan Majewskij, który przed transferem do Rosji był bardzo mocnym ogniwem bydgoskiego Zawiszy. Piłkarze ci jednak długo nie zagrzeją miejsca w Machaczkale, ponieważ właściciel klubu zapowiedział kolejne cięcia budżetowe i redukcje miejsc pracy. Wobec tego swoją posadę może stracić obecny trener Anży – Pavel Vrba, a także wszyscy czołowi zawodnicy drużyny. Choć obecnie dagestański zespół plasuje w drugiej połowie tabeli i ma on dosyć bezpieczną przewagę na strefę spadkową, jego los w razie kolejnych czystek wydaje się być przesądzony. </p>


<p>Trochę smutne, że tak szumnie zapowiadany projekt zakończył się zwykłym fiaskiem i musiał zadowolić pojedynczymi sukcesami małej wagi. Czemu drużynie Anży nie udało się wzbić na wyższy poziom? Być może właścicielowi zabrakło cierpliwości i wiedzy na temat tworzenia dobrej drużyny piłkarskiej. Gdyby do składu drużyny, którą przejął w 2011 roku, dokładał stopniowo po dwóch-trzech zawodników dużo wyższej jakości od pozostałych, by sukcesy mogły przyjść z czasem, a nie natychmiastowo. Ponadto Kerimow przekonał się, że niełatwo jest stworzyć w piłce coś z niczego, a potężne pieniądze nie zawsze są gwarantem wygranej.</p>





                    `,`Ostatnie miesiące udowadniają, jak ogromną siłę ma pieniądz. Ogromne sumy wydawane przez chińskie kluby wydają się irracjonalne i bezsensowne, jednak mało kto pamięta, że kilka lat temu podobne możliwości miał pewien klub z Rosji. Anży Machaczkała miało stać się światową potęgą, jednak po osiągnięciu kilku mniejszej wagi sukcesów, całkowicie spuścił z tonu i osiadł na futbolowej mieliźnie. Co było tego powodem?

            `).get()},*/
  ]
