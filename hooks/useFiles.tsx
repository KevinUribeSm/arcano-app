import { downloadParchmants, getParchmants } from "@/core/actions/files/get-parchmants.action"
import { useQuery } from "@tanstack/react-query"

export const useFiles = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['files',],
        queryFn: () => getParchmants(),
    })

    return {
        parchmantsbyMages: { data }, refetch, isLoading,
        downloadParchmants
    }
}