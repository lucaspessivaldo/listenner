import PolygonSvg from "./PolygonSvg"

const featuresData = [
  {
    title: "Minimal Pairs",
    text: "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear."
  },
  {
    title: "Number",
    text: "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear."
  },
  {
    title: "Alphabet",
    text: "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear."
  }
]

export default function Features() {
  return (
    <>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8">

        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-xl mb-6 font-inter text-3xl font-semibold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
            We are focused on making it easy and effective.
          </h2>
        </div>

        <div className="grid max-w-md gap-8 row-gap-10  lg:max-w-full lg:grid-cols-3 md:max-w-full">

          <div className="flex flex-col lg:flex-row">
            <PolygonSvg />
            <div>
              <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
              <p className="mb-3 text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack never
                stopped old Big Bear.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <PolygonSvg />
            <div>
              <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
              <p className="mb-3 text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack never
                stopped old Big Bear.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <PolygonSvg />
            <div>
              <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
              <p className="mb-3 text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack never
                stopped old Big Bear.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}