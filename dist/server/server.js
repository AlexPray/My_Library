"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = __importDefault(require("./database"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
// Show all books in database
app.get("/getBooks", function (req, res) {
    var db = database_1.default.getDbServiceInstance();
    var results = db.getAllData();
    results.then(function (data) { return res.send(data); }).catch(function (err) { return console.log(err); });
});
// Create new book in database by addButton
app.post("/addBook", function (req, res) {
    res.json({ response: 'Success' }).status(200).end();
});
var PORT = 3030;
app.listen(PORT, function () {
    console.log("App listening on port ".concat(PORT));
});
