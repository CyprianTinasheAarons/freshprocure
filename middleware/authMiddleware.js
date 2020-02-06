export default function ({store,redirect}){
    //if the user is not authenticated
    if (!store.state.isAuthenticated){
        return redirect('/login')
    }
}