import { signIn } from "next-auth/react";

function Login({ providers }) {
  {
    /* https://devdojo.com/tailwindcss/buttons#_ */
  }
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <img
        className="object-contain "
        src="https://rb.gy/ogau5a"
        alt=""
        width={150}
        height={150}
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
