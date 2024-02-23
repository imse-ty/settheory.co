/** @jsxImportSource theme-ui */

import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Box, Container, Button } from 'krado-react';
import ProjectCard from './project-card';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MdNorthEast } from 'react-icons/md';

function ProjectsSection() {
  return (
    <Container
      sx={{
        display: 'grid',
        marginTop: 5,
        gap: [3, 4],
        gridTemplateColumns: ['1fr', null, '1fr 1fr']
      }}
    >
      <ProjectCard
        color='taweret'
        title='Beloved Benefit'
        subtitle='Helping bring Beloved Benefit to life, an annual charity fundraiser event in Atlanta founded by The Same House.'
        href='https://imsety.com/work/beloved-benefit-2023'
        src='/work/beloved-benefit.jpg'
      />
      <ProjectCard
        color='taweret'
        title='Chick-fil-A'
        subtitle="Innovating at Chick-fil-A's annual meetings NEXT and Spark 2023"
        href='https://imsety.com/work/chick-fil-a'
        src='/work/chick-fil-a.png'
      />
      <ProjectCard
        color='taweret'
        title='Keller Williams'
        subtitle="Transformed Keller Williams' events with engaging 3D motion design and story-driven openers in collaboration with Ravie."
        href='https://imsety.com/work/keller-williams'
        src='/work/keller-williams.png'
      />
      <ProjectCard
        color='taweret'
        title='Fearless Fund'
        subtitle="Animating infographics for the Fearless Fund's annual event, a venture capital firm empowering women of color-led businesses."
        href='https://imsety.com/work/fearless-fund'
        src='/work/beloved-benefit.jpg'
      />
    </Container>
  );
}

export default function WorkSection({ onViewportEnter, onViewportLeave }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <section ref={container}>
      <Box id='work' sx={{ backgroundColor: 'surface.thin' }}>
        <motion.div
          style={{ scale }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: 'background',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            boxShadow: 'soft.highNorth'
          }}
        >
          <motion.div
            onViewportLeave={onViewportLeave}
            sx={{
              top: 0,
              position: 'absolute',
              backgroundColor: 'red',
              height: '700vh'
            }}
          />
          <Container sx={{ textAlign: 'center' }}>
            <Heading
              as={motion.h2}
              sx={{ marginBottom: 2 }}
              onViewportEnter={onViewportEnter}
            >
              Selected work
            </Heading>

            <Text as='p'>
              Whether it&apos;s a vibrant website or a minimal mobile app you
              seek. We deliver exceptional quality for all.
            </Text>
          </Container>
          <ProjectsSection />
          <a
            href='https://imsety.com/#work'
            target='_blank'
            rel='noindex nofollow'
            sx={{ textDecoration: 'none' }}
          >
            <Button leftIcon={<MdNorthEast />} sx={{ marginTop: 5 }}>
              View more work
            </Button>
          </a>
        </motion.div>
      </Box>
    </section>
  );
}
