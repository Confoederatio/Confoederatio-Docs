---
cover: https://i.postimg.cc/qvvmDC6H/embed-template.png
description: A list of known issues with Naissance HGIS that are currently being worked on.
---

This is a list of known [[Naissance HGIS]] issues that should be fixed in following development cycles.

**Bugs:**
- Geospatiale.planarOverlay can lead to degenerate polygons due to floating-point imprecision. The solution to this is to buffer polygons beforehand with turf.buffer (1-metre precision).
- Circular structures to JSON can happen after long editing periods. There should be flattening sanity checks to prevent this from happening. FIXED
- Features can still vanish in the leftbar hierarchy from time to time. When this occurs, a test save should be made and the issue fixed. FIXED
- ve.MultiTag editor for geometries often adds a null [0] element. FIXED

**Implementation:**
- The global settings UI needs a font registry, alongside default options for Features/Geometries. FIXED
- The global settings UI is not fully flushed out. WIP

**Refactoring:**
- Static `getDefaultLabelSymbol()` implemented by [[Brush]] to avoid redundancy. DONE
- Moving [[Naissance Variables Editor]] to a [[Naissance Geometries|Geometry]] generic. DONE