"use client";
import React from "react";

function MainComponent() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <a
            href="/"
            className="inline-block text-blue-600 hover:text-blue-800 mb-4"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </a>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-crimson-text">
              Workplace Toxicity Assessment
            </h1>
            <p className="text-gray-600">
              Answer these questions honestly to assess your workplace
              environment
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> This assessment is for informational
            purposes only and does not substitute for professional advice. Your
            responses are anonymous and no data is stored. If you're
            experiencing serious workplace issues, please consult with
            appropriate professionals or contact emergency services if in
            crisis.
          </p>
        </div>

        {!showResults ? (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
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
        ) : (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <p className="text-gray-600 mb-4">
              Your score is {score} out of 10. This indicates a{" "}
              {score >= 7
                ? "highly toxic"
                : score >= 5
                ? "moderately toxic"
                : "less toxic"}{" "}
              workplace environment.
            </p>
            <p className="text-gray-600 mb-4">
              Based on your answers, we recommend the following resources:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Workplace Wellness Resources</li>
              <li>Employee Support Programs</li>
              <li>Professional Counseling Services</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;
