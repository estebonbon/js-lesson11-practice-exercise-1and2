// Extra Practise Lesson 11 Part 1 //
const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

const createVechile = function (type, numWheels, color) {
  const vechile = {
    type: type,
    numWheels: numWheels,
    color: color,
  };
  return vechile; // the new vechile value must be returned in order to reference it in the future.
};

const truck = createVechile("truck", 4, "black");
const skateboard = createVechile("skateboard", 4, "grey");
const tracktor = createVechile("tracktor", 2, "red");

const myVechiles = [truck, skateboard, tracktor];

for (let vechile of myVechiles) {
  // the for of loops is used for arrays", and the let goes first in the brackets.
  for (let key in vechile) {
    // this loops the objects key values, the object placeholder in this case is vechile.
    console.log(key, vechile[key]); // prints the keyValue name first, and then it's value.
  }
}

// Extra Practise Lesson 11 Part 2 //

skateboard.needsRepair = true;
tracktor.needsRepair = true;

button.addEventListener("click", function () {
  repairList.innerHTML = "";
  const vechileRepairList = myVechiles.filter(function (vechile) {
    return vechile.needsRepair === true; // by putting this return statement it will only give back the vechiles where needsRepair is true.
  });

  for (let vechile of vechileRepairList) {
    // This is the new array that was just created from the filtered conditions.
    let li = document.createElement("li");
    li.innerHTML = `My <span>${vechile.type}</span> needs some 💜`; // replaced repairList with Li, as it is the proper element, and has values that can be re-assigned.
    repairList.append(li);
  }
});
