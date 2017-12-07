import React from 'react'
import Category from './Category'
import FloatingActionBtn from './Common/FloatingActionBtn'
import * as ReadableApi from '../Utils/ReadableApi'

class CategoryList extends React.Component {

    state = {
        //storing categories on local state is ok since they are readonly
        categories: []
    }

    componentDidMount() {
        ReadableApi.getCategories().then((categories) => {
            this.setState({ categories })
        })
    }

    render() {
        return (
            <div>
                {this.state.categories.map(c => {
                    return <Category key={c.name} Title={c.name} />
                })}

                <FloatingActionBtn />
            </div>
        )
    }

}

export default CategoryList