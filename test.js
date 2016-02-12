var test = require('tape');

test('instanciation', function(t){
	var A = function(){
		return {
			x:0
		};
	};

	var a = new A();
	var b = new A();
	
	t.notEqual(a, b);
	t.end();
});

test('copie par référence', function(t){
	var toto = {
		x:0
	};

	var titi = toto;
	t.equal(toto, titi);

	t.end();

});
////
var rover = require('./lib/index.js');


test('true is true', function(t){
	t.equal(true, true);
	t.end();
});

// test('')


test('definir la position initiale', function(t){
	rover.init(3, 4, 'w');

	t.equal(rover.params.pos.x, 3);
	t.equal(rover.params.pos.y, 4);
	t.equal(rover.params.direction, 'w');
	
	t.end();
});

test('turn little robot', function(t){
	rover.turn('r');

	t.equal(rover.params.direction, 'n');

	rover.turn('l');

	t.equal(rover.params.direction, 'w');

	rover.params.direction = 'w';
	rover.turn('l');

	t.equal(rover.params.direction, 's');
	t.end();
});
