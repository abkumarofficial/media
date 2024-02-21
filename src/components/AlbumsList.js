import { useFetchAlbumsQuery } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

function AlbumsList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    console.log(data, error, isLoading);

    return <div>Albums for {user.name}</div>
}

export default AlbumsList;