function time(){
let d = new Date();
let time = d.toLocaleDateString();
console.log(time);
}

setInterval(time, 1*1000);
//setTimeout(time, 1000);
clearTimeout(time);
