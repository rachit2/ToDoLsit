const express = require('express');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const List = require('../../models/List');
const User = require('../../models/User');

// @route    GET api/list/me
// @desc     Get current users list
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    // const lists = await List.find().sort({ date: -1 });
    const lists = await List.find({user:req.user.id}).sort({ date: -1 });
    if(!lists)
    {
      return res.status(400).json({msg:'There is no List for this user'});
    }
    res.json(lists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



// @route    POST api/lists
// @desc     Create a list
// @access   Private
router.post(
    '/',
    auth,
    check('title', 'title is required').notEmpty(),
    check('description', 'description is required').notEmpty(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const user = await User.findById(req.user.id).select('-password');
        const newList = new List({
          title: req.body.title,
          description: req.body.description,
          // date: req.body.date,
          status: 'active',
          user:user.id
        });
        const list = await newList.save();
        res.json(list);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

// @route    GET api/list
// @desc     Get all list
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const lists = await List.find().sort({ date: -1 });
    res.json(lists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/lists/:id
// @desc     Get list by ID
// @access   Private
router.get('/:id', auth, 
    // checkObjectId('id'),
 async (req, res) => {
  try {
    const list = await List.findById(req.params.id);

    if (!list) {
      return res.status(404).json({ msg: 'list not found' });
    }

    res.json(list);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    PUT api/lists/:id
// @desc     Update list by ID
// @access   Private

router.put('/:id', (req, res, next) => {
  const list = new List({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    status:'completed'
  });

  List.updateOne({_id: req.params.id}, list).then(
    () => {
      res.json(list);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});


// @route    DELETE api/lists/:id
// @desc     Delete a list
// @access   Private
router.delete('/:id', [auth, 
  // checkObjectId('id')
], async (req, res) => {
try {
  const list = await List.findById(req.params.id);

  if (!list) {
    return res.status(404).json({ msg: 'list not found' });
  }

  // Check user
  // console.log(list.user.id)
  // if (list.user.toString() !== req.user.id) {
  //   return res.status(401).json({ msg: 'User not authorized' });
  // }

  await list.remove();

  res.json({ msg: 'list removed' });
} catch (err) {
  console.error(err.message);

  res.status(500).send('Server Error');
}
});

module.exports = router;