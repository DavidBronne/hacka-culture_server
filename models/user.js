const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {

    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    image: {type: String, default:"https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiJ5fycs4PoAhVIyxoKHTKRBZgQjRx6BAgBEAQ&url=http%3A%2F%2Fagrobiodiversityplatform.org%2Fabout-us%2Fpar-team%2Fprofile-icon-9%2F&psig=AOvVaw3VWkchr4EYyU25PpBOM4pL&ust=1583499973441431"},        
    location: {type: String, default:"https://goo.gl/maps/PgtmrqwVkhvUB2rV8"},			
    skills: [{type: String, enum: [ "data", "WebDev", "UXUI"], required: true}],
                              
    preferedProject: [{type: String, enum: [ "NGO", "Hackathon", "Business"], required: true}],
      
    initiatorOnProject: [{  type: mongoose.Schema.Types.ObjectId, ref: "Project"}],
    appliedOnProject: [{  type: mongoose.Schema.Types.ObjectId, ref: "Project"}],
    acceptedOnProject: [{  type: mongoose.Schema.Types.ObjectId, ref: "Project"}]
    
  }, 

  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
