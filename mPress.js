var fs = require("fs");
var path = require("path");
var handlebars = require("handlebars");

var mPressData = require("./data/mPress.json");
var mPressTemplate = "./templates/press.hbs";
createmPress(mPressData, mPressTemplate,"output/press.html");

mPressData.platform  = require("./data/switch.json");
var platformPitchDeck = "./templates/platform-pitch-deck.hbs";
createmPress(mPressData, platformPitchDeck, "output/switch-pitch-deck.html");

mPressData.platform  = require("./data/xbox.json");
var pitchDeckXbox = "./templates/xbox-pitch-deck.hbs";
createmPress(mPressData, platformPitchDeck, "output/xbox-pitch-deck.html");

mPressData.platform  = require("./data/ps4.json");
var pitchDeckPs4 = "./templates/ps4-pitch-deck.hbs";
createmPress(mPressData, platformPitchDeck, "output/ps4-pitch-deck.html");

function createmPress(data, template, destination) {
  fs.writeFileSync(destination, renderFromExternalTemplate(template, data));
}

function renderFromExternalTemplate(templateFile, data){
  var file = fs.readFileSync(templateFile, "utf8");
  var template = handlebars.compile(file);
  return template(data);
}
