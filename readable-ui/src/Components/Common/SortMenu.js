import React from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import SortIcon from "material-ui/svg-icons/content/sort";
import IconButton from "material-ui/IconButton";
import { SortBy } from "../../constants";

const SortMenu = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <SortIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem
      primaryText="Newest"
      onClick={f => props.onSortMethodChange(SortBy.timestamp)}
    />

    <MenuItem
      primaryText="Top Rated"
      onClick={f => props.onSortMethodChange(SortBy.voteScore)}
    />
  </IconMenu>
);

SortMenu.muiName = "IconMenu";

export default SortMenu;
