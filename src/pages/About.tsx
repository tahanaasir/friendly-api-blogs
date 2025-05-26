
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About BlogSpace
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating a platform where ideas flourish, stories inspire, 
            and knowledge is shared freely among a community of curious minds.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At BlogSpace, we believe that every story matters and every voice deserves to be heard. 
                Our mission is to provide a platform where writers, thinkers, and creators can share 
                their insights, experiences, and expertise with the world.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to fostering a community that values quality content, diverse perspectives, 
                and meaningful conversations that inspire positive change.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-sm text-gray-600">Building connections between readers and writers</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Purpose</h3>
                <p className="text-sm text-gray-600">Sharing knowledge that makes a difference</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Passion</h3>
                <p className="text-sm text-gray-600">Celebrating creativity and authentic expression</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-sm text-gray-600">Maintaining high standards in every article</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The passionate individuals behind BlogSpace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Editor-in-Chief",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b8af?w=300&h=300&fit=crop&crop=face",
                bio: "Passionate about technology and storytelling, Sarah founded BlogSpace to create a platform for meaningful content."
              },
              {
                name: "Mike Chen",
                role: "Design Lead",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
                bio: "Mike brings beautiful design and user experience to life, ensuring every reader has an amazing journey."
              },
              {
                name: "Emily Rodriguez",
                role: "Community Manager",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
                bio: "Emily fosters our vibrant community and helps writers share their stories with the world."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Writers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
