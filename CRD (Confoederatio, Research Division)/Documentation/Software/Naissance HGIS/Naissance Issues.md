This is a list of known [[Naissance HGIS]] issues that should be fixed in following development cycles.

**Bugs:**
- ve.MultiTag editor for geometries often adds a null [0] element.
- Circular structures to JSON can happen after long editing periods. There should be flattening sanity checks to prevent this from happening.

**Implementation:**
- The global settings UI needs a font registry, alongside default options for Features/Geometries.
- The global settings UI is not fully flushed out.

**Refactoring:**
- Static `getDefaultLabelSymbol()` implemented by [[Brush]] to avoid redundancy.
- Moving [[Naissance Variables Editor]] to a [[Naissance Geometries|Geometry]] generic.