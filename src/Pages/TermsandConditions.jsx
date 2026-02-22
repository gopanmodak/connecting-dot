import React from 'react'

const TermsandConditions = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#1a001f] via-[#120018] to-black text-white px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#54E3FF]">
          Terms & Conditions
        </h1>

        <p className="text-gray-400">
          Welcome to Connecting Dots! By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>

        <div className="space-y-4 text-gray-300">
          <h2 className="text-2xl font-semibold">1. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with our policies.
          </p>

          <h2 className="text-2xl font-semibold">2. Intellectual Property</h2>
          <p>
            All content on this website, including images, text, and graphics, are owned by Ontik Technology and protected under copyright laws.
          </p>

          <h2 className="text-2xl font-semibold">3. User Accounts</h2>
          <p>
            Users may be required to create accounts to access certain features. You are responsible for maintaining the confidentiality of your account information.
          </p>

          <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
          <p>
            Ontik Technology is not liable for any damages arising from the use of our services. Use them at your own risk.
          </p>

          <h2 className="text-2xl font-semibold">5. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the services constitutes acceptance of the updated terms.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsandConditions