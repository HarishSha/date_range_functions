// getDates(2018, month, 'April');
// getDates(2017, 'month', 'August');
// getDates(2017, 'quarter', 'Apr - Jun');
// getDates(2018, 'Current Fortnight');

getDates = function (year, type, template) {
                var date = {};
                var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var Quarters = ['Jan - Mar', 'Apr - Jun', 'Jul - Sep', 'Oct - Dec'];
                var d, index;
                switch (type) {
                    case 'month':
                        index = Months.indexOf(template);
                        if (index > -1) {
                            date.date_start = new Date(year, index, 1);
                            date.date_end = new Date(year, index + 1, 1);
                        }
                        break;
                    case 'quarter':
                        index = Quarters.indexOf(template);
                        if (index > -1) {
                            index = index > -1 ? index : 4;
                            date.date_start = new Date(year, (index) * 3, 1);
                            date.date_end = new Date(year, date.date_start.getMonth() + 3, 1);
                        }
                        break;
                    case 'Last fortnight':
                        d = new Date();
                        if (d.getDate() > 15) {
                            date.date_start = new Date(d.getFullYear(), d.getMonth(), 1);
                            date.date_end = new Date(d.getFullYear(), d.getMonth(), 16);
                        } else {
                            date.date_start = new Date(d.getFullYear(), d.getMonth() - 1, 16);
                            date.date_end = new Date(d.getFullYear(), d.getMonth(), 1);
                        }
                        break;
                    case 'Current Fortnight':
                        d = new Date();
                        if (d.getDate() > 15) {
                            date.date_start = new Date(d.getFullYear(), d.getMonth(), 15);
                            date.date_end = d;
                        } else {
                            date.date_start = new Date(d.getFullYear(), d.getMonth(), 1);
                            date.date_end = d;
                        }
                        break;
                }
        };
