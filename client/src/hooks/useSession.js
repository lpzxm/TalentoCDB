import { useContext } from "react"
import { SessionContext } from "../context/Session"

const useSession = () => {
    return useContext(SessionContext)
}
export { useSession }