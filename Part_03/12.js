const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

//step1: getMethod:
console.log(xhr.readyState); // readyState -> 0
xhr.open("GET",url);
console.log(xhr.readyState); // readyState -> 1

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    // if(xhr.readyState === 4){
    //     // console.log(xhr.response); // it will print whole response file.
    //     // console.log(typeof xhr.response); // string.
        
    //     // now we need to convert this string response file to the javaScript file using parsing
    //     const response = xhr.response;
    //     const data = JSON.parse(response);
    //     console.log(data);
    //     console.log(typeof data);// object.
    // }
    // onload --> readystate === 4
    xhr.onload = function(){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
        console.log(typeof data);// object.
    }
}
//step2: sendMethod();
xhr.send();