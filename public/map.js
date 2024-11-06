// Inisialisasi peta dengan koordinat tengah dan zoom level
var map = L.map('map').setView([-2.1647, 102.2522], 12);


// Tambahkan peta OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// URL ikon marker berwarna
var iconUrls = {
    "red": '../imgmarker/markerred.png',
            "blue": '../imgmarker/markerblue.png',
            "green": '../imgmarker/markergreen.png',
            "black": '../imgmarker/markerblack.png',
};

// Fungsi untuk membuat ikon marker dengan warna yang berbeda
function createColoredMarker(color) {
    return L.icon({
        iconUrl: iconUrls[color],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}

// Koordinat lokasi sumber daya (contoh)
// Koordinat lokasi sumber daya (contoh) dengan URL
var resourceLocations = [
    { 
        name: "UMKM 1", 
        location: [-2.1647, 102.2322], 
        focus: "blue", 
        url: "../sumberdaya/detailpersebaranumkm.html",
        address: "alamat umkm" 
    },
    { 
        name: "Potensi Alam 1", 
        location: [-2.1643, 102.2522], 
        focus: "blue", 
        url: "../sumberdaya/detailpersebaranumkm.html",
        address: "lokasi umkm" 
    },
    { 
        name: "Sumber Daya 3", 
        location: [-2.1644, 102.2552], 
        focus: "green", 
        url: "../sumberdaya/detailpersebaranpa.html",
        address: "lokasi potensi alam" 
    },
    { 
        name: "Sumber Daya 4", 
        location: [-2.1645, 102.2512], 
        focus: "green", 
        url: "../sumberdaya/detailpersebaranpa.html",
        address: "lokasi potensi alam" 
    },
    { 
        name: "Danau Telago Biru", 
        location: [-1.6960821966562911,102.95161189298298], 
        focus: "green", 
        url: "../sumberdaya/detailpersebaranpa2.html",
        address: "Tj. Alam, Kec. Jangkat Timur, Kabupaten Merangin, Jambi 37372" 
    }
];

// Tambahkan marker untuk setiap lokasi sumber daya
resourceLocations.forEach(function(resource) {
    L.marker(resource.location, { icon: createColoredMarker(resource.focus) }).addTo(map)
        .bindPopup(`
            <b><a href="${resource.url}">${resource.name}</a></b><br>
            
            Alamat: ${resource.address}
        `);
});

