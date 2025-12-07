> [!WARNING]
> Documentation of this nature on Confoederatio Docs are user-facing only. Technical documentation should be assigned their own subdomain in the future.

**Features** in [[Naissance HGIS]] refer to entities that are either on-map or if not, are used for grouping, with no history attribute or keyframes. This distinguishes them from [[Naissance Entities|Entities]], which are more concrete and always rendered on the map when available. All Naissance Features extend **naissance.Feature**.

Current types of Features include:

- [[FeatureGroup]]
- [[FeatureLayer]]
- [[FeatureSketchMap]]
- [[FeatureTileLayer]]

These **Features** often contain either a `.entities` array, in which case they contain sub-entities related to Naissance, a `._entities` array used to store [maptalks](https//maptalks.org) objects, or no entities at all. (i.e. in the case of an altered [[FeatureTileLayer]] which contains the [[Base Layer]].