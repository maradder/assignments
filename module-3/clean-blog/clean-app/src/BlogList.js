import React from 'react'
import blogEntries from './blogEntries'
import BlogPost from './BlogPost'
import { OlderPostsBtn } from './styledComponents'

const BlogList = () => {
    return (
        <div>
            {blogEntries.map(entry => 
            <div>
                <BlogPost   title={entry.title}
                            subTitle={entry.subTitle}
                            author={entry.author}
                            date={entry.date}/>
            </div>
            )}
            <OlderPostsBtn href="#" >OLDER POSTS &rarr;</OlderPostsBtn>
        </div>
    )
}

export default BlogList