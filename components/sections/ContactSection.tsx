import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact-form";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone & Helpline",
    lines: ["+977-1-XXXXXXX (Office)", "+977-98XXXXXXXX (24/7 Helpline)"],
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@jiwanpariwartan.com", "admissions@jiwanpariwartan.com"],
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Kathmandu, Bagmati Province", "Nepal"],
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon–Fri: 8:00 AM – 6:00 PM", "Helpline: Available 24/7"],
    color: "bg-pink-100 text-pink-700",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["+977-98XXXXXXXX", "Quick response guaranteed"],
    color: "bg-teal-100 text-teal-700",
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-8">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-3">
                Reach Out to Us
              </h2>
              <p className="text-gray-500 leading-relaxed">
                We understand that reaching out for help takes courage. Our team is here to make that step as easy and comfortable as possible.
              </p>
            </div>

            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="text-gray-500 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Emergency box */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-500 text-white">
              <p className="font-display font-bold text-base mb-1">Emergency Support</p>
              <p className="text-purple-100 text-sm mb-3">
                If you or someone you know is in crisis, please call our emergency line immediately.
              </p>
              <a
                href="tel:+977-98XXXXXXXX"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-purple-700 font-bold text-sm hover:shadow-lg transition-shadow"
              >
                <Phone className="w-4 h-4" />
                Emergency: +977-98XXXXXXXX
              </a>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center border border-gray-200 overflow-hidden">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm font-medium">Kathmandu, Nepal</p>
                <p className="text-gray-400 text-xs">Map will load here</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-purple-100/20 p-8 lg:p-10">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below and a member of our team will reach out to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
