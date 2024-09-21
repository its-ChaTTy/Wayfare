import { signIn } from 'next-auth/react';  // Import the signIn method for NextAuth
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const result = await signIn('credentials', { redirect: false, email, password });

    if (result?.ok) {
      router.push('/dashboard');
    } else {
      console.error('Error signing in');
    }
  };

  const handleGoogleSignIn = () => {
    signIn('google');
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white -mt-20">
        <div className="w-full max-w-md p-8">
          <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[1px] w-[350px] max-w-[450px] mx-auto">
            <p className="text-[32px] font-bold text-black">Sign In</p>
            <p className="mb-2.5 mt-2.5 font-normal text-black">
              Enter your email and password to sign in!
            </p>

            <form onSubmit={handleSignIn}>
              <input type="hidden" name="provider" value="credentials" />

              <div className="mt-4 flex w-full flex-col">
                <label className="text-gray-700 text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-50 text-sm p-2.5 border border-gray-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mt-4 flex w-full flex-col">
                <label className="text-gray-700 text-sm font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-50 text-sm p-2.5 border border-gray-300"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-md font-semibold hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>

            {/* Divider or some space between credential and Google sign-in */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">or sign in with</p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              className="mt-4 w-full bg-red-500 text-white py-2.5 rounded-md font-semibold hover:bg-red-600 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                className="mr-2"
              >
                <path fill="#EA4335" d="M24 9.5c3.29 0 6.25 1.26 8.54 3.31l6.32-6.32C34.87 2.9 29.7 0 24 0 14.94 0 7.32 5.66 4.03 13.87l7.39 5.74C13.18 14.03 18.13 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.06 24.34c0-1.52-.14-2.96-.4-4.34H24v8.19h12.48c-.54 2.87-2.2 5.3-4.67 6.94l7.33 5.7C43.83 36.85 46.06 30.99 46.06 24.34z" />
                <path fill="#FBBC05" d="M11.42 28.04c-.67-1.97-1.05-4.05-1.05-6.04s.38-4.07 1.05-6.04L4.03 10.22C1.47 14.68 0 19.61 0 24.99c0 5.38 1.47 10.31 4.03 14.77l7.39-5.74z" />
                <path fill="#34A853" d="M24 48c5.7 0 10.47-1.87 13.96-5.1l-7.33-5.7c-2.03 1.36-4.6 2.16-7.27 2.16-5.88 0-10.83-4.53-12.58-10.61l-7.39 5.74C7.32 42.34 14.94 48 24 48z" />
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
