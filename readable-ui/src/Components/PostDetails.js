import React from 'react'
import Post from './Post'
import { PostTypes } from '../constants';
import FloatingActionBtn from './Common/FloatingActionBtn'
import SortMenu from './Common/SortMenu'
import AppBar from 'material-ui/AppBar'
import EntryModal from './Common/EntryModal'
import { addOrUpdatePostAsync } from '../Actions/PostActions'
import { fetchCommentsAsync } from '../Actions/CommentActions'
import { togglePostModal } from '../Actions/PostModalActions'
import { connect } from 'react-redux'

const style = {
    margin: "2px 9px 2px 10px",
};

class PostDetails extends React.Component {

    componentDidMount() {
        //ensure that pop up is closed
        this.props.closeEntryModal()
        //fetch comments 
        this.props.fetchComments(this.props.match.params.postID)
    }

    render() {
        const { postID } = this.props.match.params;
        const { comments } = this.props;

        return (
            <div>
                <Post postType={PostTypes.master} id={postID} />

                <div style={style}>
                    <AppBar
                        title='Comments'
                        showMenuIconButton={false}
                        iconElementRight={<SortMenu />}
                    />
                    {
                        (comments && comments.map((c, i) =>
                            <Post key={i}
                                postType={PostTypes.comment}
                                id={c.id}
                            />
                        ))
                    }
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

function mapStateToProps({ CommentData }, ownProps) {
    return {
        comments: CommentData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updatePost: (post) => dispatch(addOrUpdatePostAsync(true, post)),
        openEntryModal: () => dispatch(togglePostModal(true)),
        closeEntryModal: () => dispatch(togglePostModal(false)),
        fetchComments: (postID) => dispatch(fetchCommentsAsync(postID))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetails)