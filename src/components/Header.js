import React from 'react'
import { HeaderWrapper, Dropdown, DropdownContainer, DropdownList, DropdownListItem, HeaderDropdown, CreateAppointment } from '../StyledComponents'
import { FaChevronDown } from 'react-icons/fa'

const Header = ({
                  showYear,
                  showMonth,
                  showYearDropdown,
                  showMonthDropdown,
                  year,
                  month,
                  monthNames,
                  changeYear,
                  changeMonth,
                  openModal,
                }) => {
  return (
    <HeaderWrapper>
      <DropdownContainer>
        <HeaderDropdown className="year">
          <Dropdown onClick={() => showYearDropdown(prev => !prev)} showing={showYear}>
            <span><b>Year</b> {year}</span>
            <FaChevronDown style={{ fontSize: '12px', marginLeft: '8px' }}/>
          </Dropdown>
          <DropdownList showing={showYear}>
            {
              [2019, 2020, 2021].map(year =>
                <DropdownListItem to={`/year/${year}/month/${monthNames.findIndex(m => m === month)}`} key={year}
                                  onClick={() => changeYear(year)}>{year}</DropdownListItem>
              )
            }
          </DropdownList>
        </HeaderDropdown>
        
        <HeaderDropdown className="month">
          <Dropdown onClick={() => showMonthDropdown(prev => !prev)} showing={showMonth}>
            <span><b>Month</b> {month.slice(0, 3)}</span>
            <FaChevronDown style={{ fontSize: '12px', marginLeft: '8px' }}/>
          </Dropdown>
          <DropdownList showing={showMonth}>
            {
              monthNames.map((month, index) =>
                <DropdownListItem to={`/year/${year}/month/${++index}`} key={month}
                                  onClick={() => changeMonth(month)}>{month}</DropdownListItem>
              )
            }
          </DropdownList>
        </HeaderDropdown>
      </DropdownContainer>
      
      <CreateAppointment onClick={openModal}>
        Make Appointment
      </CreateAppointment>
    </HeaderWrapper>
  )
}

export default Header