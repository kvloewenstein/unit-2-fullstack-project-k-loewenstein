import './AboutPage.css';

function About() {
    return (
        <main className="about-wrap">
            <section className="about-box">
                <h1>About Us</h1>
                <p>
                    At Skin-Sync, we believe skincare should be simple, personalized, and stress-free.
                    Our goal is to help you understand your unique skin type and match you with products
                    that truly fit your needs. Whether you’re dealing with dryness, acne, or
                    just looking to maintain healthy skin, we make it easy to find what works for you.
                </p>
                <div className='about-img'>
                      <img src="/images/About_me.png" alt="female with moisturizer on face" />
                </div>
            </section>

            <section className='our-mission'>
                <h1>Our Mission</h1>
                <p>
                    Our mission is to empower everyone to feel confident in their own skin. We do this by
                    combining knowledge, technology, and care to deliver personalized skincare recommendations
                    that make self-care easy, effective, and accessible for all.
                </p>
                <div className='mission-img'>
                    <img src="/images/our_mission.png" alt="skin care and fruit" />
                </div>
            </section>
        </main>
    );
}

export default About;