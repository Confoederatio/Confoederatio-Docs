> [!WARNING]
> Documentation of this nature on Confoederatio Docs are user-facing only. Technical documentation should be assigned their own subdomain in the future.

Refers to the base **maptalks.Layer** used by the currently displayed map. Typically, this is a feature tile layer with a spatial reference that determines its current projection, either preset or otherwise. Since it can be changed as an altered [[FeatureTileLayer]], it is generally recognised as a [[Naissance Features|Naissance Feature]].

Optioning is generally shared with [[FeatureTileLayer]].
## Spatial References:

- Equirectangular
- Mercator
- Custom projection (using Proj4JS strings)