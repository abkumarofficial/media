import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

function UsersListItem({user}) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleOnClick = () => {
        doRemoveUser(user);
    }


    return <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between item-center cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <Button className="mr-3" loading={isLoading} onClick={handleOnClick}>
                    <GoTrashcan/>
                </Button>
                { error && <div>Error Deleting User</div> }
                {user.name}
            </div>
        </div>
    </div>
}

export default UsersListItem;