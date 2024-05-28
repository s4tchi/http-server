import http from "http";

const handlers = {
  GET: {},
  POST: {},
  DELETE: {},
};

export const use = (method, url, ...cb) => {
  handlers[method][url] = cb;
};

const server = http.createServer((req, res) => {
  if (!handlers[req.method][req.url]) {
    res.writeHeader(404, {});
    res.end(`${req.method}:${req.url} - not found`);
  }
});

export const listen = (port, cb) => {
  server.listen(port, cb);
};
