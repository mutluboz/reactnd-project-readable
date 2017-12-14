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
        return nextProps.posts.length !== this.props.posts.length
        //return true
    }

    filterByCategory = (posts, category) => posts.filter(post => post && post.category === category)

    render() {
        const { posts } = this.props;

        return (
            <div>
                {posts.length > 0 &&
                    this.state.categories.sort().map((c) => {
                        return <Category key={c.name}
                            Title={c.name}
                            Posts={this.filterByCategory(posts, c.name)}
                        />
                    })}

                <FloatingActionBtn onClick={f => this.props.openEntryModal()} />
                <EntryModal
                    categoryList={this.state.categories}
                    onSubmit={
                        values => this.props.addOrUpdatePost(values)
                    }
                />
            </div>
        )
    }
}

function mapStateToProps({ PostData }) {
    return {
        //denormalize posts for filtering
        posts: PostData ? Object.keys(PostData).map(val => PostData[val]) : []
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(fetchPostsAsync()),
        addOrUpdatePost: (post) => dispatch(addOrUpdatePostAsync(post.id ? true : false, post)),
        openEntryModal: () => dispatch(togglePostModal(true))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList)
