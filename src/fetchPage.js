import {useCallback,useContext,useState,useEffect} from 'react'

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const useFetchPage = () => {
  const [profiles,setProfiles] = useState([])

  const getProfiles = useCallback(async () => {
    const response = await fetch(url)
    const data = await response.json()

    setProfiles(data)
  },[url])

  useEffect(() => {
    getProfiles()
  }, [])

  return profiles
}

export default useFetchPage
