 
jQuery(window).load(function() {
        jQuery(".page_load").hide()
});

jQuery(document).ready(function(){
    jQuery('html').offcanvas({
        hasSidebarRight: true,
        enableTouch: false
    });

//    modal
    jQuery(".responder_button").click(function(e){
        var CuponId = jQuery(this).parent().attr('data-cupon-id');
        jQuery('body').addClass('modalOpen').append('<div class="overlay"></div>');
        jQuery('.modal').show();

        jQuery('.overlay, .closeModalButton').click(function(e){
            colapsF();
            return false
        });
        return false
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
        jQuery('#content').css('padding-bottom', '15px')
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

    jQuery('.hearts_count').click(function(e){
       jQuery(this).toggleClass('active');
    });

    if(jQuery('.fixed_footer').size() > 0){
        var footerHeight = jQuery('.fixed_footer').height();
        jQuery('#content').css('padding-bottom', footerHeight + 15 + 'px')
    }
    jQuery('.infoButton.infoButtonHide').click(function(){
        jQuery(this).parents('.text_block').hide();
        jQuery('.infoButtonShow').show();
    });

    jQuery('.infoButton.infoButtonShow').click(function(){
        jQuery(this).prev('.text_block').show();
        jQuery(this).hide();
    });

    // cupon slide up/down for blocks
    jQuery(".green_button_block").click(function(e){
        jQuery(this).toggleClass("open");
    });



});

//event on menu opens
function OnOpenLeftNaw(){};
function OnCloseLeftNaw(){};
function OnOpenRightNaw(){};
function OnCloseRightNaw(){};


function colapsF(){
    jQuery('body').removeClass('modalOpen');
    jQuery('.overlay').remove();
    jQuery('.modal').hide();
}