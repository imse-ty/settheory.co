/** @jsxImportSource theme-ui */
//@ts-nocheck

import Head from 'next/head';
import { Container, Flex, Button } from 'krado-react';
import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Image from 'next/image';
import { MdPlayArrow, MdPodcasts } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <Head>
        <title>Set Theory</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        as="main"
        sx={{
          minHeight: '100vh',
          height: '100%',
          width: '100%',
          flexDirection: 'column'
        }}
      >
        <Flex sx={{ width: '100%' }}>
          <Image
            src="/logo.svg"
            alt="Set Theory Logo"
            sx={{ width: '128px', height: '128px' }}
            width={128}
            height={128}
            priority
          />
        </Flex>
        <Container
          as="main"
          sx={{
            marginY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              textAlign: 'center',
              marginBottom: [4, 5],
              gap: 3
            }}
          >
            <Heading
              as="h1"
              sx={{
                fontSize: ['48px', '100px', '109px', '150px'],
                lineHeight: '1.1',
                fontWeight: 'bold',
                fontStretch: '125%',
                letterSpacing: '0'
              }}
            >
              SET THEORY
            </Heading>
            <Text as="p" variant="body.summary">
              Inspiring others by unveiling the theory behind the creative
              process.
            </Text>
          </Flex>
          <Flex sx={{ flexDirection: 'row', gap: 3 }}>
            <a
              href="https://www.youtube.com/playlist?list=PL4GjI-O6-TdLeovUr1W6PgMOOe1aFaKW9"
              target="_blank"
              rel="noindex nofollow"
              data-umami-event="watch-episodes-button"
            >
              <Button leftIcon={<MdPlayArrow />}>Watch episodes</Button>
            </a>
            <a
              href="https://podcast.imsety.com/"
              target="_blank"
              rel="noindex nofollow"
              data-umami-event="listen-to-podcast-button"
            >
              <Button leftIcon={<MdPodcasts />} variant="ghost">
                Listen to podcast
              </Button>
            </a>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
