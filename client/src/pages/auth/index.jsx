import { useState } from "react";
import Backgrround from "@/assets/login2.png";
import victory from "@/assets/victory.svg";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogin = async () => {};
    const handleSignup = async () => {};

    return (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <div className="h-[80vh] bg-white shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
                {/* Left Side: Background Image */}
                <div
                    className="hidden xl:block bg-cover bg-center rounded-l-3xl"
                    style={{
                        backgroundImage: `url(${Backgrround})`,
                    }}
                ></div>

                {/* Right Side: Login/Signup Form */}
                <div className="flex flex-col gap-10 items-center justify-center p-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center">
                            <h1 className="text-5xl font-bold md:text-6xl mr-4">Welcome</h1>
                            <img src={victory} alt="Victory Emoji" className="h-[60px]" />
                        </div>
                        <p className="font-medium mt-4">Fill in the details to get started</p>
                    </div>
                    <Tabs className="w-full">
                        <TabsList className="flex bg-transparent w-full">
                            <TabsTrigger
                                value="login"
                                className="text-black text-opacity-90 border-b-2 w-full p-3 
                                data-[state=active]:font-semibold data-[state=active]:border-b-purple-500
                                transition-all duration-300"
                            >
                                Login
                            </TabsTrigger>
                            <TabsTrigger
                                value="signup"
                                className="text-black text-opacity-90 border-b-2 w-full p-3 
                                data-[state=active]:font-semibold data-[state=active]:border-b-purple-500
                                transition-all duration-300"
                            >
                                Signup
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                            <Input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-full p-4 border"
                            />
                            <Input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-full p-4 border"
                            />
                            <button
                                type="submit"
                                className="bg-purple-500 text-white py-3 rounded-full hover:bg-purple-600 transition" onClick={handleLogin}
                            >
                                Login
                            </button>
                        </TabsContent>
                        <TabsContent className="flex flex-col gap-5 mt-10" value="signup">
                            <Input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-full p-4 border"
                            />
                            <Input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-full p-4 border"
                            />
                            <Input
                                placeholder="Confirm Password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="rounded-full p-4 border"
                            />
                            <button
                                type="submit"
                                className="bg-purple-500 text-white py-3 rounded-full hover:bg-purple-600 transition" onClick={handleSignup}
                            >
                                Signup
                            </button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Auth;
