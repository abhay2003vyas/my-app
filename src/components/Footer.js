import React from 'react';
import { 
MessageCircle,
Phone,
} from 'lucide-react';

const Footer = () => {

  return (
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">BIT PrintHub</h3>
              <p className="text-gray-400 mb-4">
                24/7 printing solutions for BIT students. Fast, reliable, and affordable printing services 
                delivered right to your hostel.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">WhatsApp</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Document Printing</li>
                <li className="text-gray-400">Photo Prints</li>
                <li className="text-gray-400">Spiral Binding</li>
                <li className="text-gray-400">Gift Cards</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 BIT PrintHub. All rights reserved. Made with ❤️ by BIT students for BIT students.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;