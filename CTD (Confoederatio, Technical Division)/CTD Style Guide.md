[WIP]

non-Oxford EN-GB (including grammar), European decimal separators (DE), 24-hour time, i.e. 00:00-23:59, D Month YYYY[AD/BC] when denoting dates (8 November 2025 or 8 November 2025AD), with all times in GMT (Reykjavík), regardless of member timezone. GMT does not need to be appended to the end of the current time. Numbers should be abbreviated k for thousands, mn for millions, bn for billions, tn for trillions, and so on.

Note: German numbers are formatted like so: 1.000,10; not 1 000,10. Take care to use a semicolon when listing decimal numbers to avoid confusion.

Any citations should follow APA citation formatting with numeric inline citations, i.e. [14] to allow for quicker finding. The bibliography should follow numbered list format: "14. Tondering, V (2022). Lorem Ipsum ...".

Inline citations should always be placed at the end of the clause: 'According to Massimo and Okobo, such statements about the GFC ultimately proved misleading [1], but a later analysis by RAND found that TFR in the US, having held steady in prior decades, declined precipitously in its aftermath [2]'. Note how in this example, it would be unclear to the reader who held which position if inline citations were only at the end of full sentences.

Relative dates should never be referred to in timezone-dependent or ambiguous terms (i.e. next Tuesday, this Friday). Instead, use D+n formatting with a leading zero for single digits: D+03 = 3 days from now; D+03 05:00 = 3 days from now at 05:00GMT.

Lists should always follow alphabetical order at the same level, with double line breaks or nesting for when alphabetical order is broken.

When spelling out mathematical equations, they should be formatted programmatically with pseudo-juxtaposed terms like so: ans = 5.3*x + y/47.

When referring to placenames at a subnational level, use endonymised names in the language's standard Romanisation scheme. 2-letter codes are also acceptable (i.e. CN-HE for Hebei, DE-NW for Nordrhein-Westfalen, US-CA for California). Otherwise, use the formal abbreviation of the name as presented diplomatically (i.e. on a country's UN plaque).

Units should always be expressed in SI, and any abbreviations they take on should be spelled out programmatically: km^2, not km2. Monetary sums are always expressed in FY2000 International Dollars by default. If they use a different base year, it should be denoted thus: YYYY$.

See also: Before Present, YBP

Timestamps count the number of minutes from 00:00GMT, 1 January 1AD. The number of seconds is expressed as the decimal afterwards from ,00-,59. When timestamps express the number of seconds as an integer (UNIX style), the Present epoch is set to 00:00GMT, 1 January 1950AD. When expressed as a human readable string, they should be parsed in the format YYYY.M.D.HH.MM, with negative years representing BC. For example, -3000.5.1 would be 1 May 3000BC, and -3000.5.1.08.00 would be 1 May 3000BC at 08:00GMT.

Note: Before the introduction of the Gregorian calendar, the Julian calendar must be used in calculating timestamps. Leap years were every 3 years between 46BC-10BC, and there were no leap years between 10BC-8AD due to Roman clerical errors. Prior to 46BC, leap years should not be used