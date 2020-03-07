var owl=$(".owl-carousel")

owl.owlCarousel({
    loop: true,
    // autoHeight: false,
    // autoWidth:  false,
    items: 1,
    margin:10,
    nav: false,
    autoplay:true,
    slideBy : 1,
    autoHeight: true,
    // mouseDrag: false,
    autoplayTimeout: 15000, /* change to 5000 for normal autoplayTimeout. I set 1s only speed up this exemple */
    autoplaySpeed: 1400,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    // onChanged: callBack
});
$(".double").on("touchstart mousedown", function(e) {
    // Prevent carousel swipe
    e.stopPropagation();
})
//  function callBack(event) {
//  	// Solution to have correct item number. See: https://github.com/OwlCarousel2/OwlCarousel2/issues/1029. Thanks to Modicrumb
//  	var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
//    	var allItems = event.item.count;
//    	if (current > allItems || current <= 0) {

//      	current = allItems - (current % allItems);

//    	}

//    	if(current==1){

//    		$('video').attr('autoplay',true);
//    		owl.trigger('stop.owl.autoplay')
// setTimeout(function() {owl.trigger('play.owl.autoplay')}, 93000)
//    	}
//    	else{
//    		$("video").removeAttr("autoplay",true)

//    	}
//  }


