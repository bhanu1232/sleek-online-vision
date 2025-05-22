import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, Heart, ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import ScrollAnimation from "@/components/ScrollAnimation";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Main headline */}
          <ScrollAnimation direction="left" className="col-span-1 md:col-span-2 p-8 md:p-12 bg-gray-50/50 rounded-2xl">
            <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">About Us</span>
            <h1 className="text-4xl md:text-5xl font-normal mt-4 mb-6 leading-tight text-gray-800">Understanding your business goals and crafting digital solutions</h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">At Sleek Vision, we take pride in understanding your business goals and crafting a digital solution that matches your brand, speaks to your audience, and drives real results.</p>
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 h-auto group">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </ScrollAnimation>

          {/* Blue box with quote */}
          <ScrollAnimation direction="down" delay={0.2} className="col-span-1 bg-blue-600/90 text-white rounded-2xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden grid-pattern">
            <div className="flex space-x-3 items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="flex-1"></div>
            </div>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              "We believe in delivering excellence through innovation, collaboration, and a deep understanding of our clients' needs."
            </p>
            <h4 className="font-normal text-xl">Our Vision</h4>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation direction="left">
            <div>
              <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">Empowering businesses through digital innovation</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">We are dedicated to helping businesses thrive in the digital age by providing innovative solutions that drive growth and success. Our mission is to deliver exceptional digital experiences that make a real impact.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Clock className="h-5 w-5 text-blue-600" />,
                    title: "Fast Turnaround",
                    description: "Quick delivery without compromising quality",
                    color: "bg-blue-50"
                  },
                  {
                    icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
                    title: "Quality First",
                    description: "Excellence in every project we undertake",
                    color: "bg-purple-50"
                  }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className={`h-12 w-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-normal text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-600 z-0 rounded-2xl"></div>
              <div className="relative z-10 h-full">
                <img
                  src="/images/about/mission.webp"
                  alt="Our Mission"
                  className="h-full w-full object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50/50 py-16 md:py-28">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">The principles that guide everything we do</h2>
              <p className="text-gray-600 text-lg leading-relaxed">Our core values shape our approach to every project and interaction.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-normal mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left">
            <div>
              <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">Meet the talented people behind our success</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">Our diverse team of experts brings together a wealth of experience and creativity to deliver exceptional results for our clients.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <TrendingUp className="h-5 w-5 text-blue-600" />,
                    title: "Expert Team",
                    description: "Skilled professionals with years of experience",
                    color: "bg-green-50"
                  },
                  {
                    icon: <Users className="h-5 w-5 text-blue-600" />,
                    title: "Collaborative",
                    description: "Working together to achieve your goals",
                    color: "bg-orange-50"
                  }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className={`h-12 w-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-normal text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={`/images/team/${member.image}`}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-normal mb-2">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50/50 py-16 md:py-28">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation direction="left">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-normal mb-6 leading-tight text-gray-800">
                  Ready to work together?
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">Let's create something amazing together. Get in touch with us today to discuss your project.</p>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 h-auto group">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative h-64 md:h-[400px]">
                <img
                  src="/images/about/cta.webp"
                  alt="Team Collaboration"
                  className="h-full w-full object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    icon: <Target className="h-6 w-6 text-blue-600" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering the highest quality solutions."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and close collaboration with our clients."
  },
  {
    icon: <Award className="h-6 w-6 text-blue-600" />,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to stay ahead."
  },
  {
    icon: <Heart className="h-6 w-6 text-blue-600" />,
    title: "Passion",
    description: "We're passionate about creating digital solutions that make a difference."
  }
];

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    description: "With over 15 years of experience in digital technology, John leads our team with vision and expertise.",
    image: "john-doe.webp"
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    description: "Jane brings creativity and innovation to every project, ensuring exceptional design outcomes.",
    image: "jane-smith.webp"
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    description: "Mike's technical expertise and problem-solving skills drive our development excellence.",
    image: "mike-johnson.webp"
  },
  {
    name: "Sarah Wilson",
    role: "UX Designer",
    description: "Sarah creates intuitive and engaging user experiences that delight our clients and their users.",
    image: "sarah-wilson.webp"
  }
];

export default About;
