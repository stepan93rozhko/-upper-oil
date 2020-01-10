$('.feedback__grid').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });


    
   var res = $(".menuTop__out");
    $(".down").on("mouseover", funk);
    function funk(){    
        if(res.css ("display") == "none"){
            res.fadeIn(100);
            }
            else{
            res.fadeOut(100);            
            } 
    };
    

         
      

Vue.component('product-item', {
    props: ['image', 'name', 'price', 'weight'],
    template: 
    `<div class="products__grid-prod">
        <img :src="image" alt="">
        <h3>{{name}}</h3>
        <p class="products__grid-prod-price"><strong><span class="w24">{{price}}</span></strong>грн</p>
        <p class="products__grid-prod-weight">{{weight}}</p>
        <button class="products__grid-prod-button">замовити</button>
    </div>`
});
 
var app = new Vue({
    el: '#app',
    data: {
    }
});

var app1 = new Vue({
    el: '#app1',
    data: {
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
    }
});


$(function(){
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 900);//800 - длительность скроллинга в мс
return false;
});
});
