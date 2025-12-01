const WORD_LISTS = {
  paises: [
    "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra",
    "Angola", "Antígua e Barbuda", "Arábia Saudita", "Argélia", "Argentina",
    "Arménia", "Austrália", "Áustria", "Azerbaijão", "Bahamas",
    "Bangladexe", "Barbados", "Barém", "Bélgica", "Belize",
    "Benim", "Bielorrússia", "Bolívia", "Bósnia e Herzegovina",
    "Botsuana", "Brasil", "Brunei", "Bulgária", "Burquina Faso",
    "Burúndi", "Butão", "Cabo Verde", "Camarões", "Camboja",
    "Canadá", "Catar", "Cazaquistão", "Chade", "Chile",
    "China", "Chipre", "Colômbia", "Comores", "Coreia do Norte",
    "Coreia do Sul", "Cosovo", "Costa do Marfim", "Costa Rica",
    "Croácia", "Cuba", "Dinamarca", "Dominica", "Egito",
    "Emirados Árabes Unidos", "Equador", "Eritreia", "Eslováquia",
    "Eslovénia", "Espanha", "Estados Unidos", "Estónia", "Eswatini",
    "Etiópia", "Fiji", "Filipinas", "Finlândia", "França",
    "Gabão", "Gâmbia", "Gana", "Geórgia", "Granada",
    "Grécia", "Guatemala", "Guiana", "Guiné", "Guiné Equatorial",
    "Guiné-Bissau", "Haiti", "Honduras", "Hungria", "Iémen",
    "Ilhas Marechal", "Ilhas Salomão", "Índia", "Indonésia",
    "Irão", "Iraque", "Irlanda", "Islândia", "Israel",
    "Itália", "Jamaica", "Japão", "Jibuti", "Jordânia",
    "Kiribati", "Kuwait", "Laus", "Lesoto", "Letónia",
    "Líbano", "Libéria", "Líbia", "Listenstaine", "Lituânia",
    "Luxemburgo", "Madagáscar", "Malásia", "Malávi", "Maldivas",
    "Mali", "Malta", "Marrocos", "Maurícia", "Mauritânia",
    "México", "Mianmar", "Micronésia", "Moçambique", "Moldávia",
    "Mónaco", "Mongólia", "Montenegro", "Namíbia", "Nauru",
    "Nepal", "Nicarágua", "Níger", "Nigéria", "Noruega",
    "Nova Zelândia", "Omã", "Países Baixos", "Palau", "Panamá",
    "Papua Nova Guiné", "Paquistão", "Paraguai", "Peru", "Polónia",
    "Portugal", "Quénia", "Quirguistão", "Reino Unido",
    "República Centro-Africana", "República Checa",
    "República Democrática do Congo", "República Dominicana",
    "Roménia", "Ruanda", "Rússia", "Salvador", "Samoa",
    "Santa Lúcia", "São Cristóvão e Neves", "São Marinho",
    "São Tomé e Príncipe", "São Vicente e Granadinas",
    "Seicheles", "Senegal", "Serra Leoa", "Sérvia", "Singapura",
    "Síria", "Somália", "Sri Lanca", "Sudão", "Sudão do Sul",
    "Suécia", "Suíça", "Suriname", "Tailândia", "Taiwan",
    "Tajiquistão", "Tanzânia", "Timor-Leste", "Togo", "Tonga",
    "Trindade e Tobago", "Tunísia", "Turcomenistão", "Turquia",
    "Tuvalu", "Ucrânia", "Uganda", "Uruguai", "Usbequistão",
    "Vanuatu", "Vaticano", "Venezuela", "Vietname", "Zâmbia",
    "Zimbábue", "Palestina"
  ],

  animais: [
    "Aardvark", "Abelha", "Abutre", "Acará", "Ação", "Afonso", "Aguia",
    "Aipim", "Ajantar", "Albatros", "Alce", "Alfaiate", "Algado",
    "Alpaca", "Anchova", "Andorinha", "Anémona", "Anta", "Antílope",
    "Aranha", "Arara", "Arenque", "Atum", "Avestruz",
    "Babuíno", "Baleia", "Barata", "Beija-flor", "Besouro", "Bicho-pau",
    "Binturong", "Bisão", "Bode", "Borboleta", "Búfalo", "Burro",
    "Cachalote", "Cágado", "Camaleão", "Camelo", "Canguru", "Canário",
    "Capivara", "Caracol", "Caranguejo", "Carpa", "Castor", "Cavalo",
    "Cavalo-marinho", "Cegonha", "Centopeia", "Chacal", "Chinchila",
    "Chimpanzé", "Cisne", "Coala", "Coelho", "Coruja", "Crocodilo",
    "Cuco", "Cutia",
    "Dálmata", "Dingo", "Dinossauro", "Doninha", "Dragão-de-komodo",
    "Dromedário", "Dugongo",
    "Elefante", "Emu", "Enguia", "Esquilo", "Estrela-do-mar",
    "Faisão", "Falcão", "Flamingo", "Foca", "Furão",
    "Gafanhoto", "Galo", "Gambá", "Ganso", "Garça", "Gato",
    "Gaivota", "Gavião", "Gecko", "Gibão", "Girafa", "Golfinho",
    "Gorila", "Grifo", "Guaxinim",
    "Hamster", "Harpia", "Hiena", "Hipopótamo",
    "Iaque", "Ibis", "Iguana", "Impala",
    "Jaguar", "Javali", "Joaninha", "Jiboia", "Jumenta",
    "Kakapo", "Kangaroo", "Kiwi", "Koala", "Kookaburra",
    "Lagarta", "Lagarto", "Lagosta", "Lampreia", "Lêmure",
    "Leão", "Leão-marinho", "Leopardo", "Libélula", "Lince", "Lobo",
    "Lontra", "Lula", "Lombriga",
    "Macaco", "Mamute", "Mandi", "Medusa", "Melro", "Mergulhão",
    "Minhoca", "Morcego", "Morsa", "Mosca", "Mosquito",
    "Naja", "Narval", "Nandú",
    "Onça", "Orangotango", "Orca", "Ostra", "Ouriço",
    "Panda", "Pantera", "Papagaio", "Pardal", "Pato", "Pavão",
    "Peixe-boi", "Pelicano", "Percevejo", "Periquito", "Peru",
    "Pinguim", "Piranha", "Polvo", "Pombo", "Pônei", "Porco",
    "Porco-espinho", "Pónei", "Potro",
    "Quati", "Quetzal", "Quokka", "Quol",
    "Rã", "Raposa", "Ratazana", "Rato", "Rena", "Rinoceronte",
    "Rouxinol",
    "Sabiá", "Sagui", "Salamandra", "Salmonete", "Sardinha",
    "Serpente", "Siri", "Suricate",
    "Tainha", "Tamanduá", "Tartaruga", "Tatu", "Texugo",
    "Tigre", "Tilápia", "Topeira", "Toninha", "Toupeira", "Truta",
    "Urso", "Urubu", "Ursinho-lavador",
    "Veado", "Verme", "Vespa", "Víbora",
    "Wallaby", "Wapiti", "Wombat",
    "Xaréu", "Xaréu-gigante", "Xexéu",
    "Yak", "Zaragateiro", "Zebra", "Zebu", "Zorrilho", "Zoomzoom"
  ],

  nomes: [
    "Aaron","Abel","Abner","Ada","Adalberto","Adelaide","Adélia","Adélio",
    "Adolfo","Adriana","Adriano","Ágata","Agostinho","Águeda","Aída","Aila",
    "Ailton","Aimee","Aires","Aisha","Alana","Alda","Aldo","Alejandro",
    "Alejandra","Aleksander","Alessandra","Alessandro","Alessia","Alex",
    "Alexa","Alexandra","Alexandre","Alexia","Alfredo","Alice","Alicia",
    "Aline","Alina","Alisa","Alison","Alisson","Alfredo","Alícia","Alina",
    "Allan","Alma","Aloísio","Alonso","Alonzo","Alto","Aluísio","Alvaro",
    "Álvaro","Amadeu","Amara","Amélia","Américo","Américo","Amora","Ana",
    "Anabela","Anastácia","Andreia","André","Andrea","Anderson","Andreza",
    "Andréia","Ángela","Angel","Ángela","Angélica","Angelo","Ângelo","Anita",
    "Anabela","Anselmo","Anthony","António","Antonia","Antónia","Aparecida",
    "Apex","Arlete","Armando","Arnaldo","Artur","Arthur","Ary","Asher","Astrid",
    "Atena","Aurea","Aurélia","Aurélio","Ava","Avelino","Ayana","Ayla","Aylan",
    "Bárbara","Basílio","Batista","Beatriz","Becca","Benedita","Benedito",
    "Benjamim","Benício","Benito","Bernadete","Bernardo","Berta","Betina",
    "Bianca","Biel","Branca","Brenda","Breno","Brian","Bruna","Bruno",
    "Caetano","Caio","Cailane","Camila","Camilla","Camilly","Candice",
    "Carina","Carla","Carlota","Carlos","Carminho","Carolina","Catarina",
    "Catarine","Cátia","Cecília","Celeste","Celina","Celso","César","Chantal",
    "Chris","Christian","Christopher","Cíntia","Clara","Clarice","Clarissa",
    "Cláudia","Claudio","Cláudio","Clemente","Cleo","Cloé","Constança","Cora",
    "Corina","Cristiano","Cristina","Cristóvão","Cynthia",
    "Dalila","Dália","Dalton","Damião","Dan","Dana","Daniel","Daniela",
    "Daniella","Daniele","Danielle","Danilo","Dante","Dara","Dário","Darlene",
    "David","Daiane","Deborah","Débora","Delmar","Demétrio","Denilson",
    "Dennis","Deolinda","Dercio","Derek","Diandra","Diana","Diane","Diego",
    "Dilan","Dimitri","Dina","Dinis","Dinora","Diogo","Diva","Djalma","Domenico",
    "Domingos","Donato","Dora","Doroteia","Duarte","Dulce",
    "Eduarda","Eduardo","Edvaldo","Edgar","Edmundo","Edna","Edson","Eduardo",
    "Elena","Elen","Eleonora","Eliana","Eliane","Elías","Elias","Elida","Eliezer",
    "Élio","Elis","Elisa","Elisabete","Elisabeth","Elise","Elisia","Elísio",
    "Eliza","Elizabeth","Ella","Ellen","Eloá","Emanuel","Emanuela","Emanuelly",
    "Emerson","Emília","Emilio","Emily","Emma","Enzo","Erick","Erika","Ernesto",
    "Esteban","Estela","Esther","Eva","Emanuel","Ester","Eusébio",
    "Fabiana","Fabiano","Fábio","Fabrícia","Fátima","Faustino","Federico",
    "Fernanda","Fernando","Filipe","Filipa","Filippo","Flávia","Flávio",
    "Flor","Florentino","Florência","Francisca","Francisco","Frank","Frederico",
    "Gabriel","Gabriela","Gabriele","Gael","Gaia","Gaspar","Géssica","Gene",
    "Genival","Geovana","Geovane","Georgia","Geórgia","Germano","Gil","Gilberto",
    "Gilda","Gino","Giovana","Giovanni","Giovanny","Giovanna","Gisela","Gisele",
    "Gislaine","Gonçalo","Graciela","Graciliano","Gregório","Guadalupe","Guido",
    "Guilherme","Gustavo",
    "Helena","Hélio","Henrique","Henry","Hugo","Humberto",
    "Ian","Iara","Iasmin","Icaro","Ícaro","Idalina","Ilda","Ilídio","Ilka",
    "Íngrid","Inês","Ingrid","Íris","Isa","Isabel","Isabela","Isabelle","Isadora",
    "Isaías","Isaac","Isaque","Isidro","Isis","Ísis","Israel","Itamar","Ivan",
    "Ivana","Ivone","Ivo",
    "Jacira","Jaci","Jack","Jackson","Jacqueline","Jade","Jaime","Jamilly",
    "Jane","Jéssica","Jessé","Joana","João","Joaquim","Joel","Jordan","Jordana",
    "Jorge","José","Josefa","Josefina","Josué","Joyce","Juarez","Juca","Júlia",
    "Juliana","Julián","Júlio","Julio","Junior",
    "Kai","Kaio","Kaleb","Karen","Karina","Karl","Karla","Kate","Katy","Kayla",
    "Kelly","Kevin","Kim","Kléber","Kris","Kristina","Kyara",
    "Lara","Larissa","Laís","Laila","Layla","Laura","Laureano","Laurentino",
    "Leandro","Leda","Lena","Léo","Leon","Leonardo","Leonel","Leonor","Letícia",
    "Lia","Liana","Lidiane","Lília","Liliana","Lilian","Lilian","Lino","Lisa",
    "Lisboa","Lissa","Livia","Lívia","Liz","Lola","Lorena","Lorenzo","Lourenço",
    "Lucas","Luciana","Luciano","Lucila","Lucília","Lucille","Lucrécia","Luísa",
    "Luís","Luna","Lúria","Lydia",
    "Madalena","Magali","Maiara","Maísa","Maira","Maitê","Malena","Manel",
    "Manoel","Manuela","Manuel","Mara","Marcela","Marcelina","Marcelo","Márcia",
    "Marco","Marcos","Margarida","Maria","Mário","Mariana","Marina","Marisa",
    "Mariza","Marlene","Marta","Matias","Matilde","Mateus","Maurício","Max",
    "Mayara","Maya","Melissa","Mel","Melina","Mendes","Miguel","Mila","Milena",
    "Mirela","Máximo",
    "Nadia","Nádia","Nair","Nairo","Nanda","Nando","Nara","Natan","Natanael",
    "Natalia","Nathalia","Nayara","Neide","Nelson","Nélson","Neusa","Nicole",
    "Nicolau","Nicolas","Nilson","Nilza","Nina","Noé","Noel","Norma","Norberto",
    "Nuno",
    "Olga","Olívia","Olivia","Omar","Onofre","Orlando","Oscar","Osvaldo",
    "Otávio",
    "Paola","Paolla","Paulo","Patrícia","Patrick","Pedro","Penélope",
    "Pérola","Pietra","Pietro","Pilar","Pio","Priscila",
    "Quésia","Quentin","Quintino",
    "Rafael","Rafaela","Rafaella","Raquel","Ramiro","Ramon","Raphael","Rebeca",
    "Regina","Renan","Renata","Renato","Ricardo","Rita","Roberta","Roberto",
    "Rodrigo","Roger","Romana","Romário","Romeu","Rosa","Rosana","Rosário",
    "Ruben","Rubens","Rui","Ruth",
    "Sabina","Sabrina","Sáfilo","Samanta","Samara","Samuel","Sandra","Sandro",
    "Sara","Sarah","Sávio","Sebastião","Serena","Sérgio","Severino","Sheila",
    "Sílvia","Silvana","Silvano","Simão","Simone","Sofia","Solange","Sophia",
    "Soraia","Sueli","Suellen",
    "Tadeu","Taís","Tainá","Tamara","Tânia","Tatiana","Telma","Teresa","Tiago",
    "Tito","Tomás","Tomas","Tristão",
    "Ubirajara","Ugo","Ulisses","Ursula",
    "Valdemar","Valentina","Valentim","Valéria","Valmir","Vânia","Vasco",
    "Velma","Vera","Verónica","Vicente","Victor","Vitória","Vítor","Vivian",
    "Viviana",
    "Wagner","Washington","Wesley","William","Willian",
    "Xande","Xandra","Xavier",
    "Yago","Yara","Yasmin","Yago","Yuri","Yolanda",
    "Zacarias","Zara","Zélia","Zenaida","Zico"
  ], 

  cidades: ["Lisboa","Porto","Coimbra","Braga","Aveiro","Faro","Évora","Viseu",
    "Guimarães","Setúbal","Viana do Castelo","Leiria","Funchal","Ponta Delgada",
    "Angra do Heroísmo","Sintra","Cascais","Oeiras","Almada","Barreiro","Seixal",
    "Amadora","Loures","Maia","Matosinhos","Gondomar","Vila Nova de Gaia",
    "Vila Real","Bragança","Beja","Castelo Branco","Guarda","Santarém",
    "Tomar","Abrantes","Torres Vedras","Caldas da Rainha","Peniche",
    "Figueira da Foz","Loulé","Portimão","Lagos","Silves","Tavira",
    "Vila do Conde","Póvoa de Varzim","Felgueiras","Amarante","Penafiel",
    "Chaves","Valença","Monção","Paredes","Espinho","Estarreja","Ovar",
    "Oliveira de Azeméis","São João da Madeira","Trofa","Vizela","Fafe",
    "Marco de Canaveses","Pombal","Ourém","Mafra","Ericeira","Montijo",
    "Palmela","Sesimbra","Alcochete","Sines","Santiago do Cacém",
    "Mirandela","Vila Flor","Peso da Régua","Lamego","Moita","Benavente",
    "Almeirim","Alpiarça","Azambuja","Coruche","Entroncamento","Golegã",
    "Nazaré","Batalha","Alcobaça","Marinha Grande","Fundão","Covilhã",
    "Belmonte","Idanha-a-Nova","Proença-a-Nova","Ansião","Figueiró dos Vinhos",
    "Arcos de Valdevez","Ponte da Barca","Ponte de Lima","Barcelos","Esposende",
    "Vila Verde","Terras de Bouro","Fafe","Cabeceiras de Basto","Mondim de Basto",
    "Vila Pouca de Aguiar","Murça","Alijó","Sabrosa","Boticas",
    "Castro Daire","Santa Comba Dão","Tondela","Mangualde","Nelas","Carregal do Sal",
    "Oliveira do Hospital","Arganil","Mortágua","Mealhada","Anadia","Cantanhede",
    "Montemor-o-Velho","Serpa","Moura","Vidigueira","Aljustrel","Castro Verde",
    "Almodôvar","Tavira","Albufeira","Quarteira","Madrid","Barcelona","Valência","Sevilha","Málaga","Bilbau","Zaragoza",
    "Granada","Córdoba","Alicante","Murcia","Toledo","Salamanca","León",
    "Valladolid","Santander","Oviedo","Gijón","Pamplona","Logroño","Tarragona",
    "Reus","Girona","Lugo","Badajoz","Cáceres","Almería","Jaén",

    "Paris","Marselha","Lyon","Nice","Toulouse","Bordéus","Nantes","Lille",
    "Strasbourg","Montpellier","Dijon","Grenoble","Saint-Étienne","Rennes",
    "Le Havre","Rouen","Clermont-Ferrand","Reims",

    "Londres","Manchester","Liverpool","Birmingham","Bristol","Leeds","Sheffield",
    "Newcastle","Nottingham","Leicester","Southampton","Portsmouth","Oxford",
    "Cambridge","Edimburgo","Glasgow","Cardiff","Belfast",

    "Roma","Milão","Florença","Veneza","Nápoles","Turim","Bolonha","Verona",
    "Génova","Pisa","Bari","Trieste","Palermo","Cagliari","Catania",

    "Berlim","Hamburgo","Munique","Colónia","Frankfurt","Düsseldorf","Stuttgart",
    "Dortmund","Leipzig","Dresden","Hannover","Nuremberga","Bremen",

    "Amesterdão","Roterdão","Haia","Utrecht","Eindhoven","Tilburg","Groningen",

    "Bruxelas","Antuérpia","Ghent","Bruges","Leuven",

    "Genebra","Zurique","Basileia","Lausana","Berna",

    "Viena","Salzburgo","Innsbruck","Graz","Linz","Moscovo","São Petersburgo","Kazan","Sochi","Novosibirsk","Yekaterinburg",
    "Rostov","Volgogrado","Kaliningrado",

    "Varsóvia","Cracóvia","Poznan","Wroclaw","Gdansk","Lublin",

    "Praga","Brno","Ostrava","Plzen",

    "Budapeste","Debrecen","Szeged",

    "Bucareste","Cluj-Napoca","Timișoara","Iasi","Constança",

    "Sofia","Plovdiv","Varna","Burgas",

    "Atenas","Thessaloniki",

    "Belgrado","Nis","Novi Sad",

    "Zagreb","Split","Dubrovnik","Rijeka",

    "Liubliana","Maribor",

    "Bratislava","Kosice",

    "Vilnius","Kaunas",

    "Riga","Daugavpils",

    "Tallinn","Tartu","Nova Iorque","Los Angeles","Chicago","Houston","Phoenix","Philadelphia",
    "San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville",
    "San Francisco","Columbus","Fort Worth","Indianapolis","Charlotte",
    "Detroit","Seattle","Denver","Boston","El Paso","Nashville","Memphis",
    "Portland","Oklahoma City","Las Vegas","Baltimore","Louisville",

    "Toronto","Vancouver","Montreal","Ottawa","Calgary","Edmonton","Quebec",
    "Winnipeg","Hamilton","Halifax","Victoria",

    "Cidade do México","Guadalajara","Monterrey","Tijuana","Puebla","Mérida",
    "León","Cancún","Toluca","Chihuahua",
    "São Paulo","Rio de Janeiro","Brasília","Salvador","Fortaleza","Belo Horizonte",
    "Curitiba","Recife","Porto Alegre","Goiânia","Belém","Manaus","Maceió","Natal",
    "João Pessoa","Aracaju","Florianópolis","Cuiabá","Campo Grande",

    "Buenos Aires","Córdoba","Rosário","Mendoza","La Plata",

    "Santiago","Valparaíso","Concepción","Antofagasta",

    "Lima","Cusco","Arequipa","Trujillo",

    "Bogotá","Medellín","Cali","Barranquilla","Cartagena",

    "Quito","Guayaquil","Cuenca",

    "Montevidéu","Punta del Este",

    "Caracas","Maracaibo","Valência","Barquisimeto","Maturín",

    "La Paz","Santa Cruz","Cochabamba",

    "Assunção","Encarnación","Ciudad del Este",
    "Cairo","Alexandria","Giza","Luxor","Aswan",
    "Casablanca","Rabat","Marrakech","Fez","Agadir",
    "Argel","Orã","Constantina",
    "Túnis","Sfax","Sousse",
    "Tripoli","Benghazi",
    "Joanesburgo","Pretória","Durban","Cidade do Cabo","Bloemfontein","Port Elizabeth",
    "Nairobi","Mombaça",
    "Lagos","Abuja","Kano","Ibadan",
    "Acra","Kumasi",
    "Dakar","Banjul",
    "Luanda","Lobito","Huambo","Benguela",
    "Maputo","Beira","Nampula",
    "Addis Ababa","Dire Dawa",
    "Kampala","Dar es Salaam","Harare","Kigali","Kinsasha","Lubumbashi",
    "Tóquio","Osaka","Quioto","Yokohama","Nagoya","Sapporo","Sendai",
    "Pequim","Xangai","Cantão","Shenzhen","Hong Kong","Chongqing","Tianjin",
    "Seul","Busan","Daegu",
    "Taipé","Kaohsiung",
    "Banguecoque","Chiang Mai",
    "Hanoí","Ho Chi Minh","Da Nang",
    "Jacarta","Surabaya","Medan","Bandung",
    "Kuala Lumpur","Penang",
    "Manila","Cebu","Davao",
    "Nova Deli","Mumbai","Chennai","Bangalore","Hyderabad","Goa","Pune",
    "Islamabad","Karachi","Lahore",
    "Doha","Riad","Jidá","Abu Dhabi","Dubai",
    "Tel Aviv","Jerusalém","Amã","Beirute",
    "Astana","Almaty","Tashkent","Bishkek",
    "Colombo","Male","Sydney","Melbourne","Brisbane","Perth","Adelaide","Canberra","Hobart",
    "Auckland","Wellington","Christchurch","Hamilton","Queenstown","Suva",
    "Honolulu"  
    ],

    pecas_de_roupa: [
    "Camisola","Camisa","T-shirt","Top","Blusa","Polo","Sweater","Sweatshirt",
    "Pulôver","Colete","Cardigan","Casaco","Blusão","Anoraque","Sobretudo",
    "Trench coat","Impermeável","Blazer","Fato de treino (parte de cima)",
    "Calças","Calções","Jeans","Leggings","Saia","Minissaia","Saia comprida",
    "Bermudas","Fato de treino (calças)","Calças de ganga","Calças de fato",
    "Meias-calças","Calças cargo","Jardineiras",
    "Vestido","Macacão","Macaquinho","Fato","Fato de cerimónia","Fato-macaco",
    "Fato de banho","Biquíni","Trikini",
    "Cuecas","Boxers","Fio dental","Sutiã","Soutien desportivo",
    "Camisola interior","Body","Robe","Pijama","Camisola de dormir","Penhoar",
    "Casaco de inverno","Casaco de malha","Casaco acolchoado","Parka",
    "Casaco de pêlo","Sobretudo longo","Gola alta","Cachecol","Luvas","Gorro",
    "Earmuffs","Meias grossas","Botas de neve",
    "Sapatos","Botas","Botins","Sapatilhas","Ténis","Chinelos","Sandálias",
    "Sapatos de salto alto","Sabrinas","Sapatos formais","Mocassins","Crocs",
    "Chuteiras","Pantufas",
    "Cinto","Chapéu","Boné","Gorro","Boina","Lenço","Écharpe","Gravata",
    "Laço","Suspensórios","Óculos de sol","Luvas","Mangas de compressão",
    "Bata","Jaleca","Avental","Uniforme","Dólmã","Beca","Quimono","Saree",
    "Véu","Túnica","Corpetes","Colete refletor","Equipamento de futebol",
    "Equipamento de ciclismo","Fato de esqui","Fato anti-chuva","Fato de neoprene"
  ],

  marcas: [
    // Moda
    "Nike","Adidas","Puma","Reebok","New Balance","Converse","Vans","Lacoste",
    "Levi’s","Zara","Bershka","Pull&Bear","Stradivarius","Massimo Dutti",
    "Mango","H&M","Primark","Springfield","Ralph Lauren","Tommy Hilfiger",
    "Calvin Klein","Guess","Hugo Boss","Uniqlo","North Face","Columbia",
    "Oakley","Timberland","Fila","Ellesse",

    // Luxo
    "Gucci","Prada","Louis Vuitton","Balenciaga","Chanel","Dior",
    "Yves Saint Laurent","Versace","Valentino","Hermès","Burberry",
    "Fendi","Givenchy",

    // Desporto
    "Asics","Mizuno","Under Armour","Wilson","Spalding","Umbro","Kappa","Joma",

    // Tecnologia
    "Apple","Samsung","Sony","Microsoft","Lenovo","Dell","HP","Asus","Acer",
    "Xiaomi","Huawei","LG","Google","Nvidia","Intel","AMD","PlayStation","Xbox",

    // Automóveis
    "Toyota","Honda","BMW","Mercedes","Audi","Volkswagen","Peugeot","Renault",
    "Citroën","Volvo","Kia","Hyundai","Nissan","Ferrari","Lamborghini",
    "Maserati","Porsche","Bugatti","Tesla","Ford","Chevrolet",

    // Alimentação
    "McDonald’s","Burger King","KFC","Pizza Hut","Domino’s","Starbucks","Nestlé",
    "Coca-Cola","Pepsi","Red Bull","Oreo","Kellogg’s","Lipton","Lay’s",
    "Nutella","Milka","Lindt",

    // Portuguesas
    "Continente","Pingo Doce","Minipreço","Delta Cafés","Meo","NOS","Vodafone",
    "Sagres","Super Bock","Galp","EDP","TAP Air Portugal","Parfois","Salsa",
    "Sacoor",

    // Cosmética
    "Nivea","Garnier","Maybelline","L’Oréal","Sephora","Avon","O Boticário",
    "Rituals","MAC","Kiko Milano","Clinique","Estée Lauder",

    // Cultura Pop / Gaming
    "Nintendo","Ubisoft","EA Sports","Epic Games","Rockstar Games","Bandai",
    "Funko"
  ],

  cores: [
    "Vermelho","Azul","Verde","Amarelo","Laranja","Roxo","Rosa","Castanho",
    "Preto","Branco","Cinzento","Bege",
    "Bordô","Vinho","Coral","Salmão","Turquesa","Ciano","Magenta","Lavanda",
    "Lilás","Fúcsia","Mostarda","Azeitona","Pistácio","Esmeralda","Safira",
    "Azul-marinho","Azul-celeste","Azul-petróleo","Azul-cobalto","Azul-bebé",
    "Verde-água","Verde-menta","Verde-musgo","Verde-garrafa",
    "Amarelo-torrado","Terracota","Caramelo","Chocolate","Cobre","Violeta",
    "Ocre","Âmbar",
    "Rosa-pastel","Azul-pastel","Verde-pastel","Amarelo-pastel","Lilás-pastel",
    "Pêssego","Creme","Marfim",
    "Preto carvão","Cinzento-escuro","Verde-escuro","Azul-escuro","Borgonha",
    "Castanho-escuro",
    "Dourado","Prateado","Bronze","Cobre","Platina",
    "Lima","Jade","Granito","Areia","Terra","Café","Mel","Feno"
  ],

  comidas: [
    // Carnes
    "Frango","Peru","Carne de vaca","Carne de porco","Borrego","Cabrito","Vitela",
    "Bife","Entrecosto","Hambúrguer","Chouriço","Presunto","Salsicha","Bacon",
    "Costeleta","Alheira","Morcela",

    // Peixes e Marisco
    "Bacalhau","Sardinha","Atum","Salmão","Dourada","Robalo","Carapau","Polvo",
    "Lula","Camarão","Lagosta","Sapateira","Amêijoas","Berbigão","Mexilhão",

    // Comida Portuguesa
    "Bacalhau à Brás","Bacalhau com natas","Arroz de pato","Arroz de marisco",
    "Arroz de cabidela","Feijoada","Cozido à portuguesa","Caldo verde","Açorda",
    "Migas","Alheira na brasa","Francesinha","Tripas à moda do Porto","Rojões",
    "Polvo à lagareiro","Leitão","Cataplana","Pastéis de bacalhau","Caracóis",

    // Massas e Internacionais
    "Pizza","Esparguete","Lasanha","Ravioli","Tagliatelle","Penne","Carbonara",
    "Boloñesa","Sushi","Tacos","Burrito","Kebab","Curry","Pad Thai","Ramen",
    "Dim sum","Falafel",

    // Laticínios
    "Queijo","Leite","Iogurte","Manteiga","Natas","Requeijão","Queijo fresco",
    "Queijo da serra",

    // Pão & Padaria
    "Pão","Baguete","Broa","Pão de forma","Croissant","Bolo do caco","Focaccia",
    "Brioche",

    // Doces
    "Pastel de nata","Bola de Berlim","Arroz doce","Leite creme","Pudim","Mousse",
    "Tarte de maçã","Cheesecake","Gelado","Bolo de chocolate","Pão de ló",
    "Encharcada","Toucinho do céu",

    // Frutas
    "Maçã","Banana","Laranja","Pera","Uva","Melão","Melancia","Morango","Kiwi",
    "Pêssego","Manga","Abacaxi","Ameixa","Figo","Côco",

    // Legumes
    "Batata","Cenoura","Alface","Tomate","Brócolos","Couve","Espinafres",
    "Cebola","Alho","Ervilhas","Feijão","Abóbora","Curgete","Beringela",

    // Sopas
    "Sopa de legumes","Sopa de peixe","Canja","Sopa de cebola","Creme de cenoura",
    "Creme de ervilhas","Gaspacho",

    // Snacks
    "Batatas fritas","Amendoins","Pistácios","Pipocas","Chocolate","Bolachas",
    "Sandes","Tosta mista","Cachorro quente",

    // Bebidas
    "Água","Sumol","Coca-Cola","Ice tea","Limonada","Sumo de laranja","Vinho tinto",
    "Vinho branco","Cerveja","Café","Chá"
  ],

  corpo: [
    // Cabeça e rosto
    "Cabeça","Cabelo","Testa","Sobrancelhas","Pestanas","Olhos","Pálpebras",
    "Nariz","Lábios","Boca","Língua","Dentes","Gengivas","Orelhas",
    "Maçãs do rosto","Bochechas","Queixo","Mandíbula","Nuca","Pescoço",
    "Garganta",

    // Interior da cabeça
    "Cérebro","Crânio","Amígdalas",

    // Tronco
    "Peito","Mamilos","Costelas","Esterno","Costas","Coluna","Abdómen",
    "Barriga","Umbigo","Anca","Quadris","Bacia","Nádegas","Rabo","Glúteos",

    // Órgãos internos
    "Coração","Pulmões","Estômago","Fígado","Intestinos","Rins","Pâncreas",
    "Baço","Diafragma","Bexiga",

    // Braços e mãos
    "Ombro","Axila","Braço","Bíceps","Tríceps","Antebraço","Cotovelo","Pulso",
    "Palma da mão","Mão","Polegar","Indicador","Médio","Anelar","Mindinho",
    "Unhas","Cutículas",

    // Pernas e pés
    "Perna","Coxa","Gémeos","Joelho","Rótula","Canela","Tornozelo","Calcanhar",
    "Pé","Planta do pé","Dedo do pé","Unhas do pé",

    // Ossos
    "Fémur","Tíbia","Fíbula","Úmero","Rádio","Ulna","Clavícula","Vértebra",
    "Sacro","Crânio",

    // Outros
    "Pele","Poros","Veias","Articulações","Tendões","Cartilagem"
  ],

  objetos: [
    // Casa
    "Mesa","Cadeira","Sofá","Poltrona","Almofada","Tapete","Lareira","Estante",
    "Candeeiro","Cortina","Janela","Porta","Moldura","Vaso","Planta",
    "Relógio de parede","Espelho","Cesto","Roupeiro","Cómoda","Gaveta","Cabide",
    "Varão","Ventoinha","Aquecedor",

    // Escritório / Escola
    "Lápis","Caneta","Borracha","Régua","Apontador","Caderno","Agenda","Quadro",
    "Marcador","Post-it","Livro","Dossier","Agrafador","Perfurador","Calculadora",
    "Clips","Envelope","Tesoura",

    // Cozinha
    "Prato","Taça","Copo","Colher","Garfo","Faca","Tacho","Panela","Frigideira",
    "Espátula","Tábua de cortar","Garrafa","Jarro","Bule","Torradeira",
    "Liquidificadora","Batedeira","Micro-ondas","Frigorífico","Congelador",
    "Forno",

    // Casa de banho
    "Escova de dentes","Pasta de dentes","Sabonete","Shampoo","Condicionador",
    "Creme","Toalha","Chuveiro","Pente","Lâmina","Papel higiénico","Algodão",
    "Gel de banho","Secador de cabelo",

    // Ferramentas
    "Martelo","Chave de fendas","Chave inglesa","Serra","Broca","Berbequim",
    "Chave de roquetes","Fita métrica","Pregos","Parafusos","Alicate","X-ato",
    "Lima","Nível",

    // Tecnologia
    "Telemóvel","Tablet","Carregador","Auscultadores","Computador","Rato",
    "Teclado","Monitor","Impressora","Pen USB","Disco externo","Comando",
    "Powerbank","Coluna","Televisão",

    // Objetos pessoais
    "Carteira","Chaves","Mochila","Mala","Óculos","Guarda-chuva","Chapéu",
    "Relógio","Pulseira","Anel","Colar",

    // Brinquedos
    "Bola","Carrinho","Boneco","Puzzle","Cubo mágico","Dominó","Legos","Yo-yo",
    "Triciclo","Balão",

    // Exterior
    "Regador","Pá","Ancinho","Mangueira","Barbecue","Bicicleta","Trotinete",
    "Patins","Tenda","Lanterna","Grelhador","Banco de jardim",

    // Desporto
    "Bola de futebol","Bola de basquete","Raquete","Capacete","Joelheiras",
    "Cotoveleiras","Saco de desporto","Haltere","Corda de saltar"
  ]
};

function startsWithLetter(word, letter) {
  if (!word || !letter) return false;
  const w = normalizarPalavra(word);
  const l = normalizarPalavra(letter)[0];
  return w[0] === l;
}

function isValidWordForCategoryAndLetter(category, word, letter) {
  return isValidWord(category, word) && startsWithLetter(word, letter);
}


function normalizarPalavra(str) {
  return str
    .normalize("NFD")                     // separa acentos
    .replace(/[\u0300-\u036f]/g, "")      // remove acentos
    .toLowerCase()
    .trim();
}

function isValidWord(category, word) {
  if (!word) return false;
  const lista = WORD_LISTS[category];
  if (!lista) return false;

  const wNorm = normalizarPalavra(word);

  return lista.some(item => {
    const iNorm = normalizarPalavra(item);

    if (iNorm === wNorm) return true;

    if (wNorm.endsWith("s") && iNorm === wNorm.slice(0, -1)) {
      return true;
    }

    if (iNorm.endsWith("s") && iNorm.slice(0, -1) === wNorm) {
      return true;
    }

    return false;
  });
}


function isValidWordForCategoryAndLetter(categoryKey, word, letter) {
  return isValidWord(categoryKey, word) && startsWithLetter(word, letter);
}

