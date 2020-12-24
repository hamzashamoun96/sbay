alert('Welocome To Sbay');
alert('Buy More Than 10 And Get 50% SALE!!!');
var name = prompt('Tell Us Your Name ');
document.write('<p>' + 'Your Name Is: ' + name + '</p>');

var numberofcars = prompt('How Many Cars Do You Want?');
while (numberofcars === '') {
    numberofcars = prompt('How Many Cars Do You Want?');
}


document.write('<p>' + 'Number Of Cars Is: ' + numberofcars + '</p>');

var Theprice = numberofcars * 199999;

if (numberofcars < 1) {
    alert('MAYBE NEXT TIME :(');
}
else if (numberofcars > 10) {
    Theprice = Theprice / 2
    alert('Total Price is ' + Theprice + '$');
    confirm("Are You Sure of Buying This?");
    alert('THANK YOU FOR BUYING FROM US :)');
    document.write('Toltal Price: ' + Theprice + '$' + '</p>');

}
else {
    alert('Total Price is ' + Theprice + '$');
    confirm("Are You Sure of Buying This?");
    alert('THANK YOU FOR BUYING FROM US :)');
    document.write('<p>' + 'Toltal Price: ' + Theprice + '$' + '<p>');
}
for (var i = 0; i < numberofcars; i++) {
    
    document.write(i+1 +'<img src="https://evchargeplus.com/wp-content/uploads/2019/11/BMW-i8-Coupe0-800x600.png" alt="">');
    
}
var recommendations = prompt('Any Recommendations?');
alert('Your Recommendation Will Be considered')
console.log(recommendations);






