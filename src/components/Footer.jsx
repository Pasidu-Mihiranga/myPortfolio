import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/pasidu-mihiranga-95b3992b5'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/Pasidu-Mihiranga'
    },
    {
      name: 'Email',
      icon: <MdEmail className="w-6 h-6" />,
      url: 'mailto:ipamihir2003@gmail.com'
    },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contacts' },
  ]

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* About Section */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold font-['Inter'] text-base-content">
              Pasindu Mihiranga
            </h3>
            <p className="text-base-content/70 font-['Poppins'] text-sm leading-relaxed">
              Information Technology Undergraduate at University of Moratuwa. 
              Passionate about programming, web development, and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-bold font-['Poppins'] text-base-content">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-base-content/70 font-['Poppins'] text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-bold font-['Poppins'] text-base-content">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-content/70 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-base-content/70 font-['Poppins'] text-sm">
              <p className="font-medium mb-1">Email:</p>
              <a
                href="mailto:ipamihir2003@gmail.com"
                className="hover:text-primary transition-colors"
              >
                ipamihir2003@gmail.com
              </a>
            </div>
            <div className="text-base-content/70 font-['Poppins'] text-sm">
              <p className="font-medium mb-1">Phone:</p>
              <a
                href="tel:+94760554321"
                className="hover:text-primary transition-colors"
              >
                +94 76 055 4321
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-base-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base-content/70 font-['Poppins'] text-sm text-center md:text-left">
              © {currentYear} Pasindu Mihiranga. All rights reserved.
            </p>
            <p className="text-base-content/70 font-['Poppins'] text-sm text-center md:text-right">
              Built with React, Tailwind CSS & DaisyUI
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

