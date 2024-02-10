import { useEffect} from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { fetchUsers, addUser } from "../store";
import Button from './Button';
import Skeleton from "./Skeleton";

function UsersList() {

    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    // const { data, isLoading, error } = useSelector((state) => {
    //     return state.users;
    // })

    const { data } = useSelector((state) => {
        return state.users;
    })    

    useEffect(()=> {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();
    }

    // if (isLoading) {
    //     return <Skeleton className="h-10 w-full" times={6}/>
    // }
    // if (error) {
    //     return <div>Error Fetching Data...</div>
    // }

    if (isLoadingUsers) {
        return <Skeleton className="h-10 w-full" times={6}/>
    }
    if (loadingUsersError) {
        console.log('loadingUsersError', loadingUsersError);
        return <div>Error Fetching Data...</div>
    }

    const renderedUsers = data.map((user) => {
        return <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between item-center cursor-pointer">
                {user.name}
            </div>
        </div>
    })

    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>

            {
                isCreatingUser ? 'Creating User...' :
                <Button onClick={handleUserAdd}>
                + Add User
                </Button>
            }
            {creatingUserError && 'Error Creating User'}
        </div>
        {renderedUsers}
    </div>
}

export default UsersList;