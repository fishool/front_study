import Setting from '@/setting';

/**
 * @description 获取后台接口绝对路径
 */
util.getAbsolutePath = function (path) {
    let apiBaseURL = Setting.apiBaseURL;
    path = `${apiBaseURL}${path}`;
    var img = new Image();
    img.src = path; // 设置相对路径给Image, 此时会发送出请求
    return img.src; // 此时相对路径已经变成绝对路径
};

export default util;
