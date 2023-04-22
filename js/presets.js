function savePreset(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
} 

savePreset('default', {
	borderRadius    : 0,
	detailLineColor : "#ff0000",
	cutLineColor 	: "#0000ff",
	rasterizedLines : [255,255,255],
	grass 			: [160,160,160],
	roadAndBuilding : [255,255,255],
	roofs 			: [234,234,234],
	castleSoil 		: [120,120,120],
	shrub 			: [25,25,25]
});

savePreset('lighter', {
	borderRadius    : 0,
	detailLineColor : "#ff0000",
	cutLineColor 	: "#0000ff",
	rasterizedLines : [255,255,255],
	grass 			: [200,200,200],
	roadAndBuilding : [255,255,255],
	roofs 			: [234,234,234],
	castleSoil 		: [120,120,120],
	shrub 			: [100,100,100]
});