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

function navmenu(){

	/*
		Create a new container

	*/
	var container = new divCreate('nav','col-xs-12 col-sm-12 col-md-12 col-lg-12');
	
	/*
		For indexing
	*/
	var linknum = 0;

	/*
		Links for routing... 

		The web property is going to be used later when I get more into deep
		linking and proper routing. 
	
	*/
	var links = [
		{"name":"About","web":"/about"},
		{"name":"Home","web":"/"},
		{"name":"Projects","web":"/projects"}
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
		divlink.setAttribute('class',link.name);
		divlink.setAttribute('class','col-xs-4 col-sm-4 col-md-4 col-lg-4 nav-menu-link');
		divlink.setAttribute('linkid',i);
		
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
			var id = this.getAttribute('linkid');
			console.log(id);
			linknum = id;
			
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
		
		var skillname = new divCreate(null,'col-xs-12 col-sm-12 col-md-12 col-lg-12 skillname');
		skillname.innerHTML = skill.name;

		div.append(skillname,lvl);


		skillcon.append(div);

	}

	

	var aboutText = new divCreate('about-text','col-xs-12 col-sm-12 col-md-9 col-lg-9');

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

}


var body = document.querySelector('body');
var bodycon = new divCreate('body-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');
var container = new divCreate('content-container','col-xs-12 col-sm-12 col-md-12 col-lg-12');

bodycon.append(navmenu(),container);

body.append(bodycon);

var bodycontent = [HomePage(),AboutPage()];

container.appendChild(bodycontent[1]);




