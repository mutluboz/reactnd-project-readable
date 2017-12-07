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
                <Post postType={PostTypes.list} title="Post 1" />
                <Post postType={PostTypes.list} title="Post 2" />
                <Post postType={PostTypes.list} title="Post 3" />
            </div>
        </div>
    )
}

export default Category;