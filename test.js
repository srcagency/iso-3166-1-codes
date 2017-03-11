'use strict';

const test = require('tape');
const countries = require('./');

test(function( t ){
	t.ok(Array.isArray(countries));
	t.equal(countries.length, 249);

	t.ok(countries.byNumeric() instanceof Map);
	t.ok(countries.byAlpha2() instanceof Map);
	t.ok(countries.byAlpha3() instanceof Map);

	t.deepEqual(countries.byNumeric().get('208'), {
		alpha2: 'DK',
		alpha3: 'DNK',
		name: 'Denmark',
		numeric: '208'
	});

	t.deepEqual(countries.byAlpha2().get('DK'), {
		alpha2: 'DK',
		alpha3: 'DNK',
		name: 'Denmark',
		numeric: '208'
	});

	t.deepEqual(countries.byAlpha3().get('DNK'), {
		alpha2: 'DK',
		alpha3: 'DNK',
		name: 'Denmark',
		numeric: '208'
	});

	t.end();
});
