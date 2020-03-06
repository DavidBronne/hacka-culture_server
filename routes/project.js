const express = require ('express');
const router = express.Router();
const createError = require("http-errors");
const Project = require("../models/project");
const User = require("../models/user");

// GET /project/:id


// POST  '/project/create'
// {projectName, description, githubUrl, location, status, projectCategory, requiredDataSkill, requiredWebdevSkill, requiredUxuiSkill }
// 
router.post('/create', (req, res, next) => {
   
        const {
            projectName, 
            description, 
            githubUrl, 
            location, 
            status, 
            projectCategory, 
            requiredDataSkill, 
            requiredWebdevSkill, 
            requiredUxuiSkill 
        } = req.body;
        
        const { userId } = req.session.currentUser;

        if ( !projectName || !description || !githubUrl || !location || !status || !projectCategory || !requiredDataSkill || !requiredWebdevSkill || !requiredUxuiSkill) {
            return next(createError(400));
        }
        else {
           Project.create({ 
                initiator:userId,         
                projectName, 
                description, 
                githubUrl, 
                location, 
                status, 
                projectCategory, 
                requiredDataSkill, 
                requiredWebdevSkill, 
                requiredUxuiSkill
            })
            .then((projectCreated) => {
                const projectCreatedId = projectCreated._id
                User.findByIdAndUpdate(userId,
                    { $push: { initiatorOnProject:projectCreatedId }},
                    { new:true }
                )
                .then((updatedUser) => {console.log(updatedUser)})
                .catch((error) => {console.log(error)})
            })
            .catch((error) => {console.log(error)})
        res.status(201).json(projectCreated)
        }
})



// PUT '/project/edit/:id'
// {projectName, description, githubUrl, location, status, projectCategory, requiredDataSkill, requiredWebdevSkill, requiredUxuiSkill }

// PUT '/project/:id/accept/:userId'

// PUT '/project/:id/decline/:userId'

// PUT '/project/:id/apply/'

// DELETE '/project/:id'

// GET '/project/all'



module.exports = router;
