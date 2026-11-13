$(function() { 
  // Runs after the webpage finishes loading and displays the pet's starting information
  //then connects each button to its corresponding function
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml("Beethoven is ready for a fun day!");
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.train-button').click(clickedTrainButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Beethoven", weight:120, happiness:50};
  
    function clickedTreatButton() {
      pet_info.happiness += 5;// Increase pet happiness
      pet_info.weight += 2; // Increase pet weight
      checkAndUpdatePetInfoInHtml("Beethoven is happy to have a treat!", true); //the true value tells it to animate Beethoven
    }
    
    function clickedPlayButton() {
      pet_info.happiness += 10; // Increase pet happiness
      pet_info.weight -= 2; // Decrease pet weight
      checkAndUpdatePetInfoInHtml("Beethoven is having a great time playing!", true);
    
    }
    
    function clickedExerciseButton() {
      pet_info.happiness -= 5; // Decrease pet happiness
      pet_info.weight -= 3; // Decrease pet weight
      checkAndUpdatePetInfoInHtml("Beethoven is getting some exercise!", true);
    }
    function clickedTrainButton() { //the additional action that was added
      pet_info.happiness += 15; // Increase pet happiness
      pet_info.weight -= 3; // Decrease pet weight
      checkAndUpdatePetInfoInHtml("Beethoven is learning new tricks!", true);
    }

    //this function checks the values and then updates the webpage, and displays a webpage from Beethoven
    function checkAndUpdatePetInfoInHtml(message, animatePet = false) {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
      displayPetMessage(message, animatePet);
    }
    
    //prevents weight and happiness from going below zero
    function checkWeightAndHappinessBeforeUpdating() {
     if (pet_info.weight < 0) { // Add conditional so if weight is lower than zero.
        pet_info.weight = 0;
      }
      if (pet_info.happiness < 0) { // Add conditional so if happiness is lower than zero.
        pet_info.happiness = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

    //displays a message from Beethoven and animates the pet
    function displayPetMessage(message, animatePet) {
      if (animatePet) {
        //removes the old animation
        $('.pet-image').removeClass('pet-action-animation');
        //forces the browser to restart the animation
        void $('.pet-image')[0].offsetWidth;
        //addClass() applies the bounce animation to the image
        $('.pet-image').addClass('pet-action-animation');
      }
      //hides the previous message and fades in the new message
      $('.pet-message').hide().text(message).fadeIn(300);
      }
  