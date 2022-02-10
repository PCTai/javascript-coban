var tabs=document.querySelectorAll('.container .tab .tab-item');
var boxs=document.querySelectorAll('.box .box-item');
console.log(tabs,boxs);
var TabLine=document.querySelector('.container .tab-line');
var tabActive=document.querySelector('.tab .active');
console.log([TabLine]);
TabLine.style.width=tabActive.offsetWidth +'px';
TabLine.style.left=tabActive.offsetLeft + 'px';

tabs.forEach((tab,index) => {
    
    tab.onclick=function(){
        document.querySelector('.tab .active').classList.remove("active");
        tab.classList.add("active");
        document.querySelector('.box .active').classList.remove("active");
        boxs[index].classList.add("active");
        TabLine.style.width=this.offsetWidth + 'px';
        TabLine.style.left=this.offsetLeft + 'px';
    }
});