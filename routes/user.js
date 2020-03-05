const express = require("express");
const router = express.Router();
const creatError = require("http-errors");
const User = require("../models/user");
const mongoose = require('mongoose');

// HELPER FUNCTIONS

const {
    isLoggedIn,
    isNotLoggedIn
} = require("../helpers/middlewares");

// GET '/user/:id'
//isLoggedIn,

router.get('/:id',   async (req,res,next) => {
    try {
        const { id } =req.params;

        if ( !mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({message: 'Unvalid Id'});
            return;
        }

        const user = await User.findById(id);
            // .populate('');
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
})


// PUT  '/user/edit/:id'
//      {firstName, lastName, email, location, skills,preferedProject}
router.put('/edit/:id', isLoggedIn, async (req, res, next) => {
    try {
        const { id } = req.params;
        const {firstName, lastName, email, location, skills, preferedProject} = req.body;
    
        //check if user trying to edit is the loggedin user
        // if (id != req.session.currentUser._id) {
        //     res.status(401).json({message: 'Unauthorized user id'});
        //     return;
        // } 
        
        //Check that required fiels are filled in
        // || !email || !location || !skills || !preferedProject
        if (!firstName || !lastName || !email || !location || !skills || !preferedProject ) {
            next(createError(400));
        }
        else {
            const updatedUser = await User.findByIdAndUpdate(
                id,
                {firstName, lastName, email, location, skills,preferedProject},
                { new: true}
            );

            req.session.currentUser = updatedUser;
            res.status(200).json(updatedUser);
        }
    }
    catch (error) {
        next (error);
    }
})


// DELETE '/user/:id'
router.delete('/:id', isLoggedIn, async(req, res, next) => {
    
    // check if user trying to edit is the loggedin user
    if (id != req.session.currentUser._id) {
        res.status(401).json({message: 'Unauthorized user id'});
        return;
    } 

    try {
        const { id } = req.params;
        
        await User.findByIdAndRemove(id);

        // await Project.updateMany(
        //     {},
        //     {$pull: { appliedParticipants:id, acceptedParticipants:id}},
        //     { new: true }
        // );

        res.status(200).json({message:'User deleted'})
    }
    catch(error) {
        next (error);
    }
} )




module.exports = router;