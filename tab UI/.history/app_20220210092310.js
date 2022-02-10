var tabs=document.querySelectorAll(".tab-item");
var boxs=document.querySelectorAll('.box-item');
console.log(tabs,boxs);
var TabLine=document.querySelector('.tab-line');
// console.log(TabLine);
tabs.forEach((tab,index) => {
    tab.onclick=function(){
        tab.classList.add("active");
    }
});