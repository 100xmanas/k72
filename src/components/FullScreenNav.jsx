import React from "react";

function FullScreenNav() {
  return (
    <div className="absolute h-screen w-full flex flex-col justify-between bg-black text-white py-16">
      <div className="flex items-center justify-end text-[2vw] pr-10">
        <span className="cursor-pointer">❌</span>
      </div>

      <div className="pt-16">
        <div className="link relative border-t pt-2 border-gray-500">
          <h1 className="text-[7vw] font-[font2] uppercase text-center leading-[7vw]">
            Projects
          </h1>
          <div className="movelink absolute top-0 flex items-center bg-green-500 text-black h-full w-full scrollbar-hidden overflow-x-auto">
            <div className="moveX flex items-center gap-2 ">
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-28 w-80 shrink-0 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1762005348601-0d2bb074fb82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-32 w-80 shrink-0 object-cover rounded-full"
                src="https://plus.unsplash.com/premium_photo-1746108793647-561bfeec0b2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
            </div>
            <div className="moveX flex items-center gap-2 ">
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-28 w-80 shrink-0 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1762005348601-0d2bb074fb82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-32 w-80 shrink-0 object-cover rounded-full"
                src="https://plus.unsplash.com/premium_photo-1746108793647-561bfeec0b2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="link relative border-t pt-2 border-gray-500">
          <h1 className="text-[7vw] font-[font2] uppercase text-center leading-[7vw]">
            Agence
          </h1>
          <div className="movelink absolute top-0 flex items-center bg-green-500 text-black h-full w-full scrollbar-hidden overflow-x-auto">
            <div className="moveX flex items-center gap-2 ">
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-28 w-80 shrink-0 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1762005348601-0d2bb074fb82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-32 w-80 shrink-0 object-cover rounded-full"
                src="https://plus.unsplash.com/premium_photo-1746108793647-561bfeec0b2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
            </div>
            <div className="moveX flex items-center gap-2 ">
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-28 w-80 shrink-0 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1762005348601-0d2bb074fb82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-32 w-80 shrink-0 object-cover rounded-full"
                src="https://plus.unsplash.com/premium_photo-1746108793647-561bfeec0b2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="link relative border-y pt-2 border-gray-500">
          <h1 className="text-[7vw] font-[font2] uppercase text-center leading-[7vw]">
            Contact
          </h1>
          <div className="movelink absolute top-0 flex items-center bg-green-500 text-black h-full w-full scrollbar-hidden overflow-x-auto">
            <div className="moveX flex items-center gap-2 ">
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-28 w-80 shrink-0 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1762005348601-0d2bb074fb82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-32 w-80 shrink-0 object-cover rounded-full"
                src="https://plus.unsplash.com/premium_photo-1746108793647-561bfeec0b2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
            </div>
            <div className="moveX flex items-center gap-2 ">
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-28 w-80 shrink-0 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1762005348601-0d2bb074fb82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
              <h2 className="text-[7vw] font-[font2] whitespace-nowrap uppercase">
                Pour Tout Voir
              </h2>
              <img
                className="h-32 w-80 shrink-0 object-cover rounded-full"
                src="https://plus.unsplash.com/premium_photo-1746108793647-561bfeec0b2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-36 w-full flex items-center justify-end">
        <div className="h-full w-96 flex items-center justify-between mx-10">
          <h2 className="font-[font2] text-[4vw] border-2 p-2 rounded-full hover:text-green-500 transition-all cursor-pointer uppercase">
            FB
          </h2>
          <h2 className="font-[font2] text-[4vw] border-2 p-2 rounded-full hover:text-green-500 transition-all cursor-pointer uppercase">
            IG
          </h2>
          <h2 className="font-[font2] text-[4vw] border-2 p-2 rounded-full hover:text-green-500 transition-all cursor-pointer uppercase">
            IN
          </h2>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
