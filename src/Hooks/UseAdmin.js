import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isRole, setIsRole] = useState(false);
    const [isRoleLoading, setIsRoleLoading] = useState(true)
    fetch(`https://server-side-flame.vercel.app/users/role?email=${email}`)
    .then(res => res.json())
    .then(data => console.log(data));

    //console.log("isAdmin: ", isAdmin)

    return [isRole, isRoleLoading];
}

export default useAdmin;