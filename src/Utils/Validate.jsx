

const CheckValidation = (email , password ,Fullname) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)
    const isFullname = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(Fullname)

    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    if(!isFullname) return "Enter valid Name"

    return null
}
export default CheckValidation