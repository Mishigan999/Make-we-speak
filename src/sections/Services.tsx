import { ArrowRight, Monitor, Home, Palette, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Online Virtual School',
      description: 'Live face-to-face language classes with native speakers in small groups or one-on-one sessions.',
      image: '/images/service-online.jpg',
      icon: Monitor,
      link: '#languages',
    },
    {
      title: 'Home-Based Learning',
      description: 'Personalized tutoring sessions in the comfort of your home with qualified language instructors.',
      image: '/images/service-home.jpg',
      icon: Home,
      link: '#contact',
    },
    {
      title: 'Co-Curricular Activities',
      description: 'Enriching activities including chess, creative arts, coding, and cooking classes.',
      image: '/images/service-cocurricular.jpg',
      icon: Palette,
      link: '#contact',
    },
    {
      title: 'Special Education',
      description: 'Dedicated support for learners with special needs, including ADHD, autism, and dyslexia.',
      image: '/images/service-special.jpg',
      icon: Brain,
      link: '#special-ed',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-lime">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive language learning solutions designed to meet every learner's unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group text-center">
              {/* Circular Image */}
              <div className="relative mx-auto mb-6 w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-lime/20 group-hover:bg-lime/30 transition-colors duration-300"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 w-12 h-12 bg-lime rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-lime transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 px-4">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="inline-flex items-center text-lime font-medium hover:underline"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
