
var username = 'SouravAK';
var password = 'sourav@123';
var amount = 100000;

function withdraw() {

var inputUsername = document.getElementById('name').value;
var inputPassword = document.getElementById('password').value;
var inputAmount = Number(document.getElementById('amount').value);

if (username != inputUsername) {

    alert("Invalid username");
}
elseif (password != inputPassword) {

  alert("Incorrect password");
}

elseif (amount<inputAmount) {

  document.getElementById('result').innerHTML = ("Insufficient balance...");
}
else {

  var withdrawn = amount - inputAmount;
  document.getElementById('result').innerHTML = ("Your request to withdraw Rs. "+inputAmount+" is processed. Available balance is Rs. "+withdrawn);

}

}
