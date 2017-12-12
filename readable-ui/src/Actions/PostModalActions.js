export const SHOW = 'SHOW'
export const HIDE = 'HIDE'
export const LOAD_POST = 'LOAD_POST'
export const CLEAR_FORM = 'CLEAR_FORM'

export const togglePostModal = (show) => show ? { type: SHOW } : { type: HIDE }

export const loadPost = (post) => {
    return (dispatch) => {
        dispatch({
            type: LOAD_POST,
            post: {
                ...post,
                isVisible: true
            }
        })
    }
}