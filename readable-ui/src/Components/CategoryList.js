import React from 'react'
import Category from './Category'
import FloatingActionBtn from './Common/FloatingActionBtn'
import { connect } from 'react-redux'
import { fetchPostsAsync } from '../Actions/PostActions'
import { getCategories } from '../Utils/ReadableApi'


class CategoryList extends React.Component {

    state = {
        //since only this component uses categorieList, we can store categories in component state
        //rather than redux store
        categories: []
    }

    componentDidMount() {
        getCategories().then(categories => {
            this.setState({ categories })
        })

        this.props.getPosts();
    }

    filterByCategory = (posts, category) => posts.filter(post => post.category === category)

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

                <FloatingActionBtn />
            </div>
        )
    }
}

function mapStateToProps({ PostData }) {
    return {
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
