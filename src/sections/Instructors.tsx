import { Button } from '@/components/ui/button';
import { Star, Video, MessageCircle } from 'lucide-react';

const Instructors = () => {
  const instructors = [
    {
      name: 'Elena Rodriguez',
      languages: 'Spanish & English',
      location: 'Madrid, Spain',
      rating: 4.9,
      reviews: 127,
      students: 450,
      price: '$15/hr',
      image: '/images/instructors/instructor1.jpg',
      online: true,
    },
    {
      name: 'Raj Patel',
      languages: 'Hindi & English',
      location: 'Mumbai, India',
      rating: 4.8,
      reviews: 98,
      students: 320,
      price: '$12/hr',
      image: '/images/instructors/instructor2.jpg',
      online: true,
    },
    {
      name: 'Carlos Mendez',
      languages: 'Portuguese & Spanish',
      location: 'São Paulo, Brazil',
      rating: 4.9,
      reviews: 156,
      students: 510,
      price: '$14/hr',
      image: '/images/instructors/instructor3.jpg',
      online: false,
    },
    {
      name: 'James Wilson',
      languages: 'English (Business)',
      location: 'London, UK',
      rating: 5.0,
      reviews: 203,
      students: 680,
      price: '$18/hr',
      image: '/images/instructors/instructor4.jpg',
      online: true,
    },
    {
      name: 'Amara Okafor',
      languages: 'Swahili & English',
      location: 'Nairobi, Kenya',
      rating: 4.7,
      reviews: 87,
      students: 290,
      price: '$10/hr',
      image: '/images/instructors/instructor5.jpg',
      online: true,
    },
    {
      name: 'Sophie Martin',
      languages: 'French & German',
      location: 'Paris, France',
      rating: 4.9,
      reviews: 142,
      students: 420,
      price: '$16/hr',
      image: '/images/instructors/instructor6.jpg',
      online: false,
    },
  ];

  return (
    <section id="instructors" className="py-16 lg:py-24 bg-lime-light/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-lime">Instructors</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from verified native speakers with proven teaching experience and passion for languages
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image Header */}
              <div className="relative h-48 bg-gradient-to-br from-lime/20 to-lime/5">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                {instructor.online && (
                  <div className="absolute bottom-4 right-1/3 transform translate-x-8">
                    <span className="flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-lime"></span>
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6 pt-16 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-lime font-medium mb-2">{instructor.languages}</p>
                <p className="text-gray-500 text-sm mb-4">{instructor.location}</p>
                
                {/* Stats */}
                <div className="flex justify-center items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{instructor.rating}</span>
                    <span className="text-gray-500">({instructor.reviews})</span>
                  </div>
                  <div className="text-gray-300">|</div>
                  <div className="text-gray-600">
                    {instructor.students} students
                  </div>
                </div>
                
                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-left">
                    <p className="text-2xl font-bold text-lime">{instructor.price}</p>
                    <p className="text-xs text-gray-500">per hour</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-full border-lime text-lime hover:bg-lime hover:text-white">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="rounded-full bg-lime hover:bg-lime-dark text-white">
                      <Video className="w-4 h-4 mr-1" />
                      Book
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full px-8 border-2 border-lime text-lime hover:bg-lime hover:text-white">
            View All Instructors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
