import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "xyrsjhn@gmail.com",
    href: "mailto:xyrsjhn@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "090900909090",
    href: "tel:09090090909",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manila, Philippines",
    href: "https://www.google.com/maps/place/",
  },
];

export const Contact = () => {
  // Added 'reset' here
  const [state, handleSubmit, reset] = useForm("mwvareeg");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);

      const timer = setTimeout(() => {
        setShowSuccess(false);
        // Ngayon gagana na 'to dahil kinuha natin sa useForm
        reset();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  if (showSuccess) {
    return (
      <div className="flex items-center justify-center min-h-[600px] text-center animate-in fade-in zoom-in duration-500 px-4">
        <div className="space-y-3">
          <div className="text-4xl">📩</div>
          <h2 className="text-2xl font-bold text-black">Message Sent!</h2>
          <p className="text-gray-500">
            Thanks for reaching out, I'll get back to you soon.
          </p>
          <p className="text-xs text-gray-400 italic pt-4">
            Form will reset in a few seconds...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="flex items-center flex-col min-h-screen pt-40 pb-24 px-4 gap-8 bg-white"
    >
      <div className="text-center space-y-2">
        <h1 className="font-bold text-4xl text-black tracking-tight">
          <span className="text-font-color-secondary">Send</span> a Message
        </h1>
        <p className="text-gray-500 text-lg">
          I have love to hear from you , if you have any question,comments or
          feedback please use the form below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-700 ml-1"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="yourname@gmail.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50/50"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-xs mt-1 ml-1"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-gray-700 ml-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50/50 resize-none"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-xs mt-1 ml-1"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-[#1a1a1a] text-white px-10 py-3 rounded-lg font-medium hover:bg-black transition-all shadow-md active:scale-95 disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};
