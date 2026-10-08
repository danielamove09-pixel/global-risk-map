const map = L.map('map').setView([40.4168, -3.7038], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
  .then(response => response.json())
  .then(data => {

  const countryData = {

  "Albania": {
    population: "2.7 million",
    gdp: "$28 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "3,000",
    conflicts: "0",
    risk: 30
  },

  "Germany": {
    population: "83.5 million",
    gdp: "$5,450 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈1,500",
    refugees: "2,700,000",
    conflicts: "0",
    risk: 0
  },

  "Andorra": {
    population: "82,000",
    gdp: "$4.3 billion",
    conflictIDPs: "0",
    disasterIDPs: "0",
    refugees: "<100",
    conflicts: "0",
    risk: 0
  },

  "Armenia": {
    population: "3.1 million",
    gdp: "$31 billion",
    conflictIDPs: "<1,000",
    disasterIDPs: "<100",
    refugees: "120,000",
    conflicts: "0",
    risk: 30
  },

  "Austria": {
    population: "9.2 million",
    gdp: "$624 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈300",
    refugees: "250,000",
    conflicts: "0",
    risk: 0
  },

  "Azerbaijan": {
    population: "10.5 million",
    gdp: "$87 billion",
    conflictIDPs: "<5,000",
    disasterIDPs: "<100",
    refugees: "8,000",
    conflicts: "0",
    risk: 35
  },

  "Belgium": {
    population: "11.9 million",
    gdp: "$777 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈200",
    refugees: "160,000",
    conflicts: "0",
    risk: 5
  },

  "Belarus": {
    population: "9.1 million",
    gdp: "$86 billion",
    conflictIDPs: "<1,000",
    disasterIDPs: "<100",
    refugees: "25,000",
    conflicts: "0",
    risk: 40
  },

  "Bosnia and Herzegovina": {
    population: "3.1 million",
    gdp: "$39 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈500",
    refugees: "2,000",
    conflicts: "0",
    risk: 30
  },

  "Bulgaria": {
    population: "6.4 million",
    gdp: "$126 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈1,000",
    refugees: "75,000",
    conflicts: "0",
    risk: 15
  },

  "Cyprus": {
    population: "1.4 million",
    gdp: "$40 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈300",
    refugees: "35,000",
    conflicts: "0",
    risk: 10
  },

  "Croatia": {
    population: "3.8 million",
    gdp: "$96 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈500",
    refugees: "2,000",
    conflicts: "0",
    risk: 15
  },

  "Denmark": {
    population: "6.0 million",
    gdp: "$504 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "75,000",
    conflicts: "0",
    risk: 0
  },

  "Slovakia": {
    population: "5.4 million",
    gdp: "$154 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "40,000",
    conflicts: "0",
    risk: 10
  },

  "Slovenia": {
    population: "2.1 million",
    gdp: "$79 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈700",
    refugees: "12,000",
    conflicts: "0",
    risk: 20
  },

  "Spain": {
    population: "50.3 million",
    gdp: "$2,090 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈5,000",
    refugees: "310,000",
    conflicts: "0",
    risk: 20
  },

  "Estonia": {
    population: "1.4 million",
    gdp: "$46 billion",
    conflictIDPs: "0",
    disasterIDPs: "0",
    refugees: "45,000",
    conflicts: "0",
    risk: 0
  },

  "Finland": {
    population: "5.6 million",
    gdp: "$338 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "70,000",
    conflicts: "0",
    risk: 0
  },

  "France": {
    population: "69.0 million",
    gdp: "$3,600 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈7,000",
    refugees: "650,000",
    conflicts: "0",
    risk: 15
  },

  "Georgia": {
    population: "3.7 million",
    gdp: "$41 billion",
    conflictIDPs: "300,000",
    disasterIDPs: "≈300",
    refugees: "7,000",
    conflicts: "0",
    risk: 30
  },

  "Greece": {
    population: "10.3 million",
    gdp: "$267 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈3,000",
    refugees: "150,000",
    conflicts: "0",
    risk: 20
  },

  "Hungary": {
    population: "9.5 million",
    gdp: "$247 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "40,000",
    conflicts: "0",
    risk: 20
  },

  "Ireland": {
    population: "5.6 million",
    gdp: "$779 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "110,000",
    conflicts: "0",
    risk: 0
  },

  "Iceland": {
    population: "405,000",
    gdp: "$37 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈1,000",
    refugees: "6,000",
    conflicts: "0",
    risk: 0
  },

  "Italy": {
    population: "58.6 million",
    gdp: "$2,740 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈10,000",
    refugees: "370,000",
    conflicts: "0",
    risk: 20
  },

  "Latvia": {
    population: "1.9 million",
    gdp: "$47 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "50,000",
    conflicts: "0",
    risk: 10
  },

  "Liechtenstein": {
    population: "40,000",
    gdp: "$8 billion",
    conflictIDPs: "0",
    disasterIDPs: "0",
    refugees: "<100",
    conflicts: "0",
    risk: 0
  },

  "Lithuania": {
    population: "2.9 million",
    gdp: "$89 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "90,000",
    conflicts: "0",
    risk: 5
  },

  "Luxembourg": {
    population: "690,000",
    gdp: "$102 billion",
    conflictIDPs: "0",
    disasterIDPs: "0",
    refugees: "10,000",
    conflicts: "0",
    risk: 0
  },

  "Malta": {
    population: "575,000",
    gdp: "$28 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "12,000",
    conflicts: "0",
    risk: 10
  },

  "Moldova": {
    population: "2.5 million",
    gdp: "$19 billion",
    conflictIDPs: "20,000",
    disasterIDPs: "≈200",
    refugees: "130,000",
    conflicts: "0",
    risk: 25
  },

  "Monaco": {
    population: "39,000",
    gdp: "$9 billion",
    conflictIDPs: "0",
    disasterIDPs: "0",
    refugees: "<100",
    conflicts: "0",
    risk: 0
  },

  "Montenegro": {
    population: "620,000",
    gdp: "$8 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "2,000",
    conflicts: "0",
    risk: 25
  },

  "Netherlands": {
    population: "18.1 million",
    gdp: "$1,450 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈300",
    refugees: "290,000",
    conflicts: "0",
    risk: 0
  },

  "Norway": {
    population: "5.7 million",
    gdp: "$599 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈100",
    refugees: "90,000",
    conflicts: "0",
    risk: 0
  },

  "Poland": {
    population: "36.2 million",
    gdp: "$1,130 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈200",
    refugees: "1,100,000",
    conflicts: "0",
    risk: 10
  },

  "Portugal": {
    population: "10.7 million",
    gdp: "$381 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈2,000",
    refugees: "70,000",
    conflicts: "0",
    risk: 5
  },

  "United Kingdom": {
    population: "69.8 million",
    gdp: "$4,260 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈2,000",
    refugees: "720,000",
    conflicts: "0",
    risk: 10
  },

  "Czechia": {
    population: "10.9 million",
    gdp: "$433 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "380,000",
    conflicts: "0",
    risk: 0
  },

  "Romania": {
    population: "18.9 million",
    gdp: "$481 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈1,500",
    refugees: "180,000",
    conflicts: "0",
    risk: 35
  },

  "Russia": {
    population: "143.8 million",
    gdp: "$2,660 billion",
    conflictIDPs: "1,800,000",
    disasterIDPs: "≈15,000",
    refugees: "250,000",
    conflicts: "1",
    risk: 70
  },

  "San Marino": {
    population: "34,000",
    gdp: "$2.6 billion",
    conflictIDPs: "0",
    disasterIDPs: "0",
    refugees: "0",
    conflicts: "0",
    risk: 20
  },

  "Serbia": {
    population: "6.6 million",
    gdp: "$98 billion",
    conflictIDPs: "<1,000",
    disasterIDPs: "≈300",
    refugees: "25,000",
    conflicts: "0",
    risk: 15
  },

  "Sweden": {
    population: "10.7 million",
    gdp: "$760 billion",
    conflictIDPs: "0",
    disasterIDPs: "≈300",
    refugees: "300,000",
    conflicts: "0",
    risk: 0
  },

  "Switzerland": {
    population: "9.1 million",
    gdp: "$1,150 billion",
    conflictIDPs: "0",
    disasterIDPs: "<100",
    refugees: "180,000",
    conflicts: "0",
    risk: 45
  },

  "Türkiye": {
    population: "86.7 million",
    gdp: "$1,540 billion",
    conflictIDPs: "15,000",
    disasterIDPs: "≈30,000",
    refugees: "3,100,000",
    conflicts: "1",
    risk: 45
  },

  "Ukraine": {
    population: "33.5 million",
    gdp: "$205 billion",
    conflictIDPs: "3,700,000",
    disasterIDPs: "≈10,000",
    refugees: "15,000",
    conflicts: "1",
    risk: 80
  },

  "Vatican City": {
    population: "764",
    gdp: "—",
    conflictIDPs: "0",
    disasterIDPs: "0",
    refugees: "0",
    conflicts: "0",
    risk: 30
  },
    "Canada": {
  population: "42.1 million",
  gdp: "$2,450 billion",
  conflictIDPs: "0",
  disasterIDPs: "≈130 people displaced at the end of 2025; ≈72,000 new displacements during 2025",
  refugees: "420,000",
  conflicts: "0",
  risk: 5
},
    
  "United States of America": {
  population: "343.6 million",
  gdp: "$31,700 billion",
  conflictIDPs: "0",
  disasterIDPs: "≈68,000 people displaced at the end of 2025; ≈11.0 million new displacements during 2025",
  refugees: "3,100,000",
  conflicts: "0",
  risk: 55
  },
    "Antigua and Barbuda": {
  population: "≈0.10 million",
  gdp: "≈$2.1 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 10
},

"Argentina": {
  population: "47.95 million",
  gdp: "≈$684 billion",
  conflictIDPs: "0",
  disasterIDPs: "820",
  refugees: "4,941",
  conflicts: "0",
  risk: 25
},

"Bahamas": {
  population: "≈0.41 million",
  gdp: "≈$15 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "10",
  conflicts: "0",
  risk: 15
},

"Barbados": {
  population: "≈0.28 million",
  gdp: "≈$7 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "5",
  conflicts: "0",
  risk: 10
},

"Belize": {
  population: "≈0.42 million",
  gdp: "≈$3 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "347",
  conflicts: "0",
  risk: 20
},

"Bolivia": {
  population: "≈12.7 million",
  gdp: "≈$52 billion",
  conflictIDPs: "0",
  disasterIDPs: "9,300",
  refugees: "≈1,100",
  conflicts: "0",
  risk: 40
},

"Brazil": {
  population: "214.08 million",
  gdp: "≈$2,635 billion",
  conflictIDPs: "19,000",
  disasterIDPs: "—",
  refugees: "162,738",
  conflicts: "3",
  risk: 50
},

"Chile": {
  population: "20.15 million",
  gdp: "≈$408 billion",
  conflictIDPs: "0",
  disasterIDPs: "180",
  refugees: "5,358",
  conflicts: "0",
  risk: 10
},

"Colombia": {
  population: "53.40 million",
  gdp: "≈$539 billion",
  conflictIDPs: "7,211,000",
  disasterIDPs: "—",
  refugees: "1,473",
  conflicts: "4",
  risk: 55
},

"Costa Rica": {
  population: "5.42 million",
  gdp: "≈$110 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈1,000",
  conflicts: "0",
  risk: 15
},

"Cuba": {
  population: "≈10.9 million",
  gdp: "—",
  conflictIDPs: "0",
  disasterIDPs: "2,700",
  refugees: "≈25,000",
  conflicts: "0",
  risk: 35
},

"Dominica": {
  population: "≈0.07 million",
  gdp: "≈$0.8 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 10
},

"Dominican Republic": {
  population: "10.98 million",
  gdp: "$136.15 billion",
  conflictIDPs: "0",
  disasterIDPs: "54",
  refugees: "20",
  conflicts: "0",
  risk: 30
},

"Ecuador": {
  population: "≈18.4 million",
  gdp: "≈$133 billion",
  conflictIDPs: "316,000",
  disasterIDPs: "—",
  refugees: "26,428",
  conflicts: "2",
  risk: 50
},

"El Salvador": {
  population: "≈6.4 million",
  gdp: "≈$37 billion",
  conflictIDPs: "61,000",
  disasterIDPs: "—",
  refugees: "182",
  conflicts: "1",
  risk: 50
},

"Grenada": {
  population: "≈0.12 million",
  gdp: "≈$1.4 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 15
},

"Guatemala": {
  population: "≈18.7 million",
  gdp: "≈$116 billion",
  conflictIDPs: "573,000",
  disasterIDPs: "—",
  refugees: "≈1,000",
  conflicts: "1",
  risk: 55
},

"Guyana": {
  population: "≈1.02 million",
  gdp: "≈$34 billion",
  conflictIDPs: "0",
  disasterIDPs: "21",
  refugees: "≈340",
  conflicts: "0",
  risk: 25
},

"Haiti": {
  population: "≈11.9 million",
  gdp: "≈$26 billion",
  conflictIDPs: "1,431,000",
  disasterIDPs: "17,000",
  refugees: "68,709 (+111,993 similar situation)",
  conflicts: "1",
  risk: 85
},

"Honduras": {
  population: "≈10.9 million",
  gdp: "≈$38 billion",
  conflictIDPs: "101,000",
  disasterIDPs: "—",
  refugees: "≈1,000",
  conflicts: "1",
  risk: 60
},

"Jamaica": {
  population: "≈2.8 million",
  gdp: "≈$23 billion",
  conflictIDPs: "0",
  disasterIDPs: "279,000",
  refugees: "≈1,000",
  conflicts: "1",
  risk: 50
},

"Saint Kitts and Nevis": {
  population: "≈0.05 million",
  gdp: "≈$1.2 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 15
},

"Saint Lucia": {
  population: "≈0.18 million",
  gdp: "≈$2.4 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 15
},

"Nicaragua": {
  population: "6.81 million",
  gdp: "≈$24 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "1",
  risk: 60
},

"Panama": {
  population: "≈4.6 million",
  gdp: "≈$92 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "375",
  conflicts: "0",
  risk: 15
},

"Paraguay": {
  population: "≈7.0 million",
  gdp: "≈$50 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "162",
  conflicts: "1",
  risk: 45
},

"Peru": {
  population: "≈34.6 million",
  gdp: "≈$301 billion",
  conflictIDPs: "82,000",
  disasterIDPs: "5,900",
  refugees: "≈5,000",
  conflicts: "1",
  risk: 50
},

"Saint Vincent and the Grenadines": {
  population: "≈0.10 million",
  gdp: "≈$1.2 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 10
},

"Suriname": {
  population: "≈0.64 million",
  gdp: "≈$5 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 15
},

"Trinidad and Tobago": {
  population: "≈1.53 million",
  gdp: "≈$30 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "1",
  risk: 35
},

"Uruguay": {
  population: "≈3.4 million",
  gdp: "≈$85 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 15
},

"Venezuela": {
  population: "≈28.5 million",
  gdp: "≈$123 billion",
  conflictIDPs: "0**",
  disasterIDPs: "550",
  refugees: "≈0***",
  conflicts: "2",
  risk: 70
},
    "Australia": {
  population: "28.08 million",
  gdp: "≈$2,030 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "33,400",
  conflicts: "0",
  risk: 5
},

"Fiji": {
  population: "≈0.94 million",
  gdp: "≈$6.0 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈100",
  conflicts: "0",
  risk: 30
},

"Kiribati": {
  population: "0.13 million",
  gdp: "≈$0.4 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 25
},

"Marshall Islands": {
  population: "≈0.04 million",
  gdp: "≈$0.3 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 20
},

"Micronesia": {
  population: "0.10 million",
  gdp: "≈$0.55 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 25
},

"Nauru": {
  population: "0.01 million",
  gdp: "$0.20 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 15
},

"New Zealand": {
  population: "5.36 million",
  gdp: "≈$279 billion",
  conflictIDPs: "—",
  disasterIDPs: "19",
  refugees: "≈33,000",
  conflicts: "0",
  risk: 0
},

"Palau": {
  population: "0.02 million",
  gdp: "$0.38 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 5
},

"Papua New Guinea": {
  population: "≈10.8 million",
  gdp: "≈$33 billion",
  conflictIDPs: "70,000",
  disasterIDPs: "12",
  refugees: "≈10,000",
  conflicts: "2",
  risk: 65
},

"Samoa": {
  population: "≈0.22 million",
  gdp: "≈$1.0 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 5
},

"Solomon Islands": {
  population: "≈0.76 million",
  gdp: "≈$1.9 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 55
},

"Tonga": {
  population: "0.10 million",
  gdp: "≈$0.72 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 25
},

"Tuvalu": {
  population: "≈0.01 million",
  gdp: "≈$0.07 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 20
},

"Vanuatu": {
  population: "≈0.34 million",
  gdp: "≈$0.95 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 20
},
    "Afghanistan": {
  population: "43.1 million",
  gdp: "≈$21 billion",
  conflictIDPs: "4,355,000",
  disasterIDPs: "2,592,000",
  refugees: "20,869",
  conflicts: "2",
  risk: 90
},

"Bahrain": {
  population: "1.6 million",
  gdp: "≈$47 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈300",
  conflicts: "0",
  risk: 25
},

"Bangladesh": {
  population: "177.0 million",
  gdp: "≈$510 billion",
  conflictIDPs: "583,000",
  disasterIDPs: "4,956,000",
  refugees: "≈1,200,000",
  conflicts: "1",
  risk: 75
},

"Bhutan": {
  population: "0.80 million",
  gdp: "≈$3.5 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 30
},

"Brunei": {
  population: "0.47 million",
  gdp: "≈$17 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 25
},

"Cambodia": {
  population: "18.0 million",
  gdp: "≈$50 billion",
  conflictIDPs: "518,000",
  disasterIDPs: "79",
  refugees: "≈1,000",
  conflicts: "0",
  risk: 45
},

"China": {
  population: "1,405 million",
  gdp: "≈$20.6 trillion",
  conflictIDPs: "—",
  disasterIDPs: "177,000",
  refugees: "≈300,000",
  conflicts: "0",
  risk: 35
},

"India": {
  population: "1,480 million",
  gdp: "≈$4.2 trillion",
  conflictIDPs: "530,000",
  disasterIDPs: "130,000",
  refugees: "≈250,000",
  conflicts: "3",
  risk: 50
},

"Indonesia": {
  population: "287.2 million",
  gdp: "≈$1.7 trillion",
  conflictIDPs: "36,000",
  disasterIDPs: "406,000",
  refugees: "≈50,000",
  conflicts: "1",
  risk: 45
},

"Iran": {
  population: "93.0 million",
  gdp: "≈$375 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈3.5 million",
  conflicts: "1",
  risk: 65
},

"Iraq": {
  population: "46.0 million",
  gdp: "≈$260 billion",
  conflictIDPs: "997,000",
  disasterIDPs: "186,000",
  refugees: "≈300,000",
  conflicts: "1",
  risk: 60
},

"Israel": {
  population: "10.2 million",
  gdp: "≈$650 billion",
  conflictIDPs: "31,000",
  disasterIDPs: "—",
  refugees: "≈200,000",
  conflicts: "2",
  risk: 35
},

"Japan": {
  population: "122.7 million",
  gdp: "≈$4.5 trillion",
  conflictIDPs: "—",
  disasterIDPs: "44,000",
  refugees: "≈15,000",
  conflicts: "0",
  risk: 10
},

"Jordan": {
  population: "11.5 million",
  gdp: "≈$61 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈680,000",
  conflicts: "0",
  risk: 35
},

"Kazakhstan": {
  population: "20.9 million",
  gdp: "≈$310 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈5,000",
  conflicts: "0",
  risk: 35
},

"Kuwait": {
  population: "5.1 million",
  gdp: "≈$160 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈100,000",
  conflicts: "0",
  risk: 25
},

"Kyrgyzstan": {
  population: "7.4 million",
  gdp: "≈$19 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈1,000",
  conflicts: "0",
  risk: 40
},

"Laos": {
  population: "7.9 million",
  gdp: "≈$18 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 45
},

"Lebanon": {
  population: "5.8 million",
  gdp: "≈$35 billion",
  conflictIDPs: "64,000",
  disasterIDPs: "—",
  refugees: "≈1.2 million",
  conflicts: "1",
  risk: 65
},

"Malaysia": {
  population: "36.4 million",
  gdp: "≈$520 billion",
  conflictIDPs: "—",
  disasterIDPs: "610",
  refugees: "≈125,000",
  conflicts: "0",
  risk: 25
},

"Maldives": {
  population: "0.33 million",
  gdp: "≈$8 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 30
},

"Mongolia": {
  population: "3.6 million",
  gdp: "≈$27 billion",
  conflictIDPs: "—",
  disasterIDPs: "850",
  refugees: "11",
  conflicts: "0",
  risk: 25
},

"Myanmar": {
  population: "55.2 million",
  gdp: "≈$65 billion",
  conflictIDPs: "3,639,000",
  disasterIDPs: "281,000",
  refugees: "≈1.6 million",
  conflicts: "2",
  risk: 85
},

"Nepal": {
  population: "30.0 million",
  gdp: "≈$50 billion",
  conflictIDPs: "—",
  disasterIDPs: "2,100",
  refugees: "≈20,000",
  conflicts: "0",
  risk: 40
},

"North Korea": {
  population: "26.6 million",
  gdp: "—",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈1,000",
  conflicts: "0",
  risk: 60
},

"Oman": {
  population: "5.6 million",
  gdp: "≈$110 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 25
},

"Pakistan": {
  population: "259.3 million",
  gdp: "≈$410 billion",
  conflictIDPs: "269,000",
  disasterIDPs: "403,000",
  refugees: "≈2.0 million",
  conflicts: "3",
  risk: 70
},

"Palestine": {
  population: "5.6 million",
  gdp: "≈$14 billion",
  conflictIDPs: "2,035,000",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "1",
  risk: 65
},

"Philippines": {
  population: "117.3 million",
  gdp: "≈$530 billion",
  conflictIDPs: "28,000",
  disasterIDPs: "367,000",
  refugees: "≈800",
  conflicts: "2",
  risk: 50
},

"Qatar": {
  population: "3.2 million",
  gdp: "≈$240 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈150,000",
  conflicts: "0",
  risk: 25
},

"Saudi Arabia": {
  population: "35.2 million",
  gdp: "≈$1.1 trillion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈300,000",
  conflicts: "0",
  risk: 35
},

"Singapore": {
  population: "6.1 million",
  gdp: "≈$620 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈2,000",
  conflicts: "0",
  risk: 15
},

"South Korea": {
  population: "51.6 million",
  gdp: "≈$2.0 trillion",
  conflictIDPs: "—",
  disasterIDPs: "62,000",
  refugees: "≈50,000",
  conflicts: "0",
  risk: 60
},

"Sri Lanka": {
  population: "21.8 million",
  gdp: "≈$100 billion",
  conflictIDPs: "4,800",
  disasterIDPs: "178,000",
  refugees: "≈100,000",
  conflicts: "0",
  risk: 55
},

"Syria": {
  population: "23.6 million",
  gdp: "—",
  conflictIDPs: "5,964,000",
  disasterIDPs: "—",
  refugees: "≈500,000",
  conflicts: "2",
  risk: 55
},

"Tajikistan": {
  population: "11.0 million",
  gdp: "≈$16 billion",
  conflictIDPs: "—",
  disasterIDPs: "560",
  refugees: "≈4,000",
  conflicts: "0",
  risk: 40
},

"Thailand": {
  population: "71.6 million",
  gdp: "≈$580 billion",
  conflictIDPs: "273,000",
  disasterIDPs: "—",
  refugees: "≈90,000",
  conflicts: "1",
  risk: 35
},

"Timor-Leste": {
  population: "1.4 million",
  gdp: "≈$2.2 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 35
},

"Turkmenistan": {
  population: "7.6 million",
  gdp: "≈$70 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 35
},

"United Arab Emirates": {
  population: "11.5 million",
  gdp: "≈$650 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈200,000",
  conflicts: "0",
  risk: 25
},

"Uzbekistan": {
  population: "37.7 million",
  gdp: "≈$150 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 40
},

"Vietnam": {
  population: "102.0 million",
  gdp: "≈$510 billion",
  conflictIDPs: "—",
  disasterIDPs: "15,000",
  refugees: "≈0",
  conflicts: "0",
  risk: 50
},

"Yemen": {
  population: "42.0 million",
  gdp: "—",
  conflictIDPs: "4,796,000",
  disasterIDPs: "—",
  refugees: "≈300,000",
  conflicts: "2",
  risk: 70
},
    "Turkey": {
  population: "87.9 million",
  gdp: "≈$1.6 trillion",
  conflictIDPs: "—",
  disasterIDPs: "651,000",
  refugees: "≈2.7 million",
  conflicts: "1",
  risk: 45
},

"Kosovo": {
  population: "≈1.6 million",
  gdp: "≈$11 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 30
},

"North Macedonia": {
  population: "≈1.8 million",
  gdp: "≈$16 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈2,000",
  conflicts: "0",
  risk: 25
},
 "Republic of Serbia": {
  population: "6.6 million",
  gdp: "≈$98 billion",
  conflictIDPs: "<1,000",
  disasterIDPs: "≈300",
  refugees: "25,000",
  conflicts: "0",
  risk: 15
 },
    "Algeria": {
  population: "48.0 million",
  gdp: "≈$295 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈95,000",
  conflicts: "0",
  risk: 40
},

"Angola": {
  population: "40.0 million",
  gdp: "≈$118 billion",
  conflictIDPs: "55,000",
  disasterIDPs: "0",
  refugees: "≈60,000",
  conflicts: "0",
  risk: 50
},

"Benin": {
  population: "14.0 million",
  gdp: "≈$25 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈10,000",
  conflicts: "1",
  risk: 60
},

"Botswana": {
  population: "2.6 million",
  gdp: "≈$21 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈3,000",
  conflicts: "0",
  risk: 25
},

"Burkina Faso": {
  population: "24.1 million",
  gdp: "≈$24 billion",
  conflictIDPs: "2,062,000",
  disasterIDPs: "—",
  refugees: "≈30,000",
  conflicts: "2",
  risk: 95
},

"Burundi": {
  population: "14.2 million",
  gdp: "≈$6 billion",
  conflictIDPs: "102,000",
  disasterIDPs: "—",
  refugees: "≈2,000",
  conflicts: "1",
  risk: 80
},

"Cabo Verde": {
  population: "0.53 million",
  gdp: "≈$3 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 20
},

"Cameroon": {
  population: "30.0 million",
  gdp: "≈$58 billion",
  conflictIDPs: "1,041,000",
  disasterIDPs: "—",
  refugees: "≈360,000",
  conflicts: "3",
  risk: 80
},

"Central African Republic": {
  population: "5.9 million",
  gdp: "≈$3 billion",
  conflictIDPs: "510,000",
  disasterIDPs: "—",
  refugees: "≈7,000",
  conflicts: "1",
  risk: 90
},

"Chad": {
  population: "21.0 million",
  gdp: "≈$20 billion",
  conflictIDPs: "274,000",
  disasterIDPs: "—",
  refugees: "≈1.5 million",
  conflicts: "2",
  risk: 85
},

"Comoros": {
  population: "0.87 million",
  gdp: "≈$1.5 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 45
},

"Democratic Republic of the Congo": {
  population: "116.0 million",
  gdp: "≈$84 billion",
  conflictIDPs: "6,400,000",
  disasterIDPs: "—",
  refugees: "≈500,000",
  conflicts: "3",
  risk: 90
},

"Republic of the Congo": {
  population: "6.5 million",
  gdp: "≈$15 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈30,000",
  conflicts: "0",
  risk: 25
},

"Ivory Coast": {
  population: "32.0 million",
  gdp: "≈$100 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈50,000",
  conflicts: "1",
  risk: 55
},

"Djibouti": {
  population: "1.2 million",
  gdp: "≈$4 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈30,000",
  conflicts: "0",
  risk: 50
},

"Egypt": {
  population: "120.0 million",
  gdp: "≈$440 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈1.0 million",
  conflicts: "1",
  risk: 60
},

"Equatorial Guinea": {
  population: "1.9 million",
  gdp: "≈$11 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈2,000",
  conflicts: "0",
  risk: 45
},

"Eritrea": {
  population: "3.7 million",
  gdp: "—",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈0",
  conflicts: "0",
  risk: 60
},

"Eswatini": {
  population: "1.3 million",
  gdp: "≈$5 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈1,000",
  conflicts: "0",
  risk: 50
},

"Ethiopia": {
  population: "138.9 million",
  gdp: "≈$126 billion",
  conflictIDPs: "3.3 million",
  disasterIDPs: "—",
  refugees: "≈1.0 million",
  conflicts: "3",
  risk: 85
},

"Gabon": {
  population: "2.6 million",
  gdp: "≈$21 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈10,000",
  conflicts: "0",
  risk: 40
},

"Gambia": {
  population: "2.8 million",
  gdp: "≈$3 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈2,000",
  conflicts: "0",
  risk: 50
},

"Ghana": {
  population: "35.3 million",
  gdp: "≈$115 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈15,000",
  conflicts: "1",
  risk: 45
},

"Guinea": {
  population: "15.3 million",
  gdp: "≈$30 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈7,000",
  conflicts: "0",
  risk: 55
},

"Guinea-Bissau": {
  population: "2.3 million",
  gdp: "≈$2 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈1,000",
  conflicts: "0",
  risk: 55
},

"Kenya": {
  population: "58.6 million",
  gdp: "≈$136 billion",
  conflictIDPs: "383,000",
  disasterIDPs: "32,000",
  refugees: "≈650,000",
  conflicts: "1",
  risk: 50
},

"Lesotho": {
  population: "2.4 million",
  gdp: "≈$2 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈500",
  conflicts: "0",
  risk: 40
},

"Liberia": {
  population: "5.7 million",
  gdp: "≈$5 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈20,000",
  conflicts: "0",
  risk: 50
},

"Libya": {
  population: "7.5 million",
  gdp: "≈$47 billion",
  conflictIDPs: "183,000",
  disasterIDPs: "—",
  refugees: "≈8,000",
  conflicts: "1",
  risk: 75
},

"Madagascar": {
  population: "33.5 million",
  gdp: "≈$21 billion",
  conflictIDPs: "0",
  disasterIDPs: "30,000",
  refugees: "≈2,000",
  conflicts: "0",
  risk: 50
},

"Malawi": {
  population: "22.0 million",
  gdp: "≈$14 billion",
  conflictIDPs: "0",
  disasterIDPs: "4,000",
  refugees: "≈50,000",
  conflicts: "0",
  risk: 35
},

"Mali": {
  population: "26.0 million",
  gdp: "≈$27 billion",
  conflictIDPs: "378,000",
  disasterIDPs: "—",
  refugees: "≈100,000",
  conflicts: "2",
  risk: 80
},

"Mauritania": {
  population: "5.6 million",
  gdp: "≈$14 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈250,000",
  conflicts: "0",
  risk: 35
},

"Mauritius": {
  population: "1.3 million",
  gdp: "≈$17 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 15
},

"Morocco": {
  population: "39.2 million",
  gdp: "≈$190 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈8,000",
  conflicts: "0",
  risk: 35
},

"Mozambique": {
  population: "36.6 million",
  gdp: "≈$23 billion",
  conflictIDPs: "733,000",
  disasterIDPs: "18,000",
  refugees: "≈30,000",
  conflicts: "2",
  risk: 80
},

"Namibia": {
  population: "3.1 million",
  gdp: "≈$15 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈8,000",
  conflicts: "0",
  risk: 25
},

"Niger": {
  population: "29.2 million",
  gdp: "≈$21 billion",
  conflictIDPs: "507,000",
  disasterIDPs: "—",
  refugees: "≈430,000",
  conflicts: "2",
  risk: 100
},

"Nigeria": {
  population: "242.4 million",
  gdp: "≈$590 billion",
  conflictIDPs: "3.6 million",
  disasterIDPs: "220,000",
  refugees: "≈400,000",
  conflicts: "4",
  risk: 85
},

"Rwanda": {
  population: "14.9 million",
  gdp: "≈$17 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈130,000",
  conflicts: "1",
  risk: 25
},

"São Tomé and Príncipe": {
  population: "0.24 million",
  gdp: "≈$1 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 25
},

"Senegal": {
  population: "19.0 million",
  gdp: "≈$40 billion",
  conflictIDPs: "80,000",
  disasterIDPs: "—",
  refugees: "≈15,000",
  conflicts: "1",
  risk: 50
},

"Seychelles": {
  population: "0.12 million",
  gdp: "≈$2 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "0",
  conflicts: "0",
  risk: 40
},

"Sierra Leone": {
  population: "8.8 million",
  gdp: "≈$7 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈4,000",
  conflicts: "0",
  risk: 25
},

"Somalia": {
  population: "20.2 million",
  gdp: "≈$14 billion",
  conflictIDPs: "3.9 million",
  disasterIDPs: "30,000",
  refugees: "≈40,000",
  conflicts: "2",
  risk: 70
},

"South Africa": {
  population: "65.5 million",
  gdp: "≈$430 billion",
  conflictIDPs: "2.0 million",
  disasterIDPs: "7,000",
  refugees: "≈260,000",
  conflicts: "1",
  risk: 30
},

"South Sudan": {
  population: "12.0 million",
  gdp: "≈$6 billion",
  conflictIDPs: "2.3 million",
  disasterIDPs: "—",
  refugees: "≈550,000",
  conflicts: "2",
  risk: 50
},

"Sudan": {
  population: "53.0 million",
  gdp: "≈$40 billion",
  conflictIDPs: "≈9.0 million",
  disasterIDPs: "—",
  refugees: "≈400,000",
  conflicts: "1",
  risk: 60
},

"United Republic of Tanzania": {
  population: "73.0 million",
  gdp: "≈$90 billion",
  conflictIDPs: "0",
  disasterIDPs: "8,000",
  refugees: "≈300,000",
  conflicts: "0",
  risk: 35
},

"Togo": {
  population: "9.9 million",
  gdp: "≈$10 billion",
  conflictIDPs: "—",
  disasterIDPs: "—",
  refugees: "≈20,000",
  conflicts: "1",
  risk: 60
},

"Tunisia": {
  population: "12.4 million",
  gdp: "≈$58 billion",
  conflictIDPs: "0",
  disasterIDPs: "—",
  refugees: "≈10,000",
  conflicts: "0",
  risk: 40
},

"Uganda": {
  population: "53.5 million",
  gdp: "≈$67 billion",
  conflictIDPs: "110,000",
  disasterIDPs: "10,000",
  refugees: "≈1.9 million",
  conflicts: "1",
  risk: 75
},

"Zambia": {
  population: "22.0 million",
  gdp: "≈$30 billion",
  conflictIDPs: "0",
  disasterIDPs: "5,000",
  refugees: "≈100,000",
  conflicts: "0",
  risk: 40
},

"Zimbabwe": {
  population: "17.1 million",
  gdp: "≈$36 billion",
  conflictIDPs: "0",
  disasterIDPs: "4,000",
  refugees: "≈20,000",
  conflicts: "0",
  risk: 40
},
    "Mexico": {
  population: "134,410,000",
  gdp: "2,120",
  conflictIDPs: "≈392,000",
  disasterIDPs: "≈9,000",
  refugees: "304,004",
  conflicts: "1",
  risk: 50
},
"Taiwan": {
  population: "23.0M",
  gdp: "≈900B",
  conflictIDPs: "—",
  disasterIDPs: "1,700",
  refugees: "≈700",
  conflicts: "0",
  risk: null
},
};
    
    L.geoJSON(data, {

style: function(feature) {

  const country = feature.properties.name || feature.properties.NAME || feature.properties.ADMIN;
  const info = countryData[country];

  let fillColor = "#d9d9d9";

  if (info) {

    if (info.risk < 30) {
      fillColor = "#2e8b57";
    } else if (info.risk <= 65) {
      fillColor = "#e67e22";
    } else {
      fillColor = "#c0392b";
    }

  }

  return {
    color: "#333",
    weight: 1,
    fillColor: fillColor,
    fillOpacity: 0.5
  };
},

      onEachFeature: function(feature, layer) {
        const country = feature.properties.name || feature.properties.NAME || feature.properties.ADMIN;

        layer.on('click', function() {
          const info = countryData[country];
          const popupContent = `
  <div style="font-family: 'Inter', sans-serif; min-width: 250px; color: #1f2937;">

    <h2 style="margin-top: 0; margin-bottom: 18px;">
      ${country}
    </h2>

    <p><strong>Population</strong><br>${info.population}</p>

    <p><strong>GDP</strong><br>${info.gdp}</p>

    <p><strong>IDPs due to conflict</strong><br>${info.conflictIDPs}</p>

    <p><strong>IDPs due to disasters/crises</strong><br>${info.disasterIDPs}</p>

    <p><strong>Refugees hosted</strong><br>${info.refugees}</p>

    <p><strong>Active conflicts</strong><br>${info.conflicts}</p>

    <hr>

    <p><strong>Risk Index</strong></p>

    <p style="
      font-size: 30px;
      font-weight: 700;
      color: ${
        info.risk < 30
          ? '#2e8b57'
          : info.risk <= 65
          ? '#e67e22'
          : '#c0392b'
      };
    ">
      ${info.risk}%
    </p>

    <p style="
      color: ${
        info.risk < 30
          ? '#2e8b57'
          : info.risk <= 65
          ? '#e67e22'
          : '#c0392b'
      };
      font-weight: 600;
    ">
      ${
        info.risk < 30
          ? 'LOW RISK'
          : info.risk <= 65
          ? 'MODERATE RISK'
          : 'HIGH RISK'
      }
    </p>

  </div>
`;

          layer.bindPopup(popupContent).openPopup();

        });

      }

    }).addTo(map);

  });