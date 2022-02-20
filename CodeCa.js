const randNum = () => {
    let num = Math.floor(Math.random() * 3);
   return num;
};

const first = [
   'Today is ', 'How about ', "Let's take some "
];
const second = [
   'awesome ', 'good ', 'exciting '
];
const third = [
   'party', 'trip', 'recreation'
];

let randWord1 = first[randNum()];
let randWord2 = second[randNum()];
let randWord3 = third[randNum()];
let randomPhrase = randWord1+randWord2+randWord3;
const metting = () => {
   console.log(randomPhrase);
}
metting();