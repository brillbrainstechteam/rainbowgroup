"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  const href = `https://wa.me/${number}?text=Hello%2C%20I%20am%20interested%20in%20learning%20more%20about%20Rainbow%20Group%20schools.`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp icon SVG */}
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.347.643 4.605 1.857 6.573L2.667 29.333l6.986-1.833A13.273 13.273 0 0016 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667zm0 24c-2.127 0-4.193-.579-5.997-1.673l-.43-.255-4.145 1.087 1.107-4.037-.28-.44A10.607 10.607 0 015.333 16c0-5.882 4.785-10.667 10.667-10.667S26.667 10.118 26.667 16 21.882 26.667 16 26.667zm5.84-7.947c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.497-2.567-1.587-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.54-.72-.547-.187-.007-.4-.01-.613-.01s-.56.08-.853.4c-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.763.333 1.36.533 1.827.68.767.24 1.467.207 2.02.127.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
      </svg>
    </motion.a>
  );
}
