var draw = ["house", "phone", "car"];
onEvent("start", "click", function( ) {
  setScreen("screen2");
  penDown();
});
onEvent("moveforeword", "click", function( ) {
  moveForward(25);
});
onEvent("backward", "click", function( ) {
  moveBackward(25);
});
onEvent("turnright", "click", function( ) {
  turnRight(30);
});
onEvent("turnleft", "click", function( ) {
  turnLeft(30);
});
