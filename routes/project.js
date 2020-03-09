const express = require ('express');
const router = express.Router();
const createError = require("http-errors");
const mongoose = require('mongoose'); 

const Project = require("../models/Project");
const User = require("../models/User");



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
    console.log('req.body from backend', req.body)
    const  userId  = req.session.currentUser._id;
    console.log('userId', userId)

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
            console.log('projectCreated', projectCreated)
            const projectCreatedId = projectCreated._id
            
            User.findOneAndUpdate({_id:userId},
                { $push: { "initiatorOnProject":projectCreatedId }},
                { new:true }
                )
                .then((updatedUser) => {console.log(updatedUser)})
                .catch((error) => {console.log(error)})
            })
            .catch((error) => {console.log(error)})
            res.status(201).json(projectCreated)
        }
    })
    
// GET '/project/all'
router.get('/all', async (req, res, next) => {
    try {
        const projects = await Project.find()
        .populate('initiator appliedParticipants acceptedParticipants')
        // console.log('projects', projects) ;
        
        if (!projects) {
            next(createError(404));
        }
        else {
            res.status(200).json(projects);
        }
    }
    catch (errot) {
        next(error);
    }
})

    // GET /project/:id
router.get('/:id', async(req, res, next) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ "message": "Unvalid Id"});
        return;
    }

    try {
        const project = await Project.findById( id )
            .populate('initiator appliedParticipants acceptedParticipants')
            
        res.status(200).json(project);
    }
    catch (error) {
        next(error);
    }
})

    
// PUT '/project/edit/:id'
// {projectName, description, initiator, githubUrl, location, status, projectCategory, requiredDataSkill, requiredWebdevSkill, requiredUxuiSkill}

router.put('/edit/:id', async (req,res, next) => {
    
    const curentUserId = req.session.currentUser._id
    const projectId = req.params.id;
    const {
        projectName,
        description,
        githubUrl,
        initiator,
        location,
        status,
        projectCategory,
        requiredDataSkill,
        requiredWebdevSkill,
        requiredUxuiSkill
    } = req.body;

    console.log('body', req.body)

    // check current user is initiator of the project

    if ( curentUserId != initiator ) {
        console.log('curentUserId', curentUserId)
        console.log('initiator', initiator)
        res.status(401).json({"message":"Unauthorized user"});
        return;
    }  

    if ( !projectName || !description || !githubUrl || !location || !status || !projectCategory || !requiredDataSkill || !requiredWebdevSkill || !requiredUxuiSkill ) {
        return next(createError(400));
    }

    else {

        try {
            await Project.findByIdAndUpdate(
                projectId,
                {
                    projectName,
                    description,
                    githubUrl,
                    location,
                    status,
                    projectCategory,
                    requiredDataSkill,
                    requiredWebdevSkill,
                    requiredUxuiSkill
                },
                { new:true }
            );

        const updatedProject = await Project.findById(projectId);
        // console.log('updatedProject', updatedProject);
        res.status(200).json(updatedProject);   
        }
        catch (error) { next(error); }
    }
})



// PUT '/project/apply/:projectId'
router.put('/apply/:projectId', async(req, res, next) => {
    const projectId = req.params.projectId;
    console.log('projectId', projectId)
    const userId = req.session.currentUser._id;
    console.log('userId', userId)

    try {

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: {appliedOnProject:  projectId}},
            { new: true }
        )
        req.session.currentUser = updatedUser;
        
        
        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            {$addToSet: {appliedParticipants:  userId}},
            { new:true }
        )
        res.status(200).json({updatedUser, updatedProject});
        }
        catch (error) { next(error) }
})

// PUT '/project/accept/:projectId/:userId'
router.put('/accept/:projectId/:userId', async(req, res, next) => {
    const { projectId, userId } = req.params;
    const currentUserId = req.session.currentUser._id
    
    
    try {
        // query await Project.findById => project.initiator
        const initiator = await Project.findById(
            projectId,
            'initiator'
        )
        console.log('initiatorOUT', initiator.initiator)
        // if current user = initiator
        if ( ( currentUserId != initiator.initiator) ) { 
            console.log('curentUserId', currentUserId)
            console.log('initiatorIN', initiator.initiator)
            res.status(401).json({"message":"Unauthorized user"});
            return;
        }
        console.log('passe par ici?');
        

        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            {$pull: {appliedParticipants:  userId},
            $addToSet: {acceptedParticipants:  userId}},
            { new:true }
        )
        

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $pull: {appliedOnProject:  projectId},
            $addToSet: {acceptedOnProject:  projectId}},
            { new: true }
        )

        res.status(200).json({updatedProject, updatedUser});
    }
    catch (error) {next(error)}
})

// PUT '/project/decline/:projectId/:userId'
router.put('/decline/:projectId/:userId', async(req, res, next) => {
    const { projectId, userId } = req.params;
    const currentUserId = req.session.currentUser._id
    
    
    try {
        // query await Project.findById => project.initiator
        const initiator = await Project.findById(
            projectId,
            'initiator'
        )
        console.log('initiatorOUT', initiator.initiator)
        // if current user = initiator
        if ( ( currentUserId != initiator.initiator) ) { 
            console.log('curentUserId', currentUserId)
            console.log('initiatorIN', initiator.initiator)
            res.status(401).json({"message": "Unauthorized user"});
            return;
        }
        console.log('passe par ici?');
        

        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            {$pull: {appliedParticipants:  userId}},
            { new:true }
        )
        

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $pull: {appliedOnProject:  projectId}},
            { new: true }
        )

        res.status(200).json({updatedProject, updatedUser});
    }
    catch (error) {next(error)}
})

// DELETE '/project/delete/:id'
router.delete('/delete/:projectId', async(req, res, next) => {
    const { projectId } = req.params;
    const currentUserId = req.session.currentUser._id
    
    try {
        // query await Project.findById => project.initiator
        const initiator = await Project.findById(
            projectId,
            'initiator'
        )
        
        // if current user = initiator
        if ( ( currentUserId != initiator.initiator) ) { 
            res.status(401).json({"message":"Unauthorized user"});
            return;
        }
        await Project.findByIdAndRemove(projectId);

        await User.updateMany( 
            {},
            { $pull: { initiatorOnProject:projectId, appliedOnProject:projectId,acceptedOnProject:projectId } },
            { new: true }
          );

        res.status(200).json({ "message": "project deleted"})

    }
    catch (error) {next(error)}
})




module.exports = router;
