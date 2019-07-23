const fs = require('fs')
var readlineSync = require('readline-sync')
const chalk = require('chalk')
const JsonFind = require('json-find');


//function to add a new table
const addTable = () => {
  const table = loadTable()
  var name = readlineSync.question('What is your name? \n')
  const duplicateTable = table.find((table) => table.name.toLowerCase() === name)

  if (!duplicateTable) {
    const monday1 = readlineSync.question('Do you have a class on Monday 0800-0900? (y/n)\n')
    const monday2 = readlineSync.question('Do you have a class on Monday 0900-1000? (y/n)\n')
    const monday3 = readlineSync.question('Do you have a class on Monday 1000-1100? (y/n)\n')
    const monday4 = readlineSync.question('Do you have a class on Monday 1100-1200? (y/n)\n')
    const monday5 = readlineSync.question('Do you have a class on Monday 1200-1300? (y/n)\n')
    const monday6 = readlineSync.question('Do you have a class on Monday 1400-1500? (y/n)\n')
    const monday7 = readlineSync.question('Do you have a class on Monday 1500-1600? (y/n)\n')
    const monday8 = readlineSync.question('Do you have a class on Monday 1600-1700? (y/n)\n')
    const monday9 = readlineSync.question('Do you have a class on Monday 1700-1800? (y/n)\n')

    const tuesday1 = readlineSync.question('Do you have a class on Tuesday 0800-0900? (y/n)\n')
    const tuesday2 = readlineSync.question('Do you have a class on Tuesday 0900-1000? (y/n)\n')
    const tuesday3 = readlineSync.question('Do you have a class on Tuesday 1000-1100? (y/n)\n')
    const tuesday4 = readlineSync.question('Do you have a class on Tuesday 1100-1200? (y/n)\n')
    const tuesday5 = readlineSync.question('Do you have a class on Tuesday 1200-1300? (y/n)\n')
    const tuesday6 = readlineSync.question('Do you have a class on Tuesday 1400-1500? (y/n)\n')
    const tuesday7 = readlineSync.question('Do you have a class on Tuesday 1500-1600? (y/n)\n')
    const tuesday8 = readlineSync.question('Do you have a class on Tuesday 1600-1700? (y/n)\n')
    const tuesday9 = readlineSync.question('Do you have a class on Tuesday 1700-1800? (y/n)\n')

    const wednesday1 = readlineSync.question('Do you have a class on Wednesday 0800-0900? (y/n)\n')
    const wednesday2 = readlineSync.question('Do you have a class on Wednesday 0900-1000? (y/n)\n')
    const wednesday3 = readlineSync.question('Do you have a class on Wednesday 1000-1100? (y/n)\n')
    const wednesday4 = readlineSync.question('Do you have a class on Wednesday 1100-1200? (y/n)\n')
    const wednesday5 = readlineSync.question('Do you have a class on Wednesday 1200-1300? (y/n)\n')
    const wednesday6 = readlineSync.question('Do you have a class on Wednesday 1400-1500? (y/n)\n')
    const wednesday7 = readlineSync.question('Do you have a class on Wednesday 1500-1600? (y/n)\n')
    const wednesday8 = readlineSync.question('Do you have a class on Wednesday 1600-1700? (y/n)\n')
    const wednesday9 = readlineSync.question('Do you have a class on Wednesday 1700-1800? (y/n)\n')

    const thursday1 = readlineSync.question('Do you have a class on Thursday 0800-0900? (y/n)\n')
    const thursday2 = readlineSync.question('Do you have a class on Thursday 0900-1000? (y/n)\n')
    const thursday3 = readlineSync.question('Do you have a class on Thursday 1000-1100? (y/n)\n')
    const thursday4 = readlineSync.question('Do you have a class on Thursday 1100-1200? (y/n)\n')
    const thursday5 = readlineSync.question('Do you have a class on Thursday 1200-1300? (y/n)\n')
    const thursday6 = readlineSync.question('Do you have a class on Thursday 1400-1500? (y/n)\n')
    const thursday7 = readlineSync.question('Do you have a class on Thursday 1500-1600? (y/n)\n')
    const thursday8 = readlineSync.question('Do you have a class on Thursday 1600-1700? (y/n)\n')
    const thursday9 = readlineSync.question('Do you have a class on Thursday 1700-1800? (y/n)\n')

    const friday1 = readlineSync.question('Do you have a class on Friday 0800-0900? (y/n)\n')
    const friday2 = readlineSync.question('Do you have a class on Friday 0900-1000? (y/n)\n')
    const friday3 = readlineSync.question('Do you have a class on Friday 1000-1100? (y/n)\n')
    const friday4 = readlineSync.question('Do you have a class on Friday 1100-1200? (y/n)\n')
    const friday5 = readlineSync.question('Do you have a class on Friday 1200-1300? (y/n)\n')
    const friday6 = readlineSync.question('Do you have a class on Friday 1400-1500? (y/n)\n')
    const friday7 = readlineSync.question('Do you have a class on Friday 1500-1600? (y/n)\n')
    const friday8 = readlineSync.question('Do you have a class on Friday 1600-1700? (y/n)\n')
    const friday9 = readlineSync.question('Do you have a class on Friday 1700-1800? (y/n)\n')

    table.push({
      name: name,
      monday: {
        _0800:monday1,
        _0900:monday2,
        _1000:monday3,
        _1100:monday4,
        _1200:monday5,
        _0200:monday6,
        _0300:monday7,
        _0400:monday8,
        _0500:monday9,
      },
      tuesday: {
        _0800:tuesday1,
        _0900:tuesday2,
        _1000:tuesday3,
        _1100:tuesday4,
        _1200:tuesday5,
        _0200:tuesday6,
        _0300:tuesday7,
        _0400:tuesday8,
        _0500:tuesday9,
      },
      wednesday: {
        _0800:wednesday1,
        _0900:wednesday2,
        _1000:wednesday3,
        _1100:wednesday4,
        _1200:wednesday5,
        _0200:wednesday6,
        _0300:wednesday7,
        _0400:wednesday8,
        _0500:wednesday9
      },
      thursday:{
        _0800:thursday1,
        _0900:thursday2,
        _1000:thursday3,
        _1100:thursday4,
        _1200:thursday5,
        _0200:thursday6,
        _0300:thursday7,
        _0400:thursday8,
        _0500:thursday9,
      },
      friday: {
        _0800:friday1,
        _0900:friday2,
        _1000:friday3,
        _1100:friday4,
        _1200:friday5,
        _0200:friday6,
        _0300:friday7,
        _0400:friday8,
        _0500:friday9,
      }
    })
  
  saveTable(table)
  console.log(chalk.green.inverse(name + ' has been added!'))
} else {
  console.log(chalk.red.inverse(name + ' already exist in database'))
}
}

//function to add a timetable as JSON
const addJSONTable = () => {
  const tables = loadTable()
  const path = readlineSync.question('Enter path of JSON file \n');
  const dataExtract = () => {
  try {
    const dataBuffer = fs.readFileSync(path)
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
} catch (e) {
  console.log(chalk.red.inverse("Path Invalid"))
}
  }
const newTable = dataExtract()

newTable.forEach(table => {
  const duplicateTable = tables.find((tables) => table.name === tables.name)
if(!duplicateTable){
  tables.push(table)
  console.log(chalk.green(table.name+ " has been added"))
} else{ 
  console.log(chalk.red(table.name+ " already exist in database"))
}
});
saveTable(tables)
}

//function to remove a table
const removeTable = () => {
  const tables = loadTable()
  const name = readlineSync.question('Enter name to be deleted? \n').toLowerCase()
  const tablesToKeep = tables.filter((table) => table.name.toLowerCase() !== name)

  if (tables.length > tablesToKeep.length) {
      console.log(chalk.green.inverse(name + ' has been removed!'))
      saveTable(tablesToKeep)
  } else {
      console.log(chalk.red.inverse(name + 'doesnt exist in database!'))
  }    
}

//function to view tables
const viewTable = () => {
  const tables = loadTable()
  var tablesFound = []

  var day = readlineSync.question('Enter day \n').toLowerCase()
  const time = '_' + readlineSync.question('Enter time in hhmm format \n')

 
  tablesFound = whoIsFree(day, time)
  if(tablesFound.length > 0) {
    console.log(chalk.green.bold('Available:'))
    tablesFound.forEach((table) => {
      console.log(chalk.green(table + " "))
    })
  } else {
    console.log(chalk.red("No one is free!"))
  }
}

//function to display deskduties
const deskDuty = () =>
{
  const days= ['Monday','Tuesday','Wednesday', 'Thursday', 'Friday']
  const hours = ['0800', '0900', '1000', '1100', '1200', '0200', '0300', '0400', '0500']
  days.forEach((day) => {
    console.log(chalk.bold.inverse(day+": "))
    hours.forEach((hour) => {
      if (whoIsFree(day, hour).length > 0){
      console.log(chalk.green(hour+": "+ whoIsFree(day,hour)))
      }else {
        console.log(chalk.red(hour+": Nobody is available"))

      }
    })
  })
}

//Test function to return deskduty
const whoIsFree = (unparsedDay,unparsedTime) => {
  day = unparsedDay.toLowerCase()
  time = '_' + unparsedTime
  const tables = loadTable()
  var tablesFound = []
  if(tables[0][day]){
    tables.forEach((table) => {
      if((table[day][time] === "n")||(table[day][time] === "N")){
      tablesFound.push(table.name)
      // console.log(table.name)
      }
    })
    return tablesFound
  } else {
    console.log(chalk.red.inverse("Invalid Day!"))
  }
}

//function to add a save a table 
const saveTable = (table) => {
  const dataJSON = JSON.stringify(table)
  fs.writeFileSync('table.json', dataJSON)
}

//function to read existing tables
const loadTable = () => {
  try {
      const dataBuffer = fs.readFileSync('table.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  } catch (e) {
      return []
  }
}

module.exports = {
  addTable: addTable,
  removeTable: removeTable,
  viewTable: viewTable,
  addJSONTable: addJSONTable,
  deskDuty: deskDuty
}
