// Break and continue:

//break statement: ends the loop when condition got staisfied.
for(let i = 0;i<9;i++){
    if(i == 3){
        break;
    }
    console.log(i); // O/P; 0 1 2 
}

//continue statement:  when condition got staisfied it again give control to the loop;
for(let i = 0;i<9;i++){
    if(i == 3){
        continue;
    }
    console.log(i); // O/P; print everthing btw 0 and 9 except 3.
}