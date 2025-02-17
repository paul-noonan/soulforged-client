global.SECONDS = 1;
global.MINUTES = 60 * SECONDS;
global.HOURS = 60 * MINUTES;
global.DAYS = 24 * HOURS;
global.MONTHS = 30 * DAYS;
global.YEARS = 12 * MONTHS;
global.IN_MILISECONDS = 1000;

global.QUICK_ACTIONS_LIMIT = 30;
global.MAX_OPEN_QUESTION_LENGTH = 256;
global.MAX_PENDING_OPEN_QUESTIONS = 3;
global.LIST_SIMILAR_OPEN_QUESTION = 5;

global.AUTO_RESOLVE_TURNS = 20;
global.SWAP_COOLDOWN = 2;

global.CURRENT_CRAFT_VERSION = 5;

global.DISCORD_INVITE_URL = "https://discord.gg/XExbewT5GQ";

global.CONSTRUCT_RESOLUTION = 100;
global.ENTITY_VARIANTS = {
  BASE: "n",
  DETAILS: "d",
  ACTIONING: "a",
  SELF: "s",
  CHAT_HEAD: "c",
  TRADE: "t",
};

global.SHOP_LISTING_SIDES = {
  SELL: "s",
  BUY: "b",
};

global.PING_FREQUENCY = 1000;
global.PLAYER_TURN_TIMER = 60 * SECONDS;
global.COMBAT_FRAMES = {
  INFO: "i",
  TURN: "t",
  APPROACH: "a",
  STRIKE: "s",
  RETURN: "r",
  GENERAL: "g",
};

global.DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
global.DAYS_OF_WEEK_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
global.MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

global.PLAY_URL = "https://play.soulforged.net";

global.REQUEST_CODES = {
  ENTITY_SUB: "es",
  ENTITY_UNSUB: "eu",
  CANCEL_OPERATION: "-o",
  UPDATE_OPERATION: "~o",
  COMMENCE_OPERATION: "+o",
  GET_COMBAT_MOVES: ":c",
  TRIGGER_EXECUTOR: "xe",
  ACTION: "x",
  ACTION_COST: "x?",
  ACTION_START_CRAFT: "xsc",
  ACTION_START_PLAN: "xsp",
  CREATE_CHARACTER: "xc",
  CONFIRM_NAME_CHANGE: "xn",
  CONFIRM_DEATH: "xd",
  CONFIRM_CUSTOM_MESSAGE: "xm",
  ROOT: "@",
  RACES: ":r",
  AVATAR_DATA: ":d",
  MAP_UPDATE: "m~",
  RESEARCH: "R",
  RESEARCH_MARK_SEEN: "Rv",
  RESEARCH_MARK_FAV: "R*",
  RESEARCH_UPDATE: "R^",
  TOAST: "t",
  GET_NAMEABLE: "<n",
  SET_NAMEABLE: ">n",
  MOB_INFO: ":m",
  GET_INFO: ":i",
  GET_POWERS_INFO: ":P",
  BUY_POWER: ">P",
  CHAT_SEND_MESSAGE: "+c",
  CHAT_NEW_MESSAGE: "^c",
  CHAT_GET_MESSAGES: "<c",
  CHAT_SET_LAST_READ: ">lc",
  CHAT_GET_LAST_READ: "<lc",
  SEARCH_KNOWN_ITEMS: "?i",
  CHARACTER_COUNT: "?c",
  COMBAT_FRAME: "cf",
  REPORT: "!",
  GET_SETTING: "<s",
  SAVE_SETTING: ">s",
  SETTING_UPDATE: "~s",
  LOGOUT: "--",
  DELETE_MY_ACCOUNT: "!!--!!",
  SIMILAR_OPEN_QUESTIONS: "<q",
  ASK_OPEN_QUESTIONS: ">q",
  DISMISS_OPEN_QUESTIONS: "-q",
  MARK_OPEN_QUESTION_VIEWED: "vq",
  RE_FETCH_OPEN_QUESTIONS: "uq",
};

global.ATTACK_OUTCOMES = {
  HIT: 1,
  MISS: 2,
};

global.FARMING_ACTIONS = {
  NONE: -1,
  UPROOT: 1,
  PLANT: 2,
  HARVEST: 3,
  WEEDOUT: 4,
  USE_LIQUID: 5,
};

global.SPACING_NAMES = {
  0: "None",
  1: "Very tight",
  2: "Tight",
  3: "Limited",
  4: "Sizeable",
  5: "Spacious",
  6: "Expansive",
};

global.EFFECTS = {
  STACK_DISPLAY: {
    HIDE: 1,
    PERCENT: 2,
  },
};

global.SENTRY_LIMIT = 50;
global.SENTRY_EVENT_TYPE = {
  MOVEMENT: "m",
  COMMENCE_OPERATION: "o",
  ITEM_DROP: "-",
  ITEM_PICKUP: "+",
};

global.SENTRY_EVENT_LABEL = {
  MOVEMENT: "Movement",
  COMMENCE_OPERATION: "Actions",
  ITEM_DROP: "Item drop",
  ITEM_PICKUP: "Item pickup",
};

global.NAMING_RULES = [
  {
    regex: /^[A-Za-z\- ]*$/,
    message: `Only letter, spaces and hyphens are allowed.`,
  },
  {
    regex: /^.{3,15}$/,
    message: `Name must be between 3 and 15 characters long.`,
  },
  {
    regex: /^[A-Za-z]{3,15}/,
    message: `First word must be between 3 and 15 characters.`,
  },
  {
    regex: /^[A-Za-z]{3,15}([ \-][A-Za-z]{0,15}){0,2}$/,
    message: `Name may only contain up to three words.`,
  },
];
global.LABEL_RULES = [
  {
    regex: /^[A-Za-z\- ]*$/,
    message: `Only letter, spaces and hyphens are allowed.`,
  },
  {
    regex: /^.{0,15}$/,
    message: `Name must be between 3 and 15 characters long.`,
  },
  {
    regex: /^[A-Za-z]{0,15}/,
    message: `First word must be between 3 and 15 characters.`,
  },
  {
    regex: /^[A-Za-z]{0,15}([ \-][A-Za-z]{0,15}){0,2}$/,
    message: `Name may only contain up to three words.`,
  },
];

global.buildPayloadId = (id, variant) => `E::${id}::${variant}`;
global.destructurePayloadId = (payloadId) => {
  const [_, id, variant] = payloadId.split("::");
  return { id, variant };
};
const MAX_CHAT_LENGTH = 128;
const letters = "a-zA-Z";
const digits = "0-9";
const space = " ";
const punctuation = "\\-.,!?\"'`‘’“”";
const extendedPunctuation = ":~()$%&*";
const extendedLetters =
  "ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħ" + // Latin Extended-A
  "ĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŊŋŌōŎŏŐőŒœ" +
  "ŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſ" +
  "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ"; // Latin-1 Supplement

global.ChatMessageValidator = (
  message,
  maxLength = MAX_CHAT_LENGTH,
  allowExtras = ""
) => {
  message = message.trim();
  const disallowedCharacter = message.match(/[\\/<>]/);
  if (disallowedCharacter) {
    return `Character ${disallowedCharacter[0]} is not allowed.`;
  }
  if (message.length < 1) {
    return "Message must have at least one character.";
  }
  if (message.length >= maxLength) {
    return `Message needs to be shorter than ${maxLength} characters.`;
  }

  const allValid = message.match(
    new RegExp(
      `^[${letters}${extendedLetters}${digits}${space}${punctuation}${extendedPunctuation}${allowExtras}]+$`
    )
  );
  if (!allValid) {
    return `Unexpected character. Only letters, numbers, spaces and punctuation is allowed.`;
  }
  return null;
};

const MAX_REPORT_LENGTH = 500;
global.ReportCommentValidator = (message) => {
  if (message.length >= MAX_REPORT_LENGTH) {
    return `Message needs to be shorter than ${MAX_REPORT_LENGTH} characters.`;
  }
  const allValid = message.match(/^[a-zA-Z0-9 \n\-.,!?"'`‘’“”]*$/);
  if (!allValid) {
    return `Unexpected character. Only letters, numbers, spaces and punctuation is allowed.`;
  }
  return null;
};
