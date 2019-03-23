import Vue from "vue";
import { Modal } from "ant-design-vue";

/**
 * 拦截 props属性
 * 添加延迟
 */

const attrKey = "__visible";

Modal.model.prop = attrKey;
Modal.props[attrKey] = Modal.props.visible;
Modal.props._delay = {
  required: false,
  type: Number,
  default: 0
};
delete Modal.props.visible;

Modal.data = function() {
  return {
    visible: false
  };
};

if (!Modal.watch) {
  Modal.watch = {};
}

Modal.watch.visible = {
  immediate: true,
  handler(val) {
    console.log("visible:", val);
  }
};

Modal.watch[attrKey] = {
  immediate: true,
  handler(val) {
    console.log(`${attrKey}:`, val, this._delay);
    // this.$emit("update:visible", val);
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
};

export default Vue.extend(Modal);
