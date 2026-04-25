import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/Button";

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
          I have love to hear from you , if you have any question,comments or
          feedback please use the form below.
        </p>
      </div>
      <form>
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
              type="text"
              name="email"
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
              name="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 transition-all bg-gray-50/50 resize-none"
              placeholder="Write your message...."
            />
          </div>
        </div>
      </form>
      <Button className="px-10 py-3 rounded-lg! text-[14px]">Submit</Button>
    </section>
  );
};
