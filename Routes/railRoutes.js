import { addTodo ,getTodo,updateTodo,deleteTodo} from "../Controller/railController.js";

import express from "express";

const route = express.Router();

route.post('/addtodo', addTodo);
route.get('/gettodo', getTodo);
route.put('/updatetodo', updateTodo);
route.delete('/deletetodo', deleteTodo);

export default route;