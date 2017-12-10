import React from 'react'
import Category from './Category'
import FloatingActionBtn from './Common/FloatingActionBtn'
import { connect } from 'react-redux'
import { fetchPostsAsync } from '../Actions/PostActions'
import { getCategories } from '../Utils/ReadableApi'
import EntryModal from './Common/EntryModal'


class CategoryList extends React.Component {

    state = {
        //since only this component uses categoryList, we can store categories in component state
        //rather than redux store
        categories: [],
        entryModalOpen: false
    }

    componentDidMount() {
        //fetch categories
        getCategories().then(categories => {
            this.setState({ categories })
        })

        //fetch posts
        this.props.getPosts();
    }

    shouldComponentUpdate(nextProps, nextState) {
        //prevent unnecessary renders
        return nextProps.posts.length !== this.props.posts.length ||
            nextState.entryModalOpen !== this.state.EntryModal;
    }

    filterByCategory = (posts, category) => posts.filter(post => post.category === category)

    closeEntryModal = () => this.setState({ entryModalOpen: false })

    openEntryModal = () => this.setState({ entryModalOpen: true })

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

                <FloatingActionBtn onClick={this.openEntryModal} />
                <EntryModal
                    isOpen={this.state.entryModalOpen}
                    closeModal={this.closeEntryModal}
                    categoryList={this.state.categories}
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList)
