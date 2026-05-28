"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Send, Loader2 } from "lucide-react";
import { sendEmail } from "@/actions/sendEmail";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const programs = [
  "Alcohol Recovery",
  "Drug Recovery",
  "Mental Wellness",
  "Medical Detox",
  "Family Support",
  "Individual Counseling",
  "General Enquiry",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm bg-gray-50 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 placeholder:text-gray-400";

const errorClass = "mt-1 text-xs text-red-500";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      const result = await sendEmail(data);
      if (result.success) {
        toast.success(result.message, { duration: 6000 });
        reset();
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your full name"
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone + Program */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+977-XXXXXXXXX"
            className={inputClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Program of Interest <span className="text-red-400">*</span>
          </label>
          <select
            {...register("program")}
            className={`${inputClass} cursor-pointer`}
            aria-invalid={!!errors.program}
          >
            <option value="">Select a program</option>
            {programs.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          {errors.program && <p className={errorClass}>{errors.program.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          Your Message <span className="text-red-400">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Please share a bit about your situation and how we can help..."
          className={`${inputClass} resize-none`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 leading-relaxed">
        All information shared is strictly confidential and protected under our privacy policy. We will never share your personal information with third parties.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-semibold text-base bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
