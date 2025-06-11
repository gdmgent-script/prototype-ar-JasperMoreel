const quiz = [
//vragen van het spel
    {
        question: "Waarom zijn panda's in gevaar?",
        answers: [
            "Omdat mensen op ze jagen",
            "Omdat hun bamboebos wordt gekapt",
            "Omdat het te warm wordt",
            "Omdat er veel roofdieren zijn"
        ],
        correct: 1,
        explanation: "Wist je dat? Panda's eten bijna alleen bamboe. Als het bamboebos verdwijnt, hebben ze geen eten meer!"
    },
    {
        question: "Hoeveel noordelijke witte neushoorns leven er nog in het wild?",
        answers: [
            "Geen één",
            "Twee",
            "Vijftig",
            "Duizend"
        ],
        correct: 0,
        explanation: "Wist je dat? Er zijn nog maar twee noordelijke witte neushoorns over, en die leven niet meer in het wild!"
    },
    {
        question: "Wat is een dierenpad (wildlife-corridor)?",
        answers: [
            "Een plek waar dieren gevangen worden",
            "Een groot park voor dieren",
            "Een veilige route tussen natuurgebieden voor dieren",
            "Een dierentuin"
        ],
        correct: 2,
        explanation: "Wist je dat? Een dierenpad helpt dieren veilig van het ene bos naar het andere te lopen, zonder gevaar van auto's of mensen."
    },
    {
        question: "Waardoor verdwijnen de meeste dieren?",
        answers: [
            "Omdat hun leefgebied verdwijnt",
            "Omdat mensen op ze jagen",
            "Omdat er veel roofdieren zijn",
            "Omdat het weer verandert"
        ],
        correct: 0,
        explanation: "Wist je dat? Als bossen of natuur verdwijnen, hebben dieren geen plek meer om te wonen en eten te zoeken."
    },
    {
        question: "Welk dier is met uitsterven bedreigd?",
        answers: [
            "Wilde zwijnen",
            "Javaanse neushoorn",
            "Sumatraanse tijger",
            "Grijze wolf"
        ],
        correct: 1,
        explanation: "Wist je dat? De Javaanse neushoorn is één van de zeldzaamste dieren ter wereld. Er zijn er nog maar heel weinig!"
    },
    {
        question: "Welk dier heeft last van klimaatverandering?",
        answers: [
            "Javaanse neushoorn",
            "Panda",
            "Koraal en dieren die daar leven",
            "Struisvogel"
        ],
        correct: 2,
        explanation: "Wist je dat? Koraalriffen zijn heel gevoelig voor warm water. Als het te warm wordt, sterft het koraal en verdwijnen veel vissen."
    },
    {
        question: "Wat betekent 'verwildering'?",
        answers: [
            "Dieren en planten terugbrengen in de natuur",
            "Dieren leren overleven",
            "Een dierentuin bouwen",
            "Een nieuw park maken"
        ],
        correct: 0,
        explanation: "Wist je dat? Verwildering betekent dat dieren weer in het wild mogen leven, zoals ze vroeger deden."
    },
    {
        question: "Waar leven de meeste wilde katten?",
        answers: [
            "In de bergen",
            "In koude gebieden",
            "In het regenwoud",
            "Op graslanden en savannes"
        ],
        correct: 3,
        explanation: "Wist je dat? Wilde katten zoals de cheeta en leeuw leven graag op open graslanden waar ze goed kunnen jagen."
    },
    {
        question: "Waar vind je krokodillen meestal?",
        answers: [
            "In de woestijn",
            "In rivieren en moerassen",
            "Op de savanne",
            "In de zee"
        ],
        correct: 1,
        explanation: "Wist je dat? Krokodillen houden van water en liggen vaak stil in rivieren of moerassen te wachten op prooi."
    },
    {
        question: "Waar woont de specht het liefst?",
        answers: [
            "In koude gebieden",
            "In de stad",
            "In het bos",
            "Op de savanne"
        ],
        correct: 2,
        explanation: "Wist je dat? Spechten hakken met hun snavel in bomen om insecten te zoeken. Daarom wonen ze graag in het bos."
    },
    {
        question: "Waar slapen vleermuizen het liefst?",
        answers: [
            "In grotten of bomen",
            "In de stad",
            "In de woestijn",
            "In de bergen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vleermuizen hangen graag ondersteboven in grotten of holle bomen om te slapen."
    },
    {
        question: "Waar leven wilde zwanen meestal?",
        answers: [
            "In het bos",
            "Bij meren en plassen",
            "In koude gebieden",
            "Op de savanne"
        ],
        correct: 1,
        explanation: "Wist je dat? Wilde zwanen zwemmen graag op meren en zoeken daar hun eten."
    },
    {
        question: "Waar leven rendieren vooral?",
        answers: [
            "In het bos",
            "In loofbossen",
            "In de bergen",
            "Op de toendra"
        ],
        correct: 3,
        explanation: "Wist je dat? Rendieren leven in koude gebieden met weinig bomen, zoals de toendra in het noorden."
    },
    {
        question: "Waar woont een landschildpad meestal?",
        answers: [
            "In het regenwoud",
            "Op de steppe",
            "In de woestijn",
            "In het moeras"
        ],
        correct: 2,
        explanation: "Wist je dat? Veel landschildpadden leven in droge gebieden zoals de woestijn."
    },
    {
        question: "Waar leeft de koningspython in het wild?",
        answers: [
            "In het regenwoud",
            "Op de savanne",
            "In de bergen",
            "In het moeras"
        ],
        correct: 1,
        explanation: "Wist je dat? De koningspython leeft graag in graslanden en verstopt zich in holen."
    },
    {
        question: "Waar leeft de dromedaris het vaakst?",
        answers: [
            "In de woestijn",
            "Op de savanne",
            "Op de steppe",
            "In het bos"
        ],
        correct: 0,
        explanation: "Wist je dat? Dromedarissen zijn echte woestijndieren en kunnen lang zonder water."
    },
    {
        question: "Waar leeft het luipaard meestal?",
        answers: [
            "In het regenwoud",
            "Op de savanne",
            "In de woestijn",
            "In de bergen"
        ],
        correct: 1,
        explanation: "Wist je dat? Luipaarden zijn goede klimmers en leven vaak op de savanne, maar soms ook in het bos."
    },
    {
        question: "Waarom leven veel arenden in de bergen?",
        answers: [
            "Omdat het daar warm is",
            "Omdat ze daar goed kunnen vliegen",
            "Omdat ze daar op marmotten jagen",
            "Omdat ze niet van bossen houden"
        ],
        correct: 2,
        explanation: "Wist je dat? Arenden hebben scherpe ogen en kunnen vanaf een bergtop goed naar prooi zoeken."
    },
    {
        question: "Waarom zijn moerassen fijn voor kikkers?",
        answers: [
            "Omdat ze van droge grond houden",
            "Omdat er geen vijanden zijn",
            "Omdat ze er goed kunnen springen",
            "Omdat ze water nodig hebben om eitjes te leggen"
        ],
        correct: 3,
        explanation: "Wist je dat? Kikkers leggen hun eitjes in het water. De kleine kikkervisjes groeien daar op."
    },
    {
        question: "Hoe blijven wolven warm in koude gebieden?",
        answers: [
            "Ze eten alleen vis",
            "Ze gaan naar de stad",
            "Ze leven samen in een groep",
            "Ze verstoppen zich onder de sneeuw"
        ],
        correct: 2,
        explanation: "Wist je dat? Wolven leven in een roedel. Zo kunnen ze samen jagen en elkaar warm houden."
    },
    {
        question: "Waarom heeft een giraf zo'n lange nek?",
        answers: [
            "Om roofdieren weg te jagen",
            "Om over hoog gras te kijken",
            "Om blaadjes uit hoge bomen te eten",
            "Om uit plassen te drinken"
        ],
        correct: 2,
        explanation: "Wist je dat? Giraffen eten blaadjes die zo hoog hangen dat andere dieren er niet bij kunnen."
    },
    {
        question: "Wat doet een bruine beer in de winter?",
        answers: [
            "Hij slaapt in een hol",
            "Hij blijft wakker en vangt vis",
            "Hij reist naar warme landen",
            "Hij klimt in bomen"
        ],
        correct: 0,
        explanation: "Wist je dat? Beren houden een winterslaap om energie te sparen als het koud is en er weinig eten is."
    },
    {
        question: "Waarom vliegen veel vogels in de herfst naar het zuiden?",
        answers: [
            "Omdat het daar veiliger is",
            "Omdat er meer eten is",
            "Omdat ze daar kunnen broeden",
            "Omdat ze niet van sneeuw houden"
        ],
        correct: 1,
        explanation: "Wist je dat? In het zuiden is het warmer en vinden vogels makkelijker eten in de winter."
    },
    {
        question: "Wat eet een ijsbeer het liefst?",
        answers: [
            "Bessen",
            "Vissen",
            "Zeehonden",
            "Vogels"
        ],
        correct: 2,
        explanation: "Wist je dat? IJsberen jagen vooral op zeehonden op het ijs."
    },
    {
        question: "Waarom leven flamingo’s vaak in grote groepen?",
        answers: [
            "Voor bescherming",
            "Omdat ze sociaal zijn",
            "Omdat ze samen eten zoeken",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? Flamingo’s zijn graag samen. Zo zijn ze veiliger en vinden ze makkelijker eten."
    },
    {
        question: "Waar woont een otter het liefst?",
        answers: [
            "In droge bossen",
            "In de bergen",
            "Bij rivieren en meren",
            "In de woestijn"
        ],
        correct: 2,
        explanation: "Wist je dat? Otters houden van schoon water en bouwen hun huisje aan de oever."
    },
    {
        question: "Waarom heeft een kameel bulten?",
        answers: [
            "Om water te bewaren",
            "Om vet te bewaren",
            "Om zich te beschermen tegen de zon",
            "Om zich te verstoppen"
        ],
        correct: 1,
        explanation: "Wist je dat? In de bulten van een kameel zit vet. Daar kan hij lang op leven als er weinig eten is."
    },
    {
        question: "Wat is typisch voor dieren in de woestijn?",
        answers: [
            "Ze zijn overdag actief",
            "Ze hebben een dikke vacht",
            "Ze kunnen lang zonder water",
            "Ze eten alleen planten"
        ],
        correct: 2,
        explanation: "Wist je dat? Veel woestijndieren kunnen dagen zonder water en zijn vaak 's nachts wakker."
    },
    {
        question: "Waarom heeft een poolvos een witte vacht in de winter?",
        answers: [
            "Om warm te blijven",
            "Om niet op te vallen in de sneeuw",
            "Omdat hij ouder wordt",
            "Omdat hij geen vijanden heeft"
        ],
        correct: 1,
        explanation: "Wist je dat? De witte vacht van de poolvos zorgt ervoor dat hij niet opvalt in de sneeuw."
    },
    {
        question: "Wat eet een kolibrie vooral?",
        answers: [
            "Insecten",
            "Zaden",
            "Nectar uit bloemen",
            "Bessen"
        ],
        correct: 2,
        explanation: "Wist je dat? Kolibries drinken nectar uit bloemen met hun lange snavel."
    },
    {
        question: "Waarom leven veel koraalvissen in koraalriffen?",
        answers: [
            "Omdat er veel schuilplaatsen zijn",
            "Omdat er veel eten is",
            "Omdat ze daar kunnen paren",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? Koraalriffen zijn als een drukke stad voor vissen: er is eten, schuilplek en plek om jongen te krijgen."
    },            
    {
        question: "Wat is het belangrijkste voedsel van een zebra?",
        answers: [
            "Gras",
            "Bladeren",
            "Insecten",
            "Vruchten"
        ],
        correct: 0,
        explanation: "Wist je dat? Zebra’s eten vooral gras en grazen samen met andere dieren op de savanne."
    },
    {
        question: "Waarom hebben sommige vogels een scherpe snavel?",
        answers: [
            "Om insecten te vangen",
            "Om te zwemmen",
            "Om te vliegen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vogels met een scherpe snavel kunnen makkelijk insecten uit boomschors of de grond halen."
    },
    {
        question: "Waar woont een gorilla?",
        answers: [
            "In het regenwoud",
            "In de woestijn",
            "In de bergen",
            "Op de savanne"
        ],
        correct: 0,
        explanation: "Wist je dat? Gorilla’s leven in de dichte regenwouden van Afrika en eten vooral planten."
    },
    {
        question: "Waarom hebben sommige dieren schubben?",
        answers: [
            "Voor bescherming",
            "Om te vliegen",
            "Om te springen",
            "Om te zingen"
        ],
        correct: 0,
        explanation: "Wist je dat? Schubben beschermen vissen en reptielen tegen verwondingen en uitdroging."
    },
    {
        question: "Wat eet een papegaai graag?",
        answers: [
            "Zaden en noten",
            "Vlees",
            "Insecten",
            "Gras"
        ],
        correct: 0,
        explanation: "Wist je dat? Papegaaien hebben een sterke snavel om harde zaden en noten te kraken."
    },
    {
        question: "Waarom hebben sommige dieren een dikke vacht?",
        answers: [
            "Om warm te blijven",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Een dikke vacht beschermt dieren zoals beren en vossen tegen de kou."
    },
    {
        question: "Wat eet een egel het liefst?",
        answers: [
            "Bessen",
            "Insecten en wormen",
            "Gras",
            "Bladeren"
        ],
        correct: 1,
        explanation: "Wist je dat? Egels eten vooral insecten, wormen en soms slakken."
    },
    {
        question: "Waarom zijn sommige dieren 's nachts wakker?",
        answers: [
            "Omdat het dan koeler is",
            "Omdat ze dan beter kunnen zien",
            "Omdat ze dan kunnen vliegen",
            "Omdat ze dan kunnen zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Veel nachtdieren vermijden de hitte van de dag en hebben goede ogen voor het donker."
    },
    {
        question: "Waar leeft een ijsbeer?",
        answers: [
            "Op de savanne",
            "In de poolgebieden",
            "In de bergen",
            "In het regenwoud"
        ],
        correct: 1,
        explanation: "Wist je dat? IJsberen leven op het ijs van de Noordpool en jagen daar op zeehonden."
    },
    {
        question: "Waarom hebben sommige vogels een felgekleurde borst?",
        answers: [
            "Om partners aan te trekken",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Felle kleuren helpen vogels om een partner te vinden tijdens het broedseizoen."
    },
    {
        question: "Wat eet een giraf soms naast bladeren?",
        answers: [
            "Schors",
            "Gras",
            "Insecten",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Giraffen eten soms ook schors en vruchten als er weinig bladeren zijn."
    },
    {
        question: "Waarom hebben sommige dieren een lange nek?",
        answers: [
            "Om bij hoog voedsel te komen",
            "Om te zwemmen",
            "Om te vliegen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dieren zoals giraffen kunnen met hun lange nek bladeren eten die andere dieren niet kunnen bereiken."
    },
    {
        question: "Wat eet een kikker het liefst?",
        answers: [
            "Bladeren",
            "Bessen",
            "Insecten",
            "Gras"
        ],
        correct: 2,
        explanation: "Wist je dat? Kikkers eten vooral insecten, spinnen en andere kleine dieren."
    },
    {
        question: "Waarom leven sommige dieren in grote groepen?",
        answers: [
            "Voor bescherming",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? In groepen zijn dieren veiliger voor roofdieren en kunnen ze samen voedsel zoeken."
    },
    {
        question: "Waar woont een pinguïn?",
        answers: [
            "In de woestijn",
            "Op de savanne",
            "In de poolgebieden",
            "In de bergen"
        ],
        correct: 2,
        explanation: "Wist je dat? Pinguïns leven vooral op de Zuidpool en op koude eilanden rond Antarctica."
    },
    {
        question: "Waarom hebben sommige vogels een harde snavel?",
        answers: [
            "Om noten te kraken",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Een harde snavel helpt vogels zoals vinken om harde zaden en noten open te breken."
    },
    {
        question: "Wat eet een mus vooral?",
        answers: [
            "Insecten",
            "Zaden",
            "Bessen",
            "Gras"
        ],
        correct: 1,
        explanation: "Wist je dat? Mussen eten vooral zaden, maar in het voorjaar ook veel insecten voor hun jongen."
    },
    {
        question: "Waarom hebben sommige dieren een dikke staart?",
        answers: [
            "Voor balans",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dikke staarten helpen dieren zoals eekhoorns om hun evenwicht te bewaren en warm te blijven."
    },
    {
        question: "Wat eet een das het liefst?",
        answers: [
            "Bessen",
            "Insecten en wormen",
            "Bladeren",
            "Vlees"
        ],
        correct: 1,
        explanation: "Wist je dat? Dassen eten vooral insecten, wormen en soms kleine zoogdieren."
    },
    {
        question: "Waarom hebben sommige vogels een kromme snavel?",
        answers: [
            "Om zaden te kraken",
            "Om nectar te drinken",
            "Om vlees te scheuren",
            "Om te graven"
        ],
        correct: 2,
        explanation: "Wist je dat? Roofvogels zoals arenden hebben een kromme snavel om vlees van hun prooi te scheuren."
    },
    {
        question: "Wat is het belangrijkste voedsel van een stekelvarken?",
        answers: [
            "Schors en wortels",
            "Insecten",
            "Vlees",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Stekelvarkens eten vooral schors, wortels en soms bladeren."
    },
    {
        question: "Waarom hebben sommige vogels een gebogen snavel?",
        answers: [
            "Om nectar uit bloemen te halen",
            "Om noten te kraken",
            "Om vlees te scheuren",
            "Om te zwemmen"
        ],
        correct: 1,
        explanation: "Wist je dat? Papegaaien gebruiken hun sterke, gebogen snavel om harde noten te kraken."
    },
    {
        question: "Waar leeft een sneeuwuil?",
        answers: [
            "In het regenwoud",
            "Op de toendra",
            "Op de savanne",
            "In de bergen"
        ],
        correct: 1,
        explanation: "Wist je dat? Sneeuwuilen leven vooral op de toendra, waar ze goed gecamoufleerd zijn in de sneeuw."
    },
    {
        question: "Waarom leven sommige dieren in holen?",
        answers: [
            "Voor bescherming tegen vijanden",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te jagen"
        ],
        correct: 0,
        explanation: "Wist je dat? Holen bieden bescherming tegen roofdieren en tegen kou of hitte."
    },
    {
        question: "Wat eet een ree vooral?",
        answers: [
            "Gras",
            "Bladeren, knoppen en jonge scheuten",
            "Insecten",
            "Vlees"
        ],
        correct: 1,
        explanation: "Wist je dat? Reeën eten vooral bladeren, jonge scheuten en knoppen van struiken en bomen."
    },
    {
        question: "Waarom hebben sommige vissen scherpe tanden?",
        answers: [
            "Om prooien te vangen",
            "Om te zwemmen",
            "Om te graven",
            "Om te vliegen"
        ],
        correct: 0,
        explanation: "Wist je dat? Roofvissen zoals snoeken hebben scherpe tanden om hun prooi stevig vast te houden."
    },
    {
        question: "Wat eet een mol het liefst?",
        answers: [
            "Bessen",
            "Wormen en insecten",
            "Bladeren",
            "Gras"
        ],
        correct: 1,
        explanation: "Wist je dat? Mollen eten vooral wormen en insecten die ze onder de grond vinden."
    },
    {
        question: "Waar leeft een flamingo?",
        answers: [
            "In de bergen",
            "Bij zoutmeren en moerassen",
            "In het bos",
            "In de woestijn"
        ],
        correct: 1,
        explanation: "Wist je dat? Flamingo’s leven vaak in ondiepe zoutmeren en moerassen."
    },
    {
        question: "Waarom hebben sommige dieren grote oren?",
        answers: [
            "Om beter te horen",
            "Om zichzelf koel te houden",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Grote oren helpen dieren zoals vossen en olifanten om beter te horen en warmte kwijt te raken."
    },
    {
        question: "Wat eet een mus soms nog meer?",
        answers: [
            "Insecten",
            "Zaden",
            "Bessen",
            "Gras"
        ],
        correct: 0,
        explanation: "Wist je dat? Mussen eten vooral zaden, maar in het voorjaar ook veel insecten voor hun jongen."
    },
    {
        question: "Waarom hebben sommige dieren een lange staart?",
        answers: [
            "Voor balans",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dikke staarten helpen dieren zoals eekhoorns om hun evenwicht te bewaren en warm te blijven."
    },
    {
        question: "Waarom hebben olifanten grote oren?",
        answers: [
            "Om beter te horen",
            "Om zichzelf koel te houden",
            "Om vijanden af te schrikken",
            "Om te kunnen vliegen"
        ],
        correct: 1,
        explanation: "Wist je dat? Olifanten gebruiken hun grote oren om zichzelf koel te houden als het warm is."
    },
    {
        question: "Wat eet een panda het liefst?",
        answers: [
            "Bamboe",
            "Vlees",
            "Bessen",
            "Bladeren van bomen"
        ],
        correct: 0,
        explanation: "Wist je dat? Panda’s eten bijna alleen bamboe. Soms wel 12 uur per dag!"
    },
    {
        question: "Waarom leven ijsberen alleen op de Noordpool?",
        answers: [
            "Omdat het daar koud is",
            "Omdat er veel zeehonden zijn",
            "Omdat ze niet kunnen zwemmen",
            "Omdat er geen mensen wonen"
        ],
        correct: 1,
        explanation: "Wist je dat? IJsberen leven op de Noordpool omdat daar hun favoriete eten, zeehonden, leeft."
    },
    {
        question: "Wat is speciaal aan een kangoeroe?",
        answers: [
            "Grote oren",
            "Een buidel",
            "Lange staart",
            "Scherpe tanden"
        ],
        correct: 1,
        explanation: "Wist je dat? Kangoeroes hebben een buidel waarin ze hun baby veilig kunnen dragen."
    },
    {
        question: "Waarom zwemmen vissen vaak samen in een grote groep?",
        answers: [
            "Voor bescherming",
            "Om sneller te zwemmen",
            "Om eten te delen",
            "Omdat ze familie zijn"
        ],
        correct: 0,
        explanation: "Wist je dat? In een groep zijn vissen veiliger voor roofdieren."
    },
    {
        question: "Waar woont een orang-oetan?",
        answers: [
            "Op de savanne",
            "In het regenwoud",
            "In de woestijn",
            "Op de toendra"
        ],
        correct: 1,
        explanation: "Wist je dat? Orang-oetans leven in het regenwoud en klimmen graag in bomen."
    },
    {
        question: "Waarom hebben sommige vogels een gekleurde snavel?",
        answers: [
            "Om partners aan te trekken",
            "Om eten te vinden",
            "Om roofdieren af te schrikken",
            "Om te kunnen zingen"
        ],
        correct: 0,
        explanation: "Wist je dat? Felle kleuren helpen vogels om een partner te vinden."
    },
    {
        question: "Waarom is het schild van een schildpad belangrijk?",
        answers: [
            "Om sneller te zwemmen",
            "Voor bescherming tegen vijanden",
            "Beter zien",
            "Makkelijker eten"
        ],
        correct: 1,
        explanation: "Wist je dat? Het schild van een schildpad beschermt hem tegen aanvallen."
    },
    {
        question: "Waarom slapen sommige dieren overdag?",
        answers: [
            "Omdat het dan koeler is",
            "Omdat ze dan beter kunnen zien",
            "Omdat er minder vijanden zijn",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? Nachtdieren slapen overdag en zijn 's nachts wakker om de hitte te vermijden."
    },
    {
        question: "Waar woont een ijsvogel het liefst?",
        answers: [
            "In de bergen",
            "In de stad",
            "Bij rivieren en meren",
            "In de woestijn"
        ],
        correct: 2,
        explanation: "Wist je dat? IJsvogels leven bij schoon water waar ze vis kunnen vangen."
    },
    {
        question: "Waarom hebben sommige apen een lange staart?",
        answers: [
            "Voor balans bij het klimmen",
            "Om te vechten",
            "Om eten te dragen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Veel apen gebruiken hun staart om zich vast te houden aan takken."
    },
    {
        question: "Wat eet een mier het liefst?",
        answers: [
            "Bladeren",
            "Suiker en zoetigheid",
            "Vlees",
            "Water"
        ],
        correct: 1,
        explanation: "Wist je dat? Mieren zijn dol op suiker en zoeken vaak zoetigheid."
    },
    {
        question: "Waarom leven veel dieren in het regenwoud?",
        answers: [
            "Omdat er veel eten is",
            "Omdat het er altijd warm is",
            "Omdat er veel schuilplaatsen zijn",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? In het regenwoud is veel eten, warmte en schuilplek voor dieren."
    },
    {
        question: "Wat is typisch voor dieren die in de bergen leven?",
        answers: [
            "Dikke vacht",
            "Grote oren",
            "Kleine poten",
            "Dunne huid"
        ],
        correct: 0,
        explanation: "Wist je dat? Dieren in de bergen hebben vaak een dikke vacht om warm te blijven."
    },
    {
        question: "Waarom hebben sommige vissen felle kleuren?",
        answers: [
            "Om te waarschuwen dat ze giftig zijn",
            "Om zich te verstoppen",
            "Om partners te lokken",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? Felle kleuren kunnen helpen om een partner te vinden of om vijanden af te schrikken."
    },
    {
        question: "Waar woont een pinguïn meestal?",
        answers: [
            "In de woestijn",
            "Op de toendra",
            "In de poolgebieden",
            "Op de savanne"
        ],
        correct: 2,
        explanation: "Wist je dat? Pinguïns leven vooral op de Zuidpool en op koude eilanden."
    },
    {
        question: "Waarom houden sommige dieren een winterslaap?",
        answers: [
            "Om te groeien",
            "Om energie te sparen in de winter",
            "Om zich te verstoppen voor vijanden",
            "Om te reizen"
        ],
        correct: 1,
        explanation: "Wist je dat? Tijdens de winterslaap verbruiken dieren minder energie als er weinig eten is."
    },
    {
        question: "Wat eet een giraf het liefst?",
        answers: [
            "Gras",
            "Bladeren van hoge bomen",
            "Vruchten",
            "Schors"
        ],
        correct: 1,
        explanation: "Wist je dat? Giraffen eten vooral bladeren die hoog in de bomen groeien."
    },
    {
        question: "Waarom leven veel dieren in groepen?",
        answers: [
            "Voor bescherming",
            "Om samen eten te zoeken",
            "Om voor de jongen te zorgen",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? In groepen zijn dieren veiliger en kunnen ze samen voor hun jongen zorgen."
    },
    {
        question: "Wat is het voordeel van camouflage voor dieren?",
        answers: [
            "Ze vallen minder op voor vijanden",
            "Ze kunnen sneller rennen",
            "Ze kunnen beter horen",
            "Ze kunnen hoger springen"
        ],
        correct: 0,
        explanation: "Wist je dat? Camouflage helpt dieren om niet op te vallen in hun omgeving."
    },
    {
        question: "Waarom hebben sommige vogels zwemvliezen?",
        answers: [
            "Om beter te kunnen zwemmen",
            "Om sneller te lopen",
            "Om te vliegen",
            "Om te graven"
        ],
        correct: 0,
        explanation: "Wist je dat? Zwemvliezen helpen vogels zoals eenden om goed te zwemmen."
    },
    {
        question: "Waarom hebben ijsberen een dikke vacht en een vetlaag?",
        answers: [
            "Om sneller te zwemmen",
            "Om warm te blijven in de kou",
            "Om zich te verstoppen",
            "Om te kunnen duiken"
        ],
        correct: 1,
        explanation: "Wist je dat? De dikke vacht en vetlaag van een ijsbeer houden hem warm op de Noordpool."
    },
    {
        question: "Wat eet een eekhoorn het liefst?",
        answers: [
            "Bessen",
            "Noten en zaden",
            "Insecten",
            "Gras"
        ],
        correct: 1,
        explanation: "Wist je dat? Eekhoorns verzamelen noten en zaden en verstoppen die voor de winter."
    },
    {
        question: "Waarom zijn sommige vissen plat?",
        answers: [
            "Om sneller te zwemmen",
            "Om zich te verstoppen op de bodem",
            "Om hoger te springen",
            "Om beter te ademen"
        ],
        correct: 1,
        explanation: "Wist je dat? Platte vissen zoals de schol kunnen zich goed verstoppen op de zeebodem."
    },
    {
        question: "Wat is speciaal aan een kameleon?",
        answers: [
            "Kan vliegen",
            "Kan van kleur veranderen",
            "Kan zwemmen",
            "Kan vuur spuwen"
        ],
        correct: 1,
        explanation: "Wist je dat? Kameleons kunnen van kleur veranderen om zich te verstoppen of te laten zien hoe ze zich voelen."
    },
    {
        question: "Waarom hebben sommige vogels een kromme snavel?",
        answers: [
            "Om zaden te kraken",
            "Om nectar te drinken",
            "Om vlees te scheuren",
            "Om te graven"
        ],
        correct: 2,
        explanation: "Wist je dat? Roofvogels zoals arenden hebben een kromme snavel om vlees te scheuren."
    },
    {
        question: "Waar woont een bever?",
        answers: [
            "In de woestijn",
            "Bij rivieren en meren",
            "In de bergen",
            "Op de savanne"
        ],
        correct: 1,
        explanation: "Wist je dat? Bevers bouwen dammen en huisjes in rivieren en meren."
    },
    {
        question: "Waarom hebben sommige dieren stekels?",
        answers: [
            "Voor camouflage",
            "Voor bescherming tegen vijanden",
            "Om te zwemmen",
            "Om te vliegen"
        ],
        correct: 1,
        explanation: "Wist je dat? Stekels beschermen dieren zoals egels tegen aanvallen."
    },
    {
        question: "Wat eet een miereneter het liefst?",
        answers: [
            "Bladeren",
            "Mieren en termieten",
            "Bessen",
            "Vlees"
        ],
        correct: 1,
        explanation: "Wist je dat? Miereneters hebben een lange tong om mieren en termieten te vangen."
    },
    {
        question: "Waarom leven veel dieren in de savanne?",
        answers: [
            "Omdat er veel bomen zijn",
            "Omdat er veel gras en prooidieren zijn",
            "Omdat het er koud is",
            "Omdat er veel water is"
        ],
        correct: 1,
        explanation: "Wist je dat? Op de savanne is veel gras en leven veel dieren zoals zebra’s en leeuwen."
    },
    {
        question: "Hoe blijft een pinguïn warm?",
        answers: [
            "Met een dikke vetlaag",
            "Met grote oren",
            "Met een lange staart",
            "Met dunne veren"
        ],
        correct: 0,
        explanation: "Wist je dat? Pinguïns hebben een dikke vetlaag en dichte veren om warm te blijven."
    },
    {
        question: "Waarom hebben sommige vogels een lange snavel?",
        answers: [
            "Om diep in bloemen nectar te drinken",
            "Om te graven",
            "Om te vechten",
            "Om te vliegen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vogels zoals de kolibrie hebben een lange snavel om nectar uit bloemen te halen."
    }, 
    {
        question: "Wat eten walvissen meestal?",
        answers: [
            "Plankton en kleine visjes",
            "Zeewier",
            "Krabben",
            "Zeehonden"
        ],
        correct: 0,
        explanation: "Wist je dat? Veel walvissen eten plankton en kleine visjes door water te filteren."
    },
    {
        question: "Waarom hebben sommige dieren een dikke huid?",
        answers: [
            "Voor bescherming tegen verwondingen en uitdroging",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dikke huid beschermt dieren zoals olifanten tegen verwondingen en uitdroging."
    },
    {
        question: "Waar leeft een lynx het liefst?",
        answers: [
            "In de woestijn",
            "In bergen en bossen",
            "Op de savanne",
            "Op de toendra"
        ],
        correct: 1,
        explanation: "Wist je dat? De lynx leeft vooral in bossen en bergachtige gebieden."
    },
    {
        question: "Waarom hebben sommige vogels felle kleuren?",
        answers: [
            "Om partners aan te trekken",
            "Om roofdieren af te schrikken",
            "Om zich te verstoppen",
            "Om te vliegen"
        ],
        correct: 0,
        explanation: "Wist je dat? Felle kleuren helpen vogels om een partner te vinden."
    },
    {
        question: "Wat eet een slak vooral?",
        answers: [
            "Bladeren en planten",
            "Insecten",
            "Vlees",
            "Zand"
        ],
        correct: 0,
        explanation: "Wist je dat? Slakken eten vooral bladeren, planten en soms fruit."
    },
    {
        question: "Waarom leven sommige dieren in holen onder de grond?",
        answers: [
            "Voor bescherming tegen vijanden en kou",
            "Om te vliegen",
            "Om te zwemmen",
            "Om voedsel te zoeken"
        ],
        correct: 0,
        explanation: "Wist je dat? Holen bieden dieren bescherming tegen vijanden en tegen kou of hitte."
    },
    {
        question: "Waarom hebben sommige vissen lichtgevende stukjes op hun lichaam?",
        answers: [
            "Om prooien te lokken",
            "Om te communiceren",
            "Om te zwemmen",
            "Om te ademen"
        ],
        correct: 0,
        explanation: "Wist je dat? Sommige diepzeevissen gebruiken licht om prooien te lokken of met elkaar te praten."
    },
    {
        question: "Wat is speciaal aan een kameel?",
        answers: [
            "Lange poten",
            "Grote oren",
            "Dikke lippen",
            "Dunne huid"
        ],
        correct: 2,
        explanation: "Wist je dat? Kamelen hebben dikke lippen zodat ze stekelige planten kunnen eten zonder zich te prikken."
    },
    {
        question: "Waarom leven veel dieren in het water?",
        answers: [
            "Omdat het er koel is",
            "Omdat ze daar kunnen schuilen",
            "Omdat er veel voedsel is",
            "Omdat ze niet kunnen vliegen"
        ],
        correct: 2,
        explanation: "Wist je dat? In het water is vaak veel voedsel te vinden voor vissen en andere dieren."
    },
    {
        question: "Waar leeft een sneeuwluipaard?",
        answers: [
            "Op de savanne",
            "In de bergen",
            "In het regenwoud",
            "In de woestijn"
        ],
        correct: 1,
        explanation: "Wist je dat? Sneeuwluipaarden leven in hoge bergen waar het koud is."
    },
    {
        question: "Waarom hebben sommige vogels een haakvormige snavel?",
        answers: [
            "Om insecten te vangen",
            "Om zaden te kraken",
            "Om vlees te scheuren",
            "Om nectar te drinken"
        ],
        correct: 2,
        explanation: "Wist je dat? Roofvogels zoals buizerds hebben een haakvormige snavel om vlees te scheuren."
    },
    {
        question: "Wat eet een mol het liefst?",
        answers: [
            "Wortels",
            "Insecten en wormen",
            "Bessen",
            "Bladeren"
        ],
        correct: 1,
        explanation: "Wist je dat? Mollen eten vooral insecten en wormen die ze onder de grond vinden."
    },
    {
        question: "Waarom hebben sommige dieren een dikke staart?",
        answers: [
            "Voor balans",
            "Voor opslag van vet",
            "Voor camouflage",
            "Voor communicatie"
        ],
        correct: 1,
        explanation: "Wist je dat? Sommige dieren slaan vet op in hun staart als reserve voor magere tijden."
    },
    {
        question: "Wat eet een specht vooral?",
        answers: [
            "Noten",
            "Insecten onder de schors",
            "Bessen",
            "Bladeren"
        ],
        correct: 1,
        explanation: "Wist je dat? Spechten zoeken insecten en larven onder de schors van bomen."
    },
    {
        question: "Waarom leven sommige dieren op grote hoogte?",
        answers: [
            "Omdat er minder roofdieren zijn",
            "Omdat het er warmer is",
            "Omdat er meer voedsel is",
            "Omdat ze niet kunnen zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Op grote hoogte zijn minder roofdieren, dus sommige dieren zijn daar veiliger."
    },
    {
        question: "Waar woont een otter het liefst?",
        answers: [
            "In de bergen",
            "In het bos",
            "Bij rivieren en meren",
            "In de woestijn"
        ],
        correct: 2,
        explanation: "Wist je dat? Otters leven graag bij schoon water, zoals rivieren en meren."
    },
    {
        question: "Waarom hebben sommige dieren een schutkleur?",
        answers: [
            "Om op te vallen",
            "Om zich te verstoppen voor vijanden",
            "Om sneller te rennen",
            "Om te vliegen"
        ],
        correct: 1,
        explanation: "Wist je dat? Schutkleuren helpen dieren om niet op te vallen in hun omgeving."
    },
    {
        question: "Wat eet een giraf het liefst?",
        answers: [
            "Gras",
            "Bladeren van hoge bomen",
            "Vruchten",
            "Schors"
        ],
        correct: 1,
        explanation: "Wist je dat? Giraffen eten vooral bladeren die hoog in de bomen groeien."
    },
    {
        question: "Waarom hebben sommige vogels een lange staart?",
        answers: [
            "Voor balans tijdens het vliegen",
            "Om te zwemmen",
            "Om te graven",
            "Om te vechten"
        ],
        correct: 0,
        explanation: "Wist je dat? Sommige vogels gebruiken hun lange staart voor balans en om indruk te maken op partners."
    },
    {
        question: "Wat eet een das vooral?",
        answers: [
            "Bessen",
            "Insecten en wormen",
            "Bladeren",
            "Vlees"
        ],
        correct: 1,
        explanation: "Wist je dat? Dassen eten vooral insecten, wormen en soms kleine dieren."
    },
    {
        question: "Waarom leven sommige dieren in bomen?",
        answers: [
            "Om voedsel te zoeken",
            "Om te schuilen voor vijanden",
            "Om te slapen",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? Veel dieren leven in bomen voor voedsel, veiligheid en rust."
    },
    {
        question: "Waar woont een zeehond het liefst?",
        answers: [
            "In de woestijn",
            "In rivieren",
            "In koude zeeën en op het ijs",
            "In de bergen"
        ],
        correct: 2,
        explanation: "Wist je dat? Zeehonden leven vooral aan de kusten van koude zeeën en op het ijs."
    },
    {
        question: "Waarom hebben sommige dieren grote oren?",
        answers: [
            "Om beter te horen",
            "Om zichzelf koel te houden",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Grote oren helpen dieren zoals vossen en olifanten om beter te horen en warmte kwijt te raken."
    },
    {
        question: "Wat eet een kikker vooral?",
        answers: [
            "Bladeren",
            "Insecten",
            "Bessen",
            "Gras"
        ],
        correct: 1,
        explanation: "Wist je dat? Kikkers eten vooral insecten, spinnen en andere kleine dieren."
    },
    {
        question: "Waarom hebben sommige dieren zwemvliezen?",
        answers: [
            "Om beter te kunnen zwemmen",
            "Om sneller te lopen",
            "Om te vliegen",
            "Om te graven"
        ],
        correct: 0,
        explanation: "Wist je dat? Zwemvliezen helpen dieren zoals eenden en otters om snel door het water te bewegen."
    },
    {
        question: "Wat eet een ijsvogel het liefst?",
        answers: [
            "Bessen",
            "Vissen",
            "Bladeren",
            "Insecten"
        ],
        correct: 1,
        explanation: "Wist je dat? IJsvogels vangen kleine visjes door in het water te duiken vanaf een tak."
    },
    {
        question: "Waarom hebben sommige vogels een kromme snavel?",
        answers: [
            "Om zaden te kraken",
            "Om nectar te drinken",
            "Om vlees te scheuren",
            "Om te graven"
        ],
        correct: 2,
        explanation: "Wist je dat? Roofvogels zoals arenden hebben een kromme snavel om vlees van hun prooi te scheuren."
    },
    {
        question: "Wat eet een stekelvarken vooral?",
        answers: [
            "Schors en wortels",
            "Insecten",
            "Vlees",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Stekelvarkens eten vooral schors, wortels en soms bladeren."
    },
    {
        question: "Waarom hebben sommige vogels een gebogen snavel?",
        answers: [
            "Om nectar uit bloemen te halen",
            "Om noten te kraken",
            "Om vlees te scheuren",
            "Om te zwemmen"
        ],
        correct: 1,
        explanation: "Wist je dat? Papegaaien gebruiken hun sterke, gebogen snavel om harde noten te kraken."
    },
    {
        question: "Waar leeft een sneeuwuil?",
        answers: [
            "In de bergen",
            "Op de toendra",
            "In het bos",
            "Op de savanne"
        ],
        correct: 1,
        explanation: "Wist je dat? Sneeuwuilen leven vooral op de toendra, waar ze goed gecamoufleerd zijn in de sneeuw."
    },
    {
        question: "Waarom hebben sommige dieren een dikke vacht?",
        answers: [
            "Om warm te blijven",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Een dikke vacht beschermt dieren zoals beren en vossen tegen de kou."
    },
    {
        question: "Wat eet een walrus het liefst?",
        answers: [
            "Vis",
            "Schelpjes en zeedieren",
            "Zeewier",
            "Krabben"
        ],
        correct: 1,
        explanation: "Wist je dat? Walrussen zoeken met hun snorharen naar schelpdieren op de zeebodem."
    },
    {
        question: "Waarom hebben sommige vogels een kuif op hun kop?",
        answers: [
            "Om indruk te maken",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Sommige vogels gebruiken hun kuif om indruk te maken op andere vogels."
    },
    {
        question: "Wat eet een flamingo vooral?",
        answers: [
            "Kleine diertjes uit het water",
            "Gras",
            "Bessen",
            "Vissen"
        ],
        correct: 0,
        explanation: "Wist je dat? Flamingo’s eten kleine diertjes zoals garnalen, daardoor worden ze roze!"
    },
    {
        question: "Waarom leven sommige dieren in de woestijn?",
        answers: [
            "Omdat ze goed tegen hitte kunnen",
            "Omdat er veel water is",
            "Omdat er veel bomen zijn",
            "Omdat ze niet kunnen zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Woestijndieren kunnen goed tegen hitte en vinden water op slimme manieren."
    },
    {
        question: "Wat is het belangrijkste voedsel van een leeuw?",
        answers: [
            "Gras",
            "Vlees",
            "Bessen",
            "Bladeren"
        ],
        correct: 1,
        explanation: "Wist je dat? Leeuwen zijn roofdieren en eten vooral vlees van andere dieren."
    },
    {
        question: "Waarom hebben sommige dieren een lange tong?",
        answers: [
            "Om insecten te vangen",
            "Om te drinken",
            "Om te vechten",
            "Om te zingen"
        ],
        correct: 0,
        explanation: "Wist je dat? Miereneters en kameleons hebben een lange tong om insecten te vangen."
    },
    {
        question: "Wat eet een schildpad vooral?",
        answers: [
            "Planten en bladeren",
            "Vlees",
            "Insecten",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? De meeste schildpadden eten planten, maar sommige soorten eten ook insecten."
    },
    {
        question: "Waarom hebben sommige vogels een scherpe klauw?",
        answers: [
            "Om prooi te vangen",
            "Om te zwemmen",
            "Om te vliegen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Roofvogels zoals arenden hebben scherpe klauwen om hun prooi te grijpen."
    },
    {
        question: "Wat is het belangrijkste voedsel van een olifant?",
        answers: [
            "Bladeren en gras",
            "Vlees",
            "Insecten",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Olifanten eten elke dag heel veel bladeren, gras en takken."
    },
    {
        question: "Waarom leven sommige dieren in het water en op het land?",
        answers: [
            "Omdat ze dan meer eten kunnen vinden",
            "Omdat ze niet kunnen vliegen",
            "Omdat ze niet kunnen rennen",
            "Omdat ze niet kunnen klimmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dieren zoals kikkers en krokodillen leven graag in het water én op het land."
    },
    {
        question: "Wat eet een vos graag?",
        answers: [
            "Bessen en kleine dieren",
            "Gras",
            "Bladeren",
            "Vissen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vossen eten van alles: bessen, muizen, vogels en soms zelfs insecten."
    },
    {
        question: "Waarom hebben sommige dieren een dikke staart?",
        answers: [
            "Om vet op te slaan",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te graven"
        ],
        correct: 0,
        explanation: "Wist je dat? Sommige dieren slaan vet op in hun staart voor als er weinig eten is."
    },
    {
        question: "Wat eet een otter het liefst?",
        answers: [
            "Vis",
            "Gras",
            "Bessen",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Otters zijn dol op vis en zoeken die in het water."
    },
    {
        question: "Waarom hebben sommige dieren een lange snorhaar?",
        answers: [
            "Om beter te voelen",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te eten"
        ],
        correct: 0,
        explanation: "Wist je dat? Snorharen helpen dieren zoals katten en zeehonden om te voelen waar ze zijn."
    },
    {
        question: "Wat is het belangrijkste voedsel van een haas?",
        answers: [
            "Gras en planten",
            "Vlees",
            "Insecten",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Hazen eten vooral gras, bladeren en soms schors van bomen."
    },
    {
        question: "Waarom hebben sommige vogels een grote snavel?",
        answers: [
            "Om grote zaden te kraken",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Papegaaien en vinken hebben een grote snavel om harde zaden open te maken."
    },
    {
        question: "Wat eet een beer graag in de zomer?",
        answers: [
            "Bessen en honing",
            "Gras",
            "Vlees",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Beren zoeken in de zomer graag bessen en honing, maar eten ook vis en vlees."
    },
    {
        question: "Waarom hebben sommige dieren een dikke huid?",
        answers: [
            "Voor bescherming",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dikke huid beschermt dieren zoals olifanten tegen verwondingen en uitdroging."
    },
    {
        question: "Wat eet een ree vooral?",
        answers: [
            "Bladeren en jonge takken",
            "Vlees",
            "Insecten",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Reeën eten vooral bladeren, jonge takken en knoppen van struiken en bomen."
    },
    {
        question: "Waarom hebben sommige vogels een lange nek?",
        answers: [
            "Om bij hoog voedsel te komen",
            "Om te zwemmen",
            "Om te vliegen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vogels zoals de zwaan hebben een lange nek om diep in het water naar eten te zoeken."
    },
    {
        question: "Wat eet een das graag?",
        answers: [
            "Insecten en wormen",
            "Gras",
            "Bessen",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Dassen eten vooral insecten, wormen en soms kleine dieren."
    },
    {
        question: "Waarom leven sommige dieren in holen?",
        answers: [
            "Voor bescherming tegen vijanden",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te jagen"
        ],
        correct: 0,
        explanation: "Wist je dat? Holen bieden bescherming tegen roofdieren en tegen kou of hitte."
    },
    {
        question: "Wat eet een mol het liefst?",
        answers: [
            "Wormen en insecten",
            "Bessen",
            "Bladeren",
            "Gras"
        ],
        correct: 0,
        explanation: "Wist je dat? Mollen eten vooral wormen en insecten die ze onder de grond vinden."
    },
    {
        question: "Waarom hebben sommige dieren een dikke vacht?",
        answers: [
            "Om warm te blijven",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Een dikke vacht beschermt dieren zoals beren en vossen tegen de kou."
    },
    {
        question: "Wat eet een egel het liefst?",
        answers: [
            "Insecten en wormen",
            "Bessen",
            "Gras",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Egels eten vooral insecten, wormen en soms slakken."
    },
    {
        question: "Waarom hebben sommige vogels een scherpe snavel?",
        answers: [
            "Om insecten te vangen",
            "Om te zwemmen",
            "Om te vliegen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vogels met een scherpe snavel kunnen makkelijk insecten uit boomschors of de grond halen."
    },
    {
        question: "Wat eet een papegaai graag?",
        answers: [
            "Zaden en noten",
            "Vlees",
            "Insecten",
            "Gras"
        ],
        correct: 0,
        explanation: "Wist je dat? Papegaaien hebben een sterke snavel om harde zaden en noten te kraken."
    },
    {
        question: "Waarom hebben sommige dieren schubben?",
        answers: [
            "Voor bescherming",
            "Om te vliegen",
            "Om te springen",
            "Om te zingen"
        ],
        correct: 0,
        explanation: "Wist je dat? Schubben beschermen vissen en reptielen tegen verwondingen en uitdroging."
    },
    {
        question: "Wat eet een mus soms nog meer?",
        answers: [
            "Insecten",
            "Zaden",
            "Bessen",
            "Gras"
        ],
        correct: 0,
        explanation: "Wist je dat? Mussen eten vooral zaden, maar in het voorjaar ook veel insecten voor hun jongen."
    },
    {
        question: "Waarom hebben sommige dieren een dikke huid?",
        answers: [
            "Om zichzelf te beschermen",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dikke huid beschermt dieren zoals olifanten tegen verwondingen en uitdroging."
    },
    {
        question: "Wat eet een schildpad het liefst?",
        answers: [
            "Planten en bladeren",
            "Vlees",
            "Insecten",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? De meeste schildpadden eten planten, maar sommige soorten eten ook insecten."
    },
    {
        question: "Waarom hebben sommige vogels een haakvormige snavel?",
        answers: [
            "Om insecten te vangen",
            "Om zaden te kraken",
            "Om vlees te scheuren",
            "Om nectar te drinken"
        ],
        correct: 2,
        explanation: "Wist je dat? Roofvogels zoals buizerds hebben een haakvormige snavel om vlees te scheuren."
    },
    {
        question: "Wat eet een flamingo vooral?",
        answers: [
            "Kleine diertjes uit het water",
            "Gras",
            "Bessen",
            "Vissen"
        ],
        correct: 0,
        explanation: "Wist je dat? Flamingo’s eten kleine diertjes zoals garnalen, daardoor worden ze roze!"
    },
    {
        question: "Waarom leven sommige dieren in de bergen?",
        answers: [
            "Omdat het er koel is",
            "Omdat er minder roofdieren zijn",
            "Omdat er veel bomen zijn",
            "Omdat ze niet kunnen zwemmen"
        ],
        correct: 1,
        explanation: "Wist je dat? In de bergen zijn minder roofdieren, dus sommige dieren zijn daar veiliger."
    },
    {
        question: "Wat eet een beer graag in de herfst?",
        answers: [
            "Bessen en honing",
            "Gras",
            "Vlees",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Beren zoeken in de herfst graag bessen en honing, maar eten ook vis en vlees."
    },
    {
        question: "Waarom hebben sommige dieren een lange tong?",
        answers: [
            "Om insecten te vangen",
            "Om te drinken",
            "Om te vechten",
            "Om te zingen"
        ],
        correct: 0,
        explanation: "Wist je dat? Miereneters en kameleons hebben een lange tong om insecten te vangen."
    },
    {
        question: "Wat eet een walrus het liefst?",
        answers: [
            "Vis",
            "Schelpjes en zeedieren",
            "Zeewier",
            "Krabben"
        ],
        correct: 1,
        explanation: "Wist je dat? Walrussen zoeken met hun snorharen naar schelpdieren op de zeebodem."
    },
    {
        question: "Waarom hebben sommige vogels een kuif op hun kop?",
        answers: [
            "Om indruk te maken",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Sommige vogels gebruiken hun kuif om indruk te maken op andere vogels."
    },
    {
        question: "Wat eet een vos graag?",
        answers: [
            "Bessen en kleine dieren",
            "Gras",
            "Bladeren",
            "Vissen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vossen eten van alles: bessen, muizen, vogels en soms zelfs insecten."
    },
    {
        question: "Waarom hebben sommige dieren een dikke staart?",
        answers: [
            "Om vet op te slaan",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te graven"
        ],
        correct: 0,
        explanation: "Wist je dat? Sommige dieren slaan vet op in hun staart voor als er weinig eten is."
    },
    {
        question: "Wat eet een otter het liefst?",
        answers: [
            "Vis",
            "Gras",
            "Bessen",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Otters zijn dol op vis en zoeken die in het water."
    },
    {
        question: "Waarom hebben sommige dieren een lange snorhaar?",
        answers: [
            "Om beter te voelen",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te eten"
        ],
        correct: 0,
        explanation: "Wist je dat? Snorharen helpen dieren zoals katten en zeehonden om te voelen waar ze zijn."
    },
    {
        question: "Wat is het belangrijkste voedsel van een haas?",
        answers: [
            "Gras en planten",
            "Vlees",
            "Insecten",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Hazen eten vooral gras, bladeren en soms schors van bomen."
    },
    {
        question: "Waarom hebben sommige vogels een grote snavel?",
        answers: [
            "Om grote zaden te kraken",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Papegaaien en vinken hebben een grote snavel om harde zaden open te maken."
    },
    {
        question: "Wat eet een beer graag in de zomer?",
        answers: [
            "Bessen en honing",
            "Gras",
            "Vlees",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Beren zoeken in de zomer graag bessen en honing, maar eten ook vis en vlees."
    },
    {
        question: "Waarom hebben sommige dieren een dikke huid?",
        answers: [
            "Voor bescherming",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dikke huid beschermt dieren zoals olifanten tegen verwondingen en uitdroging."
    },
    {
        question: "Wat eet een ree vooral?",
        answers: [
            "Bladeren en jonge takken",
            "Vlees",
            "Insecten",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Reeën eten vooral bladeren, jonge takken en knoppen van struiken en bomen."
    },
    {
        question: "Waarom hebben sommige vogels een lange nek?",
        answers: [
            "Om bij hoog voedsel te komen",
            "Om te zwemmen",
            "Om te vliegen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vogels zoals de zwaan hebben een lange nek om diep in het water naar eten te zoeken."
    },
    {
        question: "Wat eet een das graag?",
        answers: [
            "Insecten en wormen",
            "Gras",
            "Bessen",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Dassen eten vooral insecten, wormen en soms kleine dieren."
    },
    {
        question: "Waarom leven sommige dieren in holen?",
        answers: [
            "Voor bescherming tegen vijanden",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te jagen"
        ],
        correct: 0,
        explanation: "Wist je dat? Holen bieden bescherming tegen roofdieren en tegen kou of hitte."
    },
    {
        question: "Wat eet een mol het liefst?",
        answers: [
            "Wormen en insecten",
            "Bessen",
            "Bladeren",
            "Gras"
        ],
        correct: 0,
        explanation: "Wist je dat? Mollen eten vooral wormen en insecten die ze onder de grond vinden."
    },
    {
        question: "Waarom hebben sommige dieren een dikke vacht?",
        answers: [
            "Om warm te blijven",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Een dikke vacht beschermt dieren zoals beren en vossen tegen de kou."
    },
    {
        question: "Wat eet een egel het liefst?",
        answers: [
            "Insecten en wormen",
            "Bessen",
            "Gras",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Egels eten vooral insecten, wormen en soms slakken."
    },
    {
        question: "Waarom hebben sommige vogels een scherpe snavel?",
        answers: [
            "Om insecten te vangen",
            "Om te zwemmen",
            "Om te vliegen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vogels met een scherpe snavel kunnen makkelijk insecten uit boomschors of de grond halen."
    },
    {
        question: "Wat eet een papegaai graag?",
        answers: [
            "Zaden en noten",
            "Vlees",
            "Insecten",
            "Gras"
        ],
        correct: 0,
        explanation: "Wist je dat? Papegaaien hebben een sterke snavel om harde zaden en noten te kraken."
    },
    {
        question: "Waarom hebben sommige dieren schubben?",
        answers: [
            "Voor bescherming",
            "Om te vliegen",
            "Om te springen",
            "Om te zingen"
        ],
        correct: 0,
        explanation: "Wist je dat? Schubben beschermen vissen en reptielen tegen verwondingen en uitdroging."
    },
    {
        question: "Wat eet een mus soms nog meer?",
        answers: [
            "Insecten",
            "Zaden",
            "Bessen",
            "Gras"
        ],
        correct: 0,
        explanation: "Wist je dat? Mussen eten vooral zaden, maar in het voorjaar ook veel insecten voor hun jongen."
    },
    {
        question: "Waarom hebben sommige dieren een lange staart?",
        answers: [
            "Voor balans",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dikke staarten helpen dieren zoals eekhoorns om hun evenwicht te bewaren en warm te blijven."
    },
    {
        question: "Waarom hebben sommige dieren een lange nek?",
        answers: [
            "Om bij hoog voedsel te komen",
            "Om te zwemmen",
            "Om te vliegen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dieren zoals giraffen kunnen met hun lange nek bladeren eten die andere dieren niet kunnen bereiken."
    },
    {
        question: "Wat eet een ijsbeer het liefst?",
        answers: [
            "Bessen",
            "Vissen",
            "Zeehonden",
            "Vogels"
        ],
        correct: 2,
        explanation: "Wist je dat? IJsberen jagen vooral op zeehonden op het ijs."
    },
    {
        question: "Waarom leven sommige dieren in groepen?",
        answers: [
            "Voor bescherming",
            "Om samen eten te zoeken",
            "Om voor de jongen te zorgen",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? In groepen zijn dieren veiliger en kunnen ze samen voor hun jongen zorgen."
    },
    {
        question: "Wat is het voordeel van camouflage voor dieren?",
        answers: [
            "Ze vallen minder op voor vijanden",
            "Ze kunnen sneller rennen",
            "Ze kunnen beter horen",
            "Ze kunnen hoger springen"
        ],
        correct: 0,
        explanation: "Wist je dat? Camouflage helpt dieren om niet op te vallen in hun omgeving."
    },
    {
        question: "Waarom hebben sommige vogels zwemvliezen?",
        answers: [
            "Om beter te kunnen zwemmen",
            "Om sneller te lopen",
            "Om te vliegen",
            "Om te graven"
        ],
        correct: 0,
        explanation: "Wist je dat? Zwemvliezen helpen vogels zoals eenden om goed te zwemmen."
    },
    {
        question: "Waarom hebben ijsberen een dikke vacht en een vetlaag?",
        answers: [
            "Om sneller te zwemmen",
            "Om warm te blijven in de kou",
            "Om zich te verstoppen",
            "Om te kunnen duiken"
        ],
        correct: 1,
        explanation: "Wist je dat? De dikke vacht en vetlaag van een ijsbeer houden hem warm op de Noordpool."
    },
    {
        question: "Wat eet een eekhoorn het liefst?",
        answers: [
            "Bessen",
            "Noten en zaden",
            "Insecten",
            "Gras"
        ],
        correct: 1,
        explanation: "Wist je dat? Eekhoorns verzamelen noten en zaden en verstoppen die voor de winter."
    },
    {
        question: "Waarom zijn sommige vissen plat?",
        answers: [
            "Om sneller te zwemmen",
            "Om zich te verstoppen op de bodem",
            "Om hoger te springen",
            "Om beter te ademen"
        ],
        correct: 1,
        explanation: "Wist je dat? Platte vissen zoals de schol kunnen zich goed verstoppen op de zeebodem."
    },
    {
        question: "Wat is speciaal aan een kameleon?",
        answers: [
            "Kan vliegen",
            "Kan van kleur veranderen",
            "Kan zwemmen",
            "Kan vuur spuwen"
        ],
        correct: 1,
        explanation: "Wist je dat? Kameleons kunnen van kleur veranderen om zich te verstoppen of te laten zien hoe ze zich voelen."
    },
    {
        question: "Waarom hebben sommige vogels een kromme snavel?",
        answers: [
            "Om zaden te kraken",
            "Om nectar te drinken",
            "Om vlees te scheuren",
            "Om te graven"
        ],
        correct: 2,
        explanation: "Wist je dat? Roofvogels zoals arenden hebben een kromme snavel om vlees te scheuren."
    },
    {
        question: "Waar woont een bever?",
        answers: [
            "In de woestijn",
            "Bij rivieren en meren",
            "In de bergen",
            "Op de savanne"
        ],
        correct: 1,
        explanation: "Wist je dat? Bevers bouwen dammen en huisjes in rivieren en meren."
    },
    {
        question: "Waarom hebben sommige dieren stekels?",
        answers: [
            "Voor camouflage",
            "Voor bescherming tegen vijanden",
            "Om te zwemmen",
            "Om te vliegen"
        ],
        correct: 1,
        explanation: "Wist je dat? Stekels beschermen dieren zoals egels tegen aanvallen."
    },
    {
        question: "Wat eet een miereneter het liefst?",
        answers: [
            "Bladeren",
            "Mieren en termieten",
            "Bessen",
            "Vlees"
        ],
        correct: 1,
        explanation: "Wist je dat? Miereneters hebben een lange tong om mieren en termieten te vangen."
    },
    {
        question: "Waarom leven veel dieren in de savanne?",
        answers: [
            "Omdat er veel bomen zijn",
            "Omdat er veel gras en prooidieren zijn",
            "Omdat het er koud is",
            "Omdat er veel water is"
        ],
        correct: 1,
        explanation: "Wist je dat? Op de savanne is veel gras en leven veel dieren zoals zebra’s en leeuwen."
    },
    {
        question: "Hoe blijft een pinguïn warm?",
        answers: [
            "Met een dikke vetlaag",
            "Met grote oren",
            "Met een lange staart",
            "Met dunne veren"
        ],
        correct: 0,
        explanation: "Wist je dat? Pinguïns hebben een dikke vetlaag en dichte veren om warm te blijven."
    },
    {
        question: "Waarom hebben sommige vogels een lange snavel?",
        answers: [
            "Om diep in bloemen nectar te drinken",
            "Om te graven",
            "Om te vechten",
            "Om te vliegen"
        ],
        correct: 0,
        explanation: "Wist je dat? Vogels zoals de kolibrie hebben een lange snavel om nectar uit bloemen te halen."
    },
    {
        question: "Wat eten walvissen meestal?",
        answers: [
            "Plankton en kleine visjes",
            "Zeewier",
            "Krabben",
            "Zeehonden"
        ],
        correct: 0,
        explanation: "Wist je dat? Veel walvissen eten plankton en kleine visjes door water te filteren."
    },
    {
        question: "Waarom hebben sommige dieren een dikke huid?",
        answers: [
            "Voor bescherming tegen verwondingen en uitdroging",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dikke huid beschermt dieren zoals olifanten tegen verwondingen en uitdroging."
    },
    {
        question: "Waar leeft een lynx het liefst?",
        answers: [
            "In de woestijn",
            "In bergen en bossen",
            "Op de savanne",
            "Op de toendra"
        ],
        correct: 1,
        explanation: "Wist je dat? De lynx leeft vooral in bossen en bergachtige gebieden."
    },
    {
        question: "Waarom hebben sommige vogels felle kleuren?",
        answers: [
            "Om partners aan te trekken",
            "Om roofdieren af te schrikken",
            "Om zich te verstoppen",
            "Om te vliegen"
        ],
        correct: 0,
        explanation: "Wist je dat? Felle kleuren helpen vogels om een partner te vinden."
    },
    {
        question: "Wat eet een slak vooral?",
        answers: [
            "Bladeren en planten",
            "Insecten",
            "Vlees",
            "Zand"
        ],
        correct: 0,
        explanation: "Wist je dat? Slakken eten vooral bladeren, planten en soms fruit."
    },
    {
        question: "Waarom leven sommige dieren in holen onder de grond?",
        answers: [
            "Voor bescherming tegen vijanden en kou",
            "Om te vliegen",
            "Om te zwemmen",
            "Om voedsel te zoeken"
        ],
        correct: 0,
        explanation: "Wist je dat? Holen bieden dieren bescherming tegen vijanden en tegen kou of hitte."
    },
    {
        question: "Waarom hebben sommige vissen lichtgevende stukjes op hun lichaam?",
        answers: [
            "Om prooien te lokken",
            "Om te communiceren",
            "Om te zwemmen",
            "Om te ademen"
        ],
        correct: 0,
        explanation: "Wist je dat? Sommige diepzeevissen gebruiken licht om prooien te lokken of met elkaar te praten."
    },
    {
        question: "Wat is speciaal aan een kameel?",
        answers: [
            "Lange poten",
            "Grote oren",
            "Dikke lippen",
            "Dunne huid"
        ],
        correct: 2,
        explanation: "Wist je dat? Kamelen hebben dikke lippen zodat ze stekelige planten kunnen eten zonder zich te prikken."
    },
    {
        question: "Waarom leven veel dieren in het water?",
        answers: [
            "Omdat het er koel is",
            "Omdat ze daar kunnen schuilen",
            "Omdat er veel voedsel is",
            "Omdat ze niet kunnen vliegen"
        ],
        correct: 2,
        explanation: "Wist je dat? In het water is vaak veel voedsel te vinden voor vissen en andere dieren."
    },
    {
        question: "Waar leeft een sneeuwluipaard?",
        answers: [
            "Op de savanne",
            "In de bergen",
            "In het regenwoud",
            "In de woestijn"
        ],
        correct: 1,
        explanation: "Wist je dat? Sneeuwluipaarden leven in hoge bergen waar het koud is."
    },
    {
        question: "Waarom hebben sommige vogels een haakvormige snavel?",
        answers: [
            "Om insecten te vangen",
            "Om zaden te kraken",
            "Om vlees te scheuren",
            "Om nectar te drinken"
        ],
        correct: 2,
        explanation: "Wist je dat? Roofvogels zoals buizerds hebben een haakvormige snavel om vlees te scheuren."
    },
    {
        question: "Wat eet een mol het liefst?",
        answers: [
            "Wortels",
            "Insecten en wormen",
            "Bessen",
            "Bladeren"
        ],
        correct: 1,
        explanation: "Wist je dat? Mollen eten vooral insecten en wormen die ze onder de grond vinden."
    },
    {
        question: "Waarom hebben sommige dieren een dikke staart?",
        answers: [
            "Voor balans",
            "Voor opslag van vet",
            "Voor camouflage",
            "Voor communicatie"
        ],
        correct: 1,
        explanation: "Wist je dat? Sommige dieren slaan vet op in hun staart als reserve voor magere tijden."
    },
    {
        question: "Wat eet een specht vooral?",
        answers: [
            "Noten",
            "Insecten onder de schors",
            "Bessen",
            "Bladeren"
        ],
        correct: 1,
        explanation: "Wist je dat? Spechten zoeken insecten en larven onder de schors van bomen."
    },
    {
        question: "Waarom leven sommige dieren op grote hoogte?",
        answers: [
            "Omdat er minder roofdieren zijn",
            "Omdat het er warmer is",
            "Omdat er meer voedsel is",
            "Omdat ze niet kunnen zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Op grote hoogte zijn minder roofdieren, dus sommige dieren zijn daar veiliger."
    },
    {
        question: "Waar woont een otter het liefst?",
        answers: [
            "In de bergen",
            "In het bos",
            "Bij rivieren en meren",
            "In de woestijn"
        ],
        correct: 2,
        explanation: "Wist je dat? Otters leven graag bij schoon water, zoals rivieren en meren."
    },
    {
        question: "Waarom hebben sommige dieren een lange nek?",
        answers: [
            "Om te zwemmen",
            "Om te vliegen",
            "Om te slapen",
            "Om bij hoog voedsel te komen"
        ],
        correct: 3,
        explanation: "Wist je dat? Dieren zoals giraffen kunnen met hun lange nek bladeren eten die andere dieren niet kunnen bereiken."
    },
    {
        question: "Wat eet een ijsbeer het liefst?",
        answers: [
            "Bessen",
            "Vissen",
            "Vogels",
            "Zeehonden"
        ],
        correct: 3,
        explanation: "Wist je dat? IJsberen jagen vooral op zeehonden op het ijs."
    },
    {
        question: "Waarom leven sommige dieren in groepen?",
        answers: [
            "Voor bescherming",
            "Om samen eten te zoeken",
            "Om voor de jongen te zorgen",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? In groepen zijn dieren veiliger en kunnen ze samen voor hun jongen zorgen."
    },
    {
        question: "Wat is het voordeel van camouflage voor dieren?",
        answers: [
            "Ze kunnen sneller rennen",
            "Ze kunnen beter horen",
            "Ze kunnen hoger springen",
            "Ze vallen minder op voor vijanden"
        ],
        correct: 3,
        explanation: "Wist je dat? Camouflage helpt dieren om niet op te vallen in hun omgeving."
    },
    {
        question: "Waarom hebben sommige vogels zwemvliezen?",
        answers: [
            "Om sneller te lopen",
            "Om te vliegen",
            "Om te graven",
            "Om beter te kunnen zwemmen"
        ],
        correct: 3,
        explanation: "Wist je dat? Zwemvliezen helpen vogels zoals eenden om goed te zwemmen."
    },
    {
        question: "Waarom hebben ijsberen een dikke vacht en een vetlaag?",
        answers: [
            "Om sneller te zwemmen",
            "Om zich te verstoppen",
            "Om te kunnen duiken",
            "Om warm te blijven in de kou"
        ],
        correct: 3,
        explanation: "Wist je dat? De dikke vacht en vetlaag van een ijsbeer houden hem warm op de Noordpool."
    },
    {
        question: "Wat eet een eekhoorn het liefst?",
        answers: [
            "Bessen",
            "Insecten",
            "Gras",
            "Noten en zaden"
        ],
        correct: 3,
        explanation: "Wist je dat? Eekhoorns verzamelen noten en zaden en verstoppen die voor de winter."
    },
    {
        question: "Waarom zijn sommige vissen plat?",
        answers: [
            "Om sneller te zwemmen",
            "Om hoger te springen",
            "Om beter te ademen",
            "Om zich te verstoppen op de bodem"
        ],
        correct: 3,
        explanation: "Wist je dat? Platte vissen zoals de schol kunnen zich goed verstoppen op de zeebodem."
    },
    {
        question: "Wat is speciaal aan een kameleon?",
        answers: [
            "Kan vliegen",
            "Kan zwemmen",
            "Kan vuur spuwen",
            "Kan van kleur veranderen"
        ],
        correct: 3,
        explanation: "Wist je dat? Kameleons kunnen van kleur veranderen om zich te verstoppen of te laten zien hoe ze zich voelen."
    },
    {
        question: "Waarom hebben sommige vogels een kromme snavel?",
        answers: [
            "Om zaden te kraken",
            "Om nectar te drinken",
            "Om te graven",
            "Om vlees te scheuren"
        ],
        correct: 3,
        explanation: "Wist je dat? Roofvogels zoals arenden hebben een kromme snavel om vlees te scheuren."
    },
    {
        question: "Waar woont een bever?",
        answers: [
            "In de woestijn",
            "In de bergen",
            "Op de savanne",
            "Bij rivieren en meren"
        ],
        correct: 3,
        explanation: "Wist je dat? Bevers bouwen dammen en huisjes in rivieren en meren."
    },
    {
        question: "Waarom hebben sommige dieren stekels?",
        answers: [
            "Voor camouflage",
            "Om te zwemmen",
            "Om te vliegen",
            "Voor bescherming tegen vijanden"
        ],
        correct: 3,
        explanation: "Wist je dat? Stekels beschermen dieren zoals egels tegen aanvallen."
    },
    {
        question: "Wat eet een miereneter het liefst?",
        answers: [
            "Bladeren",
            "Bessen",
            "Vlees",
            "Mieren en termieten"
        ],
        correct: 3,
        explanation: "Wist je dat? Miereneters hebben een lange tong om mieren en termieten te vangen."
    },
    {
        question: "Waarom leven veel dieren in de savanne?",
        answers: [
            "Omdat er veel bomen zijn",
            "Omdat het er koud is",
            "Omdat er veel water is",
            "Omdat er veel gras en prooidieren zijn"
        ],
        correct: 3,
        explanation: "Wist je dat? Op de savanne is veel gras en leven veel dieren zoals zebra’s en leeuwen."
    },
    {
        question: "Hoe blijft een pinguïn warm?",
        answers: [
            "Met grote oren",
            "Met een lange staart",
            "Met dunne veren",
            "Met een dikke vetlaag"
        ],
        correct: 3,
        explanation: "Wist je dat? Pinguïns hebben een dikke vetlaag en dichte veren om warm te blijven."
    },
    {
        question: "Waarom hebben sommige vogels een lange snavel?",
        answers: [
            "Om te graven",
            "Om te vechten",
            "Om te vliegen",
            "Om diep in bloemen nectar te drinken"
        ],
        correct: 3,
        explanation: "Wist je dat? Vogels zoals de kolibrie hebben een lange snavel om nectar uit bloemen te halen."
    },
    {
        question: "Wat eten walvissen meestal?",
        answers: [
            "Zeewier",
            "Krabben",
            "Zeehonden",
            "Plankton en kleine visjes"
        ],
        correct: 3,
        explanation: "Wist je dat? Veel walvissen eten plankton en kleine visjes door water te filteren."
    },
    {
        question: "Waarom hebben sommige dieren een dikke huid?",
        answers: [
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen",
            "Voor bescherming tegen verwondingen en uitdroging"
        ],
        correct: 3,
        explanation: "Wist je dat? Dikke huid beschermt dieren zoals olifanten tegen verwondingen en uitdroging."
    },
    {
        question: "Waar leeft een lynx het liefst?",
        answers: [
            "In de woestijn",
            "Op de savanne",
            "Op de toendra",
            "In bergen en bossen"
        ],
        correct: 3,
        explanation: "Wist je dat? De lynx leeft vooral in bossen en bergachtige gebieden."
    },
    {
        question: "Waarom hebben sommige vogels felle kleuren?",
        answers: [
            "Om roofdieren af te schrikken",
            "Om zich te verstoppen",
            "Om te vliegen",
            "Om partners aan te trekken"
        ],
        correct: 3,
        explanation: "Wist je dat? Felle kleuren helpen vogels om een partner te vinden."
    },
    {
        question: "Wat eet een slak vooral?",
        answers: [
            "Insecten",
            "Vlees",
            "Zand",
            "Bladeren en planten"
        ],
        correct: 3,
        explanation: "Wist je dat? Slakken eten vooral bladeren, planten en soms fruit."
    },
    {
        question: "Waarom leven sommige dieren in holen onder de grond?",
        answers: [
            "Om te vliegen",
            "Om te zwemmen",
            "Om voedsel te zoeken",
            "Voor bescherming tegen vijanden en kou"
        ],
        correct: 3,
        explanation: "Wist je dat? Holen bieden dieren bescherming tegen vijanden en tegen kou of hitte."
    },
    {
        question: "Waarom hebben sommige vissen lichtgevende stukjes op hun lichaam?",
        answers: [
            "Om te communiceren",
            "Om te zwemmen",
            "Om te ademen",
            "Om prooien te lokken"
        ],
        correct: 3,
        explanation: "Wist je dat? Sommige diepzeevissen gebruiken licht om prooien te lokken of met elkaar te praten."
    },
    {
        question: "Wat is speciaal aan een kameel?",
        answers: [
            "Lange poten",
            "Grote oren",
            "Dunne huid",
            "Dikke lippen"
        ],
        correct: 3,
        explanation: "Wist je dat? Kamelen hebben dikke lippen zodat ze stekelige planten kunnen eten zonder zich te prikken."
    },
    {
        question: "Waarom leven veel dieren in het water?",
        answers: [
            "Omdat het er koel is",
            "Omdat ze daar kunnen schuilen",
            "Omdat ze niet kunnen vliegen",
            "Omdat er veel voedsel is"
        ],
        correct: 3,
        explanation: "Wist je dat? In het water is vaak veel voedsel te vinden voor vissen en andere dieren."
    },
    {
        question: "Waar leeft een sneeuwluipaard?",
        answers: [
            "Op de savanne",
            "In het regenwoud",
            "In de woestijn",
            "In de bergen"
        ],
        correct: 3,
        explanation: "Wist je dat? Sneeuwluipaarden leven in hoge bergen waar het koud is."
    },
    {
        question: "Waarom hebben sommige vogels een haakvormige snavel?",
        answers: [
            "Om insecten te vangen",
            "Om zaden te kraken",
            "Om nectar te drinken",
            "Om vlees te scheuren"
        ],
        correct: 3,
        explanation: "Wist je dat? Roofvogels zoals buizerds hebben een haakvormige snavel om vlees te scheuren."
    },
    {
        question: "Wat eet een mol het liefst?",
        answers: [
            "Wortels",
            "Bessen",
            "Bladeren",
            "Insecten en wormen"
        ],
        correct: 3,
        explanation: "Wist je dat? Mollen eten vooral insecten en wormen die ze onder de grond vinden."
    },
    {
        question: "Waarom hebben sommige dieren een dikke staart?",
        answers: [
            "Voor balans",
            "Voor camouflage",
            "Voor communicatie",
            "Voor opslag van vet"
        ],
        correct: 3,
        explanation: "Wist je dat? Sommige dieren slaan vet op in hun staart als reserve voor magere tijden."
    },
    {
        question: "Wat eet een specht vooral?",
        answers: [
            "Noten",
            "Bessen",
            "Bladeren",
            "Insecten onder de schors"
        ],
        correct: 3,
        explanation: "Wist je dat? Spechten zoeken insecten en larven onder de schors van bomen."
    },
    {
        question: "Waarom leven sommige dieren op grote hoogte?",
        answers: [
            "Omdat het er warmer is",
            "Omdat er meer voedsel is",
            "Omdat ze niet kunnen zwemmen",
            "Omdat er minder roofdieren zijn"
        ],
        correct: 3,
        explanation: "Wist je dat? Op grote hoogte zijn minder roofdieren, dus sommige dieren zijn daar veiliger."
    },
    {
        question: "Waar woont een otter het liefst?",
        answers: [
            "In de bergen",
            "In het bos",
            "In de woestijn",
            "Bij rivieren en meren"
        ],
        correct: 3,
        explanation: "Wist je dat? Otters leven graag bij schoon water, zoals rivieren en meren."
    },
    {
        question: "Welke vogel kan achteruit vliegen?",
        answers: [
            "Merel",
            "Mus",
            "Ekster",
            "Kolibrie"
        ],
        correct: 3,
        explanation: "Wist je dat? De kolibrie is de enige vogel die achteruit kan vliegen!"
    },
    {
        question: "Wat eet een mier vooral?",
        answers: [
            "Suiker en zoetigheid",
            "Vlees",
            "Gras",
            "Bladeren"
        ],
        correct: 0,
        explanation: "Wist je dat? Mieren zijn dol op suiker en zoeken vaak zoetigheid."
    },
    {
        question: "Waarom hebben sommige vissen schubben?",
        answers: [
            "Voor bescherming",
            "Om te vliegen",
            "Om te springen",
            "Om te zingen"
        ],
        correct: 0,
        explanation: "Wist je dat? Schubben beschermen vissen tegen verwondingen en uitdroging."
    },
    {
        question: "Waar leeft een ijsbeer?",
        answers: [
            "In de poolgebieden",
            "In het bos",
            "Op de savanne",
            "In de woestijn"
        ],
        correct: 0,
        explanation: "Wist je dat? IJsberen leven op het ijs van de Noordpool en jagen daar op zeehonden."
    },
    {
        question: "Wat doet een egel als hij bang is?",
        answers: [
            "Hij rolt zich op tot een bolletje",
            "Hij vliegt weg",
            "Hij klimt in een boom",
            "Hij springt in het water"
        ],
        correct: 0,
        explanation: "Wist je dat? Een egel rolt zich op zodat zijn stekels hem beschermen."
    },
    {
        question: "Waarom hebben sommige dieren een snor?",
        answers: [
            "Om beter te voelen",
            "Om te zwemmen",
            "Om te vliegen",
            "Om te eten"
        ],
        correct: 0,
        explanation: "Wist je dat? Snorharen helpen dieren zoals katten om te voelen waar ze zijn."
    },
    {
        question: "Wat eet een ree vooral?",
        answers: [
            "Bladeren",
            "Vlees",
            "Insecten",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Reeën eten vooral bladeren, jonge takken en knoppen van struiken en bomen."
    },
    {
        question: "Waarom hebben sommige vogels een gekleurde snavel?",
        answers: [
            "Om partners aan te trekken",
            "Om te vliegen",
            "Om te zwemmen",
            "Om te slapen"
        ],
        correct: 0,
        explanation: "Wist je dat? Felle kleuren helpen vogels om een partner te vinden."
    },
    {
        question: "Wat eet een das het liefst?",
        answers: [
            "Insecten en wormen",
            "Bessen",
            "Bladeren",
            "Vlees"
        ],
        correct: 0,
        explanation: "Wist je dat? Dassen eten vooral insecten, wormen en soms kleine dieren."
    },
    {
        question: "Waarom hebben sommige dieren een dikke huid?",
        answers: [
            "Voor bescherming",
            "Om sneller te rennen",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Dikke huid beschermt dieren zoals olifanten tegen verwondingen en uitdroging."
    },
    {
        question: "Wat eet een flamingo vooral?",
        answers: [
            "Kleine diertjes uit het water",
            "Gras",
            "Bessen",
            "Vissen"
        ],
        correct: 0,
        explanation: "Wist je dat? Flamingo’s eten kleine diertjes zoals garnalen, daardoor worden ze roze!"
    },
    {
        question: "Waarom leven sommige dieren in bomen?",
        answers: [
            "Om voedsel te zoeken",
            "Om te schuilen voor vijanden",
            "Om te slapen",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? Veel dieren leven in bomen voor voedsel, veiligheid en rust."
    },
    {
        question: "Wat eet een mol het liefst?",
        answers: [
            "Wormen en insecten",
            "Bessen",
            "Bladeren",
            "Gras"
        ],
        correct: 0,
        explanation: "Wist je dat? Mollen eten vooral wormen en insecten die ze onder de grond vinden."
    },
    {
        question: "Waarom hebben sommige dieren een dikke staart?",
        answers: [
            "Voor balans",
            "Voor opslag van vet",
            "Voor camouflage",
            "Voor communicatie"
        ],
        correct: 1,
        explanation: "Wist je dat? Sommige dieren slaan vet op in hun staart als reserve voor magere tijden."
    },
    {
        question: "Wat eet een specht vooral?",
        answers: [
            "Noten",
            "Insecten onder de schors",
            "Bessen",
            "Bladeren"
        ],
        correct: 1,
        explanation: "Wist je dat? Spechten zoeken insecten en larven onder de schors van bomen."
    },
    {
        question: "Waarom leven sommige dieren op grote hoogte?",
        answers: [
            "Omdat er minder roofdieren zijn",
            "Omdat het er warmer is",
            "Omdat er meer voedsel is",
            "Omdat ze niet kunnen zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Op grote hoogte zijn minder roofdieren, dus sommige dieren zijn daar veiliger."
    },
    {
        question: "Waar woont een otter het liefst?",
        answers: [
            "In de bergen",
            "In het bos",
            "Bij rivieren en meren",
            "In de woestijn"
        ],
        correct: 2,
        explanation: "Wist je dat? Otters leven graag bij schoon water, zoals rivieren en meren."
    },
    {
        question: "Waarom hebben sommige dieren een schutkleur?",
        answers: [
            "Om op te vallen",
            "Om zich te verstoppen voor vijanden",
            "Om sneller te rennen",
            "Om te vliegen"
        ],
        correct: 1,
        explanation: "Wist je dat? Schutkleuren helpen dieren om niet op te vallen in hun omgeving."
    },
    {
        question: "Wat eet een giraf het liefst?",
        answers: [
            "Gras",
            "Bladeren van hoge bomen",
            "Vruchten",
            "Schors"
        ],
        correct: 1,
        explanation: "Wist je dat? Giraffen eten vooral bladeren die hoog in de bomen groeien."
    },
    {
        question: "Waarom hebben sommige vogels een lange staart?",
        answers: [
            "Voor balans tijdens het vliegen",
            "Om te zwemmen",
            "Om te graven",
            "Om te vechten"
        ],
        correct: 0,
        explanation: "Wist je dat? Sommige vogels gebruiken hun lange staart voor balans en om indruk te maken op partners."
    },
    {
        question: "Wat eet een das vooral?",
        answers: [
            "Bessen",
            "Insecten en wormen",
            "Bladeren",
            "Vlees"
        ],
        correct: 1,
        explanation: "Wist je dat? Dassen eten vooral insecten, wormen en soms kleine dieren."
    },
    {
        question: "Waarom leven sommige dieren in bomen?",
        answers: [
            "Om voedsel te zoeken",
            "Om te schuilen voor vijanden",
            "Om te slapen",
            "Alle antwoorden zijn goed"
        ],
        correct: 3,
        explanation: "Wist je dat? Veel dieren leven in bomen voor voedsel, veiligheid en rust."
    },
    {
        question: "Waar woont een zeehond het liefst?",
        answers: [
            "In de woestijn",
            "In rivieren",
            "In koude zeeën en op het ijs",
            "In de bergen"
        ],
        correct: 2,
        explanation: "Wist je dat? Zeehonden leven vooral aan de kusten van koude zeeën en op het ijs."
    },
    {
        question: "Waarom hebben sommige dieren grote oren?",
        answers: [
            "Om beter te horen",
            "Om zichzelf koel te houden",
            "Om te vliegen",
            "Om te zwemmen"
        ],
        correct: 0,
        explanation: "Wist je dat? Grote oren helpen dieren zoals vossen en olifanten om beter te horen en warmte kwijt te raken."
    },
    {
        question: "Wat eet een kikker vooral?",
        answers: [
            "Bladeren",
            "Insecten",
            "Bessen",
            "Gras"
        ],
        correct: 1,
        explanation: "Wist je dat? Kikkers eten vooral insecten, spinnen en andere kleine dieren."
    },
    {
        question: "Waarom hebben sommige dieren zwemvliezen?",
        answers: [
            "Om beter te kunnen zwemmen",
            "Om sneller te lopen",
            "Om te vliegen",
            "Om te graven"
        ],
        correct: 0,
        explanation: "Wist je dat? Zwemvliezen helpen dieren zoals eenden en otters om snel door het water te bewegen."
    },
    {
        question: "Wat eet een ijsvogel het liefst?",
        answers: [
            "Bessen",
            "Vissen",
            "Bladeren",
            "Insecten"
        ],
        correct: 1,
        explanation: "Wist je dat? IJsvogels vangen kleine visjes door in het water te duiken vanaf een tak."
    },
    {
        question: "Waarom hebben sommige vogels een kromme snavel?",
        answers: [
            "Om zaden te kraken",
            "Om nectar te drinken",
            "Om vlees te scheuren",
            "Om te graven"
        ],
        correct: 2,
        explanation: "Wist je dat? Roofvogels zoals arenden hebben een kromme snavel om vlees van hun prooi te scheuren."
    },
    {
        question: "Wat eet een stekelvarken vooral?",
        answers: [
            "Schors en wortels",
            "Insecten",
            "Vlees",
            "Bessen"
        ],
        correct: 0,
        explanation: "Wist je dat? Stekelvarkens eten vooral schors, wortels en soms bladeren."
    },
    {
        question: "Waarom hebben sommige vogels een gebogen snavel?",
        answers: [
            "Om nectar uit bloemen te halen",
            "Om noten te kraken",
            "Om vlees te scheuren",
            "Om te zwemmen"
        ],
        correct: 1,
        explanation: "Wist je dat? Papegaaien gebruiken hun sterke, gebogen snavel om harde noten te kraken."
    },
    {
        question: "Waar leeft een sneeuwuil?",
        answers: [
            "In de bergen",
            "Op de toendra",
            "In het bos",
            "Op de savanne"
        ],
        correct: 1,
        explanation: "Wist je dat? Sneeuwuilen leven vooral op de toendra, waar ze goed gecamoufleerd zijn in de sneeuw."
    },                                                                            
];