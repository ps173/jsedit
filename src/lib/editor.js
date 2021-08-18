const readline = require("readline");
/* TODO: add a way to check the position of the cursor */
/* TODO: add a way to read file contents and edit them */

module.exports = class Editor {
 constructor() {
  /* Editor states */
  this.context = {
   state: ``,
   isEditing: true,
   cursor: {},
  };

  this.clear = function clearScreen() {
   process.stdout.write("\x1Bc");
  };

  this.screen = function screen() {
   this.clear();
   /* Add a top bar */
  };

  // Simple edit screen
  this.edit = function editScreen() {
   /* Initialize screen */
   this.screen();

   const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
    histroysize: 100,
    prompt: "",
   });

   // cursor where were u
   // Start the editor screen
   rl.on("line", (text) => {
    this.context.state += `${text}\n`;
   });

   // Simple edit screen
   rl.on("SIGINT", () => {
    rl.question("Do you want to Exit? (y for yes) ", (answer) => {
     if (answer.match(/^y(es)?$/i)) {
      rl.close();
     } else {
      this.clear();
      rl.write(this.context.state, "\n");
     }
    });
   });
  };

  // END-OF-FUNCTION
 }
};
