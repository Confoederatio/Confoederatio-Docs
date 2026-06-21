## Coding.

> [!NOTE]
> **Always adhere to the coding style of the existing codebase.** Recommendations can change over time, and many codebases were implemented prior to 2025, when this Style Guide was first released internally.

CTD's style guide is chosen to prioritise brevity and maintainability. Do not take up more space than needed. To avoid token consumption for LLMs, we have chosen to make this style guide short.

Indents should be set to 2 spaces for both C-style languages (JS, Java, C/C++), and for data science languages (including those with meaningful whitespace, such as Python). It is not applicable to markup languages or schema. This coding style is written for JS.

Lines of code should generally be split up into alphabetised 'code paragraphs', as follows:

```js
//Iterate over all osm_search_results and format them  
for (let i = 0; i < osm_search_results.length; i++) {  
  //Paragraph 1
  let local_result = osm_search_results[i];
  //Paragraph 2
  let local_geometry = osm_search_results[i].geometry;
  let local_properties = osm_search_results[i].properties;
  //Paragraph 3
  let local_result_el = document.createElement("div");
  local_result_el.classList.add("osm-search-result");
  local_result_el.innerHTML = `  
   <icon id = "create-marker">location_on</icon><span id = "goto"><span style = 'font-weight: 500'>${local_properties.name}</span><br>  
   ${Geospatiale.getPhotonSearchName(local_result)}</span>  
  `;
  
  //.. Rest of code ..
}
```

You may also use code blocks with comments to create alphabetised folders. This presents your work in something of an organised tree:

```js
//1. This maintains alphabetisation.
{
  //.. Rest of code ..
}
//2. JS has foldable blocks to encourage organisation.
{
  //.. Rest of code ..
}
```

Note here how each successive paragraph in both examples maintain alphabetisation, and does not break it, whilst preserving logical flow. Alphabetisation and naming consistency are at the core of maintainability for CTD.

### <ins>1. Comments.</ins>

- CSS: Single-line comment format: `/* -- Comment here -- */`
- HTML: Single-line comment format: `<!-- Comment here -->`
- JS: Single-line comment format: `//Comment here`
- JS: Multiline-comment format:
  `/*`
  `  Comment here`
  `*/`
- JS: JSDoc comment format:
  `/**`
  ` * JSDoc comment here.`
  ` */`

### <ins>2. Functions.</ins>

Functions not part up of the startup loop/init pattern should always belong to a namespace, whether a static Object or a Class instance (they may also be static). Functions should not pollute the global namespace.

Class names are `CamelCased`. Function/method names are `camelCased`. Variable names are `snake_cased`. DOM/HTML facing attribute names are `kebab-cased`. This preserves semantic diversity for easy lookup. In addition, functions should be declared with the following contract:

```js
/**  
 * Formats a number based off of the selected locale, rounding it to the specified number of places. * @alias String.formatNumber * * @param {number} arg0_number  
 * @param {number} [arg1_places=0] 
 * 
 * @returns {string}  
 */
String.formatNumber = function (arg0_number, arg1_places) {  
  //Convert from parameters  
  let number = parseFloat(arg0_number);  
  let places = Math.returnSafeNumber(arg1_places, 0);  
    
  //Round to sigfigs first  
  number = Math.roundNumber(number, places);  
    
  //Return statement  
  return new Intl.NumberFormat("de-DE").format(number);  
};
```

<div align = "center">An example of a well-formatted function.</div>

Note the space between function and parameter definitions. This is to differentiate function definitions from function calls, which would look like this: `String.formatNumber()`. Whilst not evident in static functions, they are of great importance in method definitions within classes, where methods are defined as follows:

```js
class TestClass {
  constructor () {}
  
  sampleFunction () {}
}
```

This is how classes should ideally be declared. If they were declared like this instead:

```js
class TestClass {
  constructor ()

  sampleFunction() { //Is this a function call, or a definition?
  }
}
```

Most find and replace tools would not know where the original definition was located, leading to all sorts of refactoring headaches down the line. It is formatting decisions like these which add up in a codebase.

Names should always be as surgically descriptive of what the function does as possible. Parameters should always be specified in the following format: `arg<#>_<parameter_name>, ..., arg<#>_options` (if complex object parameters would help increase readability, recommended for functions with more than 1 optional parameter and/or more than 4 arguments).

**Functions additionally always follow the same section order, or contract.**

1. Convert from parameters.
   
   Begins with the line comment `//Convert from parameters`
   
   This converts all parameter names into internal function variables to be used later, and the `arg<#>` format should always be stripped. Only variables directly referencing function parameters should be placed within this section.
   
   If an `_options` parameter exists in this function, it should always be defined as a ternary like so: `let options = (arg4_options) ? arg4_options : {}`. The options parameter is always an object.
   
1. Initialise options\* (Optional).
   
   Begins with the line comment `//Initialise options`
   
   If an options variable is defined in the Convert from parameters section, and has default subobject parameters, these should be defined here, checking against whether such options were left undefined by a function call.

2. Declare local instance variables\* (Optional).
   
   Begins with the line comment `//Declare local instance variables`.
   
   All function-wide local variables are defined in this section in alphabetical order (see Variables) for more information. This includes `this` variables.

3. Guard clauses\* (Optional).
   
   Since this impacts performance, guard clauses may be placed in any section between `//Convert from parameters` and the main function body. This is the furthest down in a function it may be placed.
   
4. Function body\* (Optional).
   
   Begins with a double line break.
   
   This is where data processing and business logic occurs. All code required by the function apart from declarations and returns are to take place here.
   
5. Return statement\* (Optional).
   
   Begins with the line comment `//Return statement`. There may be multiple such comments, since there could be multiple returns based on conditional branching. The line comment should be found above each of them to highlight their position in terminating the function, apart from the section on Guard clauses.
   
   If two types of returns are expected, returns may also be formatted in the form of a ternary, otherwise, an if-else chain statement will do.

This ensures that each function is a machine that takes in an input and returns an output with a maintainable contract. Each function is to be separated from each other by a double line break. In general, double line breaks are encouraged throughout code _when_ they increase readability.

If functions have parameters or a return statement, there should always be a multiline JSDoc comment directly above them that can be parsed by autodoc generators such as Minami, or by Intellisense.

Function declarations within files should always be alphabetised. There should only ever be one Class declaration per file.
### <ins>3. If Statements.</ins>

> [!NOTE]
> In complex boolean statements, it is recommended to use parenthetical/round bracket grouping to increase readability. These should be indented and placed on different lines.

When handling error statements that are the result of end-user input, **do not** throw an error to the console via `throw new Error` or a similar mechanism. Instead these should result in the operation not being invoked, and calling `console.error()` with an error message.

Similarly, for compatibility reasons, when checking whether subvariables exist in a given object, it is recommended in codebases prior to ES6 to chain indentation together. For example:

```js
if (global.undo_redo_trees)
  if (global.undo_redo_trees[timeline_id]) {
    //Multi-line code here
  }
```

If you expect to only interface with ES6+ compatible environments, use nullish coalescing instead to check for a property.

- **If statements.**
  
  Singular if-statement should **not** use curly braces if the line of code to be executed after the if statement is only one line long. If it is two lines, it should use curly braces.
  
  If-else statements should always use curly braces.
  
- **Switch-cases.** DO NOT USE.
  
  Switch cases should **not** be used due to their conditional rigidity and slower performance. If-else chains are always preferred to switch cases.
  
- **Ternaries.**
  
  In cases where ternaries are possible, they should always be used instead of if/else statements for brevity (in variable assignments; non-mutating if/else function calls). Within the 'Convert from parameters' section, they should always be inline. Otherwise, outside of these function sections (e.g. 'Declare local instance variables'), they should be placed beneath.
  
  Ternaries should **never** be chained or nested together. Never use a 3-line ternary, as it is redundant with an if-statement.
### <ins>4. Loops.</ins>

> [!NOTE]
> Ensure that your algorithms are always O(n^2) or less if you expect n to be relatively large.

- **For loops.**
  
  For loop letter order should always be the same: (i, x, y, z, a, b, c, ...). Do not use any other letter sequence. This sequence was originally chosen to iterate over an array of Cartesian coordinate grids, but has since been generalised for consistency.
  
  Additionally, for loops should not use curly braces if only one line of code is being executed by them.
  
- **Set Interval.**
  
  setInterval() functions should have the following format:
  
  ```js
  setInterval(() => {
    //Code here
  }, iteration_delay, local_variable_n, ...);
  ```
  
  These should be assigned to a local variable such that `clearInterval` may be called to free them up in the future.
  
- **Set Timeout.**
  
  setTimeout is used as a wait command. It follows the same formatting as that reserved for setInterval.
  
- **While loops.**
  
  Try to avoid while loops, since they can lead to programs halting unexpectedly when conditions are not met, or code is malformatted, without throwing a stack trace.

### <ins>5. Maths.</ins>

When typing out equations, no operations should have spaces apart from `+` and `-`. This is to preserve the visual grouping of algebraic terms.

- Correct: `5*9 + 4`.
- Incorrect: `5 * 9 + 4`. (Which takes precedence?)

When implementing max/min range clamps for a given variable, `Math.min()` and `Math.max()` should be used instead of one-line if statements.
### <ins>6. Variables and Operations.</ins>

> [!NOTE]
> For declaring **functions/methods**, please check the corresponding section instead.

Variables should always be defined inside of a function, never outside of one, apart from libraries/dependencies. Only use `let` for variables not intended to be globals (i.e. `window`/`global` namespaces). Never use `const`. Additionally, they should always be declared in alphabetical order, with double line breaks used to split groups of declarations (similar to paragraphs in English grammar).

The only exception to declaring variables in alphabetical order is the `//Convert from parameters` section, where variables are declared in parameter order instead.

Names should always be `snake_cased`, and as surgically descriptive of the variable's contents as possible.

- **Variable Nomenclature.**
- `all_<variable>` - Used to refer to an array of Object keys, e.g. `let all_local_groups = Object.keys(local_groups);`, or an array of class instances.
- `do_not_<variable>` - Typically used as a display or boolean option when needed as a verb parameter.
- `local_<variable>` - Used to specify the local declaration of a variable in a scope that is not function-wide (i.e. inside an iteration loop).
- `options` - Always an Object used to specify local function options.
- `ot_<variable>` - Used to refer to the second counterpart to a variable, standing for 'other', e.g. `let group, let ot_group`, where one is group 1 and the other is group 2.
- `<variable>_array` - Specifies an array. If this array is meant to be a formatted UI string, it may also be referred to in legacy work as `<variable>_string`. If a formatted string, it usually comes with the comment `//Format <variable>` above the code that pushes elements to it.
- `<variable>_obj` - Specifies an Object. If this value is an Object, it should always be used for clarity.

## Writing.

CTD uses non-Oxford British English (EN-GB) as its main writing system. Times are expressed in 24-hour format from GMT (UTC+0). For digital clocks, this is equivalent to Reykjavík Time. Measurements should generally be given in metric. Official locales supported by CRD/CTD are EN-GB, FR, and DE.

Dates are formatted with the full month in `d Month YYYY` format, i.e. `15 March 2026` or `6 June 2026`. Years may be specified as either `AD` or `BC` for historical purposes. We do not use `CE` or `BCE` since they have different character lengths. Confoederatio Timestamps are measured in minutes from 1 January 1AD, 00:00 (GMT) as 64-bit floats. Triennial leap years are specified as `[-45, -42, -39, -36, -33, -30, -27, -24, -21, -18, -15, -12, -9]` (Ideler 1825), with the Julian-Gregorian transition implemented in spec.

Written numbers should be formatted using European decimals, `58,88`; `50.403,28`, using semicolons to separate them in human-readable lists. Numeric abbreviations are semantic, not SI: `k` for thousands, `M` for millions, `B` for billions, and `T` for trillions, and so on. 

For financial amounts, you may occasionally see `mn`, `bn`, and `tn`. The baseline currency for research used by CRD is the International Dollar (FY2000), and the Special Drawing Right (SDR) in some American contexts.

For technical writing, ensure that your comments are Doxygen/Javadoc/JSDoc and locale compatible.