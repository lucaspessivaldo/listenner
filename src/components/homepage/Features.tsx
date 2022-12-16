import FeatureItem, { FeatureItemProp } from "./FeatureItem"

const featureData: Array<FeatureItemProp> = [
  {
    title: 'More than 1000 words',
    text: 'Test your knowledge of English with our list of the 1000 most common words in English.'
  },
  {
    title: 'Minimal Pair',
    text: 'A minimal pair is two words that vary by only a single sound, usually meaning sounds that may confuse English learners.'
  },
  {
    title: 'Numbers and date',
    text: 'Practice your listening skill for english numbers and dates.'
  },
]

export default function Features() {
  return (
    <>
      <div className="px-4 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8">

        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-xl mb-6 font-inter text-3xl font-bold  sm:text-4xl md:mx-auto">
            We are focused on making it easy and effective.
          </h2>
        </div>

        <div className="grid max-w-md gap-8 row-gap-10  lg:max-w-full lg:grid-cols-3 md:max-w-full">
          {featureData.map((prop, index) => <FeatureItem key={index} title={prop.title} text={prop.text} />)}
        </div>

      </div>
    </>
  )
}
