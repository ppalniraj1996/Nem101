//we make connection from back to fronend

import io from "socket.io-client";

const CONN_PORT = "localhost:4000/";

let socket;
export default socket = io(CONN_PORT);
