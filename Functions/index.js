var x = 5;
console.log(x);
console.log(f1(x+2));

function f1(x)
{
    console.log(x);
    return f2(x+2);
}

function f2(x)
{
    console.log(x);
    return x+2;
}
