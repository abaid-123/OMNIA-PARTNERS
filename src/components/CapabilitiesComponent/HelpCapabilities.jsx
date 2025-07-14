import React from 'react'

const HelpCapabilities = ( {backgroundImage2}) => {
  return (
    <div className="p-8  ">
      {/* Overview */}
      <p className="text-sm text-gray-700 mb-1  capitalize">
        How we can help
      </p>
      <div className=" capitalize flex mb-4 ">
        <h1 className="capitalize font-semibold heading_w w-[30%] text-3xl">
          What we can do
        </h1>
        <hr className="block hr_show h-1  w-full mt-5 border-none bg-[radial-gradient(ellipse_at_center,_#03255b,_#e6e8ed)]" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tenetur
          repudiandae voluptas minima perspiciatis vitae quas exercitationem
          amet deserunt quam impedit, commodi rerum. Repellendus assumenda vel
          illum natus hic placeat. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Non animi, maiores pariatur corrupti fuga eius
          fugiat enim. Minima ab tenetur nostrum reprehenderit eaque sit illum,
          numquam est laudantium doloremque modi?
        </p>
      </div>
      <div className="mt-3">
        <img src={backgroundImage2} alt="" />
      </div>
    </div>
  )
}

export default HelpCapabilities