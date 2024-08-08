let list=document.querySelector('.slider .list');
let items=document.querySelectorAll('.slider .list .item');
let dots=document.querySelectorAll('.slider .dots li');
let next=document.getElementById('next');

let active=0;
let lengthItems=items.length-1;

next.onclick=function(){
   if(active+1>lengthItems){
    active=0;
   }else{
    active=active+1;
   }
   
   reloadSlider();
}
Prev.onclick=function(){
    if(active-1<0){
        active=lengthItems;

}else{
    active=active-1;
}
reloadSlider();
}

let refrehSlider=setInterval(()=>{next.click()},3000);
function reloadSlider(){
    let checkLeft=items[active].offsetLeft;
    list.style.left=-checkLeft+'px';


    let lastActivate =document.querySelector('.slider .dots li:active');
    lastActivate.classList.remove('active');
    dots[active].classList.add('active');
clearInterval(refrehSlider);
refrehSlider=setInterval(()=>{next.click()},3000);
}
dots.forEach((li,key)=> {
    li.addEventListener('click',function(){
        active=key;
        reloadSlider();
    })
})