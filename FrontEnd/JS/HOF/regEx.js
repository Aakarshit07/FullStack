// regEx means Regular expression
let pattern = 'pw'

let regExOne = new RegExp(pattern);

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi;

const strToCheck = "Pw is growing at a rapid speed and records speed amd recently they are working om PWskills to create skills based pwcontent"
const result = regExThree.test(strToCheck)
console.log(result)

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult)


// - Replace
const oneMoreResult = strToCheck.replace(regExThree, "p-w")
console.log(oneMoreResult)

const webUrl = "https://pwskills.com/aakarshit%20choudhary"
const userbleUrl = webUrl.replace(/%\d\d/, '-');
console.log(userbleUrl)