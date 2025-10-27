import { useState } from 'react'
import { MdEmail, MdPhone, MdCode, MdWork } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: <MdEmail className="w-8 h-8" />,
      label: "Email",
      value: "ipamihir2003@gmail.com",
      link: "mailto:ipamihir2003@gmail.com"
    },
    {
      icon: <MdPhone className="w-8 h-8" />,
      label: "Phone",
      value: "+94 76 055 4321",
      link: "tel:+94760554321"
    },
    {
      icon: <FaGithub className="w-8 h-8" />,
      label: "GitHub",
      value: "github.com/Pasidu-Mihiranga",
      link: "https://github.com/Pasidu-Mihiranga"
    },
    {
      icon: <FaLinkedin className="w-8 h-8" />,
      label: "LinkedIn",
      value: "linkedin.com/in/pasidu-mihiranga",
      link: "https://www.linkedin.com/in/pasidu-mihiranga-95b3992b5"
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const form = e.target
    const formData = {
      from_name: form.name.value,
      from_email: form.email.value,
      message: form.message.value,
    }

    // Check if EmailJS credentials are configured
    const SERVICE_ID = 'service_py9tfj1'
    const TEMPLATE_ID = 'template_ccc662u'
    const PUBLIC_KEY = 'p-Yg_bbse_2LRxF_F'

    if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setIsSubmitting(false)
      setSubmitStatus({ 
        type: 'error', 
        message: 'Email service not configured yet. Please contact me directly at ipamihir2003@gmail.com' 
      })
      return
    }

    try {
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        user_name: formData.from_name,
        user_email: formData.from_email,
        name: formData.from_name,
        email: formData.from_email,
        message: formData.message,
        to_email: 'ipamihir2003@gmail.com',
        reply_to: formData.from_email,
      }

      console.log('Sending email with params:', templateParams)

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will reply soon.' })
        form.reset()
      }
    } catch (error) {
      console.error('Error sending email:', error)
      let errorMessage = 'Failed to send message. '
      
      // Provide more specific error messages
      if (error.text) {
        if (error.text.includes('insufficient authentication scopes')) {
          errorMessage += 'Gmail authentication issue. Please reconnect your Gmail account in EmailJS and grant all permissions. Error: Gmail needs re-authentication.'
        } else if (error.text.includes('Invalid service ID')) {
          errorMessage += 'Invalid Service ID. Please check your EmailJS configuration.'
        } else if (error.text.includes('Invalid template ID')) {
          errorMessage += 'Invalid Template ID. Please check your EmailJS configuration.'
        } else if (error.text.includes('Invalid public key')) {
          errorMessage += 'Invalid Public Key. Please check your EmailJS configuration.'
        } else {
          errorMessage += `Error: ${error.text}`
        }
      } else {
        errorMessage += 'Please contact me directly at ipamihir2003@gmail.com or try again later.'
      }
      
      console.log('Full error details:', error)
      
      setSubmitStatus({ type: 'error', message: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen py-32 px-6 md:px-12 lg:px-16 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold font-['Poppins'] text-base-content mb-16 animate-fade-in">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h3 className="text-3xl font-bold font-['Poppins'] text-base-content">
              Let's Connect
            </h3>
            <p className="text-base-content/70 text-lg font-['Poppins']">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-base-100 rounded-box hover:shadow-lg transition-all"
                >
                  <div className="text-primary">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-base-content/70 font-['Poppins'] text-sm">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-base-content font-['Poppins'] font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base-content font-['Poppins'] font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="card-body">
              <h3 className="card-title text-2xl font-bold font-['Poppins'] text-base-content mb-4">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus && (
                  <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      {submitStatus.type === 'success' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                    <span className="font-['Poppins']">{submitStatus.message}</span>
                  </div>
                )}
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-['Poppins']">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-['Poppins']">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-['Poppins']">Message</span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered h-32"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
