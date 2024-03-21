import HeaderPrompt from '../auth/RegisterHeader';
import Signup from '../auth/SignupBox';

export const SignUpPage = () => {
  return (
      <>
           <HeaderPrompt
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
          <div className="container mx-auto items-center w-96">
              <Signup />
          </div>
      </>
  )
}