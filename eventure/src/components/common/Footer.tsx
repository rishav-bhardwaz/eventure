import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full pt-20">
      <div className="w-full bg-[#FFE45C] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-md">
              <h2 className="text-2xl font-semibold mb-2">Subscribe to our Newsletter</h2>
              <p className="text-gray-700">
                Receive our weekly newsletter & updates with new events from your favourite organizers & venues.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your e-mail address"
                className="w-full md:w-80 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2A2B3C]"
              />
              <button 
                className="px-6 py-2 bg-[#2A2B3C] text-white rounded-md hover:bg-[#2A2B3C]/90 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#2A2B3C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Account Support</a></li>
                <li><a href="#" className="hover:underline">Listing Events</a></li>
                <li><a href="#" className="hover:underline">Event Ticketing</a></li>
                <li><a href="#" className="hover:underline">Ticket Purchase Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Concerts & Gigs</a></li>
                <li><a href="#" className="hover:underline">Festivals & Lifestyle</a></li>
                <li><a href="#" className="hover:underline">Business & Networking</a></li>
                <li><a href="#" className="hover:underline">Food & Drinks</a></li>
                <li><a href="#" className="hover:underline">Performing Arts</a></li>
                <li><a href="#" className="hover:underline">Sports & Outdoors</a></li>
                <li><a href="#" className="hover:underline">Exhibitions</a></li>
                <li><a href="#" className="hover:underline">Workshops, Conferences & Classes</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline inline-flex items-center gap-2">
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline inline-flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline inline-flex items-center gap-2">
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline inline-flex items-center gap-2">
                    <Youtube className="w-4 h-4" />
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            ©2025 Eventure. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

