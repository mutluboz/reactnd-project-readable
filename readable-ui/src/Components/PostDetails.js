import React from 'react'
import Post from './Post'
import { PostTypes } from '../constants';
import FloatingActionBtn from './Common/FloatingActionBtn'
import SortMenu from './Common/SortMenu'
import AppBar from 'material-ui/AppBar'
import EntryModal from './Common/EntryModal'
import { addOrUpdatePostAsync } from '../Actions/PostActions'
import { togglePostModal } from '../Actions/PostModalActions'
import { connect } from 'react-redux'

const style = {
    margin: "2px 9px 2px 10px",
};

class PostDetails extends React.Component {

    componentDidMount() {
        //ensure that pop up is closed
        this.props.closeEntryModal()
    }

    render() {
        const { postID } = this.props.match.params

        return (
            <div>
                <Post postType={PostTypes.master} id={postID} />

                <div style={style}>
                    <AppBar
                        title='Comments'
                        showMenuIconButton={false}
                        iconElementRight={<SortMenu />}
                    />
                </div>

                <FloatingActionBtn />

                <EntryModal
                    onSubmit={
                        values => this.props.updatePost(values)
                    }
                />
            </div>
        )
    }
}

function mapStateToProps({ PostData }, ownProps) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updatePost: (post) => dispatch(addOrUpdatePostAsync(true, post)),
        openEntryModal: () => dispatch(togglePostModal(true)),
        closeEntryModal: () => dispatch(togglePostModal(false))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetails)