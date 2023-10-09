const boddy=document.getElementById('bdy')
const colchng=function()
{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    boddy.style.backgroundColor=color
}
// setInterval(colchng,1000)
let set;

const str=document.getElementById('start')
str.addEventListener("click",function()
{
  set= setInterval(colchng,1000)
})

const stp=document.getElementById('stop')
stp.addEventListener("click",function()
{
    clearInterval(set)
})