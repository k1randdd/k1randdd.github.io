//*** Ordered List of: [database-attribute-name, question-text, question-heading, question-points-score]
const questions_order = [
  ["sung_in_language", "What Language is this opera sung in ?", "Language", "5"],
  ["setting_period_and_or_location", "Opera setting: period or location", "Setting", "10"],
  ["famous_aria_or_song_title", "Name a famous Aria or song in the opera.", "Song", "15"],
  ["main_characters", "Main characters in the opera:", "Characters", "20"],
  ["composer_full_name", "Who composed this opera ?", "Composer", "25"],
  ["title", "Title of the opera ?", "Title", "25"],
];

//*** Ordered List of: [database-attribute-name, clue-text]
const clues_order = [
  ["premiere_details", "Premiere"],
  ["synopsis_brief", "Description"],
  ["url_audio_clip", "Audio clip"],
];

//*** Ordered List of: [database-attribute-name, information-text]
const additional_information = [
  ["url_wikipedia_info", "Wikipedia page"],
];

const GAME_TITLE = "Opera Guessing Game";
const GAME_CLUE_INTRO = "I am thinking of an Opera ...";

const GAME_SECONDS_PER_QUESTION = 10;
const GAME_SECONDS_PER_CLUE = 10;
