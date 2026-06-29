> [!NOTE]
> Naissance is a superset of Maptalks symbols, whose backend documentation can be viewed [here](https://github.com/maptalks/maptalks.js/wiki/Symbol-Reference).

![[NaissanceSymbol_1.5b.png|400]]

<div align = "center">The Selected Geometries inspector as it appears in 1.5.1b Hatteras, one of the main ways symbols can be changed.</div>

## Abstract

**Naissance Symbols** are a superset of Maptalks symbols that also include the Properties panel which determines rendering behaviour for [[Naissance Entities]]. Symbols are applied immediately and in real time and control how [[Naissance Geometries|geometries]] on the map look. When applied to Geometries, they take up the third slot [2] of each keyframe, after the keyframe's date and the geometry coordinates itself.

To maintain composability across different types of geometries, Naissance Symbols are generally split up into Fill ([[GeometryPolygon]]), Line ([[GeometryLine]]), Point ([[GeometryPoint]]), Label, and Properties attributes, the latter two of which are generic to all Geometries. Information on each of these editors is arranged in alphabetical order.

**Editing a Geometry Symbol:**
- Click on a Geometry > Edit Symbol
- Click on a Geometry's Context Menu in the [[Leftbar Hierarchy]] > Edit Symbol
- If Geometries are selected:
	- Click on Edit Selected Geometries in the [[Brush]] panel.

What a symbol corresponds refers only to the type of Geometry that would be primarily styled by it, not to any other Geometries that use it in a secondary sense. For example, [[GeometryPolygon]] utilises Line Symbols to control the appearance of its outer stroke, but the Line Symbol still corresponds to [[GeometryLine]]. 

Symbol properties are listed in tables in the order in which they appear (from top to bottom).
## Fill

Corresponds to [[GeometryPolygon]] types. Controls the interior fill of a Geometry.

| Name         | Type                      | Maptalks Equivalent |
| ------------ | ------------------------- | ------------------- |
| Fill Colour  | Colour                    | polygonFill         |
| Fill Opacity | Float (0-1)               | polygonOpacity      |
| Fill Pattern | String (file path or URL) | polygonPatternFile  |
## Label

Corresponds to symbols for the [[Naissance Label Editor]] or other labels which appear visually for Naissance geometries. Generic.

Note that not all fonts on your computer will be available as a dropdown for **Font Family**. Available fonts can be added to Naissance's registry by going to `Settings > Appearance > Map Appearance > Font Registry`.

| Name        | Type         | Maptalks Equivalent |
| ----------- | ------------ | ------------------- |
| Font Colour | Colour       | textFill            |
| Font Family | String       | textFaceName        |
| Font Size   | Integer (px) | textSize            |
| Font Stroke | Colour       | textHaloFill        |
| Font Width  | Integer (px) | textHaloRadius      |
## Line

Corresponds to [[GeometryLine]] types. Controls the stroke of a Geometry.

| Name             | Type                       | Maptalks Equivalent |
| ---------------- | -------------------------- | ------------------- |
| Stroke Colour    | Colour                     | lineColor           |
| Stroke Opacity   | Float (0-1)                | lineOpacity         |
| Stroke Width     | Integer (px)               | lineWidth           |
| Stroke Line Cap  | String (Butt/Round/Square) | lineCap             |
| Stroke Line Join | String (Bevel/Miter/Round) | lineJoin            |
## Point

Corresponds to [[GeometryPoint]] types. Controls the appearance of a Geometry's marker.

| Name                    | Type                      | Maptalks Equivalent |
| ----------------------- | ------------------------- | ------------------- |
| Marker Icon/Change Icon | String (file path or URL) | markerFile          |
| Marker Opacity          | Float (0-1)               | markerOpacity       |
| Marker Height           | Integer (px)              | markerHeight        |
| Marker Width            | Integer (px)              | markerWidth         |
| Offset X                | Integer (px)              | markerDx            |
| Offset Y                | Integer (px)              | markerDy            |
## Properties

Corresponds to rendering behaviour for target [[Naissance Geometries|Geometries]]. Properties here have no Maptalks equivalent. Generic.

| Name         | Type    | Naissance Equivalent | Notes                                                            |
| ------------ | ------- | -------------------- | ---------------------------------------------------------------- |
| Minimum Zoom | Integer | min_zoom             | The minimum zoom at which a Geometry is visible. 0 is undefined. |
| Maximum Zoom | Integer | max_zoom             | The maximum zoom at which a Geometry is visible. 0 is undefined. |
