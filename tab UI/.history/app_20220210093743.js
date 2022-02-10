var tabs=document.querySelectorAll('.tab-item');
var boxs=document.querySelectorAll('.box-item');
console.log(tabs,boxs);
var TabLine=document.querySelector('.tab-line');
var tabActive=document.querySelector('.tab .active');
console.log([TabLine]);
TabLine.style.offsetWidth=tabActive.offsetWidth;
TabLine.style.offsetleft=tabActive.offsetleft;

tabs.forEach((tab,index) => {
    
    tab.onclick=function(){
        document.querySelector('.tab .active').classList.remove("active");
        tab.classList.add("active");
        document.querySelector('.box .active').classList.remove("active");
        boxs[index].classList.add("active");
        TabLine.style.offsetWidth=tabs[index].offsetWidth;
        TabLine.style.offsetleft=tabs[index].offsetleft;
    }
});