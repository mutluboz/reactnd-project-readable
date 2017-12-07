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
    return (
        <div>
            <AppBar
                title={<span style={styles.title}>{props.Title}</span>}
                showMenuIconButton={false}
                iconElementRight={<SortMenu />}
            />
            <div style={{ margin: 10 + 'px' }}>
                {props.Posts.map((post) => {
                    return <Post
                        key={post.id}
                        postType={PostTypes.list}
                        post={post}
                    />
                })}
            </div>
        </div>
    )
}

export default Category;