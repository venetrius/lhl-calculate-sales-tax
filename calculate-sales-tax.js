/* data provided to the Assignment */

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

/* end of data provided to the Assignment */

function calculateSalesTax(salesData, taxRates) {
  let results = {};
  for(let i = 0; i < salesData.length; i++){
    let company = salesData[i];
    let oldData = results[company.name];
    let sum = oldData ? oldData.totalSales : 0;
    let tax = oldData ? oldData.totalTaxes : 0;
    let newSum = sumArray(company.sales);
    sum += newSum;
    tax += newSum * taxRates[company.province];
    results[company.name] = {
      totalSales: sum,
      totalTaxes: tax
    }
  }
  return results;
  // Implement your code here
}

function sumArray(vals){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return vals.reduce(reducer);
}



var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/