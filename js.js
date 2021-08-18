window.onload = function(){
    const s = document.getElementById('search');
    
    
    s.addEventListener('keypress',() => {
        if (window.event.keyCode == '13'){
            setTimeout(() => {}, 10000);
            window.location.href = 'C:/Users/as879/Desktop/travel/js2.html';
            
        }
    });
};
