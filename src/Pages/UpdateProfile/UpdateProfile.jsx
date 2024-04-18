import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/Context/AuthProvider";

const UpdateProfile = () => {
  const {nameUser, setNameUser} = useContext(AuthContext);

  useEffect(() => {
    const storedNameUser = localStorage.getItem('nameUser');
    if (storedNameUser) {
      setNameUser(JSON.parse(storedNameUser));
    }
  }, []);

  return (
    <div className="text-black rounded-2xl  h-[850px] overflow-hidden flex justify-center items-center bg-cover" style={{ backgroundImage: `url('../../../public/pizarea.jpg')` }}>
      <div className="border container mx-auto mt-24 h-[300px] w-[500px]" >
      <h1 className="text-center text-white text-xl font-bold pt-2">Your Profile</h1>
      <div className="border pt-4 pl-3 font-bold mt-10 bg-opacity-45 rounded-lg text-lg ml-14 text-black h-[150px] w-[400px]">
      {nameUser && <div>
          <input className="w-full" type="text" placeholder={nameUser.displayName} />
          <input className="mt-3 w-full" type="email" name="" id="" placeholder={nameUser.email} />
          <input className="mt-3 w-full " type="text" placeholder={nameUser.photoURL} />
          </div>}
      </div>
    </div>
    </div>
  );
};

export default UpdateProfile;