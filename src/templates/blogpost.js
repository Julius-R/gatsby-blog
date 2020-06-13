import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BlogPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        {image !== null ? <img alt={title} src={image.file.url} /> : null}
        <div className="tags">
          {tags !== null
            ? tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))
            : null}
        </div>
        <p className="body-text">{body.body}</p>
        <Link to="/blogposts">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}
export default BlogPost
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`
