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

    Any how any terminal interface like ncurses renders a
    proper window / screen. So first step will be rendering
    the screen :)

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
  ```

  After throw some more readline stuff for detecting ctrl-c to exit and u r
  now going with a editing screen. But this only for reading lines 
  **Note: for some reason I thought that playing with stdin to make things is a 
  good idea. No it is not you will have to interpret lot of stuff like handling 
  position of cursor and more. Plus it bugs a lot**

- [ ] Next is reading file and taking file input
- [ ] Multiprocesses to show more stuff like a bar at top
  Now since I know that terminal is not like ur common browser so u can not fix
  the things with their position so next thing that I would like to work on is 
  fixing a bar at the top of screen
