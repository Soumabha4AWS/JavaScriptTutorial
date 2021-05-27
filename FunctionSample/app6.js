
/*   Factory Function   */

function createCircle(radius) {
	return {
		radius,
		draw() {
			console.log('Factory Function Circle drawn with',radius, 'radius');
		}		
	}
}

/*   Constructor Function   */

function CreateCircle(radius) {
	
		this.radius = radius;
		this.draw = function() {
			console.log('Constructor Function Circle drawn with',radius, 'radius');
		}		
	
}


const factoryCircle = createCircle(0);
factoryCircle.draw();

const constructorCircle = new CreateCircle(0);
constructorCircle.draw();