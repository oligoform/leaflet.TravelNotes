(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

	var getPublicTransportRouteProvider = function ( ) {

		var _ParseResponse = function ( requestResponse, route, userLanguage ) {
			route.itinerary.itineraryPoints.removeAll ( );
			route.itinerary.maneuvers.removeAll ( );
			
			return true;
		};
		
		var _GetUrl = function ( wayPoints, transitMode, providerKey, userLanguage, options ) {
			
			return null;
		};
		
		return {
			get icon ( ) {
				return 'iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4ggaBh8z7ov/KQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAqElEQVRIx9VW0Q6AIAgU5v//sr1Us0I6EGy5HnLR3XnAhFprJWdxSVuJ0FX7SLS/uEzDVJ8cMdAuOJfXCBPR/gSn8cHNMz+7DLEa3ccf5QSo7itPpBzoYAOuCHTbdvEMqQBb5hoGp1G0RbIYg9bFvqXaUnxKPiURHNDfg8PxLMrYNHYabe5GxI2eUqWvHj3YgTjJjWXX7vS18u2wEDT0rJlDoie0fw5mG+C/L0HylIYKAAAAAElFTkSuQmCC';
			},
			getUrl : function ( wayPoints, transitMode, providerKey, userLanguage, options ) {
				return _GetUrl ( wayPoints, transitMode, providerKey, userLanguage, options );
			},
			parseResponse : function ( requestResponse, route, userLanguage ) {
				return _ParseResponse ( requestResponse, route, userLanguage );
			},
			get name ( ) { return 'PublicTransport';},
			get transitModes ( ) { return { car : false, bike : false, pedestrian : false, train : true}; },
			get providerKeyNeeded ( ) { return false; }
		};
	};
	
	L.travelNotes.interface ( ).addProvider ( getPublicTransportRouteProvider ( ) );

}());

},{}]},{},[1]);
