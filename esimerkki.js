var nimi = "Janne";
if (nimi === "Janne") {
	var tulos = "Janne";
} else if (nimi === "Matti") {
	var tulos = "Matti";
} else if (nimi === "Jussi") {
	var tulos = "Jussi";
} else {
	var tulos = "Ei nimeä";
}

var ajoneuvo = ["Auto","Moottoripyörä"];
var kanisteri = [100, "maali", [200, "sivellin"], true];
var italy = ["black","white","red"];
italy[0] = "green";
console.log(italy);

console.log(ajoneuvo);
console.log(ajoneuvo.length);
console.log(ajoneuvo[ajoneuvo.length - 1]);
console.log(kanisteri);

var a = ["Yksi","kaksi"];
var b = a.concat(["kolme","neljä"]);
console.log(b); // [ 'Yksi', 'kaksi', 'kolme', 'neljä' ]

var planets = ["Jupiteri","Maa","Mars","Pluto"];
console.log(planets.pop());
console.log(planets);

var planets = ["Jupiteri","Maa","Mars","Pluto"];
console.log(planets.push("Neptune"));
console.log(planets);

var planets = ["Jupiteri","Maa","Mars","Pluto"];
console.log(planets.reverse());
console.log(planets);

var planets = ["Jupiteri","Maa","Mars","Pluto"];
console.log(planets.shift());
console.log(planets);

var auto = {
	merkki: "Volvo",
	malli: "244 GLi",
	vuosimalli: "1987"
}
console.log(auto.malli);

var auto = {
	merkki: "Volvo",
	malli: "244 GLi",
	vuosimalli: "1987"
}
auto.merkki = "Honda";
console.log(auto.merkki+" "+auto.malli);

var auto = {
	merkki: "Volvo",
	malli: "244 GLi",
	vuosimalli: "1987",
	malliTieto: function() {
		var txt = this.merkki + ' ' + this.malli + ', ' + this.vuosimalli; 
		return txt;
	}
}
console.log(auto.malliTieto());

var auto = {
	merkki: "Volvo",
	malli: "244 GLi",
	vuosimalli: "1987"
}
auto.vari = "punainen";
console.log(auto.vari+' '+auto.merkki);

var auto = new Object();
auto.merkki = "Saab";
auto.malli = "900";
auto.vuosimalli = "1990";
auto.vari = "Ruskea";

console.log(auto.merkki+', '+auto.malli);