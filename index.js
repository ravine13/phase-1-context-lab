/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  const employee = {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  }
  return employee
}

function createEmployeeRecords(arrays) {
  const recordsArr = []
  for (const array of arrays) {
    const employeeObj = createEmployeeRecord(array)
    recordsArr.push(employeeObj)
  }
  return recordsArr
}

function createTimeInEvent(timestamp) {
  const hour = Number(timestamp.split(' ')[1])
  const date = timestamp.split(' ')[0]
  this.timeInEvents.push({
    type: 'TimeIn',
    hour,
    date,
  })
  return this
}

function createTimeOutEvent(timestamp) {
  const hour = Number(timestamp.split(' ')[1])
  const date = timestamp.split(' ')[0]
  this.timeOutEvents.push({
    type: 'TimeOut',
    hour,
    date,
  })

  return this
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find((rec) => rec.date === date)
  const timeOut = this.timeOutEvents.find((rec) => rec.date === date)
  return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this,date) * this.payPerHour
}

function calculatePayroll(arr) {
  let totalWages = 0
  arr.map((employee) => {
    return totalWages += allWagesFor.apply(employee)
  })
  return totalWages
}

function findEmployeeByFirstName(arr, fName) {
  const record = arr.find(rec => rec.firstName == fName )
  return record
}

document();