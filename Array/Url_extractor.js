let url = "http://google.com/example?name=mojahid&age=18&gender=male";
// console.log(url.indexOf("name"))
// console.log(url.slice(26))
function processUrl(url){
    return function (key){
        if(!url.includes(key)){
            return null;
        }else{
            let index = url.indexOf(key);
            console.log("Index---",index)
            let andSign = url.indexOf('&')
            console.log("And Sign",andSign);
            let sign  = url.substring(index,andSign)
            console.log("Sign---",sign)
            return sign;
        }
    }
}

console.log(processUrl(url)("name"))