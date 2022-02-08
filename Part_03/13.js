//ERROR Handling
const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

//step1: getMethod:
xhr.open("GET", url);

//step2: onload:
xhr.onload = ()=>{
    if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.response);
            console.log(data);
    }else{
        console.log('Something went wrong')
    }

}
//Handling network issue:
xhr.onerror = ()=>{
    console.log('Net gya tata by-by');
}
//step2: sendMethod();
xhr.send();