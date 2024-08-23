const Login = () => {
  return (
    <>
      <div className="flex mt-24 justify-center gap-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
        />
        <button className="p-2 bg-blue-600 text-white rounded">OK</button>
      </div>

      <h1 className="text-blue-500 mt-6 text-4xl text-center">
        Les recettes oRecipes
      </h1>
    </>
  );
};

export default Login;
