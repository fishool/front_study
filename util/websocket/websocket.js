/**
 * @file: 工具
 */
import { vueMain } from '@/main'
import util from '@/libs/commonutil';

let connectWebSocket = function (uid) {
    let websocketPath = util.getAbsolutePath('/pcWebSocket/' + uid);
    websocketPath = websocketPath.replace('http://', 'ws://');
    let ws = new WebSocket(websocketPath);

    // 监听是否连接成功
    ws.onopen = function () {
        console.log('ws连接状态：' + ws.readyState);
        // 连接成功则发送一个数据
        ws.send('test1');
    }
    // 接听服务器发回的信息并处理展示
    ws.onmessage = function (dataMessage) {
        console.log('接收到来自服务器的消息：');
        // 调用全局总线更新页面数据
        vueMain.$bus.$emit('updatePageData', dataMessage);
        vueMain.$bus.$emit('updateNoticeMessage', dataMessage);
    }
    // 监听连接关闭事件
    ws.onclose = function () {
        // 监听整个过程中websocket的状态
        console.log('ws连接状态：' + ws.readyState);
    }
    // 监听并处理error事件
    ws.onerror = function (error) {
        console.log(error);
    }
}
export { connectWebSocket };
