"use strict";
var enter = confirm("You are outside of a forest cabin. Press OK to enter");

if(enter) {
    var bowls = prompt("You see three bowls of porridge. Eat 1, 2, or 3?");
    /*if(bowls == 1) {
      alert("The porridge is too cold. The end!");
    } else if (bowls == 2) {
      alert("The porridge is too hot. The end!");
    } else {
      alert("It was delicious");*/
      switch (bowls) {
      default:
        alert("Ok, what are you even doing? Press Ok or Cancel, reload the page, and try again.");
        break;
      case "1":
        alert("The porridge is too cold. The end! But really, HOW THE HECK CAN COLD PORRIDGE KILL YOU!?!?");
        break;
      case "2":
        alert("The porridge is so hot that it burns through your tongue and you collapse in agony. The end!");
        break;
      case "3":
        alert("It was delicious, and made you think of various things like...well...your GF/BF.");
        var hours = "The thought of your GF/BF made you sleepy. Sleep for how many hours?";
        var sleep = prompt(hours);
        sleep = parseInt(sleep);
      if( sleep < 2 ) {
        alert("You wake up just in time, and scamper away. But not before you steal a few things...");
      } else {
        alert("You sleep too late. The hungry bears spot you, and thinking you're a metal endoskeleton, forcefully try to stuff you into an animatronic suit. You are killed by the the scraping of all the wires against your face.");
      }
      alert('The End! Wow, that was...quite dark actually...');
    }
} else {
    alert("And that's the world's shortest story. The End!");
}
