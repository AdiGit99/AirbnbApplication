import { useEffect, useState, useRef, useLayoutEffect } from "react"
import { Done, ArrowDropDown } from "@mui/icons-material"

import "./filter.scss"

export default function Filter({
  filterMenu,
  setFilterMenu,
  filterMenuTitle,
  filters,
}) {
  const [width, setWidth] = useState(0)

  const filterRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterMenu(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [filterRef])

  useLayoutEffect(() => {
    setWidth(filterRef.current.offsetWidth)
  }, [])

  useEffect(() => {
    function handleWindowResize() {
      setWidth(filterRef.current.offsetWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [width])

  return (
    <div className="filter-container" ref={filterRef}>
      <div
        className="filter-default-container"
        onClick={() => setFilterMenu(!filterMenu)}
      >
        {filterMenuTitle} &#40;
        {
          filters.filter((item) => {
            return item.filter === true
          }).length
        }
        &#41;
        <ArrowDropDown className="filter-down-icon" />
      </div>
      <div className={`filter-menu ${filterMenu && "filter-menu-active"}`}>
        {filters.map(({ filter, setFilter, filterTitle }, index) => (
          <div
            key={index}
            className={`filter ${filter && "filter-active"}`}
            onClick={() => {
              setFilter(!filter)
            }}
          >
            <div className="filter-tick-container">
              {filter && <Done className="filter-tick" />}
            </div>
            <span>{filterTitle}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
