
jQuery(window).load(function() {
        jQuery(".page_load").hide()
});

jQuery(document).ready(function(){
    jQuery('html').offcanvas({
        hasSidebarRight: true,
        enableTouch: false
    });


//    var parser = new UAParser();
//    alert(parser.getResult().os.name);
//    alert(parser.getResult().os.version);
//    var b = parser.getResult().os.version;
//    var temp = new Array();
//    temp = b.split('.');
//    if(temp[0] < 4){
//        alert("old android")
//        jQuery('html').addClass("no-csstransforms3d")
//    };

//    slide up/down for s-sharing on category list
    jQuery('.social_sharing_button').click(function(e){
        jQuery(this).parents('.cat_it_foot').next('.cat_SH').toggle();
    });

//    toggle hearts icons for left nav
    jQuery('.heart_wrapp').click(function(e){
        jQuery(this).parent('li').toggleClass('nonAf');
    });

//    toggle hearts icons for left nav
    jQuery('.postsharing_block .shLike').click(function(e){
        jQuery(this).toggleClass('active');
    });

//    post responder post
    cloneform  =  jQuery(".text_area_wrapp").clone();
    jQuery('.responder_button').click(function(e){
        var findForm = jQuery(this).parents(".coment_list").find(".text_area_wrapp");
        var gcf = jQuery('.general_coments_form');

        if(findForm.size() > 0){
            if(jQuery(this).parents(".coment_tile").next('.text_area_wrapp').size() > 0){
                findForm.remove();
                gcf.show();
            }
            else{
                findForm.remove();
                gcf.hide();
                jQuery(this).parents(".coment_list_item").append(cloneform)
            };
        }
        else{
            jQuery(this).parents(".coment_list_item").append(cloneform);
            gcf.hide();

        };
    })

    jQuery('.remove_fixed_footer_button').click(function(e){
        jQuery(this).parent('footer').removeClass('fixed_footer');
        jQuery(this).hide();
        return false;
    })

    jQuery('.page_optc').click(function(e){
        if(jQuery(this).parent().hasClass('slidRight')){
            jQuery('#leftBurger').click();
        }
        if(jQuery(this).parent().hasClass('slidLeft')){
            jQuery('#rightBurger').click();
        }
    })

    jQuery('#sidebarLeft #search_form').submit(function( event ){
        if (jQuery('#search_form .sidebar_search').val() === ''){
            jQuery('#search_form .sidebar_search').focus();
            return false;
        }
    });
});
