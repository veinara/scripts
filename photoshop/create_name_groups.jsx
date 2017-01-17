function main() {
	if ( ! documents.length){
		return;
	}
	
	// format for the data used for generating name tags:
	// [ 'hall_number', 'lecturer', 'lecture_name' ]// data for day n
	var data = [
	[       
        [ '1','Екип на OpenFest','Официално откриване','2016-11-05','10:15' ],
        [ '1','Божидар Божанов','Electronic governance - steps in the right direction?','2016-11-05','10:30' ],
        [ '1','Цветан Узунов','Направи си сам собствен лаптоп','2016-11-05','11:30' ],
        [ '1','Петър Събев','Ако можех да се клонирам... Можеш! Делегирай!','2016-11-05','12:30' ],
        [ '1','Ivo Vachkov','DevOps \'16','2016-11-05','14:30' ],
        [ '1','Александър Благоев','Advanced Monitoring','2016-11-05','15:30' ],
        [ '1','Иво Петков','Как разработването на софтуер се промени през последните години','2016-11-05','16:30' ],
        [ '1','Петър Нефтелимов','В различията е успехът','2016-11-05','17:30' ],
        [ '1','Arjen Kamphuis','The IT of another Europe','2016-11-05','18:30' ],
        [ '2','Александър Шопов','Нови приключения на преводачите','2016-11-05','11:30' ],
        [ '2','Николай Стоицев','Open Microservice Architecture','2016-11-05','12:30' ],
        [ '2','Виктор Кирилов','Doctest','2016-11-05','14:30' ],
        [ '2','Elio Qoshi','How Open Design works at Mozilla','2016-11-05','15:30' ],
        [ '2','Христо Мохамед',' Server gerontology in LHCb','2016-11-05','16:30' ],
        [ '2','Herve Saint-Amand','OpenStreetMap','2016-11-05','17:30' ],
        [ '2','Екип на OpenFest','Lightning talks','2016-11-05','18:30' ],
        [ '3','Leonardo Laguna Ruiz','The vult language for audio applications','2016-11-05','11:30' ],
        [ '3','Zlatko Trajcheski','Designing a VFX studio with Free Software','2016-11-05','12:30' ],
	],
	[
        [ '1','Димитър Шалварджиев','Penetration Testing for Dummies','2016-11-06','10:30' ],
        [ '1','Hollie Lubbock','What\'s the story?','2016-11-06','11:30' ],
        [ '1','Jona Azizaj, Suela  Palushi, Kristi Progri','Women in Open Source','2016-11-06','12:30' ],
        [ '1','Божидар Бацов','Learn to Program in 10+ Years','2016-11-06','14:30' ],
        [ '1','Peter Hanecak','Open Data Node','2016-11-06','15:30' ],
        [ '1','Томислав Рашков','Игровизация и технологични ресурси в образователния процес','2016-11-06','16:30' ],
        [ '1','Haralan Dobrew','Personal growth through open-source contributions','2016-11-06','17:30' ],
        [ '1','Екип на OpenFest','Закриване','2016-11-06','18:15' ],
        [ '2','Merlijn Wajer','Trusted Boot on the Olimex OLinuXino LIME2','2016-11-06','10:30' ],
        [ '2','Petko Bordjukov, Владимир Витков, Марио Мишев, Ивайло Марков, Васил Колев, Marian Marinov','Преглед на инфраструктурата','2016-11-06','11:30' ],
        [ '2','Леон Анави','Направи си сам Raspberry Pi HAT','2016-11-06','12:30' ],
        [ '2','Marian Marinov','Analyzing Linux kernel crash dumps','2016-11-06','14:30' ],
        [ '2','Николай Николов','STL алгоритми в действие','2016-11-06','15:30' ],
        [ '2','Екип на OpenFest','Lightning talks','2016-11-06','16:30' ],
        [ '3','Милен Георгиев','Да изпреварим конкуренцията с bgERP','2016-11-06','10:30' ],
        [ '3','Виктор Павлов','Български софтуер за магазин и ресторант с отворен код. Демонстрация и техническа презентация.','2016-11-06','11:30' ],
	]
	];
	
	for (var day = 0; day < data.length; day++) {
		for (var lecture_index = 0; lecture_index < data[day].length; lecture_index++) {
			var lecture = data[day][lecture_index];
			
			var hall = lecture[0];
			var lecturer = lecture[1];
			var lecture_name = lecture[2];

			var group_name = (day+1) +'_'+ hall +'_'+ (lecture_index+1);
			createGroup(group_name, lecture_name, lecturer);
		}
	}

}

function createGroup(name, lecture_name, lecturer) {
	var sampleLayerSet = activeDocument.layers.getByName('sample');
	var dupLayerSet = sampleLayerSet.duplicate();
	dupLayerSet.name = name;

	for (var i=0; i < dupLayerSet.layers.length; i++) {
		var layer = dupLayerSet.layers[i];
		
		if (layer.name.indexOf('lecture_name') === 0) {
			layer.textItem.contents = lecture_name;
		} else if (layer.name.indexOf('lecturer') === 0) {
			layer.textItem.contents = lecturer;
		}
	}
}

main();
