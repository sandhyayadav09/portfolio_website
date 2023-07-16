import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
        <a href="https://gitub.com" target="blank"><FaGithub/></a>
        <a href="https://geeksforgeeks.com" target="blank"><SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials