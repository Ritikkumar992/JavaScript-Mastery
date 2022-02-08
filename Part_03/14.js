//fetch chaining

const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

//step1: getMethod:
xhr.open("GET", url);

//step2: onload:
xhr.onload = ()=>{
    if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.response);
            console.log(data);
            //we need to fetch id no 3 form the given data.
            const id = data[3].id;
            const xhr2 = new XMLHttpRequest();
            const url2 = `${url}/${id}`;
            console.log(url2);
            //fetching url 2.
            xhr2.open("GET",url2);
            xhr2.onload = () =>{
                const data2 = JSON.parse(xhr2.response);
                console.log(data2);
            }
            xhr2.send();

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