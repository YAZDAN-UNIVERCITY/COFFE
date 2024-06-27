import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform registration logic here
    console.log('Form submitted:', { username, email, password, repeatPassword });
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 rounded shadow-md  ">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="username"

            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="email"

            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="password"

            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repeat-password">
            Repeat Password
          </label>
          <input
            type="password"
            placeholder="repeat-password"

            id="repeat-password"
            value={repeatPassword}
            onChange={(event) => setRepeatPassword(event.target.value)}
            className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-accent hover:bg-primary-600 rounded shadow"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp;