import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.css']
})
export class YearViewComponent implements OnInit {
  selectedYear: number;
  data: string;

  constructor() { }

  ngOnInit() {
    this.render();
  }

  render() {
		var data = "";
			for (var i=1; i<=12; i++) {
				data = data + this.getCalendar(i, this.selectedYear);
			}
    this.data = data;
    //this.data = $sce.trustAsHtml(data);
  }

  getCalendar(month, year) {
  	var CAL_DAYS_LABELS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  	var CAL_MONTHS_LABELS = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  	var CAL_DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  	var cal_current_date = new Date();
  	var currentMonth = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month-1;
  	var currentYear  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
  	var firstDay = new Date(currentYear, currentMonth, 1);
  	var startingDay = firstDay.getDay();
  	switch (startingDay) {
  		case 0: startingDay=6; break;
  		case 1: startingDay=0; break;
  		case 2: startingDay=1; break;
  		case 3: startingDay=2; break;
  		case 4: startingDay=3; break;
  		case 5: startingDay=4; break;
  		case 6: startingDay=5; break;
  	}
  	var monthLength = CAL_DAYS_IN_MONTH[currentMonth];
  	  if (currentMonth == 1) { // February only!
  		if((currentYear % 4 == 0 && currentYear % 100 != 0) || currentYear % 400 == 0){
  		  monthLength = 29;
  		}
  	  }
  	var monthName = CAL_MONTHS_LABELS[currentMonth]
  	var html = "";
  	html += "<div class='year-calendar-element'><table class='calendar-table'>";
  	html += '<tr><th colspan="7">';
  	html +=  monthName + "&nbsp;" + currentYear;
  	html += '</th></tr>';
  	html += '<tr class="calendar-header">';
  	  for(var i = 0; i <= 6; i++ ){
  		html += '<td class="calendar-header-day">';
  		html += CAL_DAYS_LABELS[i];
  		html += '</td>';
  	  }
  	html += '</tr><tr>';
  	var day = 1;
  	  for (var i = 0; i < 9; i++) {
  		for (var j = 0; j <= 6; j++) {
  			if (day <= monthLength && (i > 0 || j >= startingDay)) {
  				html += "<td class='calendar-day' onClick='getClicked(" + currentYear + "," + (currentMonth+1) + "," + day + ")' >";
  				html += day;
  				day++;
  			} else {
  				html += "<td class='' >"
  			}
  		  html += '</td>';
  		}
  		if (day > monthLength) {
  		  break;
  		} else {
  		  html += '</tr><tr>';
  		}
  	  }
  	html += '</tr></table></div>';
  	//this.html = html;
  	return html;
  }

}
