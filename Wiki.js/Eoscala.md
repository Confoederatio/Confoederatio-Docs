> **Note.** The most up-to-date version of this content will always be hosted on Confoederatio git repositories.
> 
> [GitHub](https://github.com/ConfoederatioVF/EoscalaVelkscala)

## Abstract

Current Version: **1.3**

Gridded GDP PPP from 10000BC-2023AD, 5-arcmin. resolution. Global extent. Point/extent data for income/wealth Gini from 21500BC-2018AD. Eoscala/Velkscala are conjoined projects focusing on the global historical modelling of demographic and economic data over the long run. This database is subject to future routine updates to improve model and data accuracy, as well as to expand the scope of available gridded raster data. 

Eoscala/[Velkscala](/Velkscala) are conjoined projects focusing on the global historical modelling of demographic and economic data over the long run. This database is subject to future routine updates to improve model and data accuracy, as well as to expand the scope of available gridded raster data. [Constele Red](/Constele_Red) was utilised in generating most visuals.

![](/crd/eoscala/eoscala_1.3.jpg)

GDP PPP by world region and time period in Eoscala 1.3.

## Data

Negative years represent BC, and postive years represent AD. 0 is used in place of 1AD. Eoscala's file directories are divided into the following folders:

- `./eoscala/economic_activity_rasters` - Organically modelled OLS-based proxies for potential economic activity at each time interval.
- `./eoscala/gini` - Wealth/income Gini coefficients from 21500BC-2018AD. Formatted as geolocated/coded `.csv`.
- `./eoscala/gdp_ppp_rasters` - Gridmaps reflecting actual GDP PPP per cell, in 100s of FY2000 International Dollars.

In general, Eoscala's economic activity were informed by an OLS model over HYDE-SEDAC (Kummu-extended) stocks from 1990-2015, which were then dasymetrically backcalculated over HYDE for LU and Velkscala for population. Potential economic activity prior to 1800AD were scaled to Maddison and Nordhaus to form GDP PPP, whilst data was scaled to Gapminder post-1800. Relevant model weighting data for Eoscala ML models, including the base OLS HYDE-SEDAC model, may be found in the `./models/` folder. 

Data (Gini):

 Due to different file formats, Gini files have been split into premodern (`gini_-21500_1800.csv`) and modern files (`gini_1800_2018.csv`). Latlng coordinates from 21500BC-1800AD are rounded to two decimal places and should be viewed as approximate.

- **gini_-21500_1800.csv**: Society, City/Site, Region, Polity, Year, Latitude, Longitude, Income Gini, Wealth Gini, Sources
- **gini_1800_2018.csv**: geo, name, time, Gini | Note: Name refers to country names, and time to year. Gini figures reflect income.

## **Download**

- Data (for both Eoscala/Velkscala): [https://github.com/ConfoederatioVF/EoscalaVelkscala/](https://github.com/ConfoederatioVF/EoscalaVelkscala/)
- Methodology Report (1.0): [https://confoederatio.org/papers/Eoscala%201.0_Velkscala%200.5_%20A%20Gridded%20Reconstruction%20of%20Global%20GDP%20and%20Population%20from%2010000BC%20to%20the%20Present-4.pdf](https://confoederatio.org/papers/Eoscala%201.0_Velkscala%200.5_%20A%20Gridded%20Reconstruction%20of%20Global%20GDP%20and%20Population%20from%2010000BC%20to%20the%20Present-4.pdf)