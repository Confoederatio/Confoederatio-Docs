---
cover: https://i.postimg.cc/qvvmDC6H/embed-template.png
description: User information on creating and using FeatureTileLayers in Naissance HGIS.
---
> [!NOTE]
> TileLayer instances will be referred to by their class name, FeatureTileLayer to prevent confusion. They may also be referred to generically as **tile layers**.
> 
## Abstract

Represents a **naisasnce.FeatureTileLayer** type which is overlaid onto the map as a non-GeoJSON geometry. This is similar to the tile layer features provided in other services, and comes with both styling and reprojection options, with its symbol being configured via its relevant context menu.

![[FeatureTileLayer_1.6b.png|512]]
<div align = "center">FeatureTileLayer options as they currently appear in 1.6b Falkland.</div>

FeatureTileLayers can also be applied as the [[Base Layer]] of the current map by clicking on 'Apply as Base Layer'. Note that this will replace the current base layer, but will still preserve the FeatureTileLayer object. The position of tile layers in the hierarchy determines the order in which they render.

| Class         | naissance.FeatureTileLayer |
| ------------- | -------------------------- |
| Class Name    | FeatureTileLayer           |
| GeoJSON Type  | None                       |
| Is Group      | No                         |
| Semantic Name | Tile Layer                 |
| Symbol Name   | None                       |

**Creating a FeatureTileLayer:**
- `Click on Hierarchy > Create Feature Tile Layer`
## Presets

Multiple presets are available for you to use, including those from Carto, ESRI, Google Maps, MapTiler, and OSM. MapTiler presets may require you to use your own MapTiler key, which may be placed in the Maptiler Key option under `Advanced Options > Maptiler Key`.
## Reprojection

To reproject a tile layer, you must first click `Apply as Base Layer`. Make sure that your Opacity is higher than 0 for it to be visible on the map. 

Click on `Hierarchy > Map Settings > Projection` and choose from either 'Mercator' (default) or 'Equirectangular'. If you need a different projection, input a Proj4JS string and click 'Apply Proj4JS Projection'. Make sure that you have saved a backup of your current project before doing so to avoid any potential issues.