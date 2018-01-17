import express from 'express';
import morgan from 'morgan';
import {items, conversions, locale} from './data';

const server = new express();
let cartItems = items;

server.use(morgan('combined'));

server.get("/", (req, res) => {
  res.send('OK');
});

server.get("/ping", (req, res) => {
  res.send('pong');
});

server.get("/items", (req, res) => {
  res.json(cartItems);
});

server.delete("/items.:id", (req, res) => {
  cartItems = cartItems.filter(item => req.params.id !== item.id)
});

server.get("/rates", (req, res) => {
  res.json(conversions);
});

server.get("/locale", (req, res) => {
  res.json(locale)
});

server.use(function (req, res) {
  res.status(404).send("Sorry can't find that!")
});

server.listen(3000, () => {
  console.info("Express listening on port 3000.");
});
