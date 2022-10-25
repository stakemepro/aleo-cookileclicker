const {exec} = require("child_process");
const util = require("util");
const execAsync = util.promisify(exec);

async function getResultApp(pathFolder, args) {
   function getLineWithoutLastLine(line) {
       const lines = line.split('\n');
       lines.pop()
       return lines.join('').trim();
   }

   const result = await execAsync(`cd ${pathFolder} && aleo run ${args}`);
   const fullOutput = result.stdout.split('Output')[1]
       .replace('•', '')
       .trim();
   return getLineWithoutLastLine(fullOutput);
}


module.exports = {
    getResultApp
}