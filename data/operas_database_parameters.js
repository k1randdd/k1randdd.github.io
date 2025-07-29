//*** Ordered List of: [database-attribute-name, question-text, question-heading, question-score, question-icon]
const questions_order = [
  ["sung_in_language", "What Language is this opera sung in ?", "Language", "5", "&#x1F3A4;"],
  ["setting_period_and_or_location", "Opera setting: period or location", "Setting", "10", "&#x1F3DE;"],
  ["famous_aria_or_song_title", "Name a famous Aria or song in the opera.", "Song", "15", "&#x1F3B9;"],
  ["main_characters", "Main characters in the opera:", "Characters", "20", "&#x1F5E3;"],
  ["composer_full_name", "Who composed this opera ?", "Composer", "25", "&#x1F3BC;"],
  ["title", "Title of the opera ?", "Title", "25", "&#x1F4C3;"],
];

//*** Ordered List of: [database-attribute-name, clue-text, clue-icon]
const clues_order = [
  ["premiere_details", "Premiere", "&#x1F39F;"],
  ["synopsis_brief", "Description", "&#x1F3AD;"],
  ["url_audio_clip", "Audio clip", "&#x1F3B6;"],
];

//*** Ordered List of: [database-attribute-name, information-text]
const additional_information = [
  ["url_wikipedia_info", "Wikipedia page"],
];

const GAME_TITLE = "A Night at the Opera";
const GAME_CLUE_INTRO = "I am thinking of an Opera ...";

const GAME_SECONDS_PER_QUESTION = 10;
const GAME_SECONDS_PER_CLUE = 10;

const GAME_ICON_IMAGE = "images/opera_conductor.png";
