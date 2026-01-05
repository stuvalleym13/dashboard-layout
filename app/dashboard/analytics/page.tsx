import { Suspense } from "react";
import AnalyticsPage from "./AnalyticsPage";


export default function Page() {

return (

  <>
      <Suspense fallback={<div>Loading analytics...</div>}>
      
      <AnalyticsPage/>
      
      </Suspense>
  </>
) 
}
