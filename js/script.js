/* Super quick and dirty interactions (input + selects) 
	 The idea is to update CSS variables for selects using <style>
	 At some point, default texts may become textareas -> update related sections
*/

r(function() {

	// VARIABLES
	
	var fontInput = document.getElementById('fontInput'),
			selects = document.getElementsByTagName('select'),
			dynStyles = document.createElement('style'),
			head = document.getElementsByTagName('head')[0],
/*		main = document.getElementsByTagName('main')[0],  // Event delegation in the future */
			newFont = "";		// So that we update and store the value
	
	// INIT

	dynStyles.type = "text/css";
	head.appendChild(dynStyles);

	// FUNCTIONS

	function updateStyles() {
		head.removeChild(dynStyles);
		head.appendChild(dynStyles);	// Forcing repaint

		for (var i = 0; i < selects.length; i++) {
			var select = selects[i];
			select.selectedIndex = 0;		// Resetting all selects
		}
	};

	// Event Listeners
	// Do event delegation real quick
	
	fontInput.addEventListener("keyup", function(e) {
		if (e.keyCode == 13) {				// Return key
			newFont = fontInput.value;
			dynStyles.textContent = ":root { --font-family:" + newFont + "; }";
			updateStyles();
		}
	}, false);

  // Yeah I know this is dirty but options’ management will have to be well-thought-out anyway
  for (var i = 0; i < selects.length; i++) {
		var select = selects[i];
		select.addEventListener('change', function(e) {
			var cssVarScope = this.getAttribute('data-otc-scope');
			var cssVarName = this.getAttribute('data-otc-var');
			var cssVarValue = this.value;
			var currentIndex = this.selectedIndex;
			dynStyles.textContent = ":root { --font-family:" + newFont + "; }\n" + cssVarScope + " { --" + cssVarName + ": " + cssVarValue + "; }";
			updateStyles();
			this.selectedIndex = currentIndex;	// Since indexes reset when forcing repaint -> re-index current
		}, false);
	}

});
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}																	