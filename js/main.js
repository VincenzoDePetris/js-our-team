const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager	",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];

const teamPerson = document.getElementById("team-container");

for (persone of team) {
  console.log(persone); 
  teamPerson.innerHTML += `
  <div class="card carte" style="width: 18rem;">
    <img src=".//img/${persone.photo}" class="card-img-top" alt="person">
    <div class="card-body">
      <h5 class="card-title">${persone.name}</h5>
      <p class="card-text"> ${persone.role}</p>
     
    </div>
  </div>
 `;
}



