$(document).ready(function(){
    $(' .nav-button').click(function(){
        $(' .nav-button').toggleClass('change');
    })


})
$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position)
    if(position >= 200){
        $(' .nav-menu').addClass('custom-navbar');
    }else{
        $(' .nav-menu').removeClass('custom-navbar');



    }
})
$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position)
    if(position >= 700){
       $('.award-text').addClass('fromeLeft');
       $('.award-img').addClass('fromeRight');
    }else{
       $('.award-text').removeClass('fromeLeft');
       $('.award-img').removeClass('fromeRight');
       



    }
})
$('.gallery-list-item').click(function(){
      let value = $(this).attr('data-filter');
      $(this).addClass('active-item').siblings().removeClass('active-item');
      if(value === 'all'){
        $(' .filter').show(300)
    
        
      }else{
        $(' .filter').not('.' + value).hide(300);
        $(' .filter').filter('.' + value).show(300);
      }


})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    console.log(position)
    if(position >= 4400){
        
        $(' .card-1').addClass('movefromeright');
        $(' .card-2').addClass('movefromeleft');
        $(' .card-3').addClass('movefromebuttom');

    }else{
        $(' .card-1').removeClass('movefromeright');
        $(' .card-2').removeClass('movefromeleft');
        $(' .card-3').removeClass('movefromebuttom');


    }

}
)