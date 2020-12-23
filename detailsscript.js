alert('Welocome To Sbay');
alert('Buy More Than 10 And Get 50% SALE!!!');

var numberofcars = prompt('How Many Cars Do You Want?');
var Theprice = numberofcars * 199999;

if (numberofcars < 1) {
    alert('MAYBE NEXT TIME :(');
}
else if (numberofcars > 10) {
    Theprice = Theprice / 2
    alert('Total Price is ' + Theprice + '$');
    confirm("Are You Sure of Buying This?");
    alert('THANK YOU FOR BUYING FROM US :)');
}
else {
    alert('Total Price is ' + Theprice + '$');
    confirm("Are You Sure of Buying This?");
    alert('THANK YOU FOR BUYING FROM US :)');
}
var recommendations =prompt('Any Recommendations?');
alert('Your Recommendation Will Be considered')
console.log(recommendations);






