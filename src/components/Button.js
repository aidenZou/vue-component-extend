import Vue from "vue";
import { Button } from "ant-design-vue";

const XButton = { ...Button, name: "XButton" };

const _render = XButton.render;
XButton.render = function(...args) {
  const [h] = args;

  // return h("p", "No items found.");
  // return _render.apply(this, args);
  // return _render.call(this, ...args);
  // return h("div", [_render.call(this, ...args)]);

  return h(
    "div",
    {
      style: {
        display: "inline-block",
        border: "1px dashed #e5e5e5",
        padding: "8px"
      }
    },
    [_render.apply(this, args)]
  );
};

export default Vue.extend(XButton);
