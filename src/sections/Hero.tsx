import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, Globe, Video } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-56 pb-16 lg:pt-60 lg:pb-24 bg-gradient-to-br from-white via-lime-light/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Learn Languages{' '}
              <span className="text-lime">Face-to-Face</span>{' '}
              with Native Speakers
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Connect with verified native language instructors from around the world.
              Experience personalized, live video lessons that make learning a new language
              natural, engaging, and affordable.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-lime hover:bg-lime-dark text-white rounded-full px-8 py-6 text-lg">
                Start Learning Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 border-lime text-lime hover:bg-lime hover:text-white">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-lime/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-lime" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-600">Active Learners</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-lime/10 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-lime" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">Languages</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-lime/10 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-lime" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Live Instructors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/main-hero.png"
                alt="Lingua Link Live Platform"
                className="w-full h-auto"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🇪🇸</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Spanish Lesson</p>
                <p className="text-sm text-lime">Live Now</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="/images/instructors/instructor1.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="/images/instructors/instructor2.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="/images/instructors/instructor3.jpg" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <span className="text-sm text-gray-600">+500 online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
