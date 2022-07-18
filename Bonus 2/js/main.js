containerDom = document.getElementById('container');

const ourTeam = [
  {
    name: 'Wayne Barnett',
    position: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },

  {
    name: 'Angela Caroll',
    position: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },

  {
    name: 'Walter Gordon',
    position: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },

  {
    name: 'Angela Lopez',
    position: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },

  {
    name: 'Scott Estrada',
    position: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },

  {
    name: 'Barbara Ramos',
    position: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

for (let key in ourTeam) {
    console.log(key);
    console.log(ourTeam[key]);
}


for (let i = 0; i < ourTeam.length; i++) {
    const teamMember = ourTeam[i];
    console.log('teamMember: ', teamMember);
    containerDom.innerHTML +=  `<div class="card">
                                    <img src="img/${teamMember.image}" alt="${teamMember.name}">
                                    <span class="name py-5">${teamMember.name}</span>
                                    <span class="position py-5">${teamMember.position}</span>
                                </div>`;
}

