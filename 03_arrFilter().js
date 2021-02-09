// How to remove array element based on object property?
var myArray = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

myArray = myArray.filter(function (obj) {
  return obj.field !== "money";
});

Console.log(myArray);