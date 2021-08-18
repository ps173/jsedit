const readline = require("readline");
// TODO: add a way to check the position of the cursor
// TODO: add a way to read file contents and edit them

module.exports = class Editor {
  constructor() {
    this.context = {
      state: ``,
      isEditing: true,
      cursor: {},
    };
    this.clear = function clearScreen() {
      process.stdout.write("\x1Bc");
    };
    this.editArea = function editScreen() {
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
  }
};
