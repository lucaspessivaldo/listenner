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
        <h6 className="text-black mb-2 font-bold">{props.title}</h6>
        <p className="mb-3 text-sm font-inter text-black">{props.text}</p>
      </div>
    </div>
  )
}
