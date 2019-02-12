let months = [ {days: 31},{days: 28},{days: 31},{days: 30},{days: 31},{days: 30},{days: 31},{days: 31},{days: 30},{days: 31},{days: 30},{days: 31} ]
let date   = new Date()
let year   = date.getFullYear()

let getDays = months.map((item, idx) => {
  theMonth = []
  for(var i=1; i<=item.days; i++){	
    theMonth.push(`${i}/${idx+1}/${year}`)
  }
  return theMonth
})

let getDaysString = months.map((item, idx) => {
  theMonth = []
  for(var i=1; i<=item.days; i++){	
    theMonth.push(`${i}/${idx+1}/${year}`)
  }
  return theMonth.join()
})

let allFn = {
	simple: getDaysString,
	vector: getDays
}

module.exports = allFn