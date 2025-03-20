  
  // *** Array of all main links: [<link-text>, <page-name>] ***
  all_main_links = [
        ["Opposing Views",
         "Two Views"],
        ["The Key Facts",
         "Key Facts"],
        ["What can we do ?",
         "What can we do"],
        ["More information",
         "Information Sources"],
        ["Back to Home Page",
         "Introduction"]
  ];

  // *** Array of page information: { name, audio, text_page, images_page, links } ***
  //     - if links is empty i.e. "links": [], then use "all_main_links" list defined above,
  //       so you can have a specific list of related links, or the full default set.
  pages = 
  [
    { "name": "Introduction",
      "audio": "https://cdn.glitch.global/44b58a77-1e5b-4a08-b1b6-be77b32bbb89/open-the-gate-190234.mp3?v=1711379125321",
      "text_page": "articles/introduction.html", 
      "links": []
    },
    { "name": "Two Views",
      "text_page": "articles/two_views.html", 
      "links": []
    },
    { "name": "Key Facts",
      "text_page": "articles/key_facts.html", 
      "links": []
    },
    { "name": "What can we do",
      "text_page": "articles/what_can_we_do.html", 
      "links": []
    },
    { "name": "Information Sources",
      "text_page": "articles/information_sources.html", 
      "links": [
        ["Home Page",
         "Introduction"]
      ]
    },
  ];
