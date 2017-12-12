import React from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import VoteBar from './Common/VoteBar'
import Divider from 'material-ui/Divider'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import DeleteIcon from 'material-ui/svg-icons/content/clear'
import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router-dom'
import { PostTypes } from '../constants'
import { connect } from 'react-redux'
import { votePostAsync, deletePostAsync } from '../Actions/PostActions'
import { loadPost } from '../Actions/PostModalActions'

class Post extends React.Component {
    render() {
        const { post, postType, votePost } = this.props;
        return (
            <div className={postType === PostTypes.comment ? "post-comment" : "post-master"}>
                {post && <Card>
                    <div className="flex-container justify-content-space-between">
                        <Link to='/posts' className="no-text-decoration">
                            <CardTitle
                                title={post.title}
                                subtitle={`submitted 2 days ago by ${post.author} - ${post.commentCount} comments`}
                            />
                        </Link>
                        <div>
                            <IconButton>
                                <EditIcon onClick={f => this.props.loadEditForm(post)} />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon onClick={f => this.props.deletePost(post.id)} />
                            </IconButton>
                        </div>
                    </div>
                    <Divider />
                    <div className="flex-container">
                        <VoteBar score={post.voteScore} id={post.id} onVoteClick={votePost} />
                        <div className="post-body">
                            <CardText>{post.body}</CardText>
                        </div>
                    </div>
                </Card>
                }
            </div>
        )
    }
}

function mapStateToProps({ PostData }, ownProps) {
    return {
        post: PostData[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, isUpvote, currentScore) => dispatch(votePostAsync(id, isUpvote, currentScore)),
        deletePost: (id) => dispatch(deletePostAsync(id)),
        loadEditForm: (post) => dispatch(loadPost(post))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)