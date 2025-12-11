
![[constele_red_logo.png|128]]

<div align = "center">A multi-threaded, asynchronous directed acyclic spatiotemporal processing suite.</div>

## Abstract.

> [!NOTE]
> Tilemap APIs may occasionally be overloaded. When this occurs, consider providing your own API keys, or switching to a more reliable provider from the **Base Map Layer** menu, such as <ins>Carto</ins> or <ins>OSM</ins>.

See Also: [Constele Red on GitHub](https://github.com/Confoederatio/Constele-Red)

**Constele Red** is a stopgap grid-based mapping suite built for historical statistics and heavy duty data processing/cleaning. It works by hooking into an existing CLI/Node.js application and specifying tasks/function calls in a directed acyclic graph (DAG), which is mounted on separate child processes. This allows the render thread to command tasks to workers as well as to render any custom end visualisations from the geoprocessing chain. It will then sequentially execute dependencies, updating them in real-time.

<table>
  <tr>
    <td><img src = "https://i.postimg.cc/YSNZsSqS/constele-red-preview-02.png"><div align = "center">(Node-based Dataflows)</div></td>
    <td><img src = "https://i.postimg.cc/xC0hDSc3/constele-red-preview-01.png"><div align = "center">(3D Map Editor)</div></td>
  </tr>
</table>

This application is mainly split into a node-based dataflow editor and a map visualiser, where multiple mapmodes may be saved and switched between. Mapmodes are scriptable, as are individual function/command calls from within nodes. **Constele Red** is built as a supplement to [[Naissance HGIS]], a 3D HGIS used by <ins>Confoederatio</ins>. Statistical integration and data visualisation suites have also been added on via D3.js compatibility.
## Dependencies.

- BaklavaJS (Browser-build, no Vue)
- [[Legacy Geospatiale]] (internal geospatial processing framework)
- Maptalks
- [[UF]] (internal QOL framework)
- [[Vercengen]] internal frontend framework)

## Save Folders.

- `./mapmodes/` - Contains all mapmodes created in the 3D Map Editor.
- `./scripts/` - Contains all script files used in the Node Editor.
- `database_*.js` - Stores Node state and restores their settings.
