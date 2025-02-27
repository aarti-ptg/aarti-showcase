import clsx from 'clsx';
import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import Image from 'next/image';

import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function Certifications() {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          color: 0xd27d2d,
          points: 9.0,
          maxDistance: 15.0,
          spacing: 20.0,
          backgroundAlpha: 0,
          scale: 2.0,
          scaleMobile: 2.0,
          THREE,
        })
      );
    }
    handleMenuClick();
  }, [vantaEffect]);

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [popCard, setPopCard] = React.useState('hidden');
  const [fade, setFade] = React.useState(false);

  const handleMenuClick = () => {
    setPopCard('inline-block');
    setFade(true);
  };

  return (
    <Layout>
      <Seo templateTitle='Certifications' />
      <main className="flex flex-col min-h-screen">
        <section className="bg-white transition-all dark:bg-dark flex-grow" ref={vantaRef}>
          <div 
            className={clsx(
              'layout relative flex flex-col items-center justify-center pt-6 text-center sm:pt-8 md:pt-10 lg:pt-12 flex-grow',
              fade ? 'opacity-100' : 'opacity-0' // Apply fade only to this div
            )}
          >
            <div className='mt-16 flex flex-col items-center'>

              {/* Certifications in a Row */}
              <div className='flex flex-col items-center'>

                {/* Badge Container */}
                <div className='flex flex-row gap-16 items-center justify-center mb-10 mt-24'>

                  {/* AWS Solutions Architect Certification */}
                  <div className='flex flex-col items-center'>
                    <a 
                      href='https://www.credly.com/badges/38efde8c-4e2a-436d-8003-de2bb80d7c96' 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='transition-transform hover:scale-105'
                    >
                      <Image 
                        src='/images/aws_solarch.png'
                        alt='AWS Solutions Architect Badge'
                        width={300}  
                        height={300} 
                      />
                    </a>
                    <div className='mt-6 text-xl font-semibold text-gray-800 dark:text-gray-300'>
                      Earned: Aug 2024
                    </div>
                    <div className='mt-4'>
                      <ArrowLink
                        className='text-lg'
                        href='https://www.credly.com/badges/38efde8c-4e2a-436d-8003-de2bb80d7c96'
                      >
                        View Certification
                      </ArrowLink>
                    </div>
                  </div>

                  {/* Oracle Java SE 11 Certification */}
                  <div className='flex flex-col items-center'>
                    <a 
                      href='https://catalog-education.oracle.com/ords/certview/sharebadge?id=C2595ADA331C266FA05DC0ABFB072307347496F7124E23235875D76E31046BE1' 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='transition-transform hover:scale-105'
                    >
                      <Image 
                        src='/images/oracle.png'
                        alt='Oracle Java SE 11 Developer Badge'
                        width={300}  
                        height={300} 
                      />
                    </a>
                    <div className='mt-6 text-xl font-semibold text-gray-800 dark:text-gray-300'>
                      Earned: May 2021
                    </div>
                    <div className='mt-4'>
                      <ArrowLink
                        className='text-lg'
                        href='https://catalog-education.oracle.com/ords/certview/sharebadge?id=C2595ADA331C266FA05DC0ABFB072307347496F7124E23235875D76E31046BE1'
                      >
                        View Certification
                      </ArrowLink>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Footer stays at the bottom and does not fade */}
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
