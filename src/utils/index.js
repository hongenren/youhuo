
export const treeDataTranslate = (data, id = 'id', pid = 'parentId') => { // 角色查询
    var res = [];
    var temp = {};
    for (var i = 0; i < data.length; i++) {
        temp[data[i][id]] = data[i];
    }
    for (var k = 0; k < data.length; k++) {
        if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
            if (!temp[data[k][pid]]['children']) {
                temp[data[k][pid]]['children'] = [];
            }
            if (!temp[data[k][pid]]['_level']) {
                temp[data[k][pid]]['_level'] = 1;
            }
            data[k]['_level'] = temp[data[k][pid]]._level + 1;
            temp[data[k][pid]]['children'].push(data[k]);
        } else {
            res.push(data[k]);
        }
    }
    return res;
};
export const convertJson = (obj) => { // 角色查询
    let arr = [];
    this.getJson = function (obj) {
        var _this = this;
        for (var i = 0; i < obj.length; i++) {
            arr.push(obj[i]);
            for (let item in obj[i]) {
                let childArr = obj[i][item];
                if (Array.isArray(childArr) && childArr.length > 0) {
                    _this.getJson(childArr);
                }
            }
        }
        return arr;
    };
    this.Result = this.getJson(obj);
    return this.Result;
};
export const fmtDate = (obj) => {
    const date = new Date(obj);
    const y = 1900 + date.getYear();
    const m = '0' + (date.getMonth() + 1);
    const d = '0' + date.getDate();
    return y + '-' + m.substring(m.length - 2, m.length) + '-' + d.substring(d.length - 2, d.length);
};
