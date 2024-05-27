import http from "http";

const handlers = {
  GET: {},
  POST: {},
  DELETE: {},
};

const server = http.createServer((req, res) => {});

export const listen = (port, cb) => {
  server.listen(port, cb);
};
