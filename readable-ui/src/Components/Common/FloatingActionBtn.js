import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const FloatingActionBtn = (props) => {
    return (
        <FloatingActionButton style={style} onClick={props.onClick} >
            <ContentAdd />
        </FloatingActionButton>
    )
}

export default FloatingActionBtn;
