document.addEventListener("DOMContentLoaded", function(event) { 
  var oneDay = document.getElementsByClassName('calendar__container_item');
  	  currDate = new Date();
      arr = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь', 'Декабрь'];
      currMonth = document.getElementById('month');
      showMonth = currDate.getMonth();
      leftArr = document.getElementById('prev');
      rightArr = document.getElementById('next');
      calendar = document.getElementsByClassName('calendar__container_days')[0];

  currMonth.innerHTML = arr[currDate.getMonth()] + ' ' + currDate.getFullYear();

	function daysInMonth (month, year) {
	    return new Date(year, month+1, 0).getDate();
	}

	function redrawCalendar (month) {
		calendar.innerHTML = '';
		monthDate = new Date(2018, month, 1);
		var shift = monthDate.getDay();
		if (shift == 0) {
			shift = 6;
		}
		else {
			shift = shift - 1;
		}
		for (var i = 0; i < shift; i++) {
			var empty = document.createElement('div');
			empty.className = 'calendar__container_item empty';
			empty.innerHTML = daysInMonth(month-1,2018) - shift + i + 1 + ', ' + getWeekDay(i);
			calendar.appendChild(empty);
		}

		for (var i = 1; i <= daysInMonth(month,2018); i++) {
			var day = document.createElement('div');
			day.className = 'calendar__container_item';
			
			if ((i + shift -1) / 7 < 1)
				{
					day.innerHTML = i +', ' + getWeekDay(i+shift-1);
				}
			else {
				day.innerHTML = i;
			}

			var random = Math.random();
			if (random > 0.9) {
				day.className = 'calendar__container_item notice';
				day.innerHTML += '<br /><b>Праздник</b><p>ЕЕеееее</p>'	
			}

			calendar.appendChild(day);
		}	
		console.log(month + ' ' + shift)
	}

	function getWeekDay(daynumber) {
	  var days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	  return days[daynumber];
	}

  leftArr.onclick = function() {
  	if (!showMonth) {
  		return;
  	}
  	showMonth -= 1;
  	currMonth.innerHTML = arr[showMonth] + ' ' + currDate.getFullYear();
   	redrawCalendar(showMonth);
  }

  rightArr.onclick = function() {
  	if (showMonth == 11) {
  		return
  	}
  	showMonth += 1;
  	currMonth.innerHTML = arr[showMonth] + ' ' + currDate.getFullYear();
  	redrawCalendar(showMonth);
  }

	redrawCalendar(showMonth);
});