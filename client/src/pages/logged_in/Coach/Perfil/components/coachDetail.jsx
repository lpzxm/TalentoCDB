
export const CoachDetail = ({ iconName, text }) => {

    return (
        <div className="bg-slate-100 w-full flex flex-row justify-center items-center space-x-4 text-center p-3 rounded-full">
            {iconName}
            <p className="text-lg">{text}</p>
        </div>
    )
}