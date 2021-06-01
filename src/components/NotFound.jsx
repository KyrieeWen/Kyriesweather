import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { NotFoundWrapper, NotfoundIcon, NotFoundText } from '../css/NotFound'


const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotfoundIcon>
        <FontAwesomeIcon icon={faExclamationCircle} />
      </NotfoundIcon>
      <NotFoundText>
        City name is invalid, please type the correct city name
      </NotFoundText>
    </NotFoundWrapper>
  )
}

export default NotFound
