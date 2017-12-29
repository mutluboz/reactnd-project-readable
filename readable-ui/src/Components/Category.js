import React from "react";
import AppBar from "material-ui/AppBar";
import Post from "./Post";
import SortMenu from "./Common/SortMenu";
import { PostTypes } from "../constants";
import { Link } from "react-router-dom";
import NoData from "./Common/NoData";

const styles = {
  title: {
    cursor: "pointer"
  }
};

const Category = function(props) {
  return (
    <div>
      <AppBar
        title={
          !props.inCategoryView ? (
            <Link
              to={`/categories/${props.Title}`}
              style={
                ({ textDecoration: "none !important" }, { color: "white" })
              }
            >
              {" "}
              <span style={styles.title}>{props.Title}</span>
            </Link>
          ) : (
            <span style={styles.title}>{props.Title}</span>
          )
        }
        showMenuIconButton={false}
        iconElementRight={<SortMenu />}
      />
      {props.Posts.length > 0 ? (
        props.Posts.map(post => (
          <Post key={post.id} postType={PostTypes.list} id={post.id} />
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Category;
