---
cover: https://i.postimg.cc/qvvmDC6H/embed-template.png
description: User information on creating and using FeatureLayers in Naissance HGIS.
---
> [!NOTE]
> Layer instances will be referred to by their class name, FeatureLayer to prevent confusion.
> They may also be referred to generically as **layers**.

## Abstract

Represents a **naissance.FeatureLayer** type which can contain other [[Naissance Entities|entities]] and [[Naissance Features|features]] recursively, even though it cannot contain itself (unlike [[FeatureGroup]]). Like all other features, it is a generic and is not typically rendered on the map apart from its base styling options.

Polygons in a layer cannot intersect and will behave as though they were part of a raster layer, meaning that they can be safely painted using either the 'Default' or 'Override' brush modes. Layers can also be transformed into Province Layers to be used in conjunction with the Fill Bucket tool.

| Class         | naissance.FeatureLayer     |
| ------------- | -------------------------- |
| Class Name    | FeatureLayer               |
| GeoJSON Type  | FeatureCollection [WIP]    |
| Is Group      | Yes                        |
| Semantic Name | Layer                      |
| Symbol Name   | Group/Province Layer [WIP] |

**Creating a FeatureLayer:**
- `Click on Hierarchy > Create New Layer`

To add items/remove items from a **naissance.FeatureLayer**, drag them in or out of its nested layer. **It is important to note that deleting a FeatureLayer will delete all sub-entities.**

FeatureLayers do not encapsulate a `.history` object. To edit a FeatureLayer, click on its buttons in the [[Leftbar Hierarchy]]. Geometries do not necessarily have to belong to a FeatureLayer.
## Type

The type of a FeatureLayer can be edited in its context menu. As of [[1.6b Falkland Plan|1.6b Falkland]], the following options are available:

- Default Layer:
	- Ensures that [[GeometryPolygon|GeometryPolygons]] within the same layer will snap to one another.
- Provinces Layer:
	- If Fill Bucket is selected as the current Brush Mode:
		- `Left Click`ing on a province will add it to the current [[GeometryPolygon]].
		- Using `Ctrl + Left Click` on a province will subtract it from the current [[GeometryPolygon]].

When multiple FeatureLayers are rerendered as Province Layers, they will perform a shatter operation, meaning that they merge similarly to multiple raster layers. Unlike raster layers, they can be unmerged by setting their type back to 'Default'.

Province layer symbols can be adjusted in the `Settings` tab under `Appearance > Map Appearance`.