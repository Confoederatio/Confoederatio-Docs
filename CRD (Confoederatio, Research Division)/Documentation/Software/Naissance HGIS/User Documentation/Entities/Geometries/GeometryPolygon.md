---
cover: https://i.postimg.cc/qvvmDC6H/embed-template.png
description: User information on creating and manipulating GeometryPolygons in Naissance HGIS.
---
> [!NOTE]
> Polygon instances here will be referred to by their class name, GeometryPolygon, to prevent confusion.

![[GeometryPolygon_1.5b.png]]
<div align = "center">A GeometryPolygon as visualised on the map.</div>

## Abstract

Represents a **naisance.GeometryPolygon** type which contains a MultiPolygon in [[GeoJSON]] terms. Like all [[Naissance Geometries]], it encapsulates a `.history` Object upon which it relies for data population. Each outer polygon segment typically comes with an automatic label attached unless labelling is explicitly disabled, either by default, or for the rendered polygon.

The line that denotes its outer boundary is traditionally called the **shell**.

| Class         | naissance.GeometryPolygon             |
| ------------- | ------------------------------------- |
| Class Name    | GeometryPolygon                       |
| GeoJSON Type  | MultiPolygon/Polygon (if no exclaves) |
| Semantic Name | Polygon                               |
| Symbol Name   | Fill                                  |
| Type          | Geometry                              |

**Creating a GeometryPolygon**: 
- Right Click on Map > New Polygon
**Editing a GeometryPolygon:**
Prior to editing a GeometryPolygon, ensure that it is selected as the [[Brush]]'s primary geometry. If it is correctly selected, a solid yellow outline should appear over the polygon.

You can move an existing polygon into the Brush's primary slot by clicking on the `GeometryPolygon > Move To Brush`.
  
- If in non-node Brush Mode:
- If in node-based Brush Mode:
	- Double click to finish the current lasso.
	- Pressing `Left Click` to lasso a new shape will add the lasso to the GeometryPolygon upon finishing it.
	- Pressing `Control + Left Click`  before lassoing a new shape will subtract the lasso from the GeometryPolygon upon finishing it.
- If using the Fill Bucket:
	- Left Click a province to fill it.
	- Ctrl + Left Click a province to remove it.

To edit a polygon at a specific keyframe, `Click on the Geometry Polygon > Keyframes > Jump To Date`, then edit at the new date.
## Symbol

A [[Naissance Symbol|Symbol]] refers to the styling attributes that determine a Feature/Geometry's appearance on the map. GeometryPolygon composes the following symbol editors: Fill, Label, Stroke, which can be viewed either in the `Edit Selected Geometries` generic, or in the individual GeometryPolygon UI.
## Technical Details

In backend terms, GeometryPolygons are implemented as a collection of geometries, even though this is not visible to the user. These entities include labels, a selected geometry overlay, the [[Naissance Label Editor]] (when active), as well as the background geometry itself which represents the core Polygon.

Each geometry is redrawn upon the next draw() call or frame, typically in response to user input changes. In GeoJSON terms, each `naissance.GeometryPolygon` is serialised to a `MultiPolygon` (if there are multiple exclaves) and a `Polygon` if there is only a single geometry.

Geometries are loaded in whole for each keyframe, as opposed to delta changes.