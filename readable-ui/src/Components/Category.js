import React from 'react'
import AppBar from 'material-ui/AppBar'
import Post from './Post'
import SortMenu from './Common/SortMenu'
import { PostTypes } from '../constants'

const styles = {
    title: {
        cursor: 'pointer',
    },
};

const Category = function (props) {
    console.log(props);
    return (
        <div>
            <AppBar
                title={<span style={styles.title}>{props.Title}</span>}
                showMenuIconButton={false}
                iconElementRight={<SortMenu />}
            />

            {props.Posts.map((post) => {
                return <Post
                    key={post.id}
                    postType={PostTypes.list}
                    id={post.id}
                />
            })}
        </div>
    )
}

export default Category;