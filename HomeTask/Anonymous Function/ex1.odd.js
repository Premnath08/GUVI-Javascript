var n=parseInt(prompt("Enter A Number:"));
var o=function(n){
     
    odd=[]
    for(i=0;i<=n;i++)
    {
        if(i%2!==0)
        {
            odd.push(i);
        }
    }
    console.log(odd) 
}
o(n);