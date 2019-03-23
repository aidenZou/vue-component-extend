import Vue from "vue";

/**
 * 扩展 render
 * 添加 div 并绑定事件
 * 实现方式：Vue.extend
 * @param {*} C
 */
export default function(C) {
  const name = "Border";

  const _C = { ...C, name: `${C.name}${name}` };

  const _render = _C.render;
  _C.render = function(...args) {
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
        },
        on: {
          // click: this.clickHandler
          // click(e) {
          click: e => {
            console.log("on click:", e, this);
            alert("on click");
          }
        },
        nativeOn: {
          // click: this.nativeClickHandler
          // click(e) {
          click: e => {
            console.log("nativeOn click:", e);
          }
        }
      },
      [_render.apply(this, args)]
    );
  };

  return Vue.extend(_C);
}
