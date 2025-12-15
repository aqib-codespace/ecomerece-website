import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content:
      "LUXE has completely transformed my shopping experience. The quality of products and attention to detail is unmatched. I've been a loyal customer for over 2 years now.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content:
      "The electronics collection is phenomenal. Fast shipping, excellent customer service, and products that exceed expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Interior Designer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content:
      "As someone who values aesthetics, I appreciate how LUXE curates their products. Every purchase feels premium and elevates my home decor.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-blue-lightest/10 to-background">
      <div className="w-full md:w-[90%] max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-primary font-bold text-sm uppercase tracking-wider"
          >
            Customer Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-3"
          >
            What Our <span className="gradient-text">Customers</span> Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 relative group cursor-pointer hover:border-blue-primary/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-primary/20 group-hover:text-orange-primary/40 transition-colors duration-300" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-primary text-orange-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground-secondary mb-8 leading-relaxed text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-primary/20 group-hover:border-blue-primary group-hover:scale-110 transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold text-lg group-hover:text-blue-primary transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-foreground-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
