export default function Education({data}) {
    return (
      <div className="mb-8">
        <h2 className="bg-black text-cyan-250 font-bold rounded-lg w-fit mb-4">
          {data.eduHeading}
        </h2>
        <h3 className="font-bold ">
          {data.school}
        </h3>
        <p className="font-medium">
          {data.course}
        </p>
        <p>
          {data.duration}
        </p>
      </div>
    )
  }