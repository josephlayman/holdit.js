/*
* jquery holdit v1.1
* Author: Joseph Layman
* dependencies: jquery v1.4 or higher
*/
(function($) {

	function moveCaretToStart (el) {
	    
	    if (typeof el.selectionStart == "number") {
	     
	        el.selectionStart = el.selectionEnd = 0;
	    
	    } else if (typeof el.createTextRange != "undefined") {
	     
	        el.focus();
	     
	        var range = el.createTextRange();
	     
	        range.collapse(true);
	     
	        range.select();
	    }
	    
	}

	$.fn.holdit = function(settings){
		
		var options = $.extend({
		
			italic: false,
		
			dark: '#222222',
		
			light: '#777777'
	    
	    }, settings);
		
		return this.each( function (i, v){
			
			$(v).attr('data-val', $(v).val());
			
			if(options.italic){ style = 'italic' }else{ style = 'normal' };
			
			$(v).css({ color: options.light, fontStyle: style });
			
			$(v).bind('focusin focusout ontouchstart ontouch', function(e){
			
				if ($(v).val() === '') {
			
					$(v).val($(v).attr('data-val')).css({ color: options.light, fontStyle: style});
			
				} else if ($(v).val() === $(v).attr('data-val')) {
					
					window.setTimeout(function() {
				    
				        moveCaretToStart(v);

				        $(v).one('keydown', function () {

				        	$(v).val('').css({ color: options.dark, fontStyle: 'normal' });

				        })

				    }, 1); // the timeout is a chrome work around
					
				}
			});
		});
	}

}(jQuery));