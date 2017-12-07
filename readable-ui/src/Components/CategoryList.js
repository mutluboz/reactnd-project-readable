import React from 'react'
import Category from './Category'
import FloatingActionBtn from './Common/FloatingActionBtn'
import { connect } from 'react-redux'
import { fetchPostsAsync } from '../Actions/PostActions'

class CategoryList extends React.Component {
    
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                {Object.keys(this.props.PostData).sort().map((c) => {
                    return <Category key={c}
                        Title={c}
                        Posts={this.props.PostData[c]}
                    />
                })}

                <FloatingActionBtn />
            </div>
        )
    }

}

function mapStateToProps({ PostData }) {
    return {
        PostData
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
