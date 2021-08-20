# Background

This is my experiment to make a code editor in javascript which should turn out to better than nano. _dies laughing_

Now this is purposely for some minute text editing and code viewing purpose.  
So essentially for my requirements I would want something like an insert and normal mode and a good colorscheme I guess.

# Todo

## Editor

- [ ] Some way to manage screen \ windows in terminal

  - Ncurses binding for node has no maintainer right now.
  - There is blessed but it is far more bloated with stuff
    for my use case which will end up making download size
    more atleast imo. Plus why depend on some external deps.

  - So i have decided to make my own terminal interface.
    _again dies laughing_

    Anyhow any terminal interface like ncurses renders a
    proper window / screen. So first step will be rendering
    the screen :). (Reasearch in progress rn my brain kinda stopped working)

    This will be used to show stuff as column number and
    line number and file name

- [x] Input

  Taking input is not that hard. Node comes with a module called readline  
  so you can do

  ```js
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", () => {
    return;
  });
  // This does create a basic editing screen
  // although this is just reading input line and rather than reading
  // the input line wise I want to read it character by character.
  // So i switch to this

  const stdin = process.stdin;

  stdin.on("data", (key) => {
    stdin.setRawMode(true);

    if (key === "\u0003") {
      process.exit();
    }

    process.stdout.write(key);
  });

  // This way you can get input character by character and exploit them further
  // with octal codes for colors and stuff.
  ```
