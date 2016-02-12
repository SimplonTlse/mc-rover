var rover =  {
	params:{
		pos:{
			x:null,
			y:null
		},
		direction: null,
	},
	init: function(x, y, dir){
		this.params.pos.x = x;
		this.params.pos.y = y;
		this.params.direction = dir;
	},
	turn: function(direction){
		if(direction ==="r") {
			if(this.params.direction === "w") {
				this.params.direction = "n"
			} else if(this.params.direction === "s") {
				this.params.direction = "w";
			} else if(this.params.direction === "e") {
				this.params.direction = 's';
			} else {
				this.params.direction = 'e';
			}
		} else {
			if(this.params.direction === "n") {
				this.params.direction = "w";
			} else if(this.params.direction === 'w'){
				this.params.direction = 's';
			} else if(this.params.direction === 's') {
				this.params.direction = 'e';
			} else {
				this.params.direction = 'n';
			}
		}
	}
};







module.exports = rover;