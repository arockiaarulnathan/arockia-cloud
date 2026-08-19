"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contact } from "@/content/data/profile";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORMSPREE_ID) {
      setStatus("not-configured");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </Button>

      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm font-medium text-emerald-500"
          >
            <CheckCircle2 className="h-4 w-4" /> Message sent — thank you, I&apos;ll be in touch soon.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm font-medium text-red-500"
          >
            <AlertCircle className="h-4 w-4" /> Something went wrong. Please email{" "}
            <a href={`mailto:${contact.email}`} className="underline">
              {contact.email}
            </a>{" "}
            directly.
          </motion.p>
        )}
        {status === "not-configured" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm font-medium text-muted"
          >
            <AlertCircle className="h-4 w-4" /> This form isn&apos;t connected yet —
            please email{" "}
            <a href={`mailto:${contact.email}`} className="text-accent underline">
              {contact.email}
            </a>{" "}
            directly.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
