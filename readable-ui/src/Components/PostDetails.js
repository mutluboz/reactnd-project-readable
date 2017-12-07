import React from 'react'
import Post from './Post'
import { PostTypes } from '../constants';
import FloatingActionBtn from './Common/FloatingActionBtn'
import SortMenu from './Common/SortMenu'
import AppBar from 'material-ui/AppBar'

const style = {
    margin: "2px 9px 2px 10px",
};

const PostDetails = (props) => {
    return (
        <div>
            <Post postType={PostTypes.master} title="Helloooooo" />
            
            <div style={style}>
                <AppBar
                    title='Comments'
                    showMenuIconButton={false}
                    iconElementRight={<SortMenu />}
                />
            </div>

            <Post postType={PostTypes.comment} />
            <Post postType={PostTypes.comment} />
            <Post postType={PostTypes.comment} />

            <FloatingActionBtn />
        </div>
    );
}

export default PostDetails