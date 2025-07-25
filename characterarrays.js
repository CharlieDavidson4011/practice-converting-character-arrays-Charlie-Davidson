/*Task 1: Decode the Following Reversed Messages
Use .split(''), reverse.(‘’) and .join('') to convert messages between strings and
arrays dynamically. Then log the messages.
1. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks
gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam
gnidoC"
2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw
gnitirw edoc tuB"
3. Message 3: "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI
.lanoisseforp a ekil leef ot evah t'nod uoY"
4. Message 4: ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom
tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
Task 2: Write your own reverse messages
1. First, write your own short messages of inspiration (without reversing them).
2. Then, use .split(''), reverse.(‘’) and .join('') to convert messages between
strings and arrays dynamically so that you have a reverse output.
3. Then log the messages.
*/
const messages = [
    " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah sees yam gnidoC",
    "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB",
    "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY",
    ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
];
const decodedMessages = messages.map(message => {
    return message.split('').reverse().join('');
});
console.log(decodedMessages);
// Task 2: Write your own reverse messages
const myMessages = [
    "I'm here to get a better job for a better life for my chihuahua!",
    "Excellent motivation!",

];
const myReversedMessages = myMessages.map(message => {
    return message.split('').reverse().join('');
});
console.log(myReversedMessages);
// Output the reversed messages
console.log("Reversed Messages:");
myReversedMessages.forEach(msg => console.log(msg));
// Output the decoded messages
console.log("Decoded Messages:");
decodedMessages.forEach(msg => console.log(msg));
