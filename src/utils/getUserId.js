import supabase from "../tools/supabase"

// utility function to get the user id
export const getUserId = async () => {
    const { data, error } = await supabase.auth.getUser()

    if (!data) {
        console.log('User is not logged in')
        return
    }

    if (error) {
        console.error(error)
        return
    }

    return data.user.id
}
