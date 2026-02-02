'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Clock, 
  Truck, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  MapPin,
  Navigation,
  Sparkles,
  Shirt,
  ChevronRight,
  Menu,
  X,
  Calculator,
  HelpCircle,
  Award,
  RefreshCw
} from 'lucide-react';

const WHATSAPP_NUMBER = '6285198504914';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi! I would like to use your laundry service.'
);

export default function Home() {
  const [isTrustBadgeVisible, setIsTrustBadgeVisible] = useState(false);
  const trustBadgeRef = useRef<HTMLDivElement>(null);
  
  // Price Calculator State
  const [weight, setWeight] = useState<number>(5);
  const [selectedService, setSelectedService] = useState('express-12');
  
  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const services = [
    {
      title: "Express 12 Hours",
      price: "Rp24.900",
      unit: "/ Kg",
      minimum: "Minimum 3.9 kg",
      features: ["Free Pickup & Delivery", "Wash, Iron, Fold", "Dedicated Machine"],
      badge: "Best Value",
      color: "emerald"
    },
    {
      title: "Express 6 Hours",
      price: "Rp39.900",
      unit: "/ Kg",
      minimum: "Minimum 3 kg",
      features: ["Free Pickup & Delivery", "Wash, Iron, Fold", "Dedicated Machine"],
      badge: "Popular",
      color: "blue"
    },
    {
      title: "Express 3 Hours",
      price: "Rp49.900",
      unit: "/ Kg",
      minimum: "Minimum 2 kg",
      features: ["Free Pickup & Delivery", "Wash, Iron, Fold", "Dedicated Machine"],
      badge: "Fast",
      color: "purple"
    },
    {
      title: "Ultra Express 2 Hours",
      price: "Rp59.900",
      unit: "/ Kg",
      minimum: "Minimum 2 kg",
      features: ["Free Pickup & Delivery", "Wash, Iron, Fold", "Dedicated Machine"],
      badge: "Super Fast",
      color: "orange"
    },
    {
      title: "Shoe Laundry",
      price: "Rp49.900",
      unit: "/ Pair",
      minimum: "24 Hours Service",
      features: ["Manual Cleaning", "Deep Cleaning", "Free Pickup & Delivery"],
      badge: "Premium",
      color: "teal"
    },
    {
      title: "Bed Cover Express",
      price: "Rp50.000",
      unit: "/ Kg",
      minimum: "Safe Cleaning",
      features: ["Safe Water Level & Spin", "No Shrinkage", "No Fabric Damage"],
      badge: "Specialized",
      color: "rose"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Click WhatsApp",
      description: "Send us a message on WhatsApp to place your order"
    },
    {
      step: "2",
      title: "We Pickup",
      description: "Our driver picks up your laundry from your location"
    },
    {
      step: "3",
      title: "We Process",
      description: "Your laundry is washed, ironed, and folded professionally"
    },
    {
      step: "4",
      title: "Delivered Back",
      description: "Clean clothes delivered to your doorstep on time"
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "2-Hour Express",
      description: "Fastest laundry service in Bali – get clean clothes in just 2 hours"
    },
    {
      icon: Truck,
      title: "Free Pickup & Delivery",
      description: "No extra charges – we pick up and deliver to your location for free"
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Machine",
      description: "Your clothes are washed in a separate machine – no mixing with other customers"
    },
    {
      icon: Sparkles,
      title: "Professional & Hygienic",
      description: "Strict hygiene protocols with high-quality detergents and sanitization"
    },
    {
      icon: CheckCircle,
      title: "Trusted by Tourists",
      description: "Serving international travelers and expats with consistent quality"
    },
    {
      icon: Clock,
      title: "Open 24/7",
      description: "We never close – order anytime, day or night"
    }
  ];

  const coverageAreas = [
    "Seminyak",
    "Canggu",
    "Kuta",
    "Umalas",
    "Denpasar",
    "Sanur"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Australia",
      rating: 5,
      text: "Amazing service! I needed my clothes ready in 3 hours for a wedding and they delivered on time. Clothes were perfectly ironed and folded."
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "The 2-hour express service is a game changer. I'm a digital nomad and this laundry service has been a lifesaver during my stay in Canggu."
    },
    {
      name: "Emma Williams",
      location: "United Kingdom",
      rating: 5,
      text: "Super professional and clean. I love that they use dedicated machines – no mixing clothes with strangers. Highly recommended!"
    },
    {
      name: "David Rodriguez",
      location: "Spain",
      rating: 5,
      text: "Free pickup and delivery made everything so convenient. Great prices and excellent quality. Will definitely use again."
    },
    {
      name: "Yuki Tanaka",
      location: "Japan",
      rating: 5,
      text: "First time using a laundry service in Bali and I'm impressed! The 6-hour express was perfect for my needs. Clothes came back fresh and nicely folded."
    },
    {
      name: "Sophie Mueller",
      location: "Germany",
      rating: 5,
      text: "I was skeptical about the 2-hour service but they delivered! Quality was excellent and the driver was very friendly. Will use again!"
    }
  ];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  
  // FAQ Data
  const faqs = [
    {
      question: "What's the minimum order?",
      answer: "Minimum order varies by service: 2 kg for 2-3 hour express, 3 kg for 6 hour express, and 3.9 kg for 12 hour express."
    },
    {
      question: "Do you pick up and deliver?",
      answer: "Yes! We offer FREE pickup and delivery across Seminyak, Canggu, Kuta, Umalas, Denpasar, and Sanur. Just WhatsApp us your location."
    },
    {
      question: "How do I pay?",
      answer: "Payment can be made via cash, bank transfer, or digital wallet (GoPay, OVO, Dana) when we deliver your clean clothes."
    },
    {
      question: "Are my clothes mixed with others?",
      answer: "Never! We use dedicated machines for each customer. Your clothes are washed separately – no mixing with other customers' laundry."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a satisfaction guarantee! If you're not happy with the quality, let us know within 24 hours and we'll reprocess your order for free."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once you place your order, we'll send you updates via WhatsApp. You'll know when we pickup, when we start processing, and when we deliver."
    }
  ];
  
  // Guarantees Data
  const guarantees = [
    {
      icon: Award,
      title: "Satisfaction Guarantee",
      description: "Not happy with our service? Let us know within 24 hours and we'll reprocess your laundry for free."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We promise to deliver on time. If we're late, you get 15% discount on your next order."
    },
    {
      icon: ShieldCheck,
      title: "Quality Guarantee",
      description: "Professional cleaning with high-quality detergents. If any damage occurs due to our fault, we'll replace your item."
    },
    {
      icon: Truck,
      title: "Free Pickup & Delivery",
      description: "No hidden charges. Pickup and delivery are completely FREE across all our service areas."
    }
  ];

  // JSON-LD Schema for LocalBusiness and AggregateRating
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bali Express Laundry',
    image: 'https://baliexpresslaundry.vercel.app/logo.png',
    description: 'Premium laundry service in Bali with 2-hour express turnaround. Free pickup & delivery across Seminyak, Canggu, Kuta & more. Open 24/7.',
    telephone: '+6285198504914',
    email: 'info@baliexpresslaundry.vercel.app',
    url: 'https://baliexpresslaundry.vercel.app',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Mertanadi No.92X, Kerobokan Kelod',
      addressLocality: 'Kec. Kuta Utara',
      addressRegion: 'Kabupaten Badung',
      addressCountry: 'ID',
      postalCode: '80361'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -8.6965,
      longitude: 115.1528
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    priceRange: 'Rp24.900 - Rp59.900',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '4',
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: [
      'Seminyak',
      'Canggu',
      'Kuta',
      'Umalas',
      'Denpasar',
      'Sanur'
    ]
  };

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Intersection Observer for trust badge animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTrustBadgeVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const trustBadgeElement = trustBadgeRef.current;
    if (trustBadgeElement) {
      observer.observe(trustBadgeElement);
    }

    return () => {
      if (trustBadgeElement) {
        observer.unobserve(trustBadgeElement);
      }
    };
  }, []);
  
  // Price Calculator Logic
  const prices: Record<string, number> = {
    'express-12': 24900,
    'express-6': 39900,
    'express-3': 49900,
    'express-2': 59900
  };
  const minWeights: Record<string, number> = {
    'express-12': 3.9,
    'express-6': 3,
    'express-3': 2,
    'express-2': 2
  };

  const calculatedPrice = useMemo(() => {
    const effectiveWeight = Math.max(weight, minWeights[selectedService] || 2);
    return effectiveWeight * prices[selectedService];
  }, [weight, selectedService]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Business Name */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Bali Express Laundry
            </h1>

            {/* WhatsApp CTA - Most Important! */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:block">Order Now</span>
              <span className="text-sm sm:hidden">WhatsApp Us</span>
            </a>

            {/* Phone Number */}
            <div className="hidden md:flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span className="text-sm md:text-base font-semibold">
                +62 851-9850-4914
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group animate-bounce hover:animate-none"
        >
          <div className="relative">
            <div className="bg-white rounded-full p-2 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-green-500" />
            </div>
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              1
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-base">Order Now</span>
            <span className="text-xs text-green-100">WhatsApp</span>
          </div>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero Background with Lazy Loading */}
        <img
          src="/hero-bg.png"
          alt="Bali Express Laundry - Professional Laundry Service in Bali"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 pointer-events-auto" style={{ zIndex: 2 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div 
              ref={trustBadgeRef}
              className={`inline-flex items-center gap-2 bg-white/90 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/95 hover:-translate-y-1 cursor-pointer ${isTrustBadgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" />
              <span className="transition-transform duration-300 hover:scale-105">Trusted by 4000+ Tourists & Expats</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Laundry Express in Bali
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mt-2">
                2 Hours Service
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional laundry service with free pickup & delivery. 
              Express turnaround from 2 hours to 12 hours. Open 24/7 across Bali.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-white rounded-full p-2">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                Order via WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Open 24/7</p>
                <p className="text-sm text-gray-500">Every Day</p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Truck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Free Pickup</p>
                <p className="text-sm text-gray-500">& Delivery</p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <ShieldCheck className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Dedicated</p>
                <p className="text-sm text-gray-500">Machine</p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Express</p>
                <p className="text-sm text-gray-500">2 Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a service that fits your schedule and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const colorClasses = {
                emerald: {
                  bg: 'bg-emerald-50',
                  border: 'border-emerald-100',
                  badge: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
                  button: 'bg-emerald-600 hover:bg-emerald-700',
                  icon: 'bg-emerald-100 text-emerald-600'
                },
                blue: {
                  bg: 'bg-blue-50',
                  border: 'border-blue-100',
                  badge: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
                  button: 'bg-blue-600 hover:bg-blue-700',
                  icon: 'bg-blue-100 text-blue-600'
                },
                purple: {
                  bg: 'bg-purple-50',
                  border: 'border-purple-100',
                  badge: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
                  button: 'bg-purple-600 hover:bg-purple-700',
                  icon: 'bg-purple-100 text-purple-600'
                },
                orange: {
                  bg: 'bg-orange-50',
                  border: 'border-orange-100',
                  badge: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
                  button: 'bg-orange-600 hover:bg-orange-700',
                  icon: 'bg-orange-100 text-orange-600'
                },
                teal: {
                  bg: 'bg-teal-50',
                  border: 'border-teal-100',
                  badge: 'bg-teal-100 text-teal-700 hover:bg-teal-200',
                  button: 'bg-teal-600 hover:bg-teal-700',
                  icon: 'bg-teal-100 text-teal-600'
                },
                rose: {
                  bg: 'bg-rose-50',
                  border: 'border-rose-100',
                  badge: 'bg-rose-100 text-rose-700 hover:bg-rose-200',
                  button: 'bg-rose-600 hover:bg-rose-700',
                  icon: 'bg-rose-100 text-rose-600'
                }
              };
              const colors = colorClasses[service.color as keyof typeof colorClasses] || colorClasses.emerald;

              return (
                <div
                  key={index}
                  className={`relative ${colors.bg} rounded-3xl p-6 border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1 ${colors.badge} px-3 py-1 rounded-full text-xs font-semibold transition-colors`}>
                      {service.badge}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${colors.icon} mb-4`}>
                      <Shirt className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{service.minimum}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      {service.price}
                    </span>
                    <span className="text-gray-600">{service.unit}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center ${colors.button} text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg`}
                  >
                    Order Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting clean clothes is simple – just 4 easy steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div
                  key={index}
                  className="relative text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
                      <span className="text-3xl font-bold text-white">{item.step}</span>
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-transparent -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The most trusted laundry service in Bali for tourists and expats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-6 shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section 
        id="service-area"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Service Area
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We serve the most popular areas in Bali with free pickup & delivery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Coverage Areas</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {coverageAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 hover:shadow-lg transition-shadow"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3 text-gray-600">
                    <Navigation className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Address</p>
                      <p className="text-sm">
                        Jl. Mertanadi No.92X, Kerobokan Kelod,
                        Kec. Kuta Utara, Kabupaten Badung, Bali 80361
                      </p>
                      <p className="text-sm text-emerald-600 mt-1 font-medium">
                        Plus Code: 85F8+XW3
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/Bq4zg8wDKQwffvdB9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-3"
                      >
                        <MapPin className="w-4 h-4" />
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-4 shadow-xl overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3684147127697!2d115.1528!3d-8.6965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2408c6d96d823%3A0x4e0d7e3f8b2c0c0!2sJl.%20Mertanadi%20No.92X%2C%20Kerobokan%20Kelod%2C%20Kuta%20Utara%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted reviews from travelers around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section 
        id="calculator"
        className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Price Calculator
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estimate your laundry cost instantly
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-gray-900"
                    >
                      <option value="express-12">Express 12 Hours - Rp24.900/kg</option>
                      <option value="express-6">Express 6 Hours - Rp39.900/kg</option>
                      <option value="express-3">Express 3 Hours - Rp49.900/kg</option>
                      <option value="express-2">Ultra Express 2 Hours - Rp59.900/kg</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-gray-900 text-2xl font-bold"
                      placeholder="Enter weight in kg"
                    />
                  </div>

                  <div className="bg-emerald-50 rounded-2xl p-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <RefreshCw className="w-8 h-8 text-emerald-600" />
                      <span className="text-sm text-emerald-700 font-medium">Live Calculation</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Estimated Total</p>
                      <p className="text-5xl font-bold text-emerald-600">
                        Rp{(calculatedPrice / 1000).toLocaleString('id-ID')}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {selectedService === 'express-2' && weight < 2 && '(Minimum 2 kg)'}
                        {selectedService === 'express-3' && weight < 2 && '(Minimum 2 kg)'}
                        {selectedService === 'express-6' && weight < 3 && '(Minimum 3 kg)'}
                        {selectedService === 'express-12' && weight < 3.9 && '(Minimum 3.9 kg)'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Info */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Calculator className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <h3 className="text-lg font-bold text-gray-900">How It Works</h3>
                    </div>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <span>Select your service type</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <span>Enter your laundry weight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <span>See instant price estimate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        <span>Order via WhatsApp</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-emerald-600" />
                      Service Pricing
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Express 12 Hours</span>
                        <span className="font-bold text-gray-900">Rp24,900/kg</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Express 6 Hours</span>
                        <span className="font-bold text-gray-900">Rp39,900/kg</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Express 3 Hours</span>
                        <span className="font-bold text-gray-900">Rp49,900/kg</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600">Ultra Express 2 Hours</span>
                        <span className="font-bold text-gray-900">Rp59,900/kg</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    Order This Calculation via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our laundry service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-white/50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-in slide-in-from-top-0 slide-in-to-top-0 transition-all duration-300">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Still have questions? WhatsApp us
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Guarantees
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stand behind our service with these guarantees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-6 shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Best Laundry Service in Bali?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Order now via WhatsApp and get your clean clothes delivered in as fast as 2 hours
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="bg-emerald-600 rounded-full p-2 group-hover:bg-emerald-700 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </div>
              Order Now on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-emerald-100 mt-6 text-sm">
              Open 24/7 • Free Pickup & Delivery • WhatsApp: +62 851-9850-4914
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        id="contact"
        className="bg-gray-900 text-white py-12"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bali Express Laundry</h3>
              <p className="text-gray-400">
                Professional laundry service with express turnaround. Serving tourists and expats across Bali.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +62 851-9850-4914
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Jl. Mertanadi No.92X, Kerobokan Kelod,</p>
                    <p>Kec. Kuta Utara, Kabupaten Badung, Bali 80361</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <p>Open 24 Hours – Every Day</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-400">
                {coverageAreas.map((area, index) => (
                  <p key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    {area}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Bali Express Laundry. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* JSON-LD Schema for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
