const express = require('express');
const router = express.Router();

// Host Model
const Host = require('../../models/Hospital');

// @route   GET api/Host
// @desc    GET All Host
// @access  Public
router.get('/', (req, res) => {
    console.log("in get")
    // Host.find()
    //     .sort({ date: -1 })
    //     .then(hosts => res.json(hosts))
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    Host.find({name: 'Milk'}, function (err, docs) {
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
    Host.find({_addr: req.params.addr}, function (err, docs) {
        // Host.find({_addr: '0xC7a8E02ab30B57e438e407fe0eDBa82E9117068F'}, function (err, docs) {

        if (err){
            console.log(`error: ${err}`)
        }else{
            console.log(docs)
            return res.json(docs);
        }
            
    });
});

// @route   POST api/Hosts
// @desc    crerate a post
// @access  Public
router.post('/', (req, res) => {
    // schema : _name, _userid, _date, _emergency, _surgery, _admission
    console.log("in router post")
    // console.log(req)
    const newHost = new Host({
        _name: req.body._name,
        _userid: req.body._userid,
        _date: req.body._date,
        _emergency: req.body._emergency,
        _surgery: req.body._surgery,
        _admission: req.body._admission,
    });

    newHost.save().then(host => res.json(host));
    console.log("hiii")
});

// @route   DELETE api/Hosts
// @desc    delete a post
// @access  Public
router.delete('/:id', (req, res) => {
    Host.findById(req.params.id)
        .then(host => host.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;