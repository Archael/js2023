/*
Mark and John are trying to compare their BMI, which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
*/

let markHigherBMI = false;

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
  markHigherBMI = true;
  console.log(
    "Mark has a higher BMI than John, Mark's BMI is " +
      markBMI +
      " and Johns BMI is " +
      johnBMI
  );
}
