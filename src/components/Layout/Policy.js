import React from 'react'
import Layout from './Layout';
import privacyPolicyImage from "../../../src/assets/images/privatepolicy.jpeg"
import privacyPolicyImage2 from "../../../src/assets/images/prvpolicy2.jpeg"


const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="privacy-policy-container">
                <h1>Privacy Policy</h1>
                <img src={privacyPolicyImage2} alt="Privacy Policy" className="privacy-policy-image" />
                <p>
                    Welcome to our Privacy Policy page. This page informs you of our policies regarding the collection,
                    use, and disclosure of personal information we receive from users of our site.
                </p>
                <h2>Data Collection</h2>
                <p>
                    We may collect and store information that you voluntarily provide to us, including but not limited to
                    your name, email address, phone number, address, and any other personally identifiable information.
                    Additionally, we may collect information about your use of our website, such as IP addresses, browser
                    types, referring pages, and operating systems.
                </p>
                <h2>Use of Information</h2>
                <p>
                    The information we collect is used to personalize your experience, improve our website, process
                    transactions, and provide customer service. We may also use your information to send periodic emails,
                    newsletters, or promotional materials.
                </p>
                <h2>Data Storage and Security</h2>
                <p>
                    Your information is stored on secure servers and is accessible only by authorized personnel. We take
                    reasonable measures to protect your personal information from unauthorized access, alteration, or
                    disclosure. However, no method of transmission over the internet or electronic storage is 100% secure,
                    so we cannot guarantee its absolute security.
                </p>
                <h2>Third-Party Services</h2>
                <p>
                    We may use third-party services for various purposes, such as analytics, advertising, and payment
                    processing. These third parties may have access to your personal information as needed to perform their
                    functions, but they are not permitted to share or use the information for any other purpose.
                </p>
                <h2>Cookies</h2>
                <p>
                    We use cookies to enhance your experience on our site. Cookies are small files placed on your computer
                    that collect information about how you interact with our website. You can disable cookies in your browser
                    settings, but this may affect the functionality of our site.
                </p>
                <img src={privacyPolicyImage} alt="Privacy and Security" className="privacy-policy-image" />
                <h2>Changes to Privacy Policy</h2>
                <p>
                    We reserve the right to update our Privacy Policy at any time. Any changes will be posted on this page,
                    and the last modified date will be updated accordingly. We encourage you to review this Privacy Policy
                    periodically to stay informed about how we are protecting your information.
                </p>
                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at support@example.com.
                </p>
                <p className="last-modified">Last Updated: February 11, 2024</p>
            </div>
        </Layout>
    )
}

export default Policy