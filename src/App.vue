<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

      <a-tabs defaultActiveKey="1" tabPosition="left">
        <a-tab-pane tab="扩展 render" key="1">
          <a-row class="btns" :gutter="16">
            <x-button type="primary">Primary</x-button>
            <x-button type="primary" @click="showModal()">Open Modal</x-button>
            <x-switch defaultChecked />
            <x-tag color="#2db7f5">#2db7f5</x-tag>
            <x-button-border type="primary">Primary</x-button-border>
          </a-row>
        </a-tab-pane>
        <a-tab-pane tab="拦截 props属性" key="2">
          <div class="btns">
            <a-button type="primary" @click="showModal()">Open Modal</a-button>
            <a-button type="primary" @click="showModal(1500)"
              >打开延迟 1500ms</a-button
            >
            <a-button type="primary" @click="showModal(3000)"
              >打开延迟 3000ms</a-button
            >
          </div>
        </a-tab-pane>
        <a-tab-pane tab="Tab 3" key="3">Content of Tab 3</a-tab-pane>
      </a-tabs>

      <x-modal
        title="延迟 Modal"
        v-model="visible"
        :_delay="delay"
        @ok="handleOk"
      >
        <p>我来自 vue.ant.design...</p>
        <p>但我可以延迟打开哦...</p>
        <p>猜猜我怎么实现的...</p>
      </x-modal>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import { Button, Switch, Tag } from "ant-design-vue";
// import HelloWorld from "./components/HelloWorld.vue";
import xModal from "./components/Modal";
// import xButton from "./components/Button";
import border from "./components/border";

// const xTag1 = border(Tag);
// const xTag2 = border(xTag1);
// console.log(111, xTag1, xTag2);

export default {
  name: "app",
  components: {
    // HelloWorld,
    xModal,
    xButton: border(Button),
    xSwitch: border(Switch),
    xTag: border(Tag),
    // xTag: xTag2,
    xButtonBorder: border(border(Button))
  },
  data() {
    return {
      zh_CN,
      visible: false,
      delay: 0 // 延迟时间
    };
  },
  methods: {
    showModal(num = 0) {
      this.delay = num;
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  padding: 20px;
}

.btns {
  margin-bottom: 8px;

  & > * {
    margin-right: 8px;
  }
}
</style>
