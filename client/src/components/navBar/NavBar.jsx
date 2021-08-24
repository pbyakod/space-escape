import "./navBar.scss"

export default function navBar() {

  fetch("/api/gameState")
  .then ((data) => {
       console.log(data)
  })

  return (
    <div className = "navBar">
      
    </div>
  )
}
