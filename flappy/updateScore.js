function updateScore() {
  
  // Check if the bird has passed pipe1
  if (pipe1X < 0 && !passedPipe1) {
    score++;
    passedPipe1 = true;
  }
  // Reset the flag if the pipe has moved off screen and is reset
  if (pipe1X <= -50) {
    passedPipe1 = false;
  }

  // Repeat for pipe2
  if (pipe2X < 0 && !passedPipe2) {
    score++;
    passedPipe2 = true;
  }
  if (pipe2X <= -50) {
    passedPipe2 = false;
  }

  // Repeat for pipe3
  if (pipe3X < 0 && !passedPipe3) {
    score++;
    passedPipe3 = true;
  }
  if (pipe3X <= -50) {
    passedPipe3 = false;
  }
}
