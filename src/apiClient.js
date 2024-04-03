const API_BASE_URL='http://localhost:3000'
export const register = async(formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/register`,{
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData),
        });
        if(!response.ok){
            alert("Signup failed");
        }
    } catch (error) {
        alert(error)
    }
};