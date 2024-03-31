import React from 'react'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="page1" element={<Page1></Page1>}>
            {/* <Route path=':id' element={<PageId></PageId>}></Route> */}
          </Route>
        </Route>
        <Route index element={<Card></Card>}></Route>
      </Routes>
    </>
  )
}

export default AppRoutes
