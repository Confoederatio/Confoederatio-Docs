This is a list of known [[Naissance HGIS]] issues that should be fixed in following development cycles.

**Bugs:**
- ve.MultiTag editor for geometries often adds a null [0] element. FIXED
- Circular structures to JSON can happen after long editing periods. There should be flattening sanity checks to prevent this from happening.
- Features can still vanish in the leftbar hierarchy from time to time. When this occurs, a test save should be made and the issue fixed.

**Implementation:**
- The global settings UI needs a font registry, alongside default options for Features/Geometries. FIXED
- The global settings UI is not fully flushed out. WIP

**Refactoring:**
- Static `getDefaultLabelSymbol()` implemented by [[Brush]] to avoid redundancy. DONE
- Moving [[Naissance Variables Editor]] to a [[Naissance Geometries|Geometry]] generic. DONE