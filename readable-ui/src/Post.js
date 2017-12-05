import React from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import VoteBar from './Common/VoteBar'
import Divider from 'material-ui/Divider';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom'
import { PostTypes } from './constants';

const Post = (props) => {
    return (
        <div className={props.postType === PostTypes.comment ? "post-comment" : "post-master"}>
            <Card>
                <div className="flex-container">
                    <Link to='/posts' className="no-text-decoration">
                        <CardTitle title={props.title} subtitle={`submitted 2 days ago by Mutlu - 20 comments`} />
                    </Link>
                    <div>
                        <IconButton><EditIcon /></IconButton>
                        <IconButton><DeleteIcon /></IconButton>
                    </div>
                </div>
                <Divider />
                <div className="flex-container">
                    <VoteBar />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </div>
            </Card>
        </div>
    )
}

export default Post;