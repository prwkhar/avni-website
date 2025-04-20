import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ContactUs from "../components/ContactUs";
import SEO from "../components/seo"

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">{title}</h2>
        <div className="about-grid">
          <div className="left-column">
            <PageContent className="about-content" content={content} />
          </div>
          <div className="right-column">
            <div className="software-section">
              <h2>Avni Software</h2>
              <ul>
                <li><a href="https://github.com/avniproject" target="_blank" rel="noopener noreferrer">Source Code</a></li>
                <li><a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank" rel="noopener noreferrer">AGPL 3 License</a></li>
                <li><a href="https://samanvayfoundation.org" target="_blank" rel="noopener noreferrer">Copyright - Samanvay Foundation</a></li>
                <li><a href="https://discord.gg/4pcgcQW8pk" target="_blank" rel="noopener noreferrer">Community Channel</a></li>
                <li><a href="https://circleci.com/gh/avniproject" target="_blank" rel="noopener noreferrer">CI Server & Binary Download</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.openchsclient" target="_blank" rel="noopener noreferrer">Android Playstore App</a></li>
                <li><a href="https://docs.google.com/presentation/d/1bExRrIIwMVbQrmETkv8iHxlZQxgXGGGr-kpDQwNdxW0" target="_blank" rel="noopener noreferrer">Product Slide Deck</a></li>
                <li><a href="mailto:avnipartnerships@samanvayfoundation.org">Contact Avni</a></li>
                <li><a href="https://groups.google.com/forum/#!forum/avni-project" target="_blank" rel="noopener noreferrer">Join Google Group</a></li>
                <li><a href="https://avni.readme.io/v2.0/docs/avni-code-of-conduct" target="_blank" rel="noopener noreferrer">Code of Conduct</a></li>
                <li><a href="https://twitter.com/avniproject" target="_blank" rel="noopener noreferrer">Avni on Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="about-divider" />
        <ContactUs />
      </div>

      <style>{`
        .about-section {
          padding: 4rem 2rem;
          background: linear-gradient(90deg, #ffffff, #f7f9fc);
          font-family: 'Inter', sans-serif;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-title {
          font-size: 2.75rem;
          text-align: center;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #1a202c;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .left-column {
          font-size: 1.1rem;
          color: #333;
        }

        .right-column {
          background-color: #f1f5f9;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }

        .software-section h2 {
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
          color: #1e3a8a;
        }

        .software-section ul {
          padding-left: 1.5rem;
        }

        .software-section li {
          margin-bottom: 1rem;
          font-size: 1rem;
          list-style: disc;
          color: #1a202c;
        }

        .software-section a {
          color: #2563eb;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .software-section a:hover {
          text-decoration: underline;
          color: #1d4ed8;
        }

        .about-divider {
          margin: 3rem 0;
          border: none;
          height: 1px;
          background: #d1d5db;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DefaultPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
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
