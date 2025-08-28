import { Metadata } from 'next';
import Link from 'next/link';
import ContentSection from '@/components/sections/ContentSection';

export const metadata: Metadata = {
  title: 'Contact Block Breaker - Get in Touch with Our Team',
  description: 'Contact the Block Breaker team for support, feedback, or partnership inquiries. We\'re here to help with your gaming experience.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen game-bg">
      <div className="max-w-4xl mx-auto py-20 px-4 space-y-12">
        <ContentSection id="contact-us" title="Contact Us" showCTA={false} useH1={true}>
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-xl mb-6">
                We'd love to hear from you! Whether you have questions, feedback, or just want to share 
                your high scores, don't hesitate to reach out.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                  📧 Email Support
                </h3>
                <p className="mb-4">For general inquiries, technical support, or feedback:</p>
                <a 
                  href="mailto:rhfty071@gmail.com" 
                  className="text-purple-400 hover:text-purple-300 font-bold text-lg transition"
                >
                  rhfty071@gmail.com
                </a>
                <p className="text-sm text-gray-400 mt-2">
                  We typically respond within 24 hours
                </p>
              </div>
              
              <div className="bg-slate-700/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                  🎮 Game Feedback
                </h3>
                <p className="mb-4">Found a bug or have a feature suggestion?</p>
                <p className="text-gray-300">
                  Email us with detailed descriptions and we'll work to improve your gaming experience.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-pink-400 text-center">What We Can Help With</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <h4 className="font-bold text-purple-400 mb-2">Technical Support</h4>
                  <p className="text-sm">Game not loading? Performance issues? We're here to help.</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">💭</div>
                  <h4 className="font-bold text-cyan-400 mb-2">Feature Requests</h4>
                  <p className="text-sm">Have ideas for new features or improvements? Let us know!</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="font-bold text-green-400 mb-2">Partnerships</h4>
                  <p className="text-sm">Interested in collaborating or featuring our game?</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Quick Tips for Better Support</h3>
              <ul className="text-left space-y-2 max-w-2xl mx-auto mb-6">
                <li>• Include your browser and device information</li>
                <li>• Describe the issue step by step</li>
                <li>• Mention if the problem is consistent or intermittent</li>
                <li>• Share screenshots if applicable</li>
              </ul>
              
              <div className="border-t border-slate-700 pt-4">
                <p className="text-gray-400 mb-4">While you're here, explore more:</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/#game" className="text-cyan-400 hover:text-cyan-300 transition">
                    🎮 Play Block Breaker
                  </Link>
                  <Link href="/about" className="text-purple-400 hover:text-purple-300 transition">
                    ℹ️ About Us
                  </Link>
                  <Link href="/blog" className="text-green-400 hover:text-green-300 transition">
                    📖 Gaming Blog
                  </Link>
                  <Link href="/privacy" className="text-pink-400 hover:text-pink-300 transition">
                    🔒 Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>
      </div>
    </main>
  );
}