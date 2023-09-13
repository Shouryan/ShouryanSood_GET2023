const age=18;
console.log('The age is:' +age);// print the age

{
    const age=43;
console.log('The age outside the scope is:' +age);
}
console.log('The age inside the scope is:' +age);
delete age;// release the memory