import { useRouter } from "next/router"

const User = () => {
    const router = useRouter();

    const { user } = router.query;

    return <h3>사용자 이름: {user}</h3>
}

export default User;