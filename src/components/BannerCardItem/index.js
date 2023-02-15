// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <div>
        <h1 className="header">{headerText}</h1>
        <p className="describe">{description}</p>
        <button className="button">Show More"</button>
      </div>
    </li>
  )
}

export default BannerCardItem
