function CreateCharacter(name,image, health, attack, counter, weapons){
	
	this.name = name;
	this.id = name.replace(/ /g,'');
	this.image = image;
	this.health = health;
	this.attack = attack;
	this.counter = counter;
	this.weapons = weapons;
	console.log(this);
	this.createProfile = function(){
		//Create Div for character profile
		
		var appendHtml = "<div id=\"#" + this.id + "\" class=\"character start-position\"><img src=\"" + this.image + "\"><div class=\"characterStats\"><div>Name: <span class=\"name\">" + this.name + "</span></div><div>Health: <span class=\"health\">" + this.health + "</span></div><div>Name: <span class=\"Attack\">" + this.attack + "</span></div><div>Counter: <span class=\"counter\">" + this.counter + "</span></div><button id=\"" + this.id + "select\" class=\"visible select\" data-character=\"" + this.id + "\" type=\"button\">Select</button><button id=\"" + this.id + "attack\" type=\"button\" class=\"invisible\" data-character=\"" + this.id + "\">Attack</button><button id=\"" + this.id + "opponent\" type=\"button\" class=\"invisible\" data-character=\"" + this.id + "\">Opponent</button>";
		$(".board").prepend(appendHtml);
	};
	this.createProfile();

	characterNames.push(this.id);

};
	
var characterNames = [];

//  character constructors
new CreateCharacter("Ahsoka Tano","assets/images/characters/ahsoka.jpg", 20, 2, 1, 2);
new CreateCharacter("CT-5555","assets/images/characters/ct5555.jpg",30, 4, 2,1);
new CreateCharacter("General Grevious","assets/images/characters/grevious.jpg", 35, 2, 1, 4);
new CreateCharacter("Count Doku","assets/images/characters/doku.jpg", 40, 10, 5, 1);

$(".select").on("click", function(){
	var player = $(this).attr("data-character");
	var selected = "#" + player + "attack";


	console.log(selected);
	$(selected).removeClass("invisible");
	$(selected).addClass("visible");

	
	// consider switch to individual classes for the buttons so that you can modify the css directly without having to add and remove classes
	characterLoop("#", "select", "visible" ,"remove");
	characterLoop("#", "select", "invisible" ,"add",);

	selectOpponent(player);

});

function selectOpponent(playerChar){
	characterLoop("#", "opponent", "visible" ,"add", playerChar);
	characterLoop("#", "opponent", "invisible" ,"remove", playerChar);
}

function characterLoop(selector, selectorName, elementName = "", action, ignoreCharacter = ""){
	for (var i = 0; i < characterNames.length; i++) {
		if(characterNames[i] != ignoreCharacter){
			var element = selector + characterNames[i] + selectorName;

			switch(action){
				case action = "add":
					$(element).addClass(elementName);
					break;
				case action = "remove":
					$(element).removeClass(elementName)
					break;
				case action = "css":
					$(element).css("visibility", value);
					break;
				default:
					break;
			}
		}
	}
}



