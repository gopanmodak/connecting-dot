import React from 'react'

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#1a001f] via-[#120018] to-black text-white px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D421FF]">
          Refund Policy
        </h1>

        <p className="text-gray-400">
          At Connecting Dots, we value our clients and aim for complete satisfaction. Please read our refund policy carefully.
        </p>

        <div className="space-y-4 text-gray-300">
          <h2 className="text-2xl font-semibold">1. Eligibility for Refunds</h2>
          <p>
            Refunds are considered for products or services that do not meet the described specifications or are delivered incorrectly.
          </p>

          <h2 className="text-2xl font-semibold">2. Refund Request</h2>
          <p>
            To request a refund, contact our support team within 7 days of purchase with relevant details.
          </p>

          <h2 className="text-2xl font-semibold">3. Processing Time</h2>
          <p>
            Refunds, if approved, will be processed within 7-10 business days via the original payment method.
          </p>

          <h2 className="text-2xl font-semibold">4. Non-Refundable Items</h2>
          <p>
            Certain services, subscriptions, or digital products may not be eligible for refunds. Check the product details before purchase.
          </p>

          <h2 className="text-2xl font-semibold">5. Contact Us</h2>
          <p>
            For any questions regarding our refund policy, please contact support@connectingdots.com.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy