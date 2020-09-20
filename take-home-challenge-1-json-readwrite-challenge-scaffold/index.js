const fs = require('fs')
const data = fs.readFileSync('./fighters.json')
const parsed_data = JSON.parse(data);
//Your Code Here
let updatedFighters = (fighters) => {
    let power_lvl = fighters.fighters.map(fighter => {
        return fighter.powerLevel
    });
    let weakest = Math.min.apply(Math , power_lvl );
    return fighters.fighters.filter(fighter => fighter.powerLevel != weakest);

}
const reWriteFile = (fighters) => {
    return fs.writeFile('./updatedFighters.json', JSON.stringify(updatedFighters(fighters)) , (err) => {
        if (err) {
          console.error("error occured writing json file");
        } else {
          console.log("Updated json file");
        }
      });
    }
reWriteFile(parsed_data)

module.exports = {
   updatedFighters
}
