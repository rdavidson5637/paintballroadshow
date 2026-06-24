"use client";

import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useFadeUp } from "@/hooks/useFadeUp";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID";

const HOW_FOUND_OPTIONS = [
  { value: "", label: "Please select..." },
  { value: "previous-client", label: "Previous / Existing Client" },
  { value: "local-newspaper", label: "Local Newspaper" },
  { value: "regional-newspaper", label: "Regional Newspaper" },
  { value: "national-newspaper", label: "National Newspaper" },
  { value: "corporate-website", label: "Other Corporate Division Website" },
  { value: "local-radio", label: "Local Radio" },
  { value: "magazine", label: "Magazine" },
  { value: "national-radio", label: "National Radio" },
  { value: "television", label: "Television" },
  { value: "word-of-mouth", label: "Word of Mouth" },
  { value: "web-link", label: "Web Link" },
  { value: "search-engines", label: "Search Engines" },
  { value: "email", label: "Email" },
  { value: "intranet", label: "Intranet" },
] as const;

const SPECIFY_SOURCES = new Set([
  "web-link",
  "search-engines",
  "email",
  "intranet",
]);

const inputClassName =
  "w-full rounded-lg border border-white/10 bg-[#0D0D0D] px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-[#E63329] focus:outline-none focus:ring-1 focus:ring-[#E63329]";

const labelClassName = "mb-1 block text-sm font-medium text-gray-300";

type FormData = {
  name: string;
  organisation: string;
  address: string;
  town: string;
  county: string;
  postcode: string;
  country: string;
  phone: string;
  mobile: string;
  email: string;
  message: string;
  howDidYouFindUs: string;
  pleaseSpecify: string;
};

const initialFormData: FormData = {
  name: "",
  organisation: "",
  address: "",
  town: "",
  county: "",
  postcode: "",
  country: "UK",
  phone: "",
  mobile: "",
  email: "",
  message: "",
  howDidYouFindUs: "",
  pleaseSpecify: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useFadeUp(success);

  const showPleaseSpecify = SPECIFY_SOURCES.has(formData.howDidYouFindUs);

  const updateField =
    (key: keyof FormData) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormData((current) => ({ ...current, [key]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pleaseSpecify: showPleaseSpecify ? formData.pleaseSpecify : undefined,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(
          "Something went wrong. Please try again or call us directly on 08700 63 00 63."
        );
      }
    } catch {
      setError(
        "Something went wrong. Please try again or call us directly on 08700 63 00 63."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-enter min-h-screen bg-[#0D0D0D]">
      <Navbar />

      <header className="bg-[#1A1A1A] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            GET IN TOUCH
          </p>
          <h1
            className="fade-up mt-2 break-words font-display text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            CONTACT US
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-400">
            Fill out the form below and we&apos;ll aim to reply within 24 hours.
            All information you send is treated as confidential and is not
            disclosed to third parties.
          </p>
        </div>
      </header>

      <div className="mx-auto min-w-0 max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="min-w-0 lg:order-1 lg:col-span-2">
            {success ? (
              <div className="fade-up rounded-xl border border-green-500 bg-green-900/30 p-8 text-center text-green-300">
                <p className="text-4xl" aria-hidden="true">
                  ✓
                </p>
                <h2 className="mt-4 text-2xl font-bold text-white">
                  Enquiry Sent!
                </h2>
                <p className="mt-4">
                  Thanks for getting in touch. We aim to reply to all enquiries
                  within 24 hours. In the meantime, you can reach us on 08700 63
                  00 63.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="fade-up rounded-xl bg-[#1A1A1A] p-6 sm:p-8"
                noValidate
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClassName}>
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={updateField("name")}
                        className={inputClassName}
                      />
                    </div>
                    <div>
                      <label htmlFor="organisation" className={labelClassName}>
                        Organisation
                      </label>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        placeholder="Company or organisation"
                        value={formData.organisation}
                        onChange={updateField("organisation")}
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className={labelClassName}>
                      Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={updateField("address")}
                      className={inputClassName}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="town" className={labelClassName}>
                        Town
                      </label>
                      <input
                        id="town"
                        name="town"
                        type="text"
                        placeholder="Town or city"
                        value={formData.town}
                        onChange={updateField("town")}
                        className={inputClassName}
                      />
                    </div>
                    <div>
                      <label htmlFor="county" className={labelClassName}>
                        County
                      </label>
                      <input
                        id="county"
                        name="county"
                        type="text"
                        placeholder="County"
                        value={formData.county}
                        onChange={updateField("county")}
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="postcode" className={labelClassName}>
                        Postcode
                      </label>
                      <input
                        id="postcode"
                        name="postcode"
                        type="text"
                        placeholder="Postcode"
                        value={formData.postcode}
                        onChange={updateField("postcode")}
                        className={inputClassName}
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className={labelClassName}>
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Country"
                        value={formData.country}
                        onChange={updateField("country")}
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClassName}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Daytime phone number"
                        value={formData.phone}
                        onChange={updateField("phone")}
                        className={inputClassName}
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className={labelClassName}>
                        Mobile
                      </label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        placeholder="Mobile number"
                        value={formData.mobile}
                        onChange={updateField("mobile")}
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClassName}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email address"
                      value={formData.email}
                      onChange={updateField("email")}
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClassName}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your event — type, expected attendance, preferred date(s), location, and any other details"
                      value={formData.message}
                      onChange={updateField("message")}
                      className={`${inputClassName} resize-y`}
                    />
                  </div>

                  <div>
                    <label htmlFor="howDidYouFindUs" className={labelClassName}>
                      How did you find us?
                    </label>
                    <select
                      id="howDidYouFindUs"
                      name="howDidYouFindUs"
                      value={formData.howDidYouFindUs}
                      onChange={updateField("howDidYouFindUs")}
                      className={`${inputClassName} cursor-pointer`}
                    >
                      {HOW_FOUND_OPTIONS.map((option) => (
                        <option
                          key={option.value || "default"}
                          value={option.value}
                          className="bg-[#0D0D0D] text-white"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {showPleaseSpecify && (
                    <div>
                      <label htmlFor="pleaseSpecify" className={labelClassName}>
                        Please specify
                      </label>
                      <input
                        id="pleaseSpecify"
                        name="pleaseSpecify"
                        type="text"
                        placeholder="Please give more detail"
                        value={formData.pleaseSpecify}
                        onChange={updateField("pleaseSpecify")}
                        className={inputClassName}
                      />
                    </div>
                  )}

                  {error && (
                    <div className="rounded-lg border border-red-500 bg-red-900/30 p-4 text-red-300">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#E63329] py-4 text-lg font-bold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting && (
                      <span
                        className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"
                        aria-hidden="true"
                      />
                    )}
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="min-w-0 lg:order-2 lg:col-span-1">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="fade-up rounded-xl bg-[#1A1A1A] p-6">
                <h2 className="font-display text-[1.4rem] text-white">
                  GET IN TOUCH
                </h2>
                <ul className="mt-4 space-y-1">
                  <li className="flex items-start gap-3 py-2 text-sm text-gray-300">
                    <span aria-hidden="true">📞</span>
                    <a
                      href="tel:08700630063"
                      className="transition-colors hover:text-[#E63329]"
                    >
                      08700 63 00 63
                    </a>
                  </li>
                  <li className="flex items-start gap-3 py-2 text-sm text-gray-300">
                    <span aria-hidden="true">📠</span>
                    <span>08700 63 00 64</span>
                  </li>
                  <li className="flex items-start gap-3 py-2 text-sm text-gray-300">
                    <span aria-hidden="true">✉️</span>
                    <a
                      href="mailto:info@paintball-roadshow.com"
                      className="text-[#E63329] transition-colors hover:underline"
                    >
                      info@paintball-roadshow.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 py-2 text-sm text-gray-300">
                    <span aria-hidden="true">🌐</span>
                    <a
                      href="https://www.paintball-roadshow.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#E63329]"
                    >
                      www.paintball-roadshow.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="fade-up rounded-xl bg-[#1A1A1A] p-6">
                <h2 className="font-display text-[1.4rem] text-white">
                  COMPANY INFO
                </h2>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-gray-400">
                  {`Management & Leisure Strategies Limited
Registered in England & Wales
Company No. 5176055

Registered Office:
Fiducia House
14 Ffordd Cynfal
Bangor, Gwynedd
UK. LL57 2YL`}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
