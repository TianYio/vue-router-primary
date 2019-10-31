const filter = function (value) {
    if (typeof value == "object" || typeof value == "string") {
        return '格式错误！'
    }
    if (value == null || value == undefined) {
        return false;
    } else {
        return true;
    }
};
export default {name: 'isTrue', filter: filter}