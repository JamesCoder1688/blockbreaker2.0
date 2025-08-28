import { Metadata } from 'next';
import ContentSection from '@/components/sections/ContentSection';

export const metadata: Metadata = {
  title: 'Terms of Service - Block Breaker Game',
  description: 'Read the Terms of Service for Block Breaker. Understand your rights and responsibilities when playing our game.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen game-bg">
      <div className="max-w-4xl mx-auto py-20 px-4 space-y-8">
        <ContentSection id="terms-of-service" title="Terms of Service" showCTA={false} useH1={true}>
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-lg text-gray-300">
                Last updated: December 2024
              </p>
            </div>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Welcome to Block Breaker</h3>
                <p>
                  By accessing and playing Block Breaker, you agree to comply with and be bound by these Terms of Service. 
                  If you do not agree with these terms, please do not use our service.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Game Access and Use</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Permitted Use</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Play Block Breaker for personal entertainment</li>
                      <li>Share your gaming experiences on social media</li>
                      <li>Provide feedback and suggestions for improvement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-2">Prohibited Activities</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Attempting to hack, modify, or reverse engineer the game</li>
                      <li>Using automated tools or bots to play the game</li>
                      <li>Interfering with the game's normal operation</li>
                      <li>Violating any applicable laws or regulations</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Intellectual Property</h3>
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li>• Block Breaker and all related content are protected by intellectual property laws</li>
                    <li>• You may not copy, distribute, or create derivative works without permission</li>
                    <li>• All trademarks and logos remain the property of their respective owners</li>
                    <li>• Game content is provided for entertainment purposes only</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Service Availability</h3>
                <p className="mb-4">
                  We strive to provide continuous access to Block Breaker, but we cannot guarantee:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Uninterrupted or error-free service</li>
                  <li>Compatibility with all devices or browsers</li>
                  <li>Permanent availability of the service</li>
                  <li>Maintenance of high scores or game data</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-green-400 mb-4">User Responsibilities</h3>
                <p className="mb-4">As a player, you are responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ensuring your device meets minimum requirements</li>
                  <li>Using a compatible browser with JavaScript enabled</li>
                  <li>Maintaining your own internet connection</li>
                  <li>Backing up any game data you wish to preserve</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Limitation of Liability</h3>
                <p className="mb-4">
                  Block Breaker is provided "as is" without warranties of any kind. We are not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Loss of game progress or high scores</li>
                  <li>Technical issues with your device or browser</li>
                  <li>Any indirect or consequential damages</li>
                  <li>Service interruptions or downtime</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Privacy and Data</h3>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy to understand how we handle your information. 
                  By using Block Breaker, you consent to our data practices as described in our Privacy Policy.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Third-Party Content</h3>
                <p>
                  Block Breaker may include content or links to third-party services. We are not responsible for the content, 
                  privacy policies, or practices of any third-party services.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Modifications to Terms</h3>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Material changes will be posted on this page 
                  with an updated "Last updated" date. Continued use of the service constitutes acceptance of the modified terms.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Termination</h3>
                <p>
                  We may terminate or suspend access to Block Breaker at any time, with or without notice, for conduct that 
                  we believe violates these Terms of Service or is harmful to other users or our service.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Governing Law</h3>
                <p>
                  These Terms of Service are governed by applicable laws. Any disputes will be resolved through appropriate 
                  legal channels in accordance with applicable jurisdiction.
                </p>
              </section>
              
              <section className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Contact Information</h3>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <p>
                  Email: <a href="mailto:rhfty071@gmail.com" className="text-purple-400 hover:text-purple-300 transition">rhfty071@gmail.com</a>
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  By playing Block Breaker, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </ContentSection>
      </div>
    </main>
  );
}