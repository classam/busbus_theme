
$(function() {
    
    $(".flip").each( function( i, item ){ 
        $(item).hover(
            function(event){ 
                if( ! $(item).data('flipped') )
                {
                    $(item).flip({
                        direction: "lr",  
                        color: "#333",
                        speed: 180
                    });
                    $(item).data('flipped', true);
                    setTimeout( function(){ 
                        $(item).revertFlip();
                        $(item).data('flipped', false);
                    }  , 5000);
                }
            }
            )

        } ); 

});
