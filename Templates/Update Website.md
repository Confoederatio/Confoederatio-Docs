<%*
/**
 * REFINED POST-EXPORT SCRIPT
 * Only touches .html files. Skips media and library folders.
 */

const fs = require('fs').promises;
const path = require('path');

// 1. SET YOUR FOLDER PATH HERE
const exportPath = "D:/Project 1755 - Confoederatio Docs/docs";

async function runUpdate() {
    console.log("--- Starting Website Asset Update ---");
    new Notice("Running update (Check Console for logs)...");
    
    try {
        const files = await getFiles(exportPath);
        let updatedCount = 0;

        for (const filePath of files) {
            // STRICT FILTERS:
            // 1. Must be .html
            // 2. Must NOT be inside the site-lib folder
            if (filePath.toLowerCase().endsWith('.html') && !filePath.includes('site-lib')) {
                
                let content = await fs.readFile(filePath, 'utf8');
                
                // Only modify if it hasn't been touched yet
                if (!content.includes('publish.js')) {
                    const depth = path.relative(path.dirname(filePath), exportPath);
                    const relPrefix = depth ? depth.replace(/\\/g, '/') + "/" : "./";
                    
                    const cssTag = `<link rel="stylesheet" href="${relPrefix}publish/publish.css">`;
                    const jsTag = `<script src="${relPrefix}publish/publish.js" defer></script>`;
                    
                    const newContent = content.replace('</head>', `${cssTag}\n${jsTag}\n</head>`);
                    
                    // Verify the replacement actually happened
                    if (newContent !== content) {
                        await fs.writeFile(filePath, newContent, 'utf8');
                        console.log(`Updated: ${path.basename(filePath)}`);
                        updatedCount++;
                    }
                }
            }
        }
        console.log(`--- Finished. Updated ${updatedCount} files. ---`);
        new Notice(`Done! Successfully updated ${updatedCount} HTML files.`);
    } catch (err) {
        console.error("Script Error:", err);
        new Notice("Error occurred. See developer console (Ctrl+Shift+I).");
    }
}

async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}

await runUpdate();
%>