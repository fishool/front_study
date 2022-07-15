/**
 * iView Admin Pro 业务配置
 * */

const env = process.env.NODE_ENV;

const Setting = {
    websocketUrl: env === 'development' ? 'ws://localhost:8080/pcWebSocket/' : 'ws://59.52.10.19:11090/pcWebSocket/',
};
module.exports = Setting;
