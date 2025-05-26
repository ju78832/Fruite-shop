import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonial } from "@/components/testimonial";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <HeroCarousel />
        <div className="container absolute inset-0 flex h-full flex-col items-start justify-center gap-4 text-white z-10 w-full max-w-screen overflow-x-hidden mx-auto px-2 md:px-8 lg:px-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to Farmlyf
          </h1>
          <p className="max-w-[600px] text-lg">
            Your one-stop destination for premium quality dry fruits. Our
            products are sourced from the finest farms to ensure freshness and
            nutrition in every bite.
          </p>
          <p className="text-xl font-semibold italic">
            &quot;Pure, Nutritious, and Delicious Dry Fruits.&quot;
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-white dark:bg-gray-800 w-full max-w-screen overflow-x-hidden mx-auto px-2 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Launched Products</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our premium cashew collection, carefully selected and processed to deliver exceptional taste and quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Salted Cashew Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/salted-cashew.jpg"
                    alt="Salted Cashew - Premium Quality"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Salted Cashew</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Perfectly roasted cashews with a delicate hint of salt. A healthy snack that combines nutrition with irresistible taste.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>✓ Premium Grade A Cashews</p>
                    <p>✓ Lightly Salted & Roasted</p>
                    <p>✓ Rich in Proteins & Vitamins</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/products/salted-cashew">
                      View Product
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plain Cashew Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/plain-cashew.jpg"
                    alt="Plain Cashew - Natural & Pure"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Plain Cashew</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Pure, natural cashews with no added flavors. Experience the authentic taste and creamy texture of premium cashews.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>✓ 100% Natural & Pure</p>
                    <p>✓ No Artificial Additives</p>
                    <p>✓ Heart-Healthy Snack</p>
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href="/products/plain-cashew">
                      View Product
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">
                View All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-secondary/60 to-white py-20 w-full max-w-screen overflow-x-hidden mx-auto px-2 md:px-8 lg:px-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-14 text-primary">
            What Our Customers Say
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <Testimonial
              quote="Absolutely love the freshness of Farmlyf's cashew. Highly recommend!"
              author="Priya S."
            />
            <Testimonial
              quote="The best dry fruits I've ever had. Great taste and quality!"
              author="Rahul K."
            />
            <Testimonial
              quote="Perfect for gifting! The packaging was elegant and premium."
              author="Ananya M."
            />
          </div>
        </div>
      </section>
    </>
  );
}
