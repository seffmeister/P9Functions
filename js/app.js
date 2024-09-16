//walk three steps forward.
//then turn around and walk three steps forward
// then turn left and walk three steps forward.
// then turn left and walk one step forward.
// then turn around and walk one step forward

//console.log("Move Forward.");
//console.log("Move Right");

turnAround();
stepForward();

function stepForward() {
  console.log("Move Forward");
}
function turnRight() {
  console.log("Turn Right");
}
function turnLeft() {
  turnRight();
  turnRight();
  turnRight();
}
function walkThreeSteps() {
  stepForward();
  stepForward();
  stepForward();
}

function turnAround() {
  turnRight();
  turnRight();
}

function fly() {

}
