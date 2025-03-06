import React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialImages = [
  "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80",
];

function Testimonial() {
  return (
    <div className="min-h-screen bg-[#3949AB] text-white py-8 md:py-16 mt-12 md:mt-20">
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        @media (min-width: 768px) {
          .custom-scroll::-webkit-scrollbar {
            width: 8px;
          }
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #3949AB;
          border-radius: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.8);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Don't just take our word for it
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Hear from our clients
          </h2>
          <p className="text-sm md:text-lg text-gray-200 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a, sed
            lobortis nisi.
          </p>
        </div>

        {/* Testimonial Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8 max-w-6xl mx-auto relative">
          {/* Decoration Dots - Hidden on mobile */}
          <div className="max-lg:hidden">
  <div className="hidden md:absolute md:-left-8 -top-8 md:grid grid-cols-7 gap-3 lg:gap-4">
    {[...Array(7)].map((_, i) => (
      <div
        key={`dot-top-${i}`}
        className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"
      />
    ))}
  </div>
  <div className="hidden md:absolute md:-left-8 top-0 md:grid grid-rows-12 gap-3 lg:gap-4">
    {[...Array(12)].map((_, i) => (
      <div
        key={`dot-left-${i}`}
        className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"
      />
    ))}
  </div>
  <div className="hidden md:absolute md:-right-8 bottom-0 md:grid grid-rows-12 gap-3 lg:gap-4">
    {[...Array(12)].map((_, i) => (
      <div
        key={`dot-right-${i}`}
        className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"
      />
    ))}
  </div>
  <div className="hidden md:absolute md:-right-8 -bottom-8 md:grid grid-cols-7 gap-3 lg:gap-4">
    {[...Array(7)].map((_, i) => (
      <div
        key={`dot-bottom-${i}`}
        className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"
      />
    ))}
  </div>
</div>
          {/* Navigation Buttons */}
          <button className="hidden md:absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button className="hidden md:absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Image Carousel */}
          <div className="w-full md:w-[45%] lg:w-[40%] h-[40vh] sm:h-[50vh] md:h-[60vh] bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
            <div className="h-full overflow-y-auto custom-scroll">
              <div className="space-y-0">
                {testimonialImages.map((image, index) => (
                  <div key={index} className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] p-3 md:p-4">
                    <img
                      src={image}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="w-full md:w-[50%] lg:w-[45%] h-auto min-h-[400px] md:h-[60vh] bg-[#626fb1] backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col shadow-lg md:shadow-xl">
            <Quote className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-white/80" />
            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a,
              sed lobortis nisi. Nulla scelerisque tellus interdum venenatis
              auctor et nibh.
            </p>

            <div className="mt-auto flex items-center gap-3 md:gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
                alt="Profile"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm md:text-base truncate">John Smith</h3>
                <p className="text-xs md:text-sm text-gray-200 truncate">Manager, XYZ company</p>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Company Logo"
                className="ml-2 h-6 md:h-8 invert opacity-90 flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;