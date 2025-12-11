## Abstract

**Geometries** in [[Naissance HGIS]] refer to on-map [[Naissance Entities|Entities]] that encapsulate a [[History|History]] with multiple keyframes. This distinguishes them from [[Naissance Features|Features]], which can be more abstract and do not necessarily contain a `.history` field. They are also not the same as Maptalks Geometries, which are principally used for rendering.

Current types of Geometries include:

- [[GeometryPolygon]]
- [[GeometryLine]]
- [[GeometryPoint]]

These **Geometries** are made up of multiple [maptalks](https://maptalks.org/) classes, and share similar capabilities. Computations involving them are typically performed via [Turf.js](https://turfjs.org/). These classes are typically layered as follows, where the top is the foreground and the bottom is the background.

- .label_geometries: `maptalks.GeometryMarker[]`
- .selected_geometry: `maptalks.Geometry`
- .geometry: `maptalks.Geometry`

All attached geometries are rendered in immediate mode upon `naissance.Geometry.draw()` being called.