function si_a(p,r,t)
{
    let i_a=p*r*t/100;
    return i_a;
}
function si_b(p,r,t)
{
    let i_b=p*r*t/100;
    return i_b;
}
let result=si_a(100,2,3)+si_b(200,4,2);
console.log("The sum of simple interst="+result);


let add=function(a,b,c)
{
    let d=a+b+c;
    return d;
}
consode.log(add(10,20,30));


let sum =(a,b,c)=>console.log(a+b+c);//arrow function single line the job is done
sum(10,20,30);