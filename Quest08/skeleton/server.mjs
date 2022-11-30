import http from "http";
import url from "url";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  /* TODO: 각각의 URL들을 어떻게 처리하면 좋을까요? */
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  if (pathname == "/") {
    res.end("Hello, World!");
  } else if (pathname == "/foo") {
    if (req.method == "GET") {
      console.log("GET /foo");
      const printName = parsedUrl.query.bar;
      res.end(`Hello, ${printName}!`);
    } else if (req.method == "POST") {
      console.log("POST /foo");
      req.on("data", function (data) {
        const printName = JSON.parse(data).bar;
        res.end(`Hello, ${printName}!`);
      });
    }
  } else if (pathname == "/pic/upload" && req.method == "POST") {
    console.log("POST /pic/upload");
    req.on("data", function (data) {
      // 이미지 처리
    });
    res.end();
  }
});

server.listen(8000, function () {
  console.log("서버가 구동중입니다.");
});
