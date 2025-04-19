import React from 'react';
import { FaGithub, FaYoutube, FaGooglePlay, FaLinkedin } from 'react-icons/fa';
import ExternalLink from "./ExternalLink";
import Icons8Icon from '../img/attributions/icons8.png';

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="
            has-text-white modern-footer">
                <style>
                    {`
                    .modern-footer {
                        background-color:rgb(4, 15, 28); /* Deep modern blue-gray */
                        padding: 3rem 1.5rem;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .footer-credit {
                        font-weight: 600;
                        font-size: 1.1rem;
                        max-width: 800px;
                        line-height: 1.6;
                    }

                    .footer-icons {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        gap: 30px;
                        margin-top: 1.5rem;
                    }

                    .footer-icons a {
                        color: white;
                        transition: transform 0.3s ease, color 0.3s ease;
                    }

                    .footer-icons a:hover {
                        transform: scale(1.2);
                    }

                    .footer-icons a:nth-child(1):hover { color: #6e5494; } /* GitHub */
                    .footer-icons a:nth-child(2):hover { color: #FF0000; } /* YouTube */
                    .footer-icons a:nth-child(3):hover { color: #34A853; } /* Play Store */
                    .footer-icons a:nth-child(4):hover { color: #0077b5; } /* LinkedIn */

                    .footer-credits-row {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem 0;
                        gap: 12px;
                    }
                    `}
                </style>

                <div className="footer-credit">
                    Avni is fully open source project run by a{" "}
                    <ExternalLink href="https://samanvayfoundation.org/" text="small technology non-profit" />
                </div>

                <div className="footer-icons">
                    <ExternalLink href="https://github.com/avniproject">
                        <FaGithub size={36} />
                    </ExternalLink>
                    <ExternalLink href="https://www.youtube.com/channel/UCShsfKJlw0B3B6Pg2DmQkSQ">
                        <FaYoutube size={36} />
                    </ExternalLink>
                    <ExternalLink href="https://play.google.com/store/apps/details?id=com.openchsclient">
                        <FaGooglePlay size={36} />
                    </ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/showcase/avniproject">
                        <FaLinkedin size={36} />
                    </ExternalLink>
                </div>
            </footer>
        );
    }
};

export default Footer;
