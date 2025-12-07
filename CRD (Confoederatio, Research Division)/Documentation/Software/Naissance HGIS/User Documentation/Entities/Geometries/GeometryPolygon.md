> [!WARNING]
> Documentation of this nature on Confoederatio Docs are user-facing only. Technical documentation should be assigned their own subdomain in the future.

Represents a **naisance.GeometryPolygon** type which contains a MultiPolygon in [[GeoJSON]] terms. Like all [[Naissance Geometries]], it encapsulates a `.history` Object upon which it relies for data population. Each outer polygon segment typically comes with an automatic label attached unless labelling is explicitly disabled, either by default, or for the rendered polygon.

`naissance.GeometryPolygon` can be created by right clicking on the map when in Edit Mode and selecting `New Polygon`.
## Metadata

Metadata tags refer to properties that are keyframe agnostic, such as savedata attached to the present Geometry (i.e. in the [[Naissance Variables Editor|Variables Editor]]).
## Geometry

In backend terms, GeometryPolygons are implemented as a collection of geometries, even though this is not visible to the user. These entities include labels, a selected geometry overlay, the [[Naissance Label Editor]] (when active), as well as the background geometry itself which represents the core Polygon.

Each geometry is redrawn upon the next draw() call or frame, typically in response to user input changes. In GeoJSON terms, each `naissance.GeometryPolygon` is serialised to a `MultiPolygon` (if there are multiple exclaves) and a `Polygon` if there is only a single geometry.

Geometries are loaded in whole for each keyframe, as opposed to delta changes.
## Symbol

The symbol refers to the appearance of the current Polygon, as well as those of its labels via the label editor. The appearance of the selected polygon overlay is only editable via `Global Settings > Appearance > Editor Appearance`.

Symbols mutate based on each keyframe, and newer keyframes do not replace older ones.
## Properties

Properties contain mutated variables at a specific keyframe. There are also special properties that change the behaviour of a naissance.GeometryPolygon, with some of these being generic (marked by an `*`). The human-readable name is placed in round brackets.

- .max_zoom*: number - (Maximum Zoom). Determines visibility.
- .min_zoom*: number - (Minimum Zoom). Determines visibility.