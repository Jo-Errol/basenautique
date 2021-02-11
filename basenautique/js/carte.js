var vm = new Vue({
    el: '#app',
    data: {
        map: null,
        tileLayer: null,
        lieualocaliser: { adresse: '', region: '', codepostal: 0},

        layers: [
            {
                id: 1,
                name: 'Voile du Grand Large',
                active: false,
                features: [
                    {
                        id: 0,
                        name: 'Voile du Grand Large',
                        type: 'polygon',
                        coords: [
                            [45.78686, 4.99025]
                        ],
                    },
                ],
            }
        ],
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            this.map = L.map('map').setView([45.78686, 4.99025], 15);
            this.tileLayer = L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                {
                    maxZoom: 18,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
            );

            this.tileLayer.addTo(this.map);
            L.Routing.control({
                waypoints: [
                    L.latLng(45.76400, 4.99025),
                    L.latLng(45.78686, 4.99025)
                ]
            }).addTo(this.map);
        },
        submit: function(event) {
            console.log("search called with : " + this.adresse + this.region + this.codepostal);
            //http://dev.virtualearth.net/REST/v1/Locations/FR/{postalCode}/{region}/{addressLine}?includeNeighborhood={includeNeighborhood}&include={includeValue}&maxResults={maxResults}&key={BingMapsAPIKey}
        }

    },
    computed: {
        adresse: {
            get: function () {
                return this.lieualocaliser.adresse;
            }, set: function (nouvelleValeur) {
                this.lieualocaliser.adresse = nouvelleValeur;
            }
        },
        region: {
            get: function () {
                return this.lieualocaliser.region;
            }, set: function (nouvelleValeur) {
                this.lieualocaliser.region = nouvelleValeur;
            }
        },
        codepostal: {
            get: function () {
                return this.lieualocaliser.codepostal;
            }, set: function (nouvelleValeur) {
                this.lieualocaliser.codepostal = nouvelleValeur;
            }
        },
    }
});