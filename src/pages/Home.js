import React, { useState, useEffect } from "react";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import Stack from "../bit/Stack";
import ChromaGrid from "../bit/ChromaGrid/ChromaGrid";
import RotatingText from "../bit/RotatingText/RotatingText";
import {
  FileText,
  Camera,
  Copy,
  BookOpen,
  Heart,
  Gift,
  Upload,
  MessageCircle,
  Clock,
  Shield,
  Zap,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Smartphone ,
  ArrowRight,
  CheckCircle,
  Phone,
  MapPin,
  CreditCard,
  Truck,
} from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: b1,
      title: "Student Life Made Easy",
      subtitle: "24/7 Printing Solutions",
    },
    {
      url: b2,
      title: "Capture Your Memories",
      subtitle: "Perfect Photo Prints & Gifts",
    },
    {
      url: b3,
      title: "Fast Campus Delivery",
      subtitle: "From BITians to BITians",
    },
  ];

  const services = [
    {
      icon: FileText,
      title: "Document Printing",
      desc: "B&W and Color printing",
      price: "₹2/page",
      image: b1, // example image
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      link: "#",
    },
    {
      icon: Copy,
      title: "Xerox Services",
      desc: "Fast photocopying",
      price: "₹1/page",
      image: b1,
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      link: "#",
    },
    {
      icon: BookOpen,
      title: "Spiral Binding",
      desc: "Professional binding",
      price: "₹40",
      image: b1,
      borderColor: "#EC4899",
      gradient: "linear-gradient(135deg, #EC4899, #000)",
      link: "#",
    },
    {
      icon: Camera,
      title: "Photo Prints",
      desc: "High-quality photos",
      price: "₹10/photo",
      image: b1,
      borderColor: "#F59E0B",
      gradient: "linear-gradient(120deg, #F59E0B, #000)",
      link: "#",
    },
    {
      icon: Heart,
      title: "Couple Prints",
      desc: "Polaroid & collages",
      price: "₹20",
      image: b1,
      borderColor: "#EF4444",
      gradient: "linear-gradient(145deg, #EF4444, #000)",
      link: "#",
    },
    {
      icon: Gift,
      title: "Gift Cards",
      desc: "Custom photo cards",
      price: "₹35",
      image: b1,
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(145deg, #8B5CF6, #000)",
      link: "#",
    },
  ];
  const chromaItems = services.map((service) => ({
    image: service.image, // you need to have an `image` field in your `services`
    title: service.title,
    subtitle: service.desc,
    handle: service.price,
    borderColor: service.borderColor || "#3B82F6", // optional fallback
    gradient: service.gradient || "linear-gradient(145deg, #3B82F6, #000)",
  }));
  const testimonials = [
    {
      name: "Rahul S.",
      course: "3rd Year CSE",
      text: "Saved me during internals – got 30 pages printed in 30 minutes!",
      rating: 5,
    },
    {
      name: "Priya M.",
      course: "2nd Year Mech",
      text: "My boyfriend loved the surprise photo collage. Amazing quality!",
      rating: 5,
    },
    {
      name: "Arjun K.",
      course: "4th Year ECE",
      text: "Best printing service on campus. Fast, reliable, and affordable!",
      rating: 5,
    },
  ];

  const [cardSize, setCardSize] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardSize({ width: 200, height: 200 });
      } else {
        setCardSize({ width: 400, height: 400 });
      }
    };

    handleResize(); // set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const features = [
    {
      icon: Users,
      title: "Student-Operated",
      desc: "We understand your needs",
    },
    { icon: Clock, title: "24/7 Available", desc: "Round the clock service" },
    { icon: Zap, title: "Fast Delivery", desc: "Within campus in minutes" },
    { icon: Shield, title: "Secure Handling", desc: "Your privacy matters" },
  ];
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-screen overflow-hidden mt-16">
        <div className="relative h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white">
                  <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                      24/7 Printing from Your
                      <br />
                      <RotatingText
                        texts={["Campus", "BIT", "BIT-WARDHA", "Bajaj"]}
                        mainClassName="w-fit max-w-max mx-auto mt-4 px-2 sm:px-2 md:px-3 bg-red-400 text-red-700 overflow-hidden py-0.5 sm:py-1 md:py-2 flex justify-center items-center rounded-lg"

                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{
                          type: "spring",
                          damping: 30,
                          stiffness: 400,
                        }}
                        rotationInterval={3000}
                      />
                      {/* <span className="text-gray-300">Hostel Room at BIT</span> */}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">
                      {image.subtitle} – Delivered Fast, From BITians to BITians
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2">
                        <Upload className="h-5 w-5" />
                        <span>Order Now</span>
                      </button>
                      <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center space-x-2">
                        <FileText className="h-5 w-5" />
                        <span>View Services</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Why We Started{" "}
                  <span className="text-red-500 relative">
                    BIT PrintHub
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We observed that many students at Bajaj Institute of
                    Technology, Wardha waste valuable time running outside
                    campus just to print assignments or documents. BIT PrintHub
                    is a{" "}
                    <span className="font-semibold text-red-600">
                      24/7 hostel-based student startup
                    </span>{" "}
                    that makes printing fast, easy, and reliable.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-base text-gray-600 italic">
                    From practicals to photos – we print it all. You stay
                    focused on your work, we handle the rest.
                  </p>
                </div>
              </div>

              {/* Stats or Features */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    Fast
                  </div>
                  <div className="text-sm text-gray-600">Delivery</div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-red-200 to-red-300 rounded-3xl opacity-20"></div>

                {/* Main image container */}
                <div className="relative bg-red-400 rounded-3xl p-8 shadow-2xl border border-blue-100">
                  <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={cardSize}
                    cardsData={images}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-white">
              Complete printing solutions for every student need
            </p>
          </div>

          <div className="relative bg-black lg:h-[800px]">
            <ChromaGrid
              items={chromaItems}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </section>
<section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-pink-100 px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4 text-pink-600 mr-2" />
              <span className="text-pink-800 font-medium">Perfect for Couples</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Turn Your Photos Into 
              <span className="text-pink-600"> Keepsake Memories</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Create personalized Polaroid-style prints that slide perfectly into transparent phone cases. 
              Give your partner a gift they'll carry everywhere – literally close to their heart.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-pink-100 rounded-full p-1 mt-1">
                  <Smartphone className="h-4 w-4 text-pink-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Phone Case Ready</span>
                  <p className="text-gray-600 text-sm">Perfect size to slide into transparent phone cases</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-pink-100 rounded-full p-1 mt-1">
                  <Camera className="h-4 w-4 text-pink-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Polaroid Style Prints</span>
                  <p className="text-gray-600 text-sm">Classic white border with space for cute messages</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-pink-100 rounded-full p-1 mt-1">
                  <CheckCircle className="h-4 w-4 text-pink-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Same Day Delivery</span>
                  <p className="text-gray-600 text-sm">Printed and delivered within campus in 1-3 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-pink-100 rounded-full p-1 mt-1">
                  <Heart className="h-4 w-4 text-pink-600" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Add Personal Touch</span>
                  <p className="text-gray-600 text-sm">Include sweet messages, dates, or inside jokes</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
                <Gift className="h-5 w-5" />
                <span>Create Photo Gift</span>
              </button>
              
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600">Starting at just</p>
                <p className="text-2xl font-bold text-gray-900">₹15 <span className="text-sm font-normal">per print</span></p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Main phone case image mockup */}
            <div className="relative mx-auto w-64 h-80 bg-gradient-to-br from-gray-800 to-black rounded-3xl p-2 shadow-2xl">
              {/* Phone screen */}
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-teal-700 rounded-2xl relative overflow-hidden">
                {/* Polaroid photo overlay */}
                <div className="absolute inset-4 bg-white rounded-lg shadow-lg p-2 transform rotate-2">
                  <div className="w-full h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded mb-2 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                      alt="Couple photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <Heart className="h-4 w-4 text-pink-500 mx-auto" />
                  </div>
                </div>
                
                {/* Phone UI elements */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full"></div>
                <div className="absolute top-2 right-4 w-6 h-3 bg-white/20 rounded-sm"></div>
              </div>
              
              {/* Phone case transparency effect */}
              <div className="absolute inset-0 bg-white/10 rounded-3xl pointer-events-none"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-pink-100 rounded-full p-3 shadow-lg animate-bounce">
              <Heart className="h-6 w-6 text-pink-600" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-purple-100 rounded-full p-3 shadow-lg animate-pulse">
              <Camera className="h-6 w-6 text-purple-600" />
            </div>
            
            {/* Sample prints around the phone */}
            <div className="absolute top-8 -left-8 bg-white rounded-lg shadow-lg p-2 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="w-16 h-12 bg-gradient-to-br from-yellow-200 to-orange-200 rounded mb-1"></div>
              <div className="text-center">
                <Heart className="h-2 w-2 text-red-400 mx-auto" />
              </div>
            </div>
            
            <div className="absolute bottom-12 -right-8 bg-white rounded-lg shadow-lg p-2 transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="w-16 h-12 bg-gradient-to-br from-green-200 to-blue-200 rounded mb-1"></div>
              <div className="text-center">
                <Heart className="h-2 w-2 text-red-400 mx-auto" />
              </div>
            </div>
          </div>
        </div>
        
        {/* How it works section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Upload Your Photos</h4>
              <p className="text-gray-600 text-sm">Send us 1-6 of your favorite couple photos via WhatsApp</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">We Print & Prepare</h4>
              <p className="text-gray-600 text-sm">High-quality Polaroid-style prints ready for phone cases</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Campus Delivery</h4>
              <p className="text-gray-600 text-sm">Delivered to your hostel within 1-3 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why BITians Trust Us
            </h2>
            <p className="text-lg text-gray-600">
              Experience the difference of student-to-student service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from happy BITians
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-black fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-black text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Affordable Student Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Transparent pricing with no hidden costs
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">
                      Service
                    </th>
                    <th className="px-6 py-4 text-right text-lg font-semibold">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-black font-medium">
                      B/W Print (A4)
                    </td>
                    <td className="px-6 py-4 text-right text-black font-bold text-lg">
                      ₹2 / page
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-black font-medium">
                      Color Print (A4)
                    </td>
                    <td className="px-6 py-4 text-right text-black font-bold text-lg">
                      ₹10 / page
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-black font-medium">
                      Photo Polaroid (1 pic)
                    </td>
                    <td className="px-6 py-4 text-right text-black font-bold text-lg">
                      ₹20
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-black font-medium">
                      Spiral Binding
                    </td>
                    <td className="px-6 py-4 text-right text-black font-bold text-lg">
                      ₹40
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-black font-medium">
                      Gift Card with Image
                    </td>
                    <td className="px-6 py-4 text-right text-black font-bold text-lg">
                      ₹35
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-4 text-center">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                View Full Pricing →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of BITians who trust us with their printing needs.
            Quick, reliable, and always available when you need us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2">
              <Upload className="h-5 w-5" />
              <span>Start Your Order</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-200 flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
