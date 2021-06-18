// var bicycle = [
//     { name: 'pippo', weight: 10 },
//     { name: 'pluto', weight: 15 },
//     { name: 'ciccio', weight: 5 }
// ]

// var lastLighterB;
// var lighterW = 1000;

// for (var x = 0; x < bicycle.length; x++) {

//     var thisW = bicycle[x].weight;
//     if (thisW < lighterW) {
//         lastLighterB = bicycle[x];
//         lighterW = thisW;
//     };

// };

// console.log(lastLighterB);


const bicycle = [
    { name: 'pippo', weight: 10 },
    { name: 'pluto', weight: 15 },
    { name: 'ciccio', weight: 5 }
]

let lastLighterB;
let lighterW = 1000;

for (let x = 0; x < bicycle.length; x++) {

    const { weight } = bicycle[x];

    if (weight < lighterW) {
        lastLighterB = bicycle[x];
        lighterW = weight;
    };

};

const { name } = lastLighterB;
console.log(`La bici più leggera è ${name}`);