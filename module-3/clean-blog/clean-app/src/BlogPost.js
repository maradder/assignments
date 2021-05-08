import React from 'react'
import { BlogDiv } from './styledComponents'
import { Author, H2, H3, P } from './styledComponents'

const BlogPost = (props) => {
    return (
        <BlogDiv>
            <H2>{props.title}</H2>
            <H3>{props.subTitle}</H3>
            <P>{`Posted by `}<Author href="#">{props.author}</Author>{` on ${props.date}`}</P>
        </BlogDiv>
    )}

export default BlogPost