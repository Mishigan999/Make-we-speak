import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Languages = () => {
  const languages = [
    { name: 'English', flag: '🇬🇧', learners: '5,000+' },
    { name: 'Spanish', flag: '🇪🇸', learners: '3,200+' },
    { name: 'French', flag: '🇫🇷', learners: '2,800+' },
    { name: 'German', flag: '🇩🇪', learners: '1,900+' },
    { name: 'Turkish', flag: '🇹🇷', learners: '1,500+' },
    { name: 'Arabic', flag: '🇸🇦', learners: '2,100+' },
    { name: 'Russian', flag: '🇷🇺', learners: '1,800+' },
    { name: 'Chinese', flag: '🇨🇳', learners: '2,500+' },
    { name: 'Japanese', flag: '🇯🇵', learners: '1,600+' },
    { name: 'Korean', flag: '🇰🇷', learners: '1,200+' },
    { name: 'Swahili', flag: '🇰🇪', learners: '800+' },
    { name: 'Portuguese', flag: '🇵🇹', learners: '1,400+' },
  ];

  const africanLanguages = [
    { name: 'Swahili', flag: '🇰🇪' },
    { name: 'Yoruba', flag: '🇳🇬' },
    { name: 'Zulu', flag: '🇿🇦' },
    { name: 'Shona', flag: '🇿🇼' },
    { name: 'Amharic', flag: '🇪🇹' },
    { name: 'Hausa', flag: '🇳🇬' },
  ];

  return (
    <section id="languages" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Languages <span className="text-lime">Offered</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from over 50 languages taught by native speakers from around the world
          </p>
        </div>

        {/* Popular Languages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {languages.map((language, index) => (
            <div 
              key={index} 
              className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-lime hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{language.flag}</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-lime transition-colors">
                    {language.name}
                  </h3>
                  <p className="text-sm text-gray-500">{language.learners} learners</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* African Languages Section */}
        <div className="bg-lime-light/30 rounded-2xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                African Languages
              </h3>
              <p className="text-gray-600">
                Celebrating linguistic diversity with native African language instructors
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {africanLanguages.map((lang, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
                >
                  <span>{lang.flag}</span>
                  <span className="font-medium text-gray-900">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-lime hover:bg-lime-dark text-white rounded-full px-8">
            Explore All Languages
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Languages;
