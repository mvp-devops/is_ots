var Service = require("node-windows").Service;

var svc = new Service({
  name: "is_ots",
  desciption: "Дополнительный функционал Модуль ПАЗ",
  script: require("path").join(__dirname, "dist", "src", "main.js"),
});

svc.uninstall();
