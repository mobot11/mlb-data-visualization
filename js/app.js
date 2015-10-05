'use strict'
var chicago = {
	name: 'Chicago Bears',
	coordinates: [41.53, -87.38]
}

var greenBay = {
	name: 'Green Bay Packers',
	coordinates: [44.30, -88.01]
}

var arizona = {
	name: "Arizona Cardinals",
	coordinates: [33.27, -112.05]
}

var Atlanta = {
	name: "Atlanta Falcons",
	coordinates: [33.45, -84.23]
}

var baltimore = {
	name: "Baltimore Ravens",
	coordinates: [39.17, -76.37]
}

var buffalo = {
	name: "Buffalo Bills",
	coordinates: [42.54, -78.53]
}

var carolina = {
	name: "Carolina Panthers",
	coordinates: [35.14, -80.50]
}

var cincinnati = {
	name: "Cincinnati Bengals",
	coordinates: [39.06, -83.31]
}

var cleveland = {
	name: "Cleveland Browns",
	coordinates: [41.30, -81.41]
}

var dallas = {
	name: "Dallas Cowboys",
	coordinates: [32.47, -96.48]
}

var denver = {
	name: "Denver Broncos",
	coordinates: [39.43, -105.01]
}

var detroit = {
	name: "Detroit Lions",
	coordinates: [42.20, -83.03]
}

var houston = {
	name: "Houston Texans",
	coordinates: [39.43, -105.01]
}

var indianapolis = {
	name: "Indianapolis Colts",
	coordinates: [39.46, -86.09]
}

var jacksonville = {
	name: "Jacksonville Jaguars",
	coordinates: [30.20, -81.40]
}

var kansasCity = {
	name: "Kansas City Chiefs",
	coordinates: [39.06, -94.37]
}

var miami = {
	name: "Miami Dolphins",
	coordinates: [25.46, -80.12]
}

var minnesota = {
	name: "Minnesota Vikings",
	coordinates: [44.59, -93.13]
}

var newEngland = {
	name: "New England Patriots",
	coordinates: [42.21, -71.04]
}

var newOrleans = {
	name: 'New Orleans Saints',
	coordinates: [29,58, -90.07]
}

var newYorkGiants = {
	name: "New York Giants",
	coordinates: [40.43, -74.01]
}

var newYorkJets = {
	name: "New York Jets",
	coordinates: [40.43, -74.01]
}

var oakland = {
	name: "Oakland Raiders",
	coordinates: [37.47, -122,13]
}

var philadelphia = {
	name: "Philadelphia Eagles",
	coordinates: [39.57, -75.07]
}

var pittsburgh = {
	name: "Pittsburgh Steelers",
	coordinates: [40.26, -80.00]
}

var saintLouis = {
	name: "Saint Louis Rams",
	coordinates: [38.38, -90.11]
}

var sanDiego = {
	name: "San Diego Chargers",
	coordinates: [32.43, -118.09]
}

var sanFrancisco = {
	name: "San Francisco 49ers",
	coordinates: [37.48, -122.24]
}

var seattle = {
	name: "Seattle Seahawks",
	coordinates: [47.36, -122.20]
}

var tampa = {
	name: "Tampa Bay Buccaneers",
	coordinates: [27.57, -82.27]
}

var tennessee = {
	name: "Tennessee Titans",
	coordinates: [36.09, -86.48]
}

var washington = {
	name: "Washington Redskins",
	coordinates: [38.54, -77.01]
}

var teams = [washington, tennessee, tampa, seattle, sanFrancisco, sanDiego, saintLouis, pittsburgh, philadelphia, oakland, newYorkJets, newYorkGiants, newOrleans, newEngland, minnesota, miami, kansasCity, jacksonville, indianapolis, houston, detroit, denver, dallas, cleveland, cincinnati, carolina, buffalo, baltimore, Atlanta, arizona, greenBay, chicago];


var map = L.map('map').setView([37.8, -96], 4);

	  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 17,
    id: 'mobot11.njlgjgi6',
    accessToken: 'pk.eyJ1IjoibW9ib3QxMSIsImEiOiI4N2FjYWZhNWQ4YmU5Yjk2MzFlZjkxMjMzNzNmMGQzNiJ9.kkMw6O4lV-74eEs-MgHvkQ'
}).addTo(map);

teams.map(function(team) {
	L.marker(team.coordinates).bindPopup(team.name).addTo(map);
});












