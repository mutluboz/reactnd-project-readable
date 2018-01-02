import React from "react";
import Entry from "./Entry";
import { EntryTypes } from "../constants";
import FloatingActionBtn from "./Common/FloatingActionBtn";
import SortMenu from "./Common/SortMenu";
import AppBar from "material-ui/AppBar";
import EntryModal from "./Common/EntryModal";
import { addOrUpdatePostAsync } from "../Actions/PostActions";
import {
  fetchCommentsAsync,
  addOrUpdateCommentAsync
} from "../Actions/CommentActions";
import { toggleEntryModal } from "../Actions/EntryModalActions";
import { connect } from "react-redux";
import NoData from "./Common/NoData";
import { SortEntryArray } from "../Utils/Helpers";
import { sort } from "../Actions/SortActions";
import NotFound from "./Common/NotFound";
import { getPostByIdAsync } from "../Actions/PostActions";

const style = {
  margin: "2px 9px 2px 10px"
};

class PostDetails extends React.Component {
  state = {
    initialized: false
  };

  componentDidMount() {
    //ensure that pop up is closed
    this.props.closeEntryModal();
    //fetch comments
    this.props.fetchComments(this.props.match.params.postID);

    this.props.getPost(this.props.match.params.postID);

    this.setState({ initialized: true });
  }

  render() {
    const { postID, category } = this.props.match.params;
    const { post, comments, sortBy, handleSortMethodChange } = this.props;

    if (this.state.initialized) {
      if (!post || post.category !== category) return <NotFound />;
      else
        return (
          <div>
            <Entry entryType={EntryTypes.master} id={postID} />

            <div style={style}>
              <AppBar
                title="Comments"
                showMenuIconButton={false}
                iconElementRight={
                  <SortMenu onSortMethodChange={handleSortMethodChange} />
                }
              />

              {comments.length > 0 ? (
                SortEntryArray(comments, sortBy).map((c, i) => (
                  <Entry key={i} entryType={EntryTypes.comment} id={c.id} />
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
    } else return <h1>dasd</h1>;
  }
}

function mapStateToProps({ CommentData, PostData, SortData }, ownProps) {
  return {
    comments: CommentData,
    post: PostData[ownProps.match.params.postID],
    sortBy: SortData[ownProps.match.params.postID]
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    openEntryModal: () => dispatch(toggleEntryModal(true, EntryTypes.comment)),
    closeEntryModal: () => dispatch(toggleEntryModal(false)),
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
    fetchComments: postID => dispatch(fetchCommentsAsync(postID)),
    handleSortMethodChange: sortBy =>
      dispatch(sort(ownProps.match.params.postID, sortBy)),
    getPost: id => dispatch(getPostByIdAsync(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
