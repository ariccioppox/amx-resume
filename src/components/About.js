export default function About({data}) {
    return (
      <div className="mb-6">
        <h2 className="bg-black text-cyan-250 font-bold rounded-xl w-fit mb-4">
          {data.aboutHeading}
        </h2>
        <p>
          {data.aboutBody}
        </p>
      </div>
    )
  }