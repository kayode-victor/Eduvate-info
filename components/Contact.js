import React from "react";
import WhatsappButton from "./WhatsappButton";

const Contact = () => {
  return (
    <div className="relative w-full p-5 md:px-10 md:py-16 mt-5 md:mt-10 lg:mt-16 bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md z-0"
        style={{ backgroundImage: "url('/BackgroundImage.svg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="text-lg text-gray-200 mb-6">
          <p className="mb-4">
            Interested in discussing pricing or learning more about our
            services? Use the WhatsApp button below to get in touch with us
            directly. We&apos;re here to answer any questions you might have.
          </p>
          <p className="mb-4 font-semibold text-primary">
            Special Offer: Enjoy discounted rates on all sessions until the end
            of September! Our prices have been reduced from $10 - $15 per
            session to just $7 - $10 per session. Take advantage of this
            limited-time offer by contacting us today.
          </p>
          <p>
            Don&apos;t miss out on this opportunity to provide your child with
            high-quality, personalized tutoring at an incredible price. Reach
            out now for more details!
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <WhatsappButton />
        </div>
      </div>
    </div>
  );
};

export default Contact;
