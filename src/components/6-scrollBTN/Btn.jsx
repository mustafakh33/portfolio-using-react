import "./Btn.css"
// eslint-disable-next-line react/prop-types
const Btn = ({showScrollBTN}) => {
  return (
      <a href="#top" style={{opacity:showScrollBTN? 1:0,transition: "1s" }}>
      <button className='icon-keyboard_arrow_up scroll2Top'></button>
      </a>
  )
}

export default Btn