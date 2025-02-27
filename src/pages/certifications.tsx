import clsx from 'clsx';
import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import Image from 'next/image';

import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
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
      <main>
        <section
          className={clsx(
            'bg-white transition-all dark:bg-dark',
            fade ? 'opacity-100' : 'opacity-0'
          )}
          ref={vantaRef}
        >
          <div className='layout relative flex min-h-screen flex-col items-start justify-start pt-6 text-center sm:pt-8 md:pt-10 lg:pt-12 '>
            <div className='mt-16 flex w-full flex-col'>

              {/* AWS Certified Cloud Practitioner */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://aws.amazon.com/certification/certified-solutions-architect-associate/'
                  >
                    AWS Solutions Architect - Associate
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    Earned: Aug 2024
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 flex flex-col items-center pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <Image 
                    src='/images/aws_solarch.png' // Update with your actual badge image path
                    alt='AWS Certified Cloud Practitioner Badge'
                    width={200}
                    height={200}
                  />
                  <div className='flex w-full justify-end mt-4'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.credly.com/badges/38efde8c-4e2a-436d-8003-de2bb80d7c96' // Replace with actual badge link
                    >
                      View Certification
                    </ArrowLink>
                  </div>
                </div>
              </div>

              {/* Oracle Jave SE11 */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://education.oracle.com/oracle-certified-professional-java-se-11-developer/trackp_OCPJAV11'
                  >
                    Oracle Java SE 11 Developer
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    Earned: May 2021
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 flex flex-col items-center pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <Image 
                    src='/images/oracle.png'
                    alt='Oracle Java SE11 Developer Certification Image'
                    width={200}
                    height={200}
                  />
                  <div className='flex w-full justify-end mt-4'>
                    <ArrowLink
                      className='text-sm'
                      href='https://catalog-education.oracle.com/ords/certview/sharebadge?id=C2595ADA331C266FA05DC0ABFB072307347496F7124E23235875D76E31046BE1'
                    >
                      View Certification
                    </ArrowLink>
                  </div>
                </div>
              </div>

            </div>
            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
