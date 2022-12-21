let price=[600,500,800,1000,700,900,1000,1200,1100,1300]
 let result=price.filter (function(prices){
    return prices>=500 && prices<=1000;
 });
  document.write(result);