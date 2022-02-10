var tabs=document.querySelectorAll('.tab-item');
var boxs=document.querySelectorAll('.box-item');
console.log(tabs,boxs);
var TabLine=document.querySelector('.tab-line');
var tabActive=document.querySelector('.tab .active');
console.log([TabLine]);
TabLine.style.width=tabActive.offsetWidth +'px';
TabLine.Style.Left=tabActive.offsetleft + 'px';

tabs.forEach((tab,index) => {
    
    tab.onclick=function(){
        document.querySelector('.tab .active').classList.remove("active");
        tab.classList.add("active");
        document.querySelector('.box .active').classList.remove("active");
        boxs[index].classList.add("active");
        TabLine.style.Width=tabs[index].offsetWidth;
        TabLine.style.Left=tabs[index].offsetleft;
    }
});