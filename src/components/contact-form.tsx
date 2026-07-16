"use client";

import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { school } from "@/lib/content";

type Status = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("error");
      form.reportValidity();
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="guardian-name">Parent or guardian name</label>
          <input id="guardian-name" name="guardianName" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            minLength={7}
            maxLength={20}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">
            Email address <span>(optional)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="child-name">Child&apos;s name</label>
          <input id="child-name" name="childName" autoComplete="off" required />
        </div>
        <div className="field field--full">
          <label htmlFor="class-level">Class applying for</label>
          <select id="class-level" name="classLevel" defaultValue="" required>
            <option value="" disabled>
              Select a class
            </option>
            {school.classes.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            minLength={10}
            required
          />
        </div>
      </div>
      <button className="button button--primary" type="submit">
        Send enquiry
        <Send size={17} aria-hidden="true" />
      </button>
      {status === "success" && (
        <div className="form-status form-status--success" role="status">
          <CheckCircle2 aria-hidden="true" />
          <p>
            Your enquiry is ready. Online delivery has not yet been connected, so
            please call <a href={school.phoneHref}>{school.phoneDisplay}</a> to
            submit it directly.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="form-status form-status--error" role="alert">
          <AlertCircle aria-hidden="true" />
          <p>Please complete the highlighted required fields and try again.</p>
        </div>
      )}
      <p className="form-integration-note">
        Integration-ready: connect this form&apos;s submit handler to the school&apos;s
        approved email or form service when available.
      </p>
    </form>
  );
}
