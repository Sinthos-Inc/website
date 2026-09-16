import Image from "next/image";
import { Brand } from "@/components/brand";
import { Header, CopyEmail, RevealMotion } from "@/components/interactions";
import { SensingStudy } from "@/components/sensing-study";
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed -top-20 left-5 z-50 bg-accent p-4 text-ink focus:top-5"
      >
        Skip to content
      </a>
      <Header />
      <RevealMotion />
      <main id="main">
        <section
          className="hero relative isolate h-svh max-h-[1200px] min-h-[850px] overflow-hidden max-[900px]:min-h-[780px] max-[640px]:h-[90svh] max-[640px]:min-h-[740px] max-[640px]:max-h-[1000px]"
          id="top"
          aria-labelledby="hero-title"
        >
          <div className="hero-image" aria-hidden="true">
            <Image
              src="/assets/valley.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 1700px, 100vw"
              className="object-cover max-[640px]:object-[64%_center]"
            />
          </div>
          <div className="hero-shade" aria-hidden="true"></div>
          <div className="hero-body pt-[173px] pb-[130px] min-[1600px]:pt-[190px] max-[900px]:pt-[175px] max-[640px]:pt-[157px] wrap mx-auto max-w-[1600px] px-[var(--gutter)]">
            <div className="eyebrow flex items-center gap-[15px] font-mono text-xs leading-[1.6] tracking-[.06em] hero-eyebrow mb-9 max-[640px]:mb-[31px] max-[640px]:text-[11px]">
              <span className="tiny-cross" aria-hidden="true">
                +
              </span>{" "}
              DEFENSE TECHNOLOGY
            </div>
            <h1 id="hero-title">
              Engineering
              <br />
              the next
              <br />
              <span>advantage.</span>
            </h1>
            <div className="hero-bottom mt-10 flex items-center gap-[62px] min-[1600px]:mt-[50px] max-[900px]:gap-[30px] max-[640px]:mt-[31px] max-[640px]:block">
              <p>
                Building the systems that bring clarity
                <br className="desktop-break" /> to a changing battlefield.
              </p>
              <a className="button button-light" href="#program">
                Explore our first program <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="hero-foot absolute inset-x-0 bottom-[30px] flex justify-between gap-6 text-[#e0e6dd] max-[640px]:bottom-[22px] max-[640px]:gap-[15px] wrap mx-auto max-w-[1600px] px-[var(--gutter)]">
            <span className="mono font-mono text-xs leading-[1.6] tracking-[.06em]">
              SINTHOS INC.
            </span>
            <span className="hero-foot-mid max-[900px]:hidden mono font-mono text-xs leading-[1.6] tracking-[.06em]">
              PERCEPTION. INTELLIGENCE. PROTECTION.
            </span>
            <a
              href="#mission"
              className="scroll-link flex gap-[22px] max-[640px]:gap-3 mono font-mono text-xs leading-[1.6] tracking-[.06em]"
            >
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div
            className="hero-index absolute right-[var(--gutter)] top-[175px] opacity-65 [writing-mode:vertical-rl] max-[640px]:hidden mono font-mono text-xs leading-[1.6] tracking-[.06em]"
            aria-hidden="true"
          >
            01 / 05
          </div>
        </section>
        <section
          className="mission pt-16 pb-32 max-[640px]:pt-10 max-[640px]:pb-[78px] light-section bg-paper text-ink"
          id="mission"
        >
          <div className="wrap mx-auto max-w-[1600px] px-[var(--gutter)]">
            <div className="section-label flex justify-between gap-6 border-t border-[#adb6a8] pt-6 pb-10 max-[640px]:pt-5 max-[640px]:pb-[26px] max-[640px]:text-[10px] mono font-mono text-xs leading-[1.6] tracking-[.06em]">
              <span>01 / THE MISSION</span>
              <span>BUILT FOR WHAT COMES NEXT</span>
            </div>
            <div className="editorial-grid mt-[15px] grid grid-cols-[1.4fr_1fr] gap-[10%] max-[900px]:gap-[7%] max-[640px]:mt-[9px] max-[640px]:block">
              <h2 className="reveal">
                The battlefield changes.
                <br />
                <span className="muted-light text-[#6b7769]">
                  Our thinking must
                  <br />
                  move faster.
                </span>
              </h2>
              <div className="editorial-copy max-w-[415px] pt-2 max-[640px]:mt-[30px] max-[640px]:max-w-none reveal">
                <p>
                  New threats expose old assumptions. Smaller systems. Faster
                  adaptation. Less warning.
                </p>
                <p>
                  Sinthos is building a defense technology company around this
                  reality. We start with perception: helping people and systems
                  understand what is approaching, even when conventional signals
                  are absent.
                </p>
                <a className="text-link" href="#program">
                  Our first development program{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="program pt-16 pb-[105px] max-[500px]:pt-10 max-[500px]:pb-[70px]"
          id="program"
          aria-labelledby="program-title"
        >
          <div className="wrap mx-auto max-w-[1600px] px-[var(--gutter)]">
            <div className="section-label flex justify-between gap-6 border-t border-[#adb6a8] pt-6 pb-10 max-[640px]:pt-5 max-[640px]:pb-[26px] max-[640px]:text-[10px] mono font-mono text-xs leading-[1.6] tracking-[.06em]">
              <span>02 / FIRST PROGRAM</span>
              <span>PASSIVE ACOUSTIC INTELLIGENCE</span>
            </div>
            <div className="program-heading mt-[15px] mb-[65px] grid grid-cols-[1.4fr_1fr] gap-[10%] max-[1100px]:gap-[7%] max-[760px]:grid-cols-1 max-[760px]:gap-[30px] max-[760px]:mb-[38px]">
              <h2 id="program-title" className="reveal">
                A new layer
                <br />
                of awareness.
              </h2>
              <div className="program-intro max-w-[420px] max-[760px]:max-w-[520px] reveal">
                <span className="program-status mb-5 inline-block border border-[#617353] px-[9px] py-[5px] text-[10px] text-accent max-[760px]:mb-4 mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  IN DEVELOPMENT
                </span>
                <p>
                  When a drone’s control link leaves the radio spectrum, a
                  familiar detection channel disappears. The aircraft still
                  moves air.
                </p>
                <p>
                  Our first program explores how passive acoustics and machine
                  learning can turn that sound into useful warning.
                </p>
              </div>
            </div>
            <SensingStudy />
            <p className="study-note mt-[15px] text-xs leading-[1.7] text-[#82907c] max-[500px]:text-[11px]">
              Illustration of the intended sensing workflow. Algorithms and
              hardware are in development.
            </p>
            <div className="principles mt-[62px] grid grid-cols-3 gap-[60px] max-[1100px]:gap-[30px] max-[760px]:gap-6 max-[500px]:mt-10 max-[500px]:grid-cols-1 max-[500px]:gap-[26px]">
              <div>
                <span className="mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  DESIGN INTENT / 01
                </span>
                <h3>Passive by nature.</h3>
                <p>
                  Sense the sound an aircraft produces, without transmitting a
                  detection signal.
                </p>
              </div>
              <div>
                <span className="mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  DESIGN INTENT / 02
                </span>
                <h3>Intelligence at the edge.</h3>
                <p>
                  Develop compact models with a path to local processing and
                  useful alerts.
                </p>
              </div>
              <div>
                <span className="mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  DESIGN INTENT / 03
                </span>
                <h3>Part of a larger picture.</h3>
                <p>
                  Build toward integration with optical sensors and existing
                  awareness systems.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="development pt-16 pb-[100px] max-[500px]:pt-10 max-[500px]:pb-[65px] light-section bg-paper text-ink"
          id="development"
          aria-labelledby="development-title"
        >
          <div className="wrap mx-auto max-w-[1600px] px-[var(--gutter)]">
            <div className="section-label flex justify-between gap-6 border-t border-[#adb6a8] pt-6 pb-10 max-[640px]:pt-5 max-[640px]:pb-[26px] max-[640px]:text-[10px] mono font-mono text-xs leading-[1.6] tracking-[.06em]">
              <span>03 / DEVELOPMENT</span>
              <span>EVIDENCE BEFORE ASSUMPTION</span>
            </div>
            <div className="development-heading mt-[15px] mb-[55px] flex justify-between gap-20 max-[1100px]:gap-10 max-[760px]:flex-col max-[760px]:gap-[26px] max-[500px]:mt-2.5 max-[500px]:mb-8">
              <h2 id="development-title" className="reveal">
                Capability is earned
                <br />
                in the field.
              </h2>
              <p className="reveal">
                A disciplined path from public data to representative
                conditions. Each stage must show what works, what fails, and
                what comes next.
              </p>
            </div>
            <div className="development-rows border-t border-[#b7c0ad]">
              <article className="development-row grid grid-cols-[40px_1fr_1.15fr_.66fr] items-start gap-[35px] border-b border-[#b7c0ad] py-8 max-[1100px]:grid-cols-[30px_.9fr_1.1fr] max-[1100px]:gap-5 max-[760px]:grid-cols-[25px_1fr] max-[760px]:gap-[15px] max-[500px]:py-[26px] reveal">
                <span className="row-number pt-[7px] text-[#6a785e] mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  01
                </span>
                <h3>Establish the baseline.</h3>
                <p>
                  Evaluate open detection methods and compact models on public
                  acoustic recordings, with recording sessions kept separate
                  during testing.
                </p>
                <span className="row-category pt-2 text-right text-[10px] text-[#657359] max-[1100px]:col-start-2 max-[1100px]:col-end-4 max-[1100px]:pt-0 max-[1100px]:text-left max-[760px]:col-end-3 mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  DATA & BENCHMARKS
                </span>
              </article>
              <article className="development-row grid grid-cols-[40px_1fr_1.15fr_.66fr] items-start gap-[35px] border-b border-[#b7c0ad] py-8 max-[1100px]:grid-cols-[30px_.9fr_1.1fr] max-[1100px]:gap-5 max-[760px]:grid-cols-[25px_1fr] max-[760px]:gap-[15px] max-[500px]:py-[26px] reveal">
                <span className="row-number pt-[7px] text-[#6a785e] mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  02
                </span>
                <h3>Challenge the model.</h3>
                <p>
                  Test across microphones, environments, and aircraft. Measure
                  missed events and false alerts, alongside processing
                  requirements.
                </p>
                <span className="row-category pt-2 text-right text-[10px] text-[#657359] max-[1100px]:col-start-2 max-[1100px]:col-end-4 max-[1100px]:pt-0 max-[1100px]:text-left max-[760px]:col-end-3 mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  SOFTWARE & EVALUATION
                </span>
              </article>
              <article className="development-row grid grid-cols-[40px_1fr_1.15fr_.66fr] items-start gap-[35px] border-b border-[#b7c0ad] py-8 max-[1100px]:grid-cols-[30px_.9fr_1.1fr] max-[1100px]:gap-5 max-[760px]:grid-cols-[25px_1fr] max-[760px]:gap-[15px] max-[500px]:py-[26px] reveal">
                <span className="row-number pt-[7px] text-[#6a785e] mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  03
                </span>
                <h3>Validate in the real world.</h3>
                <p>
                  Work toward controlled trials with representative FPVs,
                  synchronized recordings, and independently measured flight
                  conditions.
                </p>
                <span className="row-category pt-2 text-right text-[10px] text-[#657359] max-[1100px]:col-start-2 max-[1100px]:col-end-4 max-[1100px]:pt-0 max-[1100px]:text-left max-[760px]:col-end-3 mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  HARDWARE & FIELD TRIALS
                </span>
              </article>
            </div>
            <details className="research mt-11">
              <summary>
                <span className="mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                  RESEARCH CONTEXT
                </span>
                <span>
                  Why this problem matters{" "}
                  <span className="research-plus" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <div className="research-content ml-auto max-w-[800px] py-[30px]">
                <p>
                  Public defense requirements recognize the challenge of
                  fibre-optic-controlled drones and the need for complementary
                  sensing. These sources inform the program; they do not
                  establish Sinthos performance or an affiliation.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.gov.uk/government/publications/market-engagement-countering-fibre-optic-uncrewed-aerial-systems/market-engagement-document-countering-fibre-optic-uncrewed-aerial-systems"
                >
                  <span>UK Ministry of Defence</span>
                  <span>Countering fibre-optic UAS · 2026 ↗</span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.act.nato.int/wp-content/uploads/2025/05/rfip025048.pdf"
                >
                  <span>NATO Allied Command Transformation</span>
                  <span>Fibre-optic FPV challenge · 2025 ↗</span>
                </a>
              </div>
            </details>
          </div>
        </section>
        <section
          className="company bg-surface pt-[65px] pb-[93px] max-[500px]:pt-10 max-[500px]:pb-[63px]"
          aria-labelledby="company-title"
        >
          <div className="wrap mx-auto max-w-[1600px] px-[var(--gutter)]">
            <div className="section-label flex justify-between gap-6 border-t border-[#adb6a8] pt-6 pb-10 max-[640px]:pt-5 max-[640px]:pb-[26px] max-[640px]:text-[10px] mono font-mono text-xs leading-[1.6] tracking-[.06em]">
              <span>04 / SINTHOS</span>
              <span>AN ENDURING MISSION</span>
            </div>
            <div className="company-content mt-[46px] mb-[50px] flex items-center justify-between gap-[25px] max-[760px]:mt-[25px] max-[760px]:mb-10 max-[760px]:gap-3 max-[500px]:relative">
              <span
                className="company-bracket text-[180px] leading-none text-[#50624a] max-[1100px]:text-[130px] max-[760px]:text-[90px] max-[500px]:hidden"
                aria-hidden="true"
              >
                [
              </span>
              <h2 id="company-title" className="reveal">
                Start with a critical problem.
                <br />
                Build an enduring
                <br />
                <span>defense capability.</span>
              </h2>
              <span
                className="company-bracket text-[180px] leading-none text-[#50624a] max-[1100px]:text-[130px] max-[760px]:text-[90px] max-[500px]:hidden"
                aria-hidden="true"
              >
                ]
              </span>
            </div>
            <div className="company-bottom flex justify-between gap-10 border-t border-line pt-[30px] max-[760px]:flex-col max-[760px]:gap-[25px]">
              <span className="mono font-mono text-xs leading-[1.6] tracking-[.06em]">
                PERCEPTION IS THE BEGINNING.
              </span>
              <p>
                Sinthos is being built for the long term. Our first program
                begins with acoustic awareness. Our ambition is a defense
                technology company that brings sensing, software, and hardware
                together to meet evolving threats.
              </p>
            </div>
          </div>
        </section>
        <section
          className="contact bg-accent pt-[60px] pb-[95px] text-[#172110] max-[500px]:pt-10 max-[500px]:pb-[60px]"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="wrap mx-auto max-w-[1600px] px-[var(--gutter)]">
            <div className="section-label flex justify-between gap-6 border-t border-[#adb6a8] pt-6 pb-10 max-[640px]:pt-5 max-[640px]:pb-[26px] max-[640px]:text-[10px] mono font-mono text-xs leading-[1.6] tracking-[.06em]">
              <span>05 / WORK WITH US</span>
              <span>SINTHOS INC.</span>
            </div>
            <div className="contact-grid mt-[18px] grid grid-cols-[1.5fr_1fr] gap-[10%] max-[1100px]:gap-[6%] max-[760px]:grid-cols-1 max-[760px]:gap-[45px] max-[500px]:gap-[30px]">
              <h2 id="contact-title" className="reveal">
                The next advantage
                <br />
                starts with a<br />
                <span>conversation.</span>
              </h2>
              <div className="contact-copy max-w-[420px] self-end max-[760px]:max-w-[480px] reveal">
                <p>
                  We’re looking to speak with defense integrators, acoustic
                  researchers, and partners who can help test the technology in
                  representative conditions.
                </p>
                <a
                  className="contact-email flex items-center justify-between gap-5 whitespace-nowrap border-b border-[#7f9560] py-[13px] text-xl tracking-[-.035em] max-[1100px]:text-[17px] max-[760px]:text-[21px] max-[500px]:text-[19px]"
                  href="mailto:subhro@sinthosinc.com?subject=Working%20with%20Sinthos"
                >
                  subhro@sinthosinc.com <span aria-hidden="true">↗</span>
                </a>
                <CopyEmail />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer flex min-h-[140px] items-center justify-between gap-[30px] max-[900px]:flex-wrap max-[900px]:py-9 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-6 wrap mx-auto max-w-[1600px] px-[var(--gutter)]">
        <Brand compact />
        <a href="mailto:subhro@sinthosinc.com">subhro@sinthosinc.com ↗</a>
        <span className="mono font-mono text-xs leading-[1.6] tracking-[.06em]">
          © 2026 SINTHOS INC.
        </span>
      </footer>
    </>
  );
}
