var Service = require("node-windows").Service;

var svc = new Service({
  name: "is_ots",
  desciption:
    "Информационная система для автоматизации организационно-технического сопровождения объектов капитального строительства",
  script: require("path").join(__dirname, "dist", "src", "main.js"),
});

svc.uninstall();
