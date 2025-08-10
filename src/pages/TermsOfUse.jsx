import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 my-20 py-8 sm:px-6 lg:px-8">
      <div className="bg-green p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Last Updated: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using GardenBD ("the Platform"), you agree to be bound by these Terms of Use. 
              If you do not agree to all of these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              GardenBD provides a platform for sharing gardening tips, techniques, and connecting with other gardening enthusiasts. 
              Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Posting and viewing gardening tips</li>
              <li className="mb-2">Interacting with other users through comments and likes</li>
              <li className="mb-2">Accessing gardening resources and educational content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a user of GardenBD, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Provide accurate and current information</li>
              <li className="mb-2">Maintain the confidentiality of your account credentials</li>
              <li className="mb-2">Not share content that is harmful, illegal, or violates others' rights</li>
              <li className="mb-2">Not use the platform for commercial purposes without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Content Ownership</h2>
            <p className="text-gray-700 mb-4">
              Users retain ownership of any content they post on GardenBD. However, by posting content, you grant us a worldwide, 
              non-exclusive, royalty-free license to use, display, reproduce, and distribute your content in connection with the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</a>, 
              which explains how we collect, use, and protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Modifications to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of significant changes through the platform 
              or via email. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, 
              including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              The service is provided "as is" without warranty of any kind. GardenBD does not guarantee the accuracy, completeness, 
              or usefulness of any gardening tips or information on the platform. Gardening activities carry inherent risks, and users 
              should exercise caution and proper judgment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              GardenBD shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from 
              your use of or inability to use the service or any content therein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict 
              of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> garden@meet.com<br />
              <strong>Address:</strong> 123 Garden Street, Dhaka, Bangladesh
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;