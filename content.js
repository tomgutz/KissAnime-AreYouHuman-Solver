var imageDict = {
	3559: ["sheep, white fur", "sheep, smile"],
	4038: ["hand, brown", "hand, left"],
	4041: ["hand, right", "hand, brown"],
	4081: ["green, hat", "green, base ball"],
	4088: ["arm, violet", "arm, phone"],
	4098: ["hand, down", "hand, brown"],
	4205: ["hand, yellow", "hand, left"],
	4206: ["hand, yellow", "hand, right"],
	4257: ["hand, yellow", "hand, down"],
	4404: ["cat, amused", "cat, easily"],
	4879: ["hand, brown", "hand, fist"],
	4900: ["hand, yellow", "hand, up"],
	4947: ["hand, fist", "hand, yellow"],
	4996: ["cat, iphone love", "cat, heart", "cat, iphone"],
	5005: ["hand, brown", "hand, up"],
	5279: ["burger, white background", "burger, three layers"],
	5307: "penguin, doll",
	5366: ["boy, yellow hair", "boy, black clothes"],
	5570: ["boy, sport", "boy, golf"],
	5599: ["medal, three", "medal, copper"],
	5668: ["medal, two", "medal, silver"],
	5703: ["hand, ok", "hand, yellow"],
	5741: ["medal, one", "medal, gold"],
	5766: ["boy, sport", "boy, swim"],
	5814: ["boy, blue clothes", "boy, yellow hair", "boy, tail"],
	5900: ["hand, brown", "hand, ok"],
	5913: ["cat, poofy", "cat, not fat"],
	5949: ["boy, black clothes", "boy, sword"],
	5981: ["medal, one", "medal, gold"],
	6001: ["cat, ermmy", "cat, birthday"],
	6048: ["cat, yes", "cat, food"],
	6125: ["penguin, ice", "penguin, fishing"],
	6170: "girl, pink hair",
	6208: ["cat, pie", "cat, turkey", "cat, eat"],
	6283: "arm, muscle",
	6294: ["hand, write", "hand, brown"],
	6375: ["hand, yellow", "hand, write"],
	6597: ["girl, green clothes", "girl, black hair"],
	6700: ["girl, yellow hair", "girl, lion"],
	6893: ["boy, sport", "boy, basketball"],
	7046: "cloud, rain",
	7052: ["girl, brown hair", "girl, green clothes"],
	7053: ["hand, brown", "hand, clap"],
	7068: ["dice, one", "dice, green"],
	7135: ["burger, premium quality", "burger, green flag"],
	7290: ["girl, guitar", "girl, black hair"],
	7466: ["hand, yellow", "hand, clap"],
	7469: "girl, red clothes",
	7522: "girl, blue hair",
	7540: ["boy, ride", "boy, sport", "boy, horse"],
	7641: ["bear, panda", "bear, black and white"],
	7676: "cloud, sun",
	7801: ["dice, one", "dice, white"],
	7968: ["burger, two layers", "burger, red background"],
	8142: "cat, meowy",
	8214: ["dice, six", "dice, red"],
	8336: ["girl, green hair", "girl, pink cloak"],
	8615: "dice, brown",
	8740: ["boy, sport", "boy, bicycle"],
	8936: ["bird, farmer", "bird, yellow"],
	9032: ["boy, running", "boy, glasses"],
	9620: ["cup, white hair", "cup, black mask"],
	10114: ["emoticon, red hat", "emoticon, artist"],
	10307: ["cat, pillow", "cat, zzz"],
	10393: ["cat, read", "cat, glasses"],
	10715: ["turtle, white flag", "turtle, green shell", "turtle, yellow skin"],
	10779: ["emoticon, eat", "emoticon, apple"],
	10820: "girl, yellow slug",
	10955: ["emoticon, brown hat", "emoticon, red scalf", "emoticon, gun"],
	10962: ["turtle, four", "turtle, brown shell"],
	11110: ["emoticon, beer", "emoticon, drink"],
	11207: ["emoticon, black horn", "emoticon, red tail"],
	11222: ["emoticon, sleep", "emoticon, blue pillow"],
	11243: ["yellow, angry", "yellow, pikachu"],
	11597: ["turtle, no color", "turtle, stand"],
	11967: ["emoticon, drink", "emoticon, coffee"],
	12236: ["emoticon, eat", "emoticon, pizza"],
	12264: ["bird, blue feather", "bird, sing"],
	12316: ["emoticon, knife", "emoticon, fork"],
	12527: ["couple, brown hair", "couple, yawn", "couple, yellow pikachu"],
	12776: ["rabbit, white", "rabbit, smile"],
	12881: "boy, black hair",
	12902: ["couple, married", "couple, girl white clothes", "couple, boy black clothes"],
	13050: ["bear, armor", "bear, brown"],
	13140: ["rabbit, hold a carrot", "rabbit, yellow"],
	13311: ["emoticon, blue hat", "emoticon, police"],
	13624: ["boy, black hair", "boy, smile", "boy, black clothes"],
	13730: "yellow, candy",
	13938: ["boy, character above eye", "boy, red clothes", "boy, no eyebrow"],
	14175: ["bird, drink", "bird, coffee"],
	14176: ["turtle, four", "turtle, doll"],
	14206: ["boy, black hair", "boy, sword"],
	14226: ["boy, gray hair", "boy, scythe"],
	14253: ["couple, dog", "couple, cat"],
	14745: ["cat, cant move", "cat, lazy"],
	15583: ["dog, butterfly", "dog, flower"],
	15657: ["boy, red cloak", "boy, black hair"],
	16524: "tiger, cup",
	16567: ["bear, green tie", "bear, green hat"],
	16662: ["bird, blue feather", "bird, white belly"],
	16767: "emoticon, ice cream",
	17064: ["couple, boy black pant", "couple, boy black hair", "couple, girl brown hair", "couple, girl gray clothes", "couple, girl black skirt"],
	18010: "bird, white cloud",
	18156: "lion, pink",
	18206: ["girl, brown hair", "girl, glasses"],
	18448: ["dog, no color", "dog, bone"],
	19192: "lion, smile",
	19881: "tiger, above hand",
	20412: "penguin, king",
	21461: ["boy, fight me", "boy, yellow hair"],
	21526: "lion, no color",
	21544: ["girl, tail", "girl, yellow hair", "girl, white clothes"],
	21643: "dog, sit",
	21708: ["boy, yellow hair", "boy, orange clothes"],
	21856: ["boy, basket ball", "boy, black hat", "boy, brown hair"],
	23394: ["rabbit, blue", "rabbit, eating"],
	23675: ["dog, sad eyes", "dog, brown fur"],
	24774: ["tiger, girl", "tiger, rawr"],
	26397: ["boy, green hair", "boy, injured"],
	28005: ["girl, brown hair", "girl, yellow skirt"],
	31266: "girl, blue hair"
	
};

function isIt(a, b) {
	if(typeof imageDict[a] == "object") {
		ret = false;
		imageDict[a].forEach(function(e) {
			ret |= (b.indexOf(e) != -1);
		});
		return ret;
	} else if(typeof imageDict[a] == "string") {
		return b.indexOf(imageDict[a]) != -1;
	} else {
		return false;
	}
}

$(document).ready(function() {
	if(window.location.href == "http://kissanime.ru/Special/AreYouHuman2") {
		window.location = $("a").attr("href");
	}
	
	var imageQ = [];
	$("form[action='/Special/AreYouHuman2'] span").each(function(){
		imageQ.push($(this).text().trim());
	});
	//alert(imageQ[0] + "\n" + imageQ[1]);
	
	//var s = "";
	var cc = 0;
	$("img[width='160px']").each(function(){
		var ci = $(this);
		
		var xhr = new XMLHttpRequest();
		xhr.open('HEAD', $(this).attr("src"), false);
		xhr.onreadystatechange = function(){
		  if ( xhr.readyState == 4 ) {
			if ( xhr.status == 200 ) {
			  //s += xhr.getResponseHeader('Content-Length') + ": \"" + imageQ[0] + "\",\n";
			  //s += xhr.getResponseHeader('Content-Length') + ": \"" + imageQ[1] + "\",\n\n";
			  if(isIt(xhr.getResponseHeader('Content-Length'), imageQ)) {
				ci.trigger('click');
				cc++;
				
				/*if(cc == 2) {
					//window.history.back();
					window.history.back();
				} else*/ if(cc == 3) {
					alert(s);
				}
				
			  }
			} else {
			  alert('ERROR');
			}
		  }
		};
		xhr.send(null);
		
	});
	console.log(s);
});