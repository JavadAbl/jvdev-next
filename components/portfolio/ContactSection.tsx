"use client";

import { useEffect, useRef, useState } from "react";
import { contactInfo } from "@/lib/portfolio-data";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Show toast and auto-dismiss after 4 seconds
  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://jvdev.ir/messages/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Reset form on success
      setFormData({ name: "", email: "", subject: "", message: "" });
      showToast("Message sent successfully!", "success");
    } catch (error) {
      console.error("Error sending message:", error);
      showToast("Failed to send message. Please try again later.", "error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-8 right-8 z-50 px-6 py-4 rounded-lg shadow-2xl text-[#121212] font-medium flex items-center gap-3 toast-slide-in ${
            toast.type === "success" ? "bg-green-400 " : "bg-red-400"
          }`}
        >
          {toast.type === "success" ? (
            <i className="fas fa-check-circle text-xl" />
          ) : (
            <i className="fas fa-exclamation-circle text-xl" />
          )}
          <span>{toast.message}</span>
          <button
            onClick={() => setToast(null)}
            className="ml-4 text-lg leading-none opacity-70 hover:opacity-100 transition-opacity"
          >
            &times;
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(120%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .toast-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>

      <section id="contact" ref={sectionRef} className="section-hidden mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block neon-text">
          Contact Me
          <span className="block w-3/5 h-1 bg-neon mt-2.5 rounded-sm shadow-[0_0_10px_#f0c529]" />
        </h2>

        <div className="flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-12 items-start">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center">
                <div className="w-12 h-12 min-w-12 bg-[rgba(0,123,255,0.1)] text-neon rounded-full flex items-center justify-center text-xl mr-4">
                  <i className={`fas ${info.icon}`} />
                </div>
                <div>
                  <h4 className="font-semibold">{info.label}</h4>
                  <p className="text-[#b0b0b0]">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 border border-[#ddd] rounded-lg font-[inherit] transition-[border-color] duration-300 bg-transparent text-[#e0e0e0] focus:outline-none focus:border-neon focus:shadow-[0_0_5px_rgba(240,197,41,0.5)]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 border border-[#ddd] rounded-lg font-[inherit] transition-[border-color] duration-300 bg-transparent text-[#e0e0e0] focus:outline-none focus:border-neon focus:shadow-[0_0_5px_rgba(240,197,41,0.5)]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-[#ddd] rounded-lg font-[inherit] transition-[border-color] duration-300 bg-transparent text-[#e0e0e0] focus:outline-none focus:border-neon focus:shadow-[0_0_5px_rgba(240,197,41,0.5)]"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-[#ddd] rounded-lg font-[inherit] transition-[border-color] duration-300 bg-transparent text-[#e0e0e0] resize-y focus:outline-none focus:border-neon focus:shadow-[0_0_5px_rgba(240,197,41,0.5)]"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="btn-shine inline-block px-8 py-3 bg-neon text-[#121212] rounded-[30px] font-medium shadow-[0_4px_15px_rgba(240,197,41,0.4)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.75 hover:shadow-[0_8px_20px_rgba(240,197,41,0.6),0_0_5px_#f0c529,0_0_10px_#f0c529,0_0_20px_rgba(240,197,41,0.8),0_0_40px_rgba(240,197,41,0.6)] border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
