Tampermonkey extensions for capturing maps from different websites based on their mapping services:

Individual Websites:
- [[Convert USNI Robinson To Equirectangular]] (non-Tampermonkey)
- [[Get AIS Friends Naval Vessels]]
- [[Get Geacron Polygons]]
- [[Get GlobalFishingWatch Data]]
- [[Get Leaflet Map Objects - Tampermonkey]]
- [[Get MarineTraffic Naval Vessels]]
- [[Get Phersu Atlas Data (OpenLayers)]]
- [Get Liveuamap Data](https://github.com/ConfoederatioVF/Collation/) - This is an external link.

**Deck.gl (React):**

```js
// ==UserScript==
// @name         Expose Deck.gl Layers
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Intercepts Deck.gl Layers to expose data
// @author       Vis Tacitus
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  window.findDeckData = function () {
      // 1. Find the canvas element used by Deck.gl
      const canvas = document.querySelector(".mapboxgl-canvas") || document.querySelector("canvas");
      if (!canvas) return console.error("Could not find map canvas.");

      // 2. Find the React Internal Key
      const fiberKey = Object.keys(canvas).find((key) => key.startsWith("__reactFiber") || key.startsWith("__reactInternalInstance"));
      if (!fiberKey) return console.error("Could not find React Fiber on this element.");

      // 3. Walk up the React tree to find the DeckGL component
      let walker = canvas[fiberKey];
      let layers = null;

      while (walker) {
          if (walker.memoizedProps && walker.memoizedProps.layers) {
              layers = walker.memoizedProps.layers;
              break;
          }
          walker = walker.return;
      }

      if (layers) {
          window.deckgl_layers = layers;
          console.log("%c Found Deck.gl Layers! ", "background: #222; color: #00e676; font-size: 14px;");

          // Create a summary for the user
          const summary = layers.map(l => ({
              id: l.id,
              type: l.constructor.name,
              dataLength: l.props.data ? (Array.isArray(l.props.data) ? l.props.data.length : 'Complex/Tile') : 0
          }));

          console.table(summary);
          console.log("Access them via: window.deckgl_layers");
      } else {
          console.warn("Found React tree but no 'layers' prop. Try zooming/panning the map and running this again.");
      }
  }
})();
```

**Leaflet:**

```js
// ==UserScript==
// @name         Leaflet Map Instance Tracker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Intercepts and stores all Leaflet map instances in a global array.
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // This array will hold all map instances found on the page
  window.capturedMaps = [];

  let leafletBackend;

  // We define a getter/setter on window.L to catch the moment Leaflet loads
  Object.defineProperty(window, "L", {
    get: function () {
      return leafletBackend;
    },
    set: function (newLeaflet) {
      leafletBackend = newLeaflet;

      // Ensure we have the Map object and haven't hooked it yet
      if (leafletBackend && leafletBackend.Map && !leafletBackend._hooked) {
        leafletBackend._hooked = true;

        console.log("Leaflet detected! Injecting initialization hook...");

        leafletBackend.Map.addInitHook(function () {
          window.capturedMaps.push(this);
          console.log("New Leaflet map instance captured:", this);
        });
      }
    },
    configurable: true,
  });

  // Optional: Expose a helper function to the console to interact with maps
  window.getMaps = () => window.capturedMaps;
})();
```

**MapLibre:**

```js
// ==UserScript==
// @name         MapLibre  Geometry Extractor
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Pull all coordinates from all sources on the map
// @author       Vis Tacitus
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";
  const win = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
  win.maplibre_maps = [];

  // Capture instance (Nuclear Option)
  Object.defineProperty(Object.prototype, "_container", {
    set: function (val) {
      if (this.getStyle && this.queryRenderedFeatures) {
        if (!win.maplibre_maps.includes(this)) win.maplibre_maps.push(this);
      }
      this.__secret_container_ref = val;
    },
    get: function () { return this.__secret_container_ref; },
    configurable: true,
  });
})();
```

**OpenLayers:**

```js
// ==UserScript==
// @name         Capture OpenLayers Map
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Captures the OpenLayers map instance by intercepting the constructor.
// @author       Vis Tacitus
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  /**
   * This script intercepts the OpenLayers Map constructor.
   * It stores the map instance in window.capturedMap for easy access.
   */
  let rawOl = undefined;

  Object.defineProperty(window, "ol", {
    get: function () {
      return rawOl;
    },
    set: function (value) {
      rawOl = value;

      // Check if the value being set is the OpenLayers object containing the Map constructor
      if (rawOl && rawOl.Map && !rawOl.Map.isIntercepted) {
        const OriginalMap = rawOl.Map;

        // Wrap the original constructor
        const MapProxy = function (options) {
          const instance = new OriginalMap(options);
          window.capturedMap = instance;

          console.log("OpenLayers Map captured:", instance);
          console.log(
            "Access it via: window.capturedMap",
          );

          return instance;
        };

        // Ensure inheritance and identification work correctly
        MapProxy.prototype = OriginalMap.prototype;
        MapProxy.isIntercepted = true;

        rawOl.Map = MapProxy;
      }
    },
    configurable: true,
    enumerable: true,
  });
})();
```
