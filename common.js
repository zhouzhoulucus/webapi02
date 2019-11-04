/**
 * Created by zhouLucus on 2019/11/2.
 */
// 格式化后的指定的日期和时间 -- 封装成一个函数

/**
 * 获取指定格式的时间
 * @param dt 日期的对象
 * @returns {string}  返回的字符串的日期时间
 */
function getDate(dt) {
    // 获取年
    var year = dt.getFullYear();

    // 获取月
    var month = dt.getMonth() + 1;
    month = month < 10 ? "0" + month : month;

    // 获取日
    var day = dt.getDate();
    day = day < 10 ? "0" + day : day;

    // 获取小时
    var hour = dt.getHours();
    hour = hour < 10 ? "0" + hour : hour;

    // 获取分钟
    var min = dt.getMinutes();
    min = min < 10 ? "0" + min : min;

    // 获取秒
    var sec = dt.getSeconds();
    sec = sec < 10 ? "0" + sec : sec;

    return year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + sec;
}


function my$(id){
    return document.getElementById(id);
}