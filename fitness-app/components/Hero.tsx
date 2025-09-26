import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import * as motion from 'motion/react-client';

function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden pt-16 ">
      {/* Background Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={'/fitness-hero.jpeg'}
          alt="fitness hero"
          fill
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tighter"
          >
            Transform Your Body,{' '}
            <span className="text-primary">Tranform Your Life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Join our fitness programs and achieve your goals with expert
            trainers and personalized plans.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size={'lg'}
              className="bg-primary hover:bg-primary/90 text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8"
            >
              Start Free Trial
            </Button>
            <Button
              size={'lg'}
              variant={'outline'}
              className="bg-transparent text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8"
            >
              View Plans
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
