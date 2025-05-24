import { HiCamera } from 'react-icons/hi';

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F7F8F9]  flex items-start justify-center pt-0">
      <div className="w-full max-w-md">

        <div className="bg-white py-4 px-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
        </div>

        <div className=" px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16">
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1.5 rounded-full">
                <HiCamera className="text-white w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="font-bold  text-lg">Marry Doe</h3>
              <p className="text-sm ">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className=" text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;