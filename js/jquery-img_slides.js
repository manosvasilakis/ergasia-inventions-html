/* Change Random Invention Photo
 * from the imgs dir with jquery.
 * */
var dirs = [
	'./imgs/1-printing_press.d/',
	'./imgs/2-light_bulb.d/',
	'./imgs/3-airplane.d/',
	'./imgs/4-personal_computer.d/',
	'./imgs/5-vaccines.d/',
	'./imgs/6-automobile.d/',
	'./imgs/7-clock.d/',
	'./imgs/8-telephone.d/',
	'./imgs/9-refrigerator.d/',
	'./imgs/10-photography.d/',
];

/* Make the title for the current displayed image */
var titles = [
	'Τυπογραφία',
	'Λαμπτήρας Φωτεισμού',
	'Αεροπλάνο',
	'Προσωπικός Υπολογιστής',
	'Εμβόλιο',
	'Αυτοκίνητο',
	'Ρολόι',
	'Τηλέφωνο',
	'Ψυγείο',
	'Φωτογραφία',
];

/* Make the link for the invention page of the current displayed image
 * path from the index.html file: './inventions/N-invention.html'
 * */
var urls = [
	'./inventions/1-printing_press.html',
	'./inventions/2-light_bulb.html',
	'./inventions/3-airplane.html',
	'./inventions/4-personal_computer.html',
	'./inventions/5-vaccines.html',
	'./inventions/6-automobile.html',
	'./inventions/7-clock.html',
	'./inventions/8-telephone.html',
	'./inventions/9-refrigerator.html',
	'./inventions/10-photography.html'
];

function slideImgs () {
	var rnd = Math.floor(Math.random() * dirs.length);
	var rnd_img = dirs[rnd] + '1.jpg';
	var rnd_tle = titles[rnd];
	var rnd_url = urls[rnd];
	$('#main-img').fadeOut('slow', function(){
		$('#inv-title-url, #inv-img-url').attr('href', rnd_url);
		$('#inv-title').html(rnd_tle);
		$(this).attr('src', rnd_img).fadeIn('slow');
	});
}

$(document).ready(function(){
	setInterval(3000);
	setInterval(slideImgs, 3000);
});
