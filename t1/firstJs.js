var a = 25;
var b = 45;

for (var i = 0; i < 10; i++) {
    let b = 56;

    if (a + b > 85) {
        break;
    }
}

var pinfo;
pinfo = new Object();
pinfo.name = "samanth";
pinfo.age = 59;
pinfo.gender = "male";
pinfo.getsalary = function(sal = 0) {
    return 30000 + sal;
}

let sal = pinfo.getsalary(4000);
console.log(`sal ${sal}`)

switch (true) {

    case (pinfo.age < 10):
        console.log("teen");
        break;

    case (pinfo.age > 20 && pinfo.age < 50):
        console.log("man");
        break;

    default:
        console.log("none");
}


var salary = pinfo.getsalary();
console.log(`salary ${salary}`);

let vgames = new Array(20);
vgames = ["god of war", "twisted metal", "Batman", "HorizonZeroDawn"]
console.log(vgames);

vgames.forEach(browse);

function browse(game, index) {
    console.log(`${game} is in position ${index}`);
}


// console.log(vgames);

let item = `wall charger`;
let status = `completed`;


let dob = "16";
let dlen = dob.length;

let j = 12;

do {

    j++;
}
while (j < 10);

if (!(dlen > 3 && dlen < 5)) {
    console.log("good");
} else {
    console.log("bad");
}


function depr(vprice = 0, rv, mc) {
    vprice += (vprice % 2);
    vprice += (rv * mc);
    return vprice;
}


let tax = 12;
let adm_cost = 150;
let vp = 25000;
let rv = 54;
let mc = 65;
let v_price = (tax, adm_cost, callback) => {
    vp += (vp * tax / 100) + adm_cost;
    let temp = callback(vp, rv, mc);
    return temp;
};



let vehicle_price = v_price(tax, adm_cost, depr);
console.log(vehicle_price);