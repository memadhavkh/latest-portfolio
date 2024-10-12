import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Anurag Aggarwal",
    position: "Founder @ Aerostars",
    text: "Madhav has set a milestone for other colleagues by his diligence and dedication. We found him active and competent in executing all assigned tasks, and his services were excellent. We wish him great success in all his future endeavours!",
    avatar: memojiAvatar1,
  },
  {
    name: "Sunil Kr. Mathur",
    position: "HOD @ MAIT, Delhi",
    text: "Working with Madhav was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar3,
  },
  {
    name: "Kanika Aggarwal",
    position: "Assistant HOD @ MAIT, Delhi",
    text: "Madhav's ability to create seamless user experiences is unmatched. Our event website has seen a significant increase in visits since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar2,
  }
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Happy Clients" title="What Clients Say About Me" description="Don&apos;t just take my word for it. See what my clients have to say about my work." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip mask-image py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                    <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">{testimonial.position}</div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>              
              </Card>
            ))}
              </Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
};
