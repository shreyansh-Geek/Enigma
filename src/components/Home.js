import React from "react";
import { motion } from "framer-motion"; // For animations
import "./Home.css"; // Custom styles
import Logo from "../Assets/Logo.png"; // Club logo
import {
  FaLinkedin,
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa"; // Font Awesome Icons
import Rahul from "../Assets/Rahul.png"; // Example team image (replace with actual)
import Priyanshu from "../Assets/Priyanshu.png";
import triptimam from "../Assets/triptimam.jpeg";
import oshika from "../Assets/oshika.jpeg";
import about from "../Assets/aboutnew.png";
import shreyansh from "../Assets/shreyanshp.png";
import vedant from "../Assets/vedant.jpg";
import jayesh from "../Assets/jayesh.jpg";
import dummy from "../Assets/dummy.png";
import aadarsh from "../Assets/adarsh.jpg";
import rafiya from "../Assets/rafiya.jpg";
import tanmay from "../Assets/tanmay.jpg";
import tanu from "../Assets/tanu.jpg";
import khushbu from "../Assets/khushbu.jpg";
import kashish from "../Assets/kashish.jpg";
import anish from "../Assets/anish.jpg";
import poster from "../Assets/CodeQuest.jpeg";
import vision from "../Assets/targeting.png";
import mission from "../Assets/mission.png";
import objective from "../Assets/trophy.png";



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        {/* Logo Animation */}
        <div
          className="logo-container"
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{ type: "spring", stiffness: 0, duration: 0 }}
        >
          <img src={Logo} alt="Enigma Logo" className="cp-logo" />
          <div className="club-info">
            <h1 className="club-name">Enigma</h1>
            <p className="club-subtitle">AIML Club of LNCT</p>
            <p className="club-tagline">
              A playground where ideas meet data — learn, build, and deploy
              intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
<section className="about-us" id="about">
  <motion.div
    className="about-header"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2>About the Club</h2>
    <p>
      We empower students to explore Artificial Intelligence and Machine Learning 
      through hands-on workshops, collaborative open-source projects, competitive hackathons, 
      and impactful research initiatives.
    </p>
  </motion.div>

  <div className="about-grid">
    {/* Vision */}
    <motion.div
      className="about-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="about-icon">
        <img src={vision} alt="Vision Icon" />
      </div>
      <h3>Vision</h3>
      <p>
        To inspire a generation of thinkers, builders, and dreamers who use AI and ML to create a smarter, more meaningful world.
      </p>
    </motion.div>

    {/* Mission */}
    <motion.div
      className="about-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="about-icon">
        <img src={mission} alt="Mission Icon" />
      </div>
      <h3>Mission</h3>
      <p>
        We aim to build a community where learning is not a race, but a journey — where every idea matters, and every learner grows with purpose.
      </p>
    </motion.div>

    {/* Objectives */}
    <motion.div
      className="about-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="about-icon">
        <img src={objective} alt="Objectives Icon" />
      </div>
      <h3>Objectives</h3>
      <p>
        Host events, build projects, publish research, and connect with industry partners.
      </p>
    </motion.div>
  </div>
</section>

      {/* Upcoming Events Section */}
      {/* Upcoming Events Section */}
<section className="events-section" id="events">
  <h2 className="events-title">Upcoming Events</h2>

  <div className="event-card">
    {/* single inner row that holds two side-by-side divs */}
    <div className="event-row">
      <div className="event-left">
        <img src={poster} alt="CodeQuest 1 Poster" />
      </div>

      <div className="event-right">
        <h3>CodeQuest 1 : Coding Contest</h3>

        <ul>
          <li><strong>Date:</strong> 31 January 2026</li>
          <li><strong>Time:</strong> 9:00 PM – 10:30 PM</li>
          <li><strong>Venue:</strong> Online</li>
        </ul>

        <p className="event-desc">
          Compete with your peers, sharpen your skills, and see where you stand in this
          beginner friendly 1 Hour contest.Join anytime between 9:00 PM to 9:30 PM. 
        </p>

        <a
          href="https://luma.com/bootkui1"
          target="_blank"
          rel="noopener noreferrer"
          className="event-btn"
        >
          Register on Luma
        </a>
      </div>
    </div>
  </div>
</section>


      <br />
      <br />
      {/* Featured Projects Section */}
      <section className="card-grid-section">
        <h2 className="section-title">Featured Projects</h2>

        <div className="card-grid">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3>Smart Tourist Safety System</h3>
            <p>
              An IoT + ML system for tourist safety with anomaly detection and
              multilingual alerts.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3>Sentiment Analyzer</h3>
            <p>
              A real-time social media sentiment pipeline using NLP and visual
              dashboards.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3>Medical Image Classifier</h3>
            <p>
              Prototype model to assist in screening using CNNs and
              explainability tools.
            </p>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h3>Recommender Engine</h3>
            <p>
              Personalized recommendation system built with collaborative
              filtering and embeddings.
            </p>
          </motion.div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Our Team Section */}
      <section className="our-team">
        <h2>Our Team</h2>
        <br />
        <br />

        <div className="coordinator">
          <img src={triptimam} alt="Faculty Coordinator" />
          <h3>Dr. Tripti Saxena</h3>
          <p>Faculty Coordinator</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/dr-tripti-saxena-3b4a9018b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" /> 
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

       
        {/* Team Grid */}
        <div className="team-grid">
           <div className="team-member">
            <img src={Priyanshu} alt="President - Enigma" />
            <h3>
              Priyanshu Lohani
              <p>Founder</p>
              <a href="https://www.linkedin.com/in/priyanshulohani/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/iamlohanip" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/PriDev07" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" /> 
              </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://instagram.com/priyanshulohanii" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </h3>

            <p className="role">President</p>
            <div className="social-media"></div>
         </div>
          {/* Team Member 1 */}
          <div className="team-member">
            <img src={oshika} alt="President - Enigma" />
            <h3>
              Oshika Jain
              <p>President</p>
              <a
                href="https://www.linkedin.com/in/oshika-jain-977b29281/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://x.com/Oshika48526"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icon" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://github.com/jainoshika"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-icon" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://www.instagram.com/oshikaa.a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
            </h3>

            <p className="role">President</p>
            <div className="social-media"></div>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <img src={Rahul} alt="Vice President - Enigma" />
            <h3>
              Rahul Lodhi
              <p>Vice President</p>
              <a
                href="https://linkedin.com/in/rahullodhisdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://twitter.com/Rahul_P_A_S"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icon" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://github.com/RahulLodhi0405"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-icon" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href="https://instagram.com/rahullodhi.27"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
            </h3>

            <p className="role">Vice President</p>
            <div className="social-media"></div>
          </div>
        
       
           
         </div>
      </section>

      <div className="coordinators-grid coordinators-grid-senior">
        <div className="coordinator">
          <img src={shreyansh} alt="Tech Lead" />
          <h3>Tech Lead</h3>
          <p>Shreyansh Pandit</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/shreyansh-pandit-1b47b2203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://twitter.com/Shreyanshloop07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/shreyansh-Geek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="coordinator">
          <img src={vedant} alt="Research Head" />
          <h3>Research Head</h3>
          <p>Vedant Saubhri</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/vedant-saubhri-205910288/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://x.com/vedant_7115?s=11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/vedant7115"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.instagram.com/vedant_7115/?igsh=MXg4czRlM2g1MmNqNQ%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="coordinator">
          <img src={jayesh} alt="Event Head" />
          <h3>Event Head</h3>
          <p>Jayesh Manjwani</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/jayeshmanjwani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/jayeshmanjwani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://instagram.com/jayeshmanjwani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
        
{/*
        <div className="coordinator">
          <img src={dummy} alt="Event Manager" />
          <h3>Social Media Manager</h3>
          <p>Riya Palod</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
        */}
      </div>

      <div className="coordinators-grid coordinators-grid-junior">

        <div className="coordinator">
          <img src={kashish} alt="Tech team" />
          <h3>Secretary</h3>
          <p>Kashish Kamaal</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/kashishkamaal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://x.com/KashishKamaal?t=01F-8pQdCBHvb7VfUfi3RA&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/its-kashishk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.instagram.com/its.kashishk/?igsh=MXN6MG91NGhzYzFlbA%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="coordinator">
          <img src={aadarsh} alt="Tech team" />
          <h3>Tech Team</h3>
          <p>Aadarsh Malviya</p>
          <div className="social-media">
            <a
              href=" https://www.linkedin.com/in/aadarsh-malviya/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://x.com/Mlaa020321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/Malviyaaadarsh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href=" https://www.instagram.com/m.laa_21/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="coordinator">
          <img src={rafiya} alt="Research team" />
          <h3>Research Team</h3>
          <p>Rafiya Ansari</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/rafiya-ansari20/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/vedant7115"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="coordinator">
          <img src={tanmay} alt="Event Manager" />
          <h3>Event Manager</h3>
          <p>Tanmay Parashar</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/tanmay-parashar-360642385/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.instagram.com/sneegsneak/?igsh=MTNyN293Y2RmZ2UycA%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="coordinator">
          <img src={tanu} alt="content writer" />
          <h3>Content Writer</h3>
          <p>Tanu Dubey</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/tanu-dubey-46886a2b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com/tanuDubey-077"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="coordinator">
          <img src={anish} alt="Graphic Designer" />
          <h3>Graphic Designer</h3>
          <p>Anish Kumar</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href=" https://www.instagram.com/mr.ak_r_a_j_p_u_t?igsh=OWIxeWk4dnpqM2h0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="coordinator">
          <img src={khushbu} alt="Event Manager" />
          <h3>Video Editor</h3>
          <p>Khushbu Patil</p>
          <div className="social-media">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://x.com/Khushbu121005?t=psp7BpkUFEfoNjKErltXUA&s=09 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

{/* Neon gradient line */}
<div className="neon-divider"></div>

      {/*
      <section className="contact-section">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="contact-heading">Get in Touch</h2>
          <form className="contact-form" action="https://formspree.io/f/xbljykqe" method="POST">
            <div className="form-group">
              <input type="text" id="name" name="name" required placeholder="Your Name" className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder="Your Email" className="form-input" />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" required placeholder="Your Message" className="form-input"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="submit-button"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>
*/}
     <section className="sliding-images-section">
  <div className="sliding-images">
    <div className="image-container-left-to-right">
      <img
        src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 1"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 2"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 3"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010128.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 4"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 5"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040433.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 6"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 7"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/ai-site-helping-with-software-production_1268-21620.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 8"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062006.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 9"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/male-programmer-coding-laptop_482257-87912.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 10"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150038840.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 11"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010115.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 12"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-software-code-application-technology-concept_53876-123931.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 13"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061960.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 14"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18932.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 15"
        className="sliding-image"
      />
    </div>
  </div>
</section>



<section className="sliding-images-section">
  <div className="sliding-images">
    <div className="image-container-right-to-left">
      <img
        src="https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18932.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 1"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/freelancing-cybersecurity-admin-using-computer-prevent-cyber-attacks_482257-82942.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 2"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/cyber-attack-with-unrecognizable-hooded-hacker-using-virtual-reality-digital-glitch-effect_146671-18951.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 3"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 4"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040413.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 5"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-concept_23-2150170131.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 6"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901781.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 7"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/software-programming-web-development-concept_53876-176752.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 8"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-124783.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 9"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/team-database-admins-analyzing-source-code-wall-screen-tv-comparing-errors-using-digital-tablet-busy-server-room-two-cloud-programers-debugging-algorithm-software-innovation-office_482257-43976.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 10"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-124097.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 11"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040431.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 12"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010119.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 13"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-concept_23-2150170126.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 14"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18932.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 15"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18932.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 16"
        className="sliding-image"
      />
    </div>
  </div>
</section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Footer Section */}
      <footer>
        <div className="footer-content">
          {/* Social Links Section */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <a href="https://www.linkedin.com/company/enigma-aiml-club/about/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.instagram.com/enigma_lnct" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://chat.whatsapp.com/G2fdYwTNgdwAjg0mERGtfQ?mode=wwt" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon" />
            </a>
            <a href="https://x.com/enigma_lnct" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              Email:{" "}
              <a href="mailto:enigmaaimlclub@gmail.com">
                enigmaaimlclub@gmail.com
              </a>
            </p>
            <p>Phone: +91 93688 26185</p>
            <p>Location: LNCT College, Raisen Road, Bhopal - 462022</p>
          </div>

          <div className="footer-map">
            <iframe
              title="club-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58652.430412086!2d77.44852714863279!3d23.251204200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4244c97d6f29%3A0x72457a4e85fd116c!2z4KSP4KSy4KSP4KSo4KS44KWA4KSf4KWAIOCkl-CljeCksOClgeCkqiDgpJHgpKsg4KSV4KWJ4KSy4KWH4KSc4KWH4KS4!5e0!3m2!1shi!2sin!4v1759560914642!5m2!1shi!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Enigma – AIML Club | All Rights Reserved</p>
          <div className="footer-terms">
            <a href="/privacy-policy">Privacy Policy</a> |{" "}
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
