function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase()
  }
  // Function 1: logShout(string)
// Takes a string argument and logs it in all caps using console.log()
function logShout(string) {
  console.log(string.toUpperCase());
}

// Function 2: logWhisper(string)
// Takes a string argument and logs it in all lowercase using console.log()
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// Function 3: sayHiToHeadphonedRoommate(string)
// Returns different messages based on the input `string`
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

  