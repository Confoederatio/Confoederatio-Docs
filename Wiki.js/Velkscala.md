> **Note.** The most up-to-date version of this content will always be hosted on Confoederatio git repositories.
> 
> [GitHub](https://github.com/ConfoederatioVF/EoscalaVelkscala)

## Abstract

Current Version: **0.8**

Gridded population and land use from 10000BC-2025AD, 5-arcmin. resolution. Global extent. Population data after 1975AD drawn from GHSL. City data drawn from [Stadestér 1.0.](/Stadester)

[Eoscala](/Eoscala)/Velkscala are conjoined projects focusing on the global historical modelling of demographic and economic data over the long run. This database is subject to future routine updates to improve model and data accuracy, as well as to expand the scope of available gridded raster data.

This dataset is considered pre-release, and so regions with populations lower than <5M (regardless of date), may have inflated populations due to current calculations using ints rather than floats for performance reasons.

![](/crd/velkscala/7.velkscala.png)

Map of global population in Velkscala 0.8 (1800AD, Equal Earth).

## Data

Velkscala's file directories are contained within `./velkscala/`, and follow a HYDE naming scheme. Note that a `_number.png` prefix denotes a raw integer raster file, and `_percentage.png` denotes a relative percentage raster file, where the g channel contains percentile values in 0,5%-step resolution. 0AD is used in place of 1AD. Non-demographic land-use data is sourced from [HYDE3.3](https://geo.public.data.uu.nl/vault-hyde/HYDE%203.3[1710493486]/original/hyde33_c7_lower_mrt2023/zip/). Demographic data was based on city populations from Stadestér/Velkscala fallback modelling. For pre-Columbian population modelling in the Americas, see Project Centaur. ALCC data was geometrically averaged over the domain of KK10/LUH2, and was used for demographic fallback modelling in HYDE outlier regions.

- `alcc`: Anthropogenic Land Cover (%/cell)
- `conv_rangeland`: Converted Rangeland (km^2/cell)
- `cropland`: Cropland (km^2/cell)
- `grazing`: Grazing Land (km^2/cell)
- `ir_norice`: Irrigated Non-Rice Cropland (km^2/cell)
- `ir_rice`: Irrigated Rice Cropland (km^2/cell)
- `pasture`: Pasture Area (km^2/cell)
- `rangeland`: Rangeland Area (km^2/cell)
- `rf_norice`: Rainfed Non-Rice Cropland (km^2/cell)
- `rf_rice`: Rice Cropland (km^2/cell)
- `shifting`: Manual Weight Changes (HYDE3.3)
- `tot_irri`: Irrigated Area (km^2/cell)
- `tot_rainfed`: Rainfed Non-Rice Cropland (km^2/cell)
- `tot_rice`: Rice Cropland (km^2/cell)

- `popc_`: Total Population (pop/cell)
- `popd_`: Population Density (pop/km^2)
- `rurc_`: Rural Population (pop/cell)
- `uopp_`: Built-Up Area (km^2/cell)
- `urbc_`: Urban Population (pop/cell)

Animated previews for gridded population in Velkscala 0.8 can be found here, or in the supplemental images of the Methodology Report for Stadestér 1.0 (see **Download**).

(External image links due to file size limitations): [Total Population](https://i.postimg.cc/SQGrLn1h/stadester-population.gif) - [Urban Population](https://i.postimg.cc/zvpFqQHB/stadester-urban.gif) - [Rural Population](https://i.postimg.cc/mrFj7VJX/stadester-rural.gif).

**Regional summary images.**

![](/crd/velkscala/51.velkscala_0.8_regional_population_totals.jpg)

Population totals by statistical region (10000BC-2023AD), Velkscala 0.8.

![](/crd/velkscala/50.velkscala_0.8_regional_shares_of_population.jpg)

Relative population shares by statistical region (10000BC-2023AD). Velkscala 0.8.

## Download

- Data (for both Eoscala/Velkscala): [https://github.com/ConfoederatioVF/EoscalaVelkscala/](https://github.com/ConfoederatioVF/EoscalaVelkscala/)
- Methodology Report (Velkscala 0.5): [https://confoederatio.org/papers/Eoscala%201.0_Velkscala%200.5_%20A%20Gridded%20Reconstruction%20of%20Global%20GDP%20and%20Population%20from%2010000BC%20to%20the%20Present-4.pdf](https://confoederatio.org/papers/Eoscala%201.0_Velkscala%200.5_%20A%20Gridded%20Reconstruction%20of%20Global%20GDP%20and%20Population%20from%2010000BC%20to%20the%20Present-4.pdf)
- Methodology Report (Stadestér 1.0): [https://confoederatio.org/papers/Stadestér%201.0%20-%20A%20Global%20Database%20of%2041000%2B%20Cities%20From%203000BC%20to%20the%20Present.pdf](https://confoederatio.org/papers/Stadest%C3%A9r%201.0%20-%20A%20Global%20Database%20of%2041000%2B%20Cities%20From%203000BC%20to%20the%20Present.pdf)