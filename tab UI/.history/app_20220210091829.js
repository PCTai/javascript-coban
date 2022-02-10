var tabs=document.querySelectorAll(".tab-tiem");
var boxs=document.querySelectorAll('.box-item');
// console.log(tabs,boxs);
var TabLine=document.querySelector('.tab-line');
// console.log(TabLine);
tabs.forEach(Element => {
    Element.onclick=function(){
        console.log(Element);
    }
});