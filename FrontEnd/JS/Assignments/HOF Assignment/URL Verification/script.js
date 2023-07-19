function validateUrl(url){
    return /(http)s?:\/\/[\w\d]+\.[a-zA-Z]+.test(url) ? "Valid Url" : "Invalid Url" /

}

//valid urls
console.log(validateUrl("https://google.com"))
console.log(validateUrl("https://1google123.com"))

console.log("") // Hack to give a line break


//Invalid Urls

console.log(validateUrl(""))
console.log(validateUrl("12343.com"))
console.log(validateUrl("htt://google.com"))
console.log(validateUrl("http://google."))