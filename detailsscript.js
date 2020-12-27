welcome('Welocome To Sbay')
welcome('Buy More Than 10 And Get 50% SALE!!!')

var username = data('Tell Us Your Name ');
var numberofcars = data('How Many Cars Do You Want?')

username = important('Tell Us Your Name ', username);
numberofcars = important('How Many Cars Do You Want?', numberofcars);


document.write('<p>' + 'Your Name Is: ' + username + '</p>');
document.write('<p>' + 'Number Of Cars Is: ' + numberofcars + '</p>');


function welcome(message) {
    alert(message)
}

function data(message) {
    return prompt(message);
}

function important(message, write) {


    while (write === '' || write === null) {
        write = prompt(message);
    }
    return write;
}


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


for (var i = 1; i <= numberofcars; i++) {
    document.write('<p>' + i + '</p>');
    document.write('<img src="https://evchargeplus.com/wp-content/uploads/2019/11/BMW-i8-Coupe0-800x600.png" alt="">');
}
var recommendations = prompt('Any Recommendations?');
alert('Your Recommendation Will Be considered')
console.log(recommendations);
