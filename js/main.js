(function(){

	$(document).ready(function(){

		// Camera
		$('.camera_wrap').camera({
			onEndTransition: function() {
				var ind = $('.camera_target .cameraSlide.cameracurrent').index();
				console.log(ind);
			}
		});


	});


}());