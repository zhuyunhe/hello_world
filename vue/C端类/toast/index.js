const Toast = {};
var [toastVM, toastTimer] = [null, null]
const defaultOption = {
  duration: '2000'
}
Toast.install = (Vue, options) => {
  var option = {
    ...defaultOption,
    ...options
  }

  if (toastTimer){
    clearTimeout(toastTimer)
    toastVM.show = false
  }
  Vue.prototype.$toast = function (tip) {
    if(!toastVM){
      var ToastTpl = Vue.extend({
        data(){
          return {
            show: false,
            tip
          }
        },
        render(h) {
          if(!this.show) {
            return false
          }
          return h(
            'div',
            {
              class: ['toast'],
              domProps: {
                innerHTML: this.tips
              }
            }
          )
        }
      })
      toastVM = new ToastTpl()
      const tpl = toastVM.$mount().$el
      document.body.appendChild(tpl)
    }
  }
  toastVM.tip = tip;
  toastVM.show = true;

  toastTimer = setTimeout(() => {
    toastVM.show = toastTimer = false;
  }, option.duration);

}

export default Toast