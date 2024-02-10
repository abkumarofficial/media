import { useEffect} from "react";
import { useSelector } from "react-redux";
import { useThunk } from "../hooks/use-thunk";
import { fetchUsers, addUser } from "../store";
import Button from './Button';
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";

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

    let content;
    if (isLoadingUsers) {
        content=  <Skeleton className="h-10 w-full" times={6}/>
    } else if (loadingUsersError) {
        content = <div>Error Fetching Data...</div>
    } else {
        console.log('data', data);
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user}/>
        })
    }

    return <div>
        <div className="flex flex-row justify-between items-center m-3">
            <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>
                + Add User
                </Button>
            {creatingUserError && 'Error Creating User'}
        </div>
        {content}
    </div>
}

export default UsersList;