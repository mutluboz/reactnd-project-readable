import React from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import VoteBar from './Common/VoteBar'
import Divider from 'material-ui/Divider';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom'
import { PostTypes } from '../constants';

const Post = (props) => {
    const { post } = props;
    const cardTextStyle = {

    }

    return (
        <div className={props.postType === PostTypes.comment ? "post-comment" : "post-master"}>
            <Card>
                <div className="flex-container justify-content-space-between">
                    <Link to='/posts' className="no-text-decoration">
                        <CardTitle
                            title={post.title}
                            subtitle={`submitted 2 days ago by ${post.author} - ${post.commentCount} comments`}
                        />
                    </Link>
                    <div>
                        <IconButton><EditIcon /></IconButton>
                        <IconButton><DeleteIcon /></IconButton>
                    </div>
                </div>
                <Divider />
                <div className="flex-container">
                    <VoteBar score={post.voteScore} />
                    <div className="post-body">
                        <CardText style={cardTextStyle}>{post.body}</CardText>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Post;