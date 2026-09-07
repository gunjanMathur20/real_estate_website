
// React library used for creating the Contact page component and managing state.
import React from "react";

// Framer Motion used for entrance, hover, and interaction animations.
import { motion } from "framer-motion";

// Toast notifications used to show success and error messages to the user.
import { toast } from "react-toastify";

// Icons used throughout the contact page.
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

export default function ContactPage() {
  // Stores the current form submission status, such as "Sending...".
  const [result, setResult] = React.useState("");

  // Handles contact form submission and sends the form data to Web3Forms.
  const onSubmit = async (event) => {
    // Prevents the browser from refreshing the page after form submission.
    event.preventDefault();

    // Shows a sending status while the request is being processed.
    setResult("Sending...");

    // Collects all form field values from the submitted form.
    const formData = new FormData(event.target);

    // Adds the Web3Forms access key required to submit the form.
    formData.append("access_key", "0d799668-7d52-42c7-871f-565aff1bbe8c");

    try {
      // Sends the contact form data to the Web3Forms API.
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Converts the API response into a JavaScript object.
      const data = await response.json();

      // Handles a successful form submission.
      if (data.success) {
        // Clears the sending status.
        setResult("");

        // Shows a success notification to the user.
        toast.success("Your inquiry has been sent successfully!");

        // Resets all form fields after successful submission.
        event.target.reset();
      } else {
        // Logs the API error details for debugging.
        console.log("Error", data);

        // Displays the API error message or a fallback message.
        toast.error(data.message || "Something went wrong.");

        // Clears the sending status.
        setResult("");
      }
    } catch (error) {
      // Logs unexpected errors for debugging.
      console.error(error);

      // Shows an error notification when the request cannot be completed.
      toast.error("Unable to send your message. Please try again.");

      // Clears the sending status.
      setResult("");
    }
  };

  // Contact information displayed in the "We're here to help" section.
  const contactInfo = [
    {
      icon: FiPhone,
      title: "Call Us",
      value: "+1 (800) 555-0198",
      description: "Mon – Sat · 9:00 AM – 7:00 PM",
    },
    {
      icon: FiMail,
      title: "Email Us",
      value: "hello@urbannest.com",
      description: "We usually respond within 24 hours",
    },
    {
      icon: FiMapPin,
      title: "Our Office",
      value: "Beverly Hills, California",
      description: "1200 Wilshire Boulevard",
    },
    {
      icon: FiClock,
      title: "Office Hours",
      value: "09:00 AM – 07:00 PM",
      description: "Monday – Saturday",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-gray-900">
      {/* =====================================================
          PAGE INTRO
          Main heading and introductory information.
      ===================================================== */}

      <section className="border-b border-gray-100 bg-[#fafafa] px-6 pb-16 pt-14 sm:px-10 lg:px-16 lg:pb-20 lg:pt-20">
        <div className="mx-auto mt-10 max-w-7xl">
          {/* Animated contact page eyebrow. */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-blue-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Contact UrbanNest
            </span>
          </motion.div>

          {/* Animated main page heading. */}

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
          >
            Let's talk about your
            <span className="block text-blue-600">next property.</span>
          </motion.h1>

          {/* Short description explaining the purpose of the contact page. */}

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg"
          >
            Whether you're looking to buy, rent, sell, or invest, our property
            specialists are here to help you make a confident decision.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
          Displays phone, email, office location, and hours.
      ===================================================== */}

      <section className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section heading. */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Get In Touch
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
              We're here to help
            </h2>
          </motion.div>

          {/* Contact information cards are generated from the contactInfo array. */}

          <div className="grid border-y border-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => {
              // Gets the icon component stored in the current contact item.
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group px-5 py-7 sm:px-6 ${index !== 0 ? "border-t border-gray-200 sm:border-l lg:border-t-0" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Contact information icon. */}

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={18} />
                    </div>

                    {/* Contact information text. */}

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {item.title}
                      </p>

                      <p className="mt-2 break-words text-sm font-semibold text-gray-900">
                        {item.value}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM AREA
          Contains company information and the property inquiry form.
      ===================================================== */}

      <section className="px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden border border-gray-200 lg:grid-cols-[0.72fr_1.28fr]">
            {/* =================================================
                LEFT INFORMATION
                Benefits and company information shown beside the form.
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-gray-950 p-8 text-white sm:p-10 lg:p-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                UrbanNest Realty
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                A better property
                <span className="block text-blue-400">
                  decision starts here.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
                Tell us what you're looking for and we'll help you narrow down
                the right options based on your needs, location and budget.
              </p>

              {/* Benefits offered by the real estate team. */}

              <div className="mt-9 space-y-5">
                {/* Benefit 1 */}

                <div className="flex items-start gap-3">
                  <FiCheckCircle
                    className="mt-0.5 shrink-0 text-blue-400"
                    size={18}
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Personalised property guidance
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Recommendations based on your requirements.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}

                <div className="flex items-start gap-3">
                  <FiCheckCircle
                    className="mt-0.5 shrink-0 text-blue-400"
                    size={18}
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Local market expertise
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Insights to help you choose with confidence.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}

                <div className="flex items-start gap-3">
                  <FiCheckCircle
                    className="mt-0.5 shrink-0 text-blue-400"
                    size={18}
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Transparent communication
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Clear answers from the first conversation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office address information. */}

              <div className="mt-12 border-t border-white/10 pt-7">
                <div className="flex gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-blue-400" size={18} />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Head Office
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      1200 Wilshire Boulevard
                      <br />
                      Beverly Hills, California
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FORM
                Property inquiry form submitted through Web3Forms.
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-white p-7 sm:p-10 lg:p-12"
            >
              {/* Form heading and description. */}

              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Property Inquiry
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                  Tell us what you need
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                  Share a few details and one of our property advisors will get
                  back to you.
                </p>
              </div>

              {/* Main property inquiry form. */}

              <form onSubmit={onSubmit} className="space-y-5">
                {/* NAME + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Full name field. */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />
                  </div>

                  {/* Email address field. */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* PHONE + INTEREST */}

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Phone number field. */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 000 000 0000"
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />
                  </div>

                  {/* Inquiry type selection. */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">
                      I'm Interested In
                    </label>

                    <select
                      name="inquiry_type"
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-600"
                    >
                      <option value="">Select an option</option>

                      <option value="Buying a property">
                        Buying a Property
                      </option>

                      <option value="Renting a property">
                        Renting a Property
                      </option>

                      <option value="Selling a property">
                        Selling a Property
                      </option>

                      <option value="Property investment">
                        Property Investment
                      </option>

                      <option value="General enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                {/* PROPERTY TYPE + BUDGET */}

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Property type selection. */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">
                      Property Type
                    </label>

                    <select
                      name="property_type"
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-600"
                    >
                      <option value="">Select property type</option>

                      <option value="Apartment">Apartment</option>

                      <option value="Villa">Villa</option>

                      <option value="House">House</option>

                      <option value="Office">Office</option>

                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  {/* Budget range selection. */}

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-700">
                      Budget Range
                    </label>

                    <select
                      name="budget"
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-600"
                    >
                      <option value="">Select budget</option>

                      <option value="Under $500K">Under $500K</option>

                      <option value="$500K - $1M">$500K – $1M</option>

                      <option value="$1M - $2M">$1M – $2M</option>

                      <option value="$2M+">$2M+</option>
                    </select>
                  </div>
                </div>

                {/* LOCATION */}

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-700">
                    Preferred Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    placeholder="City, neighbourhood or area"
                    className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-700">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us a little about the property you're looking for..."
                    required
                    className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                  />
                </div>

                {/* SUBMIT */}

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={result === "Sending..."}
                    className="group inline-flex items-center gap-3 bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {/* Changes button text while the form is being submitted. */}

                    <span>{result || "Send Property Inquiry"}</span>

                    {/* Arrow is displayed only when the form is not being submitted. */}

                    {!result && (
                      <FiArrowRight
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        size={17}
                      />
                    )}
                  </motion.button>
                </div>

                {/* Privacy note displayed below the submit button. */}

                <p className="text-xs leading-5 text-gray-400">
                  Your information is only used to respond to your property
                  inquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OFFICE LOCATION
          Displays the company address and a visual map placeholder.
      ===================================================== */}

      <section className="border-t border-gray-100 bg-[#fafafa] px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Office information and directions. */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Visit Us
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                Come meet our team.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
                Prefer a face-to-face conversation? Visit our office and speak
                with one of our property specialists.
              </p>

              {/* Office address. */}

              <div className="mt-6 flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-blue-600" size={19} />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    UrbanNest Realty
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    1200 Wilshire Boulevard
                    <br />
                    Beverly Hills, California
                  </p>
                </div>
              </div>

              {/* Directions button. */}

              <button
                type="button"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-blue-600"
              >
                Get Directions
                <FiArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>

            {/* Minimal map placeholder. */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex min-h-[260px] items-center justify-center overflow-hidden border border-gray-200 bg-white"
            >
              {/* Decorative map lines. */}

              <div className="absolute inset-0 opacity-40">
                <div className="absolute left-[15%] top-[30%] h-px w-[70%] rotate-[12deg] bg-gray-300" />

                <div className="absolute left-[5%] top-[55%] h-px w-[90%] rotate-[-8deg] bg-gray-300" />

                <div className="absolute left-[35%] top-[5%] h-[90%] w-px rotate-[18deg] bg-gray-300" />

                <div className="absolute left-[65%] top-[5%] h-[90%] w-px rotate-[-12deg] bg-gray-300" />
              </div>

              {/* Location marker and address label. */}

              <div className="relative z-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                  <FiMapPin size={20} />
                </div>

                <p className="mt-4 text-sm font-semibold text-gray-900">
                  Beverly Hills
                </p>

                <p className="mt-1 text-xs text-gray-500">UrbanNest Realty</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          Encourages users to start a property conversation.
      ===================================================== */}

      <section className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl border border-gray-200 bg-white px-7 py-10 text-center sm:px-10 sm:py-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Your Next Move
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
            Ready to find your next property?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Let's turn your property goals into a clear plan and find a space
            that feels right for you.
          </p>

          {/* Scrolls the page smoothly to the top when clicked. */}

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-blue-600"
          >
            Start a conversation
            <FiArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
