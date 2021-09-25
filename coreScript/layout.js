
var MasonryApp = new Vue ({
    el : "#masonryApp",
    data : [
        ifHidden = true,
    ],
    mounted : function () {
        var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer',
        });
    },



});