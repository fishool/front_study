<template>
  <span class="i-layout-header-trigger i-layout-header-trigger-min i-layout-header-trigger-in" >
    <Notification
        :wide="isMobile"
        :badge-props="badgeProps"
        class="i-layout-header-notice"
        :class="{ 'i-layout-header-notice-mobile': isMobile }"
        :count="unreadTodo"
        @on-clear="handleClear"
        @on-load-more="handleLoadMore"
    >
      <audio id="noticeMessage" src="@/assets/noticeMessage.mp3"  style="visibility: hidden">
      </audio>
      <Icon id="noticeIcon" slot="icon" custom="i-icon i-icon-notification" :class="{activeNotice: isActiveNotice}"  @click="init"/>
    </Notification>
  </span>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        props: ['title'],
        name: 'iHeaderNotice',
        data () {
            return {
            };
        },
        computed: {
            ...mapState('admin/layout', ['isMobile'])
        },
        created () {

        },
        mounted () {
            this.init();
            let that = this;
            this.$bus.$on('updateNoticeMessage', async () => {
                that.init().then(() => {
                    that.isActiveNotice = true;
                    document.getElementById('noticeMessage').play();
                });
            })
        },
        methods: {
            async init () {
                this.isActiveNotice = false;
                // 初始加载待办 通知消息 ,初始化页面数据
                await this.abHttpUtil
                    .get('/oa/oAInstationMsg/getInstationMsg?type=1&pageNo=1&pageSize=5')
                    .then(res => {
                        console.log(res);
                        this.todoBaseList = res.data.resultList;
                        this.todoList = this.todoBaseList;
                        this.otherCount = res.data.count
                        this.unreadTodo = res.data.count
                });
                console.log('done1');
                await this.abHttpUtil
                    .get('/oa/oAInstationMsg/getInstationMsg?type=2&pageNo=1&pageSize=5')
                    .then(res => {
                        this.messageBaseList = res.data.resultList;
                        this.messageList = this.messageBaseList;
                        this.count = res.data.count;
                        this.unreadMessage = res.data.count;
                        console.log(res)
                        for (var i = 0; i < this.messageList.length; i++) {
                            if (this.messageList[i].type == '21') {
                                this.$set(this.messageList[i], `type`, 'md-star');
                                this.$set(this.messageList[i], 'iconColor', '#ff9900');
                            }
                            if (this.messageList[i].type == '22') {
                                this.$set(this.messageList[i], `type`, 'md-home');
                                this.$set(this.messageList[i], 'iconColor', '#87d068');
                            }
                            if (this.messageList[i].type == '23') {
                                this.$set(this.messageList[i], `type`, 'md-plane');
                                this.$set(this.messageList[i], 'iconColor', '#3391e5');
                            }
                        }
                    })
                console.log('done2');
            },
        }
    };
</script>

<style>
@keyframes animated-border {
  0% {  box-shadow: 0 0 0 0 rgba(255,255,255,0.4);   }
  100% {  box-shadow: 0 0 0 20px rgba(255,255,255,0);   }
}

.activeNotice {
  animation: animated-border 1s infinite;
  /*animation: shake-slow 10s infinite;*/
}
#noticeIcon {
  width: 2em;
  display: inline-block;
  position: relative;
  line-height: 64px;
}
</style>
