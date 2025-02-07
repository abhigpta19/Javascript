function f1()
{
    f2();
    let y=7;
    function f2()
    {
        let z=9;
        f3();
        function f3()
        {
            console.log(y,z)
        }
    }
}

f1();

// function a()
// {
//     var b =10;
//     c();
//     function c()
//     {
//         var z = 15;
//         d();
//         function d()
//         {
//             console.log(b);
//         }
//     }
// }

// a();