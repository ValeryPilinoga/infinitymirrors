const Scene = require('Scene');
const Diagnostics = require('Diagnostics');
const Materials = require('Materials');
const Patches = require('Patches');

const materialIndex = Patches.getScalarValue('materialIndex');

const image1 = Scene.root.find('Image 1');
const image2 = Scene.root.find('Image 2');
const image3 = Scene.root.find('Image 3');

const materialWide = Materials.get('CameraMaterial_Wide');
const materialNormal = Materials.get('CameraMaterial_Normal');
const materialTablet = Materials.get('CameraMaterial_Tablet');

const materials = [
	materialWide,
	materialNormal,
    materialTablet
];

materialIndex.monitor().subscribe(function(event) {
	image1.material = materials[event.newValue];
	image2.material = materials[event.newValue];
	image3.material = materials[event.newValue];
});