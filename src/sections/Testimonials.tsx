import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'Lisbon, Portugal',
      image: '/images/instructors/instructor1.jpg',
      rating: 5,
      text: 'I have tried many language apps, but nothing compares to speaking with a real native speaker. My Spanish improved dramatically in just 3 months. The instructors are patient, professional, and make learning enjoyable!',
      language: 'Learning Spanish',
    },
    {
      name: 'David Chen',
      location: 'Toronto, Canada',
      image: '/images/instructors/instructor2.jpg',
      rating: 5,
      text: 'As a business professional, I needed to learn Mandarin quickly. Lingua Link Live connected me with an amazing tutor who tailored lessons to my industry. Highly recommend for anyone needing practical language skills!',
      language: 'Learning Mandarin',
    },
    {
      name: 'Sarah Johnson',
      location: 'Sydney, Australia',
      image: '/images/instructors/instructor5.jpg',
      rating: 5,
      text: 'My son has ADHD and struggled with traditional language classes. The special education support here has been incredible. His French tutor understands his needs and he actually looks forward to lessons now!',
      language: 'Learning French',
    },
    {
      name: 'Ahmed Hassan',
      location: 'Dubai, UAE',
      image: '/images/instructors/instructor3.jpg',
      rating: 5,
      text: 'The flexibility of booking lessons around my schedule is amazing. I have learned English and am now learning German. The platform is easy to use and the instructors are top-notch professionals.',
      language: 'Learning German',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-lime-light/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-lime">Learners</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from real learners who transformed their language skills
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-lime/20" />
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left - Profile */}
              <div className="text-center lg:text-left">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 mb-4 border-4 border-lime/20"
                />
                <h3 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-lime/10 text-lime rounded-full text-sm">
                  {testimonials[currentIndex].language}
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-2">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-gray-100">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-lime text-lime hover:bg-lime hover:text-white"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-lime' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-lime text-lime hover:bg-lime hover:text-white"
                onClick={nextTestimonial}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
