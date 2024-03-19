import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";

function AuthPage({ setUser }) {

    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={ setUser } />
            <LogInForm setUser={ setUser } />
        </main>
    )
};

export default AuthPage;