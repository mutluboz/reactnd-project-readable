import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import Post from './Post';
import SortMenu from './Common/SortMenu';


function handleTouchTap() {
    alert('onClick triggered on the title component');
}

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
                onTitleTouchTap={handleTouchTap}
                iconElementLeft={<IconButton><ContentAddCircle /></IconButton>}
                iconElementRight={<SortMenu />}
            />
            <div style={{ margin: 10 + 'px' }}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Category;