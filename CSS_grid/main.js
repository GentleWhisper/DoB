// var sum = function() {
// 	var first = +prompt('Введите первую цифру:', 'Уот сюда'),
// 		second = +prompt('Введите вторую цифру', 'Уот сюдаааа');
// 	return (first + second);
// }

// console.log(sum());

//alert( 4.35.toFixed(1) );
//=====================================
// var nameUpperFirst = function() {
// 	//body
// 	var name = prompt('Введите имя с маленькой буквы', 'айка');

// 	for (var i = 0; i < 4; i++) {
// 		if (i == 0) {
// 			console.log(name[i].toUpperCase());
// 		} else
// 		console.log(name[i]);
// 	};
	
// }
// nameUpperFirst();
//=====================================

// var checkSpam = function(str) {
//       if ((str.toLowerCase()).indexOf('xxx'))
//       return console.log(~(str.toLowerCase()).indexOf('xxx'));
//     }
    
// checkSpam('free xxxxx');
//=====================================

// var isEmpty = function(obj) {
//       var counter = 0;
//       for (var key in obj) {
//         counter++;
//       };
//       return counter == 0;
//     };
    
//     var shedule = {};
    
//     alert(isEmpty(shedule));
    
//     shedule[8:30] = "подъем";
    
//     alert(isEmpty(shedule));
//=====================================

// var salaris = {
	
// };

// // var sum = 0;
// // for (key in salaris) {
// // 	sum+=salaris[key];
// // }

// // alert(sum);
// var maxSal = 0;
// var maxSalMen = "Нет сотрудников";
// for (var name in salaris) {
// 	if (salaris[name] > maxSal) {
// 		maxSal = salaris[name];
// 		maxSalMen = name;
// 	} 
// }
//=====================================
// alert(maxSalMen);

// var styles = ['jaz', 'bluz'];

// console.log(styles);

// styles.push('rock-n-roll');

// console.log(styles);

// styles[styles.length - 2] = 'classic';

// console.log(styles);

// alert(styles.shift());

// console.log(styles);

// styles.unshift('rap', 'raggy');

// console.log(styles);
//=====================================

var array = [],
	num = 0,
	sum = 0;

var numbers = function() {
	// body...
	if ((num = prompt('Введите число')) !== '') {
		array.push(+num);
		return numbers();
	}

	for (var i = 0; i < array.length; i++) {
		sum += (array[i]);
	}

	return sum;
}

alert(numbers());
















































