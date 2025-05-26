import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container py-12 mx-auto px-2 md:px-8 lg:px-16 w-full max-w-screen overflow-x-hidden">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Office Address</h3>
              <p className="text-muted-foreground">
                HIG-461, K-5 Subudhipur, Kalinga Nagar<br />
                Bhubaneswar, Khorda Nagar<br />
                Orissa-751019
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Manufacturing Unit Address</h3>
              <p className="text-muted-foreground">
                HIG-461, K-5 Subudhipur, Kalinga Nagar<br />
                Bhubaneswar, Khorda Nagar<br />
                Orissa-751019
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">
                1800 890 8177<br />
                <span className="text-sm">24/7 support services</span>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">
                care@farmlyf.in<br />
                sales@farmlyf.in
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
