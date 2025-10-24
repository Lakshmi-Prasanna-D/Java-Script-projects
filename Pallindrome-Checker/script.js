 const input=document.getElementById("input")

function reverseString(str)
{
    return str.split("").reverse().join("")
}
function check()
{
   
    const val=input.value;
    const reverse=reverseString(val)
    if(val===reverse){
         alert("The Given String is a Pallindrome")
    }
    else {
        alert("The given String is Not a Pallindrome")
        }
    input.value=""
}