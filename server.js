const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    let url = req.url;

    let [path, query] = url.split("?");
    // let [key, value] = query.split("=");

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
    } else {
        res.statusCode = 404;
        res.write("Not FOUND");
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
