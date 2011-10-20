var GMAP = window.GMAP || {};
var GMAP = {
	map : "",
	marker : "",
	field_id : "",
	map_id : "",
	init : function(map_id, field_id, zoom, default_long, default_lat){
		var that = this;
		that.field_id = field_id;
		// Create the map and default it
		var latlng = new google.maps.LatLng(default_lat,default_long);
		that.map = new google.maps.Map(document.getElementById(map_id),{
			zoom: zoom,
			center : latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		});
		// If there is a value in the field, load it onto the map
		var current = this.getField();
		if(current!==""){
			that.setMarker(new google.maps.LatLng(current[0],current[1]));
		}
		google.maps.event.addListener(that.map, 'rightclick', function(new_location) {
			that.setMarker(new_location.latLng);
			that.setField(new_location.latLng);
		});
		$('#delete-marker').click(function(){
			if(this.marker!==""){
				that.removeMarker();
				that.removeField();
			}
		});
	},
	// 
	getField : function(){
		var current = $(this.field_id).val();
		if(current){
			return current.split(",");
		}else{
			return "";
		}
	},
	//
	removeField : function(){
		if(this.marker!==""){
			$(this.field_id).removeAttr("value");
		}
	},
	//
	setField : function(latlng){
		if(this.marker){
			$(this.field_id).val(latlng.lat()+","+latlng.lng());
		}
	},
	//
	removeMarker : function(){
		this.marker.setMap(null);
		this.marker = null;
	},
	setMarker : function(latlng){
		var that = this;
		if(!that.marker){
			that.marker = new google.maps.Marker({
				map:that.map,
				draggable:true,
				position: latlng,
			});
			google.maps.event.addListener(this.marker, 'click', function(new_location) {
			    that.map.setZoom(13);
				that.map.setCenter(new_location.latLng);
			});
			google.maps.event.addListener(this.marker, 'dragend', function(new_location) {
				that.setField(new_location.latLng);
			});
		}else{
			that.marker.setPosition(latlng)
		}
	},
};