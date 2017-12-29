import React from "react";
import Category from "./Category";
import { connect } from "react-redux";
import { togglePostModal } from "../Actions/PostModalActions";
import {
  fetchPostsByCategoryAsync,
  addOrUpdatePostAsync
} from "../Actions/PostActions";
import EntryModal from "./Common/EntryModal";
import FloatingActionBtn from "./Common/FloatingActionBtn";

class CategoryView extends React.Component {
  componentDidMount() {
    //ensure that pop up is closed
    this.props.closeEntryModal();

    //fetch posts
    this.props.getPostsByCategory(this.props.match.params.category);
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <Category
          Title={this.props.match.params.category}
          Posts={this.props.posts.filter(post => post)} //filter out deleted posts
          inCategoryView={true}
        />

        <FloatingActionBtn onClick={f => this.props.openEntryModal()} />

        <EntryModal onSubmit={values => this.props.addOrUpdatePost(values)} />
      </div>
    );
  }
}

function mapStateToProps({ PostData }) {
  return {
    //denormalize posts for filtering
    posts: PostData ? Object.keys(PostData).map(val => PostData[val]) : []
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getPostsByCategory: category =>
      dispatch(fetchPostsByCategoryAsync(category)),
    addOrUpdatePost: post =>
      dispatch(
        addOrUpdatePostAsync(post.id ? true : false, {
          ...post,
          category: ownProps.match.params.category //inject category
        })
      ),
    openEntryModal: () => dispatch(togglePostModal(true)),
    closeEntryModal: () => dispatch(togglePostModal(false))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);
