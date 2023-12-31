function TaskLabel({label}) {
    
    const style = {
      fontSize: 'clamp(2rem, 100px, 10vw)',
      filter: 'invert(1) grayscale(1) contrast(9)',
      background: 'inherit',
    }
    // in tailwind bg-inherit translates to background-color:inherit

  return (
      //Same background image but inverted for the text only
      <div contentEditable spellCheck={false} style={style} suppressContentEditableWarning={true} className='dynamicBG !bg-clip-text text-transparent focus-visible:outline-none'>
        <p className="p-4 sm:p-8 text-center font-bold leading-none caret-transparent hover:caret-black">This could be a great day to {label}</p>
      </div>
  )
}

export default TaskLabel