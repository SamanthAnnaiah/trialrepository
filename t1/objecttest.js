// Object oriented in Javascript

let customer = new Object();
customer = {
    cus_num: 11102,
    cus_active: "Y",
    cus_rtbf: "N",
    cus_name: "motorola",
    cus_contract: "LTN",
    cus_relief: [
        { days: 25, code: "A" }, { days: 50, code: "B" }, { days: 10, code: "C" }
    ],
    cus_bonus_cost: "150",
    cus_check: function() {
        if (this.cus_active === "y") {
            console.log("active customer");
        }
    }
};

customer.cus_check;
let tempt = " ";
customer.cus_relief.forEach(relief_check);

function relief_check(ob, index) {
    console.log(`days : ${ob.days} and code : ${ob.code}`)
    let temps = "object_" + index;
    temps = ob;
    tempt = temps;
};

console.log(tempt);

let numk = 56.78;

console.log(Math.round(Math.log(numk)));
console.log(Math.log(numk).toFixed(2));
console.log(Math.ceil(numk));