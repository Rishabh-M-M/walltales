import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeInputs, setActiveInputs] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleInputFocus = (field) => {
    setActiveInputs(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleInputBlur = (field) => {
    if (!formData[field]) {
      setActiveInputs(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [submissionError, setSubmissionError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    setSubmissionError(null);

    const submissionData = {
      ...formData,
      access_key: "fd4ade92-74b9-4e9f-9ac6-4e4b598cab96",
      subject: "Contact Form Submission",
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmissionError(errorData.message || 'Submission failed');
      }
    } catch (error) {
      setSubmissionError('Network error occurred. Please try again.');
    }
  };



  return (
    <div className="min-h-screen bg-teal-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
        {/* Title */}
        <h1 className="col-span-full text-3xl font-bold p-7 text-black rounded-t-lg border-b">
          Contact Details:
        </h1>

        {/* Form Section */}
        <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="p-7 space-y-6">
          <input type="hidden" name="access_key" value="fd4ade92-74b9-4e9f-9ac6-4e4b598cab96" />
          <input type="hidden" name="subject" value="Contact Form Submission" />
          <input type="hidden" name="redirect" value="/walltales/" />

          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('name')}
              onBlur={() => handleInputBlur('name')}
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-teal-500 transition-colors bg-transparent"
              required
            />
            <label className={`absolute left-0 transition-all duration-300 pointer-events-none 
              ${activeInputs.name || formData.name ? 'text-xs -top-4 text-teal-500' : 'top-2 text-gray-500'}`}>
              Full name
            </label>
          </div>

          {/* Number Input */}
          <div className="relative">
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('phone')}
              onBlur={() => handleInputBlur('phone')}
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-teal-500 transition-colors bg-transparent"
              required
            />
            <label className={`absolute left-0 transition-all duration-300 pointer-events-none 
              ${activeInputs.phone || formData.phone ? 'text-xs -top-4 text-teal-500' : 'top-2 text-gray-500'}`}>
              Phone number
            </label>
          </div>


          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('email')}
              onBlur={() => handleInputBlur('email')}
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-teal-500 transition-colors bg-transparent"
              required
            />
            <label className={`absolute left-0 transition-all duration-300 pointer-events-none 
              ${activeInputs.email || formData.email ? 'text-xs -top-4 text-teal-500' : 'top-2 text-gray-500'}`}>
              Email address
            </label>
          </div>

          {/* Message Input */}
          <div className="relative">
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('message')}
              onBlur={() => handleInputBlur('message')}
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-teal-500 transition-colors bg-transparent"
              required
            />
            <label className={`absolute left-0 transition-all duration-300 pointer-events-none 
              ${activeInputs.message || formData.message ? 'text-xs -top-4 text-teal-500' : 'top-2 text-gray-500'}`}>
              Your message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-md shadow-md hover:bg-teal-600 transition-colors"
          >
            Submit
          </button>
          {isSubmitted && <p className="text-green-500">Your message was sent successfully!</p>}
          {submissionError && <p className="text-red-500">{submissionError}</p>}
        </form>

        {/* Mail Icon Section */}
        <div className="hidden md:flex items-center justify-center p-7">
          <div className="container-mail">
            <div className={`mail ${isSubmitted ? 'active' : ''}`}>
              <div className="mail__back"></div>
              <div className={`mail__top ${isSubmitted ? 'closed' : ''}`}></div>
              <div className={`mail__letter ${isSubmitted ? 'move' : ''}`}>
                <div className="mail__letter-square"></div>
                <div className="mail__letter-lines"></div>
              </div>
              <div className="mail__left"></div>
              <div className="mail__right"></div>
              <div className="mail__bottom"></div>
            </div>
          </div>
        </div>

        <style jsx>{`
.container-mail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 310px; /* 310px * 1.5 */
  height: 280px; /* 280px * 1.5 */
  margin-bottom: 60px; /* 40px * 1.5 */
}

.mail {
  position: relative;
  top: -60px; /* -40px * 1.5 */
  left: -120px; /* -60px * 1.5 */
}

.mail__back {
  position: absolute;
  background: #008080; /* Teal */
  width: 240px; /* 160px * 1.5 */
  height: 150px; /* 100px * 1.5 */
  box-shadow: 0 1.5px 15px rgba(0, 0, 0, 0.3); /* Increased shadow size */
}

.mail__top {
  position: absolute;
  top: -85.5px; /* -57px * 1.5 */
  width: 0;
  height: 0;
  border-right: 120px solid transparent; /* 80px * 1.5 */
  border-left: 120px solid transparent; /* 80px * 1.5 */
  border-bottom: 87px solid #008080; /* Teal, 58px * 1.5 */
  z-index: 0;
  transition: transform 0.6s 0.8s, z-index 0.2s 0.4s;
}

.mail__top.closed {
  z-index: 2;
  transition-delay: 0.5s;
  transform-origin: bottom left;
  transform: rotate3d(1, 0, 0, 180deg);
}

.mail__left {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 120px solid #20b2aa; /* Lighter teal, 80px * 1.5 */
  border-top: 75px solid transparent; /* 50px * 1.5 */
  border-bottom: 75px solid transparent; /* 50px * 1.5 */
}

.mail__right {
  position: absolute;
  left: 120px; /* 80px * 1.5 */
  width: 0;
  height: 0;
  border-right: 120px solid #20b2aa; /* Lighter teal, 80px * 1.5 */
  border-top: 75px solid transparent; /* 50px * 1.5 */
  border-bottom: 75px solid transparent; /* 50px * 1.5 */
}

.mail__bottom {
  position: absolute;
  top: 73.8px; /* 49.2px * 1.5 */
  width: 0;
  height: 0;
  border-right: 120px solid transparent; /* 80px * 1.5 */
  border-left: 120px solid transparent; /* 80px * 1.5 */
  border-bottom: 76.2px solid #40e0d0; /* Even lighter teal, 50.8px * 1.5 */
}

.mail__letter {
  position: absolute;
  top: -60px; /* -40px * 1.5 */
  left: 30px; /* 20px * 1.5 */
  width: 180px; /* 120px * 1.5 */
  height: 135px; /* 90px * 1.5 */
  background: white;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15); /* Increased shadow size */
  overflow: hidden;
  transition: all 0.8s ease;
}

.mail__letter.move {
  transform: translateY(67.5px); /* 45px * 1.5 */
}

.mail__letter-square {
  position: absolute;
  top: 45px; /* 30px * 1.5 */
  left: 15px; /* 10px * 1.5 */
  width: 57px; /* 38px * 1.5 */
  height: 60px; /* 40px * 1.5 */
  background: #e0e0e0;
}

.mail__letter-square::before {
  content: "";
  position: absolute;
  top: -30px; /* -20px * 1.5 */
  width: 150px; /* 100px * 1.5 */
  height: 22.5px; /* 15px * 1.5 */
  background: #e0e0e0;
}

.mail__letter-lines {
  position: absolute;
  top: 73.5px; /* 49px * 1.5 */
  left: 87px; /* 58px * 1.5 */
  width: 75px; /* 50px * 1.5 */
  height: 4.5px; /* 3px * 1.5 */
  background: #e0e0e0;
}

.mail__letter-lines::before,
.mail__letter-lines::after {
  content: "";
  position: absolute;
  width: 75px; /* 50px * 1.5 */
  height: 4.5px; /* 3px * 1.5 */
  background: #e0e0e0;
}

.mail__letter-lines::before {
  top: -15px; /* -10px * 1.5 */
}

.mail__letter-lines::after {
  top: 15px; /* 10px * 1.5 */
}


        `}</style>
      </div>
    </div>
  );
};

export default ContactForm;