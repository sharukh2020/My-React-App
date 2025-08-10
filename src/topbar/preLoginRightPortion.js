function preLoginRightPortion(location, setPreLoginRightPortionData) {
    switch (location.pathname) {
        case "/signUp":
            setPreLoginRightPortionData({
                question: "Already have an account?",
                redirectToPageName: "Sign In",
                redirectPageRoute: "/"
            });
            break;
        case "/":
            setPreLoginRightPortionData({
                question: "Not yet registered?",
                redirectToPageName: "Sign Up",
                redirectPageRoute: "/signUp"
            });
            break;
        default:
            setPreLoginRightPortionData({
                question: "",
                redirectToPageName: "",
                redirectPageRoute: ""
            });
    }
}

export { preLoginRightPortion }