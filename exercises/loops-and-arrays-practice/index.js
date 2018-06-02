const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]  
let i = 0;
let count = 0;

// #1
for (i; i < officeItems.length; i++) {
  count += officeItems[i] === 'computer' ? 1 : 0;
}

console.log(`There are ${count} computers.`);

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  }, {
    name: "Madeline",
    age: 80,
    gender: "female"
  }, {
    name: "Cheryl",
    age: 22,
    gender: "female"
  }, {
    name: "Sam",
    age: 30,
    gender: "male"
  }, {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  let person = peopleWhoWantToSeeMadMaxFuryRoad[i];
  if (person.age >= 17) {
    console.log(`${person.name} is old enough to see Mad Max, let ${person.gender === 'male' ? 'him': 'her'} in.`);
  } else {
    console.log(`${person.name} is NOT old enough to see Mad Max, do not let ${person.gender === 'male' ? 'him': 'her'} in.`);
  }
}

const toggleArrays = [
  [2, 5, 435, 4, 3],
  [1, 1, 1, 1, 3],
  [9, 3, 4, 2],
];

function checkFinalState(arrayOfToggles) {
  let i = 0;
  let toggles = 0;
  for (i; i < arrayOfToggles.length; i++) {
    toggles+= arrayOfToggles[i];
  }
  console.log(`The light is${toggles % 2 === 0 && toggles > 0 ? '' : ' NOT'} on.`);
}

i = 0;

for (i; i < toggleArrays.length; i++) {
  checkFinalState(toggleArrays[i]);
}