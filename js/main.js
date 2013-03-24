(function(){

	$(document).ready(function(){

		// Camera
		$('.camera_wrap').camera({
			onStartLoading: function() {
				var ind = $('.camera_target .cameraSlide.cameracurrent').index();
				console.log(ind);
				$("#intro").typewriter();
			}
		});

	});


}());