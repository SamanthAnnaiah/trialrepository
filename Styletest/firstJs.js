var a = 25;
var b = 45;

debugger;

for (var i = 0; i < 10; i++) {
    console.log(++a + ++b);
}

var pinfo;
pinfo = new Object();
pinfo.name = "samanth";
pinfo.age = 29;
pinfo.gender = "male";
pinfo.getsalary = function() {
    return 30000;
}

var salary = pinfo.getsalary();
console.log(salary);
console.log(age);