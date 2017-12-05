import React from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import VoteBar from './Common/VoteBar'
import Divider from 'material-ui/Divider';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';


const voteBarStyle = {
    paddingTop: 0 + ' important!'
}

const Post = (props) => {
    return (
        <div style={{ margin: 10 + 'px' }}>
            <Card>
                <div className="flex-container">
                    <CardTitle title="Card title" subtitle={`submitted 2 days ago by Mutlu - 20 comments`} />
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