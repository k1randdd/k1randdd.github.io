  
  // *** Array of all main links: [<link-description-text>, <page-name>] ***
  all_main_links = [
        ["Home Page",
         "Two Views"],
        ["The Oceans",
         "The Oceans"],
        ["The Key Facts",
         "Key Facts"],
        ["What can we do ?",
         "What can we do"],
        ["More information",
         "Information Sources"],
  ];

  // *** Array of page information: { name, audio, text_page, images_page, links } ***
  //     - if links is empty i.e. "links": [], then use "all_main_links" list defined above,
  //       so you can have a specific list of related links, or the full default set.
  pages = 
  [
    { "name": "The Oceans",
      "audio": "sounds/ocean_waves_1.mp3",
      "text_page": "articles/the_oceans.html", 
      "links": []
    },
    { "name": "Two Views",
      "audio": "sounds/slurping_straw_1.mp3",
      "text_page": "articles/two_views.html", 
      "links": []
    },
    { "name": "Key Facts",
      "audio": "sounds/plastic_cups_1.mp3",
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
         "Two Views"]
      ]
    },
  ];
