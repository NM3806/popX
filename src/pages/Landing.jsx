import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen flex items-end justify-center bg-[#f5f5f5]">
      <div className="w-full max-w-xs p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Link to="/signup">
          <button className="w-full py-2 mb-2 bg-[#6C25FF] text-white rounded cursor-pointer">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="w-full py-2 bg-[#CEBAFB] rounded font-semibold cursor-pointer">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
