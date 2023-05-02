


function writeCards(names, event) {
    const greetedNames = [];
    for(let i=0; i< names.length; i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        greetedNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
return greetedNames;
}
writeCards(["Guadalupe", "Ollie", "Aki"], 'surprise');


function countDown(number) {
    while (number >=0) {
        console.log(number);
        number --;
    }
    return number;
}
countDown(10);