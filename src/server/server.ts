require('dotenv').config();
import express from 'express';
import * as Path from 'node:path';

const server = express();

server.use(express.json());

server.use('/api/v1/*', (req, res) => res.sendStatus(404));

export default server;
