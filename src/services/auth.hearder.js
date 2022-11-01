const authHeader=()=>{
    let user =localStorage.getItem("user")
    if (user.token) {
        return { 'x-access-token': user.token };
    }else{

    }
}
export default authHeader