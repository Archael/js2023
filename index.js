function app() {}
/*
Mark and John are trying to compare their BMI, which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
*/

const data = [
  {
    name: "Mark",
    weight: 78,
    height: 1.69,
  },
  {
    name: "John",
    weight: 92,
    height: 1.95,
  },
];

const markBMI = calcBmi(data[0]);
const johnBMI = calcBmi(data[1]);

function calcBmi(obj) {
  return Math.floor(obj.weight / (obj.height * obj.height));
}

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI is higher than John's! Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`
  );
} else {
  console.log(
    `John's BMI is higher than Mark's! John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`
  );
}
