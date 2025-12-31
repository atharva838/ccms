const categories = [
  {
    id: 1,
    title: "Street Damage",
    description: "Potholes, broken roads, damaged footpaths",
    department: "Road & Transport Department",
    icon: "../images/streetdamage.jpg"
  },
  {
    id: 2,
    title: "Water Leakage",
    description: "Pipeline leakage, water overflow, low pressure",
    department: "Water Supply Department",
    icon: "../images/waterleakage.jpg"
  },
  {
    id: 3,
    title: "Street Light Issue",
    description: "Non-working street lights, flickering lights",
    department: "Electricity Department",
    icon: "../images/streetlight.jpg"
  },
  {
    id: 4,
    title: "Garbage & Waste",
    description: "Overflowing dustbins, uncollected garbage",
    department: "Solid Waste Management",
    icon: "../images/garbage.jpg"
  },
  {
    id: 5,
    title: "Drainage Problem",
    description: "Blocked drains, water logging, bad smell",
    department: "Drainage Department",
    icon: "../images/drainage.jpg"
  },
  {
    id: 6,
    title: "Public Toilet Issue",
    description: "Unclean or damaged public toilets",
    department: "Public Health Department",
    icon: "../images/publictoilet.jpg"
  },
  {
    id: 7,
    title: "Illegal Construction",
    description: "Unauthorized buildings or encroachments",
    department: "Urban Planning Department",
    icon: "../images/illegalconstruction.jpg"
  },
  {
    id: 8,
    title: "Traffic Signal Problem",
    description: "Non-working traffic signals or signs",
    department: "Traffic Police Department",
    icon: "../images/traficsignal.jpg"
  },
  {
    id: 9,
    title: "Government Property Damage",
    description: "Damage to public benches, parks, bus stops",
    department: "Municipal Corporation",
    icon: "../images/govermentproperty.jpg"
  },
  {
    id: 10,
    title: "Industrial Area Issue",
    description: "Pollution, road damage near industrial zones",
    department: "Industrial & Environment Department",
    icon: "../images/industrialissue.jpg"
  }
];

let categorycontainer = document.getElementById("categorycontainer");
categorycontainer.innerHTML = categories.map((category) => {
    return `<div id="card" className="card">
        <img src=${category.icon} alt="" />
        <h1>${category.title}</h1>
        <span>${category.description}</span>
    </div>`
}).join("")

localStorage.setItem("categories" , JSON.stringify(categories))

