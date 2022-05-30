import { transactionData } from "../data/data"
import TransactionCard from "../components/TransactionInfos"
import { useEffect } from "react"
import { selectJWT, selectUserLogin } from "../utils/Selectors"
import { useDispatch, useSelector } from "react-redux"
import ApiCalls from "../utils/CallMethod"
import { setUserData } from "../redux/Reducers"
import { Navigate } from "react-router-dom"
import UserProfile from "../components/UserProfile"

function Profile() {
  let dispatch = useDispatch()
  let JWT = useSelector(selectJWT)
  const connected = useSelector(selectUserLogin)

  useEffect(() => {
      async function getUserProfile() {
          const response = await new ApiCalls().getUserProfileData(JWT)
          //console.log(response.data.body)
          dispatch(setUserData(response.data.body))
          //console.log(setUserData);
          return response
      }
      getUserProfile() 
  }, [JWT, dispatch])
  
  if(connected === false || connected === undefined || connected === null) {
    return <Navigate to='/sign-in'/>
  }
  
    return (
      <main className="main bg-dark">
        <UserProfile />
          <h2 className="sr-only">Accounts</h2>
            {transactionData.map(({ id, title, amount, description }) => {
              return (
                <TransactionCard key={id} title={title} amount={amount} description={description}/>
              );
            })}
      </main>
    )
}

export default Profile