---
cover: https://i.postimg.cc/qvvmDC6H/embed-template.png
desc: User information on creating and manipulating GeometryPoints in Naissance HGIS, also known as Markers.
---
> [!NOTE]
> Point instances here will be referred to by their class name, GeometryPoint, to prevent confusion. In certain contexts, they are also referred to as a Marker.

![[GeometryPoint_1.5b.png|512]]
<div align = "center">A GeometryPoint as visualised on the map.</div>

## Abstract

Represents a **naissance.GeometryPoint** type which contains Point in [[GeoJSON]] terms. Like all [[Naissance Geometries]], it encapsulates a `.history` Object upon which it relies for data population. Its main geometry is located at a point in 3D space from which it renders its icon and any associated labels. It may also sometimes be referred to as a Marker.

| Class         | naissance.GeometryPoint |
| ------------- | ----------------------- |
| Class Name    | GeometryPoint           |
| GeoJSON Type  | Point                   |
| Semantic Name | Point/Marker            |
| Symbol Name   | Point                   |
| Type          | Geometry                |

**Creating a GeometryPoint:**
- Right Click on Map > New Point
**Editing a GeometryPoint:**
- `Click on the GeometryPoint > Move Marker > Click on the Map` to set its new coordinate.

Prior to editing a GeometryPoint, ensure that it is selected as the [[Brush]]'s primary geometry. An existing point should be draggable when selected and moved elsewhere accordingly.

To edit a point at a specific keyframe, `Click on the Geometry Point > Keyframes > Jump To Date`, then edit at the new date.
## Symbol

A [[Naissance Symbol|Symbol]] refers to the styling attributes that determine a Feature/Geometry's appearance on the map. GeometryPoint composes the following symbol editors: Label, Point, which can be viewed either in the `Edit Selected Geometries` generic, or in the individual GeometryPoint UI.
## Technical Details

In backend terms, GeometryPoints are implemented as a collection of both the point itself as well as a series of associated labels, which are editable using the [[Naissance Label Editor]] (when active). Each geometry is redrawn upon the next draw() call or frame, typically in response to user input changes.

A `naissance.GeometryPoint` is always serialisable to an equivalent GeoJSON `Point`. Unlike other geometries, coordinates information (located in the [1] index of a keyframe) contains only the latlng coordinates, as well as the altitude in an `{x: number, y: number, z: number}` format.