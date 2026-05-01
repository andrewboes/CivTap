let numFarmers = 0;
let numLumberjacks = 0;
let numStoneMasons = 0;
let resources = { foodCount: 0, timberCount: 0, stoneCount: 0 };
let housing = 0;
let housePrice = 20;

function incrementResource(resourceName, multiplier, amount) {
    resources[resourceName] += amount * multiplier;            
    document.getElementById(resourceName).innerText = resources[resourceName];
}

function bodyLoaded(){
    setInterval(()=>{
        incrementResource('foodCount', numFarmers, 1);
        incrementResource('timberCount', numStoneMasons, 1);
    },1000);
}

function addHouse(){
    if (resources["timberCount"] < housePrice){
        document.getElementById("housingErrorMessage").innerText = "Nope";
    } else{
        document.getElementById("housingErrorMessage").innerText = "";
        resources["timberCount"] -= housePrice;
        document.getElementById("timberCount").innerText = resources[timberCount];
        housing+=1;
        updateText("housing", housing);
        //document.getElementById("housing").innerText = housing;
    }            
}

function updateText(elementId, text){
    document.getElementById(elementId).innerText = text;
}
