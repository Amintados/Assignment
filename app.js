// alert("Good Job");

    // var abc = "Ameen here";
    // alert(xyz);

    // var x = 10;
    // var y = 30;
    // var z = a+b;

    // alert(z)

    // var x = 10;
    // var y = "40";
    // var z = b-a;

    // alert(z)

    // var x=10;
    // var y= 20;

    // x++;
    // y--;

    // console.log(x);
    // console.log(y);

    // var x = 10
    // var y = 20

    // var z=x++ - --y + x - y + x - --y - ++x + --y;

    // console.log(z)

// var firstName = prompt("Enter first name: ");
// var lastName = prompt("Enter Last name: ");
// var city = prompt("Enter city", "Islamabad");
// console.log(firstName);
// console.log(lastName);
// console.log(city);

// var subj1 = prompt("Enter marks 1");
// var subj2 = prompt("Enter marks 2");
// var subj3 = prompt("Enter marks 3");
// var subj4 = prompt("Enter marks 4");
// var subj5 = prompt("Enter marks 5");
// console.log(subj1);
// console.log(subj2);
// console.log(subj3);
// console.log(subj4);
// console.log(subj5);

// var total = parseFloat(subj1) + parseFloat(subj2) + parseFloat(subj3) + parseFloat(subj4) + parseFloat(subj5)


// var per = parseFloat(total / 800) * 100;
// console.log("Total Marks",total);
// console.log("Percentage",per);
// if(total<800)
// {
// if(per>90)
// {
//     console.log("A+");
// }
// else if(per>75 && per<=90)
// {
//     console.log("B+");
// }
// else if(per>40 && per<=75)
// {
//     console.log("C+");
// }
// else
// {
//     console.log("Fail");
// }
// }
// else
// {
//     console.log("Invalid");
// }

// var officer = "yes";
// if(officer == "yes")
// {
//     console.log("Document successfully submitted");
// }
// else
// {
//     console.log("Issue");
// }



// var age = prompt("Enter your age");
// var studentCard = false;

// if(age>18)
// {
//     console.log("Student Allow");
// }
// else if(studentCard == true)
// {
//     console.log("Student allowed");
// }
// else
// {
//     console.log("Not allowed");
// }
// var a = ["a","b","c","d"];
// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i]);
// }

// var a = ["a","b","c","d","e","f","g","h"]
// var b = "z";
// for(let i=0;i<a.length;i++)
// {
//     if(b==a[i])
//     {
//         found= true;
//         alert("Element captured");
        
//     }
// }

// var a = ["a","b","c","d","e"];
// var b = [1,2,3,4,5];

// for(i=0;i<a.length;i++)
// {
//     for(j=0;j<b.length;j++)
//     {
//         console.log(a[i]+b[j]);
//     }
// }

var a = ["a","b","c","d","e","f","g","h"]
var b = "z";
var found = false;
for(let i=0;i<a.length;i++)
{
    if(b==a[i])
    {
        found= true;
        break;
    }
}
if(found == true)
{
    alert("element captured");
}
else
{
    alert("not captured");
}
