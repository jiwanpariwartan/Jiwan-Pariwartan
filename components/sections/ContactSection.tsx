"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

import ContactForm from "@/components/contact-form";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ContactSection() {
  const { language } = useLanguage();

  const t = translations.contact.contactSection;

  const contactInfo = [
    {
      icon: Phone,
      title: t.contactInfo.phone.title[language],
      lines: [
        t.contactInfo.phone.office[language],
        t.contactInfo.phone.helpline1[language],
        t.contactInfo.phone.helpline2[language],
        t.contactInfo.phone.helpline3[language],
      ],
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: Mail,
      title: t.contactInfo.email.title[language],
      lines: ["info@jeewanpariwartan.com"],
      color: "bg-violet-100 text-violet-700",
    },
    {
      icon: MapPin,
      title: t.contactInfo.location.title[language],
      lines: [
        t.contactInfo.location.city[language],
        t.contactInfo.location.country[language],
      ],
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      icon: Clock,
      title: t.contactInfo.officeHours.title[language],
      lines: [
        t.contactInfo.officeHours.weekdays[language],
        t.contactInfo.officeHours.helpline[language],
      ],
      color: "bg-pink-100 text-pink-700",
    },
    {
      icon: MessageCircle,
      title: t.contactInfo.whatsapp.title[language],
      lines: [
        t.contactInfo.phone.office[language],
        t.contactInfo.whatsapp.response[language],
      ],
      color: "bg-teal-100 text-teal-700",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-8">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-3">
                {t.heading[language]}
              </h2>

              <p className="text-gray-500 leading-relaxed">
                {t.description[language]}
              </p>
            </div>

            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}
                >
                  <item.icon className="w-5 h-5" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    {item.title}
                  </p>

                  {item.lines.map((line) => (
                    <p key={line} className="text-gray-500 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Emergency Support */}
            <div className="mt-6 p-5 rounded-2xl bg-linear-to-br from-purple-600 to-violet-500 text-white">
              <p className="font-display font-bold text-base mb-1">
                {t.emergency.title[language]}
              </p>

              <p className="text-purple-100 text-sm mb-3">
                {t.emergency.description[language]}
              </p>

              <a
                href="tel:+977-98XXXXXXXX"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-purple-700 font-bold text-sm hover:shadow-lg transition-shadow"
              >
                <Phone className="w-4 h-4" />
                {t.emergency.button[language]}
              </a>
            </div>

            {/* Map Placeholder */}
            {/* <div className="rounded-2xl bg-linear-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center border border-gray-200 overflow-hidden">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />

                <p className="text-gray-500 text-sm font-medium">
                  {t.map.location[language]}
                </p>

                <iframe
                  title="jeewan Pariwartan Location"
                  src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div> */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-64 shadow-sm">
              <iframe
                title="jeewan Pariwartan Location"
                src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-purple-100/20 p-8 lg:p-10">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                {t.form.title[language]}
              </h3>

              <p className="text-gray-500 text-sm mb-8">
                {t.form.description[language]}
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
