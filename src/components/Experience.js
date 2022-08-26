export default function Experience({data}) {
    return (
      <div className="flex flex-col h-full">
        <h2 className="bg-black text-cyan-250 font-bold rounded-lg w-fit mb-4">
          {data.expHeading}
        </h2>
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="font-bold">
              {data.exp1Title}
            </h3>
            <h4 className="font-medium">
              {data.exp1Details}
            </h4>
            <p className="mt-2">
              {data.exp1Body}
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              {data.exp2Title}
            </h3>
            <h4 className="font-medium">
             {data.exp2Details}
            </h4>
            <p className="mt-2">
              {data.exp2Body}
            </p>
          </div>
          <div>
            <h3 className="font-bold">
              {data.exp3Title}
            </h3>
            <h4 className="font-medium">
              {data.exp3Details}
            </h4>
            <p className="mt-2">
             {data.exp3Body}
            </p>
          </div>
        </div>
      </div>
    )
  }