import React from "react";
import { Card, CardText, CardTitle } from "material-ui/Card";
import VoteBar from "./Common/VoteBar";
import Divider from "material-ui/Divider";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import DeleteIcon from "material-ui/svg-icons/content/clear";
import IconButton from "material-ui/IconButton";
import { Link } from "react-router-dom";
import { EntryTypes } from "../constants";
import { connect } from "react-redux";
import {
  votePostAsync,
  deletePostAsync,
  getPostByIdAsync
} from "../Actions/PostActions";
import {
  voteCommentAsync,
  deleteCommentAsync
} from "../Actions/CommentActions";
import { loadEntry } from "../Actions/EntryModalActions";
import { TimeAgo } from "../Utils/Helpers";

class Entry extends React.Component {
  componentDidMount() {
    if (!this.props.entry && this.props.entryType === EntryTypes.master) {
      //fetch post from api, is state doesn't contain this spesific post
      //e.c. users can directly call /posts/:posId url
      this.props.getPost(this.props.id);
    }
  }

  render() {
    const { entry, entryType, votePost, voteComment } = this.props;
    let titleSection = null;

    let commentText = null;

    if (entry)
      commentText =
        entryType === EntryTypes.comment
          ? ""
          : ` - ${entry.commentCount} comments`;

    if (entryType === EntryTypes.list)
      titleSection = entry && (
        <Link
          to={`/${entry.category}/${entry.id}`}
          className="no-text-decoration"
        >
          <CardTitle
            title={entry.title}
            subtitle={`submitted ${TimeAgo(entry.timestamp)} by ${
              entry.author
            }${commentText}`}
          />
        </Link>
      );
    else
      titleSection = entry && (
        <CardTitle
          title={entry.title}
          subtitle={`submitted ${TimeAgo(entry.timestamp)} by ${
            entry.author
          }${commentText}`}
        />
      );

    return (
      <div
        className={
          entryType === EntryTypes.comment ? "post-comment" : "post-master"
        }
      >
        {entry && (
          <Card>
            <div className="flex-container justify-content-space-between">
              {titleSection}
              <div>
                <IconButton>
                  <EditIcon onClick={f => this.props.loadEditForm(entry)} />
                </IconButton>
                <IconButton>
                  <DeleteIcon
                    onClick={f =>
                      entryType === EntryTypes.comment
                        ? this.props.deleteComment(entry)
                        : this.props.deletePost(entry.id)
                    }
                  />
                </IconButton>
              </div>
            </div>
            <Divider />
            <div className="flex-container">
              <VoteBar
                score={entry.voteScore}
                id={entry.id}
                onVoteClick={
                  entryType === EntryTypes.comment ? voteComment : votePost
                }
              />
              <div className="post-body">
                <CardText>{entry.body}</CardText>
              </div>
            </div>
          </Card>
        )}
      </div>
    );
  }
}

function mapStateToProps({ PostData, CommentData }, ownProps) {
  if (ownProps.entryType === EntryTypes.comment)
    return { entry: CommentData.find(c => c.id === ownProps.id) };
  else return { entry: PostData[ownProps.id] };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    votePost: (id, isUpvote, currentScore) =>
      dispatch(votePostAsync(id, isUpvote, currentScore)),
    voteComment: (id, isUpvote, currentScore) =>
      dispatch(voteCommentAsync(id, isUpvote, currentScore)),
    deletePost: id => dispatch(deletePostAsync(id)),
    loadEditForm: entry =>
      dispatch(
        loadEntry(
          entry,
          ownProps.entryType === EntryTypes.comment
            ? EntryTypes.comment
            : EntryTypes.post
        )
      ),
    getPost: id => dispatch(getPostByIdAsync(id)),
    deleteComment: id => dispatch(deleteCommentAsync(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Entry);
