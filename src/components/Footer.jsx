import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer({imageObj}) {
    const addRefer = (link) => link + '?utm_source=RandomActivityApp&utm_medium=referral'
  return (
    <footer className={`fixed left-0 bottom-0 w-full h-auto bg-black bg-opacity-70 text-white text-sm z-10`}>
        <div className="container mx-auto px-4 py-2 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 items-center">
                <div>
                    <ul className='flex flex-row'>
                        <li><a href={addRefer(imageObj?.links?.html)} target='_blank' rel='noreferrer'>Photo</a> by <a href={addRefer(imageObj?.user?.links?.html)} target='_blank' rel='noreferrer'>{imageObj?.user?.username} @Unsplash</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-row flex-wrap md:justify-end items-center gap-x-16 gap-y-1'>
                        <li className='w-full 2xl:w-auto md:text-end'>Project: <span className='font-semibold'>Random Task</span> by Mohammed Salman Khan
                            </li>
                        <li>
                            <a className='flex flex-row items-center gap-x-2' href="https://github.com/webdevsk/" target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon className={`w-5 h-5`} icon={faGithubSquare} />
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a className='flex flex-row items-center gap-x-2' href="https://www.linkedin.com/in/webdevsk/" target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon className={`w-5 h-5`} icon={faLinkedin} />
                                <span>Linkedin</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer
