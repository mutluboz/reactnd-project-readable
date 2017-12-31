import React from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import Post from "./Post";
import SortMenu from "./Common/SortMenu";
import { PostTypes } from "../constants";
import { Link } from "react-router-dom";
import NoData from "./Common/NoData";
import { SortEntryArray } from "../Utils/Helpers";
import { sort } from "../Actions/SortActions";

const styles = {
  title: {
    cursor: "pointer"
  }
};

class Category extends React.Component {
  render() {
    const {
      Title,
      Posts,
      sortBy,
      inCategoryView,
      handleSortMethodChange
    } = this.props;
    return (
      <div>
        <AppBar
          title={
            !inCategoryView ? (
              <Link
                to={`/categories/${Title}`}
                style={
                  ({ textDecoration: "none !important" }, { color: "white" })
                }
              >
                {" "}
                <span style={styles.title}>{Title}</span>
              </Link>
            ) : (
              <span style={styles.title}>{Title}</span>
            )
          }
          showMenuIconButton={false}
          iconElementRight={
            <SortMenu onSortMethodChange={handleSortMethodChange} />
          }
        />
        {Posts.length > 0 ? (
          SortEntryArray(Posts, sortBy).map(post => (
            <Post key={post.id} postType={PostTypes.list} id={post.id} />
          ))
        ) : (
          <NoData />
        )}
      </div>
    );
  }
}

function mapStateToProps({ SortData }, ownProps) {
  return {
    sortBy: SortData[ownProps.Title]
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSortMethodChange: sortBy => dispatch(sort(ownProps.Title, sortBy))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
