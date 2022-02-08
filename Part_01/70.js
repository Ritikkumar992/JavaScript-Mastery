//Optional Chaining ::===>

const user = {
    name:"ritik",
    age:19,
    address:{house_no:1001}
}

console.log(user, typeof user.address);

console.log(user.name);

console.log(user?.name); // if user -> present : print(.name) else print(undefined).

console.log(user?.address?.house_no);
// if user -> present : check(.address) -> present:  check (.house_no) --> else print(undefined).

console.log(user?.address?.ward_no); // undefined.

