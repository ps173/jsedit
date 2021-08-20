const stdin = process.stdin;
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
  };

  // Simple edit screen
  this.edit = function editScreen() {
   /* Initializing screen */
   /* TODO: way to change to new line */
   this.screen();
   stdin.setRawMode(true);

   stdin.setEncoding("utf8");

   stdin.on("data", (key) => {
    this.context.state += `${key}`;
    if (key === "\u0003") {
     process.exit();
    }
    process.stdout.write(key);
   });

   // Start the editor screen
  };

  // END-OF-FUNCTION
 }
};
