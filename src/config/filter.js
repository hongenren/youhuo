export default {
    minute2hour: function (time) {
        let hour;
        hour = (time % 60 === 0) ? time / 60 : (time / 60).toFixed(1);
        return hour;
    },
    cutstring: function (str, len) {
        let newstr;
        newstr = str.length > len ? (str.substring(0, len) + ' ...') : str;
        return newstr;
    },
    // 电子证照申领表状态
    status: function (type) {
        if (!type) {
            return '';
        }
        const val = parseInt(type);
        if (val === -20) {
            return '取消';
        }
        if (val === -10) {
            return '拒绝';
        }
        if (val === 10) {
            return '审核中';
        }
        if (val === 20) {
            return '通过';
        }
        if (val === 30) {
            return '已过期';
        }
        if (val === 40) {
            return '冻结中';
        }
        return '';
    },
    obtainType: function (type) {
        if (!type) {
            return '';
        }
        const val = parseInt(type);
        if (val === 10) {
            return 'EMS';
        }
        if (val === 20) {
            return '民政';
        }
        return '';
    },
    state: function (type) {
        if (!type) {
            return '';
        }
        const val = parseInt(type);
        if (val === 10) {
            return '待制证';
        }
        if (val === 11) {
            return '已制证待复核';
        }
        if (val === 20) {
            return '待发证';
        }
        if (val === 30) {
            return '已发证';
        }
        if (val === -10) {
            return '已作废';
        }
        return '';
    },
    // 申领纸质护照
    paperStatus: function (type) {
        if (!type) {
            return '';
        }
        const val = parseInt(type);
        if (val === 10) {
            return '已申领';
        }
        if (val === 20) {
            return '补换';
        }
        if (val === -10) {
            return '未申领';
        }
        return '';
    },
    // 当天周几
    getWeek (v) {
        let weekDay = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        let myDate = new Date(Date.parse(v));
        return weekDay[myDate.getDay()];
    },
    initTime (v) {
        v = Number(v);
        if (v < 60) {
            return v + '分钟';
        }
        return Math.floor(v / 60) + '小时' + (v % 60 === 0 ? '' : v % 60 + '分钟');
    },
    date: function (time, hour) { // 把时间戳格式:若有参返回年-月-日时:分:秒 若无参返回 年-月-日
        if (!time) {
            return '';
        }
        let y, m, d, date, h, ms, s, data, hours;
        date = new Date(time);
        y = date.getFullYear();
        m = date.getMonth() + 1;
        d = date.getDate();
        h = date.getHours();
        ms = date.getMinutes();
        s = date.getSeconds();
        data = y + '年' + format(m) + '月' + format(d) + '日';
        hours = format(h) + ':' + format(ms) + ':' + format(s);
        if (hour === 'b') {
            return data.substring(5, 11);
        }
        if (hour) {
            if (hour === 'd') {
                return (data + ' ' + hours).substring(11, 17);
            }
            return data + ' ' + hours;
        } else {
            return data;
        }
        function format (num) {
            if (parseInt(num) < 10) {
                num = '0' + num;
            }
            return num;
        }
    },
    // 数字转金额显示
    numToCash: function (value, num = 2) {
        // 返回处理后的值
        value = parseFloat(value);
        if (value === null || value === undefined || value === '' || value === 0 || value === !NaN || !value) {
            value = 0;
            return value.toFixed(num);
        } else {
            value = value.toFixed(num);
            let end = value.split('.')[1];
            let start = value.split('.')[0];
            let arr = [];

            start = start.split('').reverse();
            start.map(function (elem, index) {
                arr.push(elem);
                if (index % 3 === 2 && index !== value.length - 1 && index !== start.length - 1) {
                    arr.push(',');
                }
            });

            start = arr.reverse().join('');
            return start + '.' + end;
        }
    },
    initDate: function (time, hour) {
        if (!time) {
            return '';
        }
        time = time.substring(0, 10);
        time = time.replace(time.substring(4, 5), '年');
        time = time.replace(time.substring(7, 8), '月');
        time = time + '日';
        return time;
    },
    initHours: function (time) {
        console.log(time);
        return time.substring(11, 16);
    }
};
