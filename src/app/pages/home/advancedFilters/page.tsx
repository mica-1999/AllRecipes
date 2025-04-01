import AdvFilters from "@/app/components/frontPage/advancedFilters/Filters"
import { Suspense } from "react"

export default function AdvancedFilters() {
    return(
        <>
        <Suspense>
            <AdvFilters />
        </Suspense>
        </>
    )
}