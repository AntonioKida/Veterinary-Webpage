google.maps.event.addDomListener(window, "load", function() {
                var mapElement = document.getElementById("mapa");
                var map = new google.maps.Map(mapElement, {
                    center: {
                        lat: 19.191418,
                        lng: -96.136771
                    },
                    zoom: 18,
                    scrollwheel: false
                });
                var marker = new google.maps.Marker({
                        position: {
                            lat: 19.191418,
                            lng: -96.136771
                        },
                        map: map,
                        title: 'Hello World!'
                });
            });