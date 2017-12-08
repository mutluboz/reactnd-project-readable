import React from 'react'
import Category from './Category'
import FloatingActionBtn from './Common/FloatingActionBtn'
import { connect } from 'react-redux'
import { fetchPostsAsync } from '../Actions/PostActions'
import { GroupBy } from '../Utils/Helpers'

class CategoryList extends React.Component {
    
    componentDidMount() {
        this.props.getPosts();
    }

    render() {

        const { posts } = this.props;

        return (
            <div>
                {posts && Object.keys(posts).sort().map((c) => {
                    return <Category key={c}
                        Title={c}
                        Posts={posts[c]}
                    />
                })}

                <FloatingActionBtn />
            </div>
        )
    }
}

function mapStateToProps({ PostData }) {
    return {
        posts : GroupBy(PostData,'category')
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
