import '../css/style.scss';


function divCreate(id,nameclass){
 	
 	let div = document.createElement('div');
 	div.setAttribute('id',id);
 	if(nameclass){
 		div.setAttribute('class',nameclass);
 	}
 	return div
 };

/*
	For use of navmenu routing
	
*/
function changelink(num){
	var content = bodycontent[num];
	container.innerHTML = '';
	container.appendChild(content);
}

/*
		My really ghetto client end routing 

		...for now
*/

var linknum = 2;

function navmenu(){

	/*
		Create a new container

	*/
	var container = new divCreate('nav','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	
	/*
		For indexing
	*/
	

	/*
		Links for routing... 

		The web property is going to be used later when I get more into deep
		linking and proper routing. 
	
	*/
	var links = [
		{"name":"About","web":"/#/about"},
		{"name":"Home","web":"/"},
		{"name":"Projects","web":"/#/projects"}
	];


	for(var i = 0; i<links.length;i++){
		
		/*
			Saving the current link into link variable for easier use.
		*/
		var link = links[i];
		
		/*
			Create the div element
		*/

		var divlink = document.createElement('div');
		
		/*
			Set the id and class attributes here, along with the linkid
		*/
		divlink.setAttribute('id',link.name);
		divlink.setAttribute('class','col-xs-4 col-sm-4 col-md-4 col-lg-4 nav-menu-link');
		divlink.setAttribute('linkid',i);

		/*if(i == linknum) {
			divlink.setAttribute('')	
		}*/
		
		/*   
			Set the template for the text inside the div.
		*/
		divlink.innerHTML = `<span class="col-xs-12 col-sm-12 col-md-12 col-lg-12">${link.name}</span>`;
		
		/*
			Adding the event listener that enables the really 

			psuedo-jquery routing
		*/
		divlink.addEventListener('click',function(event){
			event.preventDefault();
			let stuff = document.querySelectorAll('.nav-menu-link');

			for(var z=0;z<stuff.length;z++){
				stuff[z].setAttribute('class','col-xs-4 col-sm-4 col-md-4 col-lg-4 nav-menu-link');
			}

			var id = this.getAttribute('linkid');
			this.setAttribute('class','col-xs-4 col-sm-4 col-md-4 col-lg-4 nav-menu-link highlight');
			console.log(id);
			linknum = id;
			console.log(linknum);
			changelink(linknum);
			return linknum;
		},false);

		/*
			Add it into the nav container
		*/
		container.append(divlink);
	}
	return container
};





console.log(window.location);

/*
	Home / Splash page
*/

function HomePage(){
	
	var container = new divCreate('home','col-xs-12 col-sm-12 col-md-12 col-lg-12');

	var mainbrand = new divCreate('main-logo','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	mainbrand.style.cssText = 'background:url(../images/mainLogo.svg)no-repeat;background-size:100%100%;background-position:center;';

	





	container.append(mainbrand);

	return container;
	
	
}

/*
	About Page 
*/

function AboutPage(){
	var container = new divCreate('about','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	
	var expcontainer = new divCreate('exp-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');

	var contactinfo = [
          {'type':'Email','link':'mailTo:oscar@thebigoh.net','img':'../images/pic/email.png','text':'Oscar@TheBigOh.Net'},
          {'type':'LinkedIn','link':'http://linkedin.com/in/oscarmedrano','img':'../images/pic/linkedIn.png','text':'Oscar Medrano'},
          {'type':'Github','link':'https://github.com/ohmedrano','img':'../images/pic/gitBlack.png','text':'OhMedrano'}

      ];

	var skills = [
		{"name":"JavaScript","level":8},
		{"name":"HTML5","level":9},
		{"name":"CSS/SCSS","level":9},
		{"name":"Adobe Illustrator CS6","level":8},
		{"name":"Adobe Photoshop CS6","level":8},
		{"name":"Hardware Repair","level":10}
	];

	var experience = [

  				{'name':'Freelance',
  					'position':'Tech. / Web Dev',
  				 'location':'New York',
  				  'startDate':'Aug. 1, 2014',
  				  'endDate':'NA',	
  				  'present':true,
  				 'respon':[
  				 	'Building custom desktops',
  				 	'Hardware/Software installation',
  				 	'General Troubleshooting'
  				 	


  				 ]},
  				 {'name':'Konditori',
  				 	'position':'Barista',
  				 'location':'New York',
  				  'startDate':'Oct. 14, 2013',
  				  'endDate':'NA',	
  				  'present':true,
  				 'respon':[
  				 	'Keyholder for multiple stores',
  				 	'Direct customer engagment',
  				 	'Knowledge of products',
  				 	'Makes a pretty good latte'


  				 ]},
  				 {'name':'CitiGroup',
  				 'position':'Intern Sys. Admin',
  				 'location':'New York',
  				  'startDate':'Mar. 2014',
  				  'endDate':'June 2014',	
  				  'present':false,
  				 'respon':[
  				 	'Troubleshoot on trade floor',
  				 	'General Maintenance',
  				 	'Virus Removal',
  				 	'Building and Deploying'


  				 ]}

  				 ];

  	/*
		Experience template layout
  	*/

  	for(var i=0;i<experience.length;i++){
  		var exp = experience[i];

  		console.log(exp);

  		var expdiv = document.createElement('div');

  		expdiv.setAttribute('id',exp.name);
		expdiv.setAttribute('class','col-xs-3 col-sm-4 col-md-3 col-lg-3 exp-div');
		
		var expname = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 exp-name');
		expname.innerHTML = `<span class="">${exp.name}</span>`;

		var expdate = new divCreate(null,'col-xs-12 col-sm-12 col-md-8 col-lg-8 exp-date')
		if(exp.present){
			expdate.innerHTML = `<span class="">${exp.startDate} - Present</span>`;
		} else {
			expdate.innerHTML = `<span class="">${exp.startDate} - ${exp.endDate}</span>`;
		}

		var expposition = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 ' + exp.name+'-position');
		expposition.innerHTML = `<span class="">${exp.position}</span>`;


		var expresp = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 ' + exp.name+'-respon')
		
		for(var x=0;x<exp.respon.length;x++){
			var res = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 ' +'resp'+x);

			res.innerHTML = exp.respon[x];

			expresp.append(res);

			


		}



		expdiv.append(expname,expdate,expposition,expresp);


		expcontainer.append(expdiv);
  		



  	}



	var aboutme = new divCreate('about-text-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	var skillcon = new divCreate('skill-container','col-xs-12 col-sm-12 col-md-3 col-lg-3');

	var skillTitle = new divCreate('skill-title','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	skillTitle.innerHTML = 'Skills';
	skillcon.append(skillTitle);
	for(var z=0;z<skills.length;z++){
		var skill = skills[z];

		var div = new divCreate('skill'+z,'col-xs-12 col-sm-12 col-md-12 col-lg-12 skill');
		var lvl = new divCreate('lvl'+z,'col-xs-12 col-sm-12 col-md-12 col-lg-12 skilllvl');
		var levelset = [];
		

		for(var y=0;y<10;y++){
			if(skill.level > y){
				var lvlblk = new divCreate(null,'col-sm-1 col-xs-1 col-md-1 col-lg-1 lvlblk lvlblack');
			
				lvl.append(lvlblk);
			} else {
				var lvlblk = new divCreate(null,'col-sm-1 col-xs-1 col-md-1 col-lg-1 lvlblk lvlclear');
				
				lvl.append(lvlblk);
			};
		}
		
		var skillname = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 skillnames');
		skillname.innerHTML = skill.name;

		div.append(skillname,lvl);


		skillcon.append(div);

	}

	

	var aboutText = new divCreate('about-text','col-xs-12 col-sm-12 col-md-8 col-lg-8');

	var text = `<span class="col-xs-12 col-sm-12 col-md-4 col-lg-4 inner-text">My name is Oscar. <br>I play guitar, can code, <br>and been known to eat a lot.</span>`;

	aboutText.innerHTML = text;

	var picture = new divCreate('about-picture','col-xs-12 col-sm-12 col-md-3 col-lg-3');
	picture.style.cssText = 'background:url(../images/mainFace.jpg)no-repeat;background-size:90% 130%;background-position-x:99%;background-position-y:0%;'
	aboutText.append(picture);



	aboutme.append(skillcon,aboutText);
  	/*
		Adding all the content for about page here.
  	*/

  	container.append(expcontainer,aboutme);
	

	return container;
}
/**/
/*
	Project Page
*/

function ProjectPage(){
	var container = new divCreate('projects','col-xs-12 col-sm-12 col-md-12 col-lg-12');

	var projects = [
   				{
   				'name':'Guitar Tools',
   				'web':'http://guitar.thebigoh.net',
   				'framework':'AngularJS',
   				'img':'http://i.imgur.com/3VPN6nK.jpg?1',
   				'descs':['A couple of web apps I made to help guitarists, beginner and experts, unlock the secrets of the fretboard',
   						'One web app is a virtual fretboard which a guitarist can custom tune to any tuning they choose and select a scale or chord in relative to that tuning',
   						'The other web app is a mapping of all the possible harmonic sweet spots, something that Eddie Van Halen would be very mad about.'],				
   				'done':true
   				},
   				{
   				'name':'Not a PokeDex',
   				'web':'http://notpokeDex.thebigoh.net',
   				 'framework':'AngularJS',
   				 'img':'http://i.imgur.com/Vs3r5Jm.png?1',
   				 'descs':['...Yeah, I made a pokeDex.',
   				 		  'Tried to make it look like it came from one of the games, currently does not display the most recent generation of pokemon',
   						  'I wanted to manipulate big data with tons of relations, except without staring at lots of numbers and random names. The images are not owned by me.'],
   				 'done':false
   				},
   				{
   				'name':'Mock travel website',
   				'web':'http://elsy2.thebigoh.net',
   				'framework':'AngularJS',
   				'img':'http://i.imgur.com/cnvN0DR.png?1',
   				'descs':['Guilt tripped into making a site for my mom.',
   						 'Not responsive at the moment',
   						 'Made with a NodeJS backend to handle management of project']
   				},
   				{
   				'name':'AtaByte Hosting',
   				'web':'http://jared2.theBigOh.net',
   				'framework':'AngularJS',
   				'img':'http://i.imgur.com/jkVu7mh.jpg?1',
   				'descs':['Doing a layout for my friend\'s webhosting company',
   						 'Fully responsive in different displays.',
   						 'Made in AngularJS which made it a breeze',],
   				'done':true
   				},
        		{
        		'name':'Coding Blog',
        		'web':'http://blog.theBigOh.net',
        		'framework':'MEAN',
        		'img':'http://i.imgur.com/n2XT1Kp.png?1',
        		'descs':['Personal blog where I either talk about what I\'m coding or what I\'m being distracted by',
        				 'AngularJS for the front-end',
        				 'Made with NodeJS/ExpressJS for the back-end',],
        		'done':true
        		},
       			{
       			'name':'Vega Built Gaming',
       			'web':'http://vegaBuild.thebigoh.net',
         		'framework':'AngularJS/MEAN',
         		'img':'http://i.imgur.com/QE8pSFd.png',
         		'descs':['A website for a friend\'s custom PC company',
                         'Built under a MEAN stack',
                          'Logo design made by me.'],
         		'done':true
         		},
   		];

   		function changeProject(num){
			linknum = num;
			return linknum;

		}

   		let linknum = 0; 

   		var imageContainer = new divCreate('image-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');

   		var projectSelect = new divCreate('project-select','col-xs-12 col-sm-12 col-md-12 col-lg-12');
   		var projectSelectContainer = new divCreate('project-select-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');

   		var projectDetails = new divCreate('project-details','col-xs-12 col-sm-12 col-md-4 col-lg-4');
   		var projectDetailss = new divCreate('project-detailss','col-xs-12 col-sm-12 col-md-4 col-lg-4');

   		var projectContainer = new divCreate('project-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');

   		var  projectInfo = function(num){
   				var projectInfoo = new divCreate('project-name','col-xs-12 col-sm-12 col-md-12 col-lg-12');
   					projectInfoo.innerHTML = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-name">'
   								 +projects[num].name
   								 +'</div><div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 projects-framework">Made on '
   								 +projects[num].framework
   								 +'</div><a class="col-xs-12 col-sm-12 col-md-6 col-lg-6 projects-link"href="'
   								 +projects[num].web
   								 +'">Link here</a>';

   					return projectInfoo;
   		}

   		var projectDesc = function(num){
   			var div = new divCreate('project-desc'+num,'col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-desc');

   			for(var i=0;i<projects[num].descs.length;i++){
   				var descsDiv = new divCreate('project-desc'+num,'col-xs-12 col-sm-12 col-md-12 col-lg-12 project-desc-list');
   				descsDiv.innerHTML = projects[num].descs[i];

   				div.append(descsDiv);
   			}

   			return div
   		}

   		projectDetails.append(projectInfo(linknum),projectDesc(linknum));
   		for(var i = 0; i < projects.length;i++){
   			var project = projects[i];
   			var id = i;

   			

   			


   			var projectDisplay = new divCreate('project'+i,'col-xs-12 col-sm-12 col-md-2 col-lg-2 project-display');
   			projectDisplay.setAttribute('projectId',i);
   			projectDisplay.style.cssText = `background:url(${project.img})no-repeat;background-size:80% 80%;background-position:center;`;

   			projectDisplay.addEventListener('mouseenter',function(){
   				this.style.backgroundSize = '120% 120%';
   			})
   			projectDisplay.addEventListener('mouseleave',function(){
   				this.style.backgroundSize = '80% 80%';
   			})

   			projectDisplay.addEventListener('click',function(){
   				var stuff = this.getAttribute('projectId');
   				changeProject(stuff);
   				console.log(linknum);

   				
   		

   				projectDetails.innerHTML = '';
   				projectDetails.append(projectInfo(linknum),projectDesc(linknum));
	   		imageContainer.style.cssText = `background:url(${projects[linknum].img})no-repeat;background-size:100% 100%;background-position:center;`;

   				
   			});
   			
   			projectSelectContainer.append(projectDisplay);


   		}


   		

   		imageContainer.style.cssText = `background:url(${projects[linknum].img})no-repeat;background-size:100% 100%;background-position:center;`;




   		projectSelect.append(projectSelectContainer);

   		projectContainer.append(projectDetails, projectSelect,projectDetailss);
   		imageContainer.append(projectContainer);
   		container.append(imageContainer);

	return container;
};


var body = document.querySelector('body');
var bodycon = new divCreate('body-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');
var container = new divCreate('content-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');

bodycon.append(navmenu(),container);

body.append(bodycon);

var bodycontent = [HomePage(),AboutPage(),ProjectPage()];

container.append(HomePage(),AboutPage(),ProjectPage());




