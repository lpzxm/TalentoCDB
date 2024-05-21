

export const CoachProfileImage = ({ background, profile }) => {

    return (
        <div className='w-full relative flex flex-col items-center'>
            <img src={background} alt="" className='w-full h-32 rounded-full object-cover' />
            <div className='absolute top-16 w-32 h-32 overflow-hidden rounded-full bg-black'>
                <img src={profile} className='w-full h-full object-cover object-center' alt="" />
            </div>
        </div>
    );
}