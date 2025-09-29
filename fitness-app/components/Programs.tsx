import React from 'react';
import * as motion from 'motion/react-client';
import { programs } from '@/lib/constants';
import { Card } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { CardContent } from './ui/card';

function Programs() {
  return (
    <section className="py-20 bg-foreground/4">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Programs Heading Text */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Choose from our comprehensive fitness programs designed to meet your
            specific goals and fitness level
          </motion.p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.02 }}
              key={program.title}
              className="group cursor-pointer"
            >
              <Card className="p-0 transition-shadow duration-300 hover:shadow-2xl">
                <div className="relative overflow-hidden rounded-t-lg w-full h-60 md:h-56 lg:h-40">
                  <Image
                    src={program.image}
                    fill
                    alt={program.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <CardContent className="p-6 pt-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: index * 0.2,
                    }}
                    className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors"
                  >
                    {program.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: index * 0.3,
                    }}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {program.description}
                  </motion.p>

                  <div>
                    <Button
                      variant="outline"
                      className="w-full cursor-pointer transition-colors dark:group-hover:bg-primary
                      duration-300 group-hover:!bg-primary group-hover:!text-primary-foreground hover:!bg-primary hover:!text-primary-foreground"
                    >
                      Learn more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
