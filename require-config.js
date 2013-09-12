var require = {
    "paths": {
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
      "knockout": "knockout-2.3.0",
      'tinymce': "tinymce/js/tinymce/tinymce",
      "tinymce.jquery": "tinymce/js/tinymce/jquery.tinymce.min",
      "rangy": "rangy/rangy-core",
      "ice": "ice/ice",
      "icePluginManager": "ice/icePluginManager",
      "IceAddTitlePlugin":'ice/plugins/IceAddTitlePlugin/IceAddTitlePlugin.js',
	  "IceCopyPastePlugin":'ice/plugins/IceCopyPastePlugin/IceCopyPastePlugin.js',
	  "IceEmdashPlugin":'ice/plugins/IceEmdashPlugin/IceEmdashPlugin.js',
	  "IceSmartQuotesPlugin":'ice/plugins/IceSmartQuotesPlugin/IceSmartQuotesPlugin.js',
    },
    "shim": {
    	"jquery": {
    		exports: "$"
    	},
    	"tinymce": {
    		exports: "tinymce",
    		init: function() {
    			this.tinymce.DOM.events.domLoaded = true;
    			return this.tinymce;
    		}
    	},
    	"tinymce.jquery" :{
    		deps: ['jquery']
    	}
    }
};