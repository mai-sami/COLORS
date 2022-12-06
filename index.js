// get all elements to controll and use it
const box = document.querySelector(".box");
const boxColor = document.getElementById("box_color");
// change text in box
boxColor.textContent = "PANT ME"
const btn = document.querySelector("button");

const input = document.querySelector(".content .controls input");

 //items is 16  #xxxxxx 
const hexaCodeAllCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
]; // the number of items is 16 (0 to f (15))

// make Fun
const generateHexaCode = (hexaCode) => {
  // if hexacode is get a (parameter)
  if (hexaCode) {
    // setting box background color
    box.style.backgroundColor = hexaCode;
    // set background to box  
    console.log(hexaCode, "hexaCode...........")
    return;
  }

  // start random color
  let randomStarts = "#";

  // make loop (number it 6 digit) and random number to get 16 color =>start from 0 to 15
  for (let i = 0; i < 6; i++) {
    //random  between 0 to 15
    let randomNum = Math.round(Math.random() * 15);
    // get the HexaCode element for the random Number
    let HexaCodes = hexaCodeAllCharacters[randomNum];
    // add the HexaCode to a randomStarts  
    randomStarts = randomStarts.concat(HexaCodes);
  }

  //set background color to box
  box.style.backgroundColor = randomStarts;
  // set background value to text
  document.getElementById("input__color").value = randomStarts
};
// call Fun
generateHexaCode();

// add clink to button
btn.addEventListener("click", () => generateHexaCode());


input.addEventListener("keyup", (e) => {
  const value = e.target.value;
  console.log(value, "value here!!!!!!!!!!!")

  //  return nothing if for this conditions
  if ((value.length >= 7 && value[0] != "#"))  

  return  alert("the value is not valid"); //to check value input;
  // using the reduce to check value, if the characters in hexaCodeCharacters array
  const array = value
    .slice(1)
    .split("")
    .reduce((acc, chr) => {
      if (acc) {
        // inclues the char
        return hexaCodeAllCharacters.includes(chr);
      } else return false;
    }, true);
  // run the generateHexaCode function  use the input value
  array && generateHexaCode(value);
});
 
     document.getElementById("buttons").addEventListener("mouseenter", (e) => {
      //  change color every 500ms
      let interval = setInterval(() => {
        generateHexaCode();
      }, 500);
      document.getElementById("buttons").addEventListener("mouseleave", () => {
        clearInterval(interval);// when mouse leave the random stop(clear intervel)
      });
     })
   
 
 
