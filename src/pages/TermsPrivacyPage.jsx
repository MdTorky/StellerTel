import { Link } from "react-router-dom"

const TermsPrivacyPage = () => {
    return (
        <div className="container-custom py-16">
            <div className="mb-8">
                <Link to="/" className="text-primary hover:underline mb-8 inline-block">
                    &larr; Back to Home
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Privacy</h1>
            </div>

            {/* Terms & Conditions */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-4">STELLARTEL TERMS & CONDITIONS</h2>
                <p className="mb-4">Effective Date: May 2025</p>
                <p className="mb-6">
                    These Terms & Conditions ("Terms") govern your use of the StellarTel website ("Site"). By accessing this Site,
                    you agree to be bound by these Terms.
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">1. Website Use</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>The Site is intended for informational purposes only.</li>
                            <li>You agree not to misuse the Site, introduce malicious code, or use it for unlawful activities.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">2. Intellectual Property</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                All content on this Site, including text, graphics, logos, and design elements, are owned or licensed by
                                StellarTel.
                            </li>
                            <li>You may not reproduce, modify, or distribute any part of this Site without written permission.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">3. Third-Party Links</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                The Site may contain links to third-party websites. StellarTel is not responsible for the content or
                                accuracy of those sites.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">4. Disclaimer</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                Information provided on this Site is for general purposes only. We make no guarantees about accuracy,
                                completeness, or relevance.
                            </li>
                            <li>We reserve the right to update or change content without notice.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">5. Limitation of Liability</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                StellarTel will not be liable for any direct, indirect, incidental, or consequential damages resulting
                                from your use of the Site.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">6. Governing Law</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                These Terms are governed by the laws of Malaysia. Any disputes arising from use of the Site will be
                                resolved in Malaysian courts.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">7. Contact</h3>
                        <p>For questions, please contact us at:</p>
                        <a href="mailto:andrewpenders@stellartel.com.my" className="text-primary hover:underline">
                            andrewpenders@stellartel.com.my
                        </a>
                    </div>
                </div>
            </div>

            {/* Privacy Policy */}
            <div>
                <h2 className="text-2xl font-bold mb-4">STELLARTEL PRIVACY POLICY</h2>
                <p className="mb-4">Effective Date: May 2025</p>
                <p className="mb-6">
                    This Privacy Policy explains how StellarTel collects, uses, and protects any information submitted through our
                    website.
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">1. Information We Collect</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name, email, organisation, phone number, and any other data submitted through contact forms.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">2. How We Use Your Data</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>To respond to enquiries and provide requested information or services.</li>
                            <li>For internal records and communication purposes only.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">3. Data Protection</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>We implement appropriate security measures to prevent unauthorised access or disclosure.</li>
                            <li>Data is stored securely and access is limited to authorised personnel only.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">4. Sharing of Data</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>We do not sell, rent, or share your information with third parties.</li>
                            <li>
                                Data may be shared with partners strictly for the purposes of responding to your enquiry, only where
                                necessary.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">5. Cookies</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>This Site does not currently use cookies for tracking or analytics.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">6. Your Rights</h3>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>You may request access to, correction of, or deletion of your personal data by contacting us.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">7. Contact</h3>
                        <p>To request data updates or ask questions, email us at:</p>
                        <a href="mailto:andrewpenders@stellartel.com.my" className="text-primary hover:underline">
                            andrewpenders@stellartel.com.my
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsPrivacyPage
