import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import ContactUs from "../components/ContactUs";
import SEO from "../components/seo"

export const AboutPageTemplate = ({title, content, contentComponent}) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-inner">
                    <h2 className="about-title">
                        {title}
                    </h2>
                    <PageContent className="about-content" content={content}/>
                    <hr className="about-divider"/>
                    <ContactUs/>
                </div>
            </div>

            <style>{`
                .about-section {
                    padding: 4rem 1rem;
                    background: linear-gradient(to right, #f9f9f9, #ffffff);
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                }

                .about-container {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .about-inner {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .about-title {
                    font-size: 2.8rem;
                    font-weight: 700;
                    color: #222;
                    margin-bottom: 1rem;
                    text-align: center;
                    letter-spacing: -0.5px;
                }

                .about-content {
                    font-size: 1.125rem;
                    line-height: 1.9;
                    color: #444;
                    padding: 0 0.5rem;
                }

                .about-content h1,
                .about-content h2,
                .about-content h3,
                .about-content h4 {
                    font-weight: 700;
                    color: #111;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }

                .about-content h1 {
                    font-size: 2rem;
                }

                .about-content h2 {
                    font-size: 1.75rem;
                }

                .about-content h3 {
                    font-size: 1.5rem;
                }

                .about-content p {
                    margin-bottom: 1rem;
                }

                .about-content a {
                    color: #1a73e8;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                }

                .about-content a:hover {
                    color: #0f5bd3;
                    text-decoration: underline;
                }

                .about-content ul {
                    padding-left: 1.2rem;
                    margin-top: 0.5rem;
                }

                .about-content li {
                    margin-bottom: 0.75rem;
                    list-style: disc;
                }

                .about-divider {
                    border: none;
                    height: 1px;
                    background: #e0e0e0;
                    margin: 3rem 0;
                }

                @media (max-width: 768px) {
                    .about-title {
                        font-size: 2rem;
                    }

                    .about-content {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </section>
    )
};

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const DefaultPage = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <AboutPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    )
};

DefaultPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DefaultPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
