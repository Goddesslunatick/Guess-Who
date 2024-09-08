// List of possible characters
const characters = [
    { name: "Andross", animal: true, powerUps: false, internetLove: false, internetHate: false, mythical: false, fightInSpace: false, villan: true, specificWeapon: false},
    { name: "Bowser", animal: true, powerUps: false, internetLove: true, internetHate: false, mythical: false, fightInSpace: false, villan: true, specificWeapon: false},
    { name: "Donkey Kong", animal: true, powerUps: true, internetLove: false, internetHate: false, mythical: false, fightInSpace: true, villan: false, specificWeapon: false},
    { name: "Fox", animal: true, powerUps: true, internetLove: false, internetHate: false, mythical: false, fightInSpace: false, villan: false, specificWeapon: true},
    { name: "Gandorff", animal: false, powerUps: false, internetLove: true, internetHate: false, mythical: false, fightInSpace: false, villan: true, specificWeapon: false},
    { name: "Hades", animal: false, powerUps: false, internetLove: false, internetHate: false, mythical: true, fightInSpace: true, villan: true, specificWeapon: false},
    { name: "Isabelle", animal: true, powerUps: false, internetLove: true, internetHate: false, mythical: false, fightInSpace: false, villan: false, specificWeapon: false},
    { name: "King Dedede", animal: true, powerUps: false, internetLove: false, internetHate: false, mythical: false, fightInSpace: false, villan: true, specificWeapon: false},
    { name: "King K. Rool", animal: true, powerUps: false, internetLove: false, internetHate: false, mythical: false, fightInSpace: false, villan: true, specificWeapon: true},
    { name: "Kirby", animal: false, powerUps: true, internetLove: true, internetHate: false, mythical: false, fightInSpace: true, villan: false, specificWeapon: false},
    { name: "Link", animal: false, powerUps: true, internetLove: true, internetHate: false, mythical: false, fightInSpace: false, villan: false, specificWeapon: false},
    { name: "Luigi", animal: false, powerUps: true, internetLove: false, internetHate: false, mythical: false, fightInSpace: true, villan: false, specificWeapon: true},
    { name: "Mario", animal: false, powerUps: true, internetLove: true, internetHate: false, mythical: false, fightInSpace: true, villan: false, specificWeapon: false},
    { name: "Matt", animal: false, powerUps: false, internetLove: false, internetHate: true, mythical: false, fightInSpace: false, villan: true, specificWeapon: false},
    { name: "Mii", animal: false, powerUps: false, internetLove: false, internetHate: false, mythical: false, fightInSpace: false, villan: false, specificWeapon: false},
    { name: "Pit", animal: false, powerUps: true, internetLove: false, internetHate: false, mythical: false, fightInSpace: true, villan: false, specificWeapon: true},
    { name: "Princess Peach", animal: false, powerUps: true, internetLove: true, internetHate: false, mythical: false, fightInSpace: false, specificWeapon: false},
    { name: "Samus", animal: false, powerUps: true, internetLove: true, internetHate: false, mythical: false, fightInSpace: true, villan: false, specificWeapon: true},
    { name: "Tom nook", animal: true, powerUps: false, internetLove: false, internetHate: true, mythical: false, fightInSpace: false, villan: true, specificWeapon: false},
    { name: "Zelda", animal: false, powerUps: true, internetLove: true, internetHate: false, mythical: false, fightInSpace: false, villan: false, specificWeapon: false},
    // Add more characters here...
  ];
  
  // Choose a random character for the user to guess
  let targetCharacter = characters[Math.floor(Math.random() * characters.length)];

  function gamePlay() {
    const question = document.getElementById("variousQuestions").value;
    const outputElement = document.getElementById("output"); // Add an HTML element to display the output
  
    if (question.includes("animal")) {
      if (targetCharacter.animal) {
        outputElement.innerText =`Yes, they are an animal.`;
      } else {
        outputElement.innerText =`No, they are not an animal.`;
      }
    } else if (question.includes("power ups")) {
      if (targetCharacter.powerUps) {
        outputElement.innerText =`Yes, they get power ups or tools.`;
      } else {
        outputElement.innerText =`No, they do not get power ups or tools.`;
      }
    } else if (question.includes("internet love")) {
      if (targetCharacter.internetLove) {
        outputElement.innerText =`Yes, they are loved by the internet.`;
      } else {
        outputElement.innerText =`No, they are not loved by the internet.`;
      }
    } else if (question.includes("internet hate")) {
      if (targetCharacter.internetHate) {
        outputElement.innerText =`Yes, they are hated with a passion`;
      } else {
        outputElement.innerText =`No, they are not hated.`;
      }
    } else if (question.includes("mythical")) {
      if (targetCharacter.mythical) {
        outputElement.innerText =`Yes, they are a myth in real life.`;
      } else {
        outputElement.innerText =`No, they are not a myth in real life.`;
      }
    } else if (question.includes("fight in space")) {
      if (targetCharacter.fightInSpace) {
        outputElement.innerText =`Yes, they fight in space.`;
      } else {
        outputElement.innerText =`No, they don't fight in space.`;
      } }
    else if (question.includes("villain")) {
        if (targetCharacter.villan) {
          outputElement.innerText =`Yes, they are a villain.`;
        } else {
          outputElement.innerText =`No, they are not a villain.`;
        }
      }
      else if (question.includes("weapon")) {
        if (targetCharacter.specificWeapon) {
          outputElement.innerText =`Yes, they are known for having a specific weapon`;
        } else {
          outputElement.innerText =`No, they are not know for having a specific weapon.`; 
        }
      }
  }


document.getElementById("Ask").addEventListener("click", gamePlay);

// Get all the character images
const characterImages = document.querySelectorAll('.card img');

// Store the original image sources
const originalImageSources = Array.from(characterImages).map(image => image.src);

// Add an event listener to each image
characterImages.forEach(function(image) {
  let clicked = false; // Flag to track whether the image has been clicked before
  image.addEventListener('click', function() {
    // Toggle the image source on each click
    if (clicked) {
      image.src = originalImageSources[Array.from(characterImages).indexOf(image)];
      clicked = false;
    } else {
      image.src = 'Nintendo!.png';
      clicked = true;
    }
  });
});

// Create a reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.id = 'resetButton';
document.body.appendChild(resetButton);

// Add an event listener to the reset button
resetButton.addEventListener('click', function() {
  // Reset the game state
  targetCharacter = characters[Math.floor(Math.random() * characters.length)];
  
  // Get the output element
  const outputElement = document.getElementById("output");
  outputElement.innerText = '';

  // Restore the original image sources
  characterImages.forEach((image, index) => {
    image.src = originalImageSources[index];
  });
});
// Get the guess button
const guessButton = document.getElementById('guess').parentNode.querySelector('button');

// Add an event listener to the guess button
guessButton.addEventListener('click', function() {
  // Get the selected character
  const selectedCharacter = document.getElementById('guess').value;

  // Check if the selected character matches the target character
  if (selectedCharacter === targetCharacter) {
    document.getElementById('final_result').innerText = 'Congratulations! You guessed correctly!';
  } else {
    document.getElementById('final_result').innerText = 'Sorry, that\'s not correct. The correct answer was ' + targetCharacter.name + '.';
  }
});
