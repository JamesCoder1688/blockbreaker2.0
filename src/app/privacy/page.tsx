import { Metadata } from 'next';
import ContentSection from '@/components/sections/ContentSection';

export const metadata: Metadata = {
  title: 'Privacy Policy - Block Breaker Game',
  description: 'Learn how Block Breaker protects your privacy. Our commitment to user data security and transparent privacy practices.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen game-bg">
      <div className="max-w-4xl mx-auto py-20 px-4 space-y-8">
        <ContentSection id="privacy-policy" title="Privacy Policy" showCTA={false} useH1={true}>
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-lg text-gray-300">
                Last updated: December 2024
              </p>
            </div>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Commitment to Privacy</h3>
                <p>
                  At Block Breaker, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, and safeguard information when you visit and play our game.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Information We Collect</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Automatically Collected Information</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Browser type and version</li>
                      <li>Device type and operating system</li>
                      <li>IP address (anonymized)</li>
                      <li>Game performance metrics</li>
                      <li>Session duration and gameplay statistics</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-2">Information You Provide</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Contact information when reaching out to us</li>
                      <li>Feedback and bug reports</li>
                      <li>High scores (stored locally on your device)</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">How We Use Your Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our game service</li>
                  <li>To improve game performance and user experience</li>
                  <li>To analyze usage patterns and optimize gameplay</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To detect and prevent technical issues or abuse</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Data Storage and Security</h3>
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <ul className="space-y-2">
                    <li>• Your high scores are stored locally in your browser</li>
                    <li>• We do not store personal data on our servers</li>
                    <li>• All data transmission is encrypted using HTTPS</li>
                    <li>• We implement industry-standard security measures</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Third-Party Services</h3>
                <p className="mb-4">
                  Our website may use third-party services for analytics and game hosting. These services have their own privacy policies:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Game hosting providers (for iframe content)</li>
                  <li>Web hosting services</li>
                  <li>Analytics services (if enabled)</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Cookies and Local Storage</h3>
                <p className="mb-4">We use local storage to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Save your high scores and game preferences</li>
                  <li>Remember your settings between sessions</li>
                  <li>Improve website performance</li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  You can clear this data anytime through your browser settings.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Your Rights</h3>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access information about data we may have</li>
                  <li>Request deletion of any personal information</li>
                  <li>Opt-out of any data collection</li>
                  <li>Contact us with privacy-related questions</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Children's Privacy</h3>
                <p>
                  Block Breaker is suitable for all ages. We do not knowingly collect personal information from children under 13. 
                  If you believe we have collected such information, please contact us immediately.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. We will notify users of any material changes by 
                  posting the new Privacy Policy on this page with an updated "Last updated" date.
                </p>
              </section>
              
              <section className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Contact Us</h3>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <p>
                  Email: <a href="mailto:rhfty071@gmail.com" className="text-purple-400 hover:text-purple-300 transition">rhfty071@gmail.com</a>
                </p>
              </section>
            </div>
          </div>
        </ContentSection>
      </div>
    </main>
  );
}