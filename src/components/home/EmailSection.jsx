import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailSection() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = "service_a34mgkk";
    const templateId = "template_5c89dmi";
    const publicKey = "2FbidMvGoRImQuXgR";

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing one or more EmailJS environment variables");
      setStatus("error");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Have a Complaint or Suggestion?
        </h2>
        <p className="text-gray-600 mb-8">
          Let us know about your experience — we value your feedback!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-wine"
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-wine"
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Challenge, complaint, or contribution..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-wine"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00205B] text-white py-3 rounded-lg hover:bg-wine-dark transition"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-600 text-sm">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Failed to send. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
