import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4  my-20 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Last Updated: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. 
              They help us provide you with a better user experience and allow us to improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 mb-2">We use cookies for the following purposes:</p>
            
            <h3 className="font-medium text-gray-800 mt-4 mb-2">Essential Cookies</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Enable core functionality like user authentication and security</li>
              <li className="mb-2">Remember your cookie preferences</li>
              <li className="mb-2">Maintain your session while using our platform</li>
            </ul>
            
            <h3 className="font-medium text-gray-800 mt-4 mb-2">Performance Cookies</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Analyze how visitors use our website</li>
              <li className="mb-2">Measure performance of different pages</li>
              <li className="mb-2">Identify areas for improvement</li>
            </ul>
            
            <h3 className="font-medium text-gray-800 mt-4 mb-2">Functionality Cookies</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Remember your preferences (like language or region)</li>
              <li className="mb-2">Personalize your experience</li>
              <li className="mb-2">Remember if you've participated in surveys</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We may use services from trusted third parties that also use cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">
                <strong>Google Analytics:</strong> Helps us understand how visitors interact with our site
              </li>
              <li className="mb-2">
                <strong>Social Media Platforms:</strong> For social sharing functionality
              </li>
              <li className="mb-2">
                <strong>Advertising Networks:</strong> To show relevant gardening-related ads (if applicable)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can control and/or delete cookies as you wish. Most web browsers allow you to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li className="mb-2">Delete all cookies from your device</li>
              <li className="mb-2">Block all cookies</li>
              <li className="mb-2">Allow cookies only from selected websites</li>
            </ul>
            <p className="text-gray-700">
              To learn how to manage cookies, visit your browser's help documentation:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                Chrome
              </a>
              <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                Firefox
              </a>
              <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                Safari
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy 
              on this page with a revised "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about our use of cookies, please contact us at:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> garden@meet.com<br />
             
            </p>
          </section>
        </div>

        
      </div>
    </div>
  );
};

export default CookiePolicy;