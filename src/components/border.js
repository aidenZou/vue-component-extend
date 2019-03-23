/**
 * 扩展 render
 * 添加 div 并绑定事件
 * 实现方式：mixins、extends
 * @param {*} C
 */
export default function(C) {
  const { render, name } = C;
  const _name = "Border";

  return {
    mixins: [C],
    // extends: C,
    name: `${name}${_name}`,
    render(...args) {
      const [h] = args;

      // return h("p", "No items found.");
      // return render.apply(this, args);
      // return render.call(this, ...args);
      // return h("div", [render.call(this, ...args)]);
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
        [render.apply(this, args)]
      );
    }
  };
}
