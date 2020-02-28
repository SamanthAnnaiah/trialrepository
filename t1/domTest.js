const para = document.querySelector("body > div > div:nth-child(5)");
const paras = document.querySelectorAll('div');

const data = document.querySelectorAll('p');


const link1 = document.querySelector('div.s5 > a');

var att = link1.getAttribute('href');

link1.setAttribute('href', 'https://www.google.co.in/');
link1.setAttribute('target', '_top');
link1.style.color = 'yellow';

var clist = link1.classList;

clist[2] = "twelve";

link1.classList.remove('three');
link1.classList.add('twelve');

function startit() {
    var peles = document.querySelectorAll('div.s5 p');
    let cl = ' ';
    for (i = 0; i < peles.length; i++) {
        cl = peles[i].getAttribute('class');
        if (cl === 'fail') {
            let dcl = peles[i].innerText;
            let dcl_t = dcl.split(" ");
            for (j = 0; j < dcl_t.length; j++) {
                if (dcl_t[j] === "three") {
                    peles[i].classList.remove('fail');
                    peles[i].classList.add('success');
                    break;
                }
            }

        }
    }
}

function alertThat() {
    alert("This is THAT");
}