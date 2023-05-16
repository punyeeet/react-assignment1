import React from 'react'

export const Signup = () => {
    return (
        <>
            <div className="flex items-center justify-center bg-gray-200 h-screen w-screen">
                <div className="h-screen w-1/4 bg-white ">
                    <div className="justify-center  items-center">
                        <img src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg" className="block m-auto py-10 "/>
                        <form className=" login-input">
                            <input placeholder="Email"
                            ></input>
                            <input placeholder="Password"></input>
                            <button type="submit" className="login-btn text-white hover:text-gray-300">
                                SignUp
                            </button>
                        </form>
                        <p className="text-center">
                        Have an account? <a href='/' className='hover:text-blue-600'>Login</a>
                        </p>
                        {/* <Switch>
                            <Route path="/singup">
                                <Signup/>
                            </Route>
                        </Switch> */}

                    </div>
                        
                </div>
            </div>
        </>
    )
}
