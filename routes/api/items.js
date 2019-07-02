const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    GET All Items
// @access  Public
router.get('/', (req, res) => {
    console.log("in get")
    // Item.find()
    //     .sort({ date: -1 })
    //     .then(items => res.json(items))
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    Item.find({name: 'Milk'}, function (err, docs) {
        if (err){
            console.log(`error: ${err}`)
        }else{
            console.log(docs)
            return res.json(docs);
        }
            
    });
});

router.get('/:addr', (req, res) => {
    console.log(`in get ${req.params.addr}`)
    Item.find({_addr: req.params.addr}, function (err, docs) {
        // Item.find({_addr: '0xC7a8E02ab30B57e438e407fe0eDBa82E9117068F'}, function (err, docs) {

        if (err){
            console.log(`error: ${err}`)
        }else{
            console.log(docs)
            return res.json(docs);
        }
            
    });
});

// @route   POST api/items
// @desc    crerate a post
// @access  Public
router.post('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/connect");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // schema : _contract, _start, _due, _action

    console.log("in router")
    console.log(req)
    const newItem = new Item({
        _addr: req.body._addr,
        _contract: req.body._contract,
        _start: req.body._start,
        _due: req.body._due,
        _action: req.body._action,
    });

    newItem.save().then(item => res.json(item));
});

router.put('/', (req, res) => {

    console.log("in put")
    console.log(req.body)

    Item.findOne({ 'name': 'Milk' }, function (err, Item) {
        if (err) 
            console.log(`error: ${err}`)
        else
        // Prints "Space Ghost is a talk show host".
        console.log(` in find ${Item.name}, ${Item._id}, ${Item.date}`)
    });
});

// @route   DELETE api/items
// @desc    delete a post
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

    

module.exports = router;