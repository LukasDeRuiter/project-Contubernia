let clickkie = document.getElementById('generateUnits');


let _currentFood = document.getElementById('currentFood');
let units = [];
let unitNames = ["Orlandus Lucullus", "Phorcys Asina", "Petra Caudex", "Maxentius Scapula", "Ocyrhoe Publicola", "Stamatius Pictor", "Pholus Damasippus",
 "Draco Cento", "Zoroastres Vibulanus", "Agapetus Hadrianus", "Eulalius Glycias", "Deus Nerva", "Artemisius Macer", "Remigius Merenda", "Maxentius Vergilianus"];


clickkie.addEventListener('click', function() {
    for(let i = 1; i < 11; i++){
        units[i] = {
            unitName: unitNames[(Math.floor(Math.random() * unitNames.length))],
            unitClass: "Legionary",
            unitType: 0,
            healthPoints: 100,
            maxHealthPoints: 100,
            energyPoints: 100,
            maxEnergyPoints: 100,
            strength: (Math.floor(Math.random() * 11)),
            gravitas: (Math.floor(Math.random() * 11)),
            intelligence: (Math.floor(Math.random() * 11)),
            cunning: (Math.floor(Math.random() * 11)),
            strMultiplyer: 1,
            cunningMultiplyer: 1,
            intMultiplyer: 1,
            gravitasMultiplyer: 1,
            experiencePoints: 0,
            experienceNeededtoLevelUp: 100,
            level: 0,
            armorLevel: 0,
            goldPerTurn: 0,
            foodUse: 1,
            foodCreate: 0
        }
        document.getElementById(`unitName${i}`).innerHTML = units[i].unitName;
    }
        units[1].unitClass = "Decanus";
        units[9].unitClass = "Auxilia";
        units[9].foodCreate = 7;
        units[10].unitClass = "Auxilia";
        units[10].foodCreate = 7;
        units[1].goldPerTurn = 10;
        totalFoodUse = units[1].foodUse + units[2].foodUse + units[3].foodUse + units[4].foodUse + units[5].foodUse + units[6].foodUse + units[7].foodUse + units[8].foodUse + units[9].foodUse + units[10].foodUse;
        totalFoodCreate = units[9].foodCreate + units[10].foodCreate;
        totalFood += totalFoodCreate;
        _currentFood.innerHTML = `<img src="images/food.png" class="resourceImg">:  ${totalFood}/${totalFoodUse}`;
    console.log(units);
})

let _gameScreen = document.getElementById('mainScreen');

let displayHealthInFigure = document.getElementById('healthBarFigure');
let displayEnergyInFigure = document.getElementById('energyBarFigure');
let displayXpInFigure = document.getElementById('experienceBarFigure');
let totalFoodCreate;
let totalFood = 0;
let totalFoodUse;

let unitCard1 = document.getElementById('unit1');
let unitCard2 = document.getElementById('unit2');
let unitCard3 = document.getElementById('unit3');
let unitCard4 = document.getElementById('unit4');
let unitCard5 = document.getElementById('unit5');
let unitCard6 = document.getElementById('unit6');
let unitCard7 = document.getElementById('unit7');
let unitCard8 = document.getElementById('unit8');
let unitCard9 = document.getElementById('unit9');
let unitCard10 = document.getElementById('unit10');

let displayedNameOfUnit = document.getElementById('nameOfUnit');
let displayedClassOfUnit = document.getElementById('classOfUnit');
let displayedHealthPointsOfUnit = document.getElementById('healthPointsOfUnit');
let displayedEnergyOfUnit = document.getElementById('energyOfUnit');
let displayedExperiencePointsOfUnit = document.getElementById('experiencePointsOfUnit');
let displayedStrengthOfUnit = document.getElementById('strengthOfUnit');
let displayedGravitasOfUnit = document.getElementById('gravitasOfUnit');
let displayedIntelligenceOfUnit = document.getElementById('intelligenceOfUnit');
let displayedCunningOfUnit = document.getElementById('cunningOfUnit');

let SelectedUnit;

let totalGold = 0;

document.querySelectorAll(".trainingBtn").forEach(trainingBtn => trainingBtn.addEventListener('mouseenter', function(){
    trainingBtn.style.backgroundColor = "blue";
}))

document.querySelectorAll(".trainingBtn").forEach(trainingBtn => trainingBtn.addEventListener('mouseleave', function(){
    trainingBtn.style.backgroundColor = "gray";
}))

let unit1Up = document.getElementById('unit1Upgrade');
let unit2Up = document.getElementById('unit2Upgrade');
let unit3Up = document.getElementById('unit3Upgrade');
let unit4Up = document.getElementById('unit4Upgrade');
let unit5Up = document.getElementById('unit5Upgrade');
let unit6Up = document.getElementById('unit6Upgrade');
let unit7Up = document.getElementById('unit7Upgrade');
let unit8Up = document.getElementById('unit8Upgrade');
let unit9Up = document.getElementById('unit9Upgrade');
let unit10Up = document.getElementById('unit10Upgrade');

unitCard1.addEventListener('click', function(){
    selectedUnit = 1;
    unitCard1.style.backgroundColor = "red";
    unitCard2.style.backgroundColor = "#A68859";
    unitCard3.style.backgroundColor = "#A68859";
    unitCard4.style.backgroundColor = "#A68859";
    unitCard5.style.backgroundColor = "#A68859";
    unitCard6.style.backgroundColor = "#A68859";
    unitCard7.style.backgroundColor = "#A68859";
    unitCard8.style.backgroundColor = "#A68859";
    unitCard9.style.backgroundColor = "#A68859";
    unitCard10.style.backgroundColor = "#A68859";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "grid";
    unit2Up.style.display = "none";
    unit3Up.style.display = "none";
    unit4Up.style.display = "none";
    unit5Up.style.display = "none";
    unit6Up.style.display = "none";
    unit7Up.style.display = "none";
    unit8Up.style.display = "none";
    unit9Up.style.display = "none";
    unit10Up.style.display = "none";
})

unitCard2.addEventListener('click', function(){
    selectedUnit = 2;
    unitCard1.style.backgroundColor = "#A68859";
    unitCard2.style.backgroundColor = "red";
    unitCard3.style.backgroundColor = "#A68859";
    unitCard4.style.backgroundColor = "#A68859";
    unitCard5.style.backgroundColor = "#A68859";
    unitCard6.style.backgroundColor = "#A68859";
    unitCard7.style.backgroundColor = "#A68859";
    unitCard8.style.backgroundColor = "#A68859";
    unitCard9.style.backgroundColor = "#A68859";
    unitCard10.style.backgroundColor = "#A68859";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "none";
    unit2Up.style.display = "grid";
    unit3Up.style.display = "none";
    unit4Up.style.display = "none";
    unit5Up.style.display = "none";
    unit6Up.style.display = "none";
    unit7Up.style.display = "none";
    unit8Up.style.display = "none";
    unit9Up.style.display = "none";
    unit10Up.style.display = "none";
})

unitCard3.addEventListener('click', function(){
    selectedUnit = 3;
    unitCard1.style.backgroundColor = "#A68859";
    unitCard2.style.backgroundColor = "#A68859";
    unitCard3.style.backgroundColor = "red";
    unitCard4.style.backgroundColor = "#A68859";
    unitCard5.style.backgroundColor = "#A68859";
    unitCard6.style.backgroundColor = "#A68859";
    unitCard7.style.backgroundColor = "#A68859";
    unitCard8.style.backgroundColor = "#A68859";
    unitCard9.style.backgroundColor = "#A68859";
    unitCard10.style.backgroundColor = "#A68859";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "none";
    unit2Up.style.display = "none";
    unit3Up.style.display = "grid";
    unit4Up.style.display = "none";
    unit5Up.style.display = "none";
    unit6Up.style.display = "none";
    unit7Up.style.display = "none";
    unit8Up.style.display = "none";
    unit9Up.style.display = "none";
    unit10Up.style.display = "none";
})
unitCard4.addEventListener('click', function(){
    selectedUnit = 4;
    unitCard1.style.backgroundColor = "#A68859";
    unitCard2.style.backgroundColor = "#A68859";
    unitCard3.style.backgroundColor = "#A68859";
    unitCard4.style.backgroundColor = "red";
    unitCard5.style.backgroundColor = "#A68859";
    unitCard6.style.backgroundColor = "#A68859";
    unitCard7.style.backgroundColor = "#A68859";
    unitCard8.style.backgroundColor = "#A68859";
    unitCard9.style.backgroundColor = "#A68859";
    unitCard10.style.backgroundColor = "#A68859";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "none";
    unit2Up.style.display = "none";
    unit3Up.style.display = "none";
    unit4Up.style.display = "grid";
    unit5Up.style.display = "none";
    unit6Up.style.display = "none";
    unit7Up.style.display = "none";
    unit8Up.style.display = "none";
    unit9Up.style.display = "none";
    unit10Up.style.display = "none";
})
unitCard5.addEventListener('click', function(){
    selectedUnit = 5;
    unitCard1.style.backgroundColor = "#A68859";
    unitCard2.style.backgroundColor = "#A68859";
    unitCard3.style.backgroundColor = "#A68859";
    unitCard4.style.backgroundColor = "#A68859";
    unitCard5.style.backgroundColor = "red";
    unitCard6.style.backgroundColor = "#A68859";
    unitCard7.style.backgroundColor = "#A68859";
    unitCard8.style.backgroundColor = "#A68859";
    unitCard9.style.backgroundColor = "#A68859";
    unitCard10.style.backgroundColor = "#A68859";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "none";
    unit2Up.style.display = "none";
    unit3Up.style.display = "none";
    unit4Up.style.display = "none";
    unit5Up.style.display = "grid";
    unit6Up.style.display = "none";
    unit7Up.style.display = "none";
    unit8Up.style.display = "none";
    unit9Up.style.display = "none";
    unit10Up.style.display = "none";
})
unitCard6.addEventListener('click', function(){
    selectedUnit = 6;
    unitCard1.style.backgroundColor = "#A68859";
    unitCard2.style.backgroundColor = "#A68859";
    unitCard3.style.backgroundColor = "#A68859";
    unitCard4.style.backgroundColor = "#A68859";
    unitCard5.style.backgroundColor = "#A68859";
    unitCard6.style.backgroundColor = "red";
    unitCard7.style.backgroundColor = "#A68859";
    unitCard8.style.backgroundColor = "#A68859";
    unitCard9.style.backgroundColor = "#A68859";
    unitCard10.style.backgroundColor = "#A68859";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "none";
    unit2Up.style.display = "none";
    unit3Up.style.display = "none";
    unit4Up.style.display = "none";
    unit5Up.style.display = "none";
    unit6Up.style.display = "grid";
    unit7Up.style.display = "none";
    unit8Up.style.display = "none";
    unit9Up.style.display = "none";
    unit10Up.style.display = "none";
})
unitCard7.addEventListener('click', function(){
    selectedUnit = 7;
    unitCard1.style.backgroundColor = "#A68859";
    unitCard2.style.backgroundColor = "#A68859";
    unitCard3.style.backgroundColor = "#A68859";
    unitCard4.style.backgroundColor = "#A68859";
    unitCard5.style.backgroundColor = "#A68859";
    unitCard6.style.backgroundColor = "#A68859";
    unitCard7.style.backgroundColor = "red";
    unitCard8.style.backgroundColor = "#A68859";
    unitCard9.style.backgroundColor = "#A68859";
    unitCard10.style.backgroundColor = "#A68859";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "none";
    unit2Up.style.display = "none";
    unit3Up.style.display = "none";
    unit4Up.style.display = "none";
    unit5Up.style.display = "none";
    unit6Up.style.display = "none";
    unit7Up.style.display = "grid";
    unit8Up.style.display = "none";
    unit9Up.style.display = "none";
    unit10Up.style.display = "none";
})
unitCard8.addEventListener('click', function(){
    selectedUnit = 8;
    unitCard1.style.backgroundColor = "#A68859";
    unitCard2.style.backgroundColor = "#A68859";
    unitCard3.style.backgroundColor = "#A68859";
    unitCard4.style.backgroundColor = "#A68859";
    unitCard5.style.backgroundColor = "#A68859";
    unitCard6.style.backgroundColor = "#A68859";
    unitCard7.style.backgroundColor = "#A68859";
    unitCard8.style.backgroundColor = "red";
    unitCard9.style.backgroundColor = "#A68859";
    unitCard10.style.backgroundColor = "#A68859";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "none";
    unit2Up.style.display = "none";
    unit3Up.style.display = "none";
    unit4Up.style.display = "none";
    unit5Up.style.display = "none";
    unit6Up.style.display = "none";
    unit7Up.style.display = "none";
    unit8Up.style.display = "grid";
    unit9Up.style.display = "none";
    unit10Up.style.display = "none";
})
unitCard9.addEventListener('click', function(){
    selectedUnit = 9;
    unitCard1.style.backgroundColor = "#A68859";
    unitCard2.style.backgroundColor = "#A68859";
    unitCard3.style.backgroundColor = "#A68859";
    unitCard4.style.backgroundColor = "#A68859";
    unitCard5.style.backgroundColor = "#A68859";
    unitCard6.style.backgroundColor = "#A68859";
    unitCard7.style.backgroundColor = "#A68859";
    unitCard8.style.backgroundColor = "#A68859";
    unitCard9.style.backgroundColor = "red";
    unitCard10.style.backgroundColor = "#A68859";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "none";
    unit2Up.style.display = "none";
    unit3Up.style.display = "none";
    unit4Up.style.display = "none";
    unit5Up.style.display = "none";
    unit6Up.style.display = "none";
    unit7Up.style.display = "none";
    unit8Up.style.display = "none";
    unit9Up.style.display = "grid";
    unit10Up.style.display = "none";
})
unitCard10.addEventListener('click', function(){
    selectedUnit = 10;
    unitCard1.style.backgroundColor = "#A68859";
    unitCard2.style.backgroundColor = "#A68859";
    unitCard3.style.backgroundColor = "#A68859";
    unitCard4.style.backgroundColor = "#A68859";
    unitCard5.style.backgroundColor = "#A68859";
    unitCard6.style.backgroundColor = "#A68859";
    unitCard7.style.backgroundColor = "#A68859";
    unitCard8.style.backgroundColor = "#A68859";
    unitCard9.style.backgroundColor = "#A68859";
    unitCard10.style.backgroundColor = "red";
    displayedNameOfUnit.innerHTML = `Name: ${units[selectedUnit].unitName}`;
    displayedClassOfUnit.innerHTML = `Role: ${units[selectedUnit].unitClass}`;
    displayedHealthPointsOfUnit.innerHTML = `Health: ${units[selectedUnit].healthPoints} / ${units[selectedUnit].maxHealthPoints}`;
    displayHealthInFigure.style.width = parseInt((units[selectedUnit].healthPoints / units[selectedUnit].maxHealthPoints) * 100) + "%";
    displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
    displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
    displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
    displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
    displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
    displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
    displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
    displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
    unit1Up.style.display = "none";
    unit2Up.style.display = "none";
    unit3Up.style.display = "none";
    unit4Up.style.display = "none";
    unit5Up.style.display = "none";
    unit6Up.style.display = "none";
    unit7Up.style.display = "none";
    unit8Up.style.display = "none";
    unit9Up.style.display = "none";
    unit10Up.style.display = "grid";
})

/* Unit training set in their unitcard */
trainingOfUnit1 = document.getElementById('unit1Action');
trainingOfUnit2 = document.getElementById('unit2Action');
trainingOfUnit3 = document.getElementById('unit3Action');
trainingOfUnit4 = document.getElementById('unit4Action');
trainingOfUnit5 = document.getElementById('unit5Action');
trainingOfUnit6 = document.getElementById('unit6Action');
trainingOfUnit7 = document.getElementById('unit7Action');
trainingOfUnit8 = document.getElementById('unit8Action');
trainingOfUnit9 = document.getElementById('unit9Action');
trainingOfUnit10 = document.getElementById('unit10Action');

/* Stuff for the left-side buttons/training/upgrades */

/* Marching */
const _marchTraining = document.getElementById('trainingBtnMarch');
_marchTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 50){
        units[selectedUnit].strength += 2;
        units[selectedUnit].energyPoints -= 50;
        displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* inform */
const _informTraining = document.getElementById('trainingBtnInform');
_informTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 50){
        units[selectedUnit].cunning += 2;
        units[selectedUnit].energyPoints -= 50;
        displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* Patronize */
const _patronizeTraining = document.getElementById('trainingBtnPatronize');
_patronizeTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 50){
        units[selectedUnit].gravitas += 2;
        units[selectedUnit].energyPoints -= 50;
        displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* philosophy */
const _philosophyTraining = document.getElementById('trainingBtnPhilosophy');
_philosophyTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 50){
        units[selectedUnit].intelligence += 2;
        units[selectedUnit].energyPoints -= 50;
        displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* Althletics */
const _athleticsTraining = document.getElementById('trainingBtnAthletics');
_athleticsTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 75){
        units[selectedUnit].strength += 1;
        units[selectedUnit].cunning += 1;
        units[selectedUnit].energyPoints -= 75;
        displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
        displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* Prowess */
const _prowessTraining = document.getElementById('trainingBtnProwess');
_prowessTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 75){
        units[selectedUnit].gravitas += 1;
        units[selectedUnit].cunning += 1;
        units[selectedUnit].energyPoints -= 75;
        displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
        displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* Constructing */
const _constructingTraining = document.getElementById('trainingBtnConstructing');
_constructingTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 75){
        units[selectedUnit].strength += 1;
        units[selectedUnit].intelligence += 1;
        units[selectedUnit].energyPoints -= 75;
        displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
        displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* Plotting */
const _plottingTraining = document.getElementById('trainingBtnPlotting');
_plottingTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 75){
        units[selectedUnit].intelligence += 1;
        units[selectedUnit].cunning += 1;
        units[selectedUnit].energyPoints -= 75;
        displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
        displayedCunningOfUnit.innerHTML = `Cunning: ${units[selectedUnit].cunning}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* Theologize */
const _theologizeTraining = document.getElementById('trainingBtnTheologize');
_theologizeTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 75){
        units[selectedUnit].intelligence += 1;
        units[selectedUnit].gravitas += 1;
        units[selectedUnit].energyPoints -= 75;
        displayedIntelligenceOfUnit.innerHTML = `Intelligence: ${units[selectedUnit].intelligence}`;
        displayedGravitasOfUnit.innerHTML = `Gravitas: ${units[selectedUnit].gravitas}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* meditation */
const _meditationTraining = document.getElementById('trainingBtnMeditation');
_meditationTraining.addEventListener('click', function(){
    if(units[selectedUnit].energyPoints >= 75){
        units[selectedUnit].strength += 1;
        units[selectedUnit].gravitas += 1;
        units[selectedUnit].energyPoints -= 75;
        displayedStrengthOfUnit.innerHTML = `Strength: ${units[selectedUnit].strength}`;
        displayedGravitasOfUnit.innerHTML = `Dignitas: ${units[selectedUnit].gravitas}`;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        switch(selectedUnit){
            case 1:
                trainingOfUnit1.src = "images/marchGIF.gif";
                break;
            case 2:
                trainingOfUnit2.src = "images/marchGIF.gif";
                break;
            case 3:
                trainingOfUnit3.src = "images/marchGIF.gif";
                break;
            case 4:
                trainingOfUnit4.src = "images/marchGIF.gif";
                break;
            case 5:
                trainingOfUnit5.src = "images/marchGIF.gif";
                break;
            case 6:
                trainingOfUnit6.src = "images/marchGIF.gif";
                break;
            case 7:
                trainingOfUnit7.src = "images/marchGIF.gif";
                break;
            case 8:
                trainingOfUnit8.src = "images/marchGIF.gif";
                break;
            case 9:
                trainingOfUnit9.src = "images/marchGIF.gif";
                break;
            case 10:
                trainingOfUnit10.src = "images/marchGIF.gif";
                break;

        }
}})

/* Tooltip left-corner */
let buyInformation = document.getElementById('buyInfo');
let buyCosts = document.getElementById('theCosts');
let buyBenefits = document.getElementById('benefits');


_marchTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "March training";
    buyCosts.innerHTML = "50 energy";
    buyBenefits.innerHTML = "+2 strength";
})
_informTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Gather information";
    buyCosts.innerHTML = "50 energy";
    buyBenefits.innerHTML = "+2 cunning";
})
_patronizeTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Patronize the legion";
    buyCosts.innerHTML = "50 energy";
    buyBenefits.innerHTML = "+2 Gravitas";
})
_philosophyTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Philosophical training";
    buyCosts.innerHTML = "50 energy";
    buyBenefits.innerHTML = "+2 intelligence";
})
_athleticsTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Athletics training";
    buyCosts.innerHTML = "75 energy";
    buyBenefits.innerHTML = "+1 strength / +1 cunning";
})
_prowessTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Prowess training";
    buyCosts.innerHTML = "75 energy";
    buyBenefits.innerHTML = "+1 Gravitas / +1 cunning";
})
_constructingTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Construction training";
    buyCosts.innerHTML = "75 energy";
    buyBenefits.innerHTML = "+1 strength / +1 intelligence";
})
_plottingTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Political plotting";
    buyCosts.innerHTML = "75 energy";
    buyBenefits.innerHTML = "+1 cunning / +1 intelligence";
})
_theologizeTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Theological training";
    buyCosts.innerHTML = "75 energy";
    buyBenefits.innerHTML = "+1 intelligence / +1 Gravitas";
})
_meditationTraining.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Meditate";
    buyCosts.innerHTML = "75 energy";
    buyBenefits.innerHTML = "+1 strength / +1 Gravitas";
})


/*upgrades*/
let unit2GIF = document.getElementById('unit2Img');
let unit3GIF = document.getElementById('unit3Img');
let unit4GIF = document.getElementById('unit4Img');
let unit5GIF = document.getElementById('unit5Img');
let unit6GIF = document.getElementById('unit6Img');
let unit7GIF = document.getElementById('unit7Img');
let unit8GIF = document.getElementById('unit8Img');
let armorUpgrade2 = document.getElementById('armorUpgradeUnit2');
let armorUpgrade3 = document.getElementById('armorUpgradeUnit3');
let armorUpgrade4 = document.getElementById('armorUpgradeUnit4');
let armorUpgrade5 = document.getElementById('armorUpgradeUnit5');
let armorUpgrade6 = document.getElementById('armorUpgradeUnit6');
let armorUpgrade7 = document.getElementById('armorUpgradeUnit7');
let armorUpgrade8 = document.getElementById('armorUpgradeUnit8');

armorUpgrade2.addEventListener('click', function(){
    if(units[2].armorLevel >= 9){
    units[2].armorLevel += 1;
    unit2GIF.src = `images/legionaryGIFarmor${units[2].armorLevel}unitType${units[2].unitType}.gif`;
    unit2Up.removeChild(armorUpgrade2);
    }
    else{
        units[2].armorLevel += 1;
        unit2GIF.src = `images/legionaryGIFarmor${units[2].armorLevel}unitType${units[2].unitType}.gif`;
}
})

armorUpgrade3.addEventListener('click', function(){
    if(units[3].armorLevel >= 9){
    units[3].armorLevel += 1;
    unit3GIF.src = `images/legionaryGIFarmor${units[3].armorLevel}unitType${units[3].unitType}.gif`;
    unit3Up.removeChild(armorUpgrade3);
    }
    else{
        units[3].armorLevel += 1;
        unit3GIF.src = `images/legionaryGIFarmor${units[3].armorLevel}unitType${units[3].unitType}.gif`;
}
})

armorUpgrade4.addEventListener('click', function(){
    if(units[4].armorLevel >= 9){
    units[4].armorLevel += 1;
    unit4GIF.src = `images/legionaryGIFarmor${units[4].armorLevel}unitType${units[4].unitType}.gif`;
    unit4Up.removeChild(armorUpgrade4);
    }
    else{
        units[4].armorLevel += 1;
        unit4GIF.src = `images/legionaryGIFarmor${units[4].armorLevel}unitType${units[4].unitType}.gif`;
}
})

armorUpgrade5.addEventListener('click', function(){
    if(units[5].armorLevel >= 9){
    units[5].armorLevel += 1;
    unit5GIF.src = `images/legionaryGIFarmor${units[5].armorLevel}unitType${units[5].unitType}.gif`;
    unit5Up.removeChild(armorUpgrade5);
    }
    else{
        units[5].armorLevel += 1;
        unit5GIF.src = `images/legionaryGIFarmor${units[5].armorLevel}unitType${units[5].unitType}.gif`;
}
})

armorUpgrade6.addEventListener('click', function(){
    if(units[6].armorLevel >= 9){
    units[6].armorLevel += 1;
    unit6GIF.src = `images/legionaryGIFarmor${units[6].armorLevel}unitType${units[6].unitType}.gif`;
    unit6Up.removeChild(armorUpgrade6);
    }
    else{
        units[6].armorLevel += 1;
        unit6GIF.src = `images/legionaryGIFarmor${units[6].armorLevel}unitType${units[6].unitType}.gif`;
}
})

armorUpgrade7.addEventListener('click', function(){
    if(units[7].armorLevel >= 9){
    units[7].armorLevel += 1;
    unit7GIF.src = `images/legionaryGIFarmor${units[7].armorLevel}unitType${units[7].unitType}.gif`;
    unit7Up.removeChild(armorUpgrade7);
    }
    else{
        units[7].armorLevel += 1;
        unit7GIF.src = `images/legionaryGIFarmor${units[7].armorLevel}unitType${units[7].unitType}.gif`;
}
})

armorUpgrade8.addEventListener('click', function(){
    if(units[8].armorLevel >= 9){
    units[8].armorLevel += 1;
    unit8GIF.src = `images/legionaryGIFarmor${units[8].armorLevel}unitType${units[8].unitType}.gif`;
    unit8Up.removeChild(armorUpgrade8);
    }
    else{
        units[8].armorLevel += 1;
        unit8GIF.src = `images/legionaryGIFarmor${units[8].armorLevel}unitType${units[8].unitType}.gif`;
}
})


let _evocatiUpgrade2 = document.getElementById('evocatiUpgrade2');
let _eagleUpgrade2 = document.getElementById('eagleUpgrade2');
let _firstUpgrade2 = document.getElementById('firstUpgrade2');
let _armoredUpgrade2 = document.getElementById('armoredUpgrade2');

_evocatiUpgrade2.addEventListener('click', function(){
    units[2].strMultiplyer = 0;
    units[2].cunningMultiplyer = 0;
    units[2].gravitasMultiplyer = 5;
    units[2].intMultiplyer = 0;
    units[2].unitType = 1;
    units[2].unitClass = "Evocati Legionary";
    unit2GIF.src = `images/legionaryGIFarmor${units[2].armorLevel}unitType${units[2].unitType}.gif`
    _evocatiUpgrade2.remove();
    _eagleUpgrade2.remove();
    _firstUpgrade2.remove();
    _armoredUpgrade2.remove();
})

_eagleUpgrade2.addEventListener('click', function(){
    units[2].strMultiplyer = 0;
    units[2].cunningMultiplyer = 5;
    units[2].gravitasMultiplyer = 0;
    units[2].intMultiplyer = 0;
    units[2].unitType = 2;
    units[2].unitClass = "Eagle Legionary";
    unit2GIF.src = `images/legionaryGIFarmor${units[2].armorLevel}unitType${units[2].unitType}.gif`
    _evocatiUpgrade2.remove();
    _eagleUpgrade2.remove();
    _firstUpgrade2.remove();
    _armoredUpgrade2.remove();
})

_firstUpgrade2.addEventListener('click', function(){
    units[2].strMultiplyer = 0;
    units[2].cunningMultiplyer = 0;
    units[2].gravitasMultiplyer = 0;
    units[2].intMultiplyer = 5;
    units[2].unitType = 3;
    units[2].unitClass = "First Legionary";
    unit2GIF.src = `images/legionaryGIFarmor${units[2].armorLevel}unitType${units[2].unitType}.gif`
    _evocatiUpgrade2.remove();
    _eagleUpgrade2.remove();
    _firstUpgrade2.remove();
    _armoredUpgrade2.remove();
})

_armoredUpgrade2.addEventListener('click', function(){
    units[2].strMultiplyer = 5;
    units[2].cunningMultiplyer = 0;
    units[2].gravitasMultiplyer = 0;
    units[2].intMultiplyer = 0;
    units[2].unitType = 4;
    units[2].unitClass = "Armored Legionary";
    unit2GIF.src = `images/legionaryGIFarmor${units[2].armorLevel}unitType${units[2].unitType}.gif`
    _evocatiUpgrade2.remove();
    _eagleUpgrade2.remove();
    _firstUpgrade2.remove();
    _armoredUpgrade2.remove();
})

let _evocatiUpgrade3 = document.getElementById('evocatiUpgrade3');
let _eagleUpgrade3 = document.getElementById('eagleUpgrade3');
let _firstUpgrade3 = document.getElementById('firstUpgrade3');
let _armoredUpgrade3 = document.getElementById('armoredUpgrade3');

_evocatiUpgrade3.addEventListener('click', function(){
    units[3].strMultiplyer = 0;
    units[3].cunningMultiplyer = 0;
    units[3].gravitasMultiplyer = 5;
    units[3].intMultiplyer = 0;
    units[3].unitType = 1;
    units[3].unitClass = "Evocati Legionary";
    unit3GIF.src = `images/legionaryGIFarmor${units[3].armorLevel}unitType${units[3].unitType}.gif`
    _evocatiUpgrade3.remove();
    _eagleUpgrade3.remove();
    _firstUpgrade3.remove();
    _armoredUpgrade3.remove();
})

_eagleUpgrade3.addEventListener('click', function(){
    units[3].strMultiplyer = 0;
    units[3].cunningMultiplyer = 5;
    units[3].gravitasMultiplyer = 0;
    units[3].intMultiplyer = 0;
    units[3].unitType = 2;
    units[3].unitClass = "Eagle Legionary";
    unit3GIF.src = `images/legionaryGIFarmor${units[3].armorLevel}unitType${units[3].unitType}.gif`
    _evocatiUpgrade3.remove();
    _eagleUpgrade3.remove();
    _firstUpgrade3.remove();
    _armoredUpgrade3.remove();
})

_firstUpgrade3.addEventListener('click', function(){
    units[3].strMultiplyer = 0;
    units[3].cunningMultiplyer = 0;
    units[3].gravitasMultiplyer = 0;
    units[3].intMultiplyer = 5;
    units[3].unitType = 3;
    units[3].unitClass = "First Legionary";
    unit3GIF.src = `images/legionaryGIFarmor${units[3].armorLevel}unitType${units[3].unitType}.gif`
    _evocatiUpgrade3.remove();
    _eagleUpgrade3.remove();
    _firstUpgrade3.remove();
    _armoredUpgrade3.remove();
})

_armoredUpgrade3.addEventListener('click', function(){
    units[3].strMultiplyer = 5;
    units[3].cunningMultiplyer = 0;
    units[3].gravitasMultiplyer = 0;
    units[3].intMultiplyer = 0;
    units[3].unitType = 4;
    units[3].unitClass = "Armored Legionary";
    unit3GIF.src = `images/legionaryGIFarmor${units[3].armorLevel}unitType${units[3].unitType}.gif`
    _evocatiUpgrade3.remove();
    _eagleUpgrade3.remove();
    _firstUpgrade3.remove();
    _armoredUpgrade3.remove();
})

let _evocatiUpgrade4 = document.getElementById('evocatiUpgrade4');
let _eagleUpgrade4 = document.getElementById('eagleUpgrade4');
let _firstUpgrade4 = document.getElementById('firstUpgrade4');
let _armoredUpgrade4 = document.getElementById('armoredUpgrade4');

_evocatiUpgrade4.addEventListener('click', function(){
    units[4].strMultiplyer = 0;
    units[4].cunningMultiplyer = 0;
    units[4].gravitasMultiplyer = 5;
    units[4].intMultiplyer = 0;
    units[4].unitType = 1;
    units[4].unitClass = "Evocati Legionary";
    unit4GIF.src = `images/legionaryGIFarmor${units[4].armorLevel}unitType${units[4].unitType}.gif`
    _evocatiUpgrade4.remove();
    _eagleUpgrade4.remove();
    _firstUpgrade4.remove();
    _armoredUpgrade4.remove();
})

_eagleUpgrade4.addEventListener('click', function(){
    units[4].strMultiplyer = 0;
    units[4].cunningMultiplyer = 5;
    units[4].gravitasMultiplyer = 0;
    units[4].intMultiplyer = 0;
    units[4].unitType = 2;
    units[4].unitClass = "Eagle Legionary";
    unit4GIF.src = `images/legionaryGIFarmor${units[4].armorLevel}unitType${units[4].unitType}.gif`
    _evocatiUpgrade4.remove();
    _eagleUpgrade4.remove();
    _firstUpgrade4.remove();
    _armoredUpgrade4.remove();
})

_firstUpgrade4.addEventListener('click', function(){
    units[4].strMultiplyer = 0;
    units[4].cunningMultiplyer = 0;
    units[4].gravitasMultiplyer = 0;
    units[4].intMultiplyer = 5;
    units[4].unitType = 3;
    units[4].unitClass = "First Legionary";
    unit4GIF.src = `images/legionaryGIFarmor${units[4].armorLevel}unitType${units[4].unitType}.gif`
    _evocatiUpgrade4.remove();
    _eagleUpgrade4.remove();
    _firstUpgrade4.remove();
    _armoredUpgrade4.remove();
})

_armoredUpgrade4.addEventListener('click', function(){
    units[4].strMultiplyer = 5;
    units[4].cunningMultiplyer = 0;
    units[4].gravitasMultiplyer = 0;
    units[4].intMultiplyer = 0;
    units[4].unitType = 4;
    units[4].unitClass = "Armored Legionary";
    unit4GIF.src = `images/legionaryGIFarmor${units[4].armorLevel}unitType${units[4].unitType}.gif`
    _evocatiUpgrade4.remove();
    _eagleUpgrade4.remove();
    _firstUpgrade4.remove();
    _armoredUpgrade4.remove();
})

let _evocatiUpgrade5 = document.getElementById('evocatiUpgrade5');
let _eagleUpgrade5 = document.getElementById('eagleUpgrade5');
let _firstUpgrade5 = document.getElementById('firstUpgrade5');
let _armoredUpgrade5 = document.getElementById('armoredUpgrade5');

_evocatiUpgrade5.addEventListener('click', function(){
    units[5].strMultiplyer = 0;
    units[5].cunningMultiplyer = 0;
    units[5].gravitasMultiplyer = 5;
    units[5].intMultiplyer = 0;
    units[5].unitType = 1;
    units[5].unitClass = "Evocati Legionary";
    unit5GIF.src = `images/legionaryGIFarmor${units[5].armorLevel}unitType${units[5].unitType}.gif`
    _evocatiUpgrade5.remove();
    _eagleUpgrade5.remove();
    _firstUpgrade5.remove();
    _armoredUpgrade5.remove();
})

_eagleUpgrade5.addEventListener('click', function(){
    units[5].strMultiplyer = 0;
    units[5].cunningMultiplyer = 5;
    units[5].gravitasMultiplyer = 0;
    units[5].intMultiplyer = 0;
    units[5].unitType = 2;
    units[5].unitClass = "Eagle Legionary";
    unit5GIF.src = `images/legionaryGIFarmor${units[5].armorLevel}unitType${units[5].unitType}.gif`
    _evocatiUpgrade5.remove();
    _eagleUpgrade5.remove();
    _firstUpgrade5.remove();
    _armoredUpgrade5.remove();
})

_firstUpgrade5.addEventListener('click', function(){
    units[5].strMultiplyer = 0;
    units[5].cunningMultiplyer = 0;
    units[5].gravitasMultiplyer = 0;
    units[5].intMultiplyer = 5;
    units[5].unitType = 3;
    units[5].unitClass = "First Legionary";
    unit5GIF.src = `images/legionaryGIFarmor${units[5].armorLevel}unitType${units[5].unitType}.gif`
    _evocatiUpgrade5.remove();
    _eagleUpgrade5.remove();
    _firstUpgrade5.remove();
    _armoredUpgrade5.remove();
})

_armoredUpgrade5.addEventListener('click', function(){
    units[5].strMultiplyer = 5;
    units[5].cunningMultiplyer = 0;
    units[5].gravitasMultiplyer = 0;
    units[5].intMultiplyer = 0;
    units[5].unitType = 4;
    units[5].unitClass = "Armored Legionary";
    unit5GIF.src = `images/legionaryGIFarmor${units[5].armorLevel}unitType${units[5].unitType}.gif`
    _evocatiUpgrade5.remove();
    _eagleUpgrade5.remove();
    _firstUpgrade5.remove();
    _armoredUpgrade5.remove();
})

let _evocatiUpgrade6 = document.getElementById('evocatiUpgrade6');
let _eagleUpgrade6 = document.getElementById('eagleUpgrade6');
let _firstUpgrade6 = document.getElementById('firstUpgrade6');
let _armoredUpgrade6 = document.getElementById('armoredUpgrade6');

_evocatiUpgrade6.addEventListener('click', function(){
    units[6].strMultiplyer = 0;
    units[6].cunningMultiplyer = 0;
    units[6].gravitasMultiplyer = 5;
    units[6].intMultiplyer = 0;
    units[6].unitType = 1;
    units[6].unitClass = "Evocati Legionary";
    unit6GIF.src = `images/legionaryGIFarmor${units[6].armorLevel}unitType${units[6].unitType}.gif`
    _evocatiUpgrade6.remove();
    _eagleUpgrade6.remove();
    _firstUpgrade6.remove();
    _armoredUpgrade6.remove();
})

_eagleUpgrade6.addEventListener('click', function(){
    units[6].strMultiplyer = 0;
    units[6].cunningMultiplyer = 5;
    units[6].gravitasMultiplyer = 0;
    units[6].intMultiplyer = 0;
    units[6].unitType = 2;
    units[6].unitClass = "Eagle Legionary";
    unit6GIF.src = `images/legionaryGIFarmor${units[6].armorLevel}unitType${units[6].unitType}.gif`
    _evocatiUpgrade6.remove();
    _eagleUpgrade6.remove();
    _firstUpgrade6.remove();
    _armoredUpgrade6.remove();
})

_firstUpgrade6.addEventListener('click', function(){
    units[6].strMultiplyer = 0;
    units[6].cunningMultiplyer = 0;
    units[6].gravitasMultiplyer = 0;
    units[6].intMultiplyer = 5;
    units[6].unitType = 3;
    units[6].unitClass = "First Legionary";
    unit6GIF.src = `images/legionaryGIFarmor${units[6].armorLevel}unitType${units[6].unitType}.gif`
    _evocatiUpgrade6.remove();
    _eagleUpgrade6.remove();
    _firstUpgrade6.remove();
    _armoredUpgrade6.remove();
})

_armoredUpgrade6.addEventListener('click', function(){
    units[6].strMultiplyer = 5;
    units[6].cunningMultiplyer = 0;
    units[6].gravitasMultiplyer = 0;
    units[6].intMultiplyer = 0;
    units[6].unitType = 4;
    units[6].unitClass = "Armored Legionary";
    unit6GIF.src = `images/legionaryGIFarmor${units[6].armorLevel}unitType${units[6].unitType}.gif`
    _evocatiUpgrade6.remove();
    _eagleUpgrade6.remove();
    _firstUpgrade6.remove();
    _armoredUpgrade6.remove();
})

let _evocatiUpgrade7 = document.getElementById('evocatiUpgrade7');
let _eagleUpgrade7 = document.getElementById('eagleUpgrade7');
let _firstUpgrade7 = document.getElementById('firstUpgrade7');
let _armoredUpgrade7 = document.getElementById('armoredUpgrade7');

_evocatiUpgrade7.addEventListener('click', function(){
    units[7].strMultiplyer = 0;
    units[7].cunningMultiplyer = 0;
    units[7].gravitasMultiplyer = 5;
    units[7].intMultiplyer = 0;
    units[7].unitType = 1;
    units[7].unitClass = "Evocati Legionary";
    unit7GIF.src = `images/legionaryGIFarmor${units[7].armorLevel}unitType${units[7].unitType}.gif`
    _evocatiUpgrade7.remove();
    _eagleUpgrade7.remove();
    _firstUpgrade7.remove();
    _armoredUpgrade7.remove();
})

_eagleUpgrade7.addEventListener('click', function(){
    units[7].strMultiplyer = 0;
    units[7].cunningMultiplyer = 5;
    units[7].gravitasMultiplyer = 0;
    units[7].intMultiplyer = 0;
    units[7].unitType = 2;
    units[7].unitClass = "Eagle Legionary";
    unit7GIF.src = `images/legionaryGIFarmor${units[7].armorLevel}unitType${units[7].unitType}.gif`
    _evocatiUpgrade7.remove();
    _eagleUpgrade7.remove();
    _firstUpgrade7.remove();
    _armoredUpgrade7.remove();
})

_firstUpgrade7.addEventListener('click', function(){
    units[7].strMultiplyer = 0;
    units[7].cunningMultiplyer = 0;
    units[7].gravitasMultiplyer = 0;
    units[7].intMultiplyer = 5;
    units[7].unitType = 3;
    units[7].unitClass = "First Legionary";
    unit7GIF.src = `images/legionaryGIFarmor${units[7].armorLevel}unitType${units[7].unitType}.gif`
    _evocatiUpgrade7.remove();
    _eagleUpgrade7.remove();
    _firstUpgrade7.remove();
    _armoredUpgrade7.remove();
})

_armoredUpgrade7.addEventListener('click', function(){
    units[7].strMultiplyer = 5;
    units[7].cunningMultiplyer = 0;
    units[7].gravitasMultiplyer = 0;
    units[7].intMultiplyer = 0;
    units[7].unitType = 4;
    units[7].unitClass = "Armored Legionary";
    unit7GIF.src = `images/legionaryGIFarmor${units[7].armorLevel}unitType${units[7].unitType}.gif`
    _evocatiUpgrade7.remove();
    _eagleUpgrade7.remove();
    _firstUpgrade7.remove();
    _armoredUpgrade7.remove();
})

let _evocatiUpgrade8 = document.getElementById('evocatiUpgrade8');
let _eagleUpgrade8 = document.getElementById('eagleUpgrade8');
let _firstUpgrade8 = document.getElementById('firstUpgrade8');
let _armoredUpgrade8 = document.getElementById('armoredUpgrade8');

_evocatiUpgrade8.addEventListener('click', function(){
    units[8].strMultiplyer = 0;
    units[8].cunningMultiplyer = 0;
    units[8].gravitasMultiplyer = 5;
    units[8].intMultiplyer = 0;
    units[8].unitType = 1;
    units[8].unitClass = "Evocati Legionary";
    unit8GIF.src = `images/legionaryGIFarmor${units[8].armorLevel}unitType${units[8].unitType}.gif`
    _evocatiUpgrade8.remove();
    _eagleUpgrade8.remove();
    _firstUpgrade8.remove();
    _armoredUpgrade8.remove();
})

_eagleUpgrade8.addEventListener('click', function(){
    units[8].strMultiplyer = 0;
    units[8].cunningMultiplyer = 5;
    units[8].gravitasMultiplyer = 0;
    units[8].intMultiplyer = 0;
    units[8].unitType = 2;
    units[8].unitClass = "Eagle Legionary";
    unit8GIF.src = `images/legionaryGIFarmor${units[8].armorLevel}unitType${units[8].unitType}.gif`
    _evocatiUpgrade8.remove();
    _eagleUpgrade8.remove();
    _firstUpgrade8.remove();
    _armoredUpgrade8.remove();
})

_firstUpgrade8.addEventListener('click', function(){
    units[8].strMultiplyer = 0;
    units[8].cunningMultiplyer = 0;
    units[8].gravitasMultiplyer = 0;
    units[8].intMultiplyer = 5;
    units[8].unitType = 3;
    units[8].unitClass = "First Legionary";
    unit8GIF.src = `images/legionaryGIFarmor${units[8].armorLevel}unitType${units[8].unitType}.gif`
    _evocatiUpgrade8.remove();
    _eagleUpgrade8.remove();
    _firstUpgrade8.remove();
    _armoredUpgrade8.remove();
})

_armoredUpgrade8.addEventListener('click', function(){
    units[8].strMultiplyer = 5;
    units[8].cunningMultiplyer = 0;
    units[8].gravitasMultiplyer = 0;
    units[8].intMultiplyer = 0;
    units[8].unitType = 4;
    units[8].unitClass = "Armored Legionary";
    unit8GIF.src = `images/legionaryGIFarmor${units[8].armorLevel}unitType${units[8].unitType}.gif`
    _evocatiUpgrade8.remove();
    _eagleUpgrade8.remove();
    _firstUpgrade8.remove();
    _armoredUpgrade8.remove();
})

/* Auxilia upgrades */
_farm1 = document.getElementById('farm1');
_farmMainUpgrade1 = document.getElementById('farmMainUpgrade1');
_farmLandUpgrade1 = document.getElementById('farmLandUpgrade1');
let farm1Level = 0;
let farm1Land1Upgrade = 0;

_farmMainUpgrade1.addEventListener('click', function(){
    if(farm1Level >= 4){
    farm1Level += 1;
    _farm1.src = `images/buildingmap/farmMain${farm1Level}.png`;
    _farmMainUpgrade1.remove();
} else if(farm1Level === 0){
    farm1Level += 1;
    _farm1.src = `images/buildingmap/farmMain${farm1Level}.png`;
    for(i = 1; i < 6; i++){
    document.getElementById(`farm1Land${i}`).src = `images/buildingmap/farmLand${i}.png`
    }
} else{
    farm1Level += 1;
    _farm1.src = `images/buildingmap/farmMain${farm1Level}.png`;
}
})

_farmLandUpgrade1.addEventListener('click', function() {
    if(farm1Level >= 1){
        if(farm1Land1Upgrade >= 4){
    farm1Land1Upgrade += 1;
    document.getElementById(`farm1Land${farm1Land1Upgrade}`).src = `images/buildingmap/farmLand${farm1Land1Upgrade}up1.png`;
    _farmLandUpgrade1.remove(); 
    } else{
        farm1Land1Upgrade += 1;
        document.getElementById(`farm1Land${farm1Land1Upgrade}`).src = `images/buildingmap/farmLand${farm1Land1Upgrade}up1.png`;
    }
}})

_farm2 = document.getElementById('farm2');
_farmMainUpgrade2 = document.getElementById('farmMainUpgrade2');
_farmLandUpgrade2 = document.getElementById('farmLandUpgrade2');
let farm2Level = 0;
let farm2Land1Upgrade = 0;

_farmMainUpgrade2.addEventListener('click', function(){
    if(farm2Level >= 4){
    farm2Level += 1;
    _farm2.src = `images/buildingmap/farmMain${farm2Level}.png`;
    _farmMainUpgrade2.remove();
} else if(farm2Level === 0){
    farm2Level += 1;
    _farm2.src = `images/buildingmap/farmMain${farm2Level}.png`;
    for(i = 1; i < 6; i++){
    document.getElementById(`farm2Land${i}`).src = `images/buildingmap/farmLand${i}.png`
    }
} else{
    farm2Level += 1;
    _farm2.src = `images/buildingmap/farmMain${farm2Level}.png`;
}
})

_farmLandUpgrade2.addEventListener('click', function() {
    if(farm2Level >= 1){
        if(farm2Land1Upgrade >= 4){
    farm2Land1Upgrade += 1;
    document.getElementById(`farm2Land${farm2Land1Upgrade}`).src = `images/buildingmap/farmLand${farm2Land1Upgrade}up1.png`;
    _farmLandUpgrade2.remove(); 
    } else{
        farm2Land1Upgrade += 1;
        document.getElementById(`farm2Land${farm2Land1Upgrade}`).src = `images/buildingmap/farmLand${farm2Land1Upgrade}up1.png`;
    }
}})

let tannerNum = 0;
let blacksmithNum = 0;

document.getElementById('tannerUpgrade').addEventListener('click', function(){
    if(tannerNum >= 9){
        tannerNum += 1;
        document.getElementById('tanner2').src = `images/buildingmap/tanner${(tannerNum - 5)}.png`;
        document.getElementById('tannerUpgrade').remove();
    } else if(tannerNum >= 5 && tannerNum <= 8){
        tannerNum += 1;
        document.getElementById('tanner2').src = `images/buildingmap/tanner${(tannerNum - 5)}.png`;
    } else{
        tannerNum += 1;
        document.getElementById('tanner1').src = `images/buildingmap/tanner${tannerNum}.png`;
    }
})

document.getElementById('blacksmithUpgrade').addEventListener('click', function(){
    if(blacksmithNum >= 9){
        blacksmithNum += 1;
        document.getElementById('blacksmith2').src = `images/buildingmap/blacksmith${(blacksmithNum - 5)}.png`;
        document.getElementById('blacksmithUpgrade').remove();
    } else if(blacksmithNum >= 5 && blacksmithNum <= 8){
        blacksmithNum += 1;
        document.getElementById('blacksmith2').src = `images/buildingmap/blacksmith${(blacksmithNum - 5)}.png`;
    } else{
        blacksmithNum += 1;
        document.getElementById('blacksmith1').src = `images/buildingmap/blacksmith${blacksmithNum}.png`;
    }
})

/* tooltips for upgrades */
_evocatiUpgrade2.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from gravitas, but no more XP from other stats";
})
_eagleUpgrade2.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Cunning, but no more XP from other stats";
})
_firstUpgrade2.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Intelligence, but no more XP from other stats";
})
_armoredUpgrade2.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Strength, but no more XP from other stats";
})

_evocatiUpgrade3.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from gravitas, but no more XP from other stats";
})
_eagleUpgrade3.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Cunning, but no more XP from other stats";
})
_firstUpgrade3.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Intelligence, but no more XP from other stats";
})
_armoredUpgrade3.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Strength, but no more XP from other stats";
})

_evocatiUpgrade4.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from gravitas, but no more XP from other stats";
})
_eagleUpgrade4.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Cunning, but no more XP from other stats";
})
_firstUpgrade4.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Intelligence, but no more XP from other stats";
})
_armoredUpgrade4.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Strength, but no more XP from other stats";
})

_evocatiUpgrade5.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from gravitas, but no more XP from other stats";
})
_eagleUpgrade5.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Cunning, but no more XP from other stats";
})
_firstUpgrade5.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Intelligence, but no more XP from other stats";
})
_armoredUpgrade5.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Strength, but no more XP from other stats";
})

_evocatiUpgrade6.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from gravitas, but no more XP from other stats";
})
_eagleUpgrade6.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Cunning, but no more XP from other stats";
})
_firstUpgrade6.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Intelligence, but no more XP from other stats";
})
_armoredUpgrade6.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Strength, but no more XP from other stats";
})

_evocatiUpgrade7.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from gravitas, but no more XP from other stats";
})
_eagleUpgrade7.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Cunning, but no more XP from other stats";
})
_firstUpgrade7.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Intelligence, but no more XP from other stats";
})
_armoredUpgrade7.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Strength, but no more XP from other stats";
})

_evocatiUpgrade8.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from gravitas, but no more XP from other stats";
})
_eagleUpgrade8.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Cunning, but no more XP from other stats";
})
_firstUpgrade8.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Intelligence, but no more XP from other stats";
})
_armoredUpgrade8.addEventListener('mouseenter', function(){
    buyInformation.innerHTML = "Upgrade unit to Evocati";
    buyCosts.innerHTML = "2000 gold";
    buyBenefits.innerHTML = "5* more XP from Strength, but no more XP from other stats";
})

/* next turn stuff */

let buttonForNextTurn = document.getElementById('theButtonId');
let _gameDate = document.getElementById('gameDateId');
let _gameTurn = document.getElementById('gameTurnId');
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let gameYear = 69;
let currentMonth = 0;
let currentGameTurn = 1;
let dignitas = 0;
let _currentDignitas = document.getElementById('currentDignitas');
let _currentSestertius = document.getElementById('currentSestertius');

let _unitLevel1 = document.getElementById('unitLevel1');
let _unitLevel2 = document.getElementById('unitLevel2');
let _unitLevel3 = document.getElementById('unitLevel3');
let _unitLevel4 = document.getElementById('unitLevel4');
let _unitLevel5 = document.getElementById('unitLevel5');
let _unitLevel6 = document.getElementById('unitLevel6');
let _unitLevel7 = document.getElementById('unitLevel7');
let _unitLevel8 = document.getElementById('unitLevel8');
let _unitLevel9 = document.getElementById('unitLevel9');
let _unitLevel10 = document.getElementById('unitLevel10');

function displayResourceChange(resource, timer) {
    setTimeout(function() {
    resource.style.display = "flex";
    resource.style.animation = "resourceAfterNextTurn 1s 1";
    resource.onanimationend = () => {
        resource.style.animation = "resource2 1s 1";
        resource.onanimationend = () => {
            resource.style.display = "none";
        }
    }
}, timer)}

function displayUnitLevelInHouse(Unit, chosenHouseLocation){
    if(units[Unit].level === 50){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House10.png`;
    }
    else if(units[Unit].level === 45){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House9.png`;
    }
    else if(units[Unit].level === 40){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House8.png`;
    }
    else if(units[Unit].level === 35){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House7.png`;
    }
    else if(units[Unit].level === 30){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House6.png`;
    }
    else if(units[Unit].level === 25){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House5.png`;
    }
    else if(units[Unit].level === 20){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House4.png`;
    }
    else if(units[Unit].level === 15){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House3.png`;
    }
    else if(units[Unit].level === 10){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House2.png`;
    }
    else if(units[Unit].level === 5){
        document.getElementById(`unit${Unit}House`).src = `images/buildingmap/unit${chosenHouseLocation}House1.png`;
    }
    else{
        console.log("noUpgrade");
    }
}


let _goldChange = document.getElementById('goldChange');
let _stoneChange = document.getElementById('stoneChange');
let _woodChange = document.getElementById('woodChange');
let _foodChange = document.getElementById('foodChange');
let _dignitasChange = document.getElementById('dignitasChange');
let actualFoodChanged = 0;
let plusOrMinus;
let oldDignitas = 0;
let changedDignitas = 0;

buttonForNextTurn.addEventListener('click', function(){

    /* Happens every turn */
    currentGameTurn += 1;
    _gameTurn.innerHTML = `Turn: ${currentGameTurn}`;
    _gameScreen.style.animation = "nextTurn 1s 1";
    _gameScreen.onanimationend = function (){
        _gameScreen.style.animation = "yourTurn 2s 1";
    }
    trainingOfUnit1.src = "images/idleGIF.gif";
    trainingOfUnit2.src = "images/idleGIF.gif";
    trainingOfUnit3.src = "images/idleGIF.gif";
    trainingOfUnit4.src = "images/idleGIF.gif";
    trainingOfUnit5.src = "images/idleGIF.gif";
    trainingOfUnit6.src = "images/idleGIF.gif";
    trainingOfUnit7.src = "images/idleGIF.gif";
    trainingOfUnit8.src = "images/idleGIF.gif";
    trainingOfUnit9.src = "images/idleGIF.gif";
    trainingOfUnit10.src = "images/idleGIF.gif";

    oldDignitas = dignitas;

    totalGold += units[1].goldPerTurn;
    _currentSestertius.innerHTML = `<img src="images/sestertius.png" class="resourceImg">:  ${totalGold}`;
    console.log(units);

    /* reset energypoints for the units */
    for(let i = 1; i < 11; i++){
        units[i].energyPoints = 100;
        displayedEnergyOfUnit.innerHTML = `Energy: ${units[selectedUnit].energyPoints} / ${units[selectedUnit].maxEnergyPoints}`;
        displayEnergyInFigure.style.width = parseInt((units[selectedUnit].energyPoints / units[selectedUnit].maxEnergyPoints) * 100) + "%";
        /* Here I add all the character stats together to the xpbar */
        units[i].experiencePoints += (units[i].strength * units[i].strMultiplyer) + (units[i].cunning * units[i].cunningMultiplyer) + (units[i].intelligence * units[i].intMultiplyer) + (units[i].gravitas * units[i].gravitasMultiplyer);
        displayedExperiencePointsOfUnit.innerHTML = `Experience: ${units[selectedUnit].experiencePoints} / ${units[selectedUnit].experienceNeededtoLevelUp}`;
        displayXpInFigure.style.width = parseInt((units[selectedUnit].experiencePoints / units[selectedUnit].experienceNeededtoLevelUp) * 100) + "%";
        if(units[i].experiencePoints >= units[i].experienceNeededtoLevelUp){
            units[i].experiencePoints -= units[i].experienceNeededtoLevelUp;
            units[i].level += 1;
            units[i].experienceNeededtoLevelUp = Math.floor(units[i].experienceNeededtoLevelUp * 1.1);
            /* after levelup, we gotta add the levels to the dignitasmeter */
            dignitas = units[1].level + units[2].level + units[3].level + units[4].level + units[5].level + units[6].level + units[7].level + units[8].level + units[9].level + units[10].level;
            _currentDignitas.innerHTML = `<img src="images/dignitas.png" class="resourceImg">:  ${dignitas}/1000`;
        }
        units[i].foodUse = 1 + Math.floor((units[i].level / 2));
    }

    totalFoodCreate = (units[9].foodCreate + units[10].foodCreate);
    totalFoodUse = units[1].foodUse + units[2].foodUse + units[3].foodUse + units[4].foodUse + units[5].foodUse + units[6].foodUse + units[7].foodUse + units[8].foodUse + units[9].foodUse + units[10].foodUse;
    actualFoodChanged = (totalFoodCreate - totalFoodUse);
    totalFood = totalFood + actualFoodChanged;
    if(actualFoodChanged >= 1){
        plusOrMinus = "+";
    } else {
        plusOrMinus = " ";
    }
    _currentFood.innerHTML = `<img src="images/food.png" class="resourceImg">:  ${totalFood}/${totalFoodUse}`;

    _unitLevel1.innerHTML = `Level: ${units[1].level}`;
    _unitLevel2.innerHTML = `Level: ${units[2].level}`;
    _unitLevel3.innerHTML = `Level: ${units[3].level}`;
    _unitLevel4.innerHTML = `Level: ${units[4].level}`;
    _unitLevel5.innerHTML = `Level: ${units[5].level}`;
    _unitLevel6.innerHTML = `Level: ${units[6].level}`;
    _unitLevel7.innerHTML = `Level: ${units[7].level}`;
    _unitLevel8.innerHTML = `Level: ${units[8].level}`;
    _unitLevel9.innerHTML = `Level: ${units[9].level}`;
    _unitLevel10.innerHTML = `Level: ${units[10].level}`;

    changedDignitas = (dignitas - oldDignitas);
    _goldChange.innerHTML = `+${units[1].goldPerTurn} gold!`
    _foodChange.innerHTML = `${plusOrMinus} ${actualFoodChanged} food!`
    _dignitasChange.innerHTML = `+ ${changedDignitas} more dignitas!`
    displayResourceChange(_goldChange, 0);
    displayResourceChange(_stoneChange, 2000);
    displayResourceChange(_woodChange, 4000);
    displayResourceChange(_foodChange, 6000);
    displayResourceChange(_dignitasChange, 8000);

    displayUnitLevelInHouse(2, 2);
    displayUnitLevelInHouse(3, 3);
    displayUnitLevelInHouse(4, 4);
    displayUnitLevelInHouse(5, 5);
    displayUnitLevelInHouse(6, 2);
    displayUnitLevelInHouse(7, 3);
    displayUnitLevelInHouse(8, 5);

    /* If next turn is clicked, this will set the next month and year */
    if(currentMonth <= 10){
    currentMonth += 1;
    _gameDate.innerHTML = `${months[currentMonth]} ${gameYear} A. D.`
    }
    else{
        currentMonth = 0;
        gameYear += 1;
        _gameDate.innerHTML = `${months[currentMonth]} ${gameYear} A. D.`
    }
})