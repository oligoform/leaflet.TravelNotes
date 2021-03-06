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

/*
--- ObjType.js file ---------------------------------------------------------------------------------------------------
This file contains:
	- the ObjType object
	- the module.exports implementation
Changes:
	- v1.0.0:
		- created
Doc reviewed 20181216
Tests ...

-----------------------------------------------------------------------------------------------------------------------
*/

(function() {

	'use strict';

	/*
	--- objType function ----------------------------------------------------------------------------------------------

	Patterns : Closure

	-------------------------------------------------------------------------------------------------------------------
	*/

	var objType = function ( name, version ) {

		var m_Name = name;

		var m_Version = version;
		
		var m_GetObject = function ( ) {
			return {
				name : m_Name,
				version : m_Version
			};
		};
		
		var m_Validate = function ( something ) {
			if ( ! something.objType ) {
				throw 'No objType for ' + m_Name;
			}
			if ( ! something.objType.name ) {
				throw 'No name for ' + m_Name;
			}
			if ( m_Name !== something.objType.name ) {
				throw 'Invalid name for ' + m_Name;
			}
			if ( ! something.objType.version ) {
				throw 'No version for ' + m_Name;
			}
			if ( m_Version !== something.objType.version ) {
				if ( '1.0.0' === something.objType.version ) {
					//start upgrade from 1.0.0 to 1.1.0
					if ( 'Route' === something.objType.name ) {
						something.dashArray = 0;
						something.hidden = false;
					}
					something.objType.version = '1.1.0';
					//end upgrade from 1.0.0 to 1.1.0
				}
				if ( '1.1.0' === something.objType.version ) {
					something.objType.version = '1.2.0';
					//end upgrade from 1.1.0 to 1.2.0
				}
				if ( '1.2.0' === something.objType.version ) {
					something.objType.version = '1.3.0';
					//end upgrade from 1.2.0 to 1.3.0
				}
				if ( '1.3.0' === something.objType.version ) {
					something.objType.version = '1.4.0';
					//end upgrade from 1.3.0 to 1.4.0
				}
				if ( m_Version !== something.objType.version ) {
					throw 'invalid version for ' + m_Name;
				}
			}
			if ( ! something.objId ) {
				throw 'No objId for ' + m_Name;
			}
			return something;
		};

		/*
		--- objType object --------------------------------------------------------------------------------------------

		---------------------------------------------------------------------------------------------------------------
		*/

		return Object.seal (
			{

				get name ( ) { return m_Name; },

				get version ( ) { return m_Version; },

				get object ( ) { return m_GetObject ( ); },

				validate : function ( something ) { return m_Validate ( something ); }
			}
		);
	};

	/*
	--- Exports -------------------------------------------------------------------------------------------------------
	*/

	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = objType;
	}

} ) ( );

/*
--- End of ObjType.js file ----------------------------------------------------------------------------------------------
*/