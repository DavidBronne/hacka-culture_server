const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema (
    {

        projectName: {type: String, required: true},
        description: {type: String, required: true},
        initiator: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
        
        githubUrl: {type: String, required: true, unique: true},
        
        status: {type: String, enum: [ "planning", "execution", "closed"], required: true},
          
        location: {type: String, default: "https://goo.gl/maps/PgtmrqwVkhvUB2rV8", required: true},			
        
        projectCategory: {type: String, enum: [ "NGO", "Hackathon", "Business"], required: true},
        
        requiredDataSkill: {type: Number, required: true},			
        requiredWebdevSkill: {type: Number, required: true},		
        requiredUxuiSkill: {type: Number, required: true},			
        
        appliedParticipants: [{  type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        acceptedParticipants: [{  type: mongoose.Schema.Types.ObjectId, ref: "User"}]

    },

    {
        timestamps: {
          createdAt: 'created_at',
          updatedAt: 'updated_at'
        },
      }
)