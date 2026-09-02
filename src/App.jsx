
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle2, CircuitBoard, Clock3, Mail, MapPin,
  Microwave, Phone, ShieldCheck, Snowflake, WashingMachine, Wrench
} from "lucide-react";

import washer from "./assets/washer-front.jpg";
import refrigeration from "./assets/refrigeration.jpg";
import pressure from "./assets/pressure-test.jpg";
import compressors from "./assets/compressors.jpg";
import fridge from "./assets/fridge-interior.jpg";
import diagnostics from "./assets/diagnostics.jpg";
import microwaveImg from "./assets/microwave.jpg";

const PHONE = "0655368362";
const PHONE_LABEL = "065 536 8362";
const EMAIL = "juscardngoma44@gmail.com";

const services = [
  {
    icon: Snowflake,
    title: "Fridges & Freezers",
    text: "Cooling problems, leaks, compressor issues and electrical faults."
  },
  {
    icon: WashingMachine,
    title: "Washing Machines",
    text: "Drainage, spinning, control-board and other electrical problems."
  },
  {
    icon: Microwave,
    title: "Microwaves",
    text: "Heating faults, electrical problems and general microwave repairs."
  },
  {
    icon: Wrench,
    title: "Kettles + More",
    text: "Kettles and other household electrical appliances."
  }
];

const areas = [
  "Sandton","Randburg","Alberton","The Glen","Germiston","Roodepoort",
  "Linmeyer","Kensington","Yeoville","Glenvista","Malbaton","Rivonia",
  "Meyersdal","Rosebank","Borsbank"
];

const work = [
  {src: pressure, label:"Pressure testing", caption:"Refrigeration pressure testing and system checks."},
  {src: refrigeration, label:"Refrigeration systems", caption:"Hands-on repair work inside cooling equipment."},
  {src: diagnostics, label:"Electrical diagnostics", caption:"Testing appliance control boards and electrical components."},
  {src: compressors, label:"Compressor work", caption:"Inspection and repair around compressor systems."},
  {src: fridge, label:"Fridge interiors", caption:"Cooling-system inspection inside refrigeration units."},
  {src: microwaveImg, label:"Microwave repair", caption:"Microwave electrical and heating-system repair work."}
];

const reveal = {
  hidden:{opacity:0,y:26},
  show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}}
};

function Reveal({children, delay=0, className=""}){
  const ref = useRef(null);
  const inView = useInView(ref,{once:true,margin:"-80px"});
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView?"show":"hidden"}
      variants={{
        hidden:{opacity:0,y:28},
        show:{opacity:1,y:0,transition:{duration:.6,delay,ease:[.22,1,.36,1]}}
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App(){
  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>24);
    onScroll();
    window.addEventListener("scroll",onScroll);
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  const scrollTo=(id)=>{
    document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});
  };

  return (
    <div className="site">
      <header className={`nav ${scrolled?"nav-scrolled":""}`}>
        <button className="brand" onClick={()=>scrollTo("top")}>
          <span className="brand-mark">J</span>
          <span>J NGOMA</span>
        </button>

        <nav>
          <button onClick={()=>scrollTo("services")}>Services</button>
          <button onClick={()=>scrollTo("work")}>Our Work</button>
          <button onClick={()=>scrollTo("areas")}>Areas</button>
          <button onClick={()=>scrollTo("contact")}>Contact</button>
        </nav>

        <a className="call-pill" href={`tel:${PHONE}`}>
          <Phone size={14}/> Call {PHONE_LABEL}
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div className="hero-copy" initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{duration:.75,ease:[.22,1,.36,1]}}>
            <span className="badge">ON-SITE APPLIANCE REPAIRS</span>
            <h1>Broken appliance?<br/>We come to you.</h1>
            <p>
              Reliable repairs for fridges, washing machines, microwaves,
              kettles and other household electrical appliances.
            </p>

            <div className="hero-actions">
              <motion.a whileHover={{scale:1.025}} whileTap={{scale:.98}} className="btn btn-dark" href={`tel:${PHONE}`}>
                Call for a repair <ArrowRight size={16}/>
              </motion.a>
              <motion.button whileHover={{scale:1.025}} whileTap={{scale:.98}} className="btn btn-light" onClick={()=>scrollTo("work")}>
                View our work
              </motion.button>
            </div>

            <div className="hero-meta">
              <span><Clock3 size={15}/> Open daily 8:00 AM–6:00 PM</span>
              <span><MapPin size={15}/> Mobile service — we travel to you</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{opacity:0,scale:.96}}
            animate={{opacity:1,scale:1}}
            transition={{duration:.8,delay:.12,ease:[.22,1,.36,1]}}
          >
            <img src={washer} alt="Washing machine repaired by J Ngoma"/>
            <motion.div className="floating-card" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.65,duration:.55}}>
              <ShieldCheck size={20}/>
              <div>
                <strong>Real repair experience</strong>
                <span>Client-supplied work photos</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="intro-strip">
          <Reveal>
            <span className="section-kicker light">WHAT WE DO</span>
            <h2>One repair service. More of your home covered.</h2>
            <p>
              The service goes beyond fridges. J Ngoma works on several common household appliances
              and comes to the customer’s location.
            </p>
          </Reveal>
        </section>

        <section className="services-section" id="services">
          <Reveal>
            <span className="section-kicker">WHAT WE REPAIR</span>
            <h2>Home appliance repair experience.</h2>
          </Reveal>

          <div className="service-grid">
            {services.map(({icon:Icon,title,text},i)=>(
              <motion.article
                key={title}
                initial={{opacity:0,y:34}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true,margin:"-70px"}}
                transition={{duration:.55,delay:i*.08,ease:[.22,1,.36,1]}}
                whileHover={{y:-8}}
              >
                <span className="service-number">0{i+1}</span>
                <span className="icon-box"><Icon size={23}/></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="technical">
          <motion.div
            className="technical-photo"
            initial={{opacity:0,x:-30}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true,margin:"-100px"}}
            transition={{duration:.65}}
          >
            <img src={refrigeration} alt="Refrigeration repair system"/>
          </motion.div>

          <Reveal className="technical-copy">
            <span className="section-kicker">TECHNICAL WORK</span>
            <h2>More than replacing parts.</h2>
            <p>
              Appliance repair can involve electrical testing, control boards,
              refrigeration pressure checks, compressor systems and internal components.
            </p>

            <div className="technical-points">
              <span><CircuitBoard size={17}/> Electrical fault finding</span>
              <span><Wrench size={17}/> Mechanical repair work</span>
              <span><CheckCircle2 size={17}/> Appliance diagnostics</span>
            </div>
          </Reveal>
        </section>

        <section className="work-section" id="work">
          <Reveal className="work-heading">
            <div>
              <span className="section-kicker green">REAL WORK. REAL REPAIRS.</span>
              <h2>See the work behind the service.</h2>
            </div>
            <p>
              These are real images supplied by the client showing appliance
              repair, refrigeration and electrical diagnostic work.
            </p>
          </Reveal>

          <div className="work-grid">
            {work.map((item,i)=>(
              <motion.figure
                key={item.label}
                className={i===0 || i===5 ? "work-card wide" : "work-card"}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true,margin:"-60px"}}
                transition={{duration:.55,delay:(i%3)*.06}}
                whileHover="hover"
              >
                <motion.img
                  src={item.src}
                  alt={item.label}
                  variants={{hover:{scale:1.045}}}
                  transition={{duration:.45,ease:[.22,1,.36,1]}}
                />
                <div className="work-overlay"/>
                <figcaption>
                  <span>0{i+1}</span>
                  <div>
                    <strong>{item.label}</strong>
                    <small>{item.caption}</small>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section className="areas-section" id="areas">
          <Reveal>
            <span className="section-kicker">WE COME TO YOU</span>
            <h2>Appliance repairs across Johannesburg.</h2>
            <p className="areas-copy">
              No need to transport a heavy appliance. Juscard travels to customers across these service areas.
            </p>
          </Reveal>

          <div className="areas-grid">
            {areas.map((area,i)=>(
              <motion.span
                key={area}
                initial={{opacity:0,scale:.92}}
                whileInView={{opacity:1,scale:1}}
                viewport={{once:true}}
                transition={{duration:.35,delay:(i%6)*.035}}
              >
                <MapPin size={13}/>{area}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <Reveal className="contact-copy">
            <span className="section-kicker light">NEED A REPAIR?</span>
            <h2>Let’s get your appliance working again.</h2>
            <p>
              J Ngoma Fridge Repair is available daily from 8:00 AM to 6:00 PM
              and travels to customers for appliance repairs.
            </p>
          </Reveal>

          <motion.div
            className="contact-card"
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true,margin:"-80px"}}
            transition={{duration:.6}}
          >
            <span className="contact-label">NGOMA JUSCARD</span>
            <a className="phone-link" href={`tel:${PHONE}`}>{PHONE_LABEL}</a>
            <a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>

            <div className="contact-actions">
              <a href={`tel:${PHONE}`}><Phone size={17}/> Call now</a>
              <a href={`mailto:${EMAIL}`}><Mail size={17}/> Send email</a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer>
        <strong>J NGOMA FRIDGE REPAIR</strong>
        <span>Fridges • Washing machines • Microwaves • Kettles • More</span>
      </footer>
    </div>
  );
}
