/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-16 rounded shadow-2xl w-2/3">
        <h2 className="text-3xl font-bold">Create Account</h2>
        <form>
          <div>
            <label>Name</label>
            <input type="text" className="" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" className="" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" className="" />
          </div>

          <button className="">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
