"use client";

import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Formatting the message for WhatsApp
    // Assuming the number 0717376964 is a Kenyan number (+254)
    const phoneNumber = "254717376964"; 
    const text = `Hello Daniel, my name is ${name}. Note my email: ${email}.\n\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl pt-20">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
        Contact
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Have a question or want to work together? Leave a message.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input type="text" id="name" name="name" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input type="email" id="email" name="email" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="" />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea id="message" name="message" required className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your message here..." />
        </div>
        <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:bg-foreground/90 h-10 px-8 py-2">
          Send Message
        </button>
      </form>
    </div>
  );
}
