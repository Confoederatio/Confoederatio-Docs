## Abstract

Current Version: **0.51b**

De facto polity extents from 3300BC-2014AD, GeoJSON. Global extent. Sub-yearly resolution. De jure polity extents from C-Shapes 2.0. 

Atlas is our flagship dataset for mapping countries and borders over the long run, and is always under custom refinement. You may find it useful to edit the dataset yourself with Naissance HGIS for regional use-cases.

## Dataview

![](/crd/atlas/49.confoederatio_dataview_atlas.jpg)

Confoederatio Dataview (polities - 1836AD), as of Atlas 0.5b.

- View Atlas here: [https://confoederatio.org/pages/dataview](https://confoederatio.org/pages/dataview)
- Timelapse (YouTube): [https://youtu.be/Kc0zNfiAd8c](https://youtu.be/Kc0zNfiAd8c)

## Download

- Atlas 0.5b (JSON): [https://confoederatio.org/data/atlas_0.5b.json](https://confoederatio.org/data/atlas_0.5b.json)
- Atlas 0.5b (.naissance): [https://confoederatio.org/data/atlas_0.5b.naissance](https://confoederatio.org/data/atlas_0.5b.naissance)
- Naissance HGIS: [https://github.com/ConfoederatioVF/Naissance](https://github.com/ConfoederatioVF/Naissance)

Confoederatio (GitHub): [https://github.com/ConfoederatioVF](https://github.com/ConfoederatioVF)

## Technical Notes

- Because GeoJSON does not have a standard for dealing with time, you will have to implement some custom parsing logic, or use the .naissance file extension with our Naissance HGIS to edit/view the dataset.
- Not every year is perfectly aligned to 1 January, meaning that some years do not have a keyframe for 1 January. Dates displayed in the video are approximate. - We chose not to do the period from 2014-2026AD yet since we wish to do so in higher fidelity (daily basis) going forwards, and have decided to work on the map editing software until then.
- These caveats are the reason the dataset is marked as 0.5b, and not a full release.

## Sources

_Full article:_ [Atlas Sources](/Atlas/Sources). A mirror version of this article is also available at [confoederatiodocs.info](https://confoederatiodocs.info/CRD+\(Confoederatio%2C+Research+Division\)/Documentation/Notes+%26+Scripts/Atlas+0.5+Sources).

Details on sourcing are arranged by version to help keep it organised.