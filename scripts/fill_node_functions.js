

function fill_node(node_id, list_name)
{ var node = document.getElementById(node_id)
  html = ""
  for (let i = 0; i < list_name.length; i++) {
    if (list_name[i].length == 3)
    { html += "<div><a target=\"_blank\" href=\"" + list_name[i][1] + "\">" + list_name[i][0] + "</a><p>" + list_name[i][2] + "</p></div>" }
    if (list_name[i].length == 2)
    { html += "<div><a target=\"_blank\" href=\"" + list_name[i][1] + "\">" + list_name[i][0] + "</a></div>" }
    if (list_name[i].length == 1)
    { html += "<div>" + list_name[i] + "</div>" }
  }
  node.innerHTML = html
}

function fill_node_image_gallery(node_id, list_name)
{ var node = document.getElementById(node_id)
  html = ""
  for (let i = 0; i < list_name.length; i++) {
    html += "<figure class=\"image_gallery_thumbnail\"><a target=\"_blank\" href=\"" + list_name[i][0] + "\">";
    html += "<img src=\"" + list_name[i][0] + "\" alt=\"" + list_name[i][1] + "\">";
    html += "<figcaption>" + list_name[i][1] + "</figcaption>";
    html += "</a></figure>";
  }
  node.innerHTML = html
}
