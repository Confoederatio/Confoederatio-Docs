---
cover: https://i.postimg.cc/qvvmDC6H/embed-template.png
description: User information on creating and manipulating GeometryLines in Naissance HGIS, which are made of multiple line segments.
---

> [!NOTE]
> Line instances here will be referred to by their class name, GeometryLine, to prevent confusion.

![[GeometryLine_1.5b.png]]
<div align = "center">A GeometryLine as visualised on the map. Because it represents a multiline, lines can be discontiguous.</div>

## Abstract

Represents a **naissance.GeometryLine** type which contains a MultiLineString in [[GeoJSON]] terms. Like all [[Naissance Geometries]], it encapsulates a `.history` Object upon which it relies for data population. Its coordinates are generally made of an array of lines.

| Class         | naissance.GeometryLine |
| ------------- | ---------------------- |
| Class Name    | GeometryLine           |
| GeoJSON Type  | MultiLineString        |
| Semantic Name | Line                   |
| Symbol Name   | Line/Stroke            |
| Type          | Geometry               |

**Creating a GeometryLine:**
- Right Click on Map > New Line
**Editing a GeometryLine:**
Prior to editing a GeometryLine, ensure that it is selcted as the [[Brush]]'s primary geometry. If it is correctly selected, a solid yellow outline should appear over the line.

You can move an existing line into the Brush's primary slot by clicking on the `GeometryLine > Move To Brush`.

- If in non-node Brush Mode:
	- Press down `Left Click` to start a new line segment.
	- Lift up `Left Click` to finish the current line segment.
- If in node-based Brush Mode:
	- Double click to finish the current line segment.
- To disable/enable line editing:
	- Toggle `Brush > Disable Brush`.
- To remove a line segment:
	- `Ctrl + Left Click` a renndered line segment on the map that is currently selected. Works in all modes.

To edit a line at a specific keyframe, `Click on the Geometry Line > Keyframes > Jump To Date`, then edit at the new date.
## Symbol

A [[Naissance Symbol|Symbol]] refers to the styling attributes that determine a Feature/Geometry's appearance on the map. GeometryPolygon composes the following symbol editors: Label, Stroke, which can be viewed either in the `Edit Selected Geometries` generic, or in the individual GeometryLine UI.
## Technical Details

In backend terms, GeometryLines are implemented as a collection of geometries, including its main `.geometry` field, although this is not visible to the user. These entities include labels, a selected geometry overlay, the [[Naissance Label Editor]] (when active), as well as the background geometry itself which represents a MultiLineString, which is also this geometry type's [[GeoJSON]] export value.

Each geometry is redrawn upon the next draw() call or frame, typically in response to user input changes. When clicking on an individual line segment, the index of the target geometry is given as `targetGeometryIndex`.

Geometries are loaded in whole for each keyframe, as opposed to delta changes.