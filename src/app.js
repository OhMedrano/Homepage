import '../css/style.scss';

var win = window;
/*
	Creator functions
*/
function divCreate(id,nameclass){
 	
 	let div = document.createElement('div');
 	div.setAttribute('id',id);
 	if(nameclass){
 		div.setAttribute('class',nameclass);
 	}
 	return div
 };


function preloadPics(picURL,callback){
	var loaded = 0,
		loadedImages = [];

	for(var i = 0; i<picURL.length;i++){
		(function(img,src){
			img.onload = function(){
				if(++loaded == picURL.length && callback){
					callback();
				}
			};

			img.onerror = function() {

			};
			img.onabout = function() {

			};

			img.src = src;

			loadedImages.push(img);
		}(new Image(),picURL[i]));
	}
	return loadedImages;
}
var sources = ['../images/houston/','../images/ironman/'];

/* Houston has 5 parts*/
var houston = new preloadPics([sources[0]+'baseBG.jpg',sources[0]+'layer1BG.png',sources[0]+'layer2BG.png',sources[0]+'layer3BG.png',sources[0]+'layer4BG.png']);

var ironman = new preloadPics([sources[1]+'baseBG.png',sources[1]+'layer1BG.png',sources[1]+'layer2BG.png',sources[1]+'layer3BG.png',sources[1]+'layer4BG.png',sources[1]+'layer5BG.png',sources[1]+'layer6BG.png',sources[1]+'layer7BG.png']);


console.log(ironman);
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

window.addEventListener('scroll',function(){
	var height = window.offsetHeight;
	console.log(height);
})

/*
	Parallax Background

	Have to do a seperate layer for this. My original idea didn't work... 


*/



/*
	Home / Splash page
*/






function HomePage(){
	var bgSize = 120;

	var something = 0;




	var container = new divCreate('home','col-xs-12 col-sm-12 col-md-12 col-lg-12 parallax');

	var mainbrand = new divCreate('main-logo','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	var brandText = new divCreate('brand-text','col-xs-12 col-sm-12 col-md-6 col-lg-6');

	brandText.innerHTML = 'THE BIG OH';

	var bgContainer = new divCreate('bg-container','col-xs-12 col-sm-12 col-md-12 col-lg-12 houston-parallax');

	var baseBG = new divCreate('houston-base','col-xs-12 col-sm-12 col-md-12 col-lg-12 houston-parallax-stuff houston-parallax-base');
			baseBG.style.cssText = 'background:url('+houston[0].currentSrc+')no-repeat;background-size:100%100%;background-position:center;';
			bgContainer.append(baseBG);

	var valkyre = new divCreate('houston-valk','col-xs-12 col-sm-12 col-md-12 col-lg-12');
		valkyre.style.cssText = 'background:url('+houston[3].currentSrc+')no-repeat;background-size:100%100%;background-position:center;';
			bgContainer.append(valkyre);
	mainbrand.append(brandText);
	var main2 = new divCreate('main-logoo','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	container.append(bgContainer,mainbrand,main2);
		
	

		



	return container;
	
	
}

/*
	About Page 
*/

function AboutPage(){
	var container = new divCreate('about','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	var newcontainer = new divCreate('about-box','col-xs-12 col-sm-12 col-md-7 col-lg-7');
	var expcontainer = new divCreate('exp-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');

	var contactinfo = [
          {'type':'Email','link':'mailTo:oscar@thebigoh.net','img':'../images/email.png','text':'Oscar@TheBigOh.Net'},
          {'type':'LinkedIn','link':'http://linkedin.com/in/oscarmedrano','img':'../images/linkedIn.png','text':'Oscar Medrano'},
          {'type':'Github','link':'https://github.com/ohmedrano','img':'../images/gitBlack.png','text':'OhMedrano'}

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
		expdiv.setAttribute('class','col-xs-3 col-sm-4 col-md-4 col-lg-4 exp-div');
		
		var expname = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 exp-name');
		expname.innerHTML = `<span class="">${exp.name}</span>`;

		var expdate = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 exp-date')
		if(exp.present){
			expdate.innerHTML = `<span class="">${exp.startDate} - Present</span>`;
		} else {
			expdate.innerHTML = `<span class="">${exp.startDate} - ${exp.endDate}</span>`;
		}

		var expposition = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 exp-position ' + exp.name+'-position');
		expposition.innerHTML = `<span class="">${exp.position}</span>`;


		var expresp = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 exp-resp ' + exp.name+'-respon')
		
		for(var x=0;x<exp.respon.length;x++){
			var res = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 group-resp ' +'resp'+x);

			res.innerHTML = exp.respon[x];

			expresp.append(res);

			


		}



		expdiv.append(expname,expdate,expposition,expresp);


		expcontainer.append(expdiv);
  		



  	}



	var aboutme = new divCreate('about-text-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	var skillcon = new divCreate('skill-container','col-xs-12 col-sm-12 col-md-9 col-lg-9');

	var skillTitle = new divCreate('skill-title','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	skillTitle.innerHTML = 'Skills';
	skillcon.append(skillTitle);
	for(var z=0;z<skills.length;z++){
		var skill = skills[z];

		var div = new divCreate('skill'+z,'col-xs-12 col-sm-12 col-md-6 col-lg-6 skill');
		var lvl = new divCreate('lvl'+z,'col-xs-12 col-sm-12 col-md-12 col-lg-12 skilllvl');
		var levelset = [];
		

		for(var y=0;y<10;y++){
			if(skill.level > y){
				var lvlblk = new divCreate(null,'col-sm-1 col-xs-1 col-md-1 col-lg-1 lvlblk ');
				var lvlcolor = new divCreate(null,'col-sm-1 col-xs-1 col-md-1 col-lg-1  lvlblack');
				lvlblk.append(lvlcolor);
				lvl.append(lvlblk);
			} else {
				var lvlblk = new divCreate(null,'col-sm-1 col-xs-1 col-md-1 col-lg-1 lvlblk ');
				var lvlcolor = new divCreate(null,'col-sm-1 col-xs-1 col-md-1 col-lg-1    lvlclear');
				lvlblk.append(lvlcolor);
				lvl.append(lvlblk);
			};
		}
		
		var skillname = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 skillnames');
		skillname.innerHTML = skill.name;

		div.append(skillname,lvl);


		skillcon.append(div);

	}

	

	var aboutText = new divCreate('about-text','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	var textstuff = 'I like to code, and play guitar when I\'m stuck.';
	var text = `<span class="col-xs-12 col-sm-12 col-md-8 col-lg-8 inner-text">${textstuff}</span>`;

	aboutText.innerHTML = text;

	var picture = new divCreate('about-picture','col-xs-12 col-sm-12 col-md-3 col-lg-3');
	picture.style.cssText = 'background:url(../images/face.png)no-repeat;background-size:100% 120%;background-position-x:99%;background-position-y:0%;'
	aboutText.append(picture);


	for(var q=0;q<contactinfo.length;q++){
  		var contact = contactinfo[q];
  		var contactlink = document.createElement('a');
  		contactlink.setAttribute('href',contact.web);
  		contactlink.setAttribute('class','col-xs-12 col-sm-12 col-md-2 col-lg-2 contact-links');

  		var contactImage = new divCreate('contact-image'+q,'col-xs-12 col-sm-12 col-md-12 col-lg-12 contact-image');
  		contactImage.style.cssText = 'background:url('+contact.img+')no-repeat;background-size:50%50%;background-position:center;';
  		var contactText = new divCreate('contact-text'+q,'col-xs-12 col-sm-12 col-md-12 col-lg-12 contact-text');
		contactText.innerHTML = contact.text;

		contactlink.append(contactImage,contactText);  		
  		aboutText.append(contactlink);

  		console.log('sup');
  	}

	aboutme.append(aboutText,skillcon);
  	/*
		Adding all the content for about page here.
  	*/
  	newcontainer.append(aboutme,expcontainer);

  	container.append(newcontainer);
	
  	console.log('hey');
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
        		'framework':'MEAN Stack',
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

   		var imageContainer = new divCreate('image-container','col-xs-12 col-sm-12 col-md-6 col-lg-6');

   		var projectSelect = new divCreate('project-select','col-xs-12 col-sm-12 col-md-12 col-lg-12');
   		var projectSelectContainer = new divCreate('project-select-container','col-xs-12 col-sm-12 col-md-6 col-lg-6');

   		var projectDetails = new divCreate('project-details','col-xs-12 col-sm-12 col-md-4 col-lg-4');
   		var projectDetailss = new divCreate('project-detailss','col-xs-12 col-sm-12 col-md-5 col-lg-5');

   		var projectContainer = new divCreate('project-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');

   		var  projectInfo = function(num){
   				var projectInfoo = new divCreate('project-name','col-xs-12 col-sm-12 col-md-12 col-lg-12');
   					projectInfoo.innerHTML = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projects-name">'
   								 +projects[num].name
   								 +'</div><div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 projects-framework">Built on '
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

   		projectDetailss.append(projectInfo(linknum),projectDesc(linknum));
   		for(var i = 0; i < projects.length;i++){
   			var project = projects[i];
   			var id = i;

   			

   			


   			var projectDisplay = new divCreate('project'+i,'col-xs-12 col-sm-12 col-md-4 col-lg-4 project-display');
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

   				
   		

   				projectDetailss.innerHTML = '';
   				projectDetailss.append(projectInfo(linknum),projectDesc(linknum));
	   		imageContainer.style.cssText = `background:url(${projects[linknum].img})no-repeat;background-size:100% 100%;background-position:center;`;

   				
   			});
   			
   			projectSelectContainer.append(projectDisplay);


   		}

   		var projectdivtitle = new divCreate('project-div-title','col-xs-12 col-sm-12 col-md-12 col-lg-12');

   		var brandText = new divCreate('brand-text','col-xs-12 col-sm-12 col-md-6 col-lg-6');

		brandText.innerHTML = 'PROJECTS';


		projectdivtitle.append(brandText);

   		

   		imageContainer.style.cssText = `background:url(${projects[linknum].img})no-repeat;background-size:100% 100%;background-position:center;`;

   		var parallaxbg = new divCreate('parallax2','col-xs-12 col-sm-12 col-md-12 col-lg-12 iron-parallax');

   		var ironBG = new divCreate('iron-wall','col-xs-12 col-sm-12 col-md-12 col-lg-12');

   		ironBG.style.cssText = 'background:url('+ironman[0].currentSrc+')no-repeat;background-size:100%100%;background-position:center;';

   		var ironPara = new divCreate('iron-para','col-xs-12 col-sm-12 col-md-12 col-lg-12');

   		for(var v=1;v<ironman.length;v++){
   			

   			var ironbody = new divCreate('iron'+v,'col-xs-12 col-sm-12 col-md-12 col-lg-12 iron-body');

   			ironbody.style.cssText = 'background:url('+ironman[v].currentSrc+')no-repeat;background-size:100%100%;background-position:center;';

   			ironPara.append(ironbody);
   		}

   		parallaxbg.append(ironBG,ironPara);

   		projectSelect.append(projectSelectContainer);

   		projectContainer.append( projectDetailss,projectSelect);
   		
   		container.append(parallaxbg,projectdivtitle,imageContainer,projectContainer);

	return container;
};



/*Parallax function*/




var body = document.querySelector('body');
var bodycon = new divCreate('body-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');
var container = new divCreate('content-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');

var paraLargeBG = new divCreate('large-display','hidden-xs hidden-sm col-md-12 col-lg-12 parallax');
var paraSmallBG = new divCreate('small-display','hidden-md hidden-lg col-xs-12 col-sm-12');
var para1 = new divCreate('parallax-base','col-xs-12 col-sm-12 col-md-12 col-lg-12 parallax-layer');
var para2 = new divCreate('parallax-layer','col-xs-12 col-sm-12 col-md-12 col-lg-12 parallax-layer');

para1.append(HomePage(),AboutPage());
para2.append(ProjectPage());

var bodycontent = [HomePage(),AboutPage(),ProjectPage()];






paraLargeBG.append(para1,para2);


bodycon.append(container);

body.append(paraLargeBG,paraSmallBG);




