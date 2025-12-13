---
cover: https://i.postimg.cc/qvvmDC6H/embed-template.png
description: User information on creating and using FeatureGroups in Naissance HGIS.
---
> [!NOTE]
> Group instances will be referred to by their class name, FeatureGroup, to prevent confusion. They may also be referred to generically as **groups**.

## Abstract

Represents a **naissance.FeatureGroup** type which can contain other entities recursively. Like all [[Naissance Features]], it is a generic and is not rendered on the map apart from its base styling options. Unlike [[FeatureLayer]], it can nest itself. It can also contain all [[Naissance Geometries]], although this is not a prerequisite for Geometries to exist.

| Class         | naissance.FeatureGroup  |
| ------------- | ----------------------- |
| Class Name    | FeatureGroup            |
| GeoJSON Type  | FeatureCollection [WIP] |
| Is Group      | Yes                     |
| Semantic Name | Group                   |
| Symbol Name   | Group [WIP]             |

**Creating a FeatureGroup:**
- `Click on Hierarchy > Create New Group`

To add items/remove items from a **naissance.FeatureGroup**, drag them in or out of its nested layer. **It is important to note that deleting a FeatureGroup will delete all sub-entities.**

Unlike [[Naissance Geometries]], Features do not encapsulate a `.history` object even if its sub-entities do. To edit a FeatureGroup, click on its buttons in the [[Leftbar Hierarchy]].