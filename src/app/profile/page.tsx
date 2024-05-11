import { getServerSession } from 'next-auth'
import { authConfig } from '@/configs/auth'


const Profile = async () => {
	const session = await getServerSession(authConfig)
	console.log(session, '5555555555555555555555')

	return (
		<div>
			<h1>Profile of {session?.user?.name}</h1>
			{session?.user?.image && <img src={session.user.image} alt='image' />}
		</div>)
}

export default Profile