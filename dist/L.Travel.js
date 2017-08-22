(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
Copyright - 2017 - Christian Guyette - Contact: http//www.ouaie.be/

This  program is free software;
you can redistribute it and/or modify it under the terms of the 
GNU General Public License as published by the Free Software Foundation;
either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

( function ( ){
	
	'use strict';
	
	/* 
	--- HTMLElementsFactory object -----------------------------------------------------------------------------
	
	Patterns : Closure
	------------------------------------------------------------------------------------------------------------------------
	*/

	var getHTMLElementsFactory = function ( ) {

		return {
			create : function ( TagName, Properties, Parent ) {
				var Element;
				if ( 'text' === TagName.toLowerCase ( ) ) {
					Element = document.createTextNode ( '' );
				}
				else {
					Element = document.createElement ( TagName );
				}
				if ( Parent ) {
					Parent.appendChild ( Element );
				}
				if ( Properties )
				{
					for ( var prop in Properties ) {
						try {
							Element [ prop ] = Properties [ prop ];
						}
						catch ( e ) {
							console.log ( "Invalid property : " + prop );
						}
					}
				}
				return Element;
			}
			
		};
			
	};

	
	/* --- End of L.Travel.ControlUI object --- */		

	var HTMLElementsFactory = function ( ) {
		return getHTMLElementsFactory ( );
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = HTMLElementsFactory;
	}

}());

},{}],2:[function(require,module,exports){
/*
Copyright - 2017 - Christian Guyette - Contact: http//www.ouaie.be/

This  program is free software;
you can redistribute it and/or modify it under the terms of the 
GNU General Public License as published by the Free Software Foundation;
either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

( function ( ){
	
	'use strict';
	
	L.Travel = L.Travel || {};
	L.travelRoutingEngine = L.travelRoutingEngine || {};
	
	L.Travel.Control = L.Control.extend ( {
		
			options : {
				position: 'topright'
			},
			
			initialize: function ( options ) {
					L.Util.setOptions( this, options );
			},
			
			onAdd : function ( Map ) {
				return require ('./L.Travel.ControlUI' ) ( Map );
			}
		}
	);

	L.travelRoutingEngine.control = function ( options ) {
		return new L.Travel.Control ( options );
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = L.travelRoutingEngine.control;
	}

}());

},{"./L.Travel.ControlUI":3}],3:[function(require,module,exports){
/*
Copyright - 2017 - Christian Guyette - Contact: http//www.ouaie.be/

This  program is free software;
you can redistribute it and/or modify it under the terms of the 
GNU General Public License as published by the Free Software Foundation;
either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

( function ( ){
	
	'use strict';
	
	L.Travel = L.Travel || {};
	L.travelRoutingEngine = L.travelRoutingEngine || {};

	var _Map; // A reference to the map

	/* 
	--- L.Travel.ControlUI object -----------------------------------------------------------------------------
	
	This object build the control contains
	
	Patterns : Closure
	------------------------------------------------------------------------------------------------------------------------
	*/

	L.Travel.getControlUI = function ( Map ) {

		var HTMLElementsFactory = require ( './HTMLElementsFactory' ) ( ) ;
		
		var MainDiv = HTMLElementsFactory.create ( 'div', { id : 'TravelControl-MainDiv' } );
		HTMLElementsFactory.create ( 'span', { innerHTML : 'Routes&nbsp;:'}, MainDiv );
		HTMLElementsFactory.create ( 'div', { className :'TravelControl-Frame', id : 'TravelControl-RouteDiv', innerHTML : 'B'}, MainDiv );
		HTMLElementsFactory.create ( 'span', { innerHTML : 'Points de passage&nbsp;:' }, MainDiv );
		HTMLElementsFactory.create ( 'div', { id : 'TravelControl-WayPointsDiv', innerHTML : 'C'}, MainDiv );
		HTMLElementsFactory.create ( 'span', { innerHTML : 'Itinéraire&nbsp;:' }, MainDiv );
		HTMLElementsFactory.create ( 'div', { id : 'TravelControl-ItineraryDiv', innerHTML : 'D'}, MainDiv );
		
		return MainDiv;
	};

	
	/* --- End of L.Travel.ControlUI object --- */		

	L.travelRoutingEngine.ControlUI = function ( Map ) {
		return L.Travel.getControlUI ( Map );
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = L.travelRoutingEngine.ControlUI;
	}

}());

},{"./HTMLElementsFactory":1}],4:[function(require,module,exports){
/*
Copyright - 2017 - Christian Guyette - Contact: http//www.ouaie.be/

This  program is free software;
you can redistribute it and/or modify it under the terms of the 
GNU General Public License as published by the Free Software Foundation;
either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

( function ( ){
	
	'use strict';
	
	L.Travel = L.Travel || {};
	L.travelRoutingEngine = L.travelRoutingEngine || {};
	
	/* 
	--- L.Travel.Interface object -----------------------------------------------------------------------------
	
	This object contains all you need to use Travel :-)
	
	Patterns : Closure
	------------------------------------------------------------------------------------------------------------------------
	*/

	L.Travel.getInterface = function ( ) {

	
		return {

			/* --- public methods --- */
			
			/* addControl ( ) method --- 
			
			This method add the control 
			
			Parameters :
			
			*/

			addControl : function ( Map, DivControlId, options ) {
				if ( DivControlId )
				{
					document.getElementById ( DivControlId ).innerHTML = require ('./L.Travel.ControlUI' ) ( Map ).outerHTML;
				}
				else
				{
					if ( typeof module !== 'undefined' && module.exports ) {
						Map.addControl ( require ('./L.Travel.Control' ) ( options ) );
					}
					else {
						Map.addControl ( L.marker.pin.control ( options ) );
					}
				}
			},
			
			addWayPoint : function ( WayPoint, WayPointPosition ) {
				console.log ( 'addWayPoint' );
			},
			
		};
	};
	
	/* --- End of L.Travel.Interface object --- */		

	L.travelRoutingEngine.interface = function ( ) {
		return L.Travel.getInterface ( );
	};
	
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = L.travelRoutingEngine.interface;
	}

}());

},{"./L.Travel.Control":2,"./L.Travel.ControlUI":3}]},{},[4]);