const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 4000;

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

    console.log(`Incoming: ${req.url} Method: ${req.method}`);
    
    let url = req.url;

    let [path, query] = url.split("?");
    let [_k, value] = query.split("=");

    if (path == "/search.php") {
        fs.readFile("./bolo.json", (err, bolo) => {
            if (err) {
                res.statusCode = 500;
                res.end(err.code);
                return;
            }

            let json = JSON.parse(bolo);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(json));
            res.end();
        });
    } else if (path == "/lookup.php") {
        if (value == "") {
            res.statusCode = 404;
            res.write("Not FOUND");
            res.end();
            return;
        }

        fs.readFile("./bolo.json", (err, bolo) => {
            if (err) {
                res.statusCode = 500;
                res.end(err.code);
                return;
            }

            let json = JSON.parse(bolo);
            let data = json.meals.find(it => {
                return it.idMeal == value;
            });
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(data));
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.write("Not FOUND");
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
