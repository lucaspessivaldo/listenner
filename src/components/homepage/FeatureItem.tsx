import PolygonSvg from "./PolygonSvg"

export type FeatureItemProp = {
  title: string;
  text: string;
}

export default function FeatureItem(props: FeatureItemProp) {
  return (
    <div className="flex flex-col lg:flex-row">
      <PolygonSvg />
      <div>
        <h6 className="text-transparent bg-clip-text bg-gradient-to-r text-black mb-2 font-bold leading-5">{props.title}</h6>
        <p className="mb-3 text-sm font-inter text-black">{props.text}</p>
      </div>
    </div>
  )
}
