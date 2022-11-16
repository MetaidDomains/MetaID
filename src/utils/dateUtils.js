
const DateUtils = {};

DateUtils.formatDate = function(value, fmt) {
  var date;
  if (typeof(value) == "string") {
    value = value.replace(/[-]/g, "/");
    if (value.lastIndexOf('.') != -1) {
      value = value.substring(0, value.lastIndexOf('.'));
    }
  }
  if (value == null || value == '' || value == 'null') {
    return value;
  } else {
    if (Number.isInteger(value)) {
      value = Number(value);
    }
    date = new Date(value);
  }

  if (fmt == null || fmt == '' || fmt == 'null') {
    fmt = 'yyyy-MM-dd';
  }
  return date.Format(fmt);
};


DateUtils.formatDateTime = function(value, fmt) {
  var date;
  if (typeof(value) == "string") {
    value = value.replace(/[-]/g, "/");
    value = value.substring(0, value.lastIndexOf('.'));
  }
  if (value == null || value == '') {
    return value;
  } else {
    if (Number.isInteger(value)) {
      value = Number(value);
    }
    date = new Date(value);
  }

  if (fmt == null || fmt == '' || fmt == 'null') {
    fmt = 'yyyy-MM-dd hh:mm:ss';
  }
  return date.Format(fmt);
};



DateUtils.formatGridDate = function(fmt) {
  return function(value, row, index) {
    var text;
    try {
      text = DateUtils.formatDate(value, fmt);
    } catch (err) {
      text = value;
    }
    return text;
  }
};

DateUtils.formatGridDateTime = function(fmt) {
  return function(value, row, index) {
    var text;
    try {
      text = DateUtils.formatDate(value, fmt);
    } catch (err) {
      text = DateUtils.formatDate(value, "yyyy-MM-dd hh:mm:ss");
    }
    return text;

  }
};

function isLeapYear(year) {
  return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}

function getMonthDays(year, month) {
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28)
};

DateUtils.getMonthDays = (year, month) => {
  return getMonthDays(year, month)
}

DateUtils.getWeekNumber = function(now) {
  var year = now.getFullYear(),
    month = now.getMonth(),
    days = now.getDate();

  for (var i = 0; i < month; i++) {
    days += getMonthDays(year, i);
  }


  var yearFirstDay = new Date(year, 0, 1).getDay() || 7;

  var week = null;
  if (yearFirstDay == 1) {
    week = Math.ceil(days / yearFirstDay);
  } else {
    days -= (7 - yearFirstDay + 1);
    week = Math.ceil(days / 7) + 1;
  }

  return week;
}


DateUtils.getLastDay = function(year, month) {

  var date = new Date(year, month - 1, '01');

  date.setDate(1);

  date.setMonth(date.getMonth() + 1);

  let cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24);
  let day=formatStr(cdate.getDate());

  let obj={
    year,month,day,dataStr:year+month+day+"595959"
  }
  return obj;
}

function formatStr(v) {
  let srt = v > 10 ? v : "0" + v
  return srt
}


Date.prototype.Format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, 
    "d+": this.getDate(), 
    "h+": this.getHours(), 
    "H+": this.getHours(),
    "m+": this.getMinutes(), 
    "s+": this.getSeconds(), 
    "q+": Math.floor((this.getMonth() + 3) / 3), 
    "S": this.getMilliseconds()
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
      .substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
        (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

DateUtils.getLastNDays = function(days, fmt) {
  return DateUtils.formatDate(new Date().getTime() - days * 1000 * 24 * 60 * 60, fmt ||  "yyyy-MM-dd");
};



DateUtils.getDays = function(strDateStart, strDateEnd) {
  var strSeparator = "-"; 
  var iDays;
  var oDate1 = strDateStart.split(strSeparator);
  var oDate2 = strDateEnd.split(strSeparator);
  var strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
  var strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
  iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24)

  return iDays;
}


 DateUtils.nowDateAdd = function(dateTemp, days) {
	var dateTemp = dateTemp.split("-");
	var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]);
	var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
	var rDate = new Date(millSeconds);
	var year = rDate.getFullYear();
	var month = rDate.getMonth() + 1;
	if (month < 10) month = "0" + month;
	var date = rDate.getDate();
	if (date < 10) date = "0" + date;
	return (year + "-" + month + "-" + date);
};



export default DateUtils


