import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Award, Users, Shield, Phone } from 'lucide-react';
import { Button } from '../components/MovingBorderButton';
import { TestimonialsColumn } from '../components/TestimonialsColumn';

const Reviews: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const featuredReviews = [
    {
      text: "HSC Builders completely transformed our garden from a muddy mess into a stunning outdoor paradise. Their team was professional, punctual, and went above and beyond our expectations. The attention to detail in the landscape design and the quality of materials used was exceptional. We've had countless compliments from neighbors and friends. Worth every penny!",
      name: "Sarah Mitchell",
      location: "Glasgow, Scotland",
      service: "Complete Garden Transformation",
      rating: 5
    },
    {
      text: "After getting quotes from several companies, HSC Builders stood out for their professionalism and fair pricing. The patio and hardscaping work they did has completely changed how we use our outdoor space. The project was completed on time, within budget, and the cleanup was immaculate. We're already planning our next project with them!",
      name: "James Robertson",
      location: "Edinburgh, Scotland", 
      service: "Patio & Hardscaping",
      rating: 5
    },
    {
      text: "We struggled with our lawn for years before finding HSC Builders. Their weekly maintenance service has brought our grass back to life, and their seasonal treatments have eliminated the moss and weed problems we had. The team is reliable, knowledgeable, and always leaves our property looking pristine. Highly recommend their lawn care expertise!",
      name: "Emma Thompson",
      location: "Stirling, Scotland",
      service: "Lawn Care & Maintenance",
      rating: 5
    }
  ];

  const reviewFAQs = [
    {
      question: "Are all reviews verified and genuine?",
      answer: "Yes, all our reviews are from verified customers who have used our services. We collect reviews through Google My Business and direct customer feedback after project completion. We never use fake reviews and are proud of our authentic customer testimonials."
    },
    {
      question: "How do you maintain such high ratings?",
      answer: "Our high ratings come from our commitment to quality workmanship, clear communication, and exceeding customer expectations. We provide detailed quotes, stick to timelines, use quality materials, and ensure complete customer satisfaction before considering any job finished."
    },
    {
      question: "Can I leave a review after my project is completed?",
      answer: "Absolutely! We encourage all customers to share their experience. After project completion, we'll send you links to leave reviews on Google, and you can also contact us directly with feedback. Your honest reviews help other customers and help us continue improving our services."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "Customer satisfaction is our top priority. If you're not completely satisfied, we'll work with you to address any concerns at no additional cost. We offer warranties on our workmanship and stand behind the quality of our services. Our goal is always 100% customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/areas-hero-HSC.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Customer Reviews
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              What our clients say about us
            </p>
          </div>
        </div>
      </section>

      {/* We Value Your Feedback Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            We Value Your Feedback
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            At HSC Builders, every review matters. Your feedback helps us improve, maintain our high standards, and continue delivering exceptional landscaping and building services. Whether it's praise or suggestions, we listen and adapt — because your satisfaction is at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* Average Rating Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary-bg border border-border-color rounded-xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-primary-accent rounded-full"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-primary-accent rounded-full"></div>
              <div className="absolute bottom-6 left-8 w-6 h-6 border border-primary-accent rotate-45"></div>
              <div className="absolute bottom-4 right-4 w-5 h-5 bg-primary-accent/50 rounded-full"></div>
            </div>
            
            {/* Google Reviews Badge */}
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-lg px-6 py-3 flex items-center space-x-3 shadow-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-800">Google Reviews</div>
                  <div className="text-xs text-gray-600">Verified Customer Feedback</div>
                </div>
              </div>
            </div>
            {/* Large Star Rating */}
            <div className="flex justify-center items-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-14 h-14 fill-primary-accent text-primary-accent mx-1 drop-shadow-lg" />
              ))}
            </div>
            
            {/* Rating Score */}
            <div className="mb-8">
              <span className="text-7xl font-heading font-bold text-primary-accent drop-shadow-lg">5.0</span>
              <span className="text-4xl text-text-secondary ml-2">/5</span>
              <div className="mt-2">
                <span className="inline-block bg-primary-accent/20 text-primary-accent px-4 py-2 rounded-full text-sm font-semibold">
                  Excellent Rating
                </span>
              </div>
            </div>
            
            {/* Number of Reviews */}
            <p className="text-2xl text-text-secondary mb-10">
              Based on <strong className="text-text-primary text-primary-accent">22 verified Google reviews</strong>
            </p>
            
            {/* Review Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary-bg/50 rounded-lg p-4 border border-primary-accent/20">
                <div className="text-2xl font-bold text-primary-accent mb-1">100%</div>
                <div className="text-sm text-text-secondary">Recommend Us</div>
              </div>
              <div className="bg-secondary-bg/50 rounded-lg p-4 border border-primary-accent/20">
                <div className="text-2xl font-bold text-primary-accent mb-1">5★</div>
                <div className="text-sm text-text-secondary">Average Rating</div>
              </div>
              <div className="bg-secondary-bg/50 rounded-lg p-4 border border-primary-accent/20">
                <div className="text-2xl font-bold text-primary-accent mb-1">16+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
            </div>
            
            {/* Google Reviews Link */}
            <div className="mb-8">
              <a 
                href="https://g.page/r/CTnliC05lZIAEBM/review"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>View All Google Reviews</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-primary-accent/20 rounded-full p-2">
                  <Award className="w-6 h-6 text-primary-accent" />
                </div>
                <span className="text-text-secondary font-medium">Google Verified</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-primary-accent/20 rounded-full p-2">
                  <Users className="w-6 h-6 text-primary-accent" />
                </div>
                <span className="text-text-secondary font-medium">Real Customers</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-primary-accent/20 rounded-full p-2">
                  <Shield className="w-6 h-6 text-primary-accent" />
                </div>
                <span className="text-text-secondary font-medium">Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Testimonials with TestimonialsColumn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real feedback from satisfied customers across Greater Glasgow and surrounding areas.
            </p>
          </div>

          {/* Testimonials Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-hidden">
            <TestimonialsColumn
              testimonials={[
                {
                  text: "HSC Builders transformed our backyard into an absolute paradise. Their attention to detail and professionalism exceeded all expectations.",
                  name: "Sarah Mitchell",
                  role: "Glasgow, Scotland"
                },
                {
                  text: "Outstanding work on our new patio and walkways. The quality of materials and craftsmanship is exceptional.",
                  name: "James Robertson",
                  role: "Edinburgh, Scotland"
                },
                {
                  text: "After struggling with our lawn for years, HSC Builders brought it back to life. Highly recommend their expertise.",
                  name: "Emma Thompson",
                  role: "Stirling, Scotland"
                }
              ]}
              duration={15}
            />
            <TestimonialsColumn
              testimonials={[
                {
                  text: "The design process was collaborative and creative. They listened to our vision and enhanced it with their professional expertise.",
                  name: "David Wilson",
                  role: "Paisley, Scotland"
                },
                {
                  text: "Smart irrigation system installation was flawless. Our water bills have decreased while our garden looks healthier than ever.",
                  name: "Lisa Campbell",
                  role: "Hamilton, Scotland"
                },
                {
                  text: "Professional tree removal and pruning service. They worked safely around our property and left everything spotless.",
                  name: "Michael Brown",
                  role: "Ayr, Scotland"
                }
              ]}
              duration={12}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={[
                {
                  text: "Completely transformed our overgrown garden into a beautiful, manageable space. Excellent value for money.",
                  name: "Jennifer Clark",
                  role: "Motherwell, Scotland"
                },
                {
                  text: "New block paving driveway looks fantastic and has greatly improved our home's curb appeal. Very pleased with the results.",
                  name: "Robert Taylor",
                  role: "Coatbridge, Scotland"
                },
                {
                  text: "The team's knowledge of plants suitable for Scottish weather was impressive. Professional installation and finished ahead of schedule.",
                  name: "Mark Anderson",
                  role: "Lanark, Scotland"
                }
              ]}
              duration={18}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Recent Projects from Happy Customers
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              See the quality work that earned us these amazing reviews. These projects showcase the craftsmanship and attention to detail our customers love.
            </p>
          </div>

          {/* Scrolling images container */}
          <div className="relative w-full flex items-center justify-center py-8">
            <div 
              className="w-full max-w-6xl overflow-hidden"
              style={{
                mask: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMask: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)'
              }}
            >
              <div 
                className="flex gap-6 w-max"
                style={{
                  animation: 'scroll-right 20s linear infinite'
                }}
              >
                {[
                  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  // Duplicate for seamless loop
                  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ].map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 hover:brightness-110"
                  >
                    <img
                      src={image}
                      alt={`Recent project ${(index % 8) + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-bg to-transparent pointer-events-none" />
        </div>
      </section>

      {/* FAQ About Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Questions About Our Reviews
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our customer feedback and review process.
            </p>
          </div>

          <div className="space-y-4">
            {reviewFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-secondary-bg rounded-xl border border-border-color overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary-bg/50 transition-colors duration-200 focus:outline-none focus:bg-primary-bg/50"
                >
                  <h3 className="text-lg font-heading font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <ChevronDown 
                      className={`w-5 h-5 text-primary-accent transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-border-color pt-4">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Call-to-Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join our satisfied customers and transform your outdoor space with professional landscaping services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="#/contact"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                Get a Free Quote
              </Button>
              <Button
                as="a"
                href="tel:07490738974"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  Call Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border-color">
              <p className="text-text-secondary text-sm">
                <strong className="text-primary-accent">Phone:</strong> 07490 738 974 | 
                <strong className="text-primary-accent"> Email:</strong> hscbuildersglasgow@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;