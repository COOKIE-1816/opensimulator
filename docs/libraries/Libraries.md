#libs #parts
Libraries are a ZIP files **adding new parts** to the [[Inventory]].

# Library list
Libraries list is stored in `/libraries.json` file in the project directory. It contains an array `Libraries`, which contains [paths]() (enables to load library from project folder, but not recommended) or URL addresses to the library ZIP file, directory or a Git repository.
```js
Libraries[0] = `Dir: ${path}`; // Directory
Libraries[1] = `Zip: ${path}`; // Zip archive
Libraries[2] = `Git: ${path}`; // Git repository
```

```json
{
	"Libraries": [
		// From URL
		"Dir: https://example.com/myLib",     // Directory
		"Zip: https://example.com/myLib.zip", // Zip archive
		"Git: https://example.com/myLib.git", // Git repository
		// From path
		"Dir: /lib/myLib",                    // Directory
		"Zip: /lib/myLib.zip"                 // Zip archive
	]
}
```

# Library files
```
- root directory
	- lib.json - library metadata (json)
	- parts - directory containing parts
		- part - directory containing files of a part
			- part.json - part information (json)
			- part.md - OPTIONAL: part description (markdown)
			- svg - directory containing SVG files
				- part.svg - part canvas image (svg)
				- part-schematics.svg - part canvas schematics (svg)
			- icon.png - part icon (png)
			- api.js - part API (js)
```

## Library metadata
Library metadata contains information about library. That are:
*  **Author information** - author name, author email
*  **License** - license name or URL address
*  **Repository** (GIT)
*  **Library name, description, version and release**.

```json
{
	"Meta": {
		"author_name": "",
		"author_email": "",
		
		"license": "",
		"gitRepository": "",
		
		"library_name": "",
		"library_version": "",
		"library_release": 0
	}
}
```

## Part directory
### Part information
> *futhurer reading: [parts]()*.

Part metadata stores information like:
* **ID** - part "*name*" used by document.
* **Identifier** - part identifier to identify part. Like resistor has identifier "R1", "R2", ... where the number specifies the specific part.
* **Part name** - how partition is called. For example, "*Resistor*".
* **Has API?** - specifies if part has its API.
* **Category** - category, for example, "*Display*"
* **Type** - specifies, if part is active, pasive or constructive
* **Is advanced circuit?** - specifies if part is advanced circuit like "*LCD display*" or for example, some module. **BUT NOT IC**.
* **Is IC?** - specifies if part is integrated circuit (IC).
* **Variants** - specifies one or more variants.
* **Pins** - pinout

### Part description
`/parts/part/part.md` behaves as readme for its part.

### SVGs
The `/parts/part/svg` directory contains two files:
* `part.svg` normal part image used in [default view]().
* `part-schematics.svg` schematics part image used in [schematics view]() and for [generating pinout]().

### Part icon
Part icon displayed in inventory. Recommended image resolution is 64x64 px but official libraries uses 128x128 px resolution. Image width must be equal to height (x:y = 1:1; x = y).

### API
> *futhurer reading: [creating parts API]()*.