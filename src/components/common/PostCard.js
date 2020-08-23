import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    
    return (
        <div className="content">
            <Link to={url}>
                {post.feature_image ?
                    <figure className="post-feature-image">
                        <img src={post.feature_image} alt={post.title} />
                    </figure> : null}
            </Link>

            <section className="post-full-content">
                <Link to={url} className="title">
                    <h1 className="content-title">{post.title}</h1>
                </Link>
                <div className="post-card-footer">
                    <div className="post-card-footer-left">
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="post-card-footer-right">
                        <div>{readingTime}</div>
                    </div>
                </div>
                {/* The main post content */}
                <section
                    className="content-body load-external-scripts"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </section>
            <div style={{ borderBottom: `1px solid #eee`, margin: `0 0 1.8em` }}></div>
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        html: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
    }).isRequired,
}

export default PostCard
