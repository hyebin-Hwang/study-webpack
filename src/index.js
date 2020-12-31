import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  const element2 = document.createElement("div");
  element2.innerHTML = _.join(["Hello", "webpack"], " ");
  return element, element2;
}

document.body.appendChild(component());
