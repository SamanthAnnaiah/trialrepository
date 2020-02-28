let quotez = document.getElementById('getquote');
let cusz = document.getElementById('getcus');
let vehz = document.getElementById('getveh');
let cardObj = document.querySelector('.quote_notif');
cardObj.style.display = "none";

var counter = 0;
var bcount = 0;
// let templist = document.querySelectorAll('ul.main_menu li  a');
// for (i = 0; i < templist.length; i++) {
//     console.log(templist[i].innerHTML);
// }

// var fg = document.querySelector('#getsup');
// console.log(fg.parentNode);
// console.log(fg.parentNode.parentElement);
// console.log(fg.parentNode.nodeName);
// console.log(fg.parentNode.nodeType);
// console.log(fg.parentNode.nextSibling);

// var clist = document.querySelector('ul.main_menu');
// var klist = clist.children;
// for (i = 0; i < klist.length; i++) {
//     console.log(klist[i].tagName);
// }
document.addEventListener('click', advert);

function advert() {
    bcount += 1;
    if (bcount == 1) {

    }
}

function mkleave(mlv) {
    var mk = mlv;
    console.log(mk);

}


var kbtn = document.getElementById('b22');
kbtn.addEventListener('click', secb);
kbtn.addEventListener('mouseover', secbt);

function secb() {
    alert("security bypassed");

}

function secbt() {
    kbtn.title = 'hovering over';

}

function getq() {
    let d = quotez.getAttribute('placeholder');
    quotez.setAttribute('placeholder', ' ');
}

function getc() {
    let d = cusz.getAttribute('placeholder');
    cusz.setAttribute('placeholder', ' ');
}

function getv() {
    let d = vehz.getAttribute('placeholder');
    vehz.setAttribute('placeholder', ' ');
}

function ddownClick() {
    window.open('https://careersatagoda.com/vacancies/full-stack-software-engineer-based-in-bangkok-thailand-relocation-provided/', '_blank');
}


function imgProc() {
    var v1 = document.getElementById('img1');
    var v2 = document.getElementById('img2');
    var vtemp = v1.getAttribute('src');
    if (vtemp == 'mla.jpg') {
        v1.setAttribute('src', 'qsheet.png');
        v2.setAttribute('src', 'mla.jpg');
    } else {
        v1.setAttribute('src', 'mla.jpg');
        v2.setAttribute('src', 'qsheet.png');
    }
}


function submit1() {

    let quoteObj = document.getElementById('getquote');
    var quote = quoteObj.value;
    let cusObj = document.getElementById('getcus');
    var cus = cusObj.value;
    let vehObj = document.getElementById('getveh');
    var veh = vehObj.value;
    var error = "N";
    switch (true) {
        case (quote.length < 6):
            alert("quotation length is small");
            error = "Y";
            break;
        case (cus.length < 6):
            alert("customer length is small");
            error = "Y";
            break;
        case (veh.length < 2):
            alert("vehicle lenght is small");
            error = "Y";
            break;
    }

    if (error === "N") {
        if (quote > 100000 && cus > 500000) {
            let r1Obj = document.querySelector('.quote_notif_r1');
            let r2Obj = document.querySelector('.quote_notif_r2');
            let r3Obj = document.querySelector('.quote_notif_img');
            let cobj = cardObj.querySelector('.card');
            cobj.classList.replace('bg-secondary', 'bg-primary');
            r1Obj.innerHTML = "STATUS";
            r1Obj.setAttribute('style', 'text-decoration:underline!important');
            r2Obj.innerHTML = "Successfully Created";
            r3Obj.setAttribute('src', 'done.png');

        } else {
            let r1Obj = document.querySelector('.quote_notif_r1');
            let r2Obj = document.querySelector('.quote_notif_r2');
            let r3Obj = document.querySelector('.quote_notif_img');
            let cobj = cardObj.querySelector('.card');
            cobj.classList.replace('bg-secondary', 'bg-warning');
            r1Obj.innerHTML = "STATUS";
            r1Obj.setAttribute('style', 'text-decoration:underline!important');
            r2Obj.innerHTML = "Not Created";
            r3Obj.setAttribute('src', 'warning.png');
        }
        cardObj.style.display = "flex";
    }

}

function delcheck(clicked_id) {
    debugger;
    let clicked = document.getElementById(clicked_id);
    let cd = clicked.getAttribute('placeholder');
    if (cd !== ' ' && cd !== null && cd !== undefined) {
        clicked.setAttribute('placeholder', ' ');
    } else {
        let tname = clicked.tagName;
        let tk = tname.toLowerCase();
        if (tk === "button") {
            let res = document.getElementById('res');
            res.style.fontSize = "30px";
            switch (clicked_id) {
                case ("b1"):
                    var bh = document.getElementById('getsupAct');
                    if (bh.checked == false) {
                        bh = "Inactive";
                    } else {
                        bh = "Active";
                    }
                    res.innerHTML = `${bh} supplier generated`;
                    break;
                case ("b2"):
                    res.innerHTML = "Plate assigned";
                    break;

                case ("b3"):
                    res.innerHTML = "Order generated";
                    var checker = document.getElementById('dynam');
                    if (checker) {
                        counter += 1;
                        checker.remove();
                    } else {
                        var noop = 10;
                    }
                    var vs = document.createElement('div');
                    vs.id = "dynam";
                    vs.className = 'alert alert-primary h5';
                    vs.textContent = `creating html element ${counter} times: `;
                    var ks = document.createElement('a');
                    ks.className = 'badge badge-success';
                    ks.setAttribute('href', 'https://nervous-jackson-1289a9.netlify.com/');
                    ks.setAttribute('target', '_blank');
                    ks.textContent = "More Info";
                    vs.appendChild(ks);
                    ks.style.textDecoration = "";
                    vs.style.textAlign = "center";
                    vs.style.marginLeft = "40px";
                    vs.style.marginRight = "40px";
                    var kt = document.getElementById('main');
                    var ref = document.getElementById('res1');
                    kt.insertBefore(vs, ref);
                    break;

                default:
                    res.innerHTML = "Unsuccessful - Verfiy the data";
                    break;
            }

        }
    }

}

function hover(hover_id) {
    var h_id = document.getElementById(hover_id);
    switch (hover_id) {
        case 'getord':
            h_id.setAttribute('title', 'order number');
            break;
        case 'getodate':
            h_id.setAttribute('title', 'order date');
            break;
        case 'getpnum':
            h_id.setAttribute('title', 'Plate number');
            h_id.setAttribute('value', '5007989');
            h_id.value = 5007989;
            break;
        case 'getddate':
            h_id.setAttribute('title', 'delivery date');
            break;
        case 'chnum':
            h_id.setAttribute('title', 'chassis number');
            break;
        case 'engnum':
            h_id.setAttribute('title', 'engine number');
            break;
        case 'getsup':
            h_id.setAttribute('title', 'supplier number');
            break;
        case 'getsupAct':
            h_id.setAttribute('title', 'supplier active flag');
            break;
    }
}

function mleave(m_id) {
    var mid = document.getElementById(m_id);
    mid.value = 0;
}

function hun() {
    var t1 = document.querySelector('div.conver section');
    t1.style.opacity = 1;
}

function hub() {
    var t1 = document.querySelector('div.conver section');
    t1.style.opacity = 0;
}