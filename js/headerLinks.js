var headerLinks = {
    init: function () {
        headerLinks.events();
    }
    , events: function () {
        $(".formacionMenu li").on("click", function (e) {
            $(".formacionSections>li").removeClass("tab-current");
            $(".formacionSections>." + $(this).attr("class")).addClass("tab-current");
            $(".content>section").removeClass("content-current");
            $(".content>." + $(this).attr("class")).addClass("content-current");
            $(".icon_close").click();
        });
        $(".formacionSections li").on("click", function (e) {
            e.preventDefault();
            var classTab = jQuery(this).attr("class");
            $(".formacionSections li").removeClass("tab-current");
            $(".content>section").removeClass("content-current");
            $(this).addClass("tab-current");
            jQuery(this).parents("#tabs").find(".content ." + (classTab)).addClass("content-current");
        });
    }
, };
// Load modal on click and get the payment information
$(window).on("load", function () {
    headerLinks.init();
});