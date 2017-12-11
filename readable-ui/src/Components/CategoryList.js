import React from 'react'
import Category from './Category'
import FloatingActionBtn from './Common/FloatingActionBtn'
import { connect } from 'react-redux'
import { fetchPostsAsync, addOrUpdatePostAsync } from '../Actions/PostActions'
import { togglePostModal } from '../Actions/PostModalActions'
import { getCategories } from '../Utils/ReadableApi'
import EntryModal from './Common/EntryModal'


class CategoryList extends React.Component {

    state = {
        //since only this component uses categoryList, we can store categories in component state
        //rather than redux store
        categories: []
    }

    componentDidMount() {
        //fetch categories
        getCategories().then(categories => {
            this.setState({ categories })
        })

        //fetch posts
        this.props.getPosts();
    }

    shouldComponentUpdate(nextProps) {
        //prevent unnecessary renders
        return nextProps.posts.length !== this.props.posts.length ||
            nextProps.isPostModalOpen !== this.props.isPostModalOpen;
    }

    filterByCategory = (posts, category) => posts.filter(post => post && post.category === category)

    render() {
        const { posts, togglePostModal } = this.props;

        return (
            <div>
                {posts.length > 0 &&
                    this.state.categories.sort().map((c) => {
                        return <Category key={c.name}
                            Title={c.name}
                            Posts={this.filterByCategory(posts, c.name)}
                        />
                    })}

                <FloatingActionBtn onClick={f => togglePostModal(true)} />
                <EntryModal
                    isOpen={this.props.isPostModalOpen}
                    closeModal={f => togglePostModal(false)}
                    categoryList={this.state.categories}
                    onSubmit={this.props.addOrUpdatePost}
                />
            </div>
        )
    }
}

function mapStateToProps({ PostData, PostModal }) {
    return {
        //denormalize posts for filtering
        posts: PostData ? Object.keys(PostData).map(val => PostData[val]) : [],
        isPostModalOpen: PostModal.isVisible
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(fetchPostsAsync()),
        addOrUpdatePost: (isUpdating, post) => dispatch(addOrUpdatePostAsync(isUpdating, post)),
        togglePostModal: (show) => dispatch(togglePostModal(show))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList)
