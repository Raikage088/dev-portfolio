import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  useEffect(() => {
    if (submitStatus.type) {
      const timeout = setTimeout(
        () => {
          setSubmitStatus({ type: null, message: "" });
        },
        // Shorter duration for success (4 sec), longer for error to allow reading the message (6 sec)
        submitStatus.type === "success" ? 4000 : 6000,
      );
      return () => clearTimeout(timeout);
    }
  }, [submitStatus.type]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service configuration is missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message.",
        error: error.stack,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center flex-col pt-20  lg:pt-30 px-4 gap-8 bg-white"
    >
      <div className="text-center space-y-2">
        <h1 className="font-bold text-4xl text-black tracking-tight">
          <span className="text-font-color-secondary">Send</span> a Message
        </h1>
        <p className="text-gray-500 text-lg">
          I have love to hear from you , if you have any question, comments or
          feedback please use the form below.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-full items-center"
      >
        <div className="flex flex-col gap-4 w-100 max-w-lg lg:w-150">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-font-color-secondary text-sm lg:text-md"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 transition-all bg-gray-50/50"
              placeholder="Write your name...."
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-font-color-secondary text-sm lg:text-md"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 transition-all bg-gray-50/50"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-font-color-secondary text-sm lg:text-md"
            >
              Message
            </label>
            <textarea
              id="message"
              type="text"
              required
              name="message"
              rows="5"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 transition-all bg-gray-50/50 resize-none"
              placeholder="Write your message...."
            />
          </div>
        </div>
        <Button
          type="submit"
          className="flex items-center gap-2 px-10 py-3 rounded-lg! text-[14px]"
          disabled={isLoading}
        >
          {isLoading ? (
            <>Sending...</>
          ) : (
            <>
              Submit{" "}
              <Send className="w-4 h-auto sm:w-6 sm:h-6 lg:w-5 lg:h-auto" />
            </>
          )}
        </Button>
        {submitStatus.type && (
          <div
            className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
          >
            {submitStatus.type === "success" ? (
              <CheckCircle className="w-5 h-5 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0" />
            )}
            <p className="text-sm">{submitStatus.message}</p>
          </div>
        )}
      </form>
    </section>
  );
};
