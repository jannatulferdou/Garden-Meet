import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto my-16 px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Effective Date: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              GardenBD ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our gardening tips platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-2">We may collect the following types of information:</p>
            
            <h3 className="font-medium text-gray-800 mt-4 mb-2">a. Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Name and contact details (email address)</li>
              <li className="mb-2">Profile information (username, profile photo)</li>
              <li className="mb-2">Account credentials</li>
            </ul>
            
            <h3 className="font-medium text-gray-800 mt-4 mb-2">b. Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">IP address and browser type</li>
              <li className="mb-2">Pages visited and time spent on platform</li>
              <li className="mb-2">Gardening preferences and interactions</li>
            </ul>
            
            <h3 className="font-medium text-gray-800 mt-4 mb-2">c. Content You Provide</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Gardening tips and posts</li>
              <li className="mb-2">Comments and likes</li>
              <li className="mb-2">Uploaded images</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-2">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Provide and maintain our service</li>
              <li className="mb-2">Improve user experience and platform functionality</li>
              <li className="mb-2">Communicate with you about your account</li>
              <li className="mb-2">Show relevant gardening content and recommendations</li>
              <li className="mb-2">Monitor usage patterns and analyze trends</li>
              <li className="mb-2">Prevent fraudulent activity and ensure security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share information in these circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">
                <strong>With your consent:</strong> When you choose to make your profile or content public
              </li>
              <li className="mb-2">
                <strong>Service providers:</strong> Trusted third parties who assist in platform operations (hosting, analytics)
              </li>
              <li className="mb-2">
                <strong>Legal requirements:</strong> When required by law or to protect our rights
              </li>
              <li className="mb-2">
                <strong>Business transfers:</strong> In connection with any merger or sale of company assets
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures including encryption, access controls, and regular security 
              assessments. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Your Data Rights</h2>
            <p className="text-gray-700 mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Access and request a copy of your personal data</li>
              <li className="mb-2">Correct inaccurate information</li>
              <li className="mb-2">Request deletion of your data (subject to legal requirements)</li>
              <li className="mb-2">Withdraw consent for data processing</li>
              <li className="mb-2">Opt-out of marketing communications</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us at <span className="text-green-600">privacy@gardenbd.com</span>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Authenticate users and maintain sessions</li>
              <li className="mb-2">Remember preferences and settings</li>
              <li className="mb-2">Analyze platform usage through analytics tools</li>
            </ul>
            <p className="text-gray-700">
              You can control cookies through your browser settings, but this may affect platform functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our service is not directed to children under 13. We do not knowingly collect personal information from children. 
              If we discover such data, we will delete it immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and maintained on computers located outside of your country, where data 
              protection laws may differ. By using our service, you consent to this transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Policy Updates</h2>
            <p className="text-gray-700 mb-4">
              We may update this policy periodically. We will notify you of significant changes by posting the new policy on 
              our platform or through email. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
            <p className="text-gray-700">
              For privacy-related questions or concerns, please contact our Data Protection Officer at:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> garden@meet.com<br />
              <strong>Address:</strong> 123 Garden Street, Dhaka, Bangladesh<br />
              <strong>Phone:</strong> +880 1965648590
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;