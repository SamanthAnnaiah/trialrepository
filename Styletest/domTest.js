function alertThat() {
    alert("This is THAT");
}

console.log(document.domain);
console.log(document.cookie);
console.log(document.documentElement);

var temp = document.querySelectorAll("#div2 > p");
console.log(temp);


for (i = 0; i < temp.length; i += 2) {
    temp[i].innerHTML = "Crazy";
}

var k = document.getElementsByClassName('crazy');
console.log(k[0].innerText);

var n3 = document.links;
for (i = 0; i < n3.length; i++) {
    var k = n3[i].getAttribute('href');
    var k1 = k.toString();
    if (k1.slice(0, 1) !== "#") {
        console.log(k1);
    }

}