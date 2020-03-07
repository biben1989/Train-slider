var owl=$(".owl-carousel")

owl.owlCarousel({
    loop: true,
    autoHeight: false,
    autoWidth: false,
    items: 1,
    nav: true,
    mouseDrag:false,
    touchDrag:false,

    margin: 10,

    fluidSpeed: 100,
    autoplayTimeout: 15000, /* change to 5000 for normal autoplayTimeout. I set 1s only speed up this exemple */
    autoplaySpeed: 400,
    navSpeed: 400,
    // onChanged: callBack
});

// function callBack(event) {
//     // Solution to have correct item number. See: https://github.com/OwlCarousel2/OwlCarousel2/issues/1029. Thanks to Modicrumb
//     var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
//     var allItems = event.item.count;
//     if (current > allItems || current <= 0) {
//         current = allItems - (current % allItems);
//     }
//
//     if(current==1){
//         owl.trigger('stop.owl.autoplay')
//         setTimeout(function() {owl.trigger('play.owl.autoplay')}, 93000)
//     }
// }