import clsx from "clsx";
import * as React from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";
import ArrowLink from "@/components/links/ArrowLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import Seo from "@/components/Seo";

export default function Work() {
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
  const [popCard, setPopCard] = React.useState("hidden");
  const [fade, setFade] = React.useState(false);

  const handleMenuClick = () => {
    setPopCard("inline-block");
    setFade(true);
  };

  return (
    <Layout>
      <Seo templateTitle="Work Experience" />
      <main>
        <section
          className={clsx(
            "bg-white transition-all dark:bg-dark",
            fade ? "opacity-100" : "opacity-0"
          )}
          ref={vantaRef}
        >
          <div className="layout relative flex min-h-screen flex-col items-start justify-start pt-6 text-center sm:pt-8 md:pt-10 lg:pt-12 ">
            <div className="mt-16 flex w-full flex-col">

              {/* ACCENTURE PANE */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="https://www.accenture.com/us-en/industries/accenture-federal-services"
                  >
                    Accenture Federal Services
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-2xl">
                    <div>Software Engineer (L11)</div>
                    <div>Jun 2024 - Present</div>
                  </h1>
                </div>

                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">


                  <h6>
                    <li>
                    Created a frontend interface for a synthetic data generator by implementing an AWS Lambda function with Python layers, utilizing S3 for storage, integrating with API Gateway, and Postman for testing.
                    </li>
                  </h6>
                  
                  <h6>
                    <li>
                    Created, tested, and deployed a financial management tool using Microsoft Azure Services
                    </li>
                  </h6>

                  <h6>
                    <li>
                    Led multiple client-facing meetings to explain software solutions in technical depth
                    </li>
                  </h6>

                  <h6>
                    <li>
                    Developed and maintained process design and solution documentation
                    </li>
                  </h6>
                  <h6>
                    <li>
                    AFS Fastforward TDP Program - Ambassador
                    </li>
                  </h6>

                </div>
              </div>


              {/* PTG PANE */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="https://www.accenture.com/us-en/industries/accenture-federal-services"
                  >
                    People Tech Group
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-2xl">
                    <div>Software Engineer Intern (L11)</div>
                    <div>Jul 2022 - May 2024</div>
                  </h1>
                </div>

                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">


                  <h6>
                    <li>
                    Leveraged AWS Lambda and App Flow to design and
                        implement a custom Github connector, enabling seamless
                        integration and automation of code repository workflows.
                    </li>
                  </h6>
                  
                  <h6>
                    <li>
                    Collaborated with cross-functional teams to ensure
                        security, scalability, and efficiency.
                    </li>
                  </h6>

                  <h6>
                    <li>
                    Created a tailored Workday connector using AWS Lambda
                        and App Flow, facilitating real-time data
                        synchronization and automation between HR systems and
                        internal applications.
                    </li>
                  </h6>

                  <h6>
                    <li>
                    Led the process of testing, deployment, and ongoing
                        support, contributing to improved operational efficiency
                    </li>
                  </h6>

                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://www.linkedin.com/in/aarti-itikirala/details/recommendations/?detailScreenTabIndex=0"
                    >
                      Recommendation from Manager: Krishna C
                    </ArrowLink>
                  </div>
                </div>
              </div>

              
              {/* NEXTGEN PANE */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="https://github.com/aitikirala/PTG-Custom-Connector"
                  >
                    NextGen Tutoring
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-2xl">
                    <div>Founder and Tutor</div>
                    <div>Jan 2021 - Present</div>
                  </h1>
                </div>

                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  
                  <h6> <li>Built a website and Google Business page to establish an online presence, optimize client acquisition, and streamline tutoring session management.</li>
                  </h6>
                  
                  
                  <h6>
                  <li>Specialized focus in the following areas: </li>
                    <div className="ml-6">
                      <li>
                      Object Oriented Programming
                      </li>

                      <li>
                      Data Structures
                      </li>

                      <li>
                      SAT Math Tutoring
                      </li>

                      <li>
                      Calc II (Solids of Revolution, Integration Techniques, Improper Integrals, Series and Sequences, etc.)
                      </li>

                      <li>
                      Calc III (Vectors and the Geometry of Space, Partial Derivatives, Multiple Integrals, Vector Calculus)
                      </li>
                    </div>
                  </h6>


                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://aartis-tutoring-services.b12sites.com"
                    >
                      Learn More
                    </ArrowLink>
                  </div>
                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://maps.app.goo.gl/k5QenE7MVaSVujV49?g_st=com.google.maps.preview.copy"
                    >
                      Business Page
                    </ArrowLink>
                  </div>
                </div>
              </div>
              
              

              {/* UMD MATH COACH */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="https://umd.edu"
                  >
                    University of Maryland
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-2xl">
                    <div>Math Coach</div>
                    <div> Aug 2021 - Jan 2022</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    <li>Conducted Weekly Sessions</li>
                    <div className="ml-6">
                      <li>
                        Detailed key calculus concepts at a designated UMD
                        faculty building, providing comprehensive guidance to
                        students and ensuring a robust understanding of
                        intricate Calculus principles.
                      </li>
                    </div>
                  </h6>

                  <h6>
                    <li>Facilitated Homework and Exam Preparation</li>
                    <div className="ml-6">
                      <li>
                        Assisted students with challenging homework problems,
                        tailored test preparation strategies to individual
                        learning styles, and offered personalized tutoring
                        sessions, leading to improved academic performance and
                        enhanced comprehension among participants.
                      </li>
                    </div>
                  </h6>

                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://www.linkedin.com/in/aarti-itikirala/overlay/1635477243350/single-media-viewer/?profileId=ACoAADKaE60BFHBu2hKUmYKMm9keqRml1B5-UsE"
                    >
                      Recognition
                    </ArrowLink>
                  </div>
                </div>
              </div>

              

              {/* Undergraduate Research Pane */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="https://umd.edu"
                  >
                    University of Maryland
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-2 flex flex-col text-xl dark:prose-invert md:text-2xl">
                    <div>Undergraduate Research Assistant</div>
                    <div>Nov 2020 - Feb 2021</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    <li>
                      Analyzed how political identity (specifically, conservatism) influences the spread of COVID-19 misinformation on Twitter, focusing on mask effectiveness and its impact on virus control in the U.S.
                    </li>
                  </h6>
                  <h6>
                    <li>
                      Initially verified user-reported Twitter data manually, then developed a Python tool to automate misinformation detection using a keyword-based dictionary
                    </li>
                  </h6>

                  <h6>
                    <li>
                      Collected, coded, and analyzed state-level COVID and political affiliation data
                    </li>
                  </h6>
                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://www.linkedin.com/in/aarti-itikirala/details/recommendations/?detailScreenTabIndex=0"
                    >
                      Recommendation from Professor Erdemandi
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
