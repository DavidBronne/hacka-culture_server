# Hacka Culture

## Description

This app allows users to post and join hackathon projects based on their projects interests and skills.

## User Stories

- **Signup:** As an anon I can sign up in the platform so that I can start act as a user.
- **Login:** As a user I can login to the platform so that I can act as a project Initiator, project participant  or seek for participant profiles.
- **Logout:** As a user I can logout from the platform so that no one can use my user profile.
- **User profile** As a user I can see, edit or delete my profile.
- **Initiator dashboard**: As a project initiator,  I have access to my dashboard so that I can add a project, see a list of my projects and edit my projects.
- **Initiator add project**: As a project initiator,  I have access to a form so that I can fill projects features and create it in the database.
- **Initiator edit project**: As a project initiator, I can edit my projects so that I can change the features, accept/reject applied participants, delete accepted participants, delete the project.
- **Participant dashboard**: As a project participant,  I have access to my dashboard so that I can seek for projects, see a list of my projects and edit my projects.
- **Participant seek project**: As a project participant,  I have access to database filters so that I can see my results and edit each projects.
- **Participant edit project**: As a project participant, I can edit projects so that I can apply to or remove my application to the project.

## Backlog

- Allow users to seek for users profiles.
- Add localisation feature to users profiles and projects and implement localisation filter.
- Display users and projects on map
- Add profile picture with Cloudinary



# Client / Front-end

## Routes (React App)

| Path                            | Component              | Permissions | Behavior                                                     |
| :------------------------------ | ---------------------- | ----------- | ------------------------------------------------------------ |
| `/`                             | SplashPage             | anon only   | Home page, link to /signup, link to /login                   |
| `/signup`                       | SignupPage             | anon only   | Signup form, link to /login, link to home page,  navigate to /user-portal after signup |
| `/login`                        | LoginPage              | anon only   | Login form, link to /signup, navigate to  /user-portal after login |
| `/logout`                       | n/a                    | user        | Navigate to home page after logout, expire session           |
| `/user-portal`                  | UserPortal             | user        | Navigate to /initiator-dashboard, /participant-dashboard (BL: /seek-users) |
| `/user-profile-edit`            | UserProfileEdit        | user        | User profile editing form, navigate to /user-portal after submitted, navigate to home page after delete |
| `/initiator-dashboard`          | InitiatorDashboard     | user        | Navigate to /initiator-add-project, display list of initiated projects and navigate to the related /initiator-edit-project/:id |
| `/initiator-add-project`        | InitiatorAddProject    | user        | Initiator add project form, navigate to /initiator-dashboard (creating or not the project) |
| `/initiator-edit-project/:id`   | InitiatorEditProject   | user        | Initiator editing project form, display applied/accepted participants, navigate to /initiator-dashboard after deleted |
| `/participant-dashboard`        | ParticipantDashboard   | user        | Navigate to /participant-seek-project, display list of participating projects and navigate to the related /participant-edit-project |
| `/participant-seek-project`     | ParticipantSeekProject | user        | Project filter, navigate to /participant-dashboard, display list of projects and navigate to the related /participant-edit-project/:id |
| `/participant-edit-project`/:id | ParticipantEditProject | user        | Project detail (read only), navigate to /participant-seek-project, navigate to /participant-dashboard after apply/remove application |
| <u>BL:</u>                      |                        |             |                                                              |
| `/seek-users`                   | SeekUsers              | user        | User filter,  display a list of users and navigate to the related /see-user-detail |
| `/see-user-detail/:id`          | SeeUserDetail          | user        | Display user details (read only), display list of accepted projects and navigate to the related /participant-edit-project/:id |

<br>

## Components

- SplashPage
- SignupPage
- LoginPage
- UserPortal
- UserProfileEdit
- InitiatorDashboard
  - InitiatorDashboardProject
- InitiatorAddProject
- InitiatorEditProject
  - InitiatorEditProjectAppliedResources
  - InitiatorEditProjectAcceptedResources
- ParticipantDashboard
  - ParticipantDashboardProject
- ParticipantSeekProject
  - ParticipantSeekProjectResult
- ParticipantEditProject
  - ParticipantEditProjectAcceptedResource
- SeekUsers
  - SeekUsersResult
- SeeUserDetail
  - SeeUserDetailAcceptedProject
- 404 page

## Services

- Auth Service

  - auth.login(body)
  - auth.signup(body)
  - auth.logout()
  - auth.me()

- User Service

  - user.updateOne(id, body)   
  - user.delete(id) 
  - user.getByFilter(body)
  - user.getOne(id)
  - User.getAll()

- Picture : get/post? cloudinary request ???

- Project Service

  - project.getOne(id)
  - project.getAll()
  - project.create(body)
  - project.delete(id)
  - project.update(id,body)
  - Project.accept(id, userId)
  - Project.decline(id, userId)
  - Project.apply(id, userId)

  

# Server / Back-end

## Models

User model

```javascript
{
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String, default}, // BL         
  location: {type: String, default: BCN???},			
  skills: [{type: String, enum: [ "data", "WebDev", "UXUI"], required: true}],
    												
  preferedProject: [{type: String, enum: [ "NGO", "Hackathon", "Business"], required: true}],
    
  initiatorOnProject: [{  type: mongoose.Schema.Types.ObjectId, ref: "Project"}],
  appliedOnProject: [{  type: mongoose.Schema.Types.ObjectId, ref: "Project"}],
  acceptedOnProject: [{  type: mongoose.Schema.Types.ObjectId, ref: "Project"}],
  
  // time Stamp
}
```



Project model

```javascript
{
  projectName: {type: String, required: true},
  description: {type: String, required: true},
  initiator: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  
  githubUrl: {type: String, required: true, unique: true},
  
  status: {type: String, enum: [ "planning", "execution", "closed"], required: true},
    
  location: {type: String, default: BCN???, required: true},			
  
  projectCategory: {type: String, enum: [ "NGO", "Hackathon", "Business"], required: true},
  
  requiredDataSkill: {type: Number, required: true},			// Number???
  requiredWebdevSkill: {type: Number, required: true},		// Number???
  requiredUxuiSkill: {type: Number, required: true},			// Number???
  
  appliedParticipants: [{  type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  acceptedParticipants: [{  type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  
},
  {
    //time stamp
  }
```



## API Endpoints (back-end routes)

| HTTP Method | URL                          | Request Body                                                 | Success Status | Error Status | Description                                         |
| :---------- | ---------------------------- | ------------------------------------------------------------ | -------------- | ------------ | --------------------------------------------------- |
| GET         | `/auth/me`                   | Current user session                                         | 200            | 404          | Check if user is logged in and returns profile page |
| POST        | /auth/signup                 | {firstName, lastName, email, password, location, skills, preferedProject} | 201            | 404          |                                                     |
| POST        | /auth/login                  | {email, password}                                            | 200            | 404          |                                                     |
| POST        | /auth/logout                 | N.A.                                                         | 204            | 400          |                                                     |
| PUT         | /user/edit/:id               | {firstName, lastName, email, password, location, skills,preferedProject} | 200            | 400          |                                                     |
| DELETE      | /user/:id                    | N.A.                                                         | 200            | 400          |                                                     |
| GET         | /user/:id                    | N.A.                                                         | 200            | 400          |                                                     |
| POST        | /project/create              | {projectName, description, githubUrl, location, status, projectCategory, requiredDataSkill, requiredWebdevSkill, requiredUxuiSkill } | 201            | 400          |                                                     |
| GET         | /project/:id                 | N.A.                                                         | 200            | 400          |                                                     |
| PUT         | /project/edit/:id            | {projectName, description, githubUrl, location, status, projectCategory, requiredDataSkill, requiredWebdevSkill, requiredUxuiSkill } |                |              |                                                     |
| PUT         | /project/:id/accept/:userId  | N.A.                                                         | 200            | 400          |                                                     |
| PUT         | /project/:id/decline/:userId | N.A.                                                         | 200            | 400          |                                                     |
| PUT         | /project/:id/apply/          | N.A.                                                         |                |              |                                                     |
| DELETE      | /project/:id                 | N.A.                                                         | 200            | 400          |                                                     |
| GET         | /project/all                 | N.A.                                                         | 200            | 400          |                                                     |
|             |                              |                                                              |                |              |                                                     |