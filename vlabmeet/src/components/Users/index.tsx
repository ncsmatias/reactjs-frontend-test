import Video from "../VideoUser";


const urls: Array<string> = [
                             'https://www.youtube.com/watch?v=JfVOs4VSpmA&t=1s&ab_channel=SonyPicturesEntertainment', 
                             'https://www.youtube.com/watch?v=JfVOs4VSpmA&t=1s&ab_channel=SonyPicturesEntertainment',
                             'https://www.youtube.com/watch?v=JfVOs4VSpmA&t=1s&ab_channel=SonyPicturesEntertainment',
                             'https://www.youtube.com/watch?v=JfVOs4VSpmA&t=1s&ab_channel=SonyPicturesEntertainment'
                            ]

const Users: React.FC = () => {

  const renderCard = (url:string) => {
    return(
      <>
      <Video src={url} />
      </>
    )
  }

  return(
    <>
      {
        urls.map(url => renderCard(url))
      }
    </>
  )
}

export default Users;