import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useContactForm } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactFormSchema } from "@shared/schema";
import { type InsertContactSubmission } from "@shared/schema";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Database,
  Activity,
  Users,
  Globe,
  Sprout,
  Loader2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const contactMutation = useContactForm();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="min-h-screen bg-background font-body text-foreground overflow-x-hidden">
      <Navigation />


      <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
>
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40 z-10" />
    <img
      src="/img/banner.jpg"
      alt="Sustainable Cattle Farming"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
    <div className="max-w-4xl mx-auto sm:mx-0 text-center sm:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 break-words">
          <span className="block sm:inline">Revolutionizing </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
            Bovine Genetics
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto sm:mx-0 leading-relaxed font-light"
      >
        Empowering climate-resilient livestock farming through community-led
        commerce and technology.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
      >
        <a
          href="https://www.pashu.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-bold text-base sm:text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/30"
        >
          Launch Pashu AI
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>

        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-base sm:text-lg hover:bg-white/20 border border-white/20 transition-all"
        >
          Learn More
        </button>
      </motion.div>
    </div>
  </div>

  {/* Floating Abstract Shapes */}
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-10 hidden lg:block"
  />
</section>

      {/* STATS SECTION */}
      <section ref={statsRef} className="py-20 bg-primary relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            {[
              { label: "Communities Served", value: 150, suffix: "+", icon: Users, decimals: 0 },
              { label: "Farmer Beneficiaries", value: 600, suffix: "k+", icon: Sprout, decimals: 0 },
              { label: "Animal Genetics Registered ", value: 20.8, suffix: "M+", icon: Globe, decimals: 1 },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <stat.icon className="w-12 h-12 mx-auto mb-6 opacity-80" />
                <div className="text-5xl md:text-6xl font-bold font-display mb-2 tracking-tight">
                  {statsInView ? (
                    <CountUp end={stat.value} separator="," duration={2.5} decimals={stat.decimals} />
                  ) : "0"}
                  {stat.suffix}
                </div>
                <div className="text-xl opacity-80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ABOUT SECTION */}
<section id="about" className="py-24 md:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div>
        <SectionHeading
          label="Our Mission"
          title="Technology for a Sustainable Future"
          align="left"
        />
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Verdant Impact is an innovative agri-tech company revolutionizing livestock management through community-led, tech-enabled solutions for sustainable farming. Founded to empower climate-resilient bovine genetics, the company combines cutting-edge artificial intelligence, IoT technology, and blockchain to enhance genetic diversity, improve animal health monitoring, and boost productivity for local farmers.
        </p>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Through its flagship products Pashu AI and Bharat Pashudhan, Verdant Impact serves over 600,000 farmer beneficiaries, promoting indigenous bovine genetics and sustainable farming practices. The company is committed to building resilient agricultural communities through innovation, technology, and a deep understanding of local farming needs.
        </p>

        <div className="space-y-4">
          {[
            "AI Analytics for Genetic Optimization",
            "Blockchain for Transparent Traceability",
            "IoT Sensors for Real-time Health Monitoring",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-transparent hover:border-primary/20 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="font-semibold text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        {/* Background accent */}
        <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] transform rotate-3 scale-105" />

        {/* Main Image */}
        <img
          src="/img/img11.jpg"
          alt="Farmers collaborating"
          className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5]"
        />

        {/* Farmer Satisfaction Card */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:-bottom-8 md:-left-8 md:translate-x-0 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs w-[90%] animate-bounce-slow">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-500 font-medium">Farmer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Solutions"
            title="Comprehensive Ecosystem"
            description="From genetic preservation to marketplace connectivity, we provide end-to-end solutions for modern livestock management."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Genetic Data Bank",
                desc: "Preserving indigenous breeds through comprehensive digital cataloging and DNA sequencing."
              },
              {
                icon: Activity,
                title: "Health Monitoring",
                desc: "IoT-enabled wearables that track livestock vitals, location, and behavior patterns 24/7."
              },
              {
                icon: Globe,
                title: "Global Marketplace",
                desc: "Connecting rural farmers directly with buyers, eliminating middlemen and ensuring fair trade."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-primary/20 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Gallery"
            title="Impact in Action"
            description="Witness the transformation in rural communities across India."
            light={true}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/img/img12.jpg",
              "/img/img14.jpg",
              "/img/img5.jpg",
              "/img/img6.jpg",
              "/img/img7.jpg",
              "/img/img8.jpg",
              "/img/img9.jpg",
              "/img/img15.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-3xl aspect-square"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="font-semibold text-sm">
                    Impact Story {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section
  id="contact"
  className="relative py-24 overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 z-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/img/img13.jpg')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 z-10 bg-black/40" />

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16">

      {/* LEFT CONTENT */}
      <div className="text-white">
        <SectionHeading
          label="Contact Us"
          title="Get in Touch"
          description="Have questions about our technology or want to partner with us? We'd love to hear from you."
          align="left"
        />

        <div className="space-y-8 mt-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Headquarters</h4>
              <p className="opacity-80 mt-1">
                Verdant Food Park, Rajawas, Jaipur-Sikar Highway, Jaipur<br />
                Rajasthan, India 302001
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Support Hours</h4>
              <p className="opacity-80 mt-1">
                Monday - Friday: 9am - 6pm EST<br />
                Weekend: Emergency Support Only
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FORM CARD (GLASS EFFECT) */}
      <Card className="relative z-30 bg-white/10 backdrop-blur-lg border border-white/30 shadow-2xl rounded-[2rem]">
        <CardContent className="p-8 md:p-10 text-secondary">
          <h3 className="text-2xl font-bold mb-6">
            Send us a Message
          </h3>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="rounded-xl h-12 bg-white/90"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          {...field}
                          className="rounded-xl h-12 bg-white/90"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+91 (555) 000-0000"
                          {...field}
                          className="rounded-xl h-12 bg-white/90"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="How can we help you?"
                        {...field}
                        className="rounded-xl min-h-[140px] bg-white/90"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 rounded-xl text-lg font-bold shadow-lg"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
