function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'none',
    duration
  })
}

toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration
  })
}


toast.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'success',
    duration
  })
}

export default toast
