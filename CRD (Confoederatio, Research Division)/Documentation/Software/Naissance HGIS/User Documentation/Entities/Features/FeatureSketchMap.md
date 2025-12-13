---
cover: https://i.postimg.cc/qvvmDC6H/embed-template.png
description: User information on creating and using FeatureSketchMaps in Naissance HGIS.
---
> [!NOTE]
> Sketch Maps will be referred to by their class name, FeatureSketchMap, to prevent confusion. They may also be generically referred to as **sketch maps**.
## Abstract

Represents a **naissance.FeatureSketchMap** type which is used as a quick overlay for notetaking and for reference use. Geometries in a FeatureSketchMap can be quickly added and edited, but are monochrome in nature. Currently, they cannot be transferred to conventional [[Naissance Geometries]], though such functionality is planned for future use.

The visibility of sketch maps can be toggled on and off, and they render over other Geometries currently appended to the map.

| Class         | naissance.FeatureSketchMap |
| ------------- | -------------------------- |
| Class Name    | FeatureSketchMap           |
| GeoJSON Type  | None                       |
| Is Group      | Yes                        |
| Semantic Name | Layer                      |
| Symbol Name   | None                       |

**Creating a FeatureSketchMap**:
- `Click on Hierarchy > Create New Sketch Map`

**Add Geometry to FeatureSketchMap:**
- `Click on Hierarchy` > `Edit Sketch Map` > `(Geometry Type)`
**Edit Geometry on FeatureSketchMap:**
- `Click on Map Geometry` > `Edit`
**Remove Geometry from FeatureSketchMap:**
- `Click on Map Geometry` > `Delete`
