/*
 * Random graphics stuff
 *
 */

module.exports = function(width, height) {

	/* Colors and coordinates */
	var tmpred=0,
		tmpgreen=0,
		tmpblue=0;


	for(var x=0;x<width;x++) {
		for(var y=0;y<height;y++) {
			ppm += (tmpred) + " " + (tmpgreen) + " " + (tmpblue) + " ";
		}
		if(tmpred++==255){
			tmpred = 0;
		}
		if(tmpgreen++==255){
			tmpred = 0;
		}
		if(tmpblue++==255){
			tmpred = 0;
		}
	}

	return ppm;

}
