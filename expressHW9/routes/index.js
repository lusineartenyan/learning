const router = require("express").Router()
const Todo = require("../models/Todo");

// routes 
router.get("/", async(req, res) => {
    try {
        const allTodo = await Todo.find();
        res.render("index", {todo: allTodo})
    } catch(err) {
        console.error(err);
    }
})

module.exports = router;