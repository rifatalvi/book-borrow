"use client";
import { UpdateModalPage } from "@/component/sheard/UpadteModalPagae";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";


const ProfilePage = () => {
    const user  = useSession();
   const userData = user?.data?.user;
  
    return (
            <div className="container mx-auto py-10 shadow-xl rounded-2xl  mt-10 bg-white">
        <div className="flex flex-col gap-6 items-center justify-center ">
           <Image src={userData?.image}
           referrerPolicy="no-referrer"
           alt={userData?.name} width={200} height={200} className="rounded-full" />
           <h1 className="text-2xl font-bold mt-4">{userData?.name}</h1>
           <p className="text-gray-600">{userData?.email}</p>
           <UpdateModalPage></UpdateModalPage>
        </div>
    </div>
    );
};

export default ProfilePage;