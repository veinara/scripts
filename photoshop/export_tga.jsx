function saveTGA(saveFile)
{
	var tgaOpts = new TargaSaveOptions;
	tgaOpts.alphaChannels = true;
	tgaOpts.resolution = TargaBitsPerPixels.THIRTYTWO;
	tgaOpts.rleCompression = false;
	// tgaOpts.typename //Read-only. The class name of the referenced; TargaSaveOptions object.
	
	activeDocument.saveAs(saveFile, tgaOpts, true, Extension.LOWERCASE);
};

function SavePNG(saveFile)
{
	var pngOpts = new ExportOptionsSaveForWeb; 
	pngOpts.format = SaveDocumentType.PNG
	pngOpts.PNG8 = false; 
	pngOpts.transparency = true; 
	pngOpts.interlaced = false; 
	pngOpts.quality = 100;

	activeDocument.exportDocument(new File(saveFile),ExportType.SAVEFORWEB,pngOpts); 
};

function main()
{
	if ( ! documents.length) {
		return;
	}

	var doc = activeDocument;
	
	//hide all the layer groups except the one named 'common'
	for (var a=0; a<doc.layerSets.length; a++) {
		if (doc.layerSets[a].name == 'common') {
			continue;
		}
		doc.layerSets[a].visible = false;
	}
	
	for (var a=0; a<doc.layerSets.length; a++) {
		var set_name = doc.layerSets[a].name;
		if (set_name == 'common' || set_name == 'sample') {
			continue;
		}
		
		activeDocument.activeLayer = doc.layers.getByName(set_name);
		activeDocument.activeLayer.visible = true;
		var saveFile = new File(activeDocument.path +"/"+ set_name +".tga");
		saveTGA(saveFile);
		
		activeDocument.activeLayer.visible = false;
	}
//	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

main();