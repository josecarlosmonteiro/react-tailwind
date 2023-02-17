function App() {

  return (
    <div className="container">
      <div className="flex h-screen items-center justify-center bg-yellow-100">
        <div className="flex py-8 px-12 bg-gray-100 justify-center items-center rounded-xl shadow-lg">
          <div>
            <h1 className="text-2xl mb-6 font-bold italic bold underline">React-Tailwind Login</h1>
            <div className="my-2 flex flex-col">
              <label className="block">Login:</label>
              <input className="mt-2 p-1 rounded" type="text" placeholder="login name..." />
            </div>
            <div className="my-2 flex flex-col">
              <label className="block">Password:</label>
              <input className="mt-2 p-1 rounded" type="password" placeholder="********..." />
            </div>
            <div className="mt-6 flex justify-between">
              <button className="w-24 bg-blue-400 hover:bg-blue-600 duration-200 text-white rounded-lg p-3">Entrar</button>
              <button className="w-24 text-red-400 bg-silver-400 hover:bg-red-400 hover:text-neutral-100 duration-200 border-red-200 border-2 rounded-lg p-3">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
