import React , {Fragment }from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'
import { SearchBar, SearchInput } from '../css/SearchCity'

const SearchCity = ({ submit, value, focused, change, showResult, inputFocus, inputBlur }) => {
  return (
    <Fragment>
      {/* 默认界面为showResult为false 搜索栏在top：30%，获得数据后搜索栏上升到top：0% */}
      <SearchBar showResult={showResult} onSubmit={submit}>
        <CSSTransition
          in={focused}
          timeout={200}
          classNames='slide'
        >
          <SearchInput 
            className={focused ? 'focused' : ''}
            type='text' 
            value={value} 
            placeholder='Enter city'                
            onChange={change}
            onFocus={inputFocus}
            onBlur={inputBlur}
          />
            {/* <SearchIcon className={focused ? 'focused' : ''}>
              <FontAwesomeIcon icon={faSearch} />
            </SearchIcon> */}
        </CSSTransition>
      </SearchBar>
    </Fragment>
  )
}


export default SearchCity
