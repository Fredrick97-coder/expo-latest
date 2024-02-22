import React from "react";
import {
  SimpleLineIcons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const EMOJICOLOR = "#676565E7";

export const emojisPack = [
  {
    category: "Smileys & People",
    catEmoji: <SimpleLineIcons name="emotsmile" size={24} color={EMOJICOLOR} />,
    set: [
      {
        emoji: "😀",
        label: "grinning face",
      },
      {
        emoji: "😃",
        label: "grinning face with big eyes",
      },
      {
        emoji: "😄",
        label: "grinning face with smiling eyes",
      },
      {
        emoji: "😁",
        label: "beaming face with smiling eyes",
      },
      {
        emoji: "😆",
        label: "grinning squinting face",
      },
      {
        emoji: "😅",
        label: "grinning face with sweat",
      },
      {
        emoji: "😂",
        label: "face with tears of joy",
      },
      {
        emoji: "🤣",
        label: "rolling on the floor laughing",
      },
      {
        emoji: "😊",
        label: "smiling face with smiling eyes",
      },
      {
        emoji: "😇",
        label: "smiling face with halo",
      },
      {
        emoji: "🙂",
        label: "slightly smiling face",
      },
      {
        emoji: "🙃",
        label: "upside-down face",
      },
      {
        emoji: "😉",
        label: "winking face",
      },
      {
        emoji: "😌",
        label: "relieved face",
      },
      {
        emoji: "😍",
        label: "smiling face with heart-eyes",
      },
      {
        emoji: "😘",
        label: "face blowing a kiss",
      },
      {
        emoji: "😗",
        label: "kissing face",
      },
      {
        emoji: "😙",
        label: "kissing face with smiling eyes",
      },
      {
        emoji: "😚",
        label: "kissing face with closed eyes",
      },
      {
        emoji: "😋",
        label: "face savoring food",
      },
      {
        emoji: "😛",
        label: "face with tongue",
      },
      {
        emoji: "😜",
        label: "winking face with tongue",
      },
      {
        emoji: "😝",
        label: "squinting face with tongue",
      },
      {
        emoji: "😎",
        label: "smiling face with sunglasses",
      },
      {
        emoji: "🤓",
        label: "nerd face",
      },
      {
        emoji: "🧐",
        label: "face with monocle",
      },
      {
        emoji: "😏",
        label: "smirking face",
      },
      {
        emoji: "😒",
        label: "unamused face",
      },
      {
        emoji: "😞",
        label: "disappointed face",
      },
      {
        emoji: "😔",
        label: "pensive face",
      },
      {
        emoji: "😟",
        label: "worried face",
      },
      {
        emoji: "😕",
        label: "confused face",
      },
      {
        emoji: "🙁",
        label: "slightly frowning face",
      },
      {
        emoji: "☹️",
        label: "frowning face",
      },
      {
        emoji: "😣",
        label: "persevering face",
      },
      {
        emoji: "😖",
        label: "confounded face",
      },
      {
        emoji: "😫",
        label: "tired face",
      },
      {
        emoji: "😩",
        label: "weary face",
      },
      {
        emoji: "😤",
        label: "face with steam from nose",
      },
      {
        emoji: "😠",
        label: "angry face",
      },
      {
        emoji: "😡",
        label: "pouting face",
      },
      {
        emoji: "😶",
        label: "face without mouth",
      },
      {
        emoji: "😐",
        label: "neutral face",
      },
      {
        emoji: "😑",
        label: "expressionless face",
      },
      {
        emoji: "😯",
        label: "hushed face",
      },
      {
        emoji: "😦",
        label: "frowning face with open mouth",
      },
      {
        emoji: "😧",
        label: "anguished face",
      },
      {
        emoji: "😮",
        label: "face with open mouth",
      },
      {
        emoji: "😲",
        label: "astonished face",
      },
      {
        emoji: "😴",
        label: "sleepy face",
      },
      {
        emoji: "🤤",
        label: "drooling face",
      },
      {
        emoji: "😪",
        label: "sleeping face",
      },
      {
        emoji: "😵",
        label: "dizzy face",
      },
      {
        emoji: "🤐",
        label: "zipper-mouth face",
      },
      {
        emoji: "🥴",
        label: "woozy face",
      },
      {
        emoji: "🤢",
        label: "nauseated face",
      },
      {
        emoji: "🤮",
        label: "face vomiting",
      },
      {
        emoji: "🤧",
        label: "sneezing face",
      },
      {
        emoji: "🥵",
        label: "hot face",
      },
      {
        emoji: "🥶",
        label: "cold face",
      },
      {
        emoji: "🥴",
        label: "woozy face",
      },
      {
        emoji: "😷",
        label: "face with medical mask",
      },
      {
        emoji: "🤒",
        label: "face with thermometer",
      },
      {
        emoji: "🤕",
        label: "face with head-bandage",
      },
      {
        emoji: "🤑",
        label: "money-mouth face",
      },
      {
        emoji: "🤠",
        label: "cowboy hat face",
      },
      {
        emoji: "😈",
        label: "smiling face with horns",
      },
      {
        emoji: "👿",
        label: "angry face with horns",
      },
      {
        emoji: "👹",
        label: "ogre",
      },
      {
        emoji: "👺",
        label: "goblin",
      },
      {
        emoji: "💀",
        label: "skull",
      },
      {
        emoji: "☠️",
        label: "skull and crossbones",
      },
      {
        emoji: "👻",
        label: "ghost",
      },
      {
        emoji: "👽",
        label: "alien",
      },
      {
        emoji: "👾",
        label: "alien monster",
      },
      {
        emoji: "🤖",
        label: "robot",
      },
      {
        emoji: "😺",
        label: "grinning cat",
      },
      {
        emoji: "😸",
        label: "grinning cat with smiling eyes",
      },
      {
        emoji: "😹",
        label: "cat with tears of joy",
      },
      {
        emoji: "😻",
        label: "smiling cat with heart-eyes",
      },
      {
        emoji: "😼",
        label: "cat with wry smile",
      },
      {
        emoji: "😽",
        label: "kissing cat",
      },
      {
        emoji: "🙀",
        label: "weary cat",
      },
      {
        emoji: "😿",
        label: "crying cat",
      },
      {
        emoji: "😾",
        label: "pouting cat",
      },
      {
        emoji: "🙈",
        label: "see-no-evil monkey",
      },
      {
        emoji: "🙉",
        label: "hear-no-evil monkey",
      },
      {
        emoji: "🙊",
        label: "speak-no-evil monkey",
      },
    ],
  },
  {
    category: "Animals & Nature",
    catEmoji: (
      <MaterialCommunityIcons name="dog" size={24} color={EMOJICOLOR} />
    ),
    set: [
      {
        emoji: "🐶",
        label: "dog face",
      },
      {
        emoji: "🐱",
        label: "cat face",
      },
      {
        emoji: "🐭",
        label: "mouse face",
      },
      {
        emoji: "🐹",
        label: "hamster",
      },
      {
        emoji: "🐰",
        label: "rabbit face",
      },
      {
        emoji: "🦊",
        label: "fox face",
      },
      {
        emoji: "🐻",
        label: "bear face",
      },
      {
        emoji: "🐼",
        label: "panda face",
      },
      {
        emoji: "🐨",
        label: "koala",
      },
      {
        emoji: "🐯",
        label: "tiger face",
      },
      {
        emoji: "🦁",
        label: "lion",
      },
      {
        emoji: "🐮",
        label: "cow face",
      },
      {
        emoji: "🐷",
        label: "pig face",
      },
      {
        emoji: "🐽",
        label: "pig nose",
      },
      {
        emoji: "🐸",
        label: "frog",
      },
      {
        emoji: "🐙",
        label: "octopus",
      },
      {
        emoji: "🐵",
        label: "monkey face",
      },
      {
        emoji: "🙈",
        label: "see-no-evil monkey",
      },
      {
        emoji: "🙉",
        label: "hear-no-evil monkey",
      },
      {
        emoji: "🙊",
        label: "speak-no-evil monkey",
      },
      {
        emoji: "🐒",
        label: "monkey",
      },
      {
        emoji: "🐔",
        label: "chicken",
      },
      {
        emoji: "🐧",
        label: "penguin",
      },
      {
        emoji: "🐦",
        label: "bird",
      },
      {
        emoji: "🐤",
        label: "baby chick",
      },
      {
        emoji: "🐣",
        label: "hatching chick",
      },
      {
        emoji: "🐥",
        label: "front-facing baby chick",
      },
      {
        emoji: "🦆",
        label: "duck",
      },
      {
        emoji: "🦅",
        label: "eagle",
      },
      {
        emoji: "🦉",
        label: "owl",
      },
      {
        emoji: "🦇",
        label: "bat",
      },
      {
        emoji: "🐺",
        label: "wolf",
      },
      {
        emoji: "🐗",
        label: "boar",
      },
      {
        emoji: "🐴",
        label: "horse face",
      },
      {
        emoji: "🦄",
        label: "unicorn",
      },
      {
        emoji: "🐝",
        label: "honeybee",
      },
      {
        emoji: "🐛",
        label: "bug",
      },
      {
        emoji: "🦋",
        label: "butterfly",
      },
      {
        emoji: "🐌",
        label: "snail",
      },
      {
        emoji: "🐞",
        label: "lady beetle",
      },
      {
        emoji: "🐜",
        label: "ant",
      },
      {
        emoji: "🦗",
        label: "cricket",
      },
      {
        emoji: "🕷",
        label: "spider",
      },
      {
        emoji: "🦂",
        label: "scorpion",
      },
      {
        emoji: "🦟",
        label: "mosquito",
      },
      {
        emoji: "🦠",
        label: "microbe",
      },
      {
        emoji: "🐢",
        label: "turtle",
      },
      {
        emoji: "🐍",
        label: "snake",
      },
      {
        emoji: "🦎",
        label: "lizard",
      },
      {
        emoji: "🦖",
        label: "T-Rex",
      },
      {
        emoji: "🦕",
        label: "sauropod",
      },
      {
        emoji: "🐙",
        label: "octopus",
      },
    ],
  },
  {
    category: "Food & Drink",
    catEmoji: <SimpleLineIcons name="cup" size={24} color={EMOJICOLOR} />,
    set: [
      {
        emoji: "🍇",
        label: "grapes",
      },
      {
        emoji: "🍈",
        label: "melon",
      },
      {
        emoji: "🍉",
        label: "watermelon",
      },
      {
        emoji: "🍊",
        label: "tangerine",
      },
      {
        emoji: "🍋",
        label: "lemon",
      },
      {
        emoji: "🍌",
        label: "banana",
      },
      {
        emoji: "🍍",
        label: "pineapple",
      },
      {
        emoji: "🥭",
        label: "mango",
      },
      {
        emoji: "🍎",
        label: "red apple",
      },
      {
        emoji: "🍏",
        label: "green apple",
      },
      {
        emoji: "🍐",
        label: "pear",
      },
      {
        emoji: "🍑",
        label: "peach",
      },
      {
        emoji: "🍒",
        label: "cherries",
      },
      {
        emoji: "🍓",
        label: "strawberry",
      },
      {
        emoji: "🥝",
        label: "kiwi fruit",
      },
      {
        emoji: "🍅",
        label: "tomato",
      },
      {
        emoji: "🥥",
        label: "coconut",
      },
      {
        emoji: "🥑",
        label: "avocado",
      },
      {
        emoji: "🍆",
        label: "eggplant",
      },
      {
        emoji: "🥔",
        label: "potato",
      },
      {
        emoji: "🥕",
        label: "carrot",
      },
      {
        emoji: "🌽",
        label: "ear of corn",
      },
      {
        emoji: "🌶",
        label: "hot pepper",
      },
      {
        emoji: "🥒",
        label: "cucumber",
      },
      {
        emoji: "🥬",
        label: "leafy green",
      },
      {
        emoji: "🥦",
        label: "broccoli",
      },
      {
        emoji: "🧄",
        label: "garlic",
      },
      {
        emoji: "🧅",
        label: "onion",
      },
      {
        emoji: "🍄",
        label: "mushroom",
      },
      {
        emoji: "🥜",
        label: "peanuts",
      },
      {
        emoji: "🌰",
        label: "chestnut",
      },
      {
        emoji: "🍞",
        label: "bread",
      },
      {
        emoji: "🥐",
        label: "croissant",
      },
      {
        emoji: "🥖",
        label: "baguette bread",
      },
      {
        emoji: "🥨",
        label: "pretzel",
      },
      {
        emoji: "🥯",
        label: "bagel",
      },
      {
        emoji: "🥞",
        label: "pancakes",
      },
      {
        emoji: "🧇",
        label: "waffle",
      },
      {
        emoji: "🧀",
        label: "cheese wedge",
      },
      {
        emoji: "🍖",
        label: "meat on bone",
      },
      {
        emoji: "🍗",
        label: "poultry leg",
      },
      {
        emoji: "🥩",
        label: "cut of meat",
      },
      {
        emoji: "🥓",
        label: "bacon",
      },
      {
        emoji: "🍔",
        label: "hamburger",
      },
      {
        emoji: "🍟",
        label: "french fries",
      },
      {
        emoji: "🍕",
        label: "pizza",
      },
      {
        emoji: "🌭",
        label: "hot dog",
      },
      {
        emoji: "🥪",
        label: "sandwich",
      },
      {
        emoji: "🌮",
        label: "taco",
      },
      {
        emoji: "🌯",
        label: "burrito",
      },
      {
        emoji: "🥙",
        label: "stuffed flatbread",
      },
      {
        emoji: "🧆",
        label: "falafel",
      },
    ],
  },
  {
    category: "Activities",
    catEmoji: <FontAwesome name="soccer-ball-o" size={24} color={EMOJICOLOR} />,
    set: [
      {
        emoji: "⚽️",
        label: "soccer ball",
      },
      {
        emoji: "🏀",
        label: "basketball",
      },
      {
        emoji: "🏈",
        label: "american football",
      },
      {
        emoji: "⚾️",
        label: "baseball",
      },
      {
        emoji: "🥎",
        label: "softball",
      },
      {
        emoji: "🎾",
        label: "tennis",
      },
      {
        emoji: "🏐",
        label: "volleyball",
      },
      {
        emoji: "🏉",
        label: "rugby football",
      },
      {
        emoji: "🎱",
        label: "pool 8 ball",
      },
      {
        emoji: "🏓",
        label: "ping pong",
      },
      {
        emoji: "🏸",
        label: "badminton",
      },
      {
        emoji: "🥅",
        label: "goal net",
      },
      {
        emoji: "🏒",
        label: "ice hockey",
      },
      {
        emoji: "🏑",
        label: "field hockey",
      },
      {
        emoji: "🥍",
        label: "lacrosse",
      },
      {
        emoji: "🏏",
        label: "cricket game",
      },
      {
        emoji: "🎿",
        label: "skis",
      },
      {
        emoji: "⛷",
        label: "skier",
      },
      {
        emoji: "🏂",
        label: "snowboarder",
      },
      {
        emoji: "🪂",
        label: "parachute",
      },
      {
        emoji: "🏋️",
        label: "person lifting weights",
      },
      {
        emoji: "🏋️‍♂️",
        label: "man lifting weights",
      },
      {
        emoji: "🏋️‍♀️",
        label: "woman lifting weights::skin-tone-2",
      },
      {
        emoji: "🤼",
        label: "people wrestling",
      },
      {
        emoji: "🤼‍♂️",
        label: "men wrestling",
      },
    ],
  },
  {
    category: "Travel & Places",
    catEmoji: <FontAwesome5 name="car-alt" size={24} color={EMOJICOLOR} />,
    set: [
      {
        emoji: "🚗",
        label: "car",
      },
      {
        emoji: "🚕",
        label: "taxi",
      },
      {
        emoji: "🚙",
        label: "sport utility vehicle",
      },
      {
        emoji: "🚌",
        label: "bus",
      },
      {
        emoji: "🚎",
        label: "trolleybus",
      },
      {
        emoji: "🏎",
        label: "racing car",
      },
      {
        emoji: "🚓",
        label: "police car",
      },
      {
        emoji: "🚑",
        label: "ambulance",
      },
      {
        emoji: "🚒",
        label: "fire engine",
      },
      {
        emoji: "🚐",
        label: "minibus",
      },
      {
        emoji: "🚚",
        label: "delivery truck",
      },
      {
        emoji: "🚛",
        label: "articulated lorry",
      },
      {
        emoji: "🚜",
        label: "tractor",
      },
      {
        emoji: "🛴",
        label: "kick scooter",
      },
      {
        emoji: "🚲",
        label: "bicycle",
      },
      {
        emoji: "🛵",
        label: "motor scooter",
      },
      {
        emoji: "🏍",
        label: "motorcycle",
      },
      {
        emoji: "🛺",
        label: "auto rickshaw",
      },
      {
        emoji: "🚨",
        label: "police car light",
      },
      {
        emoji: "🚔",
        label: "oncoming police car",
      },
      {
        emoji: "🚍",
        label: "oncoming bus",
      },
      {
        emoji: "🚘",
        label: "oncoming automobile",
      },
      {
        emoji: "🚖",
        label: "oncoming taxi",
      },
      {
        emoji: "🚡",
        label: "aerial tramway",
      },
      {
        emoji: "🚠",
        label: "mountain cableway",
      },
      {
        emoji: "🚟",
        label: "suspension railway",
      },
    ],
  },
  {
    category: "Objects",
    catEmoji: <Ionicons name="bulb-outline" size={24} color={EMOJICOLOR} />,
    set: [
      {
        emoji: "📱",
        label: "mobile phone",
      },
      {
        emoji: "📲",
        label: "mobile phone with arrow",
      },
      {
        emoji: "☎️",
        label: "telephone",
      },
      {
        emoji: "📞",
        label: "telephone receiver",
      },
      {
        emoji: "📟",
        label: "pager",
      },
      {
        emoji: "📠",
        label: "fax machine",
      },
      {
        emoji: "🔋",
        label: "battery",
      },
      {
        emoji: "🔌",
        label: "electric plug",
      },
      {
        emoji: "💻",
        label: "laptop",
      },
      {
        emoji: "🖥",
        label: "desktop computer",
      },
      {
        emoji: "🖨",
        label: "printer",
      },
      {
        emoji: "⌨️",
        label: "keyboard",
      },
      {
        emoji: "🖱",
        label: "computer mouse",
      },
      {
        emoji: "🖲",
        label: "trackball",
      },
      {
        emoji: "💽",
        label: "computer disk",
      },
      {
        emoji: "💾",
        label: "floppy disk",
      },
      {
        emoji: "💿",
        label: "optical disk",
      },
      {
        emoji: "📀",
        label: "dvd",
      },
      {
        emoji: "🧮",
        label: "abacus",
      },
      {
        emoji: "🎥",
        label: "movie camera",
      },
      {
        emoji: "🎞",
        label: "film frames",
      },
      {
        emoji: "📽",
        label: "film projector",
      },
      {
        emoji: "🎬",
        label: "clapper board",
      },
      {
        emoji: "📺",
        label: "television",
      },
      {
        emoji: "📷",
        label: "camera",
      },
      {
        emoji: "📸",
        label: "camera with flash",
      },
      {
        emoji: "📹",
        label: "video camera",
      },
    ],
  },
  {
    category: "Symbols",
    catEmoji: <FontAwesome name="hashtag" size={24} color={EMOJICOLOR} />,
    set: [
      {
        emoji: "🔍",
        label: "magnifying glass tilted left",
      },
      {
        emoji: "🔎",
        label: "magnifying glass tilted right",
      },
      {
        emoji: "🔏",
        label: "locked with pen",
      },
      {
        emoji: "🔐",
        label: "locked with key",
      },
      {
        emoji: "🔒",
        label: "locked",
      },
      {
        emoji: "🔓",
        label: "unlocked",
      },
      {
        emoji: "🔒",
        label: "locked",
      },
      {
        emoji: "🔓",
        label: "unlocked",
      },
      {
        emoji: "🔔",
        label: "bell",
      },
      {
        emoji: "🔕",
        label: "bell with slash",
      },
      {
        emoji: "📣",
        label: "megaphone",
      },
      {
        emoji: "📢",
        label: "loudspeaker",
      },
      {
        emoji: "🔈",
        label: "speaker",
      },
      {
        emoji: "🔉",
        label: "speaker medium volume",
      },
      {
        emoji: "🔊",
        label: "speaker high volume",
      },
      {
        emoji: "📯",
        label: "postal horn",
      },
      {
        emoji: "🔔",
        label: "bell",
      },
      {
        emoji: "🔕",
        label: "bell with slash",
      },
      {
        emoji: "📣",
        label: "megaphone",
      },
      {
        emoji: "📢",
        label: "loudspeaker",
      },
      {
        emoji: "🔈",
        label: "speaker",
      },
      {
        emoji: "🔉",
        label: "speaker medium volume",
      },
      {
        emoji: "🔊",
        label: "speaker high volume",
      },
      {
        emoji: "📯",
        label: "postal horn",
      },
      {
        emoji: "📻",
        label: "radio",
      },
      {
        emoji: "📡",
        label: "satellite antenna",
      },
    ],
  },
  {
    category: "Flags",
    catEmoji: <FontAwesome5 name="flag" size={24} color={EMOJICOLOR} />,
    set: [
      {
        emoji: "🏁",
        label: "chequered flag",
      },
      {
        emoji: "🚩",
        label: "triangular flag",
      },
      {
        emoji: "🎌",
        label: "crossed flags",
      },
      {
        emoji: "🏴",
        label: "black flag",
      },
      {
        emoji: "🏳️",
        label: "white flag",
      },
      {
        emoji: "🏳️‍🌈",
        label: "rainbow flag",
      },
      {
        emoji: "🏴‍☠️",
        label: "pirate flag",
      },
      {
        emoji: "🇦🇫",
        label: "flag: Afghanistan",
      },
      {
        emoji: "🇦🇽",
        label: "flag: Åland Islands",
      },
      {
        emoji: "🇦🇱",
        label: "flag: Albania",
      },
      {
        emoji: "🇩🇿",
        label: "flag: Algeria",
      },
      {
        emoji: "🇦🇸",
        label: "flag: American Samoa",
      },
      {
        emoji: "🇦🇩",
        label: "flag: Andorra",
      },
      {
        emoji: "🇦🇴",
        label: "flag: Angola",
      },
      {
        emoji: "🇦🇮",
        label: "flag: Anguilla",
      },
      {
        emoji: "🇦🇶",
        label: "flag: Antarctica",
      },
      {
        emoji: "🇦🇬",
        label: "flag: Antigua & Barbuda",
      },
      {
        emoji: "🇦🇷",
        label: "flag: Argentina",
      },
      {
        emoji: "🇦🇲",
        label: "flag: Armenia",
      },
      {
        emoji: "🇦🇼",
        label: "flag: Aruba",
      },
      {
        emoji: "🇦🇺",
        label: "flag: Australia",
      },
      {
        emoji: "🇦🇹",
        label: "flag: Austria",
      },
      {
        emoji: "🇦🇿",
        label: "flag: Azerbaijan",
      },
      {
        emoji: "🇧🇸",
        label: "flag: Bahamas",
      },
      {
        emoji: "🇧🇭",
        label: "flag: Bahrain",
      },
      {
        emoji: "🇧🇩",
        label: "flag: Bangladesh",
      },
      {
        emoji: "🇧🇧",
        label: "flag: Barbados",
      },
      {
        emoji: "🇧🇾",
        label: "flag: Belarus",
      },
      {
        emoji: "🇧🇪",
        label: "flag: Belgium",
      },
      {
        emoji: "🇧🇿",
        label: "flag: Belize",
      },
      {
        emoji: "🇧🇯",
        label: "flag: Benin",
      },
      {
        emoji: "🇧🇲",
        label: "flag: Bermuda",
      },
      {
        emoji: "🇧🇹",
        label: "flag: Bhutan",
      },
      {
        emoji: "🇧🇴",
        label: "flag: Bolivia",
      },
      {
        emoji: "🇧🇦",
        label: "flag: Bosnia & Herzegovina",
      },
      {
        emoji: "🇧🇼",
        label: "flag: Botswana",
      },
      {
        emoji: "🇧🇻",
        label: "flag: Bouvet Island",
      },
      {
        emoji: "🇧🇷",
        label: "flag: Brazil",
      },
      {
        emoji: "🇮🇴",
        label: "flag: British Indian Ocean Territory",
      },
      {
        emoji: "🇻🇬",
        label: "flag: British Virgin Islands",
      },
      {
        emoji: "🇧🇳",
        label: "flag: Brunei",
      },
      {
        emoji: "🇧🇬",
        label: "flag: Bulgaria",
      },
      {
        emoji: "🇧🇫",
        label: "flag: Burkina Faso",
      },
      {
        emoji: "🇧🇮",
        label: "flag: Burundi",
      },
      {
        emoji: "🇰🇭",
        label: "flag: Cambodia",
      },
      {
        emoji: "🇨🇲",
        label: "flag: Cameroon",
      },
      {
        emoji: "🇨🇦",
        label: "flag: Canada",
      },
      {
        emoji: "🇨🇻",
        label: "flag: Cape Verde",
      },
      {
        emoji: "🇧🇶",
        label: "flag: Caribbean Netherlands",
      },
      {
        emoji: "🇰🇾",
        label: "flag: Cayman Islands",
      },
      {
        emoji: "🇨🇫",
        label: "flag: Central African Republic",
      },
      {
        emoji: "🇪🇦",
        label: "flag: Ceuta & Melilla",
      },
      {
        emoji: "🇹🇩",
        label: "flag: Chad",
      },
      {
        emoji: "🇨🇱",
        label: "flag: Chile",
      },
      {
        emoji: "🇨🇳",
        label: "flag: China",
      },
      {
        emoji: "🇨🇽",
        label: "flag: Christmas Island",
      },
      {
        emoji: "🇨🇨",
        label: "flag: Cocos (Keeling) Islands",
      },
      {
        emoji: "🇨🇴",
        label: "flag: Colombia",
      },
      {
        emoji: "🇰🇲",
        label: "flag: Comoros",
      },
      {
        emoji: "🇨🇬",
        label: "flag: Congo - Brazzaville",
      },
      {
        emoji: "🇨🇩",
        label: "flag: Congo - Kinshasa",
      },
      {
        emoji: "🇨🇰",
        label: "flag: Cook Islands",
      },
      {
        emoji: "🇨🇷",
        label: "flag: Costa Rica",
      },
      {
        emoji: "🇭🇷",
        label: "flag: Croatia",
      },
      {
        emoji: "🇨🇺",
        label: "flag: Cuba",
      },
      {
        emoji: "🇨🇼",
        label: "flag: Curaçao",
      },
      {
        emoji: "🇨🇾",
        label: "flag: Cyprus",
      },
      {
        emoji: "🇨🇿",
        label: "flag: Czechia",
      },
      {
        emoji: "🇨🇮",
        label: "flag: Côte d’Ivoire",
      },
      {
        emoji: "🇩🇰",
        label: "flag: Denmark",
      },
      {
        emoji: "🇩🇬",
        label: "flag: Diego Garcia",
      },
      {
        emoji: "🇩🇯",
        label: "flag: Djibouti",
      },
      {
        emoji: "🇩🇲",
        label: "flag: Dominica",
      },
      {
        emoji: "🇩🇴",
        label: "flag: Dominican Republic",
      },
      {
        emoji: "🇪🇨",
        label: "flag: Ecuador",
      },
      {
        emoji: "🇪🇬",
        label: "flag: Egypt",
      },
      {
        emoji: "🇸🇻",
        label: "flag: El Salvador",
      },
      {
        emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        label: "flag: England",
      },
      {
        emoji: "🇬🇶",
        label: "flag: Equatorial Guinea",
      },
      {
        emoji: "🇪🇷",
        label: "flag: Eritrea",
      },
      {
        emoji: "🇪🇪",
        label: "flag: Estonia",
      },
      {
        emoji: "🇪🇹",
        label: "flag: Ethiopia",
      },
      {
        emoji: "🇪🇺",
        label: "flag: European Union",
      },
      {
        emoji: "🇫🇰",
        label: "flag: Falkland Islands",
      },
      {
        emoji: "🇫🇴",
        label: "flag: Faroe Islands",
      },
      {
        emoji: "🇫🇯",
        label: "flag: Fiji",
      },
      {
        emoji: "🇫🇮",
        label: "flag: Finland",
      },
      {
        emoji: "🇫🇷",
        label: "flag: France",
      },
      {
        emoji: "🇬🇫",
        label: "flag: French Guiana",
      },
      {
        emoji: "🇵🇫",
        label: "flag: French Polynesia",
      },
      {
        emoji: "🇹🇫",
        label: "flag: French Southern Territories",
      },
      {
        emoji: "🇬🇦",
        label: "flag: Gabon",
      },
      {
        emoji: "🇬🇲",
        label: "flag: Gambia",
      },
      {
        emoji: "🇬🇪",
        label: "flag: Georgia",
      },
      {
        emoji: "🇩🇪",
        label: "flag: Germany",
      },
      {
        emoji: "🇬🇭",
        label: "flag: Ghana",
      },
      {
        emoji: "🇬🇮",
        label: "flag: Gibraltar",
      },
      {
        emoji: "🇬🇷",
        label: "flag: Greece",
      },
      {
        emoji: "🇬🇱",
        label: "flag: Greenland",
      },
      {
        emoji: "🇬🇩",
        label: "flag: Grenada",
      },
      {
        emoji: "🇬🇵",
        label: "flag: Guadeloupe",
      },
      {
        emoji: "🇬🇺",
        label: "flag: Guam",
      },
      {
        emoji: "🇬🇹",
        label: "flag: Guatemala",
      },
      {
        emoji: "🇬🇬",
        label: "flag: Guernsey",
      },
      {
        emoji: "🇬🇳",
        label: "flag: Guinea",
      },
    ],
  },
];
