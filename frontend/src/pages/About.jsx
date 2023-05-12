import React from 'react'

export default function About() {
  return (
    <div>
        <h1 className='text-center my-5'>About Page</h1>
        <div className='container fs-5'>
        <p>This code is a React component that displays a list of employees fetched from a JSON API using the useState and useEffect hooks. The Navbar component from the react-bootstrap library is used to display a navigation bar at the top of the page. The Form component is used to provide a search functionality to filter employees by their name. The filtered employee data is displayed in a Table component with columns for ID, name, and email. The component receives data from an API endpoint, then filters and displays it on the page in an easy-to-read table format.</p>
        <p>for More details contact : +91 9947527296 </p>
        </div>
    </div>
  )
}