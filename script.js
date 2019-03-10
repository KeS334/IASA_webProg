function fun1(){
    
    document.getElementsByClassName('tab_head')[0].classList.remove('trans');
    document.getElementsByClassName('tab_head')[0].classList.add('act');
    document.getElementsByClassName('tab_head')[1].classList.remove('act');
    document.getElementsByClassName('tab_head')[1].classList.add('trans');
    
    document.getElementsByClassName('tab_main1')[0].classList.remove('inactive');
    document.getElementsByClassName('tab_main1')[0].classList.add('grid');
     document.getElementsByClassName('tab_main2')[0].classList.remove('grid');
    document.getElementsByClassName('tab_main2')[0].classList.add('inactive');
    
    
}
function fun2(){
    
    document.getElementsByClassName('tab_head')[0].classList.remove('act');
    document.getElementsByClassName('tab_head')[0].classList.add('trans');
    document.getElementsByClassName('tab_head')[1].classList.remove('trans');
    document.getElementsByClassName('tab_head')[1].classList.add('act');
    
        document.getElementsByClassName('tab_main2')[0].classList.remove('inactive');
    document.getElementsByClassName('tab_main2')[0].classList.add('grid');
     document.getElementsByClassName('tab_main1')[0].classList.remove('grid');
    document.getElementsByClassName('tab_main1')[0].classList.add('inactive');
};
function fun3(){
    document.getElementsByClassName('calendar')[0].classList.remove('grid'); document.getElementsByClassName('calendar')[0].classList.add('inactive');
     document.getElementsByClassName('recordsList')[0].classList.remove('inactive'); document.getElementsByClassName('recordsList')[0].classList.add('grid');
}
function fun4(){
      document.getElementsByClassName('recordsList')[0].classList.remove('grid'); document.getElementsByClassName('recordsList')[0].classList.add('inactive');
     document.getElementsByClassName('calendar')[0].classList.remove('inactive'); document.getElementsByClassName('calendar')[0].classList.add('grid');
}