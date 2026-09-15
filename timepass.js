let date = new Date()
console.log("Date", date);

let date1 = new Date().getFullYear() - 5
console.log("Date 1", date1);
let date2 = new Date().setFullYear(date1)
console.log("Date 2", date2);
let date3 = new Date(date2)
console.log("Date 3", date3);


//  shortcut for this
let oldDate = new Date(new Date().setFullYear( new Date().getFullYear() - 5))
console.log("5 year old date from now : " , oldDate);

let moneyInPesa = 6999900
let moneyInRupees = moneyInPesa / 100
console.log("Total Money in Rupees", moneyInRupees);