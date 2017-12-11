export const SHOW = 'SHOW'
export const HIDE = 'HIDE'

export const togglePostModal = (show) => show ? { type: SHOW } : { type: HIDE }