import { useState } from 'react';

function App() {
  const [isReading, setIsReading] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function toggleReading(e) {
    setIsReading(e.target.checked);
  }

  function toggleWatching(e) {
    setIsWatching(e.target.checked);
  }

  function toggleSleeping(e) {
    setIsSleeping(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <main>
      <h1>Hi, I'm Benny</h1>
      <h2>My profile pic</h2>
      <img style={{ borderRadius: '50%' }} alt="My profile pic" src="https://avatars.githubusercontent.com/u/122904044?v=4" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter name..." value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <input type="text" name="email" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
          <p>Select interests</p>
          <input type="checkbox" id="reading" checked={isReading} onChange={toggleReading} />
          <label htmlFor="reading">Reading</label> <br />
          <input type='checkbox' id="watching" checked={isWatching} onChange={toggleWatching} />
          <label htmlFor='watching'>Watching</label> <br />
          <input type='checkbox' id='sleeping' checked={isSleeping} onChange={toggleSleeping} />
          <label htmlFor="sleeping">Sleeping</label>
        </div>
        <button type='submit'>Submit</button>
      </form>
      
      {isSubmitted && <p>Thank you for your subscription</p>}
    </main>
  );
}

export default App;