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
