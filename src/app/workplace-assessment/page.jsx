"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 font-crimson-text">
            Welcome to Workplace Wellness
          </h1>
          <p className="text-gray-600 mb-8">
            Supporting healthy workplace environments through assessment and
            resources
          </p>

          <a
            href="/workplace-assessment"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Take the Workplace Toxicity Assessment
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">About the Assessment</h2>
          <p className="text-gray-600 mb-4">
            Our workplace toxicity assessment helps you evaluate your work
            environment and provides resources for support. The assessment:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Takes about 5 minutes to complete</li>
            <li>Includes 10 questions about your workplace experience</li>
            <li>Provides immediate results and recommendations</li>
            <li>Offers mental health and workplace support resources</li>
            <li>Is completely anonymous and confidential</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Important Disclaimer</h2>
          <div className="text-gray-600 space-y-3">
            <p>
              This assessment tool is for informational purposes only and does
              not substitute for professional advice, diagnosis, or treatment.
              The results and recommendations provided should not be considered
              as professional medical, legal, or psychological advice.
            </p>
            <p>
              If you are experiencing serious workplace issues or mental health
              concerns, please consult with appropriate professionals such as:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mental health professionals or counselors</li>
              <li>Legal professionals specializing in workplace law</li>
              <li>Human Resources professionals</li>
              <li>Workplace health and safety consultants</li>
            </ul>
            <p>
              In case of immediate crisis or emergency, contact emergency
              services or crisis helplines immediately.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Privacy Statement</h2>
          <div className="text-gray-600 space-y-3">
            <p>
              We take your privacy seriously. When you use this assessment tool:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>No personal information is collected or stored</li>
              <li>Your responses are completely anonymous</li>
              <li>No cookies or tracking data are used</li>
              <li>Results are calculated in your browser and are not saved</li>
              <li>No data is shared with third parties</li>
            </ul>
            <p>
              This tool is designed to provide immediate feedback while
              maintaining complete user privacy and confidentiality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;