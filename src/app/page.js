import Hero from '@/components/hero.jsx';
import { tech_stack_path, tech_stack } from '../lib/constants';
import { aboutText } from '@/lib/constants';

import BlurFade from '@/components/ui/blur-fade';
import Image from 'next/image';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import { projectsData } from '@/lib/constants';

import ProjectCard from '@/components/project-card';
import FadeIn from '@/components/fade-in';

export default function Home() {
  const images = tech_stack.map((img) => tech_stack_path + img);
  const BLUR_FADE_DELAY = 0.5;

  const projects = projectsData;

  return (
    <main className='mx-auto max-w-[50rem] space-y-8 px-4 md:px-0'>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
        )}
      />

      <BlurFade delay={BLUR_FADE_DELAY}>
        <Hero />
      </BlurFade>

      <section id='about' className='flex flex-row gap-3 md:gap-6'>
        <BlurFade
          delay={BLUR_FADE_DELAY * 2}
          className='flex items-center justify-center'
        >
          <div className='rounded-md text-base md:leading-8'>
            <h2 className='text-xl font-bold tracking-tighter md:text-3xl'>
              About
            </h2>
            <p className='pt-3 text-xs/relaxed text-muted-foreground md:text-lg/relaxed'>
              {aboutText}
            </p>
          </div>
        </BlurFade>
        <BlurFade
          delay={BLUR_FADE_DELAY * 2}
          className='flex items-center justify-center'
        >
          <div
            id='image'
            className='flex items-center justify-center rounded-md bg-gray-200 bg-opacity-50'
          >
            <Image
              className='h-full w-full rounded-md'
              src={'/images/profile-kabir.png'}
              width={1000}
              height={1000}
              alt='Profile Picture'
            />
          </div>
        </BlurFade>
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <Marquee pauseOnHover={true}>
          {images.map((src, index) => (
            <div
              key={index}
              className='flex h-[50px] w-[100px] items-center justify-center overflow-hidden'
            >
              <Image
                src={src}
                alt={`Slider image ${index}`}
                width={300}
                height={200}
                className='object-cover grayscale transition duration-300 ease-in-out hover:grayscale-0'
              />
            </div>
          ))}
        </Marquee>
      </BlurFade>

      <section id='work' className='w-full space-y-8 py-8'>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className='flex flex-col items-center justify-center space-y-8 text-center'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-base text-background'>
                My Projects
              </div>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Check out my latest work
              </h2>
              <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                I&apos;ve worked on a variety of projects, from complex
                fullstack web applications to AI learning algorithms. Here are a
                few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className='mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2'>
          {projects.map((project, id) => (
            <ProjectCard
              key={id}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.tags}
              image={project.image}
            />
          ))}
        </div>
        <div className='mb-4'></div>
      </section>
    </main>
  );
}
{
  /* <BlurFade key={id} delay={BLUR_FADE_DELAY * 5 + id * 0.05}> */
}
{
  /* </BlurFade> */
}
