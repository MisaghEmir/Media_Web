import React from 'react'

function SmNews() {
  return (
    <div >
    <div className='w-full overflow-hidden rounded-md'>
      <img src="./image/test/2.avif" className="w-full rounded-md hover:scale-125" alt="" />
    </div>
    <div className="mt-3">
      <small className="text-color_text_23">SAUDI ARABIA</small>
      <h3 className="text-3xl font-AcuminProBold">All that glitters in the Saudi League is not gold</h3>
      <p className="text-color_text_16 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam facilis praesentium quaerat eius eaque est similique, nisi odio error sunt hic harum illum in reiciendis soluta perspiciatis asperiores. Vel molestias illo quidem ipsa laudantium quas deleniti quis perspiciatis, minus earum nisi in alias accusantium accusamus optio, omnis, recusandae fugiat!
      </p>
      <div className="flex mt-7">

      <small className="text-color_text_23">
        Eduardo Burgos Rodríguez Calum Roche <span>22/08/2024 04:29</span>
      </small>
      </div>
    </div>
  </div>
  )
}

export default SmNews