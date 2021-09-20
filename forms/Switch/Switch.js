/*
//Declaring Variables for User to input Info into.
let firstName = prompt("Enter your first name")
let state = prompt("Enter your state (NE or FL)")
let temperature = prompt("Enter the current temperature (in Fahrenheit)")

//Creating different messages that could be generated
let message = ["	wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

//Statement that generates the correct message based on inputs. 
switch(state) {
case "NE":
  if (temperature < 32)
    console.log(`${firstName}, ${message[0]}`)
  else if (temperature >= 32 && temperature <= 50)
    console.log(`${firstName}, ${message[1]}`)
  break
case "FL":
  if (temperature >= 32 && temperature <= 50)
    console.log(`${firstName}, ${message[2]}`)
  else if (temperature > 50 && temperature <= 70)
    console.log(`${firstName}, ${message[3]}`)
}

*/