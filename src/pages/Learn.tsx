import SelectCategory from '../components/learn/SelectCategory'
import MainDisplay from '../components/learn/MainDisplay'
import MinimalPairsDisplay from '../components/learn/MinimalPairsDisplay'

import type { RootState } from '../app/store'
import { useSelector } from 'react-redux'

export default function Learn() {
  const selectedTopic = useSelector((state: RootState) => state.selectedTopic.value)

  return (
    <div className="container mx-auto max-w-4xl flex flex-col items-center w-full mt-6 px-3 rounded-md h-5/6 ">
      <SelectCategory />
      {selectedTopic === 'Minimal Pair' ? <MinimalPairsDisplay /> : <MainDisplay />}
    </div>
  )
}
