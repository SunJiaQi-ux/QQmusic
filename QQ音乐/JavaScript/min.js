
$('.two').hide()
$('.siper-three').hide()

$('.mod-nav div').click(function (e) { 
    var index = $(this).index()
    $('.mod-nav div').eq(index).addClass('cutn').siblings().removeClass('cutn');
    if(index==0){
        $('.siper').show()
        $('.two').hide()
        $('.siper-three').hide()
    } 
    if(index==1){
        $('.siper').hide()
        $('.two').show()
        $('.siper-three').hide()
    }
    if(index==2){
        $('.siper').hide()
        $('.two').hide()
        $('.siper-three').show()
    }
});



var mySwiper = new Swiper('.swiper-container',{
    autoplay:true,
    autoplay:{
        delay:3000,
        stopOnLastSilde:false,
        disableOnInteraction:true,
    },
    effect:'tlip',
    slidePerView:1,
    spacBetween:30,
    loop:true,
    pagination:{
        el:'swiper-pagination',
        clickable:true,
    },

    pagination:{
        el:'.swiper-pagination'
    }
})

var myScroll = new Scroll('#wiper',{
    Indicator:false
})