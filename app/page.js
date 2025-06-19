'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [showHeader, setShowHeader] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);
  const lastScrollYRef = useRef(0);

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeader(!(scrollY > lastScrollYRef.current && scrollY > 50));
      lastScrollYRef.current = scrollY;

      const current = sectionRefs.current.findIndex((ref) => {
        const rect = ref?.getBoundingClientRect();
        return rect?.top >= 0 && rect?.top < window.innerHeight / 2;
      });

      if (current !== -1 && current !== currentSection) {
        setCurrentSection(current);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = Math.min(currentSection + 1, sectionRefs.current.length - 1);
        setCurrentSection(next);
        scrollToSection(next);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const next = Math.max(currentSection - 1, 0);
        setCurrentSection(next);
        scrollToSection(next);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection]);

  const sections = [
    {
      className: 'bg-bumbleYellow',
      content: (
        <>
          <h1>Contrac-Bond</h1>
          <p>Protect Your Work. Protect Your Worth.</p>
          <button className="learn-more-btn" onClick={() => scrollToSection(1)}>
            Learn More
          </button>

        </>
      ),
    },
    {
      className: 'bg-bumbleBeige',
      content: (
        <div className="grid-2 items-center gap-8">
  <div>
    <h2>Hi, I’m Marc</h2>
    <p>
      Freelance artist, cosplayer, and prototype builder for:
      <br /> 🎓 College thesis projects
      <br /> 💡 Personal inventions
      <br /> 🚀 Startup MVPs
      <br /><br />
      <span className="italic">And there’s one thing that scares all freelancers and artists...</span>
    </p>
  </div>
  <div className="grid-2">
  {[
    { src: '/images/marc-nunchucks.jpg', alt: 'Cosplay' },
    { src: '/images/marc-radar-win.jpeg', alt: 'Received' },
    { src: '/images/marc-working.png', alt: 'Messenger' },
    { src: '/images/marc-speaking.JPG', alt: 'Speaking' },
  ].map(({ src, alt }, i) => (
    <div key={i} className="rounded-img">
      <Image
        src={src}
        alt={alt}
        fill
        className="image-fill"
      />
    </div>
  ))}
</div>

</div>

      ),
    },
    {
      className: 'bg-bumbleYellow',
      content: (
        <>
          <h2>The Risk</h2>
          <p>“Let’s collab, I’ll pay you after!”<br />“No need for paperwork, I got you.”</p>
          <ul>
            <p>❌ Scope gets vague</p>
            <p>❌ Payment gets delayed</p>
            <p>❌ Work gets stolen</p>
            <p>❌ No legal backup</p>
          </ul>
          <p><em>📊 74% of freelancers face late or no payment — Freelancers Union, 2022</em></p>
        </>
      ),
    },
    {
      className: 'bg-bumbleBeige',
      content: (
        <>
          <h2>Introducing Contrac-Bond</h2>
          <ul>
            <li>📝 Create NDAs, Work, and Collaboration Agreements</li>
            <li>📄 Auto-fill PDF templates with project details</li>
            <li>🤖 Smart AI clause suggestions</li>
            <li>🔐 Store securely, access anytime</li>
            <li>🔄 Share with clients before work begins</li>
          </ul>
          <p><em>No lawyer. No hassle. Just clarity.</em></p>
        </>
      ),
    },
    {
      className: 'bg-bumbleYellow',
      content: (
        <>
          <h2>What’s Next?</h2>
          <ul>
            <li>✅ MVP in development</li>
            <li>✅ Built for freelancers, by a freelancer</li>
            <li>🎯 Ready to help creatives protect their work</li>
          </ul>
        </>
      ),
    },
    {
      className: 'bg-black',
      content: (
        <>
          <h2>Let’s stop handshake deals from ruining great work.</h2>
          <p>
            Contact us:{" "}
            <a href="mailto:contrac-bond@gmail.com" style={{ textDecoration: 'underline', color: 'var(--bumble-yellow)' }}>
              contrac-bond@gmail.com
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <header className={showHeader ? '' : 'hidden'}>
        <div className="site-title">Contrac-Bond</div>
        <nav>
          <button onClick={() => window.open('https://forms.gle/wsBmwRvb3QrraAQu7', '_blank')}>
            Early Access
          </button>
          <button onClick={() => scrollToSection(sections.length - 1)}>
            Contact us
          </button>
        </nav>
      </header>


      <main className="snap-scroll">
        {sections.map((section, i) => (
          <section
            key={i}
            ref={(el) => (sectionRefs.current[i] = el)}
            className={section.className}
          >
            {section.content}
          </section>
        ))}
      </main>
    </>
  );
}
