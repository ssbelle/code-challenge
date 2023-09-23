const mobileHelper = {
  install(app: any) {
    app.config.globalProperties.$isMobile = () => {
      if (window.innerWidth <= 884) {
        return true
      } else {
        return false
      }
    }
  }
}

export default mobileHelper
