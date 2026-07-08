let url = "http://google.com/example?name=mojahid&age=18&gender=male";
console.log(url?.split("?")[1].split('&'))
const array = url?.split("?")[1].split('&');
const result = {}
array.forEach((item,index)=>{
    const [key,value] = item.split("=")
    result[key] = value
})
function checkValue(result,key){
    for(let i in result){
        console.log(i,result[i])
        if(i === key){
            return result[i];
        }
    }
}
console.log(checkValue(result,"name"))
// console.log(array.length)
// for(let i = 0;i<array.length;i++){
//     console.log(value[i].flat())
// }
// function processUrl(url) {
//     const obj = {};
//     url?.split("?")?.split("&")?.split("=")?.map((item)=>{
//         console.log(item);
//     });

//     return function (key) {
//         let search = key + "=";

//         let start = url.indexOf(search);

//         if (start === -1) {
//             return null;
//         }

//         start += search.length;

//         let end = url.indexOf("&", start);

//         if (end === -1) {
//             end = url.length;
//         }

//         return url.substring(start, end);
//     };
// }

// const getParam = processUrl(url);

// console.log(getParam("name"));   // mojahid
// console.log(getParam("age"));    // 18
// console.log(getParam("gender")); // male
