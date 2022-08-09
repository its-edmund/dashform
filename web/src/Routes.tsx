// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import EditorLayout from './layouts/EditorLayout/EditorLayout'
import SidebarLayout from './layouts/SidebarLayout/SidebarLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/home" page={HomePage} name="home" />
      <Set wrap={EditorLayout}>
        <Route path="/payment" page={PaymentPage} name="payment" />
        <Route path="/editor" page={EditorPage} name="editor" />
      </Set>
      <Set wrap={SidebarLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
