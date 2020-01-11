var fs = require("fs");
var path = require("path");
var handlebars = require("handlebars");
var config = require("./config.json");
var dataPath = config.dataPath;
var outputPath = config.outputPath;

var mPressData = require("./" + config.dataPath + "/mPress.json");
var mPressTemplate = "./templates/press.hbs";
createmPress(mPressData, mPressTemplate,"./" + config.outputPath + "/press.html");

mPressData.platform  = require("./" + config.dataPath + "/switch.json");
var platformPitchDeck = "./templates/platform-pitch-deck.hbs";
createmPress(mPressData, platformPitchDeck, "./" + config.outputPath + "/switch-pitch-deck.html");

mPressData.platform  = require("./" + config.dataPath + "/xbox.json");
var pitchDeckXbox = "./templates/xbox-pitch-deck.hbs";
createmPress(mPressData, platformPitchDeck, "./" + config.outputPath + "/xbox-pitch-deck.html");

mPressData.platform  = require("./" + config.dataPath + "/ps4.json");
var pitchDeckPs4 = "./templates/ps4-pitch-deck.hbs";
createmPress(mPressData, platformPitchDeck, "./" + config.outputPath + "/ps4-pitch-deck.html");

function createmPress(data, template, destination) {
  fs.writeFileSync(destination, renderFromExternalTemplate(template, data));
}

function renderFromExternalTemplate(templateFile, data){
  var file = fs.readFileSync(templateFile, "utf8");
  var template = handlebars.compile(file);
  return template(data);
}
