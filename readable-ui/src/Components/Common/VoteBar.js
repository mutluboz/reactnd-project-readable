import React from 'react';
import { CardActions } from 'material-ui/Card'
import HardwareKeyboardDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';

const VoteBar = ({ score = 0 }) => (
    <CardActions className="v-flex-container">
        <IconButton><HardwareKeyboardUp /></IconButton>
        <Badge
            badgeContent={score}
            primary={true}
            badgeStyle={{ top: 6, right: 12 }}
        />
        <IconButton><HardwareKeyboardDown /></IconButton>
    </CardActions>
)

export default VoteBar;