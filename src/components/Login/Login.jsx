import {Field, Form} from "react-final-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from '../../common/FormControls/FormControls.module.css';

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h1>LOG IN PLEASE</h1>
            <LoginForm login={props.login} />
        </>
    )
}

const LoginForm = (props) => {
    return (
        <Form
            onSubmit={(formData) => {
                let { email, password, rememberMe } = formData
                return props.login(email, password, rememberMe);
            }}
            render={({ submitError, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div><Field validate={required} name="email" component={Input} placeholder="Your email" /></div>
                    <div><Field validate={required} type="password" name="password" component={Input} placeholder="Your password" /></div>
                    <Field name="rememberMe" component={Input} type="checkbox" />
                    <label htmlFor="rememberMe">remember Me</label>
                    {
                        submitError && <div><strong className={styles.authorizeError}>{submitError}</strong></div>
                    }
                    <div><button>Log In</button></div>
                </form>
            )}>
        </Form>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);