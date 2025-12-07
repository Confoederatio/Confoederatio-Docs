Most preindustrial production chains should come from Terrafirmacraft, which is used to progress up to the Protoindustrial Age, at which stage T&T production chains take over. Custom tools are implemented using ExecutableItems, and custom items via NBT. Players will be given a single set of wrought iron tools upon joining a nation to get them jumpstarted.

Recipes/production chains are generally ordered in the manner in which a player is expected to encounter them. The round brackets next to each age denote the reskinned tooling complex that each stage’s results are roughly equivalent to. Prior to the Protoindustrial Age, recipes apart from those noted below are generally similar to Vanilla, even if progression has been changed ([https://1710-wiki.terrafirmacraft.com/Crafting_Differences](https://1710-wiki.terrafirmacraft.com/Crafting_Differences)).

This should be implemented in-game regardless of planning, ideally age by age until all ages are complete and documented. [WIP] - Refactor Documentation to be Stone Age, Metal Age, Protoindustrial Age

I. Stone Age. (Wooden Tools).

1. Stone Tools.

- Flint Axe: Flint Knapping
- Flint Hammer: Flint Knapping
- Flint Hoe: Flint Knapping
- Flint Javelin: Flint Knapping
- Flint Knife: Flint Knapping
- Flint Shovel: Flint Knapping
- Straw: Flint Knife Head + Tall Grass
    - Fibre: 16 Straw (dropped on ground) > 1 Fibre Rope
- Stone Axe: 1 Flint Axe, 1 Fibre Rope, 1 Stick > 1 Stone Axe
- Stone Hammer: 1 Flint Hammer, 1 Fibre Rope, 1 Stick > 1 Stone Hammer
- Stone Hoe: 1 Flint Hoe, 1 Fibre Rope, 1 Stick > 1 Stone Hoe
- Stone Javelin: 1 Flint Javelin, 1 Fibre Rope, 1 Stick > 1 Stone Javelin
- Stone Knife: 1 Flint Knife, 1 Fibre Rope, 1 Stick > 1 Stone Knife
- Stone Shovel: 1 Flint Shovel, 1 Fibre Rope, 1 Stick > 1 Stone Shovel

2. Fire/Materials.

- Firepit: 2 Sticks
    - Campfire: 2 Logs, 4 Sticks, 8 Straw, 1 Firepit > 1 Campfire
        - 8 Straw (dropped on ground) > 1 Tinder
        - 4 Sticks > 1 Kindling
        - 2 Logs > 1 Log Pile
- Hide: 1 (leather) Raw Hide, 1 Stone Knife/3 Flint Knife > 1 Hide (Later knives can be reused multiple times at a Crafting Bench)
- Peat: Flint Shovel + (4% Random Chance drop from Dirt) > Peat (mud)
- Peat: (Any) Shovel other than Flint + (8% Random Chance drop from Dirt) > Peat (mud) STOPPED HERE
    - Torch: 1 Peat, 1 Fibre Rope, 1 Sticks > 1 Unlit Torches/1 Charcoal, 1 Fibre Rope, 1 Sticks > 2 Unlit Torches
- Thatch: 4 Straw, 2 Fibre Rope > 1 (hay_bale) Thatch
    - 4 Straw (dropped on ground) > 1 Bundle of Thatch
- Split Logs: 1 Log + 1 Stone Axe/4 Flint Knife > 4 Split Logs (Later axes can be reused multiple times at a Crafting Bench)
    - Note. Logs cannot be placed by the player unless turned into a log pile.
    - Log Pile: 4 Split Logs > 1 Log Pile

3. Pottery Culture.

- Bowl Mould: Clay Shaping > 1 Ceramic Bowl Mould
    - 1 Bowl Mould, 1 Campfire, 1 Firepit > Ceramic Bowl
- Ceramic Vessel Mould: Clay Shaping > 1 Ceramic Vessel Mould
    - 1 Ceramic Vessel Mould, 1 Campfire, 1 Firepit > 1 Ceramic Vessel. Stores 4 Inventory Slots when placed.
- Clay Jug Mould: Clay Shaping > 1 Clay Jug Mould
    - 1 Clay Jug Mould, 1 Campfire, 1 Firepit > 1 Clay Jug. (Thirst plugin). Stores and carries water.
- Large Vessel Mould: Clay Shaping > 1 Large Vessel Mould
    - 1 Large Vessel Mould, 1 Campfire, 1 Firepit > 1 Large Vessel. Stores 9 Inventory Slots when placed.
- Ceramic (Mould): Campfire + 1 Ceramic (Any Type) Mould > 1 Ceramic (Mould)
- (Using Pit Kiln): 1 Ceramic (Any Type) Mould, 4 Log > 1 Ceramic (Mould)

4. Food [WIP].

During the Stone Age, gathered food is primarily cooked around a Campfire.

II. Metal Age.

- Anvils. All Anvils are represented as Slimefun machines. They require a Hammer to use.
    - Stone Anvil: 7 Stone > 1 Stone Anvil
    - Copper Anvil: 7 Copper Double Ingots > 1 Copper Anvil
- Buckets and Sluices.
    - Sluice: 3 Sticks, 3 Lumber > 1 Sluice
    - (Using Sluice): (Up to 50 Gravel/Sand), Water Bucket > Following Chances for Ore:
        - 0,238% Chance: Acanthite
        - 0,577% Chance: Anthracite
        - 0,255% Chance: Arsenopyrite
        - 0,475% Chance: Baryte
        - 0,560% Chance: Bauxite
        - 0,850% Chance: Beryl
        - 0,492% Chance: Bitumen
        - 0,340% Chance: Bornite
        - 0,374% Chance: Cassiterite
        - 0,509% Chance: Chalcocite
        - 0,425% Chance: Chalcopyrite
        - 0,408% Chance: Chromite
        - 0,102% Chance: Cinnabar
        - 0,272% Chance: Cobaltite
        - 0,170% Chance: Coltan
        - 0,510% Chance: Cooperite
        - 0,442% Chance: Fluorite
        - 0,323% Chance: Galena
        - 0,544% Chance: Hematite
        - 0,390% Chance: Ilmenite
        - 0,289% Chance: Kimberlite
        - 0,595% Chance: Lignite
        - 0,527% Chance: Magnetite
        - 0,170% Chance: Malachite
        - 0,680% Chance: Molybdenite
        - 0,850% Chance: Placer Gold
        - 0,119% Chance: Quartz Gold
        - 0,153% Chance: Nitre
        - 0,357% Chance: Pentlandite
        - 0,221% Chance: Pyrolusite
        - 0,458% Chance: Quartz Sand
        - 0,340% Chance: Ruby
        - 0,187% Chance: Scheelite
        - 0,136% Chance: Sperry
        - 0,204% Chance: Sphalerite
        - 0,170% Chance: Uraninite
        - 0,306% Chance: Wolframite
- Dyeing and Tanning.
- Fabric.
- Loom: 7 Lumber, 1 Stick (SF Machine)
- (Using Loom): 16 Wool Yarn > 1 Wool Cloth
- (Using Loom): 24 String > 1 Silk Cloth
- (Using Loom) 12 Fibre Rope > 1 Burlap Cloth
- Food Processing and Preservation.
- Metalworking.
    - Generic Recipes (Applies to all Metals)
    - (Using Anvil) Ingot: 1 Liquid Copper Ceramic Mould > 1 (Any Metal) Ingot
    - (Using Anvil) Double Ingot: 2 (Any Metal) Ceramic Mould, 1 Flux > 1 (Any Metal) Double Ingot
    - (Using Anvil) Sheet: 1 (Any Metal) Ingot > 1 (Any Metal) Sheet
    - (Using Anvil) 2 (Any Metal) Sheets, 1 Flux > 1 (Any Metal) Double Sheet
    - (Using Anvil) Tuyere: 1 (Any Metal) Double Sheet > 1 Tuyere
    - (Using Anvil) Copper Double Ingot: 2 Liquid Copper Ceramic Vessels/Moulds, 1 Flux > 1 Copper Double Ingot
    - (Using Anvil) Copper Ingot: 1 Liquid Copper Ceramic Vessel/Mould > 1 Copper Ingot
    - (Using Anvil) Arsenical Bronze Double Ingot: 2 Liquid Arsenical Bronze Ceramic Vessels/Moulds, 1 Flux > 1 Arsenical Bronze Double Ingot
    - (Using Anvil) Arsenical Bronze Ingot: 1 Arsenical Bronze Ceramic Vessel/Mould > 1 Arsenical Bronze Ingot
    - Borax: (Any) Shovel + (1% Random Chance drop from Red Sand) > Borax
    - Bellows: 6 Lumber, 2 Leather, 1 (Any Metal) Tuyere > 1 (Any Metal) Bellows
    - Flux: 1 (Any) Hammer, 1 Borax > 6 Flux
    - Bricks (Using Kiln): 4 Clay, 1 Charcoal > 4 Bricks; 4 Clay, 2 Log > 4 Bricks
    - Mud Bricks: 2 Clay, 2 Sand > 4 Mud Bricks
    - Flux: 1 (Any) Hammer, 1 Calcite > 2 Flux
    - Flux: 1 (Any) Hammer, 1 Chalk > 2 Flux
    - Flux: 1 (Any) Hammer, 1 Dolomite > 2 Flux
    - Flux: 1 (Any) Hammer, 1 Limestone > 2 Flux
    - Flux: 1 (Any) Hammer, 1 Marble > 2 Flux
- Forging:

All recipes require either Charcoal, Coal (different grades yield different efficiency), or Coke, within a smelting machine, with the exception of Copper which is open air.

Liquid metals require Tongs to handle, or the user will take 1 heart of damage for each liquid metal item they hold in their inventory. Wooden Tongs do not work on liquid metals after Arsenical Bronze.

- Wooden Tongs: 6 Sticks, 1 Fibre Rope > 1 Wooden Tongs (Copper)
- Tongs: 4 Sticks, 2 Copper Sheets, 1 Fibre Rope > 1 Tongs (Arsenical Bronze+)
    - Copper (Enchanted Wooden Tools)
        - Sources:
            - Native Copper: (Any) Shovel + (1% Random Chance drop from Dirt) > 1 Native Copper (cow_spawn_egg)
            - Tetrahedrite: (Any) Shovel + (2% Random Chance drop from Stone) > 1 Tetrahedrite
            - Malachite: (Any) Shovel + (1% Random Chance drop from Stone) > 1 Malachite (goat_spawn_egg)
        - Smelting:
            - Copper: Native Copper/Malachite/Tetrahedrite Ceramic Vessel (in Campfire) > Liquid Copper Ceramic Vessel
            - (Using Crucible Forge) Copper: Native Copper/Malachite/Tetrahedrite + 1 Ceramic Mould > 1 Liquid Copper Ceramic Mould
        - Smelting Machines:
            - Campfire (see previous crafting recipe)
            - Kiln: 8 Mud Bricks > 1 Kiln
    - Arsenical Bronze (Stone Tools)
        - Smelting:
            - Arsenical Bronze: 3 Tetrahedrite Ceramic Vessel (in Campfire) > 1 Liquid Arsenical Bronze Vessel
            - Arsenical Bronze: 2 Tetrahedrite Ceramic Vessel (in Pit Kiln) > 1 Liquid Arsenical Bronze Vessel
        - Smelting Machines:
            - Charcoal Clamp: 16 Log, 16 Dirt > 1 Charcoal Clamp
                - Charcoal: 16 Log > 8 Charcoal
            - Pit Kiln: 10 Straw, 8 Sticks, 8 Log
    - Bronze (Enchanted Stone Tools)
        - (Using Crucible Kiln) Smelting:
            - 2 Bornite, 1 Cassiterite, 1 Flux, 1 Ceramic Mould (in Crucible Kiln) > 1 Liquid Bronze Mould
            - 3 Malachite, 1 Cassiterite, 1 Flux, 1 Ceramic Mould (in Crucible Kiln) > 1 Liquid Bronze Mould
            - 2 Chalcocite, 1 Cassiterite, 1 Flux, 1 Ceramic Mould (in Crucible Kiln) > 1 Liquid Bronze Mould
            - 4 Chalcopyrite, 1 Cassiterite, 1 Flux, 1 Ceramic Mould (in Crucible Kiln) > 1 Liquid Bronze Mould
        - Smelting Machines:
            - Crucible Kiln
                - Kaolinite: (5% Random Chance drop from Clay) > 1 Kaolinite
                - Mortar and Pestle: 1 Ceramic Bowl + 1 Flint
                - (Using Mortar and Pestle) Graphite Powder: 1 Graphite > 4 Graphite Powder
                - (Using Mortar and Pestle) Kaolinite Powder: 1 Kaoliniite > 4 Kaolinite Powder
                - Fire Clay: 1 Clay, 4 Kaolinite Powder, 4 Graphite Powder
                - Crucible Mould: 7 Fire Clay > 1 Crucible Mould
                - (Using Pit Kiln): 1 Crucible Mould, 1 Charcoal > 1 Crucible
                - Kiln: 16 Mud Bricks
                - Crucible Kiln: 1 Crucible, 1 Kiln > 1 Crucible Kiln
    - Wrought Iron (Iron Tools)
        - Smelting:
            - 3 Hematite, 1 Flux, 1 Ceramic Mould (in Bloomery) > 1 Liquid Wrought Iron Mould
            - 3 Magnetite, 1 Flux, 1 Ceramic Mould (in Bloomery) > 1 Liquid Wrought Iron Mould
        - Smelting Machines:
            - Bloomery
                - Bloomery Core: 8 Double Bronze Sheets > 1 Bloomery Core
                - Bloomery: 1 Bloomery Core, 8 Stone Bricks > 1 Bloomery
    - Carburised Iron (Enchanted Iron Tools)
        - Smelting:
            - 1 Wrought Iron Ingot, 1 Charcoal Block, 1 Ceramic Mould > 1 Liquid Carburised Iron Mould
        - Smelting Machines:
            - Charcoal Forge
                - Chimney: 6 Bricks > 1 Chimney
                - Charcoal Block: 9 Charcoal > 1 Charcoal Block
                - Charcoal Forge: 1 Crucible, 1 Bellows, 1 Chimney, 6 Bricks > 1 Charcoal Forge
- Steel (Diamond Tools)
    - Smelting:
        - (Using Blast Furnace) 3 Iron Ore, 1 Flux, 2 Charcoal Blocks, 1 Ceramic Mould > 1 Liquid Pig Iron Mould
        - (Using Finery Forge) 1 Liquid Pig Iron Mould, 1 Charcoal Blocks, 1 Ceramic Mould > 1 Liquid Steel Vessel
    - Smelting Machines:
        - Blast Furnace (Pig Iron)
            - Blast Furnace Core: 8 Wrought Iron Double Sheets, 1 Crucible > 1 Blast Furnace Core
            - Blast Furnace: 1 Blast Furnace Core, 1 Bellows, 1 Chimney, 6 Bricks > 1 Blast Furnace
        - Finery Forge (Natural Steel)
            - Finery Forge: 5 Bricks, 2 Bellows, 1 Charcoal Block, 1 Wrought Iron Hammer > 1 Finery Forge
- High-Carbon Steel (Enchanted Diamond Tools)
    - Smelting:
        - (Using Crucible Furnace) 2 Steel Ingots, 1 Anthracite, 1 Flux, 1 Ceramic Mould > 1 Liquid High-Carbon Steel Vessel
        - (Using Crucible Furnace) 2 Steel Ingots, 1 Graphite, 1 Flux, 1 Ceramic Mould > 1 Liquid High-Carbon Steel Vessel
    - Smelting Machines:
        - Crucible Furnace:
            - Furnace: 8 Bricks > 1 Furnace
            - Crucible Furnace: 2 Crucibles, 1 Furnace, 1 Chimney > 1 Crucible Furnace
- Tempered Steel (Netherite Tools)
    - Smelting:
        - (Using Tempering Hearth): 1 High-Carbon Steel Ingot, 1 Charcoal > 1 Tempered Steel Ingot
    - Smelting Machines:
        - Tempering Hearth (modifies High-Carbon Steel)
            - Tempering Hearth: 6 Bricks, 1 Furnace, 1 Charcoal Block, 1 Wrought Iron Bucket > 1 Tempering Hearth

- Moulds.  
    Moulds produce tool heads after smelting, they must be combined with a Wooden Handle to produce an actual tool.
- Axe Mould
- Chisel Mould
- Geologist’s Mould
- Hammer Mould
- Hoe Mould
- Javelin Mould
- Knife Mould
- Mace Mould
- Pickaxe Mould
- Saw Mould
- Shovel Mould
- Sword Mould
- Scythe Mould

- Research [WIP].
    - 1. Writing (Clay Bullae, Tablets, Chisels)
        - Reed Pen: 2 Straw, 1 Reed Pen
        - (Using Inscribing Station and a Reed Pen): 4 Clay > 1 Clay Tablet
        - Archives: 6 Lumber
        - (Using Archives): 1 Clay Tablet > 1 Bottle of Experience, 1 Clay Tablet
    - 2. Papermaking (Papermaking, Pens, Vellum)
    - 3. Bookbinding (Lacquer, Leather, String)
    - 4. Printing (Engraving, Ink, Moveable Type)
- Slimefun.
    - Crafting Bench: 9 Lumber > 1 Crafting Bench
    - Dispenser: 1 Anvil > 1 Dispenser
- Stoneworking. (Uses Chisel)
- Tools.

- (Using Carpenter’s Table) 1 Stick > 1 Wooden Handle
- 1 Wooden Handle + 1 (Any Tool Metal) Tool Head > 1 (Any Tool Metal) Tool

- 1 Liquid Copper Ceramic Vessel/Mould + 1 Tool Mould > 1 Copper Tool Head
- 1 (Any Tool Metal) Ceramic Mould + 1 Tool Mould > 1 (Any Tool Metal) Tool Head
- Woodworking (Uses Saw).
- Replaced Crafting Recipes.
- Disabled: Wooden Tools and Weapons, Dyes, Planks, Stairs, Slabs, Fences and Fence Gates, Torches, Minecarts, Furnaces, Wood Slabs, Leather Armour, Sticks, Bonemeal, Wood Button, Wool Block. [WIP]
    - Dyes. (W/B + RYB system)
    - White Dye: Bone White, Lead White, Chalk White
    - Light Grey Due:
    - Gray Dye
    - Black Dye: Carbon Black, Charcoal
    - Brown Dye
    - Red Dye: Carmine/Vermilion
    - Orange Dye: Red Dye + Yellow Dye, Ochre
    - Yellow Dye: Weld
    - Lime Dye
    - Green Dye
    - Cyan Dye
    - Light Blue Dye
    - Blue Dye: Woad
    - Purple Dye
    - Magenta Dye
    - Pink Dye
    - Metal Recipes.
    - Bucket: 5 Wrought Iron > 1 Bucket
    - Flint and Steel: 1 Wrought Iron/1 Steel Ingot, 1 Flint > 1 Flint and Steel
    - Minecart: 5 Wrought Iron > 1 Minecart
    - Minecart Rail: 4 Wrought Iron, 2 Lumber > 64 Minecart Rail
    - Powered Rail: 4 Redstone, 2 Wrought Iron, 2 Lumber > 64 Powered Rail
    - Shears: 2 Wrought Iron > 1 Shears
    - Misc Recipes.
    - Barrel: 7 Lumber > 1 Barrel
    - Crafting Barrel: 1 Barrel > 1 Crafting Barrel
    - Mortar: 2 Flux, 1 Sand > 16 Mortar
    - (Using Crafting Barrel) Small Raw Hide: 1 Water Bucket, 2 Flux, 1 Raw Hide > 1 Small Prepared Hide
    - (Using Crafting Barrel) Medium Raw Hide: 1 Water Bucket, 2 Flux, 2 Raw Hide > 1 Medium Prepared Hide
    - (Using Crafting Barrel) Large Raw Hide: 4 Raw Hide, 2 Flux > 1 Large Prepared Hide
    - (Using Crafting Barrel) Tannin: 1 Water Bucket, 1 (Oak, Birch, Chestnut, Douglas Fir, Hickory, Maple or Sequoia) Log > 1 Tannin Bucket
    - (Using Crafting Barrel) Leather: 1 Tannin Bucket, 1 Small Prepared Hide > 1 Leather; 1 Tannin Bucket, 1 Medium Prepared Hide > 4 Leather; 1 Tannin Bucket, 1 Large Prepared Hide > 8 Leather
    - Quern: 3 Smooth Stone, 3 Raw Stone, 1 Stick > 1 Quern
    - (Using Quern) 1 Graphite > 4 Graphite Powder
    - (Using Quern) 1 Kaolinite > 4 Kaolinite Powder
    - (Using Quern): 1 Rock Salt > 4 Salt
    - (Using Furnace) Copper Rod: 4 Copper Sheets, 4 Logs/1 Charcoal/Coal/Coal Coke > 1 Copper Rod
    - (Using Furnace) Glass: 1 Silica Sand > 1 Glass
    - Wire Drawer: 2 Steel Ingots, 1 Copper Rod, 1 Steel Plate, 1 Stick > 1 Wire Drawer
    - Drawplate: 8 Wire Drawers > 1 Drawplate
    - (Using Drawplate) Redstone Dust: 3 Liquid Copper Ceramic Moulds > 4 Redstone Dust
    - Arrows: 1 Feather, 1 Stick, 1 Flint > 8 Arrows
    - Bow: 3 Wool Yarn, 3 Sticks > 1 Bow
    - Gunpowder: 1 Charcoal, 1 Saltpetre Powder, 1 Sulphur Powder > 2 Gunpowder
    - Fishing Rod: 3 Sticks, 2 Wool Yarn > 1 Fishing Rod
    - (Using Campfire) Torches: 2 Unlit Torches > Torches
    - Stone Recipes.
    - (Using Stonecutter with Chisel) Bricks: 5 Fire Brick, 4 Mortar > 2 Fire Bricks
    - (Using Stonecutter with Chisel) Brick Wall: 3 Stone Brick, 3 Mortar > 3 Brick Wall
    - (Using Stonecutter with Chisel) Cobblestone: 4 (Any Stone) > 4 Cobblestone
    - (Using Stonecutter with Chisel) Stone Brick: 1 (Any Stone) > 1 Stone Brick
    - (Using Stonecutter with Chisel) Stone Bricks: 5 Stone Brick, 4 Mortar > 4 Stone Bricks
    - Wood Recipes.
- Bed: 3 Lumber, 3 Wool Cloth/Silk Cloth > 1 Bed
- Carpet: 2 Wool Cloth/Silk Cloth > 2 Carpet
- Chest: 8 Lumber > 1 Chest
- Door: 6 Lumber > 1 Door
- Item Frame: 8 Sticks, 1 Leather > 1 Item Frame
- Sign: 6 Lumber, 1 Stick > 1 Sign
- Trapdoor: 6 Lumber > 1 Trapdoor
- Painting: 8 Sticks, 1 Wool Cloth, 1 Red Dye, 1 Yellow Dye, 1 Blue Dye > 1 Painting
- Wooden Bucket: 5 Lumber > 1 Wooden Bucket (can only carry water)
- Wood Planks: 4 Lumber > 1 Wood Plank

III. Protoindustrial Age.

1. Slimefun Machines.

2. Slimefun Production Chains.