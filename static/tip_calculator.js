function calculate() {
  var totalBill = Number(document.getElementById('amount').value);
  var serviceRate = Number(document.getElementById('serviceEqual').value);
  var noPeople = Number(document.getElementById('people').value);
  var result = (totalBill * serviceRate)/noPeople;
  document.getElementById('resultPara1').innerHTML = "Tip amount for each individual";
  document.getElementById('resultPara2').innerHTML =('Rs. '+result.toFixed(2));
}
