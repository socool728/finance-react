const isleapYear = y => {
  if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) return 1;
  return 0;
};
const getDay = (y, m, d) => {
  var sum = 0;
  var month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var i;
  month[2] = month[2] + Number (isleapYear (y));
  for (i = 1; i < y; i++) {
    sum = sum + Number (365) + Number (isleapYear (i));
  }
  for (i = 1; i < m; i++)
    sum = sum + Number (month[i]);
  sum = sum + Number (d);
  return sum % 7;
};

const convertDateFormat = preDate => {
  var weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wendesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var month = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var str = preDate;
  var y, m, d;
  var i;
  var data = str.split ('-');
  y = parseInt (data[0], 10);
  m = month[parseInt (data[1], 10)];
  d = data[2].split ('T')[0];

  return (
    weekDay[getDay (y, parseInt (data[1], 10), Number (d))] +
    ', ' +
    m +
    ' ' +
    d +
    ', ' +
    y
  );
};

export default convertDateFormat;
