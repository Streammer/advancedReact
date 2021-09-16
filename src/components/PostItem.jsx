import React from 'react'

const PostItem = () => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                    JavaScript - язык программирования
                </div>
            </div>
            <div className="post__btns">
                <button>удалить</button>
            </div>
        </div>
    )
}
export default  PostItem