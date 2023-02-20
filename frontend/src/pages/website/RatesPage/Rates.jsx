import React, { useState, useRef, useEffect } from "react"

import "./rates.css"

function Rates() {
  const [isSticky, setIsSticky] = useState(false)
  const [cellWidth, setCellWidth] = useState()
  const [titleWidth, setTitleWidth] = useState()

  const headerRef = useRef(null)
  const footerRef = useRef(null)

  const titleRef = useRef(null)
  const cellRef = useRef(null)

  const getSize = () => {
    const newCellWidth = cellRef.current.clientWidth
    setCellWidth(newCellWidth)

    const newTitleWidth = titleRef.current.clientWidth
    setTitleWidth(newTitleWidth)
  }

  useEffect(() => {
    getSize()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", getSize)
  }, [])

  useEffect(() => {
    // Observers
    const header = headerRef?.current

    const observer = new IntersectionObserver(([e]) => {
      setIsSticky(e.isIntersecting)
    })

    if (header) {
      observer.observe(header)
    }

    return () => {
      observer.unobserve(header)
    }
  }, [headerRef, footerRef])

  useEffect(() => {
    const footer = footerRef?.current
    const observerFooter = new IntersectionObserver(([e]) => {
      setIsSticky(!e.isIntersecting)
    })

    if (footer) {
      observerFooter.observe(footer)
    }
    return () => {
      observerFooter.unobserve(footer)
    }
  }, [headerRef, footerRef])

  return (
    <div>
      <div className="rates-container">
        <div className="rates">
          <div className="rates-title-container" ref={headerRef}>
            <h1>Choose the right service for you</h1>
          </div>
          <div className="nav-spacer-temp-sticky" />
          <div className="plans-container">
            {!isSticky && (
              <div className="plans-container-sticky">
                <table className="plans-matrix-sticky">
                  <tr className="plans-matrix-header">
                    <th className="plans-matrix-title"></th>
                    <th
                      className="plans-matrix-title-two"
                      colSpan={12}
                      style={{ width: titleWidth }}
                    >
                      Hours
                    </th>
                  </tr>
                  <tr className="plans-matrix-row-hours">
                    <th className="plans-matrix-row-grid-item" />
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      1
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      2
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      3
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      4
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      5
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      6
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      7
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      8
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      9
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      10
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      11
                    </th>
                    <th
                      className="plans-matrix-row-grid-cell-sticky"
                      style={{ width: cellWidth }}
                    >
                      12
                    </th>
                  </tr>
                </table>
              </div>
            )}
            <table className="plans-matrix">
              <thead className={!isSticky ? "sticky" : ""}>
                <tr className="plans-matrix-header">
                  <th className="plans-matrix-title"></th>
                  <th
                    className="plans-matrix-title-two"
                    ref={titleRef}
                    colSpan={12}
                  >
                    Hours
                  </th>
                </tr>
                <tr className="plans-matrix-row-hours">
                  <th className="plans-matrix-row-grid-item" />
                  <th className="plans-matrix-row-grid-cell" ref={cellRef}>
                    1
                  </th>
                  <th className="plans-matrix-row-grid-cell">2</th>
                  <th className="plans-matrix-row-grid-cell">3</th>
                  <th className="plans-matrix-row-grid-cell">4</th>
                  <th className="plans-matrix-row-grid-cell">5</th>
                  <th className="plans-matrix-row-grid-cell">6</th>
                  <th className="plans-matrix-row-grid-cell">7</th>
                  <th className="plans-matrix-row-grid-cell">8</th>
                  <th className="plans-matrix-row-grid-cell">9</th>
                  <th className="plans-matrix-row-grid-cell">10</th>
                  <th className="plans-matrix-row-grid-cell">11</th>
                  <th className="plans-matrix-row-grid-cell">12</th>
                </tr>
              </thead>
              <tbody>
                <tr className="plans-matrix-row-header">
                  <td className="plans-matrix-row-header-cell">Nurses</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Registered Nurse (RN)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Enrolled Nurse (EN)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Health Care Assistant (HCA)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Healthcare Worker (HW)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Nurse Specialist (NS)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    China Trained Nurse (CTN)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Clinical Assistant (CA)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row-header">
                  <td className="plans-matrix-row-header-cell">
                    Home Services
                  </td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Personal Care Worker (PCW)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">Midwife (M)</td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Domestic Helper (DH)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Disability Healthcare Worker (DHW)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Babysitter (BB)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row-header">
                  <td className="plans-matrix-row-header-cell" colSpan={13}>
                    Medical Practioners and Therapists
                  </td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">Doctor (D)</td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Chinese Medicine Practioner (CMP)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Physiotherapist (PW)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item" ref={footerRef}>
                    Occupational Therapist (OT)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Speech Therapist (ST)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Podiatrist (PD)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Phlebotomist (BT)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row-header">
                  <td className="plans-matrix-row-header-cell">
                    General Services
                  </td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Working Man (WM)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Data Entry (DE)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
                <tr className="plans-matrix-row">
                  <td className="plans-matrix-row-grid-item">
                    Security Guard (SG)
                  </td>
                  <td className="plans-matrix-row-grid-cell">300</td>
                  <td className="plans-matrix-row-grid-cell">320</td>
                  <td className="plans-matrix-row-grid-cell">340</td>
                  <td className="plans-matrix-row-grid-cell">360</td>
                  <td className="plans-matrix-row-grid-cell">380</td>
                  <td className="plans-matrix-row-grid-cell">400</td>
                  <td className="plans-matrix-row-grid-cell">420</td>
                  <td className="plans-matrix-row-grid-cell">440</td>
                  <td className="plans-matrix-row-grid-cell">460</td>
                  <td className="plans-matrix-row-grid-cell">480</td>
                  <td className="plans-matrix-row-grid-cell">500</td>
                  <td className="plans-matrix-row-grid-cell">520</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rates
