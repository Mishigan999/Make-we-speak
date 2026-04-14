import { Search, UserCheck, Calendar, Video } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Browse Instructors',
      description: 'Explore profiles of verified native speakers. Filter by language, availability, and teaching style.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Choose Your Tutor',
      description: 'View detailed profiles with ratings, reviews, and video introductions to find your perfect match.',
      icon: UserCheck,
    },
    {
      number: '03',
      title: 'Book a Lesson',
      description: 'Select a convenient time slot and book instantly. Receive confirmation and calendar invite.',
      icon: Calendar,
    },
    {
      number: '04',
      title: 'Start Learning',
      description: 'Join your live video lesson with one click. Learn, practice, and improve with real conversation.',
      icon: Video,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-lime-light/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-lime">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started is easy. Four simple steps to begin your language learning journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-2 w-12 h-12 bg-lime rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-lime/10 rounded-2xl flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-lime" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-lime/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
