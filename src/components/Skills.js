export default function Skills({data}) {
    return (
      <div className="mb-8">
        <h2 className="bg-black text-cyan-250 font-bold rounded-xl w-fit mb-4">
          {data.skHeading}
        </h2>
        <ul>
          <li>{data.sk1}</li>
          <li>{data.sk2}</li>
          <li>{data.sk3}</li>
          <li>{data.sk4}</li>
          <li>{data.sk5}</li>
          <li>{data.sk6}</li>
          <li>{data.sk7}</li>
        </ul>
      </div>
    )
  }