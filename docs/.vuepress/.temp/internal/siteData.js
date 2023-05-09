export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"嘉美开发社区\",\"description\":\"带你成为全栈开发者\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/logo.png\"}],[\"meta\",{\"name\":\"嘉美开发社区\",\"content\":\"嘉美、嘉美工作室\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
