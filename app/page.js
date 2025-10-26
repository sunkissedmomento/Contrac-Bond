// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// export default function Page() {
//   const [showHeader, setShowHeader] = useState(true);
//   const [currentSection, setCurrentSection] = useState(0);
//   const sectionRefs = useRef([]);
//   const lastScrollYRef = useRef(0);

//   const scrollToSection = (index) => {
//     if (sectionRefs.current[index]) {
//       sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setShowHeader(!(scrollY > lastScrollYRef.current && scrollY > 50));
//       lastScrollYRef.current = scrollY;

//       const current = sectionRefs.current.findIndex((ref) => {
//         const rect = ref?.getBoundingClientRect();
//         return rect?.top >= 0 && rect?.top < window.innerHeight / 2;
//       });

//       if (current !== -1 && current !== currentSection) {
//         setCurrentSection(current);
//       }
//     };

//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowDown') {
//         e.preventDefault();
//         const next = Math.min(currentSection + 1, sectionRefs.current.length - 1);
//         setCurrentSection(next);
//         scrollToSection(next);
//       } else if (e.key === 'ArrowUp') {
//         e.preventDefault();
//         const next = Math.max(currentSection - 1, 0);
//         setCurrentSection(next);
//         scrollToSection(next);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [currentSection]);

//   const sections = [
//     {
//       className: 'bg-bumbleYellow',
//       content: (
//         <>
//           <h1>Contrac-Bond</h1>
//           <p>Protect Your Work. Protect Your Worth.</p>
//           <button className="learn-more-btn" onClick={() => scrollToSection(1)}>
//             Learn More
//           </button>

//         </>
//       ),
//     },
//     {
//       className: 'bg-bumbleBeige',
//       content: (
//         <div className="grid-2 items-center gap-8">
//   <div>
//     <h2>Hi, I’m Marc</h2>
//     <p>
//       Freelance artist, cosplayer, and prototype builder for:
//       <br /> 🎓 College thesis projects
//       <br /> 💡 Personal inventions
//       <br /> 🚀 Startup MVPs
//       <br /><br />
//       <span className="italic">And there’s one thing that scares all freelancers and artists the most...</span>
//     </p>
//   </div>
//   <div className="grid-2">
//   {[
//     { src: '/images/marc-nunchucks.jpg', alt: 'Cosplay' },
//     { src: '/images/marc-radar-win.jpeg', alt: 'Received' },
//     { src: '/images/marc-working.png', alt: 'Messenger' },
//     { src: '/images/marc-speaking.JPG', alt: 'Speaking' },
//   ].map(({ src, alt }, i) => (
//     <div key={i} className="rounded-img">
//       <Image
//         src={src}
//         alt={alt}
//         fill
//         className="image-fill"
//       />
//     </div>
//   ))}
// </div>

// </div>

//       ),
//     },
//     {
//       className: 'bg-bumbleYellow',
//       content: (
//         <>
//           <h2>The Risk</h2>
//           <p>“Let’s collab, I’ll pay you after!”<br />“No need for paperwork, I got you.”</p>
//           <ul>
//             <p>❌ Scope gets vague</p>
//             <p>❌ Payment gets delayed</p>
//             <p>❌ Work gets stolen</p>
//             <p>❌ No legal backup</p>
//           </ul>
//           <p><em>📊 74% of freelancers face late or no payment — Freelancers Union, 2022</em></p>
//         </>
//       ),
//     },
//     {
//       className: 'bg-bumbleBeige',
//       content: (
//         <>
//           <h2>Introducing Contrac-Bond</h2>
//           <ul>
//             <li>📝 Create NDAs, Work, and Collaboration Agreements</li>
//             <li>📄 Auto-fill PDF templates with project details</li>
//             <li>🤖 Smart AI clause suggestions</li>
//             <li>🔐 Store securely, access anytime</li>
//             <li>🔄 Share with clients before work begins</li>
//           </ul>
//           <p><em>No lawyer. No hassle. Just clarity.</em></p>
//         </>
//       ),
//     },
//     {
//       className: 'bg-bumbleYellow',
//       content: (
//         <>
//           <h2>What’s Next?</h2>
//           <ul>
//             <li>✅ MVP in development</li>
//             <li>✅ Built for freelancers, by a freelancer</li>
//             <li>🎯 Ready to help creatives protect their work</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       className: 'bg-black',
//       content: (
//         <>
//           <h2>Let’s stop handshake deals from ruining great work.</h2>
//           <p>
//             Contact us:{" "}
//             <a href="mailto:contrac-bond@gmail.com" style={{ textDecoration: 'underline', color: 'var(--bumble-yellow)' }}>
//               contrac-bond@gmail.com
//             </a>
//           </p>
//         </>
//       ),
//     },
//   ];

//   return (
//     <>
//       <header className={showHeader ? '' : 'hidden'}>
//         <div className="site-title">Contrac-Bond</div>
//         <nav>
//           <button onClick={() => window.open('https://forms.gle/wsBmwRvb3QrraAQu7', '_blank')}>
//             Early Access
//           </button>
//           <button onClick={() => scrollToSection(sections.length - 1)}>
//             Contact us
//           </button>
//         </nav>
//       </header>



//       <main className="snap-scroll">
//         {sections.map((section, i) => (
//           <section
//             key={i}
//             ref={(el) => (sectionRefs.current[i] = el)}
//             className={section.className}
//           >
//             {section.content}
//           </section>
//         ))}
//       </main>
//     </>
//   );
// }

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ALERT System - Pitch Deck</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .deck-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
        }
        
        .slide {
            background: white;
            border-radius: 12px;
            padding: 60px;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            min-height: 600px;
            display: flex;
            flex-direction: column;
            animation: slideIn 0.5s ease-out;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .slide-number {
            position: absolute;
            top: 20px;
            right: 20px;
            color: #666;
            font-size: 14px;
            font-weight: 600;
        }
        
        .slide h1 {
            color: #1e3c72;
            font-size: 48px;
            margin-bottom: 20px;
            font-weight: 700;
        }
        
        .slide h2 {
            color: #2a5298;
            font-size: 36px;
            margin-bottom: 30px;
            font-weight: 600;
            border-bottom: 3px solid #ff6b35;
            padding-bottom: 15px;
        }
        
        .slide h3 {
            color: #1e3c72;
            font-size: 24px;
            margin-top: 25px;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .subtitle {
            color: #666;
            font-size: 24px;
            margin-bottom: 40px;
            font-weight: 300;
        }
        
        ul {
            list-style: none;
            margin: 20px 0;
        }
        
        ul li {
            padding: 12px 0;
            padding-left: 35px;
            position: relative;
            font-size: 18px;
            line-height: 1.6;
            color: #333;
        }
        
        ul li:before {
            content: "→";
            position: absolute;
            left: 0;
            color: #ff6b35;
            font-weight: bold;
            font-size: 20px;
        }
        
        .highlight {
            background: linear-gradient(120deg, #ffd89b 0%, #ff6b35 100%);
            color: white;
            padding: 25px;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
        }
        
        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-top: 20px;
        }
        
        .column {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 8px;
            border-left: 4px solid #ff6b35;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 30px 0;
        }
        
        .stat-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 25px;
            border-radius: 8px;
            text-align: center;
        }
        
        .stat-number {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .stat-label {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .feature-box {
            background: #e8f4f8;
            border-left: 5px solid #2a5298;
            padding: 20px;
            margin: 15px 0;
            border-radius: 5px;
        }
        
        .feature-box strong {
            color: #1e3c72;
            display: block;
            margin-bottom: 8px;
            font-size: 19px;
        }
        
        .cover-slide {
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
        }
        
        .cover-slide h1 {
            color: white;
            font-size: 64px;
            margin-bottom: 20px;
        }
        
        .cover-slide .subtitle {
            color: rgba(255,255,255,0.9);
            font-size: 28px;
        }
        
        .logo {
            font-size: 80px;
            margin-bottom: 30px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        th, td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        th {
            background: #1e3c72;
            color: white;
            font-weight: 600;
        }
        
        tr:hover {
            background: #f8f9fa;
        }
        
        .vs-table td:first-child {
            font-weight: 600;
            color: #1e3c72;
        }
        
        .checkmark {
            color: #22c55e;
            font-weight: bold;
        }
        
        .xmark {
            color: #ef4444;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="deck-container">
        
        <!-- SLIDE 1: COVER -->
        <div class="slide cover-slide">
            <div class="logo">⚡</div>
            <h1>ALERT SYSTEM</h1>
            <div class="subtitle">Automated Load Evaluation and Real-Time Tripping Detection</div>
            <p style="margin-top: 40px; font-size: 20px; opacity: 0.8;">Modernizing Philippine Power Distribution with Affordable IoT</p>
        </div>

        <!-- SLIDE 2: THE PROBLEM -->
        <div class="slide">
            <div class="slide-number">02</div>
            <h2>The Problem: Manual Monitoring Is Failing</h2>
            
            <h3>Current State at Meralco</h3>
            <ul>
                <li><strong>Manual load checking</strong> using handheld ammeters - time-consuming and error-prone</li>
                <li><strong>Visual inspections</strong> by field technicians - exposes workers to safety risks</li>
                <li><strong>Reactive maintenance</strong> - problems detected only after customer complaints</li>
                <li><strong>Limited visibility</strong> - utilities can only monitor "up to transformer level" remotely</li>
            </ul>

            <div class="highlight">
                5.8% System Losses = ₱ Billions in Wasted Energy & Revenue
            </div>

            <h3>Critical Gaps</h3>
            <ul>
                <li>Delayed fault detection leads to prolonged outages</li>
                <li>No real-time detection of non-technical losses (pilferage, illegal connections)</li>
                <li>Inability to predict transformer failures before they occur</li>
            </ul>
        </div>

        <!-- SLIDE 3: EXISTING SOLUTIONS FALL SHORT -->
        <div class="slide">
            <div class="slide-number">03</div>
            <h2>Existing Solutions Fall Short</h2>
            
            <h3>Commercial Systems (Grid20/20, Schneider, Siemens)</h3>
            <ul>
                <li><strong>Enterprise-grade pricing</strong> - too expensive for mass deployment across 90,000+ transformers</li>
                <li><strong>Generic platforms</strong> - not optimized for Philippine infrastructure conditions</li>
                <li><strong>Limited communication</strong> - cellular-only fails in rural areas with poor coverage</li>
                <li><strong>Vendor lock-in</strong> - proprietary systems prevent local customization and maintenance</li>
            </ul>

            <h3>Meralco's Current GE AMI System</h3>
            <ul>
                <li>Smart meters for <strong>customer-level monitoring only</strong></li>
                <li>Cannot detect transformer-level faults or overloads</li>
                <li>No automated maintenance ticketing</li>
                <li>Limited to 40,000 prepaid customers initially</li>
            </ul>

            <div class="highlight">
                Gap: No affordable, integrated solution for transformer-level monitoring with automated maintenance
            </div>
        </div>

        <!-- SLIDE 4: INTRODUCING ALERT -->
        <div class="slide">
            <div class="slide-number">04</div>
            <h2>Introducing ALERT System</h2>
            
            <div class="subtitle">Smart Check Meter for Distribution Transformers</div>

            <div class="feature-box">
                <strong>🎯 Core Innovation</strong>
                CT-rated smart monitoring device that converts standard distribution transformers into intelligent, self-monitoring assets
            </div>

            <h3>What Makes Us Different</h3>
            <ul>
                <li><strong>70% lower cost</strong> than commercial alternatives using off-the-shelf components</li>
                <li><strong>Hybrid LoRaWAN + LTE</strong> communication for 100% coverage (rural + urban)</li>
                <li><strong>Philippine-optimized</strong> integration with Meralco workflows and local grid specs</li>
                <li><strong>Open architecture</strong> enabling local maintenance and technology transfer</li>
                <li><strong>Automated ticketing</strong> directly integrated with work order management</li>
            </ul>

            <div class="highlight">
                Deploy 10x More Units for the Same Budget
            </div>
        </div>

        <!-- SLIDE 5: HOW IT WORKS -->
        <div class="slide">
            <div class="slide-number">05</div>
            <h2>System Architecture</h2>

            <div class="two-column">
                <div class="column">
                    <h3>1. Sensing Layer</h3>
                    <ul style="margin-left: 0;">
                        <li>Current transformers (CT) for load measurement</li>
                        <li>Voltage sensors for 3-phase monitoring</li>
                        <li>Temperature sensors (DHT series)</li>
                    </ul>
                </div>
                <div class="column">
                    <h3>2. Communication Layer</h3>
                    <ul style="margin-left: 0;">
                        <li>LoRaWAN for rural (10km+ range)</li>
                        <li>LTE fallback for urban areas</li>
                        <li>ESP32 dual connectivity</li>
                    </ul>
                </div>
            </div>

            <div class="two-column">
                <div class="column">
                    <h3>3. Processing & Analytics</h3>
                    <ul style="margin-left: 0;">
                        <li>Real-time cloud processing (AWS IoT Core)</li>
                        <li>Consumption cross-check vs. meter readings</li>
                        <li>Anomaly detection algorithms</li>
                    </ul>
                </div>
                <div class="column">
                    <h3>4. Application Layer</h3>
                    <ul style="margin-left: 0;">
                        <li>Web dashboard for operators</li>
                        <li>Mobile app for technicians</li>
                        <li>Automated ticket generation</li>
                        <li>GIS transformer mapping</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- SLIDE 6: KEY FEATURES -->
        <div class="slide">
            <div class="slide-number">06</div>
            <h2>Killer Features</h2>

            <div class="feature-box">
                <strong>⚡ Automated Fault Detection</strong>
                Overload detection with graduated alerts | Instant outage notification | Predictive thermal runaway monitoring
            </div>

            <div class="feature-box">
                <strong>🔍 Non-Technical Loss Detection</strong>
                Real-time transformer output vs. billed consumption comparison | Geographic clustering of suspicious patterns | AI anomaly detection for pilferage zones
            </div>

            <div class="feature-box">
                <strong>🎫 Automated Maintenance Workflow</strong>
                Auto-generated tickets on fault detection | Priority assignment by severity + customer impact | GPS routing for technicians | Integration with Meralco work order systems
            </div>

            <div class="feature-box">
                <strong>🤖 Predictive Maintenance (ML)</strong>
                Trained on Philippine transformer failure patterns | Monsoon/typhoon seasonal stress detection | Predict failures 48-72 hours in advance
            </div>

            <div class="feature-box">
                <strong>📱 Mobile-First for Technicians</strong>
                Offline mode with sync | Bilingual (Tagalog/English) | Digital checklists + photo documentation | Voice notes support
            </div>
        </div>

        <!-- SLIDE 7: COMPETITIVE ADVANTAGE -->
        <div class="slide">
            <div class="slide-number">07</div>
            <h2>ALERT vs. Grid20/20 OptaNODE</h2>

            <table class="vs-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Grid20/20 OptaNODE</th>
                        <th>ALERT System</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cost per Unit</td>
                        <td>$500+ (enterprise)</td>
                        <td><strong>~$150 (70% savings)</strong></td>
                    </tr>
                    <tr>
                        <td>Communication</td>
                        <td>Cellular only</td>
                        <td><strong>LoRaWAN + LTE hybrid</strong></td>
                    </tr>
                    <tr>
                        <td>Philippine Integration</td>
                        <td><span class="xmark">✗</span> Global platform</td>
                        <td><span class="checkmark">✓</span> Meralco workflows</td>
                    </tr>
                    <tr>
                        <td>Language Support</td>
                        <td><span class="xmark">✗</span> English only</td>
                        <td><span class="checkmark">✓</span> Tagalog + English</td>
                    </tr>
                    <tr>
                        <td>Architecture</td>
                        <td><span class="xmark">✗</span> Proprietary (vendor lock-in)</td>
                        <td><span class="checkmark">✓</span> Open & modular</td>
                    </tr>
                    <tr>
                        <td>Automated Ticketing</td>
                        <td><span class="xmark">✗</span> Generic alerts</td>
                        <td><span class="checkmark">✓</span> Integrated work orders</td>
                    </tr>
                    <tr>
                        <td>Local Maintenance</td>
                        <td><span class="xmark">✗</span> Requires vendor</td>
                        <td><span class="checkmark">✓</span> Filipino engineers</td>
                    </tr>
                    <tr>
                        <td>Predictive ML</td>
                        <td>Global failure patterns</td>
                        <td><strong>PH-specific training data</strong></td>
                    </tr>
                </tbody>
            </table>

            <div class="highlight">
                Same Core Functionality | 70% Lower Cost | Built for Philippines
            </div>
        </div>

        <!-- SLIDE 8: BUSINESS IMPACT -->
        <div class="slide">
            <div class="slide-number">08</div>
            <h2>Quantified Business Impact</h2>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">70%</div>
                    <div class="stat-label">Cost Reduction vs. Commercial Solutions</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">40%</div>
                    <div class="stat-label">Faster Mean Time to Repair</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">10x</div>
                    <div class="stat-label">More Transformers Monitored (Same Budget)</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">₱ Millions</div>
                    <div class="stat-label">NTL Recovery Potential (1% of 5.8% losses)</div>
                </div>
            </div>

            <h3>Key Benefits for Meralco</h3>
            <ul>
                <li><strong>Revenue protection</strong> - detect and reduce non-technical losses in real-time</li>
                <li><strong>Operational efficiency</strong> - eliminate manual transformer checks, reduce truck rolls</li>
                <li><strong>Customer satisfaction</strong> - faster fault detection = shorter outage duration</li>
                <li><strong>Safety improvement</strong> - reduce technician exposure to live transformers</li>
                <li><strong>Scalability</strong> - affordable enough to deploy across entire service territory</li>
                <li><strong>Technology transfer</strong> - build local capability vs. dependency on foreign vendors</li>
            </ul>
        </div>

        <!-- SLIDE 9: DEPLOYMENT ROADMAP -->
        <div class="slide">
            <div class="slide-number">09</div>
            <h2>Phased Deployment Strategy</h2>

            <div class="feature-box">
                <strong>Phase 1: Proof of Concept (3 months)</strong>
                Deploy 10 units on high-loss transformers | Measure NTL detection accuracy | Validate automated ticketing | ROI analysis
            </div>

            <div class="feature-box">
                <strong>Phase 2: Pilot Expansion (6 months)</strong>
                100 transformers in one district (mixed urban/rural) | Stress test LoRaWAN + LTE hybrid | Train technician teams | Refine ML models with real data
            </div>

            <div class="feature-box">
                <strong>Phase 3: Territory-Wide Rollout (12-18 months)</strong>
                Deploy across 90,000+ transformers | Full GIS integration | Regional control centers | Technology transfer to Meralco engineers
            </div>

            <h3>Regulatory Compliance</h3>
            <ul>
                <li><strong>ERC</strong> (Energy Regulatory Commission) - distribution system standards compliance</li>
                <li><strong>NTC</strong> (National Telecommunications Commission) - LoRaWAN frequency authorization</li>
                <li><strong>Philippine Electrical Code</strong> - safety and installation standards</li>
            </ul>

            <div class="highlight">
                Lower Risk | Proven ROI | Scalable Infrastructure
            </div>
        </div>

        <!-- SLIDE 10: CALL TO ACTION -->
        <div class="slide">
            <div class="slide-number">10</div>
            <h2>Why ALERT Wins</h2>

            <div class="stats-grid" style="margin-bottom: 40px;">
                <div class="stat-card" style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                    <div class="stat-number">✓</div>
                    <div class="stat-label">Proven Technology (Industry-Standard IoT)</div>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);">
                    <div class="stat-number">✓</div>
                    <div class="stat-label">Affordable for Mass Deployment</div>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                    <div class="stat-number">✓</div>
                    <div class="stat-label">Philippine-Optimized Integration</div>
                </div>
                <div class="stat-card" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
                    <div class="stat-number">✓</div>
                    <div class="stat-label">Open Architecture = Local Control</div>
                </div>
            </div>

            <h3>Our Ask</h3>
            <ul>
                <li><strong>Support for Phase 1 deployment</strong> - 10-unit pilot on Meralco transformers</li>
                <li><strong>Access to historical failure data</strong> - train predictive ML models</li>
                <li><strong>Collaboration with field teams</strong> - refine mobile app and workflows</li>
                <li><strong>Integration partnership</strong> - connect to existing IT systems</li>
            </ul>

            <div class="highlight" style="margin-top: 40px;">
                Let's Modernize Philippine Power Distribution - Affordably, Effectively, Locally
            </div>

            <p style="text-align: center; margin-top: 30px; font-size: 18px; color: #666;">
                <strong>Contact:</strong> [Your Team Name] | [Email] | [Phone]
            </p>
        </div>

    </div>
</body>
</html>
