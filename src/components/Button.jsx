import PropTypes from "prop-types"

const Button = ({bgcolor, onClick,buttonText,hover,Text}) => {
  return (
    <div>
        <button className={`${bgcolor}w-full px-2 py-2 rounded-2xl ${Text} ${hover}`} onClick={onClick}>
            {buttonText}
        </button>
        {/* <button className='w-full bg-rose-500 px-2 py-2 rounded-2xl text-center hover:bg-fuchsia-700' type="submit" onClick={handleShowName}>submit</button>
        <button className='w-full bg-fuchsia-700 px-2 py-2 rounded-2xl text-center hover:bg-rose-500' onClick={handleClear}>clear</button> */}
    </div>
  )
}

export default Button
Button.PropTypes={
    bgcolor:PropTypes.string,
    buttonText: PropTypes.string,
    onClick:PropTypes.func
}