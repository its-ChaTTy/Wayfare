import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

export default function SignIn() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-white -mt-20">
      <div className="w-full max-w-md p-8">

        <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[1px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:max-w-[450px]">
          <p className="text-[32px] font-bold text-black">Sign In</p>
          <p className="mb-2.5 mt-2.5 font-normal text-black">
            Enter your email and password to sign in!
          </p>

          <div className="mt-8">
            <form className="pb-2">
              <input type="hidden" name="provider" value="google" />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-black py-6"
                type="submit"
              >
                <span className="mr-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </span>
                <span>Sign in with Google</span>
              </button>
            </form>
          </div>

          <div className="relative my-4">
            <div className="relative flex items-center py-1">
              <div className="grow border-t border-gray-200"></div>
              <div className="grow border-t border-gray-200"></div>
            </div>
          </div>

          <div>
            <form novalidate="" className="mb-4">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label className="text-black" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-black placeholder-gray-400 focus:outline-0"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autocapitalize="none"
                    autocomplete="email"
                    autocorrect="off"
                    name="email"
                  />
                  <label className="text-black mt-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autocomplete="current-password"
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-black placeholder-gray-400 focus:outline-0"
                    name="password"
                  />
                </div>
                <button
                  className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 bg-blue-600 text-white mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p>
              <Link href="/dashboard/signin/forgot_password" className="font-medium text-black text-sm">
                Forgot your password?
              </Link>
            </p>
            <p>
              <Link href="/dashboard/signin/signup" className="font-medium text-black text-sm">
                Don't have an account? Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
