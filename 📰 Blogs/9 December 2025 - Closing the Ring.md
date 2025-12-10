```diff
+ A Recode is almost at an end!

Aust Kätzchen
- 9 December 2025
```

#blogs #naissance #Y2025

![[naissance_09.12.2025.png]]
<div align = "center">All basic Geometry features for Naissance have been achieved.</div>

That's right! The recode for [[Naissance]], which needed the construction of an entire [[Vercengen]] immediate mode framework for use is nearly complete in terms of basic features. Much remains to be achieved in terms of advanced features and stability, specifically regarding mapmode scripting and masking, but this is a pretty big achievement for just making maps.

[[Naissance HGIS]] is now fully operational for such tasks, even if [[Constele Red]] is still needed for use when it comes to geoprocessing. This means that in theory, basic work on [[Atlas]] can begin, although we would still like to add better customization options and the [[Naissance Label Editor]] before we think about it in full, since we don't want our naming to be restricted. That means we have to press ahead with [[1.6b Falkland Plan|1.6b]] as quickly as possible.

## The Mapmode Editor

The mapmode editor is to be node-based, that's for sure! This will likely use a second Maptalks pane itself, since we are already using it render-side, and it can be a node-based library as well [Maptalks node-based editing](https://maptalks.org/examples/en/geometry/connector-line/#geometry_connector-line) even if a little cumbersome.

The way this will work is by having **Boolean Filters**, which filter out either [[Naissance Entities]]/[[Naissance Features]] based on boolean criteria before applying an **Expression** to them, either to change their geometry [0], symbol [1], or properties [2]. It's so elegant! In addition, manual JS scripts will also be available for execution within **Boolean Contexts**.

Geometries/symbols/properties will have human-readable aliases and their structure will be specified in config. Geometries will obviously be the toughest to do, and we plan to have [[Turf.js]] binding parity. The same DLS will be reused across scripting

The algorithm will be implemented using parallelized Kahn's algorithm and multithreaded/multicored on any candidate devices. An IPC master thread will oversee each worker and perform conflict resolution, with the user staring at a dashboard for each compute cycle. 

> *(Maybe it's only one compute! Maybe it's more! Maybe it happens when an event fires? You will never know, but we need a visualization regardless).*

But the night is long, and I'm afraid I'm much in need of sleep. [[1.5.1b Hatteras Plan|1.5.1b Hatteras]] will be released tomorrow. Goodnighty!

- Aust Kätzchen