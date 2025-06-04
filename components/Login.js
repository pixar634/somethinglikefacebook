import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
    return (
        <div className="grid place-items-center">
            <Image
                src="https://links.papareact.com/t4i"
                height={400}
                width={400}
                objectFit="contain"
            />
            <h1
                className="p-5 shadow-md  rounded-full text-white text-center w-1/6 cursor-pointer active:border-b-2 bg-gradient-to-r from-green-400 to-blue-500 hover:bg-blue-600 hover:shadow-2xl"
                onClick={signIn}
            >
                Login with Facebook
      </h1>
        </div>
    );
}

export default Login;
