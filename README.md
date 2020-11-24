# ISO 3166-1 codes

A list of `numeric`, `alpha2`, `alpha3` and `name` (English short name) from
[ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1).

See also:

- [Mapping to currencies (ISO 4217)](https://github.com/srcagency/country-currencies)

```js
const countries = require('iso-3166-1-codes');

console.log(countries.map(c => c.name));
	// Albania
	// …


// export a Map
byNumeric()
byAlpha2()
byAlpha3()

const byNumeric = countries.byNumeric();
const byAlpha2 = countries.byAlpha2();

byNumeric.has('208');
	// true

byAlpha2.get('DK');
	// { numeric: '208', alpha2: 'DK', alpha3: 'DNK', name: 'Denmark' }
```

## Rationale

There's a plethora of repositories of countries with some information and some
features. I wanted just a list of countries to use as primary keys for related
information.

I encourage others to extend the data in new repositories using `numeric`,
`alpha2` (my preference), or `alpha3` as the country's key.
