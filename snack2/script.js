const teams = [
    { name: 'inter', score: 0, injuries: 0 },
    { name: 'milan', score: 0, injuries: 0 },
    { name: 'roma', score: 0, injuries: 0 }
]

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const teams2 = [];
for (let i = 0; i < teams.length; i++) {
    teams[i].score = randomNum(0, 100);
    teams[i].injuries = randomNum(0, 100);
    const { name, injuries } = teams[i];
    teams2.push({
        name, injuries
    });

};

console.log(teams2);
