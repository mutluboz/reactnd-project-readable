import uuid from "uuid";

const apiUrl = "http://localhost:3001";

//static auth header
const token = "1234";

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const getCategories = () =>
  fetch(`${apiUrl}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getPosts = () =>
  fetch(`${apiUrl}/posts`, { headers }).then(res => res.json());

export const getPostByID = id =>
  fetch(`${apiUrl}/posts/${id}`, { headers }).then(res => res.json());

export const updatePostScore = (id, isUpVote) =>
  fetch(`${apiUrl}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      option: isUpVote ? "upVote" : "downVote"
    })
  }).then(res => res.json());

export const updateCommentScore = (id, isUpVote) =>
  fetch(`${apiUrl}/comments/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      option: isUpVote ? "upVote" : "downVote"
    })
  }).then(res => res.json());

export const addOrUpdatePost = (isUpdating, post) =>
  fetch(`${apiUrl}/posts/${isUpdating ? post.id : ""}`, {
    method: isUpdating ? "PUT" : "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: isUpdating
      ? JSON.stringify({
          id: post.id,
          title: post.title,
          body: post.body
        })
      : JSON.stringify({
          id: uuid.v4(),
          timestamp: Date.now(),
          title: post.title,
          body: post.body,
          author: post.author,
          category: post.category
        })
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${apiUrl}/posts/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

export const getComments = postID =>
  fetch(`${apiUrl}/posts/${postID}/comments`, { headers }).then(res =>
    res.json()
  );

export const deleteComment = id =>
  fetch(`${apiUrl}/comments/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

export const addOrUpdateComment = (isUpdating, comment) =>
  fetch(`${apiUrl}/comments/${isUpdating ? comment.id : ""}`, {
    method: isUpdating ? "PUT" : "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: isUpdating
      ? JSON.stringify({
          id: comment.id,
          timestamp: Date.now(),
          body: comment.body
        })
      : JSON.stringify({
          id: uuid.v4(),
          timestamp: Date.now(),
          body: comment.body,
          author: comment.author,
          parentId: comment.parentId
        })
  }).then(res => res.json());
