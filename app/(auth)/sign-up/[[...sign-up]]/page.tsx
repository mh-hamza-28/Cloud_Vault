import Image from "next/image";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.25),_transparent_35%)]" />

      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-[0_40px_120px_rgba(15,23,42,0.8)] backdrop-blur-xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center bg-slate-950/80 p-8 sm:p-12">
            <div className="mb-8 flex items-center justify-center lg:justify-start">
              <Image src="/cloud-vault-logo.svg" alt="Cloud Vault logo" width={420} height={140} priority />
            </div>

            <div className="space-y-4 text-slate-300">
              <h1 className="text-center text-3xl font-bold text-white lg:text-left">Create your account</h1>
              <p className="text-lg leading-8 text-center lg:text-left">
                Launch your content engine with secure storage, optimized delivery, and collaborative media workflows built for growth.
              </p>
              <ul className="space-y-2 text-sm text-center lg:text-left">
                <li>• Upload high-value video files</li>
                <li>• Collaborate with a cleaner workflow</li>
                <li>• Share assets in seconds</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center bg-slate-900/90 p-4 sm:p-8">
            <SignUp
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              afterSignUpUrl="/home"
              appearance={{
                variables: {
                  colorPrimary: '#22d3ee',
                  colorBackground: '#0f172a',
                  colorInputBackground: '#111827',
                  colorInputText: '#e2e8f0',
                  colorText: '#f8fafc',
                  colorTextSecondary: '#cbd5e1',
                  borderRadius: '0.9rem',
                },
                elements: {
                  card: 'shadow-none border-0 bg-transparent',
                  rootBox: 'w-full max-w-md',
                  headerTitle: 'text-white',
                  headerSubtitle: 'text-slate-300',
                  socialButtonsBlockButton: 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700',
                  formButtonPrimary: 'bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-semibold hover:brightness-110',
                  footerActionLink: 'text-cyan-300',
                },
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
