(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{204:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),i=a.n(r),o=a(7),c=a(1),u=a(2),s=a(4),m=a(3),h=a(5),p=a(18),d=a.n(p),b=new(function(){function e(){Object(c.a)(this,e),this.auth=d.a.create({baseURL:"https://m3-deploy-codealong-hackac.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e){var t=e.firstName,a=e.lastName,n=e.email,l=e.password,r=e.location,i=e.skills,o=e.preferedProject;return this.auth.post("/auth/signup",{firstName:t,lastName:a,email:n,password:l,location:r,skills:i,preferedProject:o}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,a=e.password;return this.auth.post("/auth/login",{email:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),g=l.a.createContext(),v=g.Consumer,E=g.Provider,f=function(e){return function(t){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,t),Object(u.a)(a,[{key:"render",value:function(){var t=this;return l.a.createElement(v,null,(function(a){var n=a.login,r=a.signup,i=a.logout,o=a.user,c=a.isLoggedIn;return l.a.createElement(e,Object.assign({user:o,isLoggedIn:c,login:n,signup:r,logout:i},t.props))}))}}]),a}(n.Component)},j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isLoggedIn:!1,user:null,isLoading:!0},a.signup=function(e,t,n,l,r,i,o){b.signup({firstName:e,lastName:t,email:n,password:l,location:r,skills:i,preferedProject:o}).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.login=function(e,t){b.login({email:e,password:t}).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){b.logout().then((function(){return a.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedIn,n=e.user,r=this.login,i=this.logout,o=this.signup;return l.a.createElement(E,{value:{isLoading:t,isLoggedIn:a,user:n,login:r,logout:i,signup:o}},this.props.children)}}]),t}(l.a.Component),O=(a(66),a(16)),y=f(function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.logout,n=e.isLoggedIn;return l.a.createElement("nav",{className:"navbar"},n?l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{to:"/user-profile-edit"},l.a.createElement("p",null,"Email: ",t.email)),l.a.createElement(o.b,{to:"/",id:"home-btn"},l.a.createElement("h4",null,"Home")),l.a.createElement("button",{onClick:a},"Logout")):l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{to:"/login"}," ",l.a.createElement("button",{className:"navbar-button"},"Login")," "),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/",id:"home-btn"},l.a.createElement("h4",null,"Home")),l.a.createElement(o.b,{to:"/signup"}," ",l.a.createElement("button",{className:"navbar-button"},"Sign Up")," ")))}}]),t}(n.Component));var k=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Home Page"))},C=a(15),S=f(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={firstName:"",lastName:"",email:"",password:"",location:"",skills:"",preferedProject:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.firstName,l=t.lastName,r=t.email,i=t.password,o=t.location,c=t.skills,u=t.preferedProject;a.props.signup(n,l,r,i,o,c,u)},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value,r=t.type,i=t.options;if("select-multiple"===r){l=[];for(var o=0;o<i.length;o++)i[o].selected&&l.push(i[o].value);console.log("value multi select",l)}a.setState(Object(C.a)({},n,l))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,r=e.password,i=e.location,c=e.skills,u=e.preferedProject;return l.a.createElement("div",null,l.a.createElement("h1",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Last Name:"),l.a.createElement("input",{type:"text",name:"lastName",value:a,onChange:this.handleChange}),l.a.createElement("label",null,"First Name:"),l.a.createElement("input",{type:"text",name:"firstName",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",name:"email",value:n,onChange:this.handleChange}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:r,onChange:this.handleChange}),l.a.createElement("label",null,"Location:"),l.a.createElement("input",{type:"text",name:"location",value:i,onChange:this.handleChange}),l.a.createElement("label",null,"Skills:"),l.a.createElement("select",{name:"skills",value:c,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"data"},"data"),l.a.createElement("option",{value:"WebDev"},"WebDev"),l.a.createElement("option",{value:"UXUI"},"UXUI")),l.a.createElement("label",null,"Prefered Project Category:"),l.a.createElement("select",{name:"preferedProject",value:u,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"NGO"},"NGO"),l.a.createElement("option",{value:"Hackathon"},"Hackathon"),l.a.createElement("option",{value:"Business"},"Business")),l.a.createElement("input",{type:"submit",value:"Signup"})),l.a.createElement("p",null,"Already have account?"),l.a.createElement(o.b,{to:"/login"}," Login"))}}]),t}(n.Component)),N=f(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,l=t.password;a.props.login(n,l)},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(C.a)({},n,l))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return l.a.createElement("div",null,l.a.createElement("h1",null,"Login"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",name:"email",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),l.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component)),P=f(function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"User Portal"),l.a.createElement(o.b,{to:"/initiator-dashboard"},l.a.createElement("h4",null,"Initiate")),l.a.createElement(o.b,{to:"/participant-dashboard"},l.a.createElement("h4",null,"Participate")),l.a.createElement(o.b,{to:"/seek-users"},l.a.createElement("h4",null,"Profiles")),l.a.createElement("h1",null,"Welcome ",this.props.user.email))}}]),t}(n.Component)),x=new(function(){function e(){Object(c.a)(this,e),this.user=d.a.create({baseURL:"https://m3-deploy-codealong-hackac.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"updateUser",value:function(e){var t=e.firstName,a=e.lastName,n=e.email,l=e.location,r=e.skills,i=e.preferedProject;return this.user.put("/user/edit",{firstName:t,lastName:a,email:n,location:l,skills:r,preferedProject:i}).then((function(e){return e.data}))}},{key:"getOne",value:function(e){return this.user.get("/user/".concat(e)).then((function(e){return e.data}))}}]),e}()),U=(a(71),f(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={firstName:"",lastName:"",email:"",location:"",skills:"",preferedProject:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.firstName,l=t.lastName,r=t.email,i=t.location,o=t.skills,c=t.preferedProject;x.updateUser({firstName:n,lastName:l,email:r,location:i,skills:o,preferedProject:c}).then((function(e){console.log("updateUser",e)})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value,r=t.type,i=t.options;if("select-multiple"===r){l=[];for(var o=0;o<i.length;o++)i[o].selected&&l.push(i[o].value)}a.setState(Object(C.a)({},n,l))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.me().then((function(t){e.setState({firstName:t.firstName,lastName:t.lastName,email:t.email,location:t.location,skills:t.skills,preferedProject:t.preferedProject}),console.log("this.state in componentDidMount",e.state)}))}},{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,r=e.location,i=e.skills,o=e.preferedProject;return l.a.createElement("div",null,l.a.createElement("h1",null,"Edit User Profile"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",name:"lastName",value:a,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",name:"firstName",value:t,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"text",name:"email",value:n})),l.a.createElement("div",null,l.a.createElement("label",null,"Location"),l.a.createElement("input",{type:"text",name:"location",value:r,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Skills"),l.a.createElement("select",{name:"skills",value:i,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"data"},"data"),l.a.createElement("option",{value:"WebDev"},"WebDev"),l.a.createElement("option",{value:"UXUI"},"UXUI"))),l.a.createElement("div",null,l.a.createElement("label",null,"Prefered Project Category"),l.a.createElement("select",{name:"preferedProject",value:o,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"NGO"},"NGO"),l.a.createElement("option",{value:"Hackathon"},"Hackathon"),l.a.createElement("option",{value:"Business"},"Business"))),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",value:"Mutate"}))))}}]),t}(n.Component))),L=f(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={projects:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user._id;x.getOne(t).then((function(t){e.setState({projects:t.iniatorOnProject})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Initiator Dashboard"),l.a.createElement(o.b,{to:"/initiator-add-project"},l.a.createElement("h4",null,"Kick a Project off")),l.a.createElement("h3",null,"My Projects as Initiator"))}}]),t}(n.Component)),w=new(function(){function e(){Object(c.a)(this,e),this.project=d.a.create({baseURL:"https://m3-deploy-codealong-hackac.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"createProject",value:function(e){var t=e.projectName,a=e.description,n=e.githubUrl,l=e.status,r=e.location,i=e.projectCategory,o=e.requiredDataSkill,c=e.requiredWebdevSkill,u=e.requiredUxuiSkill;return this.project.post("/create",{projectName:t,description:a,githubUrl:n,status:l,location:r,projectCategory:i,requiredDataSkill:o,requiredWebdevSkill:c,requiredUxuiSkill:u}).then((function(e){return e.createdProject}))}}]),e}()),D=f(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={projectName:"",description:"",githubUrl:"",status:"",location:"",projectCategory:"",requiredDataSkill:"",requiredWebdevSkill:"",requiredUxuiSkill:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.projectName,l=t.description,r=t.githubUrl,i=t.status,o=t.location,c=t.projectCategory,u=t.requiredDataSkill,s=t.requiredWebdevSkill,m=t.requiredUxuiSkill;console.log("this.state for creating",a.state),w.createProject({projectName:n,description:l,githubUrl:r,status:i,location:o,projectCategory:c,requiredDataSkill:u,requiredWebdevSkill:s,requiredUxuiSkill:m}).then(a.props.history.push("/initiator-dashboard")).catch((function(e){return console.log("error",e)}))},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value,r=t.type,i=t.options;if(console.log("type",r),"select-multiple"===r){l=[];for(var o=0;o<i.length;o++)i[o].selected&&(l.push(i[o].value),console.log("value",l))}a.setState(Object(C.a)({},n,l))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.user}},{key:"render",value:function(){var e=this.state,t=e.projectName,a=e.description,n=e.githubUrl,r=e.status,i=e.location,c=e.projectCategory,u=e.requiredDataSkill,s=e.requiredWebdevSkill,m=e.requiredUxuiSkill;return l.a.createElement("div",null,l.a.createElement("h1",null,"Initiator Add Project"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Project Name"),l.a.createElement("input",{type:"text",name:"projectName",value:t,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",name:"description",value:a,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"GithubUrl"),l.a.createElement("input",{type:"text",name:"githubUrl",value:n,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Status"),l.a.createElement("select",{name:"status",value:r,onChange:this.handleChange},l.a.createElement("option",{value:"planning"},"planning"),l.a.createElement("option",{value:"execution"},"execution"),l.a.createElement("option",{value:"closed"},"closed"))),l.a.createElement("div",null,l.a.createElement("label",null,"Location"),l.a.createElement("input",{type:"text",name:"location",value:i,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Project Category"),l.a.createElement("select",{name:"projectCategory",value:c,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"NGO"},"NGO"),l.a.createElement("option",{value:"Hackathon"},"Hackathon"),l.a.createElement("option",{value:"Business"},"Business"))),l.a.createElement("div",null,l.a.createElement("label",null,"Required Data Skill"),l.a.createElement("input",{type:"text",name:"requiredDataSkill",value:u,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Required Webdev Skill"),l.a.createElement("input",{type:"text",name:"requiredWebdevSkill",value:s,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Required Uxui Skill"),l.a.createElement("input",{type:"text",name:"requiredUxuiSkill",value:m,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Kick off"})),l.a.createElement(o.b,{to:"/initiator-dashboard"}," Don't Create"))}}]),t}(n.Component)),I=f(function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Initiator Edit Project"))}}]),t}(n.Component)),q=f(function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Participant Dashboard"))}}]),t}(n.Component)),W=f(function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Participant Seek Project"))}}]),t}(n.Component)),F=f(function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("di",null,l.a.createElement("h1",null,"Participant Edit Project"))}}]),t}(n.Component)),H=f(function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Seek Users"))}}]),t}(n.Component)),A=f(function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"See User Detail"))}}]),t}(n.Component)),B=a(20);var G=f((function(e){var t=e.component,a=e.isLoggedIn,n=Object(B.a)(e,["component","isLoggedIn"]);return(l.a.createElement(O.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(O.a,{to:"/user-portal"}):a?void 0:l.a.createElement(t,e)}})))}));var M=f((function(e){var t=e.component,a=e.isLoggedIn,n=Object(B.a)(e,["component","isLoggedIn"]);return l.a.createElement(O.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,e):a?void 0:l.a.createElement(O.a,{to:"/login"})}}))})),R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(y,null),l.a.createElement(O.d,null,l.a.createElement(G,{exact:!0,path:"/",component:k}),l.a.createElement(G,{exact:!0,path:"/signup",component:S}),l.a.createElement(G,{exact:!0,path:"/login",component:N}),l.a.createElement(M,{exact:!0,path:"/user-portal",component:P}),l.a.createElement(M,{exact:!0,path:"/user-profile-edit",component:U}),l.a.createElement(M,{exact:!0,path:"/initiator-dashboard",component:L}),l.a.createElement(M,{exact:!0,path:"/initiator-add-project",component:D}),l.a.createElement(M,{exact:!0,path:"/initiator-edit-project/:id",component:I}),l.a.createElement(M,{exact:!0,path:"/participant-dashboard",component:q}),l.a.createElement(M,{exact:!0,path:"/participant-seek-project",component:W}),l.a.createElement(M,{exact:!0,path:"/participant-edit-project/:id",component:F}),l.a.createElement(M,{exact:!0,path:"/seek-users",component:H}),l.a.createElement(M,{exact:!0,path:"/see-user-detail/:id",component:A})))}}]),t}(n.Component);i.a.render(l.a.createElement(o.a,null,l.a.createElement(j,null,l.a.createElement(R,null))),document.getElementById("root"))},46:function(e,t,a){e.exports=a(204)},66:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.0b5500a6.chunk.js.map