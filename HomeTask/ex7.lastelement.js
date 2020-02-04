function getLastElement(array)
{
    if(array.length==0)
    {
        alert("'"+"undefined"+"'");
    }
    else if(array.length>0)
    {
        alert(array[array.length-1]);
    }
}
getLastElement([1,2,3,4]);