//determine the origin of the cigar
const cigarOrigin = () => {
    const origins = ['Cuban', 'Domincan', 'Honduran', 'Nicaraguan'];
    const draw = origins[Math.floor(Math.random() * origins.length)];
    return draw
};

//populate origins with specific cigars
const cigars = {
    Cuban: ['Montecristo No 2', 'Cohiba Behike', 'Cohiba Siglo IV', 'Cohiba Talisman'],
    Domincan: ['Davidoff Signature No 2', 'Davidoff Royal Release Solomones', 'Davidoff Winston Churchill', 'Arturo Fuente Opus X No 77'],
    Honduran: ['Alec Bradley Texas Lancero', 'Camacho American Barrel', 'Alec Bradley Coyol Gordo', 'Alec Bradley Black Market', 'Camacho Triple Maduro Corona'],
    Nicaraguan: ['Padron 1926 series No 2', 'Padron 1964 Torpedo Natural', 'Drew Estate Undercrown Sade Corona', 'Oliva Serie V', 'Rocky Patel the Sixty']
};

//pick three-cigar sampler

let ori1 = cigarOrigin();
let ori2 = cigarOrigin();
let ori3 = cigarOrigin();


//taking care of duplicate regions

let firstConjunction;
let secondConjunction;
if (ori1 === ori2) {
    firstConjunction = `It is best compared with another ${ori1} stick:`;
} else { firstConjunction = `For a contrasting comparison, we suggest a ${ori2} cigar:`;
};
if (ori1 === ori3 || ori2 === ori3) {
    secondConjunction = `Next up is yet another fine ${ori3} cigar:`
} else {
    secondConjunction = `To fully complement the sampler, we recommend a ${ori3} selection:`
};



//asigning particular cigars to origins and making sure there are no duplicates

const cig1 = cigars[ori1] [Math.floor(Math.random() * cigars[ori1].length)];

const cig2Picker = () => {
    let cigPick2 = cigars[ori2][Math.floor(Math.random() * cigars[ori2].length)];
    if (ori1 === ori2){
        while (cigPick2 === cig1){
            cigPick2 = cigars[ori2][Math.floor(Math.random() * cigars[ori2].length)];
        };
    };
    return cigPick2
};

const cig2 = cig2Picker();

const cig3Picker = () => {
    let cigPick3 = cigars[ori3][Math.floor(Math.random() * cigars[ori3].length)];
    if (ori1 === ori3 || ori2 === ori3) {
        while (cigPick3 === cig1 || cigPick3 === cig2) {
            cigPick3 = cigars[ori3][Math.floor(Math.random() * cigars[ori3].length)];
        };  
    };
    return cigPick3
};

const cig3 = cig3Picker();



//the final output
console.log();
console.log(`Welcome! For this week's sampler we have prepared something special!` );
console.log(`First proposition is an exquisite ${ori1} cigar: ${cig1}.`);
console.log(`${firstConjunction} ${cig2}.`);
console.log(`${secondConjunction} ${cig3}.`);
console.log(`Have your cutter ready and puff away!`);
console.log();