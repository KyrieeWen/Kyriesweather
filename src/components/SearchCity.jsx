import React , {Fragment }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { SearchBar, SearchInput, SearchIcon } from '../css/SearchCity'
// import { connect } from 'react-redux'

const SearchCity = (props) => {
  const {showResult, value, submit, change, map } = props

  return (
    <Fragment>
      {/* 默认界面为showResult为false 搜索栏在top：30%，获得数据后搜索栏上升到top：0% */}
      <SearchBar showResult={showResult} onSubmit={submit}>
        <SearchInput 
          type='text' 
          value={value} 
          placeholder='Enter city'        
          onChange={change}
        />
        <SearchIcon className='faSearch'>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
        <SearchIcon className='faMapMarkerAlt'>
          <FontAwesomeIcon 
            icon={faMapMarkerAlt} 
            onClick={map} />
        </SearchIcon>
      </SearchBar>
    </Fragment>
  )
}


export default SearchCity
