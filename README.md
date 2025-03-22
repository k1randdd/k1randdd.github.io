# Introduction

- This GitHub project builds a website looking at the subject of "Marine Animal Cruelty"
- The following sections describe:
  - the development decisions
  - the structure of the project
  - how to maintain or extend the website

# Research

## Identify sources of information

Search the internet or local library for:

- official or corporate websites
- public reports
- news articles

## Group information found by general headings

Categorise the information sources found: 

- facts,
- news reports,
- opinions,
- organisations,
- regional projects

## Create a content library

Copy-and-paste useful content, for conversion into web pages with a structure later

- Create an Excel workbook "Marine life Cruelty.xls"
  - Tabs: each tab is a potential individual web page
    - most articles are text-only
      - paragraphs, bullet points, tables
    - some articles have mostly charts or images with a caption
  - Tab Order: this suggests a rough navigation sequence,
    and the user should be free to move to any article
    (not just related ones) in any order
- So we have collected a set of inter-related articles,
  stored in a content library (an Excel file of tabs),
  which can be added to over time
  - ready to be converted into a website of interconnected pages and datasets.

# Develop a method to build a public website, based on a GitHub repository

Search GitHub help pages for guidance

- The decision was made to build a project linked to GitHub Pages:
  - Follow the instructions, to create a new public Git Repository: "<username>.github.io"
    - add a README.md
    - add an "index.html"  = the start page
  - Follow the guide to adjust the repository settings, so that a GitHub page is generated
- Set up a process to develop the website on my local PC, and publish
  - Install Git for Windows  on my PC
  - use the "git clone" command, to save a local drive sub-folder,
    linked to the remote GitHub project
  - Create an access token, lasting two months, to allow local access to Git without using my GitHub password
  - Install PyCharm IDE on my local PC
    - create a new PyCharm project, linked to the newly-created git-cloned sub-folder
- I now have a method to edit files in a PyCharm project,
  then Commit the changes, and Push the changes to the remote Git Repository.

# Grant access for team members, to collaborate on the project

- Follow the instructions found at:
  `https://docs.github.com/en/account-and-profile/...`
  - to invite team members by their GitHub ID, to access the Git Repository,
  - to collaborate on the project
- All members of the team should now be able to:
  - make changes to their own local copy of the Git Repository,
  - then Commit the changes, 
  - and Push the changes to the remote Git Repository,
    - resolving any change conflicts (if two or more members are editing the same file).

# Website Design

## Files and Folder Structure

Build a file and sub-folder structure, so that team members can:

- place common files in shared sub-folders
- manage their own files (articles, images, styles, scripts)
- edit shared files

At the root level, there must be an "index.html" start page

The content library "Marine life Cruelty.xls" suggests:

| Sub-Folder  | Purpose | Files |
| ----------- | ------- | ----- |
| articles | individual web pages | content pages, some with charts and other images |
| images | image files | _<filename>_`.jpg` & _<filename>_`.png` files, and perhaps other image formats |
| scripts | javscript files | _<filename>_`.js` |
| styles | style files | _<filename>_`.css` |
| sounds | audio files | _<filename>_`.mp3` - optional: if we wish to play a background sound on presenting a page |

Thus the website file structure is:

```
index.html
/scripts/_<filename>_.js
/articles/_<filename>_.html
/images/_<filename>_.png
        _<filename>_.jpg
/styles/_<filename>_.css
/sounds/_<filename>_.mp3
```

## Web Page Layout

(ideally for any target device's screen size)

- The website's file and sub-folder structure is built
- We have a collection of related articles to present, with navigation links
- I have decided to present the website with the following layout:

Three areas:

- Banner
- navigation links
- article page

|.                                                        |
|            Banner- Title    (help page links)           |
|.                                                        |
-----------------------------------------------------------
|   <links to related articles, i.e. navigation>          |
-----------------------------------------------------------
|.                                                        |
|.                                                        |
|.                                                        |
|.                                                        |
|                     <article-page>                      |
|                                                         |
|               (text, images, links, etc.)               |
|.                                                        |
|.                                                        |
|.                                                        |
|.                                                        |


- a CSS style rule on the IMG (selector: `.fills_screen_width`) ensures that images are a maximum of 90% of the screen width
  - thus on a narrow view as seen on a mobile phone, the images are shrunk to fit the screen width 

Thus the content can be presented to users on devices with different screen sizes.

# Creating Content on the Website

## Datasets

In the process of researching infromation on the subject,
I have identified various data sources.

- I explored storing them as `.csv` text files, but was unable to find a way to load them into variables in javascript.
- There are ways to store tables in JSON format (`.json` text files) and parse them into javascript variables, however the coding was very complex.
- the simplest method is to store tables as arrays in javascript files
  - programs can be written to generate the array text, or edit the javascript files directly - explained later
 
Data sources have the following structures:

### A list of `[_<hyperlink-text>_, _<hyperlink-url>_]`

For example:

- Video sources
- Research Orgnisations

This is stored in a javascript text file

- for example, file `/scripts/video_sources.js` consists of:



```
video_sources = [

  ["National Geographic: How We Can Keep Plastics Out of Our Ocean", "https://www.youtube.com/watch?v=HQTUWK7CM-Y&t=3s"],

  ["Why We Need to Stop Plastic Pollution in Our Oceans FOR GOOD", "https://www.youtube.com/watch?v=Yomf5pBN8dY&t=2s"],

];

```

- This table contains two records, and can be edited to: add/remove records, and change their order.
- Javascript programs can retrieve this table in a variable `video_sources`, using the HTML code: 
```
<script src="_relative-pathpath_/scripts/video_sources.js"></script>
```

### A list of: `[_<hyperlink-text>_, _<hyperlink-url>_, _<website-description>_]`

For example:

- Information sources: links to external websites, plus a description of the source.

Javascript programs can retrieve this table in a variable, for example using the HTML code: 
```
<script src="_relative-pathpath_/scripts/information_sources.js"></script>
```

### A list of `[_<description-text>_]` 

- the text can include some basic HTML formatting: `<b></b>`, `<i></i>`, `<u></u>`

For example:

- Key Facts

This is a simple one-dimensional array of text values.

Javascript programs can retrieve this table in a variable, for example using the HTML code: 
```
<script src="_relative-pathpath_/scripts/key_facts.js"></script>
```

### A list of Images

- a list of images to be presented on a web page
- each record consists of:
  - `[_<image-file-path>_, _<image-width-in-pixels>_, _<image-height-in-pixels>_, _<image-description-text>_]`

One example record is:
```
["../images/seahorse_plastic.jpg", "351","234", "Seahorse swimming around plastic"]
```

- the relative path to the `JPEG` image file
- the image width in pixels: 351
- the image height in pixels: 234
- the description text to show in a caption alongside the image on the screen

## Articles

## Navigation

## Audio

# Website Maintenance and Development

## Datasets

## Articles

## Navigation

## Audio

