// import Vue from "vue";
import { Modal } from "ant-design-vue";
import cloneDeep from "lodash/cloneDeep";

/**
 * 拦截 props属性
 * 添加延迟
 */

const attrKey = "__visible";

const { name } = Modal;
const _name = "Delay";

// 删除 props属性
const visible = Modal.props.visible;
// const _Modal = { ...Modal, props: { ...Modal.props } };
const _Modal = cloneDeep(Modal);
delete _Modal.props.visible;

_Modal.model.prop = attrKey;

export default {
  mixins: [_Modal],
  name: `${name}${_name}`,
  // model: { prop: attrKey },
  props: {
    __visible: visible,
    _delay: {
      required: false,
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      visible: false
    };
  },
  watch: {
    visible: {
      immediate: true,
      handler(val) {
        console.log("visible:", val);
      }
    },
    __visible: {
      immediate: true,
      handler(val) {
        console.log(`${attrKey}:`, val, this._delay);
        // this.visible = val;

        // 显示
        if (val) {
          setTimeout(() => {
            this.visible = val;
          }, this._delay);
        } else {
          // 隐藏
          this.visible = val;
        }
      }
    }
  }
};
