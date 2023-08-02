function TaskLabel({label}) {
    
    console.log('TaskLabel Mounted with label: ', label)
    const style = {
      fontSize: 'clamp(2rem, 100px, 10vw)',
      filter: 'invert(1) grayscale(1) contrast(9)',
      background: 'inherit',
    }
    // in tailwind bg-inherit translates to background-color:inherit

  return (
      //Same background image but inverted for the text only
      <div contentEditable spellCheck={false} style={style} suppressContentEditableWarning={true} className='dynamicBG !bg-clip-text text-transparent'>
        <p className="p-4 text-center font-bold leading-none focus-visible:outline-none caret-transparent hover:caret-black">This could be a great day to {label}</p>
      </div>
  )
}

export default TaskLabel