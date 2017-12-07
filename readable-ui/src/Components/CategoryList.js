import React from 'react'
import Category from './Category'
import FloatingActionBtn from './Common/FloatingActionBtn'

const CategoryList = (props) => {
    return (
        <div>
            <Category Title="Category-1" />
            <Category Title="Category-2" />
            <Category Title="Category-3" />

            <FloatingActionBtn />
        </div>
    )
}

export default CategoryList