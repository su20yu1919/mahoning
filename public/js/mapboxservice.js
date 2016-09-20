angular.module('mapboxservice', [])
    .factory(('mapboxservice'), function($http){

        mapboxgl.accessToken = 'pk.eyJ1Ijoic3UyMHl1MTkxOSIsImEiOiJjaXJmZWJ3dzUwMDlnZzNuZTlia2xrZmZiIn0.pSfEC7aF6qxCF7XL-tyOIA';

        var map = new mapboxgl.Map({
            container: 'map',
            center: [-80.6495, 41.0998],
            zoom: 15,
            style: 'mapbox://styles/su20yu1919/cit3glab0001m2wqoicj3eoew'
        });
        
        // Create a popup, but don't add it to the map yet.
        var popup = new mapboxgl.Popup();
        
        map.on('load', function(){
            map.setFilter("highlight_layer", ["==", "PARCELID2", "Nah Bro"]);
        });

        map.on('mousemove', function (e) {
            var features = map.queryRenderedFeatures(e.point, { layers: ['properties_layer'] });
            if (features.length) {
                document.getElementById('features').innerHTML = JSON.stringify(features[0].properties.PARCEL_ID, null, 2);
            }
            // console.output(features); size = 16
        
        
            if (!features.length) {
                popup.remove();
                return;
            }
        
            var feature = features[0];
        
            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(map.unproject(e.point))
                .setHTML(feature.properties.PARCEL_ID)
                .addTo(map);
        
        
        });

        map.on("click", function(e){
            var features = map.queryRenderedFeatures(e.point, { layers: ['properties_layer'] });
        
            if (features.length && features[0].properties.PARCELID2.length == 12) {
                map.setFilter("highlight_layer", ["==", "PARCELID2", features[0].properties.PARCELID2]);
            } else {
                map.setFilter("highlight_layer", ["==", "PARCELID2", "Nah Bro"]);
            }
        });
        return map;
        // map.on("mouseout", function() {
        //     // map.setFilter("highlight_layer", ["==", "PARCELID2", "Nah Bro"]);
        // });
    });