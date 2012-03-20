// TODO

	(function( $ ) {
		$.widget( "ui.combobox", {

			options: {
				
		    },
		 
		    _create: function() {
		    },
		 
		    _setOption: function( key, value ) {
		    	switch( key ) {
		    		case "clear":
		    			break;
			    }
			    this._super( "_setOption", key, value );
		    },
		 
		    _destroy: function() {
		    }
		    
		});
	})( jQuery );

/*

	$(function() {
		$( "#combobox" ).combobox();
		$( "#toggle" ).click(function() {
			$( "#combobox" ).toggle();
		});
	});
	</script>


	
<div class="demo">

<div class="ui-widget">
	<label>Your preferred programming language: </label>
	<select id="combobox">
		<option value="">Select one...</option>
		<option value="ActionScript">ActionScript</option>
		<option value="AppleScript">AppleScript</option>
		<option value="Asp">Asp</option>
		<option value="BASIC">BASIC</option>
		<option value="C">C</option>
		<option value="C++">C++</option>
		<option value="Clojure">Clojure</option>
		<option value="COBOL">COBOL</option>
		<option value="ColdFusion">ColdFusion</option>
		<option value="Erlang">Erlang</option>
		<option value="Fortran">Fortran</option>
		<option value="Groovy">Groovy</option>
		<option value="Haskell">Haskell</option>
		<option value="Java">Java</option>
		<option value="JavaScript">JavaScript</option>
		<option value="Lisp">Lisp</option>
		<option value="Perl">Perl</option>
		<option value="PHP">PHP</option>
		<option value="Python">Python</option>
		<option value="Ruby">Ruby</option>
		<option value="Scala">Scala</option>
		<option value="Scheme">Scheme</option>
	</select>
</div>
<button id="toggle">Show underlying select</button>

</div><!-- End demo -->



<div class="demo-description">
<p>A custom widget built by composition of Autocomplete and Button. You can either type something into the field to get filtered suggestions based on your input, or use the button to get the full list of selections.</p>
<p>The input is read from an existing select-element for progressive enhancement, passed to Autocomplete with a customized source-option.</p>
</div><!-- End demo-description -->
*/