const teams = [
    { name: 'inter', score: 30, injuries: 10 },
    { name: 'milan', score: 40, injuries: 20 },
    { name: 'roma', score: 50, injuries: 25 }
];

const tableHTML = document.querySelector('.table-container');

let thead = `<ul>`;
for (let key in teams[0]) {
    thead += `<li>${key.toUpperCase()}</li>`;
}
thead += `</ul>`;
tableHTML.innerHTML += thead;


let yellowTeam;
let moreInjuries = 0;
for (let x = 0; x < teams.length; x++) {

    const { injuries } = teams[x];
    if (injuries > moreInjuries) {
        yellowTeam = teams[x];
        moreInjuries = injuries;
    }

};


for (let x = 0; x < teams.length; x++) {

    const { name, score, injuries } = teams[x];

    tableHTML.innerHTML += `
        <ul>
            <li>${name}</li>
            <li>${score}</li>
            <li>${injuries}</li>
       </ul>
    `
    if (teams[x] === yellowTeam) {
        document.getElementsByTagName("ul")[x + 1].setAttribute("class", "yellow");
    }
};


