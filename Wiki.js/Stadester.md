> **Note.** The most up-to-date version of this content will always be hosted on Confoederatio git repositories.
> 
> [GitHub](https://github.com/ConfoederatioVF/Stadester)

## Abstract

Current Version: **1.0.1**

Human settlements from 3000BC-2025AD provided in JSON, total/urban/rural population rasters provided separately at 5-arcmin. resolution. Global extent. Population/urban data after 1975AD drawn from GHSL. **Stadestér** is an urban population database of ~40k+ global cities and their populations from 3000BC to the present day as taken from Chandler, Modelski, Reba et al., Buringh, DeVries, Populstat, GHSL, and Wikipedia. Resultant demographic inormation was hybridised, standardised, geolocated, cubic spline interpolated, and calculated at 1-year intervals utilising geomean scalars and agglomerative correction techniques. 

Area, density, RNI, and geospatial distributions of population within cities are also available at annual resolution starting from 1800AD. Note that rasters have only been outputted for the subset of HYDE years from 3000BC-2025AD, and that you must dynamically generate rasters outside of this subset via the provided CLI in `autorun.bat`. Rural, urban, and total population rasters at 5-arcmin resolution are available from 10000BC-2025AD at a global level. 

To avoid double counting, metropolitan networks were corrected for in the data by subtracting suburban populations from their metro area, and redistributing any negative numbers held by the metropolitan area back to their suburbs in a proportional manner. Area/density calculations were derived from Angel (2011), Bairoch (1991), Clark (1951), Pasciuti and Chase-Dunn (2002), and Stanilov and Sykora (2014). Hanson and Ortman's work on classical populations have not yet been incorporated. 

![](/crd/stadester/stadester_1.0_thumbnail.jpg)

Stadestér 1.0 as viewed by Constele Red over East Asia (1900AD, 2020AD).

## Gallery

See [Stadestér 1.0's Methodology Report](https://confoederatio.org/papers/Stadestér%201.0%20-%20A%20Global%20Database%20of%2041000%2B%20Cities%20From%203000BC%20to%20the%20Present.pdf) for a full list of figures and supplemental images.

|   |   |
|---|---|
|![](/crd/stadester/stadester_1.0_methodology.jpg)<br><br>The main methodology for compiling Stadestér 1.0.|![](/crd/stadester/stadester_1.0_metro_adjustment_process.jpg)<br><br>Deconfliction between metro and city proper population estimates in Stadestér 1.0.|
|![](/crd/stadester/stadester_1.0_kk10luh2_model_moore_neighbourhood_removal.jpg)<br><br>Moore Neighbourhood Outlier Removal/KK10LUH2 Methodology.|![](/crd/stadester/stadester_1.0_radial_buffering.jpg)<br><br>Radial population buffering in Stadestér 1.0 after aggregate city populations were estimated (1800-1975AD).|

## Download

- Data files are hosted on Zenodo: [https://zenodo.org/records/17180328](https://zenodo.org/records/17180328)
- Methodology Report (1.0): [https://confoederatio.org/papers/Stadestér%201.0%20-%20A%20Global%20Database%20of%2041000%2B%20Cities%20From%203000BC%20to%20the%20Present.pdf](https://confoederatio.org/papers/Stadest%C3%A9r%201.0%20-%20A%20Global%20Database%20of%2041000%2B%20Cities%20From%203000BC%20to%20the%20Present.pdf)