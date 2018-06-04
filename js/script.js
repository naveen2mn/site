(function() {
    var c3NavContainer         = '#menu-main-nav-v3';
    var c3NavCTAContainerClass = 'nav-v3-cta-container';
    var c3NavCTAContainer      = '.'+c3NavCTAContainerClass;
    var $c3NavContainer, $c3NavCTAContainers;

    jQuery(function($){
    $c3NavContainer    = $(c3NavContainer);

    // Append cta containers to all level 1 sub-menus
    $c3NavContainer.find('> li > .sub-menu').each(function(index, el){
        $(this).append($('<div class="'+c3NavCTAContainerClass+'"></div>'));
    });
    $c3NavCTAContainers = $(c3NavCTAContainer);

    // $('#menu-main-nav-v3 > li').eq(2).addClass('hover');
    $c3NavContainer.menuAim({
        activate: activateSubmenu1,
        deactivate: deactivateSubmenu1,
        exitMenu: exitMenu1,
        submenuDirection: 'below',
        submenuSelector: 'li.menu-item-has-children',
    });
    $(c3NavContainer + ' > li > .sub-menu').menuAim({
        activate: activateSubmenu2,
        deactivate: deactivateSubmenu2,
        exitMenu: exitMenu1,
        submenuDirection: 'right',
        submenuSelector: 'li.menu-item-has-children',
    });
    $(c3NavContainer + ' > li > .sub-menu > li > .sub-menu').menuAim({
        activate: activateSubmenu2,
        deactivate: deactivateSubmenu2,
        exitMenu: exitMenu3,
        submenuDirection: 'right',
        submenuSelector: 'li.menu-item-has-children',
    });
    // $(c3NavContainer + ' > li > .sub-menu > li > .sub-menu > li > .sub-menu').menuAim({
    //   activate: activateSubmenu2,
    //   deactivate: deactivateSubmenu2,
    //   submenuDirection: 'right',
    //   submenuSelector: 'li.menu-item-has-children',
    // });
    });

    var level3Exit = false;
    function exitMenu1(row){
    // level3Exit = true;
    return true;
    }
    function exitMenu3(row){
    // if( level3Exit == false ) {
        // return false;
    // } else {
    //   level3Exit = false;
        return true;
    // }
    }
    function activateSubmenu1(row) {
    // console.log('activate', row);
    $row = $(row);
    $row.addClass('maintainHover');
    showCTA( $row.find('a').first() );
    };
    function deactivateSubmenu1(row) {
    // console.log('DEactivate', row);
    $row = $(row);
    $row.removeClass('maintainHover').find('*').removeClass('maintainHover');
    // $c3NavContainer.find('*').removeClass('maintainHover');
    };
    function activateSubmenu2(row) {
    // console.log('activate', row);
    $row = $(row);
    $row.addClass('maintainHover');
    showCTA( $row.find('a').first() );
    };
    function deactivateSubmenu2(row) {
    // console.log('DEactivate', row);
    $row = $(row);
    $row.removeClass('maintainHover');
    // $row.removeClass('maintainHover').find('*').removeClass('maintainHover');
    };

    function showCTA(linkObject) {
    var url, target, alt, image, cta, html;
    image  = linkObject.data('cta-image');
    html  = linkObject.data('cta-html');

    // If there is no image, check the parents and take the closest
    // one with an image assigned (if one exists)
    if( !image || !html ) {
        // For each parent li
        linkObject.parents('li.menu-item').each(function(){
        // Get the <a> tag it contains
        var checkLink = $(this).find('> a').first();
        // If that <a> has CTA image data, use it and stop searching
        if( image = checkLink.data('cta-image') ) {
            linkObject = checkLink;
            return false;
        }else if( html = checkLink.data('cta-html') ) {
            linkObject = checkLink;
            return false;
        }
        });
    }

    // Empty the container regardless -- if there's no CTA info,
    // we display nothing
    $c3NavCTAContainers.empty();

    if( image ) {
        url          = linkObject.data('cta-url');
        targetString = linkObject.data('cta-target');
        alt          = linkObject.data('cta-alt');

        if( targetString ) {
        targetString = 'target="'+targetString+'"';
        }

        // build image link
        cta = $('<a href="'+url+'" '+targetString+'" title="'+alt+'"><img src="'+image+'" alt="'+alt+'"></a>');

        // put the cta in place
        $c3NavCTAContainers.append(cta);
        // console.log('added', cta, 'to', $c3NavCTAContainer.children());
    } else if( html ) {

        // build image link
        cta = $(html);

        // put the cta in place
        $c3NavCTAContainers.append(cta);
        // console.log('added', cta, 'to', $c3NavCTAContainer.children());
    }

    }
})();