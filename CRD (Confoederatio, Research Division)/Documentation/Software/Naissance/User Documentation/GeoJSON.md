The standard format for talking between web-based GIS libraries, GeoJSON is used by Naissance's backend to ensure compatibility between Maptalks-Turf.js, which it uses for most geometry operations. GeoJSON is codified by [RFC 7946](https://datatracker.ietf.org/doc/html/rfc7946) and contain parallel objects to Naissance, although most [[Naissance Entities]] would be classed as FeatureCollections.

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```
<div align = "center">An example of GeoJSON syntax.</div>

GeoJSON supports the following geometry types: `Point`, `LineString`, `Polygon`, `MultiPoint`, `MultiLineString`, and `MultiPolygon`. Geometric objects with additional properties are `Feature` objects. Sets of features are contained by `FeatureCollection` objects.