import { Button } from '@/components/ui/button';
import { Check, Heart, Brain, Ear, Eye, Accessibility } from 'lucide-react';

const SpecialEducation = () => {
  const supports = [
    {
      title: 'ADHD',
      description: 'Structured lessons with engaging activities and regular breaks',
      icon: Brain,
    },
    {
      title: 'Autism',
      description: 'Visual supports, predictable routines, and sensory-friendly sessions',
      icon: Heart,
    },
    {
      title: 'Dyslexia',
      description: 'Multi-sensory teaching methods and reading support tools',
      icon: Eye,
    },
    {
      title: 'Hearing Impairment',
      description: 'Visual cues, captions, and sign language integration',
      icon: Ear,
    },
    {
      title: 'Physical Disabilities',
      description: 'Adaptive technology and flexible scheduling options',
      icon: Accessibility,
    },
    {
      title: 'Speech & Language',
      description: 'Specialized techniques for communication development',
      icon: Brain,
    },
  ];

  const features = [
    'Individualized Learning Plans',
    'Trained Special Ed Teachers',
    'Flexible Pacing',
    'Multi-sensory Approaches',
    'Regular Progress Assessments',
    'Parent Collaboration',
  ];

  return (
    <section id="special-ed" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/service-special.jpg" 
                alt="Special Education Support"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-lime text-white rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">100%</p>
              <p className="text-sm opacity-90">Inclusive Learning</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 text-lime rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Special Education Support
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learning for <span className="text-lime">Everyone</span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              We believe every learner deserves quality language education. Our specialized 
              programs are designed to support students with diverse learning needs, ensuring 
              an inclusive and nurturing environment for all.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-lime/10 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-lime" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Support Types Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {supports.map((support, index) => (
                <div key={index} className="bg-lime-light/30 rounded-xl p-4 text-center hover:bg-lime-light/50 transition-colors">
                  <support.icon className="w-6 h-6 text-lime mx-auto mb-2" />
                  <p className="font-medium text-gray-900 text-sm">{support.title}</p>
                </div>
              ))}
            </div>

            <Button className="bg-lime hover:bg-lime-dark text-white rounded-full px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialEducation;
