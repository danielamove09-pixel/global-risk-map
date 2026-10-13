
const LAST_UPDATED = "11 October 2026";
const WAR_COLOR = "#762fc0";

const conflicts = [
  // EUROPE
  {
    region: "Europe",
    name: "Russia–Ukraine War",
    location: "Ukraine, the Black Sea and Russian border regions",
    actors: "Russia and Ukraine; military support for Ukraine from the United States, European countries and others",
    startDate: "2014; full-scale invasion in 2022",
    duration: "Approximately 12 years; 4.5 years of full-scale war",
    impact: "Critical — over 1 million estimated casualties; approximately 3.7 million internally displaced people and 5.9 million refugees, according to the supplied table.",
    coordinates: [49.0, 31.0]
  },
  {
    region: "Europe",
    name: "Turkey–PKK Conflict",
    location: "Southeastern Turkey, northern Iraq and northern Syria",
    actors: "Turkey, the PKK and associated Kurdish groups",
    startDate: "1984",
    duration: "Approximately 42 years",
    impact: "Very high — prolonged conflict, displacement and cross-border military operations.",
    coordinates: [37.5, 42.5]
  },

  // MIDDLE EAST
  {
    region: "Middle East",
    name: "Israel–Hamas War / Israel–Palestine Conflict",
    location: "Gaza, Israel and the West Bank",
    actors: "Israel, Hamas and other Palestinian armed groups",
    startDate: "October 2023",
    duration: "Approximately 2 years and 10 months, as stated in the supplied table",
    impact: "Critical — tens of thousands of deaths, extensive destruction and widespread displacement in Gaza.",
    coordinates: [31.4, 34.4]
  },
  {
    region: "Middle East",
    name: "Israel–Hezbollah War",
    location: "Southern Lebanon and northern Israel",
    actors: "Israel, Hezbollah and the Lebanese state",
    startDate: "March 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "Very high to critical — thousands of deaths and over one million displaced people, according to the supplied table.",
    coordinates: [33.3, 35.5]
  },
  {
    region: "Middle East",
    name: "Regional Israel / United States–Iran War",
    location: "Iran, Israel, the Persian Gulf, Iraq, Syria and other regional locations",
    actors: "Iran, Israel, the United States, the United Kingdom and several Gulf states",
    startDate: "28 February 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "Critical — large-scale interstate warfare involving missile, drone and air strikes across several countries.",
    coordinates: [32.0, 51.0]
  },
  {
    region: "Middle East",
    name: "Iran–Bahrain Conflict",
    location: "Bahrain and the Persian Gulf",
    actors: "Iran and Bahrain",
    startDate: "February 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "High — described in the supplied table as part of the wider regional war.",
    coordinates: [26.1, 50.6]
  },
  {
    region: "Middle East",
    name: "Iran–Iraq Conflict",
    location: "Iraq and border areas",
    actors: "Iran and Iraq",
    startDate: "March 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "High.",
    coordinates: [33.3, 44.4]
  },
  {
    region: "Middle East",
    name: "Iran–Jordan Conflict",
    location: "Jordan",
    actors: "Iran and Jordan",
    startDate: "February 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "Medium to high.",
    coordinates: [31.2, 36.2]
  },
  {
    region: "Middle East",
    name: "Iran–Kuwait Conflict",
    location: "Kuwait and the Gulf",
    actors: "Iran and Kuwait",
    startDate: "February 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "Medium to high.",
    coordinates: [29.4, 47.8]
  },
  {
    region: "Middle East",
    name: "Iran–Oman Conflict",
    location: "Oman and Gulf waters",
    actors: "Iran and Oman",
    startDate: "March 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "Medium.",
    coordinates: [23.6, 58.5]
  },
  {
    region: "Middle East",
    name: "Iran–Qatar Conflict",
    location: "Qatar and the Gulf",
    actors: "Iran and Qatar",
    startDate: "February 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "Medium to high.",
    coordinates: [25.3, 51.2]
  },
  {
    region: "Middle East",
    name: "Iran–Saudi Arabia Conflict",
    location: "Saudi Arabia and the Gulf",
    actors: "Iran and Saudi Arabia",
    startDate: "February 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "High.",
    coordinates: [24.0, 45.0]
  },
  {
    region: "Middle East",
    name: "Iran–United Arab Emirates Conflict",
    location: "United Arab Emirates and the Gulf",
    actors: "Iran and the United Arab Emirates",
    startDate: "February 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "High.",
    coordinates: [24.2, 54.5]
  },
  {
    region: "Middle East",
    name: "Iran–Syria Conflict",
    location: "Syria",
    actors: "Iran and Syria",
    startDate: "March 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "High.",
    coordinates: [34.8, 38.5]
  },
  {
    region: "Middle East",
    name: "Iran–United Kingdom Conflict",
    location: "Middle East and regional British military bases",
    actors: "Iran and the United Kingdom",
    startDate: "March 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "High.",
    coordinates: [28.5, 48.0]
  },
  {
    region: "Middle East",
    name: "Yemen Civil War",
    location: "Yemen and the Red Sea",
    actors: "Houthis, the internationally recognised Yemeni government, separatist forces and regional intervening actors",
    startDate: "2014",
    duration: "Approximately 12 years",
    impact: "Critical — a severe humanitarian crisis, although conventional fighting intensity has fluctuated.",
    coordinates: [15.5, 47.5]
  },
  {
    region: "Middle East",
    name: "Syrian Conflict",
    location: "Syria",
    actors: "Syrian government forces, the SDF, Islamist groups, ISIS and other actors; Turkish and other foreign involvement",
    startDate: "2011",
    duration: "Approximately 15 years",
    impact: "Very high — millions displaced and prolonged territorial fragmentation.",
    coordinates: [35.0, 38.5]
  },
  {
    region: "Middle East",
    name: "ISIS Insurgency in Iraq",
    location: "Northern and western Iraq",
    actors: "Iraq, ISIS, militias and international coalitions",
    startDate: "2013–2014",
    duration: "Approximately 12 years",
    impact: "High — currently much lower intensity than during 2014–2017, according to the supplied table.",
    coordinates: [35.5, 43.0]
  },

  // AFRICA
  {
    region: "Africa",
    name: "Sudanese Civil War",
    location: "Sudan, especially Darfur, Kordofan and Khartoum",
    actors: "Sudanese Armed Forces (SAF), Rapid Support Forces (RSF) and allied militias",
    startDate: "April 2023",
    duration: "Approximately 3 years and 4 months, as stated in the supplied table",
    impact: "Critical — approximately 11 million internally displaced people and 4 million refugees; deaths are likely undercounted.",
    coordinates: [15.5, 32.5]
  },
  {
    region: "Africa",
    name: "Eastern DR Congo War / M23 Conflict",
    location: "North Kivu and South Kivu, Democratic Republic of the Congo",
    actors: "DR Congo, M23/AFC, Rwanda and other armed groups; Uganda is also mentioned in the supplied table",
    startDate: "Regional conflict since 1996; current M23 phase since 2021–2022",
    duration: "Decades; current phase ongoing",
    impact: "Critical — over 7 million displaced people; M23 controls large areas in eastern DR Congo, according to the supplied table.",
    coordinates: [-1.7, 29.2]
  },
  {
    region: "Africa",
    name: "ADF Insurgency in DR Congo",
    location: "North Kivu and Ituri",
    actors: "DR Congo and the Allied Democratic Forces (ADF), associated with ISIS Central Africa",
    startDate: "Approximately 2013",
    duration: "Approximately 13 years",
    impact: "Very high — attacks on civilians, massacres and displacement.",
    coordinates: [1.5, 29.5]
  },
  {
    region: "Africa",
    name: "Somali Civil War / Al-Shabaab Insurgency",
    location: "Somalia, especially central and southern regions",
    actors: "Somali government, Al-Shabaab, local militias and international partners",
    startDate: "2006",
    duration: "Approximately 20 years",
    impact: "Very high — territorial fighting, displacement and attacks; the supplied table reports Al-Shabaab regaining positions in 2026.",
    coordinates: [2.0, 45.0]
  },
  {
    region: "Africa",
    name: "South Sudan Civil War and Armed Conflict",
    location: "South Sudan",
    actors: "Government / SSPDF, SPLM/A-IO and other armed groups",
    startDate: "2013",
    duration: "Approximately 13 years",
    impact: "Very high — renewed fighting reported since 2025 in the supplied table.",
    coordinates: [6.8, 30.0]
  },
  {
    region: "Africa",
    name: "Internal Conflicts in Ethiopia",
    location: "Amhara, Oromia and Tigray",
    actors: "Ethiopian government, Fano, OLA and other armed groups",
    startDate: "2018–2023, depending on the region",
    duration: "Several years",
    impact: "Very high — mass displacement and persistent violence.",
    coordinates: [9.0, 39.5]
  },
  {
    region: "Africa",
    name: "Ethiopia–Sudan Border Conflict",
    location: "Al-Fashaga border area",
    actors: "Ethiopia and Sudan",
    startDate: "2020 / 2023",
    duration: "Several years",
    impact: "Medium to high — low-intensity border clashes, according to the supplied table.",
    coordinates: [12.9, 35.6]
  },
  {
    region: "Africa",
    name: "Central African Republic Civil War",
    location: "Central African Republic",
    actors: "Government forces, rebel armed groups and Russian Africa Corps",
    startDate: "2013",
    duration: "Approximately 13 years",
    impact: "High — armed groups continue to control some areas, according to the supplied table.",
    coordinates: [6.6, 20.9]
  },
  {
    region: "Africa",
    name: "Cabo Delgado Insurgency",
    location: "Northern Mozambique",
    actors: "Mozambique, ISIS-Mozambique / Ansar al-Sunna and Rwandan forces",
    startDate: "2017",
    duration: "Approximately 9 years",
    impact: "Very high — mass displacement and violence against civilians.",
    coordinates: [-11.0, 40.5]
  },
  {
    region: "Africa",
    name: "Libyan Civil Conflict",
    location: "Western and southern Libya",
    actors: "Tripoli-based government, LAAF / Haftar and multiple militias",
    startDate: "2011; current phase since 2014",
    duration: "Approximately 15 years",
    impact: "High — militia clashes reportedly continued in August 2026, according to the supplied table.",
    coordinates: [27.0, 17.0]
  },
  {
    region: "Africa",
    name: "Cameroon / Ambazonia Conflict",
    location: "Northwest and Southwest Cameroon",
    actors: "Cameroonian government and Ambazonian separatist groups",
    startDate: "2017",
    duration: "Approximately 9 years",
    impact: "High — prolonged conflict and attacks on civilians.",
    coordinates: [5.5, 10.5]
  },
  {
    region: "Africa",
    name: "Boko Haram–ISWAP Insurgency",
    location: "Northeastern Nigeria and the Lake Chad region",
    actors: "Nigeria, Boko Haram, ISWAP and regional security forces",
    startDate: "2009",
    duration: "Approximately 17 years",
    impact: "Very high.",
    coordinates: [12.0, 13.5]
  },
  {
    region: "Africa",
    name: "Lake Chad Insurgency",
    location: "Nigeria, Cameroon, Chad and Niger",
    actors: "Boko Haram / ISWAP and security forces from Nigeria, Cameroon, Chad and Niger",
    startDate: "2009",
    duration: "Approximately 17 years",
    impact: "Very high.",
    coordinates: [13.0, 14.0]
  },
  {
    region: "Africa",
    name: "Mali War / Sahel Insurgency",
    location: "Mali",
    actors: "Malian government, JNIM, FLA, ISSP and Russian Africa Corps",
    startDate: "2012",
    duration: "Approximately 14 years",
    impact: "Critical — major offensives reportedly continued in 2026, according to the supplied table.",
    coordinates: [17.0, -3.0]
  },
  {
    region: "Africa",
    name: "Burkina Faso Insurgency",
    location: "Burkina Faso",
    actors: "Burkinabe government, JNIM and ISSP",
    startDate: "2015; current phase since 2019",
    duration: "Approximately 11 years",
    impact: "Very high — extensive operations by JNIM and ISSP, according to the supplied table.",
    coordinates: [12.3, -1.5]
  },
  {
    region: "Africa",
    name: "Niger Insurgency",
    location: "Western and southeastern Niger",
    actors: "Nigerien government, JNIM, ISSP and ISWAP",
    startDate: "Approximately 2015",
    duration: "Approximately 11 years",
    impact: "Very high.",
    coordinates: [14.0, 2.0]
  },
  {
    region: "Africa",
    name: "Insurgency in Benin and Togo",
    location: "Northern Benin and Togo",
    actors: "Benin, Togo, JNIM / ISSP and affiliated groups",
    startDate: "Approximately 2019–2020",
    duration: "Approximately 6–7 years",
    impact: "Medium to high.",
    coordinates: [10.5, 1.5]
  },
  {
    region: "Africa",
    name: "Morocco–Polisario Conflict / Western Sahara",
    location: "Western Sahara",
    actors: "Morocco and the Polisario Front",
    startDate: "Current phase since 2020; historical conflict since 1975",
    duration: "Approximately 6 years in the current phase",
    impact: "Medium — low-intensity attacks; the supplied table describes it as an ongoing international armed conflict.",
    coordinates: [24.5, -13.0]
  },
  {
    region: "Africa",
    name: "Armed Conflict in Haiti",
    location: "Port-au-Prince and other areas of Haiti",
    actors: "Haitian government, Viv Ansanm and other armed gangs",
    startDate: "2023",
    duration: "Approximately 3 years",
    impact: "Very high — approximately 1.3–1.5 million displaced people and thousands of deaths, according to the supplied table.",
    coordinates: [18.9, -72.3]
  },
  {
    region: "Africa",
    name: "Kenya–Al-Shabaab Armed Conflict",
    location: "Northern and eastern Kenya, near the Somali border",
    actors: "Kenya and Al-Shabaab",
    startDate: "Approximately 2011",
    duration: "Approximately 15 years",
    impact: "Medium to high — cross-border attacks continue, according to the supplied table.",
    coordinates: [1.0, 40.0]
  },

  // ASIA
  {
    region: "Asia",
    name: "Myanmar Civil War",
    location: "Across Myanmar",
    actors: "Military junta, People's Defence Forces (PDF), NUG and multiple ethnic armed organisations",
    startDate: "February 2021",
    duration: "Approximately 5 years and 6 months, as stated in the supplied table",
    impact: "Critical — over 100,000 deaths and approximately 5.2 million displaced people, according to the supplied table.",
    coordinates: [21.0, 96.0]
  },
  {
    region: "Asia",
    name: "Taliban–ISIS-K Conflict / Afghan Insurgencies",
    location: "Afghanistan",
    actors: "Taliban, ISIS-K, NRF and other groups",
    startDate: "2015; new phase since 2021",
    duration: "Approximately 11 years",
    impact: "High.",
    coordinates: [34.5, 69.0]
  },
  {
    region: "Asia",
    name: "Afghanistan–Pakistan War",
    location: "Afghanistan–Pakistan border areas",
    actors: "Afghan Taliban / Afghanistan and Pakistan",
    startDate: "February 2026",
    duration: "Approximately 5 months, as stated in the supplied table",
    impact: "Very high — airstrikes, artillery and border fighting, according to the supplied table.",
    coordinates: [33.5, 69.5]
  },
  {
    region: "Asia",
    name: "TTP Insurgency in Pakistan",
    location: "Khyber Pakhtunkhwa and other areas of Pakistan",
    actors: "Pakistan and Tehrik-i-Taliban Pakistan (TTP)",
    startDate: "2007",
    duration: "Approximately 19 years",
    impact: "Very high — a reported increase in attacks in 2025–2026.",
    coordinates: [34.0, 71.5]
  },
  {
    region: "Asia",
    name: "Balochistan Insurgency",
    location: "Balochistan, Pakistan",
    actors: "Pakistan, Balochistan Liberation Army (BLA) and other Baloch groups",
    startDate: "Approximately 2004",
    duration: "Approximately 22 years",
    impact: "High — major escalation reported in 2026, according to the supplied table.",
    coordinates: [28.5, 65.5]
  },
  {
    region: "Asia",
    name: "Kashmir Insurgency",
    location: "Jammu and Kashmir",
    actors: "India and Kashmiri insurgent groups",
    startDate: "1989",
    duration: "Approximately 37 years",
    impact: "Medium to high.",
    coordinates: [34.0, 75.0]
  },
  {
    region: "Asia",
    name: "Manipur Ethnic Armed Conflict",
    location: "Manipur, India",
    actors: "Indian government, Meitei groups and Kuki-Zo groups",
    startDate: "May 2023",
    duration: "Approximately 3 years and 3 months, as stated in the supplied table",
    impact: "High — over 260 deaths and tens of thousands displaced, according to the supplied table.",
    coordinates: [24.8, 93.9]
  },
  {
    region: "Asia",
    name: "Philippine Communist Insurgency",
    location: "Several islands of the Philippines",
    actors: "Philippine government and the New People's Army / Communist Party of the Philippines",
    startDate: "1969",
    duration: "Approximately 57 years",
    impact: "Medium to high — lower intensity than in earlier decades, but still active according to the supplied table.",
    coordinates: [12.0, 122.0]
  },
  {
    region: "Asia",
    name: "Islamist Insurgency in Mindanao",
    location: "Mindanao, Philippines",
    actors: "Philippine government, Abu Sayyaf, BIFF and other groups",
    startDate: "Approximately the 1990s",
    duration: "Approximately 30 years",
    impact: "Medium.",
    coordinates: [7.5, 124.5]
  },
  {
    region: "Asia",
    name: "Southern Thailand Insurgency",
    location: "Pattani, Yala, Narathiwat and nearby areas",
    actors: "Thailand, BRN and other separatist groups",
    startDate: "1948; modern phase since 2004",
    duration: "Decades",
    impact: "Medium to high.",
    coordinates: [6.5, 101.3]
  },
  {
    region: "Asia",
    name: "West Papua Conflict",
    location: "Papua / West Papua, Indonesia",
    actors: "Indonesia, OPM / TPNPB and other independence groups",
    startDate: "1960s; prolonged current phase",
    duration: "Decades",
    impact: "Medium to high — continued fighting and displacement, according to the supplied table.",
    coordinates: [-4.0, 138.5]
  },
  {
    region: "Asia",
    name: "Chittagong Hill Tracts Conflict",
    location: "Southeastern Bangladesh",
    actors: "Bangladesh and KNF / local armed groups",
    startDate: "Renewed phase since 2022",
    duration: "Approximately 4 years",
    impact: "Low to medium — armed operations continue, according to the supplied table.",
    coordinates: [22.5, 92.0]
  },

  // AMERICAS
  {
    region: "Americas",
    name: "Colombian Armed Conflict",
    location: "Catatumbo, Cauca, Chocó, Arauca and other regions",
    actors: "Colombia, ELN, FARC dissident groups, Clan del Golfo and others",
    startDate: "1964; current phase ongoing",
    duration: "Approximately 62 years",
    impact: "Very high — over 10 million historically registered victims and tens of thousands recently displaced, according to the supplied table.",
    coordinates: [7.0, -73.5]
  },
  {
    region: "Americas",
    name: "ELN–Rival Armed Groups Conflict",
    location: "Catatumbo and other regions of Colombia",
    actors: "ELN, FARC dissident groups, Clan del Golfo and others",
    startDate: "Escalation in 2025–2026",
    duration: "Approximately 1.5 years, as stated in the supplied table",
    impact: "High.",
    coordinates: [8.5, -72.7]
  },
  {
    region: "Americas",
    name: "War Against Cartels in Mexico",
    location: "Multiple regions of Mexico",
    actors: "Mexican government, drug cartels and armed criminal groups",
    startDate: "2006",
    duration: "Approximately 20 years",
    impact: "Very high in terms of deaths; classification as an armed conflict is more debated than for conventional civil wars.",
    coordinates: [23.5, -102.0]
  }
];

// Fields intentionally left incomplete until information is researched.
conflicts.forEach(conflict => {
  conflict.context = null;
  conflict.sources = null;
  conflict.lastUpdated = LAST_UPDATED;
});

// Create the map if the existing base map is not already present.
const map = L.map('map', {
  minZoom: 2,
  worldCopyJump: true
}).setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  noWrap: true
}).addTo(map);

// Purple marker layer for active wars.
const warMarkers = L.layerGroup().addTo(map);

function displayValue(value) {
  return value ?? "Not yet available";
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createPopup(conflict) {
  return `
    <div class="crisis-popup">
      <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:#762fc0;font-weight:700;margin-bottom:8px;">
        ${escapeHTML(conflict.region)} · Active Wars
      </div>
      <h3>${escapeHTML(conflict.name)}</h3>
      <p><strong>Location:</strong> ${escapeHTML(displayValue(conflict.location))}</p>
      <p><strong>Countries / actors involved:</strong> ${escapeHTML(displayValue(conflict.actors))}</p>
      <p><strong>Start date:</strong> ${escapeHTML(displayValue(conflict.startDate))}</p>
      <p><strong>Approximate duration:</strong> ${escapeHTML(displayValue(conflict.duration))}</p>
      <p><strong>Estimated human impact:</strong> ${escapeHTML(displayValue(conflict.impact))}</p>
      <p><strong>Context:</strong> ${escapeHTML(displayValue(conflict.context))}</p>
      <p><strong>Sources:</strong> ${escapeHTML(displayValue(conflict.sources))}</p>
      <p><strong>Last updated:</strong> ${escapeHTML(conflict.lastUpdated)}</p>
    </div>
  `;
}

conflicts.forEach(conflict => {
  const marker = L.circleMarker(conflict.coordinates, {
    radius: 7,
    color: "#ffffff",
    weight: 1.5,
    fillColor: WAR_COLOR,
    fillOpacity: 0.95
  });

  marker.bindPopup(createPopup(conflict), {
    maxWidth: 330
  });

  marker.bindTooltip(conflict.name, {
    direction: "top"
  });

  marker.addTo(warMarkers);
});

map.invalidateSize();

console.log(`Crisis Map loaded: ${conflicts.length} conflict records.`);


/* ==========================================
   HUMANITARIAN CRISES — PINK MAP LAYER
   Last updated: 11 October 2026
   ========================================== */

const HUMANITARIAN_COLOR = "#e84393";
const HUMANITARIAN_LAST_UPDATED = "11 October 2026";

const humanitarianCrises = [
  {
    name: "Sudan Humanitarian Crisis",
    location: "Sudan and neighboring countries",
    lat: 13.5, lng: 30.0,
    causes: "War, hunger, displacement, disease and destruction of services",
    affected: "Sudan; refugees in Chad, Egypt, South Sudan, Ethiopia, CAR, Uganda and Libya",
    start: "2023",
    duration: "~3 years",
    impact: "CRITICAL — described in the supplied table as the world's largest displacement and hunger crisis; millions need assistance and famine is present."
  },
  {
    name: "Gaza Humanitarian Crisis",
    location: "Gaza Strip and the West Bank",
    lat: 31.4, lng: 34.4,
    causes: "War, destruction, displacement, food insecurity and healthcare-system collapse",
    affected: "Palestinian population",
    start: "2023",
    duration: "~3 years",
    impact: "CRITICAL — widespread destruction and displacement, with severe shortages of food, water and medical care."
  },
  {
    name: "South Sudan Humanitarian Crisis",
    location: "South Sudan",
    lat: 7.0, lng: 30.0,
    causes: "Conflict, displacement, flooding and hunger",
    affected: "South Sudanese population and refugees",
    start: "2013",
    duration: "~13 years",
    impact: "CRITICAL — conflict, flooding and food insecurity."
  },
  {
    name: "Ethiopia Humanitarian Crisis",
    location: "Tigray, Amhara, Oromia and other regions",
    lat: 9.0, lng: 39.5,
    causes: "Conflict, displacement, drought and food insecurity",
    affected: "Ethiopian population",
    start: "2020 / earlier roots",
    duration: "Several years",
    impact: "VERY HIGH"
  },
  {
    name: "Haiti Humanitarian Crisis",
    location: "Port-au-Prince and other areas",
    lat: 18.9, lng: -72.3,
    causes: "Armed-group violence, displacement, hunger and institutional collapse",
    affected: "Haitian population",
    start: "2021–2023",
    duration: "~5 years",
    impact: "CRITICAL — violence, displacement and the collapse of basic services."
  },
  {
    name: "Myanmar Humanitarian Crisis",
    location: "Nationwide, especially Rakhine State",
    lat: 19.5, lng: 96.5,
    causes: "Civil war, displacement, persecution, hunger and earthquakes",
    affected: "People in Myanmar, including Rohingya communities",
    start: "2021; Rohingya crisis since 2017",
    duration: "5+ years",
    impact: "CRITICAL — millions displaced and healthcare services severely deteriorated."
  },
  {
    name: "Democratic Republic of the Congo Humanitarian Crisis",
    location: "Eastern DRC, especially North Kivu and Ituri",
    lat: -1.5, lng: 29.0,
    causes: "War, displacement, epidemics and hunger",
    affected: "Congolese population and regional refugees",
    start: "Decades; major escalation 2022–2026",
    duration: ">25 years",
    impact: "CRITICAL — one of the world's largest displaced populations, according to the supplied table."
  },
  {
    name: "Sahel Humanitarian Crisis — Mali",
    location: "Northern and central Mali",
    lat: 17.0, lng: -3.5,
    causes: "Insurgency, displacement, hunger and drought",
    affected: "People in Mali and displaced populations",
    start: "2012",
    duration: "~14 years",
    impact: "VERY HIGH"
  },
  {
    name: "Sahel Humanitarian Crisis — Burkina Faso",
    location: "Northern and eastern Burkina Faso",
    lat: 13.5, lng: -1.5,
    causes: "Insurgency, displacement, hunger and restricted humanitarian access",
    affected: "People in Burkina Faso",
    start: "2015",
    duration: "~11 years",
    impact: "CRITICAL"
  },
  {
    name: "Lebanon Humanitarian Crisis",
    location: "Lebanon",
    lat: 33.9, lng: 35.8,
    causes: "Conflict, displacement, economic crisis and infrastructure destruction",
    affected: "Lebanese population and Syrian and Palestinian refugees",
    start: "2019; renewed escalation in 2026",
    duration: "~7 years",
    impact: "VERY HIGH"
  },
  {
    name: "Afghanistan Humanitarian Crisis",
    location: "Afghanistan",
    lat: 33.9, lng: 67.7,
    causes: "Poverty, hunger, conflict, restrictions on women, returning refugees and disease",
    affected: "Afghan population",
    start: "2021; earlier underlying causes",
    duration: "~5 years",
    impact: "CRITICAL — the supplied table cites projected acute malnutrition risks among children and pregnant or breastfeeding women in 2026."
  },
  {
    name: "Cameroon Humanitarian Crisis",
    location: "Far North, Northwest, Southwest and border areas",
    lat: 6.0, lng: 12.5,
    causes: "Conflict, displacement, disease and climate-related emergencies",
    affected: "People in Cameroon and regional refugees",
    start: "2016–2017",
    duration: "~9–10 years",
    impact: "VERY HIGH — the supplied table cites a UNICEF estimate of 2.9 million people needing assistance in 2026."
  },
  {
    name: "Chad Humanitarian Crisis",
    location: "Eastern Chad and border areas",
    lat: 15.0, lng: 21.0,
    causes: "Refugees from Sudan, conflict, hunger and flooding",
    affected: "Chadian communities and Sudanese refugees",
    start: "2023; earlier structural crisis",
    duration: "~3 years",
    impact: "VERY HIGH"
  },
  {
    name: "Niger Humanitarian Crisis",
    location: "Western Niger and border areas",
    lat: 14.0, lng: 2.0,
    causes: "Insurgency, displacement, food insecurity and climate-related emergencies",
    affected: "People in Niger",
    start: "~2015",
    duration: "~11 years",
    impact: "VERY HIGH"
  },
  {
    name: "Nigeria Humanitarian Crisis",
    location: "Northeastern and northwestern Nigeria",
    lat: 11.8, lng: 13.0,
    causes: "Boko Haram/ISWAP, armed banditry, displacement and hunger",
    affected: "People in Nigeria, especially Borno, Yobe and Adamawa",
    start: "2009",
    duration: "~17 years",
    impact: "VERY HIGH"
  },
  {
    name: "Somalia Humanitarian Crisis",
    location: "Somalia",
    lat: 5.0, lng: 46.0,
    causes: "Al-Shabaab, drought, hunger, displacement and disease",
    affected: "Somali population",
    start: "Decades; recurring drought",
    duration: ">20 years",
    impact: "CRITICAL"
  },
  {
    name: "Syria Humanitarian Crisis",
    location: "Syria and neighboring refugee-hosting countries",
    lat: 35.0, lng: 38.5,
    causes: "War, displacement, poverty, infrastructure destruction and earthquakes",
    affected: "People in Syria and refugees in neighboring countries",
    start: "2011",
    duration: "~15 years",
    impact: "VERY HIGH"
  },
  {
    name: "Yemen Humanitarian Crisis",
    location: "Yemen",
    lat: 15.5, lng: 47.5,
    causes: "War, hunger, disease and healthcare and economic collapse",
    affected: "People in Yemen",
    start: "2014",
    duration: "~12 years",
    impact: "CRITICAL"
  },
  {
    name: "Ukraine Humanitarian Crisis",
    location: "Ukraine and refugee-hosting countries in Europe",
    lat: 48.5, lng: 31.0,
    causes: "War, attacks on infrastructure and displacement",
    affected: "People in Ukraine and refugees in Europe",
    start: "2022; conflict began in 2014",
    duration: "~4.5 years",
    impact: "VERY HIGH"
  },
  {
    name: "Colombia Humanitarian Crisis",
    location: "Catatumbo, Cauca, Chocó, Nariño, Arauca and other areas",
    lat: 4.5, lng: -73.5,
    causes: "Armed conflict, displacement, confinement and climate-related disasters",
    affected: "Colombian population, especially rural and Indigenous communities",
    start: "Decades; deterioration in 2025–2026",
    duration: ">60 years",
    impact: "VERY HIGH — the supplied table states that 6.9 million people need humanitarian assistance and the 2026 plan aims to assist 2.6 million."
  },
  {
    name: "Venezuela Humanitarian Crisis",
    location: "Venezuela and receiving countries",
    lat: 8.0, lng: -66.0,
    causes: "Economic and social crisis, migration, basic-service shortages and reported earthquakes in June 2026",
    affected: "People in Venezuela and migrants and refugees across Latin America",
    start: "~2015",
    duration: "~11 years",
    impact: "VERY HIGH — the supplied table cites nearly 7.9 million Venezuelans having left the country."
  },
  {
    name: "Rohingya Refugee Crisis",
    location: "Bangladesh, especially Cox's Bazar",
    lat: 21.2, lng: 92.2,
    causes: "Persecution, displacement, conflict in Myanmar and funding shortages",
    affected: "~1 million Rohingya refugees",
    start: "2017",
    duration: "~9 years",
    impact: "VERY HIGH"
  },
  {
    name: "Cabo Delgado Humanitarian Crisis",
    location: "Northern Mozambique",
    lat: -12.0, lng: 40.0,
    causes: "Insurgency, displacement, poverty and food insecurity",
    affected: "People in Mozambique",
    start: "2017",
    duration: "~9 years",
    impact: "HIGH / VERY HIGH"
  },
  {
    name: "Central African Republic Humanitarian Crisis",
    location: "Central African Republic",
    lat: 6.6, lng: 20.9,
    causes: "Conflict, displacement, extreme poverty and food insecurity",
    affected: "People in CAR and refugees",
    start: "2013",
    duration: "~13 years",
    impact: "VERY HIGH"
  },
  {
    name: "Libya Humanitarian Crisis",
    location: "Libya",
    lat: 27.0, lng: 18.0,
    causes: "Political fragmentation, militias, displacement, migration and flooding",
    affected: "People in Libya, migrants and refugees",
    start: "2011",
    duration: "~15 years",
    impact: "HIGH / VERY HIGH"
  },
  {
    name: "Regional Sudanese Refugee Crisis",
    location: "Chad, Egypt, South Sudan, Ethiopia, CAR, Uganda and Libya",
    lat: 20.0, lng: 25.0,
    causes: "War in Sudan and cross-border displacement",
    affected: "Sudanese refugees and host communities",
    start: "2023",
    duration: "~3 years",
    impact: "CRITICAL — the supplied table states that the 2026 regional plan aims to assist 5.9 million people across seven countries."
  },
  {
    name: "Pakistan Humanitarian Crisis",
    location: "Pakistan",
    lat: 30.0, lng: 70.0,
    causes: "Conflict, displacement, flooding, economic crisis and food insecurity",
    affected: "Pakistani population and Afghan refugees",
    start: "Several years",
    duration: "Protracted",
    impact: "VERY HIGH"
  },
  {
    name: "Amazon Basin Migration Crisis",
    location: "Colombia, Brazil, Peru and neighboring countries",
    lat: -3.0, lng: -67.0,
    causes: "Venezuelan migration, poverty, violence and lack of services",
    affected: "Migrants and host communities",
    start: "~2017",
    duration: "~9 years",
    impact: "HIGH"
  },
  {
    name: "Central American Displacement Crisis",
    location: "Northern Central America and migration routes toward Mexico",
    lat: 14.0, lng: -89.5,
    causes: "Violence, poverty, climate-related disasters and food insecurity",
    affected: "Guatemala, Honduras, El Salvador, Nicaragua and displaced migrants",
    start: "Several years",
    duration: "Protracted",
    impact: "HIGH"
  },
  {
    name: "Laos Displacement and Poverty Crisis",
    location: "Laos, especially rural areas",
    lat: 19.5, lng: 103.0,
    causes: "Poverty, unexploded ordnance contamination and food insecurity",
    affected: "Rural population",
    start: "Protracted",
    duration: "Protracted",
    impact: "MEDIUM / HIGH"
  }
];

// Use the existing map and warMarkers variables from your working map.
const humanitarianMarkers = L.layerGroup();

function humanitarianPopup(crisis) {
  const fields = [
    ["Crisis name", crisis.name],
    ["Location", crisis.location],
    ["Main causes", crisis.causes],
    ["Countries / affected populations", crisis.affected],
    ["Start date", crisis.start],
    ["Approximate duration", crisis.duration],
    ["Estimated impact", crisis.impact],
    ["Context", null],
    ["Sources", null],
    ["Last updated", HUMANITARIAN_LAST_UPDATED]
  ];

  const rows = fields.map(([label, value]) => `
    <div style="margin:7px 0;">
      <strong>${escapeHTML(label)}:</strong>
      <span>${escapeHTML(value ?? "Not yet available")}</span>
    </div>
  `).join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;min-width:220px;max-width:320px;line-height:1.45;">
      <div style="color:${HUMANITARIAN_COLOR};font-size:11px;font-weight:700;letter-spacing:.08em;margin-bottom:8px;">
        HUMANITARIAN CRISIS
      </div>
      ${rows}
    </div>
  `;
}

humanitarianCrises.forEach(crisis => {
  const marker = L.circleMarker([crisis.lat, crisis.lng], {
    radius: 8,
    color: "#ffffff",
    weight: 1.5,
    fillColor: HUMANITARIAN_COLOR,
    fillOpacity: 0.9
  });

  marker.bindPopup(humanitarianPopup(crisis));
  marker.bindTooltip(crisis.name);
  marker.addTo(humanitarianMarkers);
});

// Show the humanitarian markers when the map loads.
humanitarianMarkers.addTo(map);

// Add a layer selector so users can toggle the two categories.
L.control.layers(
  null,
  {
    "Active Wars": warMarkers,
    "Humanitarian Crises": humanitarianMarkers
  },
  { collapsed: false }
).addTo(map);

console.log(
  `Humanitarian crises loaded: ${humanitarianCrises.length}`
);


/* ==========================================
   FOOD INSECURITY & FAMINE RISK LAYER
   Last updated: 11 October 2026
   ========================================== */

const FOOD_CRISIS_COLOR = "#c21870";

const foodCrises = [
  {
    name: "Sudan",
    countries: "Sudan",
    lat: 13.5, lng: 30.0,
    situation: "Famine and risk of further expansion",
    impact: "CRITICAL"
  },
  {
    name: "Gaza",
    countries: "Palestine",
    lat: 31.4, lng: 34.4,
    situation: "Extreme food insecurity",
    impact: "CRITICAL"
  },
  {
    name: "South Sudan",
    countries: "South Sudan",
    lat: 7.0, lng: 30.0,
    situation: "Extreme hunger and flooding",
    impact: "CRITICAL"
  },
  {
    name: "Yemen",
    countries: "Yemen",
    lat: 15.5, lng: 47.5,
    situation: "Chronic food insecurity",
    impact: "CRITICAL"
  },
  {
    name: "Haiti",
    countries: "Haiti",
    lat: 18.9, lng: -72.3,
    situation: "More than half of the population facing acute food insecurity",
    impact: "CRITICAL"
  },
  {
    name: "Somalia",
    countries: "Somalia",
    lat: 5.0, lng: 46.0,
    situation: "Drought and conflict",
    impact: "CRITICAL"
  },
  {
    name: "Afghanistan",
    countries: "Afghanistan",
    lat: 33.9, lng: 67.7,
    situation: "Critical child malnutrition",
    impact: "CRITICAL"
  },
  {
    name: "Democratic Republic of the Congo",
    countries: "Democratic Republic of the Congo (DRC)",
    lat: -1.5, lng: 29.0,
    situation: "Millions facing food insecurity",
    impact: "CRITICAL"
  },
  {
    name: "Sahel Food Crisis",
    countries: "Mali, Burkina Faso and Niger",
    lat: 14.0, lng: 0.0,
    situation: "Conflict, drought and displacement",
    impact: "VERY HIGH"
  },
  {
    name: "Syria",
    countries: "Syria",
    lat: 35.0, lng: 38.5,
    situation: "Poverty, destruction and food insecurity",
    impact: "VERY HIGH"
  },
  {
    name: "Nigeria",
    countries: "Nigeria",
    lat: 11.8, lng: 13.0,
    situation: "Conflict, displacement and hunger",
    impact: "VERY HIGH"
  },
  {
    name: "Chad",
    countries: "Chad",
    lat: 15.0, lng: 21.0,
    situation: "Refugees and food insecurity",
    impact: "VERY HIGH"
  }
];

const FOOD_CRISIS_LAST_UPDATED = "11 October 2026";

function foodCrisisPopup(crisis) {
  const fields = [
    ["Crisis", crisis.name],
    ["Main countries affected", crisis.countries],
    ["Situation in 2026", crisis.situation],
    ["Estimated impact", crisis.impact],
    ["Context", null],
    ["Sources", null],
    ["Last updated", FOOD_CRISIS_LAST_UPDATED]
  ];

  const rows = fields.map(([label, value]) => `
    <div style="margin:7px 0;">
      <strong>${escapeHTML(label)}:</strong>
      <span>${escapeHTML(value ?? "Not yet available")}</span>
    </div>
  `).join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;min-width:220px;max-width:320px;line-height:1.45;">
      <div style="color:${FOOD_CRISIS_COLOR};font-size:11px;font-weight:700;letter-spacing:.06em;margin-bottom:8px;">
        FOOD INSECURITY & FAMINE RISK
      </div>
      ${rows}
    </div>
  `;
}

// Create a separate toggleable layer.
const foodCrisisMarkers = L.layerGroup();

foodCrises.forEach(crisis => {
  const marker = L.circleMarker([crisis.lat, crisis.lng], {
    radius: 7,
    color: "#ffffff",
    weight: 1.5,
    fillColor: FOOD_CRISIS_COLOR,
    fillOpacity: 0.95
  });

  marker.bindPopup(foodCrisisPopup(crisis));
  marker.bindTooltip(`${crisis.name} — Food Crisis`);
  marker.addTo(foodCrisisMarkers);
});

// Display the new layer by default.
foodCrisisMarkers.addTo(map);

// Add it to the existing layer selector.
const existingLayerControl = Object.values(map._layers).find(
  layer => layer instanceof L.Control.Layers
);

// Leaflet stores controls separately, so add a small independent selector.
L.control.layers(
  null,
  {
    "Food Insecurity & Famine Risk": foodCrisisMarkers
  },
  { collapsed: false }
).addTo(map);

console.log(`Food crises loaded: ${foodCrises.length}`);


/* ==========================================
   NATURAL DISASTERS — LIGHT BLUE LAYER
   Last updated: 11 October 2026
   ========================================== */

const NATURAL_COLOR = "#38bdf8";
const NATURAL_LAST_UPDATED = "11 October 2026";

const naturalDisasters = [
  {
    name: "European Heatwave and Drought",
    location: "Western, Central and Southern Europe",
    type: "Heatwave and drought",
    countries: "Spain, France, Italy, Greece, Portugal, United Kingdom, Netherlands and others",
    period: "Summer 2026",
    impact: "CRITICAL — reported record temperatures, agricultural losses, water restrictions and wildfires; the supplied table cites over €15 billion in European wildfire damages.",
    lat: 46, lng: 8,
    sources: [
      { label: "Reuters", url: "https://www.reuters.com/sustainability/eu-pushes-fire-prevention-seoul-battles-heatwave-2026-08-07/" }
    ]
  },
  {
    name: "Major Wildfires in France",
    location: "Southwestern and southern France",
    type: "Wildfires",
    countries: "France",
    period: "July–August 2026",
    impact: "VERY HIGH — the supplied table reports a fire near Bordeaux burning approximately 420 km² and more than 224,000 evacuations.",
    lat: 44.8, lng: -0.6,
    sources: [
      { label: "Associated Press (AP News)", url: "https://apnews.com/article/65e96b9346f28b32ac00cb7c27129bb4" }
    ]
  },
  {
    name: "Wildfires in Greece",
    location: "Attica and other regions",
    type: "Wildfires",
    countries: "Greece",
    period: "July–August 2026",
    impact: "VERY HIGH — the supplied table reports damaged homes and over 1,000 evacuees in some areas.",
    lat: 38.0, lng: 23.7,
    sources: [
      { label: "Associated Press (AP News)", url: "https://apnews.com/article/65e96b9346f28b32ac00cb7c27129bb4" }
    ]
  },
  {
    name: "Wildfires in Spain and Portugal",
    location: "Iberian Peninsula",
    type: "Wildfires",
    countries: "Spain and Portugal",
    period: "Summer 2026",
    impact: "VERY HIGH — extensive areas affected, evacuations and agricultural and ecological losses.",
    lat: 40.0, lng: -6.5,
    sources: []
  },
  {
    name: "Wildfires in Italy",
    location: "Mainland Italy and islands",
    type: "Wildfires",
    countries: "Italy",
    period: "Summer 2026",
    impact: "HIGH — fires reportedly intensified by heat and dry conditions.",
    lat: 41.9, lng: 12.5,
    sources: []
  },
  {
    name: "Balkan Wildfires",
    location: "The Balkans",
    type: "Wildfires",
    countries: "Croatia, Montenegro, Albania, Greece and others",
    period: "Summer 2026",
    impact: "HIGH",
    lat: 42.5, lng: 19.0,
    sources: []
  },
  {
    name: "Wildfires in Canada",
    location: "Alberta, British Columbia and other provinces",
    type: "Wildfires",
    countries: "Canada",
    period: "Spring–summer 2026",
    impact: "VERY HIGH — the supplied table reports approximately 4,500 fires and nearly 4 million hectares burned by early August.",
    lat: 54.0, lng: -118.0,
    sources: [
      { label: "Reuters", url: "https://www.reuters.com/sustainability/eu-pushes-fire-prevention-seoul-battles-heatwave-2026-08-07/" }
    ]
  },
  {
    name: "Washington State Wildfires",
    location: "Washington State, United States",
    type: "Wildfires",
    countries: "United States",
    period: "August 2026",
    impact: "VERY HIGH — the supplied table reports over 700 buildings destroyed, more than 8,000 acres burned and tens of thousands evacuated.",
    lat: 47.4, lng: -120.5,
    sources: [
      { label: "Reuters", url: "https://www.reuters.com/sustainability/thousands-evacuate-washington-wildfires-2026-08-04/" }
    ]
  },
  {
    name: "Western United States Drought",
    location: "Western and southwestern United States",
    type: "Drought",
    countries: "United States",
    period: "2025–2026",
    impact: "HIGH — water stress, agricultural impacts and increased wildfire risk.",
    lat: 38.0, lng: -115.0,
    sources: []
  },
  {
    name: "South Korean Heatwave",
    location: "Korean Peninsula",
    type: "Heatwave",
    countries: "South Korea",
    period: "Summer 2026",
    impact: "VERY HIGH — the supplied table reports temperatures near 40°C in Seoul and extraordinary civil-protection measures.",
    lat: 37.6, lng: 127.0,
    sources: [
      { label: "Reuters", url: "https://www.reuters.com/sustainability/eu-pushes-fire-prevention-seoul-battles-heatwave-2026-08-07/" }
    ]
  },
  {
    name: "United Kingdom Drought",
    location: "England and Wales",
    type: "Drought",
    countries: "United Kingdom",
    period: "2026",
    impact: "HIGH — the supplied table describes July as the driest month in nearly 200 years and reports official drought declarations in several regions.",
    lat: 52.5, lng: -1.5,
    sources: [
      { label: "Associated Press (AP News)", url: "https://apnews.com/article/65e96b9346f28b32ac00cb7c27129bb4" }
    ]
  },
  {
    name: "Puerto Rico Drought",
    location: "Puerto Rico",
    type: "Drought",
    countries: "Puerto Rico, United States",
    period: "2026",
    impact: "HIGH — water restrictions and rationing.",
    lat: 18.2, lng: -66.4,
    sources: [
      { label: "Reuters", url: "https://www.reuters.com/sustainability/eu-pushes-fire-prevention-seoul-battles-heatwave-2026-08-07/" }
    ]
  },
  {
    name: "Flooding in China",
    location: "Multiple provinces",
    type: "Floods and extreme rainfall",
    countries: "China",
    period: "2026",
    impact: "VERY HIGH — recurring floods and major agricultural and infrastructure losses.",
    lat: 30.5, lng: 112.0,
    sources: []
  },
  {
    name: "South and Southeast Asian Monsoon Floods",
    location: "India, Bangladesh, Nepal, Pakistan and surrounding areas",
    type: "Floods and monsoon rainfall",
    countries: "India, Bangladesh, Nepal, Pakistan and others",
    period: "2026 monsoon season",
    impact: "VERY HIGH — millions exposed to flooding and displacement.",
    lat: 25.0, lng: 85.0,
    sources: []
  },
  {
    name: "Flooding in Indonesia",
    location: "Java and other islands",
    type: "Floods and landslides",
    countries: "Indonesia",
    period: "2026",
    impact: "HIGH — recurring heavy rainfall, floods and landslides.",
    lat: -7.3, lng: 110.0,
    sources: []
  },
  {
    name: "Landslides in Indonesia",
    location: "Java and other mountainous regions",
    type: "Landslides",
    countries: "Indonesia",
    period: "2026",
    impact: "HIGH — homes, roads and infrastructure affected.",
    lat: -7.5, lng: 109.5,
    sources: []
  },
  {
    name: "Western Pacific Cyclones and Typhoons",
    location: "Philippines, Japan, Taiwan and surrounding areas",
    type: "Tropical cyclones",
    countries: "Philippines, Japan, Taiwan and others",
    period: "2026 cyclone season",
    impact: "HIGH — evacuations and damage; the supplied table mentions evacuation orders in Japan ahead of a typhoon in August.",
    lat: 20.0, lng: 130.0,
    sources: [
      { label: "Reuters", url: "https://www.reuters.com/sustainability/eu-pushes-fire-prevention-seoul-battles-heatwave-2026-08-07/" }
    ]
  },
  {
    name: "Flooding in Brazil",
    location: "Southern and southeastern Brazil",
    type: "Floods and extreme rainfall",
    countries: "Brazil",
    period: "2026",
    impact: "HIGH",
    lat: -25.5, lng: -51.0,
    sources: []
  },
  {
    name: "Flooding in Argentina and Uruguay",
    location: "Southern Cone",
    type: "Floods",
    countries: "Argentina and Uruguay",
    period: "2026",
    impact: "HIGH",
    lat: -34.5, lng: -57.5,
    sources: []
  },
  {
    name: "Flooding in East Africa",
    location: "Kenya, Ethiopia, Somalia, Tanzania and Uganda",
    type: "Floods",
    countries: "Kenya, Ethiopia, Somalia, Tanzania and Uganda",
    period: "2026",
    impact: "VERY HIGH — displacement, crop destruction and food-security problems.",
    lat: 1.0, lng: 38.0,
    sources: []
  },
  {
    name: "Horn of Africa Drought",
    location: "Somalia, Ethiopia and Kenya",
    type: "Drought",
    countries: "Somalia, Ethiopia and Kenya",
    period: "2025–2026",
    impact: "CRITICAL — food insecurity, livestock losses and displacement.",
    lat: 5.0, lng: 43.0,
    sources: []
  },
  {
    name: "Southern Africa Drought",
    location: "Zimbabwe, Zambia, Malawi, Mozambique and surrounding countries",
    type: "Drought",
    countries: "Zimbabwe, Zambia, Malawi, Mozambique and others",
    period: "2024–2026",
    impact: "VERY HIGH — severe impacts on agriculture and food security.",
    lat: -17.0, lng: 29.0,
    sources: []
  },
  {
    name: "Flooding in West Africa",
    location: "Sahel and West Africa",
    type: "Floods",
    countries: "Niger, Nigeria, Chad, Mali, Burkina Faso and others",
    period: "2026",
    impact: "HIGH",
    lat: 13.0, lng: 2.0,
    sources: []
  },
  {
    name: "Flooding in Afghanistan and Pakistan",
    location: "Afghanistan and Pakistan",
    type: "Floods and extreme rainfall",
    countries: "Afghanistan and Pakistan",
    period: "2026",
    impact: "HIGH",
    lat: 32.0, lng: 68.0,
    sources: []
  },
  {
    name: "Earthquakes in Asia",
    location: "Multiple seismically active areas",
    type: "Earthquakes",
    countries: "Japan, Indonesia, Philippines, China and others",
    period: "2026",
    impact: "VARIABLE — impacts range from localized damage to major emergencies.",
    lat: 24.0, lng: 115.0,
    sources: []
  },
  {
    name: "Seismic and Volcanic Activity in Indonesia",
    location: "Java, Sumatra and other islands",
    type: "Volcanoes and earthquakes",
    countries: "Indonesia",
    period: "2026",
    impact: "HIGH locally",
    lat: -2.5, lng: 120.0,
    sources: []
  },
  {
    name: "Volcanic Activity in the Philippines",
    location: "Luzon and other islands",
    type: "Volcanic activity",
    countries: "Philippines",
    period: "2026",
    impact: "HIGH locally — the supplied table mentions monitoring and evacuations associated with Mayon and other volcanoes.",
    lat: 13.3, lng: 123.7,
    sources: []
  },
  {
    name: "Volcanic Activity in Iceland",
    location: "Reykjanes Peninsula",
    type: "Volcanic eruptions",
    countries: "Iceland",
    period: "Episodic since 2021; activity in 2026",
    impact: "HIGH locally — evacuations and infrastructure damage.",
    lat: 63.9, lng: -22.3,
    sources: []
  },
  {
    name: "Earthquakes in Turkey and the Eastern Mediterranean",
    location: "Turkey and surrounding areas",
    type: "Earthquakes",
    countries: "Turkey and neighboring countries",
    period: "2026",
    impact: "MEDIUM / HIGH",
    lat: 38.0, lng: 37.0,
    sources: []
  },
  {
    name: "Floods and Landslides in Central America",
    location: "Guatemala, Honduras, El Salvador, Nicaragua and surrounding areas",
    type: "Floods and landslides",
    countries: "Guatemala, Honduras, El Salvador, Nicaragua and others",
    period: "2026",
    impact: "HIGH",
    lat: 14.0, lng: -87.5,
    sources: []
  },
  {
    name: "Atlantic Hurricane Season",
    location: "Caribbean, Gulf of Mexico and United States",
    type: "Hurricanes",
    countries: "Caribbean countries, United States, Mexico and others",
    period: "2026 hurricane season",
    impact: "VARIABLE — the season remains active; impacts depend on each storm.",
    lat: 20.0, lng: -65.0,
    sources: []
  },
  {
    name: "Tornadoes and Severe Storms in the United States",
    location: "Great Plains, Midwest and southern United States",
    type: "Tornadoes and severe storms",
    countries: "United States",
    period: "2026",
    impact: "HIGH — numerous severe-weather episodes during the season.",
    lat: 37.0, lng: -97.0,
    sources: []
  },
  {
    name: "Middle Eastern Heatwave",
    location: "Arabian Peninsula, Iran, Iraq and the Levant",
    type: "Extreme heat",
    countries: "Saudi Arabia, Iran, Iraq, United Arab Emirates, Qatar and others",
    period: "Summer 2026",
    impact: "VERY HIGH — extreme temperatures and water stress.",
    lat: 29.0, lng: 45.0,
    sources: []
  },
  {
    name: "Mediterranean Drought",
    location: "Eastern and western Mediterranean",
    type: "Drought",
    countries: "Spain, Italy, Greece, Turkey and others",
    period: "2025–2026",
    impact: "HIGH — impacts on agriculture, water supplies and wildfire risk.",
    lat: 36.0, lng: 18.0,
    sources: []
  },
  {
    name: "Extreme Rainfall and Landslides in Nepal",
    location: "Himalayas",
    type: "Extreme rainfall and landslides",
    countries: "Nepal",
    period: "2026",
    impact: "HIGH",
    lat: 28.3, lng: 84.0,
    sources: []
  },
  {
    name: "Flooding in Bangladesh",
    location: "Bangladesh",
    type: "Floods",
    countries: "Bangladesh",
    period: "2026",
    impact: "VERY HIGH — large population exposed to flooding.",
    lat: 24.0, lng: 90.0,
    sources: []
  },
  {
    name: "Flooding in India",
    location: "Assam, Bihar, West Bengal and other regions",
    type: "Floods",
    countries: "India",
    period: "2026",
    impact: "VERY HIGH",
    lat: 25.0, lng: 87.0,
    sources: []
  },
  {
    name: "Wildfires in Russia",
    location: "Siberia and the Russian Far East",
    type: "Wildfires",
    countries: "Russia",
    period: "Spring–summer 2026",
    impact: "HIGH — large forest areas affected.",
    lat: 60.0, lng: 110.0,
    sources: []
  },
  {
    name: "Wildfires in Mongolia",
    location: "Northern and central Mongolia",
    type: "Wildfires and drought",
    countries: "Mongolia",
    period: "2026",
    impact: "MEDIUM / HIGH",
    lat: 47.0, lng: 105.0,
    sources: []
  },
  {
    name: "Wildfires in Australia",
    location: "Multiple regions",
    type: "Wildfires",
    countries: "Australia",
    period: "2026",
    impact: "HIGH, with regional variation",
   lat: -30.0, lng: 134.0,
    sources: []
  }
];

// Create the layer separately from the existing layers.
const naturalDisasterMarkers = L.layerGroup();

function naturalDisasterPopup(disaster) {
  const fields = [
    ["Disaster / crisis", disaster.name],
    ["Location", disaster.location],
    ["Type", disaster.type],
    ["Countries affected", disaster.countries],
    ["Period / duration", disaster.period],
    ["Estimated impact", disaster.impact],
    ["Context", null],
    ["Last updated", NATURAL_LAST_UPDATED]
  ];

  const rows = fields.map(([label, value]) => `
    <div style="margin:7px 0;">
      <strong>${escapeHTML(label)}:</strong>
      <span>${escapeHTML(value ?? "Not yet available")}</span>
    </div>
  `).join("");

  const sourceLinks = disaster.sources.length
    ? disaster.sources.map(source =>
        `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)}</a>`
      ).join(" · ")
    : "Not yet available";

  return `
    <div style="font-family:Inter,Arial,sans-serif;min-width:220px;max-width:320px;line-height:1.45;">
      <div style="color:${NATURAL_COLOR};font-size:11px;font-weight:700;letter-spacing:.06em;margin-bottom:8px;">
        NATURAL DISASTER
      </div>
      ${rows}
      <div style="margin:7px 0;">
        <strong>Sources:</strong> ${sourceLinks}
      </div>
    </div>
  `;
}

naturalDisasters.forEach(disaster => {
  const marker = L.circleMarker([disaster.lat, disaster.lng], {
    radius: 7,
    color: "#ffffff",
    weight: 1.5,
    fillColor: NATURAL_COLOR,
    fillOpacity: 0.95
  });

  marker.bindPopup(naturalDisasterPopup(disaster));
  marker.bindTooltip(disaster.name);
  marker.addTo(naturalDisasterMarkers);
});

// Display the layer by default.
naturalDisasterMarkers.addTo(map);

// Independent layer selector.
L.control.layers(
  null,
  {
    "Natural Disasters": naturalDisasterMarkers
  },
  { collapsed: false }
).addTo(map);

console.log(`Natural disasters loaded: ${naturalDisasters.length}`);



(() => {
  // WORLD STABILITY OBSERVATORY — ECONOMIC SANCTIONS
  // Last reviewed: 11 October 2026
  // Requires the existing Leaflet map variable: map

  if (typeof L === "undefined" || typeof map === "undefined") {
    console.error("Economic Sanctions: Leaflet or the existing map was not found.");
    return;
  }

  const reviewed = "11 October 2026";

  const sanctionsData = [
    {
      country: "Russia",
      coords: [61.52, 105.32],
      authorities: "EU, United States, United Kingdom, Canada, Japan, Australia, Switzerland and others",
      since: "2014; major expansion in 2022",
      status: "Extensive active sanctions",
      type: "Financial restrictions, asset freezes, export controls, energy and transport restrictions, import restrictions and services bans.",
      motive: "Russia's full-scale invasion of Ukraine and its earlier actions against Ukraine.",
      impact: "Extreme",
      frozen: "Approximately €210 billion in Russian central-bank assets immobilised in the EU. Private assets are a separate category; do not add them without a verified source.",
      annual: "No single reliable annual figure; estimates depend on methodology and counterfactual assumptions.",
      trade: "Oil, gas, metals, machinery, technology, transport and financial services.",
      context: "Measures differ by sanctioning jurisdiction. An immobilised sovereign asset is not the same as a frozen private asset, and neither automatically represents money confiscated.",
      sources: [
        ["EU — sanctions against Russia", "https://www.consilium.europa.eu/en/policies/sanctions-against-russia/"]
      ]
    },
    {
      country: "Iran",
      coords: [32.43, 53.69],
      authorities: "United States, EU, United Kingdom, Canada, Australia and UN measures under relevant regimes",
      since: "1979; nuclear-related measures from 2006; major US expansion in 2018",
      status: "Active; measures vary by jurisdiction",
      type: "Oil and petrochemical restrictions, financial measures, asset freezes, export controls and targeted listings.",
      motive: "Nuclear proliferation concerns, missiles, human rights and regional security.",
      impact: "Extreme",
      frozen: "No single comprehensive, comparable total available.",
      annual: "Economic costs are substantial, but annual estimates depend on oil prices, enforcement and methodology.",
      trade: "Oil, petrochemicals, banking, technology, transport and shipping.",
      context: "Nuclear-related UN and EU measures were reimposed in September 2025 through the snapback process. Other national programmes have separate legal scopes.",
      sources: [
        ["EU Council — Iran sanctions snapback, 2025", "https://www.consilium.europa.eu/en/press/press-releases/2025/09/29/iran-sanctions-snapback-council-reimposes-restrictive-measures/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "North Korea",
      coords: [40.34, 127.51],
      authorities: "UN, United States, EU, United Kingdom, Japan, South Korea and others",
      since: "2006; additional measures followed later",
      status: "Extensive active sanctions",
      type: "Arms-related restrictions, financial measures, asset freezes, travel restrictions and restrictions on specified exports and imports.",
      motive: "Nuclear weapons and ballistic-missile programmes.",
      impact: "Extreme relative to the economy",
      frozen: "No single reliable aggregate.",
      annual: "No robust, comparable annual estimate available.",
      trade: "Coal, minerals, petroleum products, arms-related goods, luxury goods and financial services.",
      context: "UN sanctions target specified goods, activities and parties. The overall economic effect is difficult to separate from domestic policy and other factors.",
      sources: [
        ["UN Security Council — DPRK sanctions committee", "https://main.un.org/securitycouncil/en/sanctions/1718"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Belarus",
      coords: [53.71, 27.95],
      authorities: "EU, United States, United Kingdom, Canada, Japan and others",
      since: "2006; major expansions in 2020–2022",
      status: "Active; scope varies by jurisdiction",
      type: "Financial restrictions, asset freezes, trade restrictions and controls on specified goods and technologies.",
      motive: "Political repression, human-rights concerns and support for Russia's war against Ukraine.",
      impact: "Very high",
      frozen: "No single verified total across jurisdictions.",
      annual: "No reliable, universally accepted annual estimate.",
      trade: "Potash, petroleum products, timber, machinery, technology and transport.",
      context: "Measures differ between the EU and other sanctioning jurisdictions; the list of restricted sectors has changed over time.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Venezuela",
      coords: [6.42, -66.59],
      authorities: "United States, EU, United Kingdom, Canada and others",
      since: "2015; significant expansion from 2017–2019",
      status: "Targeted and sector-specific measures; scope varies",
      type: "Asset freezes, financial restrictions, restrictions on specified transactions and targeted listings.",
      motive: "Political repression, democratic concerns, corruption and human-rights violations.",
      impact: "High; exact effects are disputed and difficult to isolate",
      frozen: "No single comparable total across jurisdictions.",
      annual: "No precise annual figure can be attributed solely to sanctions with confidence.",
      trade: "Oil, gold, finance and specified industrial goods.",
      context: "Some measures target individuals and entities, while others restrict particular financial or oil-related transactions. These are not identical regimes.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Cuba",
      coords: [21.52, -77.78],
      authorities: "Primarily the United States",
      since: "Early 1960s; Cuban Assets Control Regulations adopted in 1963",
      status: "Active US embargo framework; exceptions and licences apply",
      type: "Trade and financial restrictions, restrictions on certain transactions, travel-related rules and asset controls.",
      motive: "US foreign-policy and national-security objectives concerning the Cuban government.",
      impact: "Broad restrictions on US-linked trade; overall impact is difficult to isolate",
      frozen: "No directly comparable current total supplied here.",
      annual: "Cuban government estimates of cumulative losses are not directly comparable to independently measured annual losses.",
      trade: "A wide range of goods and financial services involving US persons or jurisdiction.",
      context: "The US embargo is not a universal prohibition imposed by every country. Rules, exceptions and licensing requirements vary by transaction.",
      sources: [
        ["US Treasury — Cuba sanctions programme", "https://ofac.treasury.gov/sanctions-programs-and-country-information/cuba-sanctions"],
        ["US Treasury — Cuba-related recent actions", "https://ofac.treasury.gov/recent-actions"]
      ]
    },
    {
      country: "Myanmar",
      coords: [21.92, 95.96],
      authorities: "United States, EU, United Kingdom, Canada, Australia and others",
      since: "Earlier measures in the 1990s; expanded following the 2021 military coup",
      status: "Targeted measures; scope varies",
      type: "Asset freezes, travel restrictions and controls on specified arms, equipment, entities and services.",
      motive: "Military coup, repression and human-rights violations.",
      impact: "Significant in targeted sectors; no reliable overall annual estimate",
      frozen: "No single verified aggregate.",
      annual: "Not available on a comparable basis.",
      trade: "Defence-related goods, energy, finance and companies linked to military interests.",
      context: "Sanctions do not apply uniformly to all trade with Myanmar; designated entities and prohibited transactions depend on the issuing jurisdiction.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — Burma-related measures", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Syria",
      coords: [34.80, 38.996],
      authorities: "United States, United Kingdom and others; EU retains certain targeted measures",
      since: "2011; major easing and changes in 2025–2026",
      status: "Broad EU economic sanctions lifted; targeted measures remain",
      type: "Selected individual and entity restrictions and certain security-related measures; US programme rules changed in 2025.",
      motive: "Measures were introduced in response to the Assad government's repression and conflict-related conduct.",
      impact: "Not comparable with the earlier broad sanctions period",
      frozen: "No single verified aggregate.",
      annual: "No comparable estimate for the current regime.",
      trade: "Measures depend on jurisdiction, designated party, goods and applicable authorisations.",
      context: "The EU lifted broad economic sanctions in May 2025 but retained targeted measures. The US Syria sanctions programme ceased effective 1 July 2025, subject to separate restrictions and designations that may still apply.",
      sources: [
        ["EU Council — Syria", "https://www.consilium.europa.eu/en/policies/syria/"],
        ["US Treasury — Syria programme update", "https://ofac.treasury.gov/recent-actions/20250630"]
      ]
    },
    {
      country: "Nicaragua",
      coords: [12.87, -85.21],
      authorities: "United States, EU, United Kingdom, Canada and others",
      since: "2018 onward",
      status: "Targeted measures",
      type: "Asset freezes, travel restrictions and measures against designated individuals and entities.",
      motive: "Political repression, human-rights concerns and democratic deterioration.",
      impact: "Likely more limited than comprehensive trade embargoes; not reliably quantified",
      frozen: "No single comparable aggregate.",
      annual: "No reliable annual figure available.",
      trade: "Designated people and entities, financial transactions and certain specified sectors.",
      context: "Do not describe these targeted measures as a general embargo on Nicaragua's entire economy.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Sudan",
      coords: [12.86, 30.22],
      authorities: "UN, United States, EU, United Kingdom and others, under different regimes",
      since: "Different periods; additional measures connected to the war from 2023",
      status: "Targeted and region-specific measures; national regimes differ",
      type: "Asset freezes, travel bans, arms restrictions and measures against designated companies and individuals.",
      motive: "Conflict, threats to peace and security, human-rights abuses and atrocities.",
      impact: "Conflict damage greatly exceeds what can be isolated as a sanctions effect",
      frozen: "No single comparable total.",
      annual: "Cannot be separated reliably from the cost of war and economic disruption.",
      trade: "Arms, gold-related networks, finance and designated companies.",
      context: "The UN regime includes measures connected to Darfur; national sanctions programmes have their own legal scope. Avoid describing all trade with Sudan as embargoed.",
      sources: [
        ["UN Security Council — Sudan sanctions committee", "https://main.un.org/securitycouncil/en/sanctions/1591"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Haiti",
      coords: [18.97, -72.29],
      authorities: "UN, United States, Canada and others",
      since: "Current UN regime established in 2022",
      status: "Targeted measures",
      type: "Asset freezes, travel bans and targeted arms embargo measures.",
      motive: "Gang violence and actions threatening peace, security and stability.",
      impact: "Limited direct coverage of the whole economy; targeted effects",
      frozen: "No single verified aggregate.",
      annual: "No reliable annual estimate.",
      trade: "Arms and financial transactions involving designated individuals or entities.",
      context: "UN measures target designated individuals and entities; they are not a general embargo on Haiti.",
      sources: [
        ["UN Security Council — Haiti sanctions committee", "https://main.un.org/securitycouncil/en/sanctions/2653"]
      ]
    },
    {
      country: "Democratic Republic of the Congo",
      coords: [-2.88, 23.66],
      authorities: "UN, EU, United States, United Kingdom and others",
      since: "UN regime established in 2003; measures subsequently expanded",
      status: "Arms restrictions and targeted measures",
      type: "Arms embargo provisions, asset freezes and travel bans for designated parties.",
      motive: "Armed groups, conflict and threats to peace and security.",
      impact: "Sector- and actor-specific; no comparable national annual figure",
      frozen: "No single verified aggregate.",
      annual: "Not available on a comparable basis.",
      trade: "Arms and financial networks linked to designated parties; some minerals are affected indirectly.",
      context: "The UN arms embargo has a defined scope and exemptions. It should not be presented as a blanket ban on the DRC's mineral exports.",
      sources: [
        ["UN Security Council — DRC sanctions committee", "https://main.un.org/securitycouncil/en/sanctions/1533"]
      ]
    },
    {
      country: "Somalia",
      coords: [5.15, 46.20],
      authorities: "UN and various national or regional authorities",
      since: "UN measures from 1992; regime subsequently revised",
      status: "Active measures with a focus on Al-Shabaab and arms controls",
      type: "Arms-related restrictions, targeted asset freezes and travel bans, plus specified commodity restrictions.",
      motive: "Al-Shabaab, terrorism and threats to peace and security.",
      impact: "Not reliably quantifiable as a national annual cost",
      frozen: "No single comparable aggregate.",
      annual: "Not available.",
      trade: "Arms, charcoal-related restrictions and designated financial networks.",
      context: "The UN regime has changed over time. The present framework distinguishes measures concerning Somalia from those targeting Al-Shabaab.",
      sources: [
        ["UN Security Council — sanctions and committees", "https://main.un.org/securitycouncil/en/content/repertoire/sanctions-and-other-committees"]
      ]
    },
    {
      country: "Libya",
      coords: [26.34, 17.23],
      authorities: "UN, EU, United States, United Kingdom and others",
      since: "2011; measures subsequently modified",
      status: "Targeted measures and arms embargo",
      type: "Asset freezes, travel bans, arms restrictions and measures against certain illicit oil exports.",
      motive: "Conflict, political instability and threats to peace and security.",
      impact: "Significant in particular areas; no reliable annual total",
      frozen: "Large amounts of Libyan state assets were frozen internationally; totals vary by date and definition.",
      annual: "No comparable annual estimate.",
      trade: "Oil, arms and specified financial transactions.",
      context: "The UN framework includes an arms embargo, targeted asset freezes and travel bans, as well as measures concerning illicit exports of crude oil.",
      sources: [
        ["UN Security Council — Libya sanctions committee", "https://main.un.org/securitycouncil/en/sanctions/1970"]
      ]
    },
    {
      country: "Yemen",
      coords: [15.55, 48.52],
      authorities: "UN, United States, EU, United Kingdom and others",
      since: "UN targeted regime established in 2014; additional measures followed",
      status: "Targeted measures",
      type: "Asset freezes, travel bans and targeted arms embargo measures.",
      motive: "Conflict and actions threatening peace, security and stability.",
      impact: "Cannot be separated reliably from the effects of war",
      frozen: "No single verified aggregate.",
      annual: "Not available on a comparable basis.",
      trade: "Arms, maritime trade and designated financial networks.",
      context: "The UN regime targets designated parties. Other jurisdictions may impose additional measures under separate legal authorities.",
      sources: [
        ["UN Security Council — Yemen sanctions committee", "https://main.un.org/securitycouncil/en/sanctions/2140"]
      ]
    },
    {
      country: "South Sudan",
      coords: [6.88, 31.31],
      authorities: "UN, United States, EU, United Kingdom and others",
      since: "UN regime established in 2015",
      status: "Targeted measures and arms embargo",
      type: "Asset freezes, travel bans and arms restrictions.",
      motive: "Conflict, human-rights abuses and threats to peace and security.",
      impact: "Not reliably quantified separately from conflict-related damage",
      frozen: "No single comparable aggregate.",
      annual: "Not available.",
      trade: "Arms and financial transactions involving designated individuals or entities.",
      context: "UN financial and travel measures apply to designated parties; the arms embargo is a separate measure.",
      sources: [
        ["UN Security Council — South Sudan sanctions committee", "https://main.un.org/securitycouncil/en/sanctions/2206"]
      ]
    },
    {
      country: "Central African Republic",
      coords: [6.61, 20.94],
      authorities: "UN, EU, United States, United Kingdom and others",
      since: "UN regime established in 2013; revised in 2024",
      status: "Arms-related restrictions and targeted measures",
      type: "Arms embargo provisions, asset freezes and travel restrictions for designated parties.",
      motive: "Armed groups and conflict-related threats to peace and security.",
      impact: "Limited to specific actors and sectors; national impact not quantified",
      frozen: "No single verified aggregate.",
      annual: "Not available.",
      trade: "Arms, minerals and financial networks linked to designated parties.",
      context: "The UN framework was revised in 2024. Specific restrictions and exemptions must be checked against the applicable resolution.",
      sources: [
        ["UN Security Council — sanctions committees", "https://main.un.org/securitycouncil/en/content/repertoire/sanctions-and-other-committees"]
      ]
    },
    {
      country: "Mali",
      coords: [17.57, -3.996],
      authorities: "UN measures expired; separate EU and national measures must be checked individually",
      since: "Former UN regime established in 2017; expired in 2023",
      status: "Former UN regime expired on 31 August 2023",
      type: "Do not display the former UN asset-freeze and travel-ban regime as currently active.",
      motive: "The former regime concerned the peace process and threats to stability.",
      impact: "No current national impact estimate attributable to that expired UN regime",
      frozen: "No single comparable aggregate.",
      annual: "Not available.",
      trade: "Any current restrictions must be identified by issuing authority and legal instrument.",
      context: "The UN confirms that measures under the Mali sanctions regime expired on 31 August 2023. This does not automatically cancel every separate national measure.",
      sources: [
        ["UN Security Council — terminated sanctions regimes", "https://main.un.org/securitycouncil/en/sanctions/terminated-sanctions"]
      ]
    },
    {
      country: "Niger",
      coords: [17.61, 8.08],
      authorities: "EU, United States and others, depending on the measure",
      since: "Measures and aid decisions changed after the 2023 coup",
      status: "No blanket international economic embargo established by this entry",
      type: "Certain targeted listings and changes to aid or cooperation; verify each programme separately.",
      motive: "The 2023 coup and concerns about constitutional order.",
      impact: "Not reliably quantified as a sanctions-only annual cost",
      frozen: "No single verified aggregate.",
      annual: "Not available.",
      trade: "Aid, financial cooperation and any specified transactions covered by applicable measures.",
      context: "Suspending aid or cooperation is not automatically equivalent to an economic sanctions regime. Do not label all trade with Niger as prohibited.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Guinea",
      coords: [9.95, -9.70],
      authorities: "Measures vary by jurisdiction; no broad current UN country sanctions regime identified here",
      since: "Past measures followed the 2009 coup; later policies vary",
      status: "Do not assume a current comprehensive sanctions regime",
      type: "Any current restrictions must be linked to a specific person, entity or legal instrument.",
      motive: "Past measures related to the 2009 coup and human-rights concerns.",
      impact: "No current country-wide sanctions impact estimate established",
      frozen: "No single verified aggregate.",
      annual: "Not available.",
      trade: "No general trade restriction should be inferred without a current legal source.",
      context: "The date of earlier sanctions does not prove that those measures remain active. Verify current listings before showing this as an active sanctions case.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["UN Security Council — sanctions overview", "https://main.un.org/securitycouncil/en/sanctions/information"]
      ]
    },
    {
      country: "Burundi",
      coords: [-3.37, 29.92],
      authorities: "United States, EU and others, depending on the measure",
      since: "Measures introduced by different jurisdictions from 2015 onward",
      status: "Check current national listings; no general UN economic embargo identified here",
      type: "Historically targeted individual and entity restrictions.",
      motive: "Political crisis and human-rights concerns.",
      impact: "No reliable current national annual estimate.",
      frozen: "No single verified aggregate.",
      annual: "Not available.",
      trade: "Any remaining measures should be identified by issuing jurisdiction and listed party.",
      context: "Past restrictions should not be treated as proof of a current broad embargo. Confirm current legal status before classifying the country.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Guinea-Bissau",
      coords: [11.80, -15.18],
      authorities: "UN; other jurisdictions must be checked separately",
      since: "UN regime established in 2012",
      status: "Targeted UN travel ban",
      type: "Travel restrictions on individuals designated by the UN committee.",
      motive: "Political instability and threats to constitutional order.",
      impact: "Very limited direct economy-wide impact from the UN measure",
      frozen: "No UN aggregate for broad country-wide frozen assets identified.",
      annual: "Not available.",
      trade: "No general trade embargo under the cited UN regime.",
      context: "The UN sanctions committee describes a travel ban on designated individuals. Do not label this a general asset freeze or economic embargo.",
      sources: [
        ["UN Security Council — Guinea-Bissau sanctions committee", "https://main.un.org/securitycouncil/en/sanctions/2048"]
      ]
    },
    {
      country: "Zimbabwe",
      coords: [-19.02, 29.15],
      authorities: "United States, EU, United Kingdom and others",
      since: "Measures introduced in different forms from the 2000s",
      status: "Targeted measures; national regimes differ",
      type: "Restrictions on listed individuals and entities, including certain financial or defence-related measures.",
      motive: "Human-rights concerns, governance and political repression.",
      impact: "No reliable annual figure attributable solely to sanctions",
      frozen: "No single comparable aggregate.",
      annual: "Not available on a comparable basis.",
      trade: "Designated individuals and entities, finance and specified goods.",
      context: "Sanctions vary by jurisdiction and have been amended over time. A country-wide trade embargo should not be inferred.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Afghanistan / Taliban",
      coords: [33.94, 67.71],
      authorities: "UN, United States and other jurisdictions",
      since: "Different regimes over decades; Taliban-related UN regime separated in 2011",
      status: "Targeted Taliban-related measures; separate financial restrictions may apply",
      type: "Asset freezes, travel bans and restrictions on dealings with designated persons or entities.",
      motive: "Terrorism-related concerns, security and restrictions concerning the Taliban.",
      impact: "Serious financial constraints, but not a single sanctions-only annual estimate",
      frozen: "Some Afghan central-bank reserves were immobilised after 2021; amounts and legal status depend on the asset and jurisdiction.",
      annual: "No reliable comparable annual figure.",
      trade: "Banking, external assets, aid and financial transactions involving designated parties.",
      context: "Taliban-related UN listings and the treatment of Afghan central-bank reserves are legally distinct issues. Do not treat all frozen assets as Taliban-owned.",
      sources: [
        ["UN Security Council — sanctions committees", "https://main.un.org/securitycouncil/en/content/repertoire/sanctions-and-other-committees"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Iraq",
      coords: [33.22, 43.68],
      authorities: "UN and various national authorities under distinct regimes",
      since: "Several historical regimes; current measures are narrower",
      status: "Targeted and legacy measures; not the former comprehensive embargo",
      type: "Measures concerning designated individuals, entities and assets under specific legal frameworks.",
      motive: "Legacy measures concerning the former regime, terrorism-related concerns and corruption-related listings.",
      impact: "No comparable current country-wide sanctions impact estimate",
      frozen: "No single current aggregate supplied here.",
      annual: "Not available.",
      trade: "Specific designated persons and transactions.",
      context: "The broad UN sanctions regime imposed after Iraq's 1990 invasion of Kuwait is historical; it must not be described as the current general status.",
      sources: [
        ["UN Security Council — sanctions information", "https://main.un.org/securitycouncil/en/sanctions/information"]
      ]
    },
    {
      country: "Lebanon",
      coords: [33.85, 35.86],
      authorities: "United States and other jurisdictions, depending on the target",
      since: "Different targeted programmes over time",
      status: "Targeted measures, not a general embargo on Lebanon",
      type: "Restrictions on designated individuals, organisations and financial transactions.",
      motive: "Measures may relate to Hezbollah, terrorism, corruption or other specified conduct.",
      impact: "No reliable whole-economy annual sanctions estimate",
      frozen: "No single comparable aggregate.",
      annual: "Not available.",
      trade: "Transactions involving designated organisations, individuals or entities.",
      context: "A measure against a specific organisation or person does not mean all Lebanese trade or banking is sanctioned.",
      sources: [
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"],
        ["UN Security Council — sanctions information", "https://main.un.org/securitycouncil/en/sanctions/information"]
      ]
    },
    {
      country: "Azerbaijan",
      coords: [40.14, 47.58],
      authorities: "Some individual or transaction-specific measures may apply under particular regimes",
      since: "Different measures; no general country-wide sanctions regime established by this entry",
      status: "No broad country-wide economic sanctions regime identified here",
      type: "Only specific designations or restrictions should be recorded when supported by a legal source.",
      motive: "May vary by individual case; human-rights concerns alone do not establish a sanctions regime.",
      impact: "No country-wide sanctions impact estimate established",
      frozen: "No comparable aggregate.",
      annual: "Not available.",
      trade: "No broad trade restriction should be inferred.",
      context: "This entry should not be presented as a sanctioned country without a specific, current legal instrument and identified target.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Türkiye",
      coords: [38.96, 35.24],
      authorities: "Some specific US, EU or other measures may apply to defined transactions or entities",
      since: "Different measures; no general country-wide embargo established by this entry",
      status: "No broad country-wide economic sanctions regime identified here",
      type: "Specific defence, export-control or individual measures must be distinguished from a country-wide sanctions programme.",
      motive: "May depend on the specific measure or transaction.",
      impact: "No national sanctions-only estimate established",
      frozen: "No comparable aggregate.",
      annual: "Not available.",
      trade: "Only goods, services or entities covered by a specific legal measure.",
      context: "Disputes involving defence, Syria or human rights do not by themselves prove that all trade with Türkiye is sanctioned.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    },
    {
      country: "Bosnia and Herzegovina",
      coords: [43.92, 17.68],
      authorities: "Certain US or other individual designations; not a general country-wide regime",
      since: "Different targeted measures over time",
      status: "Targeted designations, where applicable",
      type: "Restrictions on listed individuals and entities rather than a general trade embargo.",
      motive: "Specific corruption, destabilisation or peace-agreement-related conduct in individual cases.",
      impact: "No country-wide sanctions impact estimate established",
      frozen: "No comparable aggregate.",
      annual: "Not available.",
      trade: "Only transactions covered by the applicable designation.",
      context: "A sanctions designation against an individual is not a general economic embargo on Bosnia and Herzegovina.",
      sources: [
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"],
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"]
      ]
    },
    {
      country: "Guatemala",
      coords: [15.78, -90.23],
      authorities: "Individual measures may be imposed by the United States, EU or other jurisdictions",
      since: "Different individual designations over time",
      status: "No broad country-wide economic sanctions regime identified here",
      type: "Potential targeted visa, financial or individual measures; verify each designation.",
      motive: "Specific corruption or institutional concerns in individual cases.",
      impact: "No country-wide sanctions impact estimate established",
      frozen: "No comparable aggregate.",
      annual: "Not available.",
      trade: "No broad trade restriction should be inferred.",
      context: "Anti-corruption measures or visa restrictions against individuals are not the same as a general economic sanctions regime against Guatemala.",
      sources: [
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"],
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"]
      ]
    },
    {
      country: "Tunisia",
      coords: [33.89, 9.54],
      authorities: "Specific measures may apply to designated individuals under relevant legal regimes",
      since: "Different individual cases over time",
      status: "No broad country-wide economic sanctions regime identified here",
      type: "Any asset freeze or travel restriction must be linked to a specific listing.",
      motive: "Specific individual cases; terrorism-related measures must be distinguished from country-wide sanctions.",
      impact: "No national sanctions impact estimate established",
      frozen: "No comparable aggregate.",
      annual: "Not available.",
      trade: "No broad trade restriction should be inferred without a current legal source.",
      context: "This entry is retained for monitoring, but should not imply a general UN or EU economic embargo against Tunisia.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["UN Security Council — sanctions information", "https://main.un.org/securitycouncil/en/sanctions/information"]
      ]
    },
    {
      country: "Moldova / Transnistria",
      coords: [47.01, 28.86],
      authorities: "EU, United States, United Kingdom and others, depending on the individual or entity",
      since: "Different measures; Transnistria-related measures have separate legal histories",
      status: "Targeted measures; not a general embargo on Moldova",
      type: "Restrictions against listed individuals or entities and certain destabilising activities.",
      motive: "Destabilisation, interference and threats to regional security in specified cases.",
      impact: "No comparable national annual estimate.",
      frozen: "No single verified aggregate.",
      annual: "Not available.",
      trade: "Only transactions and entities within the scope of the relevant legal measures.",
      context: "Moldova and Transnistria should not be treated as a single country-wide sanctions regime. The status of a specific designation must be checked against its current legal basis.",
      sources: [
        ["EU Council — sanctions overview", "https://www.consilium.europa.eu/en/topics/sanctions/"],
        ["US Treasury — sanctions programmes", "https://ofac.treasury.gov/sanctions-programs-and-country-information"]
      ]
    }
  ];

  // Remove only a previous version of this layer and its own control.
  if (window.sanctionsMarkers && map.hasLayer(window.sanctionsMarkers)) {
    map.removeLayer(window.sanctionsMarkers);
  }
  if (window.sanctionsLayerControl) {
    map.removeControl(window.sanctionsLayerControl);
  }

  const escapeText = (value) =>
    String(value ?? "Not available")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const sanctionsMarkers = L.layerGroup();

  sanctionsData.forEach((item) => {
    const sourceLinks = item.sources.map(([label, url]) => `
      <li>
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          ${escapeText(label)}
        </a>
      </li>
    `).join("");

    const popupHTML = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:320px;line-height:1.5;color:#172033">
        <h3 style="font-size:18px;margin:0 0 8px">
          ${escapeText(item.country)}
        </h3>
        <p><strong>Sanctioning authorities:</strong> ${escapeText(item.authorities)}</p>
        <p><strong>Since:</strong> ${escapeText(item.since)}</p>
        <p><strong>Status:</strong> ${escapeText(item.status)}</p>
        <p><strong>Type of measures:</strong> ${escapeText(item.type)}</p>
        <p><strong>Reason:</strong> ${escapeText(item.motive)}</p>
        <p><strong>Estimated economic impact:</strong> ${escapeText(item.impact)}</p>
        <p><strong>Known frozen assets:</strong> ${escapeText(item.frozen)}</p>
        <p><strong>Estimated annual economic loss:</strong> ${escapeText(item.annual)}</p>
        <p><strong>Affected trade:</strong> ${escapeText(item.trade)}</p>
        <p><strong>Context and limitations:</strong> ${escapeText(item.context)}</p>
        <div style="border-top:1px solid #ddd;margin-top:8px;padding-top:8px">
          <strong>Official sources</strong>
          <ul style="padding-left:18px;margin:5px 0">${sourceLinks}</ul>
          <p style="font-size:11px;color:#626b78;margin-bottom:0">
            Last reviewed: ${reviewed}. Legal scope and listings may change.
            “Not available” means no comparable figure is provided here.
          </p>
        </div>
      </div>
    `;

    const isFormerOrTargeted =
      /expired|no broad|no general|targeted|not a general/i.test(item.status);

    L.circleMarker(item.coords, {
  radius: 7,
  color: "#173b70",
  weight: 1.5,
  fillColor: "#102A43",
  fillOpacity: 0.88
    })
      .bindPopup(popupHTML)
      .bindTooltip(escapeText(item.country))
      .addTo(sanctionsMarkers);
  });

  sanctionsMarkers.addTo(map);

  window.sanctionsMarkers = sanctionsMarkers;
  window.sanctionsLayerControl = L.control.layers(
    null,
    { "Economic Sanctions": sanctionsMarkers },
    { collapsed: false }
  ).addTo(map);

  console.info(
    `Economic Sanctions loaded: ${sanctionsData.length} entries.`
  );
})();


(() => {
  // WORLD STABILITY OBSERVATORY
  // Layer: Diplomatic Tensions
  // Requires an existing Leaflet map variable named "map".

  if (typeof map === "undefined" || !window.L) {
    console.error(
      "Diplomatic Tensions: Leaflet or the existing map was not found."
    );
    return;
  }

  // Remove the previous version of this layer when rerunning the code.
  if (window.diplomaticTensionsLayer) {
    map.removeLayer(window.diplomaticTensionsLayer);
  }

  if (window.diplomaticTensionsControl) {
    map.removeControl(window.diplomaticTensionsControl);
  }

  const tensions = [
    {
      name: "Spain–Morocco / Ceuta",
      coords: [35.889, -5.321],
      actors: "Spain, Morocco, Ceuta and the European Union",
      since: "Long-standing territorial sensitivities; major diplomatic crisis in May 2021 and renewed border pressure reported in July 2026",
      issue: "Border management, migration, sovereignty and bilateral cooperation",
      impact: "High",
      context:
        "Ceuta is a Spanish autonomous city on the North African coast, bordering Morocco. Spain considers Ceuta part of its sovereign territory, while the status of Spain's North African territories has been a long-standing point of sensitivity in relations with Morocco. Large-scale crossings in May 2021 triggered a serious diplomatic crisis. A further border episode in July 2026 prompted additional European Union support for Spain, according to European institutional reporting. Spain and Morocco also cooperate on migration management, security and economic relations. Humanitarian needs affecting migrants and unaccompanied minors should be assessed separately from the diplomatic dispute.",
      sources: [
        {
          label: "European Parliament Research Service — Ceuta migrant crisis (2026)",
          url: "https://eprs.europarl.europa.eu/contents/publications/EPRS/2026/09/EPRS_BRI%282026%29791481.html?locale=EN"
        },
        {
          label: "European Commission — Emergency support for Spain, 9 September 2026",
          url: "https://spain.representation.ec.europa.eu/noticias-eventos/noticias-0/la-comision-concede-espana-1147-millones-de-euros-y-proporciona-asistencia-operativa-reforzada-para-2026-09-09_es"
        },
        {
          label: "Spanish Ministry of Foreign Affairs — Ceuta, 11 August 2026",
          url: "https://exteriores.gob.es/en/Comunicacion/NotasPrensa/Paginas/2026_NOTAS_P/Albares-visita-Ceuta-y-traslada-su-compromiso-total-y-permanente-con-la-Ciudad-Autonoma.aspx"
        },
        {
          label: "European Parliament — Resolution on the Ceuta crisis of 2021",
          url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021IP0289"
        },
        {
          label: "Moroccan Ministry of Foreign Affairs — Spain–Morocco joint declaration",
          url: "https://diplomatie.ma/es/xiii%C2%A0reunion%C2%A0de%C2%A0alto%C2%A0nivel%C2%A0marruecos-espa%C3%B1a-declaraci%C3%B3n%C2%A0conjunta"
        }
      ]
    },
    {
      name: "Serbia–Kosovo",
      coords: [43.2, 20.8],
      actors: "Serbia, Kosovo, the European Union and NATO",
      since: "Conflict in the 1990s; unresolved status dispute since Kosovo's 2008 declaration of independence",
      issue: "Recognition, northern Kosovo, security and normalization of relations",
      impact: "High",
      context:
        "Serbia does not recognize Kosovo's independence. Tensions have periodically escalated around northern Kosovo, including disputes over local governance, policing and the rights of the Serb community. The EU-facilitated dialogue seeks to normalize relations, while NATO's KFOR mission contributes to security. The parties' positions on sovereignty and recognition remain different.",
      sources: [
        {
          label: "European External Action Service — Belgrade–Pristina Dialogue",
          url: "https://www.eeas.europa.eu/eeas/belgrade-pristina-dialogue_en"
        },
        {
          label: "NATO — Kosovo and KFOR",
          url: "https://www.nato.int/cps/en/natohq/topics_48818.htm"
        }
      ]
    },
    {
      name: "Greece–Turkey",
      coords: [36.8, 27.0],
      actors: "Greece and Turkey",
      since: "Long-standing disputes in the Aegean Sea and eastern Mediterranean",
      issue: "Maritime boundaries, airspace, continental shelf and Cyprus",
      impact: "High",
      context:
        "Greece and Turkey disagree over several maritime and security questions in the Aegean and eastern Mediterranean. Their NATO membership provides a channel for dialogue, but disagreements over maritime jurisdiction, airspace and Cyprus remain unresolved. Diplomatic contacts can reduce tensions, although incidents and political statements can raise them again.",
      sources: [
        {
          label: "Council on Foreign Relations — Conflict and disputes in the eastern Mediterranean",
          url: "https://www.cfr.org/"
        },
        {
          label: "NATO — NATO and relations with Greece and Turkey",
          url: "https://www.nato.int/"
        }
      ]
    },
    {
      name: "Armenia–Azerbaijan",
      coords: [40.2, 46.5],
      actors: "Armenia and Azerbaijan",
      since: "Conflict over Nagorno-Karabakh; continuing negotiations after the 2020 and 2023 escalations",
      issue: "Border delimitation, peace agreement, transport links and displaced people",
      impact: "High",
      context:
        "Armenia and Azerbaijan have a history of conflict over Nagorno-Karabakh and their shared border. The 2023 Azerbaijani offensive led to the flight of almost the entire ethnic Armenian population of Nagorno-Karabakh. Subsequent negotiations have focused on a peace agreement, border delimitation, transport connections and outstanding humanitarian issues. Implementation and trust remain important challenges.",
      sources: [
        {
          label: "International Crisis Group — Armenia and Azerbaijan",
          url: "https://www.crisisgroup.org/europe-central-asia/caucasus"
        },
        {
          label: "United Nations — Armenia and Azerbaijan",
          url: "https://www.un.org/"
        }
      ]
    },
    {
      name: "China–Taiwan",
      coords: [24.0, 120.9],
      actors: "China, Taiwan and the United States",
      since: "Long-running dispute across the Taiwan Strait",
      issue: "Sovereignty, military activity and Taiwan's international status",
      impact: "High",
      context:
        "The People's Republic of China claims Taiwan as part of its territory and has not ruled out the use of force. Taiwan has its own elected government and institutions. Military exercises, air and naval activity, and disagreements over diplomatic recognition increase tensions. The United States maintains unofficial relations with Taiwan and provides for its self-defence under US law.",
      sources: [
        {
          label: "Council on Foreign Relations — Why China–Taiwan relations are tense",
          url: "https://www.cfr.org/backgrounder/china-taiwan-relations-tension-us-policy"
        },
        {
          label: "US Department of State — US relations with Taiwan",
          url: "https://www.state.gov/u-s-relations-with-taiwan/"
        }
      ]
    },
    {
      name: "China–Philippines",
      coords: [15.0, 117.0],
      actors: "China and the Philippines",
      since: "Ongoing South China Sea disputes",
      issue: "Maritime claims, fishing, coast guard encounters and freedom of navigation",
      impact: "High",
      context:
        "China and the Philippines have overlapping maritime claims in the South China Sea. Encounters involving coast guard vessels and Philippine resupply missions have generated repeated diplomatic protests and raised the risk of confrontation. A 2016 arbitral tribunal ruling rejected the legal basis for China's expansive historic-rights claim within the case brought by the Philippines; China rejects the ruling.",
      sources: [
        {
          label: "Permanent Court of Arbitration — South China Sea Arbitration",
          url: "https://pca-cpa.org/en/cases/7/"
        },
        {
          label: "Council on Foreign Relations — South China Sea",
          url: "https://www.cfr.org/global-conflict-tracker/conflict/territorial-disputes-south-china-sea"
        }
      ]
    },
    {
      name: "North Korea–South Korea",
      coords: [38.0, 127.0],
      actors: "North Korea, South Korea and the United States",
      since: "Division of the Korean Peninsula and the 1950–1953 Korean War",
      issue: "Nuclear weapons, missile tests, military deterrence and the border",
      impact: "High",
      context:
        "The Korean War ended with an armistice rather than a peace treaty. North Korea's nuclear weapons programme and missile tests, military activity near the border and the breakdown of dialogue contribute to persistent tensions. South Korea maintains a security alliance with the United States. Escalation could have consequences for the wider region.",
      sources: [
        {
          label: "Arms Control Association — North Korea",
          url: "https://www.armscontrol.org/factsheets/north-korea-nuclear-weapons"
        },
        {
          label: "United Nations Command",
          url: "https://www.unc.mil/"
        }
      ]
    },
    {
      name: "China–India",
      coords: [34.5, 78.0],
      actors: "China and India",
      since: "Long-running border dispute; major deadly clashes in 2020",
      issue: "Unsettled Himalayan border, military deployments and strategic rivalry",
      impact: "High",
      context:
        "China and India dispute sections of their Himalayan border, including areas in Ladakh and Arunachal Pradesh. Military clashes in 2020 led to deaths on both sides and a prolonged period of heightened deployments. Talks and disengagement agreements have sought to manage the situation, but the border remains incompletely demarcated and strategic mistrust persists.",
      sources: [
        {
          label: "Council on Foreign Relations — China–India relations",
          url: "https://www.cfr.org/"
        },
        {
          label: "International Crisis Group — Asia",
          url: "https://www.crisisgroup.org/asia"
        }
      ]
    },
    {
      name: "Japan–China",
      coords: [28.0, 125.0],
      actors: "Japan and China",
      since: "Long-standing East China Sea disputes",
      issue: "Senkaku/Diaoyu Islands, maritime activity and regional security",
      impact: "High",
      context:
        "Japan administers the Senkaku Islands, which China also claims and calls the Diaoyu Islands. Chinese and Japanese coast guard and maritime activity around the islands has repeatedly generated diplomatic protests. Broader tensions are also shaped by regional military competition and each country's relationship with the United States.",
      sources: [
        {
          label: "Japan Ministry of Foreign Affairs — Japan–China relations",
          url: "https://www.mofa.go.jp/region/asia-paci/china/"
        },
        {
          label: "Council on Foreign Relations — East China Sea",
          url: "https://www.cfr.org/"
        }
      ]
    },
    {
      name: "Russia–Ukraine",
      coords: [48.5, 36.5],
      actors: "Russia and Ukraine, with support and involvement from international partners",
      since: "Conflict since 2014; Russia's full-scale invasion began in February 2022",
      issue: "Territorial integrity, occupation, security and European stability",
      impact: "High",
      context:
        "Russia's full-scale invasion of Ukraine in February 2022 expanded the war that began with Russia's seizure of Crimea and conflict in eastern Ukraine in 2014. The war has caused extensive displacement, destruction and international sanctions. Ukraine and its partners emphasize sovereignty and territorial integrity, while Russia maintains claims over occupied Ukrainian territory. Diplomatic efforts have not resolved the conflict.",
      sources: [
        {
          label: "United Nations — Ukraine",
          url: "https://www.un.org/en/war-in-ukraine"
        },
        {
          label: "Council of the European Union — EU response to Russia's war",
          url: "https://www.consilium.europa.eu/en/policies/eu-response-russia-military-aggression-against-ukraine/"
        }
      ]
    },
    {
      name: "Russia–NATO",
      coords: [57.0, 30.0],
      actors: "Russia and NATO member states",
      since: "Long-running security confrontation, sharply intensified since 2014 and 2022",
      issue: "European security, military deployments, deterrence and Ukraine",
      impact: "High",
      context:
        "Relations between Russia and NATO have deteriorated sharply since Russia's annexation of Crimea in 2014 and its full-scale invasion of Ukraine in 2022. NATO has strengthened deterrence and defence on its eastern flank, while Russia opposes NATO enlargement and allied military support for Ukraine. The risk of miscalculation makes communication and crisis management important.",
      sources: [
        {
          label: "NATO — Relations with Russia",
          url: "https://www.nato.int/cps/en/natohq/topics_50090.htm"
        },
        {
          label: "Council of the European Union — Russia's war against Ukraine",
          url: "https://www.consilium.europa.eu/en/policies/eu-response-russia-military-aggression-against-ukraine/"
        }
      ]
    },
    {
      name: "Iran–Israel",
      coords: [32.5, 45.0],
      actors: "Iran and Israel, with regional and international actors",
      since: "Long-running regional rivalry, with direct confrontations in 2024 and subsequent escalations",
      issue: "Nuclear programme, regional armed groups, missiles and direct military action",
      impact: "High",
      context:
        "Iran and Israel have been regional adversaries for decades. Their rivalry involves Iran's nuclear programme, Israeli security concerns, Iranian support for armed groups and attacks attributed to or claimed by the two states. Direct exchanges have increased the risk of a wider regional confrontation. The situation can change quickly, so this marker represents a structural diplomatic and security tension rather than a live incident tracker.",
      sources: [
        {
          label: "International Atomic Energy Agency",
          url: "https://www.iaea.org/"
        },
        {
          label: "International Crisis Group — Middle East and North Africa",
          url: "https://www.crisisgroup.org/middle-east-north-africa"
        }
      ]
    },
    {
      name: "Israel–Lebanon",
      coords: [33.2, 35.5],
      actors: "Israel, Lebanon and Hezbollah",
      since: "Long-standing border conflict, with major escalation after October 2023",
      issue: "Cross-border attacks, security arrangements and implementation of ceasefire terms",
      impact: "High",
      context:
        "The Israel–Lebanon border has experienced repeated armed exchanges, particularly between Israel and Hezbollah. Escalation after October 2023 caused extensive displacement and destruction. Diplomatic efforts have focused on reducing hostilities, implementing security arrangements and enabling displaced civilians to return safely. The political and security situation remains fragile.",
      sources: [
        {
          label: "United Nations Interim Force in Lebanon (UNIFIL)",
          url: "https://unifil.unmissions.org/"
        },
        {
          label: "United Nations — Lebanon",
          url: "https://lebanon.un.org/"
        }
      ]
    },
    {
      name: "Israel–Palestine",
      coords: [31.8, 35.2],
      actors: "Israel and the Palestinians, including Palestinian political authorities and armed groups",
      since: "Decades-long conflict; major escalation after 7 October 2023",
      issue: "Occupation, security, statehood, settlements, hostages, displacement and humanitarian access",
      impact: "High",
      context:
        "The Israeli–Palestinian conflict concerns territory, security, self-determination and competing national claims. The attacks of 7 October 2023 and the subsequent war in Gaza caused a major escalation, with severe civilian suffering and destruction. The status of Jerusalem, Israeli settlements, Palestinian statehood, refugees and security arrangements remain central unresolved issues. Conditions and ceasefire arrangements must be checked against current reporting.",
      sources: [
        {
          label: "United Nations — Question of Palestine",
          url: "https://www.un.org/unispal/"
        },
        {
          label: "International Court of Justice",
          url: "https://www.icj-cij.org/"
        }
      ]
    },
    {
      name: "Turkey–Syria",
      coords: [36.5, 37.0],
      actors: "Turkey, Syrian authorities and actors in northern Syria",
      since: "Syrian conflict since 2011; continuing security and political disputes",
      issue: "Border security, Kurdish-led forces, refugees and Syria's political future",
      impact: "High",
      context:
        "Turkey's policy toward Syria has been shaped by border security, armed groups it considers threats, the presence of Syrian refugees and the country's changing political landscape. Turkish military operations and the status of Kurdish-led forces have been contentious. The situation has evolved significantly over time; developments should be verified before treating any specific incident as current.",
      sources: [
        {
          label: "United Nations — Syria",
          url: "https://syria.un.org/"
        },
        {
          label: "International Crisis Group — Syria",
          url: "https://www.crisisgroup.org/middle-east-north-africa/eastern-mediterranean/syria"
        }
      ]
    },
    {
      name: "Ethiopia–Egypt–Sudan / GERD",
      coords: [11.0, 32.0],
      actors: "Ethiopia, Egypt and Sudan",
      since: "Dispute over the Grand Ethiopian Renaissance Dam since its construction began in 2011",
      issue: "Nile water allocation, dam operation, drought and regional security",
      impact: "High",
      context:
        "Ethiopia's Grand Ethiopian Renaissance Dam on the Blue Nile has been a source of tension with downstream Egypt and Sudan. Ethiopia emphasizes electricity generation and development, while Egypt is concerned about water security and Sudan has raised questions about dam operation and safety. Negotiations have sought agreement on filling and operating the dam, but disagreements over binding arrangements have persisted.",
      sources: [
        {
          label: "International Crisis Group — Nile dam dispute",
          url: "https://www.crisisgroup.org/africa/horn-africa"
        },
        {
          label: "United Nations — Water",
          url: "https://www.un.org/en/global-issues/water"
        }
      ]
    },
    {
      name: "Venezuela–Guyana / Essequibo",
      coords: [6.5, -59.0],
      actors: "Venezuela and Guyana",
      since: "Long-running territorial dispute, intensified in 2023",
      issue: "Sovereignty over Essequibo, oil resources and regional security",
      impact: "High",
      context:
        "Venezuela and Guyana dispute the Essequibo region, which is administered by Guyana and claimed by Venezuela. The discovery and development of offshore oil resources have increased the stakes. Venezuela's 2023 referendum and subsequent statements heightened concern about possible escalation. The International Court of Justice is considering aspects of the dispute, and regional diplomacy has sought to prevent conflict.",
      sources: [
        {
          label: "International Court of Justice — Guyana v. Venezuela",
          url: "https://www.icj-cij.org/case/171"
        },
        {
          label: "CARICOM",
          url: "https://caricom.org/"
        }
      ]
    },
    {
      name: "United States–China",
      coords: [30.0, 150.0],
      actors: "United States and China",
      since: "Strategic rivalry intensified during the 2010s",
      issue: "Trade, technology, Taiwan, military competition and global influence",
      impact: "High",
      context:
        "The United States and China compete over regional security, advanced technology, trade, human rights and global influence. Taiwan and the South China Sea are particularly sensitive security issues. Tariffs, export controls and restrictions on strategic technologies add an economic dimension. Both governments also have incentives to maintain communication and avoid a direct military confrontation.",
      sources: [
        {
          label: "Council on Foreign Relations — US–China relations",
          url: "https://www.cfr.org/"
        },
        {
          label: "US Department of State — China",
          url: "https://www.state.gov/countries-areas/china/"
        }
      ]
    },
    {
      name: "United Kingdom–European Union / Gibraltar",
      coords: [36.14, -5.35],
      actors: "United Kingdom, Spain, the European Union and Gibraltar",
      since: "Gibraltar's status has remained sensitive, particularly following Brexit",
      issue: "Border arrangements, movement of people and goods, and sovereignty",
      impact: "Medium",
      context:
        "Gibraltar's status and its border with Spain have been recurring issues in UK–Spain relations and in the wider relationship between the United Kingdom and the European Union. Brexit added practical questions concerning movement, customs and the future legal arrangements for the territory. Negotiations and agreements can reduce disruption while leaving sovereignty positions unchanged.",
      sources: [
        {
          label: "UK Government — Gibraltar",
          url: "https://www.gov.uk/government/collections/gibraltar"
        },
        {
          label: "European Commission — Relations with the United Kingdom",
          url: "https://commission.europa.eu/strategy-and-policy/relations-united-kingdom_en"
        }
      ]
    },
    {
      name: "Cambodia–Thailand",
      coords: [13.5, 102.5],
      actors: "Cambodia and Thailand",
      since: "Long-standing border disputes, with renewed escalation reported in 2025",
      issue: "Border demarcation, territorial claims and military incidents",
      impact: "High",
      context:
        "Cambodia and Thailand have disputed parts of their land border for decades, including areas near historic temples. Previous clashes and renewed tensions have involved military deployments, border restrictions and competing national claims. Diplomatic negotiations and regional mechanisms are important to prevent incidents from escalating.",
      sources: [
        {
          label: "ASEAN",
          url: "https://asean.org/"
        },
        {
          label: "International Crisis Group — Asia",
          url: "https://www.crisisgroup.org/asia"
        }
      ]
    },
    {
      name: "Serbia–Croatia",
      coords: [45.3, 19.0],
      actors: "Serbia and Croatia",
      since: "Legacy issues from the Yugoslav wars of the 1990s",
      issue: "War legacy, missing persons, minority rights and border questions",
      impact: "Medium",
      context:
        "Relations between Serbia and Croatia continue to be affected by the legacy of the Yugoslav wars, including unresolved missing-person cases, minority rights, historical memory and border issues. Both countries maintain diplomatic relations, but political rhetoric and commemorations can revive tensions. These issues are distinct from an active interstate war.",
      sources: [
        {
          label: "European External Action Service",
          url: "https://www.eeas.europa.eu/"
        },
        {
          label: "Organization for Security and Co-operation in Europe",
          url: "https://www.osce.org/"
        }
      ]
    }
  ];

  // Escape text before inserting it into popup HTML.
  const escapeHTML = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);

  const layer = L.layerGroup();

  tensions.forEach((tension) => {
    const sourceLinks = (tension.sources || [])
      .map((source) => `
        <li>
          <a href="${escapeHTML(source.url)}"
             target="_blank"
             rel="noopener noreferrer">
            ${escapeHTML(source.label)}
          </a>
        </li>
      `)
      .join("");

    const popupContent = `
      <div class="dst-popup" style="max-width:320px;line-height:1.5">
        <h3 style="margin:0 0 8px;color:#B96800">
          ${escapeHTML(tension.name)}
        </h3>

        <p><strong>Actors:</strong> ${escapeHTML(tension.actors)}</p>
        <p><strong>Origin and duration:</strong> ${escapeHTML(tension.since)}</p>
        <p><strong>Main issue:</strong> ${escapeHTML(tension.issue)}</p>
        <p><strong>Indicative diplomatic risk:</strong> ${escapeHTML(tension.impact)}</p>

        <hr>
        <p><strong>Context</strong></p>
        <p>${escapeHTML(tension.context)}</p>

        <hr>
        <p><strong>Sources and further reading</strong></p>
        <ul>${sourceLinks}</ul>
        <p style="font-size:11px;color:#666">
          Background summary. This marker does not represent a real-time risk assessment.
        </p>
      </div>
    `;

    const marker = L.circleMarker(tension.coords, {
      radius: 8,
      color: "#9A5A00",
      weight: 2,
      fillColor: "#F28C00",
      fillOpacity: 0.85
    });

    marker.bindTooltip(escapeHTML(tension.name));
    marker.bindPopup(popupContent, { maxWidth: 350 });
    marker.addTo(layer);
  });

  // Add the layer to the map, but let users toggle it on/off.
  layer.addTo(map);

  // Add a dedicated layer-control entry without replacing other controls.
  const control = L.control.layers(
    null,
    { "Diplomatic Tensions": layer },
    { collapsed: true }
  ).addTo(map);

  // Store references so the layer can be safely rebuilt.
  window.diplomaticTensionsLayer = layer;
  window.diplomaticTensionsControl = control;

  console.info(
    `Diplomatic Tensions loaded: ${tensions.length} entries, including Ceuta–Morocco.`
  );
})();
