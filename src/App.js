import React, { useState } from 'react';
import './App.css';

function App() {
  const universities = [
    { name: 'Cambridge University', location: 'UK' },
    { name: 'Harvard University', location: 'USA' },
    { name: 'University of California', location: 'USA' },
    { name: 'University of Illinois', location: 'USA' },
    { name: 'University of Queensland Australia', location: 'Australia' },
    { name: 'The University of Newcastle', location: 'Australia' },
    { name: 'Rice University', location: 'USA' },
    { name: 'University College Cork', location: 'Ireland' },
    { name: 'University of Toronto', location: 'Canada' },
    { name: 'Royal College of Surgeons in Ireland', location: 'Ireland' },
    { name: 'University of New South Wales', location: 'Australia' },
    { name: 'University of Sydney', location: 'Australia' },
    { name: 'University of Sussex', location: 'UK' },
    { name: 'Trinity College Dublin', location: 'Ireland' }
  ];

  const mentors = [
    { name: 'Shubham', university: 'Cambridge University', location: 'UK' },
    { name: 'Emma', university: 'Harvard University', location: 'USA' },
  ];


  const advisors = [

    { name: 'Paul', designation: 'Principal Project Scientist', location: 'IIT Madras' },
    // Add more advisors...
  ];
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null); 

  const handleSendMessage = () => {
    setMessage('');
    setShowMessageBox(false);
  };

  return (
    <div className="App">
      <header className="header">
      <div className="header-options">
          <div className="header-option">Home</div>
          <div className="header-option">Search Bar</div>
          <div className="header-option">User Account/Login</div>
          <div className="header-option">Call to Action</div>
          <div className="header-option">Language Selector</div>
          <div className="header-option">Contact Information</div>
        </div>
        {/* Header content */}
      </header>
      <main>
        <section className="main-section">
          <h1 className="main-heading">Learn from scientists, research scholars from top universities in the world</h1>
          <div className="universities">
            {universities.map((university, index) => (
              <div className="university-box" key={index}>
                {university.name}
              </div>
            ))}
          </div>
          <h2 className="section-heading">Meet your mentors</h2>
          <div className="mentors">
            {mentors.map((mentor, index) => (
              <div className="mentor-box" key={index}>
                <img src={`/${index + 1}.jpg`} alt={mentor.name} />
                <p>{mentor.name}, {mentor.university}, {mentor.location}</p>
                <button className="message-button" onClick={() => {
                  setSelectedMentor(mentor);
                  setShowMessageBox(true);
                }}>Send Message</button>
              </div>
            ))}
            {mentors.map((mentor, index) => (
              <div className="mentor-box" key={index}>
                <img src={`/${index + 2}.jpg`} alt={mentor.name} />
                <p>{mentor.name}, {mentor.university}, {mentor.location}</p>
                <button className="message-button" onClick={() => {
                  setSelectedMentor(mentor);
                  setShowMessageBox(true);
                }}>Send Message</button>
              </div>
            ))}
            {mentors.map((mentor, index) => (
              <div className="mentor-box" key={index}>
                <img src={`/${index + 3}.jpg`} alt={mentor.name} />
                <p>{mentor.name}, {mentor.university}, {mentor.location}</p>
                <button className="message-button" onClick={() => {
                  setSelectedMentor(mentor);
                  setShowMessageBox(true);
                }}>Send Message</button>
              </div>
            ))}
            {mentors.map((mentor, index) => (
              <div className="mentor-box" key={index}>
                <img src={`/${index + 4}.jpg`} alt={mentor.name} />
                <p>{mentor.name}, {mentor.university}, {mentor.location}</p>
                <button className="message-button" onClick={() => {
                  setSelectedMentor(mentor);
                  setShowMessageBox(true);
                }}>Send Message</button>
              </div>
            ))}
            {mentors.map((mentor, index) => (
              <div className="mentor-box" key={index}>
                <img src={`/${index + 5}.jpg`} alt={mentor.name} />
                <p>{mentor.name}, {mentor.university}, {mentor.location}</p>
                <button className="message-button" onClick={() => {
                  setSelectedMentor(mentor);
                  setShowMessageBox(true);
                }}>Send Message</button>
              </div>
            ))}
            {mentors.map((mentor, index) => (
              <div className="mentor-box" key={index}>
                <img src={`/${index + 6}.jpg`} alt={mentor.name} />
                <p>{mentor.name}, {mentor.university}, {mentor.location}</p>
                <button className="message-button" onClick={() => {
                  setSelectedMentor(mentor);
                  setShowMessageBox(true);
                }}>Send Message</button>
              </div>
            ))}
          </div>
          <h2 className="section-heading">Mentor and Advisor</h2>
          <div className="advisors">
            {advisors.map((advisor, index) => (
              <div className="advisor-box" key={index}>
                <img src={`/${index + 7}.jpg`} alt={advisor.name} />
                <p>{advisor.name}, {advisor.designation}</p>
                <button className="message-button" onClick={() => {
                  setSelectedMentor(advisor);
                  setShowMessageBox(true);
                }}>Send Message</button>
              </div>
            ))}
             {advisors.map((advisor, index) => (
              <div className="advisor-box" key={index}>
                <img src={`/${index + 8}.jpg`} alt={advisor.name} />
                <p>{advisor.name}, {advisor.designation}</p>
                <button className="message-button" onClick={() => {
                  setSelectedMentor(advisor);
                  setShowMessageBox(true);
                }}>Send Message</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        {/* Footer content */}
        <div className="footer-options">
          <div className="footer-option">Course Categories</div>
          <div className="footer-option">Recent Blog Posts</div>
          <div className="footer-option">Newsletter Signup</div>
          <div className="footer-option">Social Media Links</div>
          <div className="footer-option">Contact Information</div>
          <div className="footer-option">Copyright & Legal</div>
          <div className="footer-option">Payment & Security Icons</div>
          <div className="footer-option">Testimonials</div>
        </div>
      </footer>
      {showMessageBox && selectedMentor && (
        <div className="message-box">
          <button className="close-button" onClick={() => setShowMessageBox(false)}>Close</button>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-button" onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
}
export default App;
