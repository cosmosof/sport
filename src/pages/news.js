import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout, List } from 'antd'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import ThemeLayout from '../components/layout'

import SEO from '../components/seo'

const { Header, Footer, Content } = Layout

const StyledContent = styled(Content)`
  margin-top: 48px;
  background: #dae3ee;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const listStyle = css`
  background: white;
  margin-top: 20px;
`

const NewsPage = ({ data }) => {
  return (
    <ThemeLayout>
      <SEO title="NFL News" />
      <StyledContent>
        <h1>Some Fresh Contents</h1>
        <h4>{data.allMarkdownRemark.totalCount} Hot News</h4>
        <List
          css={listStyle}
          size="large"
          header={<div>Latest picks for you</div>}
          bordered
          dataSource={data.allMarkdownRemark.edges}
          renderItem={({ node }) => (
            <List.Item>
              {' '}
              <Link
                to={node.fields.slug}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <h3
                  css={css`
                    margin-bottom: 20px;
                  `}
                >
                  {node.frontmatter.title}{' '}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </List.Item>
          )}
        />
      </StyledContent>
    </ThemeLayout>
  )
}

export default NewsPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
