function averageSales(salesPeople, ){
    var totalSales = 0;

    salesPeople.forEach(function(person){
        totalSales += person.sales;
    });
    console.log(totalSales);
}