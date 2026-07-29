Old Phersu Atlas: https://phersu-atlas.com/political-maps/global/standard_group/-3499/1/1

Extract Polities GeoJSON:
```js
function getPolitiesLayerFromComponent () {
  let all_nodes = document.querySelectorAll("*");
for (const node of all_nodes) {
    if (node.__ngContext__) {
      const contextArray = Array.isArray(node.__ngContext__)
        ? node.__ngContext__
        : [node.__ngContext__];
      for (const item of contextArray) {
        if (item && typeof item === "object" && "politiesLayer" in item) {
          console.log("Found instance globally on standard node:", item);
          return item.polities_layer_geojson;
        }
      }
    }
  }
}
console.log(getPolitiesLayerFromComponent());
```
Fetch app state:
```js
document.querySelector("app-map-main").__ngContext__[30];
```

Loading class: `.loading`

Updated (Angular Ivy):

```js
function getAtlasComponent() {
  let host_el = document.querySelector("app-tile-map-atlas");
  let root_lview = host_el && host_el.__ngContext__;
  if (!root_lview) return null;

  const HEADER_OFFSET = 20;
  let queue = [root_lview];
  let seen = new Set();

  while (queue.length) {
    let l_view = queue.pop();
    if (!Array.isArray(l_view) || seen.has(l_view)) continue;
    seen.add(l_view);

    for (let i = 8; i < l_view.length; i++) {
      let slot = l_view[i];
      if (Array.isArray(slot)) {
        queue.push(slot);
      } else if (slot && typeof slot === "object" && !(slot instanceof Node)) {
        // Identify the atlas component by things that ALWAYS exist on it
        if ("httpService" in slot && typeof slot.loadPolities === "function") return slot;
      }
    }
  }
  return null;
}

let atlas_component = getAtlasComponent();
console.log("Component:", atlas_component);
console.log("Layers:", atlas_component.map.getLayers());
```

```js
function getAtlasComponent() {
  let host_el = document.querySelector("app-stats-time-series");
  let root_lview = host_el && host_el.__ngContext__;
  if (!root_lview) return null;

  const HEADER_OFFSET = 20;
  let queue = [root_lview];
  let seen = new Set();

  while (queue.length) {
    let l_view = queue.pop();
    if (!Array.isArray(l_view) || seen.has(l_view)) continue;
    seen.add(l_view);

    for (let i = 8; i < l_view.length; i++) {
      let slot = l_view[i];
      if (Array.isArray(slot)) {
        queue.push(slot);
      } else if (slot && typeof slot === "object" && !(slot instanceof Node)) {
        // Identify the atlas component by things that ALWAYS exist on it
        if ("httpService" in slot && typeof slot.calculateTimeSeries === "function") return slot;
      }
    }
  }
  return null;
}

let atlas_component = getAtlasComponent();
console.log("Component:", atlas_component);
```

Extract all changes:
- URL: https://phersu-atlas.com/data/tsglobal/1

```js
function getAtlasComponent() {
  let host_el = document.querySelector("app-stats-time-series");
  let root_lview = host_el && host_el.__ngContext__;
  if (!root_lview) return null;

  const HEADER_OFFSET = 20;
  let queue = [root_lview];
  let seen = new Set();

  while (queue.length) {
    let l_view = queue.pop();
    if (!Array.isArray(l_view) || seen.has(l_view)) continue;
    seen.add(l_view);

    for (let i = 8; i < l_view.length; i++) {
      let slot = l_view[i];
      if (Array.isArray(slot)) {
        queue.push(slot);
      } else if (slot && typeof slot === "object" && !(slot instanceof Node)) {
        // Identify the atlas component by things that ALWAYS exist on it
        if ("httpService" in slot && typeof slot.calculateTimeSeries === "function") return slot;
      }
    }
  }
  return null;
}

let atlas_component = getAtlasComponent();
let years_with_changes = [];

for (let i = 0; i < atlas_component.line_content.length; i++) {
  let actual_year = atlas_component.line_label[i];
  if (atlas_component.line_content[i] > 0)
    years_with_changes.push(actual_year);
}

console.log(years_with_changes);
```