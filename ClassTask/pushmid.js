var cars=['BMW','AUDI','BENZ','RR','JAGUAR'];
for(var i=cars.length-1;i>=0;i--)
{
    cars[i+1]=cars[i];
    if(cars[i]=="AUDI")
    {
        cars[i]="VOLVO";
        break;
    }

}
console.log(cars);