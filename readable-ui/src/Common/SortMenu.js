import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import SortIcon from 'material-ui/svg-icons/content/sort';
import IconButton from 'material-ui/IconButton';

const SortMenu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><SortIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem primaryText="Newest" />
        <MenuItem primaryText="Top Rated" />
    </IconMenu>
);

SortMenu.muiName = 'IconMenu';

export default SortMenu;