var n=parseInt(prompt("Enter range of Elements:"));
var sum=0;
var a=function(n){
    num=[]
    for(var i=1;i<=n;i++)
    {  var c=parseInt(prompt("Enter a Number:"))
        num.push(c);
        sum=sum+c
    }
    console.log(num);
    console.log(sum);
}    
a(n);