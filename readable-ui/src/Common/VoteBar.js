import React from 'react';
import { CardActions } from 'material-ui/Card'
import HardwareKeyboardDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import IconButton from 'material-ui/IconButton';

const VoteBar = ({ score = 0 }) => (
    <CardActions className="v-flex-container">
        <IconButton><HardwareKeyboardUp /></IconButton>
        <span style={{ paddingLeft: 18.5 + 'px' }}>{score}</span>
        <IconButton><HardwareKeyboardDown /></IconButton>
    </CardActions>
)

export default VoteBar;