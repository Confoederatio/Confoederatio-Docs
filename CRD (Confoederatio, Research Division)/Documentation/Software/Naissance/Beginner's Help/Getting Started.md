---
cover: https://i.postimg.cc/Rhp5GKJS/embed-template-naissance.png
description: Starter guide to using Naissance GIS to draw historical and contemporary maps.
---
### Installing Naissance

The first step in using Naissance is to install it. The process for doing so depends on whether you are on Windows (default), or MacOS/Linux. Naissance GIS is unavailable for mobile devices.

**1. Installation (Windows)**

1. Visit [Naissance's Latest Release](https://github.com/ConfoederatioVF/Naissance/releases/tag/1.9.2b-skeleton) page. 
2. Click on the **\[Download (Windows)]** button. This will take you to a file download link for the software's `.zip` file.
3. Download and extract the ZIP file on your computer.
4. Run `naissance.exe`.

**2. Installation (MacOS/Linux)**

1. Visit [Naissance's GitHub](https://github.com/ConfoederatioVF/Naissance) page.
2. Download Node.JS if not installed: https://nodejs.org/en/download.
3. Click `Code` > `Download ZIP` > Extract ZIP file when downloaded.
4. Run `autorun.sh`.
### Startup Screen

Once on your computer, Naissance should boot up smoothly. It may take several seconds to load if it is your first time. After a while, you should be greeted by a screen that appears as follows.

![[getting_started_startup_screen.png]]

<div align = "center">The startup screen as it appears in 1.92b.</div>

Unlike other GIS suites, we have chosen to make it simple to use without sacrificing the software's capability. The UI is divided into the leftbar (at left), topbar (at top), and rightbar (at right). The main map you are currently editing appears in the centre.

By default, a basemap is preloaded, but this can be changed. Click on `Toolbox` > `More` > `Create Tile Layer` > Select a Tilemap Preset > `Apply as Base Layer`. Now rename 'New Tile Layer' to whatever you wish.

![[getting_started_change_basemap.png]]

<div align = "center">You have now learned how to use a basemap of your choice.</div>

### Map Controls

Now that we have a solid basemap, press `X` to close each window. Windows in Naissance can often be closed and resized by hovering over the edges.

On most devices, Middle Mouse Button `(MMB)` is used to pan the map by holding down and moving the mouse. Some mice do not have a scroll wheel. On such devices, in the bottom right under `Brush`, toggle on `Disable Brush`. This allows you to pan the map with the Left Mouse Button `(LMB)`.

The scroll wheel zooms the map in and out. Ctrl + MMB tilts the map into a 2.5D view, and can also be used for rotating the map.
### Using the Brush

Unlike many other GIS programs, Naissance GIS revolves around the **Brush**, pictured below. We will touch on Mapmodes in a later tutorial.

![[getting_started_brush.png|400]]

<div align = "center">The Brush as it appears by default.</div>

This is similar to the Brush found in many paint applications, such as MS Paint or Paint.NET, but with modern geospatial tools. `Ctrl + Scroll Wheel` adjusts the size of your brush, which you can see in the bottom right. It forms a black outline around your cursor.

To get started with the Brush, we will try to create three polygons in Flanders, Brussels, and Wallonia. `Right Click on Map` > `New Polygon` > Change name to `Brussels` > `Confirm`. In your **Leftbar** (Hierarchy), you will now see a new Polygon is selected.

Simply hold down `Left Click` and drag to paint, adjusting the size of your brush as necessary. Holding down `Right Click` will subtract from the current Polygon. In the bottom right under **Fill Colour**, we can change the fill of the new Polygon we have just created. Drag it to a light violet.

![[getting_started_brussels.png]]

<div align  = "center">A Brussels painted using the default Brush.</div>

Perhaps we do not always want our Polygons to look so blobby, however. This is where **Brush Modes** come in. Zooming back out to all of Belgium, click on `Brush Mode`, and change it to `Node`. This uses point-based snapping instead.

Now, `Right Click on Map` > `New Polygon` > Change name to `Wallonia` > `Confirm`. This creates a new Polygon, just like before. Change the fill colour to a sturdy blue. Begin clicking on the map as necessary. A `Double Click` will apply your new node changes. 

![[getting_started_wallonia_1.png|400]]

<div align = "center">A polygon before and after being edited.</div>

If you make a mistake, simply close the node selection, and hold down `Ctrl` when finishing the edit. This will create a red selection, allowing you to remove bits from the Polygon you have.

![[getting_started_wallonia_2.png|400]]

<div align = "center">Node editors can subtract from a Polygon, similar to a lasso.</div>

Finally, let's try something different. Since we want these geometries to be mutually exclusive, we need to place them in a **Layer**. Click on `Toolbox` > `Create New Layer` > Change Name to 'Belgium'. Now drag both 'Brussels' and 'Wallonia' underneath it in the `Hierarchy`.

For ergonomic reasons, geometries under a layer are typically hidden. If you wish to show them, click on the three dots next to the Layer in the Hierarchy, and toggle `Show Layer Geometries`. Now, create a new Polygon for Flanders, and change the `Fill Colour` as before. The look of something is called a **Symbol**. From here on out, changing how a Geometry looks will be called **changing the symbol**.

Click on 'Belgium' to ensure it is in a red outline to select the given layer. Now, click on `Toolbox` > `Create New Polygon` > Change Name to 'Flanders'. I will personally use a yellow colour for Flanders.

![[getting_started_belgium.png]]

<div align = "center">It is perfectly fine for your lasso to overlap when sculpting Polygons. They will snap to existing borders in a layer by default.</div>

You have now learned how to draw basic borders in Naissance. Switch your Brush Mode back to Default, and click on Flanders. This will bring up an info panel showing its data and possible actions. Data are sorted into Keyframes, which detail the dates and times at which individual Geometries changed.

Click on 'Finish Geometry' to stop editing it.
### Using the Leftbar

At this point, you may be keen on changing the dates at which your polygons appear. The default date is the present day, and so if we go back to 1980 in the Date, all 3 are hidden, as they have not 'started existing' yet. We should probably change this. 

Keyframes can be moved individually via `Click on Geometry` > `Move Keyframe to Date`, but this can be tedious. If we want to move everything on the screen to a certain date, we can do so through the Timeline.

![[getting_started_timeline.png]]

Click on `Timeline` > `Right Click on Highlighted Keyframe` > `Move Keyframe To` > `1 January 1980` > Press `Confirm`. 

Now, all our polygons will reappear in the past as needed. New Geometries created at a specific Date will start existing at that Date, and mastering both **Entities** (which refer to Features/Geometries) and **Keyframes** (which refer to data changes over time) are key to mastering **Naissance**.

But first, we should probably learn how to save and load our files.
### Learning More

You can reaccess this Wiki at any time by simply pressing the `Help` button in the top right, under `Date`.

- Next Tutorial: [[Saving & Loading]]