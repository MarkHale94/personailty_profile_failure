
const personalityData = {}


personalityData.genprofile=[]
personalityData.similarPeople=[]
personalityData.communication=[]

const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
};

const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
};

const textFix = function (abc){
    for (i=2; i<=abc.length-3; i++){
       simpleDiv.innerHTML+= abc[i];
    }
}

const newFix = function (cab){
    for (i=0; i < localStorage.length; i++){
        let smart = document.getElementById(cab);
        simpleDiv = document.createElement("div");
        smart.appendChild(simpleDiv);
    }
}

const comFix = function (abc){
    for (i=0; i < localStorage.communication; i++){
    listFinder = document.querySelector("ul");
    simpleList = document.createElement("li");
    listFinder.appendChild(simpleList);
    simpleList.innerHTML+= abc[i];
    }
}


const genfinder = document.getElementById("genProfile");
const simfinder = document.getElementById("similarPeople");
const comfinder = document.getElementById("communication");

simpleDiv = document.createElement("div");

profileData = 'Logisticians are among the most common of all the personality types, comprising of about 13% of the population.'
personalityData.genprofile.push(profileData);
saveDatabase(personalityData.genprofile, "generalprofile");
loadDatabase("generalprofile");
newFix("genProfile");
textFix(localStorage.generalprofile);

similarPeopleData = 'Other logisticians include the artist Sting, Denzel Washington, Angela Merkel, and Natalie Portman.';
personalityData.similarPeople.push(similarPeopleData);
saveDatabase(personalityData.similarPeople,"similarpeople");
loadDatabase("similarpeople");
newFix("similarPeople");
textFix(localStorage.similarpeople);

const comSib = "<ul><li>I would best communicate with my little sib by understanding how they learn knew information. Using that I can try to set them up to figure out the solution to their problem.</li>"
const comInst = "<li>I would like my instructors to communicate with me by breaking down the materials step by step. Walking my brain through functions helps me understand how everything is connected and why these methods work.</li>"
const comTeam = "<li>I would like my teammates to communication with me by showing me their code and how they tackled the problems they came across. I feel like it helps everyone if they get to explain they're code and help someone see another angle on a problem they might also be having.</li></ul>"
personalityData.communication.push(comSib);
personalityData.communication.push(comInst);
personalityData.communication.push(comTeam);
saveDatabase(personalityData.communication, "communication");
loadDatabase("communication");
const sayWhat = document.createElement("ul")
comfinder.appendChild(sayWhat);
comFix(localStorage.communication);
