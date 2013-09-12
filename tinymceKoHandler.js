define(
	'tinymceKoHandler',
	['knockout','jquery','tinymce','ice','icePluginManager','rangy'], 
	function(ko, $, tinymce) {


ko.bindingHandlers.tinymce = {
	init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
		var editor = $(element).tinymce();
		var options = allBindingsAccessor().tinymceOptions || {};
		var value = valueAccessor();
		var config = {
					forced_root_block: false,
				    plugins: [
				        "advlist autolink lists link image charmap print preview anchor",
				        "searchreplace visualblocks code fullscreen",
				        "insertdatetime media table contextmenu paste ice icesearchreplace"
				    ],
    				toolbar: "fullscreen insertfile undo redo | styleselect| bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | inserttime charmap|ice_togglechanges ice_toggleshowchanges iceacceptall icerejectall iceaccept icereject",
					setup: function (ed) {
						ed.on('change', function(e) {
							if (ko.isWriteableObservable(value)) {
	                            value(ed.getContent());
	          	            }
						});

                    },
                    ice: {
						user: { name: 'Geoffrey Jellineck', id: 11},
						preserveOnPaste: 'p,a[href],i,em,b,span',
						deleteTag: 'delete',
						insertTag: 'insert'
					}
        };
		
		config = $.extend(config, options);
		
        //handle destroying an editor 
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            setTimeout(function(){$(element).tinymce().remove()}, 0)
        });
		
		setTimeout(function(){
			$(element).tinymce(config);
		}, 0);


		$(element).html(ko.utils.unwrapObservable(value));
	},
	
	update: function(element, valueAccessor, allBindingsAccessor, viewModel) {
		console.log('value updated');
		var $el = $(element);
        var value = ko.utils.unwrapObservable(valueAccessor()) || '';

		// does the iframe's body currently have focus, only update the value if doesn't
        if ( !$el.find('iframe').contents().find('body').is(':focus') ) {              
        	$el.children('textarea').html(value);
        }
	}
}
  
});