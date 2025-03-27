# Introduction

 * This GitHub project builds a website looking at the subject of "Marine Animal Cruelty"
 * The following sections describe:
   * the development decisions
   * the structure of the project
   * how to maintain and extend the website

# Research

## Identify sources of information

- [x] Search the internet or local public library for:

 * official or corporate websites
 * public reports
 * news articles

## Group information found by general headings

- [x] Categorise the information sources found: 

 * facts and scientific research,
 * news reports,
 * opinions and debate,
 * government and non-government organisations,
 * regional projects

## Create a content library

- [x] Copy-and-paste useful content, for conversion into web pages with a structure later

- [x] Create an Excel workbook "Marine life Cruelty.xls"
   * Tabs: each tab is a potential individual web page
     * most articles are text-only
       * paragraphs, bullet points, tables
     * some articles have mostly charts or images with a caption
   * Tab Order: this suggests a rough navigation sequence,
    and the user should be free to move to any article
    (not just related ones) in any order
 * So we have collected a set of inter-related articles,
  stored in a content library (an Excel file of tabs),
  which can be added to over time
   * ready to be converted into a website of interconnected pages and datasets.

# Develop a method to build a public website, based on a GitHub repository

 * Search GitHub help pages for guidance

The decision was made to build a project linked to GitHub Pages:

- [x] Follow the instructions, to create a new public Git Repository: "<username>.github.io"
     * add a README.md
     * add an "index.html"  = the start page
- [x] Follow the guide to adjust the repository settings, so that a GitHub web page is generated

Set up a process to:
- develop the website on my local PC,
- publish changes to update the remote Git repository,
- and hence update the public website.

- [x] Install Git for Windows  on my PC
- [x] use the "git clone" command, to save a local drive sub-folder,
    linked to the remote GitHub project
- [x] Create an access token, lasting two months,
  - to allow safe local access to Git, without using my GitHub password
- [x] Edit pages, javascript files and style sheets in NotePad, and check that the following commands succssfully update local changes to the remote  git repository:
```
git init
git add -A .
git status
git commit -m "<change-description>"
git push -u origin main
```
- [x] Install PyCharm IDE on my local PC
- [x] create a new PyCharm project, linked to the newly-created git-cloned sub-folder

 * I now have a method to edit files in a PyCharm project,
  then Commit the changes, and Push the changes to the remote Git Repository.

# Grant access to team members, to collaborate on the project

 * Follow the instructions found at:
  `https://docs.github.com/en/account-and-profile/...`
   * to invite team members by their GitHub ID, to access the Git Repository,
   * to collaborate on the project
 * All members of the team should now be able to:
   * make changes to their own local copy of the Git Repository,
   * then Commit the changes, 
   * and Push the changes to the remote Git Repository,
     * resolving any change conflicts (if two or more members are editing the same file).

# Website Development and Maintenance

## Files and Folder Structure

- [x] Build a file and sub-folder structure, so that team members can:

 * place common files in shared sub-folders
 * manage their own files (articles, images, styles, scripts)
 * collaborate on shared files

At the root level, there must be an "index.html" start page

The content library "Marine life Cruelty.xls" suggests:

| Sub-Folder  | Purpose | Files |
| ----------- | ------- | ----- |
| articles | individual web pages | content pages, some with charts and other images |
| images | image files | filename`.jpg` & filename`.png` files, and perhaps other image formats |
| scripts | javscript files | filename`.js` |
| styles | style files | filename`.css` |
| sounds | audio files | filename`.mp3`  optional: if we wish to play a background sound on presenting a page |

Thus the website file structure is:

```
index.html
/scripts/filename.js
/articles/filename.html
/images/filename.png
        filename.jpg
/styles/filename.css
/sounds/filename.mp3
```

## Web Page Layout

The website's should be presentable on any target device's screen size.

- [x] The website's file and sub-folder structure is built
- [x] We have a collection of related articles to present, with navigation links

 * I have decided to present the website with the following layout:

Three areas:

 * Banner
   * a fixed narrow-height bar at the top of the browser window
 * navigation links
   * a fixed narrow-height band below the banner, to present navigation links
 * article page
   * a variable height area, to present articles

| Banner- Title (help page links)              |
|:--------------------------------------------:|
| <links to related articles, i.e. navigation> |
| <article-page>                               |


- [x] Ensure that large images are shrunk to fit the width on small screens, i.e. mobile devies

 * a CSS style rule on the IMG tag (file: `styles/article.css` selector: `.fills_screen_width`)
   ensures that large images are a maximum of 90% of the screen width
   * thus on a narrow view as seen on a mobile phone, the images are shrunk to fit the screen width

 * an image gallery (a larget set of images) is presented on screens of varying width and height,
   using CSS style rules
   * see the section starting from line `/* ==== Image Gallery styling: START` in style file: `styles/article.css` for details

Thus the content can be presented to users on devices with different screen sizes.

## Datasets

In the process of researching information on the subject,
I have identified various data sources.

 * I explored storing them as `.csv` text files, 
   but was unable to find a way to load them into variables in javascript.
 * There are ways to store tables in JSON format (`.json` text files)
   and parse them into javascript variables, however the coding was very complex.
 * the simplest method is to store tables as arrays in javascript files
   * programs can be written to generate the array text, or edit the javascript files directly.
 
Data sources, held as independent lists declared in javascript files, have the following structures :

### A list of `[`_<hyperlink-text>_`, `_<hyperlink-url>_`]`

For example:

 * Video sources
 * Research Organisations

This is stored in a javascript text file

 * for example, file `/scripts/video_sources.js` consists of:

```
video_sources = [
  ["National Geographic: How We Can Keep Plastics Out of Our Ocean", "https://www.youtube.com/watch?v=HQTUWK7CM-Y&t=3s"],
  ["Why We Need to Stop Plastic Pollution in Our Oceans FOR GOOD", "https://www.youtube.com/watch?v=Yomf5pBN8dY&t=2s"],
];

```

 * This table contains two records, and can be edited to: 
   * add or remove records, 
   * and change their order.
 * HTML page and Javascript programs can retrieve this table in a variable `video_sources`, using the HTML code: 
```
<script src="(relative-pathpath)/scripts/video_sources.js"></script>
```

### A list of: `[`_<hyperlink-text>_`, `_<hyperlink-url>_`, `_<website-description>_`]`

For example:

 * Information sources: links to external websites, plus a description of the source.

HTML page and Javascript programs can retrieve this table in a variable, for example using the HTML code: 
```
<script src="(relative-pathpath)/scripts/information_sources.js"></script>
```

### A list of `[`_<description-text>_`]` 

 * the text can include some basic HTML formatting: `<b></b>`, `<i></i>`, `<u></u>`

For example:

 * Key Facts

This is a simple one-dimensional array of text values.

HTML page and Javascript programs can retrieve this table in a variable, for example using the HTML code: 
```
<script src="(relative-pathpath)/scripts/key_facts.js"></script>
```

### A list of Images (an image gallery)

 * a list of images to be presented on a web page
 * each record consists of:
   * `[`<image-file-path>`, `<image-description-text>`]`

One example record is:
```
["../images/seahorse_plastic.jpg", "Seahorse swimming around plastic"]
```

 * the relative path to the `JPEG` image file
   * (this can also be an absolute URL to an image on the world-wide-web)
 * the description text to show in a caption alongside the image on the screen
 * Note that the image size (with and height in pixels) are _not_ defined in the record;
   * a smaller thumbnail image is presented, with a hyperlink to view the whole image in a new window

- [x] CSS style rules manage the layout of the image gallery, independently of the content, and driven by screen size

There are so many screen sizes on devices in the world.

* the style must be fluid, so that it will fit any image - keeping its aspect ratio.
* the gallery area stretches in height, to handle any number of images.
* it does not matter if the device's orientation is portrait or landscape.
* it uses columns and a fixed thumbnail-image maximum width (400px), 
  * and the heights vary to cope with different image aspect ratios.

* see the section starting from line `/* ==== Image Gallery styling: START` in style file: `styles/article.css` for details

Thus a list of images can be defined in a dataset, that is managed independently of the web-page that will present it

* The dataset can be edited (adding/removing records, and changing their order) within the javascript file
* The HTML page (usually held in the `article/ ` sub-folder) does not need to be changed.

## Scripts

Javascript programs are saved in the sub-folder: ` scripts/ `

The following scripts are saved in that folder:

| Filename                  | Usage                                                                                                                                               |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `navigation.js`           | A list of navigation links for each page: see the later sub-section "Navigation" for details.                                                       |
| `fill_node_functions.js`  | This javascript file holds functions that can be used to convert a dataset into HTML content.                                                       |
| _dataset-name_`_table.js` | Javascript files to declare a dataset as a variable, which can then be used to generate HTML content via function calls to `fill_node_functions.js` |

Scripts can be updated in this sub-folder: ` scripts/ ` as follows:

* Add or update dataset declaration scripts,
  * with file naming convention: _dataset-name_`_table.js`
* Update the script functions held in: `fill_node_functions.js`:
  * these fucntinos fill `DIV` tags on Article HTML pages, with datasets
  * There are currently two functions:
    * `function fill_node(node_id, list_name)`
      * This function builds HTML content, depending on the length of each item in the list:
        * if the item is a single string of text, then generate:
          * <div> text </div>
        * if the item is an array of two strings, then build a hyperlink:
          * `[`<hyperlink-text>`, `<hyperlink-url>`]`
        * if the item is an array of three strings, then build a hyperlink with a description:
          * `[`<hyperlink-text>`, `<hyperlink-url>`, `<website-description>`]`
        * Note that further code can be added, to handle an item containing four or more strings.
    * `function fill_node_image_gallery(node_id, list_name)`
      * This function builds HTML content, for an image gallery.
  * More functions can be added to this javascript file, to generate HTML content in new ways.

## Articles

Articles are saved as web pages in the sub-folder: ` articles/ `

The initial web-page template is:

```
<html>
<head>
<title>Article Title Here</title>
<link rel="stylesheet" href="../styles/article.css">
</head>
<body>
...
</body>
</html>
```

* thus the default stylesheet is: `styles/article.css`
* the `<body>` section can be filled with the following tags:

| Tag  | Purpose |
|----- | ------- |
| `<h1>` ... `</h1>` | Main heading. |
| `<h2>` ... `</h2>` | Sub-heading. |
| `<div id="..." class="...">` ... `</div>` | Text, styled by selectors in the default stylesheet. |
| `<img class="..." src="../images/...jpg" alt="...">` | Images, stored in the default `images/ ` sub-folder. |
| `<script src="../scripts/....js"></script>` | Run a Javascript file in the default `scripts/ ` sub-folder.  |
| `<script> ... </script>` | Run javascript that is embedded within this Article web-page - this can call functions loaded by the line above. |

* pages can also import other stylesheets, if needed.

Content can be generated from datasets instead of being embedded in the HTML page, with styling, by:

* creating a `DIV` section with its own id: `<div id="..." class="...">` ... `</div>`
* calling javascript to load a dataset, and populate the `<div>` by its id

For example, the page: `articles/key_facts.html` generates content from the `key_facts` dataset as follows:

* in the web-page, add the markup: 

```
<div id="key_facts" class="headline_list"></div>
```

  * class `headline_list` will match a selector in the default stylesheet, for presenting a bullet list. 
* near the end of the web-page (before the closing tags: `</body></html>`), add javascript:

```
<script src="../scripts/fill_node_functions.js"></script>
<script src="../scripts/key_facts_table.js"></script>
<script>fill_node("key_facts", key_facts)</script>
```

  * the first line includes functions to be called later
  * the second line loads a javascript file held in the default `scripts/ ` sub-folder, which loads a dataset into the variable: `key_facts`
  * the third line calls a function that was loaded in the first line
    * fill web-page DOM tree node with id: `key_facts` (the DIV element), with the javascript variable: `key_facts` (a list of records)

Thus:
- records can be added/removed/updated in the datasets (in the above example, dataset: `key_facts_table.js`), 
- they are loaded and generated as HTML content with styling,
- the dataset content can be managed without having to edit the article HTML page.

The article web-page ideally only contains headings, `DIV` tags and javascript calls to generate content.

## Navigation

A set of web-pages have been created in the sub-folder: `articles/ `, each page holding:

* headings and sub-headings
* styled lists of content
  * either hand-written lists embedded in the page,
  * or generated by javascript calls to build lists from datasets

Javascript file: `scripts/navigation.js` holds:

| Javascript Variable | Purpose |
| ------------------- | ------- |
| `all_main_links` | A list of all the main links to be presented in the top margin of the browser. |
| `pages` | A list of each page and the links available from that page, plus any audio to play on presenting the page. |

`all_page_links` is a list of records: `[` <page-description-text> `,` <page-name> `]`

For example: `[ "For more information...", "Information Sources" ]`

* The page description can be any text
* The page-name is a unique id in the full set of all pages available in the website
  * these ids refer to `"name"` items in the `pages` list

`pages` is a list of records - a record is a list of name/value pairs. One record is for example:

```
{ "name": "Information Sources",
  "text_page": "articles/information_sources.html",
  "links": [
 ["Home Page", "Two Views"]
 ]
},
```

* `Information Sources` is the page `name` - the unique id for the page, within the set of all pages avaialble in the website.
* `text_page` points to the HTML page to be presented, usually in the realtive folder: `articles/ ` but can even be any public URL.
* `links` is a list of navigation links available from this page, a list of records:
  * `[` <page-description-text> `,` <page-name> `]`
  * in the above example, there is just one link available
    * the decription is _Home Page_
    * the page-name (unique id) is: `Two Views`
  * Note that if the list of links is empty, i.e. `"links": []` is declared, then `all_main_links` is used as the list of navigation links
    * this is a short-hand method for not having to declare repeated common links for each page definition.
    * the majority of the `page` definitions hold: `"links": []`, i.e. use the same set of navigation links on most pages: `all_main_links`
  * Also, on presenting the links in the top margin of the browser:
    * disable any hyperlink to the current page, i.e. do not link the page presented, to itself
    * this is checked in the javascript within the website's start page: `index.html`:
      * for a given page-name, look up the page details: `text_page`, `links`, `audio` (if any)
      * fill the top margin area of the browser with generated navigation links. 

## Audio

Javascript file: `scripts/navigation.js` holds variable `pages`.

Each page records can also have a reference to audio, for example:

```
{ "name": "The Oceans",
  "audio": "sounds/ocean_waves_1.mp3",
  "text_page": "articles/the_oceans.html",
  "links": []
},
```

* the `audio` name/value pair is optional
* in the above example, its value is a reference to an audio file
  * usually stored local to the website, in the `sounds/ ' sub-folder
  * and this can be an absolute URL link to a public audio file on the wordwide web
* Javascript code within the website's start page: `index.html`
  * looks up the page details for a given page name - a unique id
  * `text_page`: this value holds the source HTML page to present 
  * `links` : this value holds the navigation links for this page
  * `audio` : if there is a value, then play the audio file
     * Note that any existing audio play is stopped when the user navigates to a new page - to avoid overlapping audio

Thus audio can be added by:
* storing an audio file in the local `sounds/ ` sub-folder
* adding a name/value pair: `"audio": "`<path-to-audio-file>`",` to the relevant page-name record in: `scripts/navigation.js`
  * (one or more pages can use the same audio file)

Also, audio can be removed by:
* removing the name/value pair: `"audio": "<path-to-audio-file>",` from the relevant page-name record in `scripts/navigation.js`
  * (one or more pages can use the same audio, so check all `"audio"` references)
  * delete the audio file from the local `sounds/ ` sub-folder

## Layout & Style

CSS stylesheets are saved in the sub-folder: ` styles/ `

The following stylesheets are saved in that folder:

* `main.css`
   * Styling for the main website structure - banner, navigation links area, page area.
* `article.css`
  * Styling for Article HTML pages, saved in the sub-folder: ` articles/ `
  * See the earlier sub-section: "Articles" for details of the tags that can have styles attached to them, generally:
    * Headings and sub-headings
    * Bullet lists of datasets (text plus hyperlinks), or hand-written lists
    * Images: one large image, or a list of images (an image gallery)
     
Stylesheets can be updated in this sub-folder: ` styles/ ` as follows:

* Update the `article.css` stylesheet, which presents Article HTML pages, saved in the sub-folder: ` articles/ `:
  * Change existing selectors on tags (`H1`, `H2`, bullet lists, etc.)
  * Add new selectors for new tags
  * See the earlier sub-section: "Articles" for details of the tags that can have styles attached to them
* Update the `main.css` stylesheet, which presents the main website structure - banner, navigation links area, page area:
  * alter the look of the main website
