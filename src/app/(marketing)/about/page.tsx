import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowLeftRight, Leaf, ShieldCheck, Sprout, Truck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From farm to table - our journey of bringing you the finest dry fruits
          </p>
        </div>

        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Welcome to Farmlyf
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                At Farmlyf, we are passionate about bringing you the finest dry fruits 
                directly from trusted farmers. Our commitment to quality and authenticity 
                ensures that every product meets the highest standards.
              </p>
              <p className="leading-relaxed">
                With a focus on purity and freshness, we ensure every bite is packed 
                with nutrition and taste. We celebrate the rich heritage of dry fruits 
                while embracing innovation to meet modern tastes.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why Choose Farmlyf?</h3>
              <div className="grid gap-3">
                {[
                  { icon: "🌱", text: "100% Natural and Fresh" },
                  { icon: "🤝", text: "Ethically Sourced" },
                  { icon: "✅", text: "Quality Assured" },
                  { icon: "🚚", text: "Direct from Farmers" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-xl" role="img">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-primary pt-4">
              <Leaf className="h-5 w-5" />
              <span className="font-medium">100% Natural Products</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about.webp"
                alt="Farmlyf dry fruits collection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Our Sustainability Promise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Sprout className="h-10 w-10 text-green-500 mb-2" />
                <CardTitle>Eco-Friendly Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Minimizing carbon footprints and reducing waste through
                  sustainable packaging and logistics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle>Ethical Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Partnering with small-scale farmers and cooperatives across
                  India to ensure fair wages and empowerment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Truck className="h-10 w-10 text-orange-500 mb-2" />
                <CardTitle>Sustainable Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Using recyclable and biodegradable materials to protect both
                  your food and our planet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <ArrowLeftRight className="h-10 w-10 text-purple-500 mb-2" />
                <CardTitle>Minimal Waste Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From farm to packaging, we optimize processes to reduce food
                  and material waste at every step.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="relative h-16 w-16 mb-2">
                  <Image
                    src="/images/fssai.webp"
                    alt="FSSAI Certification"
                    fill
                    className="object-contain"
                  />
                </div>
                <CardTitle>FSSAI Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Certified by the Food Safety and Standards Authority of India 
                  for quality assurance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
          Our Commitment to Excellence
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Premium Quality: Sourced from the best farms, processed with utmost care",
            "No Additives: Pure, natural goodness in every bite",
            "Certified Excellence: Compliant with industry standards",
            "Customer-Centric: Dedicated support for seamless shopping",
          ].map((item, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
