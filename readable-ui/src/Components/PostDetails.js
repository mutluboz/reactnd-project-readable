import React from "react";
import Post from "./Post";
import { PostTypes } from "../constants";
import FloatingActionBtn from "./Common/FloatingActionBtn";
import SortMenu from "./Common/SortMenu";
import AppBar from "material-ui/AppBar";
import EntryModal from "./Common/EntryModal";
import { addOrUpdatePostAsync } from "../Actions/PostActions";
import {
  fetchCommentsAsync,
  addOrUpdateCommentAsync
} from "../Actions/CommentActions";
import { togglePostModal } from "../Actions/PostModalActions";
import { connect } from "react-redux";
import NoData from "./Common/NoData";

const style = {
  margin: "2px 9px 2px 10px"
};

class PostDetails extends React.Component {
  componentDidMount() {
    //ensure that pop up is closed
    this.props.closeEntryModal();
    //fetch comments
    this.props.fetchComments(this.props.match.params.postID);
  }

  render() {
    const { postID } = this.props.match.params;
    const { comments } = this.props;

    return (
      <div>
        <Post postType={PostTypes.master} id={postID} />

        <div style={style}>
          <AppBar
            title="Comments"
            showMenuIconButton={false}
            iconElementRight={<SortMenu />}
          />
          {/* {comments &&
            comments.map((c, i) => (
              <Post key={i} postType={PostTypes.comment} id={c.id} />
            ))} */}

          {comments.length > 0 ? (
            comments.map((c, i) => (
              <Post key={i} postType={PostTypes.comment} id={c.id} />
            ))
          ) : (
            <NoData isComment={true} />
          )}
        </div>

        <FloatingActionBtn onClick={f => this.props.openEntryModal()} />

        <EntryModal
          onSubmit={values => this.props.handleModification(values)}
        />
      </div>
    );
  }
}

function mapStateToProps({ CommentData, PostData }, ownProps) {
  return {
    comments: CommentData
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    openEntryModal: () => dispatch(togglePostModal(true, PostTypes.comment)),
    closeEntryModal: () => dispatch(togglePostModal(false)),
    handleModification: entry => {
      if (entry.hasOwnProperty("id"))
        dispatch(
          entry.hasOwnProperty("parentId")
            ? addOrUpdateCommentAsync(true, entry)
            : addOrUpdatePostAsync(true, entry)
        );
      else
        dispatch(
          addOrUpdateCommentAsync(false, {
            ...entry,
            parentId: ownProps.match.params.postID //inject parent id to comment
          })
        );
    },
    fetchComments: postID => dispatch(fetchCommentsAsync(postID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
