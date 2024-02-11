import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import { Fragment } from "react";
import AlbumsList from "./AlbumsList";

function UsersListItem({user}) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleOnClick = () => {
        doRemoveUser(user);
    }

    const header = <Fragment>
                        <Button className="mr-3" loading={isLoading} onClick={handleOnClick}>
                            <GoTrashcan/>
                        </Button>
                        { error && <div>Error Deleting User</div> }
                        {user.name}
                    </Fragment>
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
    )
}

export default UsersListItem;