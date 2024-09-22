import { signIn } from 'next-auth/react';  // Import NextAuth signIn function
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';  // Import useRouter from next/router

const RegisterPage = () => {
  const router = useRouter();  // Initialize useRouter for navigation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoogleSignIn = () => {
    signIn('google'); // Triggers Google OAuth login
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setSuccess('Registration successful!');
      router.push('/');  // Redirect to home page after success
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="font-sans bg-gradient-to-r flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl max-md:max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side - Google login and text */}
          <div className="max-md:order-1 space-y-6">
            <h3 className="text-4xl font-extrabold text-indigo-800 mb-4">Instant Access</h3>
            <p className="text-gray-600 mb-8">
              Get started in a few clicks with your Google account. Join us and experience seamless integration.
            </p>
            <button
              type="button"
              className="w-full px-5 py-3 flex items-center justify-center rounded-lg bg-white border border-gray-300 text-gray-800 text-base font-semibold hover:bg-gray-50 shadow-lg transition duration-300"
              onClick={handleGoogleSignIn}  // Call Google sign-in function
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

          {/* Right side - Registration Form */}
          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            <h3 className="text-4xl font-extrabold text-indigo-800 mb-6">Create Your Account</h3>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && (
              <p className="text-green-500 text-sm">
                {success} <Link href="/"><a className="text-blue-500 underline">Go to Home</a></Link>
              </p>
            )}

            {/* Name Input */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">Full Name</label>
              <input
                name="name"
                type="text"
                required
                className="bg-gray-50 border border-gray-300 w-full text-sm text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                className="bg-gray-50 border border-gray-300 w-full text-sm text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
              <input
                name="password"
                type="password"
                required
                className="bg-gray-50 border border-gray-300 w-full text-sm text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
