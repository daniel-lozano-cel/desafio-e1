let counter = parseInt(window.prompt("Enter a counter limit: "));

let half = counter / 2;

for(let i = 1; i <= counter; i++){
    console.log(i);
    if(i == half){
        console.log("Halfway through!");
        continue;
    }
}
console.log("Have a nice day :)");