function getNthElement(array,n)
{
    if(array.length==0)
    {
        alert("'"+"undefined"+"'");
    }
    else if(array.length>0)
    {
        alert(array[n]);
    }
}
getNthElement([1,3,5],1);