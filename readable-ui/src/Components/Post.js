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
import { votePostAsync, deletePostAsync, getPostByIdAsync } from '../Actions/PostActions'
import { voteCommentAsync } from '../Actions/CommentActions'
import { loadPost } from '../Actions/PostModalActions'


class Post extends React.Component {

    componentDidMount() {

        if (!this.props.post && this.props.postType === PostTypes.master) {
            //fetch post from api, is state doesn't contain this spesific post
            //e.c. users can directly call /posts/:posId url
            this.props.getPost(this.props.id);
        }
    }

    render() {
        const { post, postType, votePost, voteComment } = this.props;

        let titleSection = null;
        if (postType === PostTypes.list)
            titleSection = post && <Link to={`/posts/${post.id}`} className="no-text-decoration">
                <CardTitle
                    title={post.title}
                    subtitle={`submitted 2 days ago by ${post.author} - ${post.commentCount} comments`}
                />
            </Link>
        else
            titleSection = post && <CardTitle
                title={post.title}
                subtitle={`submitted 2 days ago by ${post.author} - ${post.commentCount} comments`}
            />

        return (
            <div className={postType === PostTypes.comment ? "post-comment" : "post-master"}>
                {post && <Card>
                    <div className="flex-container justify-content-space-between">
                        {titleSection}
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
                        <VoteBar
                            score={post.voteScore}
                            id={post.id}
                            onVoteClick={post.postType === PostTypes.comment ? votePost : voteComment}
                        />
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

function mapStateToProps({ PostData, CommentData }, ownProps) {
    if (ownProps.postType === PostTypes.master)
        return { post: PostData[ownProps.id] }
    else if (ownProps.postType === PostTypes.comment)
        return { post: CommentData.find(c => c.id === ownProps.id) }
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, isUpvote, currentScore) => dispatch(votePostAsync(id, isUpvote, currentScore)),
        voteComment: (id, isUpvote, currentScore) => dispatch(voteCommentAsync(id, isUpvote, currentScore)),
        deletePost: (id) => dispatch(deletePostAsync(id)),
        loadEditForm: (post) => dispatch(loadPost(post)),
        getPost: (id) => dispatch(getPostByIdAsync(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)