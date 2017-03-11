'use strict';

var countries = require('./data.json');

countries.byNumeric = byNumeric;
countries.byAlpha2 = byAlpha2;
countries.byAlpha3 = byAlpha3;

module.exports = countries;

var numericMap;
var alpha2Map;
var alpha3Map;

function byNumeric( code ){
	if (numericMap === undefined)
		numericMap = new Map(countries.map(function( country ){
			return [ country.numeric, country ];
		}));

	return numericMap;
}

function byAlpha2( code ){
	if (alpha2Map === undefined)
		alpha2Map = new Map(countries.map(function( country ){
			return [ country.alpha2, country ];
		}));

	return alpha2Map;
}

function byAlpha3( code ){
	if (alpha3Map === undefined)
		alpha3Map = new Map(countries.map(function( country ){
			return [ country.alpha3, country ];
		}));

	return alpha3Map;
}
