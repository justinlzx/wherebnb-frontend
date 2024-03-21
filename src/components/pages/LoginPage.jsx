import HeaderPrompt from "../auth/RegisterHeader";
import Login from "../auth/LoginBox";
import { SignUpPage } from "./SignUpPage";

export const LoginPage = ({heading, paragraph, linkName, linkUrl={SignUpPage}}) => {
    return (
        <>
             <HeaderPrompt
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <div className="container mx-auto items-center w-96 z-1">
                <Login />
            </div>
        </>
    )
}